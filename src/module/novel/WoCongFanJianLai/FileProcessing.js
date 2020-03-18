const fs = require('fs');
const path = require('path');
const { formatIntegerFillWithZero } = require('../../../lib/util/textUtil');

const fileName = path.join(__dirname, 'WoCongFanJianLai.txt');

const splitFileDest = path.join(__dirname, 'Chapters');
const lineBreak = '\n';

console.log('fileName:', fileName);
fs.readFile(fileName, { encoding: 'utf-8' }, (err, bytesRead) => {
  if (err) {
    throw err;
  }
  const lineArr = bytesRead.split('\r\n');
  const regex = /^\s(?=[第]{0,1}[一二三四五六七八九十百千]{1,7}章\s.*$)/;
  let count = 0;
  let prefix = '';
  let singleChapterArr = [];
  lineArr.forEach(line => {
    if (regex.test(line)) {
      if (singleChapterArr.length > 0 && count > 0) {
        let title = singleChapterArr[0].trim();
        if (!title.startsWith('第')) {
          title = `第${title}`;
        }
        writeToFile(`${prefix}_${title}`, singleChapterArr, null);
      }
      count += 1;
      prefix = formatIntegerFillWithZero(count, 4);
      singleChapterArr = [];
    }
    singleChapterArr.push(line);
  });
  if (singleChapterArr.length && regex.test(singleChapterArr[0])) {
    let title = singleChapterArr[0].trim();
    if (!title.startsWith('第')) {
      title = `第${title}`;
    }
    writeToFile(`${prefix}_${title}`, singleChapterArr, null);
  }
});

const writeToFile = (fileNameParam, contentArr, callback) => {
  if (contentArr.length) {
    fs.writeFile(
      path.join(splitFileDest, fileNameParam),
      contentArr.join(lineBreak),
      err => {
        if (err) {
          throw err;
        }
        console.log('File Write Done: ', fileNameParam);
        if (typeof callback === 'function') {
          callback();
        }
      },
    );
  } else {
    console.log('ContentArr is empty: ', fileNameParam);
  }
};

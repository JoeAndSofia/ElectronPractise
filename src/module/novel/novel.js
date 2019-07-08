const fs = require('fs');
const path = require('path');

const mkdirNest = (dirname, callback) => {
	fs.exists(dirname, (exists) => {
		if(exists){
			callback();
		}else{
			mkdirNest(path.dirname(dirname), () => {
				fs.mkdir(dirname, callback);
			})
		}
	})
};

const mkdirNestSync = (dirname, callback) => {
	if(fs.existsSync(dirname)){
		return true;
	}else{
		if(mkdirNestSync(path.dirname(dirname))){
			fs.mkdirNestSync(dirname);
			return true;
		}
	}
};

const preloadFileNames = (folderPath) => {
	mkdirNestSync(folderPath);
	if(fs.existsSync(folderPath)){
		fs.readdir(folderPath, (err, files) => {
			if(err){
				throw err;
			}

			let count = files.length;
			console.log('count: ', count);
			process.exit(0);
		})
	}
};

// preloadFileNames('./WoCongFanJianLai/Chapters');

console.log(path.dirname('./WoCongFanJianLai/Chapters'));


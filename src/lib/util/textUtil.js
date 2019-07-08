const formatIntegerFillWithZero = (integerValue = 0, length) => {
	let result = ''
	if(typeof integerValue === 'number' && integerValue%1===0){
		let valueStr = integerValue.toString()
		let vsl = valueStr.length
		if(vsl < length){
			let extra = length - vsl
			let head = ''
			for(let i=0; i<extra; i++){
				head+='0'
			}
			result = head + valueStr
		}else if(vsl == length){
			result = valueStr
		}else{
			throw new Error('Given is longer than expected length')
		}
	}else{
		throw new Error('Need integer to format')
	}
	return result

}

exports.formatIntegerFillWithZero = formatIntegerFillWithZero;
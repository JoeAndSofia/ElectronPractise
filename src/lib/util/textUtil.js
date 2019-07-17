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

};

const DETAIL_INFO_TEMPLATE = {
	promo_filter:{
		sponsor: ["PARTNERSHIP_EVENT_SPONSOR", "NO_SPONSOR"]
	},
	review_filter:{
		rating: {
			RATING_MAX:0,
			RATING_MIN:0
		}
	},
	official_account_list: {
		title: "",
		description: "",
		banner: "",
		show_followable_first: 0,
		available_sorting: [
			0,
			1,
			2,
			3,
			4
		],
		default_sorting: 0,
	},
	check_number:1,
	check_string:"1",
	check_boolean:true,
	check_null:null,
	check_undefined:undefined,
	check_NaN:NaN
};

const getUnexpectedDiff = (obj, templateObj) => {
	let diff = null;
	if(!obj){
		return diff;
	}else{
		for(let i in obj){
			let tempDiff = null;
			if(obj.hasOwnProperty(i)){
				if(!(templateObj.hasOwnProperty(i))){
					tempDiff = obj[i];
				}else{
					// console.log(obj[i], templateObj[i], typeof obj[i], typeof templateObj[i]);
					if(typeof obj[i] === typeof templateObj[i]){
						if(obj[i] === null && templateObj[i] !== null){
							if(diff === null){
								diff = {};
							}
							diff[i] = null;
						}else{
							let objIsArray = Array.isArray(obj[i]);
							let targetIdArr = Array.isArray(templateObj[i]);
							if(objIsArray === targetIdArr){
								if(objIsArray){

								}else{
									let tempDiff = getUnexpectedDiff(obj[i], templateObj[i])
								}

							}else{
								tempDiff = obj[i];
							}
						}
					}else{
						tempDiff = obj[i];
					}
				}
			}
			if(tempDiff !== null){
				if(diff === null){
					diff = {};
				}
				diff[i] = tempDiff;
			}
		}
		return diff;
	}
};

let testObj = {
	promo_filter:{
		sponsor: ["PARTNERSHIP_EVENT_SPONSOR", "NO_SPONSOR"]
	},
	review_filter:null,
	unexpected_array: [],
	check_number:2,
	check_string:"",
	check_boolean:false,
	check_null:null,
	check_undefined:undefined,
	check_NaN:NaN
};

console.log(null, typeof null);
console.log(undefined, typeof undefined);
console.log(NaN, typeof NaN);
console.log("1", typeof "1");
console.log(true, typeof true);
console.log(1, typeof 1);
console.log(()=> {}, typeof (()=> {}));
console.log({}, typeof {});

console.log('result: ', getUnexpectedDiff(testObj, DETAIL_INFO_TEMPLATE));

exports.formatIntegerFillWithZero = formatIntegerFillWithZero;
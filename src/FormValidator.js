export function validateEvaluation(responses){ //check if all required fields are filled
	let errors=[]
	for(let i=0; i<responses.length; i++){
		if(JSON.stringify(Object.values(responses[i]))===JSON.stringify([])){
			errors.push(responses[i])
		}
	}
	return errors
}

export function hasError(errors){
	for(let i=0; i<errors.length; i++){
		if(Object.values(errors[i]!=="")){
			return true
		}
	}
	return false
}

export function demoFormComplete(values){	//check if all values are filled in the demographic survey
	let empty=[],incomplete=[]
	for(let i in values){
		let ob=values[i]
		if((Object.keys(ob)[0]==="q1") || (Object.keys(ob)[0]==="q2") || (Object.keys(ob)[0]==="q3")
		|| (Object.keys(ob)[0]==="q4") || (Object.keys(ob)[0]==="q6")
		|| (Object.keys(ob)[0]==="q7") || (Object.keys(ob)[0]==="q8") ){
			if(Object.values(ob)[0]===""){
				empty.push(ob)
			}
		}
		if((Object.keys(ob)[0]==="q5") || (Object.keys(ob)[0]==="q9")){
			if(Object.values(ob)[0].length===0){
				empty.push(ob)
			}
		}
		if(Object.keys(ob)[0]==="q5" || (Object.keys(ob)[0]==="q9") ){
			for(let j=0; j<Object.values(ob)[0].length; j++){
				if(Object.values(ob)[0][j].includes("other") && Object.values(ob)[1]===""){
					incomplete.push(ob)
				}
			}
		}
		if((Object.keys(ob)[0]==="q6") || (Object.keys(ob)[0]==="q7") || (Object.keys(ob)[0]==="q8")){
			if((Object.values(ob)[0].includes("other") && Object.values(ob)[1]==="")){
				incomplete.push(ob)
			} 
		}
	}
	return [empty,incomplete]
}

export function validText(values){ //only alphanumeric, whitespaces, commas are allowed in textboxes
	let errors=[]
	let regex = /^[\w\-\s,]+$/;
	for(let i in values){
		let ob=values[i]
		if(Object.keys(ob)[0]==="q5" || (Object.keys(ob)[0]==="q9")){
			for(let j=0; j<Object.values(ob)[0].length; j++){
				if(Object.values(ob)[0][j].includes("other") && Object.values(ob)[1]!==""){
					let found = Object.values(ob)[1].match(regex);
					if(found===null){ //forbidden characters are found
						errors.push(ob)
					}
				}
			}
		}else if((Object.keys(ob)[0]==="q6") || (Object.keys(ob)[0]==="q7") || (Object.keys(ob)[0]==="q8")){
			if(Object.values(ob)[0].includes("other") && Object.values(ob)[1]!==""){
				let found = Object.values(ob)[1].match(regex); 
				if(found===null){ //forbidden characters are found
					errors.push(ob)
				}
			}
		}
	}
	return errors
}

export function foundObjectInArray(arr, ob){
	for(let i=0; i<arr.length; i++){
		if(Object.keys(arr[i])[0]===Object.keys(ob)[0]){
			return true
		}
	}
	return false
}

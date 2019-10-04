export function validateEvaluation(responses){
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

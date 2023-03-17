function findNestedValue(nestedObject: Object, dotNotationString : string): Object {
	if (!dotNotationString){
		return nestedObject
	}
	return dotNotationString.split('.').reduce((obj, key) => obj?.[key], nestedObject)
}

export default findNestedValue;
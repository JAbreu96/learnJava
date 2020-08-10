function createObject() {
  // create a result variable,
  var result = {};
  // assign it to a new object
  // return the result variable
  return result;
}

var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));
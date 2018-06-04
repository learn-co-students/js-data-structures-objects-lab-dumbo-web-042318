// Write your solution in this file!
const driver = {

}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
    // const newDriver = { ...obj };
    // newDriver[key] = value;
    // return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(driver, key){
  newdriver = delete Object.assign({}, driver).name;
  return newdriver;
}
function destructivelyDeleteFromDriverByKey(obj, key){
  return delete obj[key];
  // return delete obj.key; --- cannot do. looks for the key of string "key"
}

// Write your solution in this fil
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const new_Obj = Object.assign({}, driver, {[key]: value})
  return new_Obj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const new_Obj = Object.assign({}, driver);
  delete new_Obj[key];
  return new_Obj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}

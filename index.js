// Code your solution in this file.
lowerCaseDrivers(){
  const equippedEngineers = newEngineers.map(function(eng) {
    return Object.assign({}, eng, { equipment: 'Laptop' });
});
}
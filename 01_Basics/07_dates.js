var date = new Date()

let toDateStr = date.toDateString()
let toStr = date.toString()
let toISO = date.toISOString()
let toLStr = date.toLocaleString()
let toLDSre = date.toLocaleDateString()
let toJson = date.toJSON()

console.log(toDateStr)
console.log(toStr)
console.log(toISO);
console.log(toLStr);
console.log(toLDSre);
console.log(toJson);

console.log(Date.now())

console.log(date.toLocaleString('default',{month:"long",} ))

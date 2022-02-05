//https://hackernoon.com/5-techniques-to-iterate-over-javascript-object-entries-and-their-performance-6602dcb708a8

const obj = {
	'a': 1,
	'b': 2,
	'c': 3
}

// Classic for of. Afiseaza key si value. Valoarea se mai poate accesa si in varianta clasica ex: obj['key'];
// 	for (const key in obj) {
// 		console.log(key, obj[key])
// }
//	Se poate verifica daca un key apartine unui obiect cu "key in obj" si returneaza true sau false
// console.log(key in obj)


//FOR OF

///////// Object.keys creates an array that contains the properties of an object. 
//const keysArray = Object.keys(obj);
//console.log(keysArray);
// for (const key of keysArray) {
// 	console.log(key)
// }

//// Object.values creates an array that contains the values of every property in an object
//const valuesArr = Object.values(obj);
//console.log(valuesArr);
// for (const key of valuesArr) {
// 	console.log(key)
// }


///// Object.entries creates an array of arrays. 
//Each inner array has two item.The first item is the property; the second item is the value.
// const entriesArr = Object.entries(obj);
// console.log(entriesArr);
// for (const [key, prop] of entriesArr) {
// 	console.log(key, prop);
// }

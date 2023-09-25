function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
let tempArray = array.slice(0)
const number = array.length
for (let i = 0; i < number; i++) {
	let min=findSmallestElement(tempArray)
	let temp=array[i]
	array[linearSearch(array,min)]=temp
	array[i]=min
	tempArray.splice(linearSearch(tempArray,min),1)
}
	return array;
}
function findSmallestElement(array) {
	let smallest = array[0]
	for (let i = 0; i < array.length; i++) {
		if(smallest > array[i]){
			smallest = array[i]
		}	
	}
	return smallest
}

function linearSearch(array, searchTerm) {
	for (let i = 0; i < array.length; i++) {
		if (array[i]==searchTerm) {
			return i
		}
	}
}

module.exports = selectionSort;
console.log(selectionSort([55,54,34,5,3,5,299]))
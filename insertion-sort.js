function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	 const n = array.length;

	 for (let i = 1; i < n; i++) {

	   const currentElement = array[i];
	   let j = i - 1;
   
	   while (j >= 0 && array[j] > currentElement) {
		 array[j + 1] = array[j];
		 j--;
	   }
   
	   array[j + 1] = currentElement;
	 }
   
	return array;
}

module.exports = insertionSort;

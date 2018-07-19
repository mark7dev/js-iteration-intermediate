/**
 * sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/


// ++ YOUR CODE below

function sumPositives (numbers) {
	var result = 0

	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] < 0) { 
		} else {
			result = result + numbers[i];
		}
		//console.log(result);
	}
	return result; 
} 










// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-01');
  console.log('%cFunction: sumPositives', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return 12 in the next [3, -1, 4, 5, -3, -4] series');
console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);

console.log('Should return 170 in the next [-11, 30,-20, 40, 100] series');
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);

console.log('Should return 205 in the next [4 ,-10,-30, -4, 201] series');
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);

console.log('\n')

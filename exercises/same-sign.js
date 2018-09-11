'use strict'

/*
 * Create the `sameSign` function that takes 2 numbers as arguments and check
 * if they both have the same sign
 *
 * @notions Functions, If-Else
 */

// Your code :
function sameSign (a,b)
{
	let signeDeA ;
	let signeDeB ;

	if (a > 0){
		signeDeA = "+";
	}
	else if (a === 0) {
		signeDeA = "0";
	} else {
		signeDeA = "-";
	}
	if (b > 0){
		signeDeB = "+";
	}
	else if (b === 0) {
		signeDeB = "0";
	} else {
		signeDeB = "-";
	}

	

	return signeDeA === signeDeB ;

	
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof sameSign, 'function')
assert.strictEqual(sameSign.length, 2)
assert.notStrictEqual(sameSign, Math.sameSign)
assert.strictEqual(sameSign(-2, -1), true)
assert.strictEqual(sameSign(0, 0), true)
assert.strictEqual(sameSign(12, 3232), true)
assert.strictEqual(sameSign(1, -1), false)
assert.strictEqual(sameSign(-231, 1), false)
assert.strictEqual(sameSign(-231, 0), false)
assert.strictEqual(sameSign(0, 231), false)
assert.strictEqual(sameSign(231, -233), false)
// End of tests */

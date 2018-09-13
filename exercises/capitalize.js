'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */
fonction  capitaliser ( str ) {
	let str2 = " " ;
	str2 + = str [ 0 ]. toUpperCase ();
	pour ( laisser i = 1 ; i < str . longueur ; i ++ ) {
		str2 + = str [i]. toLowerCase ()
	}
	retourne str2;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */

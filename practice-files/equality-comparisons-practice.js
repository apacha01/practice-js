////////////////////////////// Same Value Zero Equality function
function sameValueZero(x, y) {
	if (typeof x === "number" && typeof y === "number") {
		// x and y are equal (may be -0 and 0) or they are both NaN
		return x === y || (x !== x && y !== y);
	}
	return x === y;
}


////////////////////////////// Logs and comparisons
// some special chars -> [NaN, undefined, null, -0, +0, 0]

console.log("-0 & +0 comparisons");
console.log("\t-0 == +0 --> ", -0 == +0);							// true
console.log("\t-0 === +0 --> ", -0 === +0);							// true
console.log("\tObject.is(-0, +0) --> ", Object.is(-0, +0));			// false
console.log("\tsameValueZero(-0, +0) --> ", sameValueZero(-0, +0));	// true

console.log("0 & +0 comparisons");
console.log("\t0 == +0 --> ", 0 == +0);								// true
console.log("\t0 === +0 --> ", 0 === +0);							// true
console.log("\tObject.is(0, +0) --> ", Object.is(0, +0));			// true but for 0 & -0 false?
console.log("\tsameValueZero(0, +0) --> ", sameValueZero(0, +0));	// true

console.log("-0 & 0 comparisons");
console.log("\t-0 == 0 --> ", -0 == 0);								// true
console.log("\t-0 === 0 --> ", -0 === 0);							// true
console.log("\tObject.is(-0, 0) --> ", Object.is(-0, 0));			// false but for 0 & +0 true?
console.log("\tsameValueZero(-0, 0) --> ", sameValueZero(-0, 0));	// true

// ASD - find out later: so 0 = +0 but 0 != -0. Guess that the normal 0 is taken from (meaning same binary representation) the +0?

console.log();

console.log("NaN comparisons");
console.log("\tNaN == NaN --> ", NaN == NaN);							// false
console.log("\tNaN === NaN --> ", NaN === NaN);							// false
console.log("\tObject.is(NaN, NaN) --> ", Object.is(NaN, NaN));			// true
console.log("\tsameValueZero(NaN, NaN) --> ", sameValueZero(NaN, NaN));	// true

console.log();

console.log("NaN w/ null comparisons");
console.log("\tNaN == null --> ", NaN == null);								// false
console.log("\tNaN === null --> ", NaN === null);							// false
console.log("\tObject.is(NaN, null) --> ", Object.is(NaN, null));			// false
console.log("\tsameValueZero(NaN, null) --> ", sameValueZero(NaN, null));	// false

console.log();

console.log("NaN w/ undefined comparisons");
console.log("\tNaN == undefined --> ", NaN == undefined);							// false
console.log("\tNaN === undefined --> ", NaN === undefined);							// false
console.log("\tObject.is(NaN, undefined) --> ", Object.is(NaN, undefined));			// false
console.log("\tsameValueZero(NaN, undefined) --> ", sameValueZero(NaN, undefined));	// false

console.log();

console.log("undefined w/ null comparisons");
console.log("\tundefined == null --> ", undefined == null);								// true
console.log("\tundefined === null --> ", undefined === null);							// false
console.log("\tObject.is(undefined, null) --> ", Object.is(undefined, null));			// false
console.log("\tsameValueZero(undefined, null) --> ", sameValueZero(undefined, null));	// false

console.log();

console.log("0 w/ null comparisons");
console.log("\t0 == null --> ", 0 == null);								// false
console.log("\t0 === null --> ", 0 === null);							// false
console.log("\tObject.is(0, null) --> ", Object.is(0, null));			// false
console.log("\tsameValueZero(0, null) --> ", sameValueZero(0, null));	// false

console.log();

console.log("0 w/ undefined comparisons");
console.log("\t0 == undefined --> ", 0 == undefined);							// false
console.log("\t0 === undefined --> ", 0 === undefined);							// false
console.log("\tObject.is(0, undefined) --> ", Object.is(0, undefined));			// false
console.log("\tsameValueZero(0, undefined) --> ", sameValueZero(0, undefined));	// false
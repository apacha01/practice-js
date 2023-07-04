////////////////////////////// Declarations
let arrBuff = new ArrayBuffer(8);		// Array Buffer of 8 bytes
let abInt8 = new Int8Array(arrBuff);	// Int8 view on buffer
let abInt16 = new Int16Array(arrBuff);	// Int16 view on buffer
let f32 = new Float32Array(arrBuff);	// Float32 view on buffer
let f64 = new Float64Array(arrBuff);	// Float64 view on buffer
let abArray;	// Array object to transform from views


////////////////////////////// Logs
console.log("Logs for the Int8Array read/write on buffer");

console.log("setting abInt8[0] = 32, abInt8[2] = 1, abInt8[2] = 12 ...");
abInt8[0] = 32;
abInt8[1] = 1;
abInt8[2] = 12;
// --------------- 16 -------------- - --------------- 16 -------------- - --------------- 16 -------------- Little Endian
//			abInt16[0] = 8193		 - 			abInt16[1] = 3072		 - 			abInt16[2] = 0
// --------------- 16 -------------- - --------------- 16 -------------- - --------------- 16 -------------- Big Endian
//			abInt16[0] = 288		 - 			abInt16[1] = 12			 - 			abInt16[2] = 0
// -------8------- - -------8------- - -------8------- - -------8------- - -------8------- - -------8-------
// abInt8[0] = 32  - abInt8[1] = 1   - abInt8[2] = 12  - abInt8[3] = 0   - abInt8[4] = 0   - abInt8[5] = 0
// ---------------------------------------------------------------------------------------------------------
// 0 0 1 0 0 0 0 0 - 0 0 0 0 0 0 0 1 - 0 0 0 0 1 1 0 0 - 0 0 0 0 0 0 0 0 - 0 0 0 0 0 0 0 0 - 0 0 0 0 0 0 0 0 - ...

console.log("abInt8[0] = ", abInt8[0]);		// 32
console.log("abInt8[1] = ", abInt8[1]); 	// 1
console.log("abInt8[2] = ", abInt8[2]); 	// 12
console.log("abInt16[0] = ", abInt16[0]);	// 288	-> 0 0 0 0 0 0 0 1 (1) - 0 0 1 0 0 0 0 0 (32)
console.log("abInt16[1] = ", abInt16[1]);	// 12	-> 0 0 0 0 0 0 0 0 (0) - 0 0 0 0 1 1 0 0 (12)
console.log("abInt16[2] = ", abInt16[2]);	// 0

console.log();

console.log("Setting abInt8[3 - 7] (all remaining mem spaces) ...");

// --------------- 16 -------------- - --------------- 16 -------------- - --------------- 16 --------------
//	 		abInt16[1] = 3072		 - 			abInt16[2] = 256		 - 		abInt16[3] = 32768
// --------------- 16 -------------- - --------------- 16 -------------- - --------------- 16 --------------
// 	 		abInt16[1] = 12			 - 			abInt16[2] = 1			 - 		abInt16[3] = 128
// -------8------- - -------8------- - -------8------- - -------8------- - -------8------- - -------8-------
//  abInt8[2] = 12 - abInt8[3] = 128 -  abInt8[4] = 1  -  abInt8[5] = 0  - abInt8[6] = 128  - abInt8[7] = 0
// --------------------------------------------------------------------- - ---------------------------------
// 0 0 0 0 1 1 0 0 - 1 0 0 0 0 0 0 0 - 0 0 0 0 0 0 0 1 - 0 0 0 0 0 0 0 0 - 1 0 0 0 0 0 0 0 - 0 0 0 0 0 0 0 0


abInt8[3] = 128;
abInt8[4] = 1;
abInt8[5] = 0;
abInt8[6] = 128;
abInt8[7] = 0;

console.log("abInt16[2] = ", abInt16[2]);	// 1
console.log("abInt16[3] = ", abInt16[3]);	// 128

console.log();

console.log("Using the float view");
console.log("f32[0] = ", f32[0]);
console.log("f32[1] = ", f32[1]);
console.log("f64[0] = ", f64[0]);

console.log();

console.log("Converting to Array");

abInt8[3] = 0;
abArray = Array.from(abInt16);
console.log("abInt16 when transformed to array (with abInt8[3] = 0) = ", abArray);		// [ 288, 12, 1, 128 ]

abInt8[3] = 128;
abArray = Array.from(abInt16);
console.log("abInt16 when transformed to array (with abInt8[3] = 128) = ", abArray);	// [ 288, -32756, 1, 128 ]

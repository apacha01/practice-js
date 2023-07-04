////////////////////////////// Declarations
let arrBuff = new ArrayBuffer(8);		// Array Buffer of 8 bytes
let abInt8 = new Int8Array(arrBuff);	// Int8 view on buffer
let abInt16 = new Int16Array(arrBuff);	// Int16 view on buffer




////////////////////////////// Logs
console.log("Logs for the Int8Array read/write on buffer");

console.log("setting abInt8[0] = 32, abInt8[2] = 1, abInt8[2] = 12 ...");
abInt8[0] = 32
abInt8[1] = 1
abInt8[2] = 12
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
console.log();
console.log("abInt16[0] = ", abInt16[0]);	// 288	-> 0 0 0 0 0 0 0 1 (1) - 0 0 1 0 0 0 0 0 (32)
console.log("abInt16[1] = ", abInt16[1]);	// 12	-> 0 0 0 0 0 0 0 0 (0) - 0 0 0 0 1 1 0 0 (12)
console.log("abInt16[2] = ", abInt16[2]);	// 0










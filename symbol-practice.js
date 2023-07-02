let s0 = Symbol();
let s1 = Symbol();
let s2 = Symbol("key");
let s3 = Symbol("key");
let s4 = Symbol("another-key");
let s5 = Symbol("another-other-key");

let sk0 = Symbol.for("for-key")
let sk1 = Symbol.for("for-key")

///////////////////// Console log of simple symbols call
console.log("Console log of simple symbols call");

console.log("s0:", s0);
console.log("s1:", s1);
console.log("s2:", s2);
console.log("s3:", s3);
console.log("s4:", s4);
console.log("s5:", s5);


console.log();


///////////////////// Console log of simple symbols call comparisons
console.log("Console log of simple symbols call comparisons");

console.log("s0 == s1 =", s0 == s1);
console.log("s0 === s1 =", s0 === s1);

console.log("s2 == s3 =", s2 == s3);
console.log("s2 === s3 =", s2 === s3);


console.log();


///////////////////// Console log of symbols.for call
console.log("Console log of symbols.for call");

console.log("sk0:", sk0);
console.log("sk1:", sk1);


console.log();


///////////////////// Console log of symbols.for call comparisons
console.log("Console log of symbols.for call comparisons");

console.log("sk0 == sk1 =", sk0 == sk1);
console.log("sk0 === sk1 =", sk0 === sk1);

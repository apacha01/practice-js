////////////////////////////// Declarations
const promTest = (res, rej) => { setTimeout(() => res("promTest"), 100); }
const timoutPromTest = (res, rej) => { setTimeout(() => res("timoutTest res"), 100); setTimeout(() => rej("timoutTest rej"), 10); }
const timoutPromTest2 = (res, rej) => { setTimeout(() => res("timoutTest2 res"), 100); rej("timoutTest2 rej"); }
const timoutPromTest3 = (res, rej) => { setTimeout(() => res("timoutTest3 res"), 10); setTimeout(() => rej("timoutTest3 rej"), 100); }

const f1 = () => console.log("\t\t", 1);
const f2 = () => console.log("\t\t", 2);
const f3 = () => {return new Promise((res) => setTimeout(res(f1), 1000));}
const f4 = () => {return new Promise((res) => setTimeout(res(f2), 2000));}

const fa3 = async () => {console.log("\t\t\tFirst"); let result = await f3(); console.log("\t\t\t", result); result();}
const fa4 = async () => {console.log("\t\t\tFirst"); let result = await f4(); console.log("\t\t\t", result); result();}

////////////////////////////// Logs
console.log("Starting tests...");
// console.log("\tFirst Test:");
// const p = new Promise(promTest);
// console.log("\t\tWritten before the call on then().");
// p.then((value) => console.log("\t\tWritten on the then() function. value:", value));
/**
 *	First Test:
		Written before the call on then().
		Written on the then() function. value: promTest
 */

// console.log("\tSecond Test:");
// const p = new Promise(promTest);
// p.then((value) => console.log("\t\tWritten on the then() function. value:", value));
// console.log("\t\tWritten after the call on then().");
/**
 *	Second Test:
		Written after the call on then().
		Written on the then() function. value: promTest
 */

// console.log("\tThird Test:");
// const p = new Promise(timoutPromTest);
// p.then((val) => console.log("\t\t\tval:", val), (val) => console.log("\t\t\tval:", val));
// console.log("\t\tCall on timoutTest (resolves FIRST after 100 and rejects after 10 ms):");
/**
 *	Third Test:
		Call on timoutTest (resolves after 100 and rejects after 10 ms):
			val: timoutTest rej
 */

// console.log("\tFourth Test:");
// const p = new Promise(timoutPromTest2);
// p.then((val) => console.log("\t\t\tval:", val), (val) => console.log("\t\t\tval:", val));
// console.log("\t\tCall on timoutTest (resolves FIRST after 100 ms and rejects immediatly after):");
/**
 *	Fourth Test:
		Call on timoutTest (resolves FIRST after 100 ms and rejects immediatly after):
			val: timoutTest2 rej
 */

// console.log("\tFifth Test:");
// const p = new Promise(timoutPromTest3);
// p.then((val) => console.log("\t\t\tval:", val), (val) => console.log("\t\t\tval:", val));
// console.log("\t\tCall on timoutTest (resolves FIRST after 10 and rejects after 100 ms):");
/**
 *	Fifth Test:
		Call on timoutTest (resolves FIRST after 10 and rejects after 100 ms):
			val: timoutTest3 res
 */

// console.log("\tSixth Test:");
// console.log("\t\tasync / await:");
// fa3();
/**
 *	Sixth Test:
		async / await:
			First
			[Function: f1]
		1
 */

// console.log("\tSeventh Test:");
// console.log("\t\tasync / await:");
// fa3();
// fa4();
/**
 *	Seventh Test:
		async / await:
			First
			First
			[Function: f1]
		1
			[Function: f2]
		2
	
	so the await is only for the scope where it is called?
	Expected output:
		First
		[Function: f1]
		1
		First
		[Function: f2]
		2
	MDN: Using await pauses the execution of its surrounding async function until the promise is settled. 
					 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */

console.log("Non Promise Test:");
console.log("\tFirst Test:");
setTimeout(() => f1(), 0)
f2()
/**
 *	First Test:
		2
		1
 */

////////////////////////////// Declarations
/**
 * Specs:
 * 	Notebook: X551MA (ASUS-NotebookSKU)
 * 	CPU: Intel(R) Celeron(R) CPU  N2830  @ 2.16GHz
 * 	Memory: 4GiB DDR3 1333 MHz
 * 	OS: Linux pop-os 6.2.6-76060206-generic #202303130630~1685473338~22.04~995127e SMP PREEMPT_DYNAMIC Tue M x86_64 x86_64 x86_64 GNU/Linux
 * 	Nodejs version: v18.16.1
 */

// Empty class and empty function
class C {}
function P(){}

// Empty class and empty function that inherits from the empty class / prototype above
class C2 extends C{}
function P2(){}
Object.setPrototypeOf(P2.prototype, P.prototype);

// Empty class and empty function that inherits from a non empty class / prototype
class C3 extends Date{}
function P3(){}
Object.setPrototypeOf(P3.prototype, Date.prototype);

// tests
const nClassesInstances = function (n) {
	let start = Date.now();

	for (let i = 0; i < n; i++) {
		new C();
	}

	let finish = Date.now();
	let timePassed = finish - start;
	return timePassed;
}

const nProtosInstances = function (n) {
	let start = Date.now();

	for (let i = 0; i < n; i++) {
		new P();
	}

	let finish = Date.now();
	let timePassed = finish - start;
	return timePassed;
}

const nInheritedClasses = function (n) {
	let start = Date.now();

	for (let i = 0; i < n; i++) {
		new C2();
	}

	let finish = Date.now();
	let timePassed = finish - start;
	return timePassed;
}

const nInheritedProtos = function (n) {
	let start = Date.now();

	for (let i = 0; i < n; i++) {
		new P2();
	}

	let finish = Date.now();
	let timePassed = finish - start;
	return timePassed;
}

const nHeavyInheritedClasses = function (n) {
	let start = Date.now();

	for (let i = 0; i < n; i++) {
		new C3();
	}

	let finish = Date.now();
	let timePassed = finish - start;
	return timePassed;
}

const nHeavyInheritedProtos = function (n) {
	let start = Date.now();

	for (let i = 0; i < n; i++) {
		new P3();
	}

	let finish = Date.now();
	let timePassed = finish - start;
	return timePassed;
}

const runEmptyInstancesTest = function (n, amount) {
	let totalClassTime = 0;
	let totalProtoTime = 0;

	for (let i = 0; i < amount; i++) {
		totalClassTime += nClassesInstances(n);
		totalProtoTime += nProtosInstances(n);
	}

	return [totalClassTime/amount, totalProtoTime/amount];
}

const runEmptyInstancesInhertitedTest = function (n, amount) {
	let totalClassTime = 0;
	let totalProtoTime = 0;

	for (let i = 0; i < amount; i++) {
		totalClassTime += nInheritedClasses(n);
		totalProtoTime += nInheritedProtos(n);
	}

	return [totalClassTime/amount, totalProtoTime/amount];
}

const runEmptyInstancesHeavyInheritedTest = function (n, amount) {
	let totalClassTime = 0;
	let totalProtoTime = 0;

	for (let i = 0; i < amount; i++) {
		totalClassTime += nHeavyInheritedClasses(n);
		totalProtoTime += nHeavyInheritedProtos(n);
	}

	return [totalClassTime/amount, totalProtoTime/amount];
}
////////////////////////////// logs
// Empty instances tests with 100, 1000, 10000 and 100000 instances runed 100000 times (for an avg time)
// console.log("Performance tests on empty classes / protos:");
// console.log("\tAVG value of creating 100 instaces 100000 times:");
// let times = runEmptyInstancesTest(100, 100000);
// console.log("\t\tClasses: ", times[0], "ms");	// 0.00062 ms
// console.log("\t\tProtos:", times[1], "ms");		// 0.00066 ms

// console.log();

// console.log("\tAVG value of creating 1000 instaces 100000 times:");
// times = runEmptyInstancesTest(1000, 100000);
// console.log("\t\tClasses: ", times[0], "ms");	// 0.00211 ms
// console.log("\t\tProtos:", times[1], "ms");		// 0.0028 ms

// console.log();

// console.log("\tAVG value of creating 10000 instaces 100000 times:");
// times = runEmptyInstancesTest(10000, 100000);
// console.log("\t\tClasses: ", times[0], "ms");	// 0.01696 ms
// console.log("\t\tProtos:", times[1], "ms");		// 0.01708 ms

// console.log();

// console.log("\tAVG value of creating 100000 instaces 100000 times:");
// times = runEmptyInstancesTest(100000, 100000);
// console.log("\t\tClasses: ", times[0], "ms");	// 0.16142 ms
// console.log("\t\tProtos:", times[1], "ms");		// 0.17313 ms

// Relatively equal, could be count as margin error, but protos are about 9.75% slower in avg

// console.log();

// Empty instances with empty inheritance tests on 100, 1000, 10000 and 100000 instances runed 100000 times (for avg time)
// console.log("Performance tests on empty classes / protos inherited from another empty class / proto:");
// let times = runEmptyInstancesInhertitedTest(100, 100000);
// console.log("\tAVG value of 100 instances 100000 times:");
// console.log("\t\tClass: ", times[0], "ms");	// 0.00202 ms
// console.log("\t\tProto: ", times[1], "ms");	// 0.00045 ms

// console.log();

// times = runEmptyInstancesInhertitedTest(1000, 100000);
// console.log("\tAVG value of 1000 instances 100000 times:");
// console.log("\t\tClass: ", times[0], "ms"); // 0.01663 ms
// console.log("\t\tProto: ", times[1], "ms"); // 0.00201 ms

// console.log();

// times = runEmptyInstancesInhertitedTest(10000, 100000);
// console.log("\tAVG value of 10000 instances 100000 times:");
// console.log("\t\tClass: ", times[0], "ms");	// 0.15133 ms
// console.log("\t\tProto: ", times[1], "ms");	// 0.01732 ms

// console.log();

// times = runEmptyInstancesInhertitedTest(100000, 100000);
// console.log("\tAVG value of 100000 instances 100000 times:");
// console.log("\t\tClass: ", times[0], "ms");	// 1.59372 ms
// console.log("\t\tProto: ", times[1], "ms");	// 0.20645 ms

// Protos are 4.48 (100), 8.27 (1000), 8.74 (10000) and 7.72 (100000) times faster than classes.

// console.log();

// Empty instances with Date inheritance tests on 100, 1000, 10000 and 100000 instances runed 100000 times (for avg time)
console.log("Performance tests on empty classes / protos inherited form Date:");
let times = runEmptyInstancesHeavyInheritedTest(100, 100000);
console.log("\tAVG value of 100 instances 100000 times:");
console.log("\t\tClass: ", times[0], "ms");	// 0.04123
console.log("\t\tProto: ", times[1], "ms");	// 0.00025

console.log();

times = runEmptyInstancesHeavyInheritedTest(1000, 100000);
console.log("\tAVG value of 1000 instances 100000 times:");
console.log("\t\tClass: ", times[0], "ms"); // 0.39602
console.log("\t\tProto: ", times[1], "ms"); // 0.00196

console.log();

times = runEmptyInstancesHeavyInheritedTest(10000, 100000);
console.log("\tAVG value of 10000 instances 100000 times:");
console.log("\t\tClass: ", times[0], "ms");	// 3.80575
console.log("\t\tProto: ", times[1], "ms");	// 0.0168

console.log();

times = runEmptyInstancesHeavyInheritedTest(100000, 100000);
console.log("\tAVG value of 100000 instances 100000 times:");
console.log("\t\tClass: ", times[0], "ms");	// 37.58608
console.log("\t\tProto: ", times[1], "ms");	// 0.16857

// Protos are 164.92 (100), 202.02 (1000), 226.53 (10000) and 222.97 (100000) times faster than classes.
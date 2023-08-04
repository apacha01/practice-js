///////////////////////////// Node JS
let fs = require('fs');

///////////////////////////// Functions / Objects
// Iterator Protocol: must have a next() method that returns an object like {value: obj, done: boolean}
const makeStringIterator = (s) => {
	let i = 0, len = s.length;
	return {
		next: () => {
			if (i >= len) return { value: undefined, done: true };
			return { value: s[i++], done: false };
		}
	}
}

const makeLoopStringIterator = (s, n) => {
	let i = 0, len = s.length, times = 0;
	return {
		next: () => {
			if (i >= len) { i = 0; times++; }
			if (times === n) return { value: undefined, done: true };
			return { value: s[i++], done: false };
		}
	}
}

const makeFileIterator = (path) => {
	let lines = fs.readFileSync(path, 'utf8').split('\n');
	let i = 0;
	return {
		next: () => {
			if (i >= lines.length) return { value: undefined, done: true }
			return { value: lines[i++], done: false }
		}
	}
}

// Generators: return an iterable iterator
// "function" generators
const fiboNotGen = () => {
	let i = 0, j = 1, t;
	return {
		next: () => {
			let ans = { value: j, done: false };
			t = i;
			i = j;
			j += t;
			return ans;
		}
	}
}

const fibGenIter = (n) => {
	let i = 0, j = 1, t, index = 0;

	const fib = () => {
		if (index >= n) return { value: undefined, done: true };
		let ans = { value: j, done: false };
		t = i;
		i = j;
		j += t;
		index++;
		return ans;
	}

	return {
		next: fib,
		[Symbol.iterator]: () => {
			return {
				next: fib,
			}
		},
	}
}

// "function*" generators
const pauseTimerGen = function* () {
	let start = Date.now();
	for (let i = 0; true; i++) {
		yield Date.now() - start;
	}
}

const multiIterablesGen = function* (/**/) {
	let iters = Array.prototype.slice.call(arguments);

	for (let i = 0; i < iters.length; i++) {
		if (!iters[i][Symbol.iterator]) yield* Object.keys(iters[i]); 
		else yield* iters[i];
	}
}

///////////////////////////// Logs
// ITERATORS
console.log("********** Iterators logs **********");
console.log("\tNormal Iterator on a String (string 'Hello World!')");
let it = makeStringIterator("Hello World!");
let o = it.next();
while (!o.done) {
	console.log("\t\t", o);
	o = it.next();
}
console.log("\t\t", it.next());

console.log();

console.log("\tLoop Iterator on a String (string 'abc' looped 5 times)");
let lit = makeLoopStringIterator("abc", 5);
let o2 = lit.next();
while (!o2.done) {
	console.log("\t\t", o2);
	o2 = lit.next();
}
console.log("\t\t", lit.next());

console.log();

console.log("\tFile lines iterator with specified path ('./test-files/iterator-test.txt')");
let fit = makeFileIterator('./test-files/iterator-test.txt');
let o3 = fit.next();
while (!o3.done) {
	console.log("\t\t", o3);
	o3 = fit.next();
}
console.log("\t\t", fit.next());

console.log();

// GENERATORS
console.log("********** Generators logs **********");
console.log("\tFibonacci Generator returning an iterator (normal for)");
let fibSeq = fiboNotGen();
for (let i = 0; i < 10; i++) {
	console.log("\t\t", fibSeq.next());
}
// for (const f of fibSeq) {
// 	console.log(f);
// }
// ERROR: TypeError: fibSeq is not iterable

console.log();

console.log("\tFibonacci Generator returning an iterable iterator (for of)");
let fibSeqIter = fibGenIter(10);
for (const f of fibSeqIter) {
	console.log("\t\t", f);
}

console.log();

console.log("\tPause Timer Generator returns the time that passed in ms since last .next()");
let timerIter = pauseTimerGen();
for (let i = 0; i < 3; i++) {
	console.log('\t\twhitin for loop', timerIter.next());
}
// Shows after later tests so commented
// setTimeout(() => {console.log('\t\tsetTimout(100)', timerIter.next());}, 100);
// 		setTimout(100) { value: 116, done: false }
// setTimeout(() => {console.log('\t\tsetTimout(500)', timerIter.next());}, 500);
// 		setTimout(500) { value: 517, done: false }
// setTimeout(() => {console.log('\t\tsetTimout(1000)', timerIter.next());}, 1000);
//		setTimout(1000) { value: 1017, done: false }

console.log();

console.log("\tMultiple Iterables Generator returns all items of the iterables passed as arguments ([1,2,3], {a:1, b:2}, [4,5,6])");
let multierGen = multiIterablesGen([1, 2, 3], { a: 1, b: 2 }, [4, 5, 6]);
for (const elem of multierGen) {
	console.log("\t\t", elem);
}
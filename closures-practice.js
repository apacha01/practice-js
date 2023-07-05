////////////////////////////// Functions/Variables declaration
var c = "global var";
var c2 = "more global vars";

function closureTest() {
	var c = "in closureTest()";
	return () => c;
}

function closureTest2() {
	var c = "in closureTest2()";

	function inClosureTest2() {
		console.log(c);
	}

	inClosureTest2();

	return inClosureTest2;
}

function closureTest3(input = "default input") {
	function inClosureTest3() {
		return function inInClosureTest3() {
			return c + " - " + input;
		};
	}

	return inClosureTest3;
}

function appendPhonePrefix(prefix) {
	return (phone) => prefix + " " + phone;
}

const makePrivateVariable = function () {
	var privateVar = "private variable";

	function changeRandomly() {
		privateVar = "";
		for (let i = 0; i < 10; i++) {
			privateVar += String.fromCharCode(Math.round((Math.random() * 100)));
		}
	}
	function getPrivateVar() { return privateVar; }
	function setPrivateVar(val) { privateVar = val; }
	function goCrazy() { changeRandomly() }

	return { getPrivateVar, setPrivateVar, goCrazy }

};



////////////////////////////// Logs
console.log("Closure tests 1");
console.log("\t", closureTest());
console.log("\t", closureTest()());

console.log();

console.log("Closure tests 2");
console.log("\t", closureTest2());
console.log("\t", closureTest2()());

console.log();

console.log("Closure tests 3");
console.log("\t", closureTest3());
console.log("\t", closureTest3("not default input")());
console.log("\t", closureTest3("not default input")()());

console.log();

console.log("Phone functions tests (function factory)");
const aCountryPrefix = appendPhonePrefix("+123");
const bCountryPrefix = appendPhonePrefix("+456");
const cCountryPrefix = appendPhonePrefix("+789");
const dCountryPrefix = appendPhonePrefix("+147");
console.log("\taCountryPrefix => ", aCountryPrefix("000000"));
console.log("\tbCountryPrefix => ", bCountryPrefix("111111"));
console.log("\tcCountryPrefix => ", cCountryPrefix("222222"));
console.log("\tdCountryPrefix => ", dCountryPrefix("333333"));

console.log();

console.log("Emultaing private variables and methods");
const priv = makePrivateVariable();
const priv2 = makePrivateVariable();

console.log("\tpriv.privateVar = ", priv.privateVar);
console.log("\tpriv.getPrivateVar = ", priv.getPrivateVar());
console.log("\tpriv.setPrivateVar = ", priv.setPrivateVar("new private variable"));
console.log("\tpriv.getPrivateVar = ", priv.getPrivateVar());
console.log("\tpriv.goCrazy = ", priv.goCrazy());
console.log("\tpriv.getPrivateVar = ", priv.getPrivateVar());
// console.log("\tpriv.changeRandomly = ", priv.changeRandomly());	// TypeError: priv.changeRandomly is not a function
// console.log("\tpriv.getPrivateVar = ", priv.getPrivateVar());
console.log("\tpriv2.getPrivateVar = ", priv2.getPrivateVar());		// independent from priv

console.log();

console.log("Random tests");
var a = 1;

console.log("Test 1");
(function () {
	console.log("\t", a);
})();

console.log("Test 2");
(function () {
	var a = 2;
	console.log("\t", a);
})();

console.log("Test 3");
var x = (function () {
	var a = 3;
	return (function () {
		console.log("\t", a);
	});
})();
x();

console.log("Test 4");
x = (function () {
	var y = function () {
		var a = 4;
	};
	return function () {
		console.log("\t", a);
	}
})();
x();

console.log("Test 5");
x = (function () {
	(function () {
		a = 5;
	})();
	return (function () {
		console.log("\t", a);
	});
})();
x();

a = 1;	// Reset after test 5 reassignment

console.log("Test 6");
(function () {
	var a = 6;
	x = function () {
		console.log("\t", a);
	}
})();
x();

console.log("Test 7");
x = (function () {
	(function () {
		var a = 5;
	})();
	return (function () {
		console.log("\t", a);
	});
})();
x();
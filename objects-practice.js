////////////////////////////// Objects / prototypes declaration
const jhon = {
	name: "Jhon",
	age: 35,
}

const personPrototype = {
	greet() {
		console.log("hello");
	}
};

const personPrototype2 = {
	greet() {
		console.log("hello i'm", this.name);
	}
};

const peter = Object.create(personPrototype2);

function Person(name){
	this.name = name;
}

const newProtoWay = {
	name: "the prototype property",
	__proto__: personPrototype2,
}

////////////////////////////// logs
console.log("jhon.__proto__", jhon.__proto__);						// [Object: null prototype] {}
console.log("jhon.__proto__.__proto__", jhon.__proto__.__proto__);	// null

// console.log("Calling jhon.greet() before assignment");
// jhon.greet(); // TypeError: jhon.greet is not a function

console.log("Calling jhon.greet() after assignment");
jhon.__proto__ = personPrototype;
jhon.greet();	// hello
console.log("jhon.__proto__", jhon.__proto__);											// { greet: [Function: greet] }
console.log("jhon.__proto__.__proto__", jhon.__proto__.__proto__);						// [Object: null prototype] {}
console.log("jhon.__proto__.__proto__.__proto__", jhon.__proto__.__proto__.__proto__);	// null

console.log();

console.log("Calling jhon.greet() after assignment 2");
jhon.__proto__ = personPrototype2;
jhon.greet();	// hello i'm jhon

console.log();

console.log("Calling peter.greet() (created with Object.create(proto))");
peter.greet();	// hello i'm undefined
peter.name = "peter"
peter.greet();	// hello i'm peter

console.log();

console.log("Creating objects martin and merli and assigning prototypes");
const martin = new Person("martin")
console.log(martin.name);
console.log("martin.__proto__", martin.__proto__);											// {}
console.log("martin.__proto__.__proto__", martin.__proto__.__proto__);						// [Object: null prototype] {}
console.log("martin.__proto__.__proto__.__proto__", martin.__proto__.__proto__.__proto__);	// null

console.log();

Object.assign(Person.__proto__, personPrototype2);	// does nothing
Object.assign(Person.prototype, personPrototype2);	// works fine

const merli = new Person("merli");
console.log(merli.name);
console.log("merli.__proto__", merli.__proto__);											// { greet: [Function: greet] }
console.log("merli.__proto__.__proto__", merli.__proto__.__proto__);						// [Object: null prototype] {}
console.log("merli.__proto__.__proto__.__proto__", merli.__proto__.__proto__.__proto__);	// null

console.log();

console.log("Shadowing property toString()");
console.log("Before shadowing:", merli.toString());	// [object Object]

// V1
merli.toString = () => "My name is " + merli.name;

// V2
// merli.toString = () => "My name is " + this.name;	// My name is undefined ???

// V3
// function getName (obj) {"My name is " + obj.name;}
// merli.toString = () => getName(this);				// My name is undefined ???

console.log("After shadowing:", merli.toString());	// My name is merli

console.log();

console.log("Calling on .__proto__ with syntax constructs for setting the [[Prototype]] property");
newProtoWay.greet();	// hello i'm the prototype property
console.log("newProtoWay.__proto__ ->", newProtoWay.__proto__);						// { greet: [Function: greet] }
console.log("newProtoWay.__proto__.__proto__ ->", newProtoWay.__proto__.__proto__);	// [Object: null prototype] {}
console.log("newProtoWay.__proto__.__proto__.__proto__ ->", newProtoWay.__proto__.__proto__.__proto__);	// null

console.log();

console.log("Calling on .__proto__ with Object.setPrototypeOf() for setting the [[Prototype]] property");
Object.setPrototypeOf(newProtoWay, personPrototype);
newProtoWay.greet();	// hello




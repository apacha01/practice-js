////////////////////////////// Functions / Objects / Classes
function retThisFunc(){return this;}
const retThisArrow = () => this;

const obj = {
	a: 1,
	retThis(){return this;}
}

class Dog {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	pet() {return "thks for the pet";}

	bark() {return "bark bark";}
}

class Cat {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	meow() {return "meow meow";}
}

////////////////////////////// Logs
console.log("'this' logs");
console.log("\tin a function:", retThisFunc());
console.log("\tin a method:", obj.retThis());
console.log("\talone:", this);
console.log("\tin arrow function:", retThisArrow());

console.log();

console.log("'this' with call(), apply() and bind() to the same object");
console.log("\tnormal functions");
const retThisFuncBind = retThisFunc.bind(obj);
console.log("\t\tretThisFunc.call(obj) =>", retThisFunc.call(obj));
console.log("\t\tretThisFunc.apply(obj) =>", retThisFunc.apply(obj));
console.log("\t\tretThisFuncBind() =>", retThisFuncBind());

console.log("\tarrow functions");
const retThisArrowBind = retThisArrow.bind(obj);
console.log("\t\tretThisArrow.call(obj) =>", retThisArrow.call(obj));
console.log("\t\tretThisArrow.apply(obj) =>", retThisArrow.apply(obj));
console.log("\t\tretThisArrowBind() =>", retThisArrowBind());

console.log();

console.log("function borrowing tests");
const d = new Dog("doggie", 1);
const c = new Cat("doggie", 1);

console.log("\twithout borrowing");
console.log("\t\td.pet() => ", d.pet());
console.log("\t\td.bark() => ", d.bark());
// console.log("\t\tc.pet() => ", c.pet());	// TypeError: c.pet is not a function
console.log("\t\tc.pet() => ", "TypeError: c.pet is not a function");
console.log("\t\tc.meow() => ", c.meow());

console.log("\twith borrowing");
console.log("\t\td.pet() => ", d.pet());
console.log("\t\td.bark() => ", d.bark());
console.log("\t\td.pet.call(c) => ", d.pet.call(c));	// c.pet() still doesn't work, so it's a one time use
														// changing prototype of Cat would add the function to c
														// (and all other instances of Cat).
console.log("\t\tc.meow() => ", c.meow());

console.log("\twith .prototype changes");
Cat.prototype.pet = Dog.prototype.pet;
console.log("\t\td.pet() => ", d.pet());
console.log("\t\td.bark() => ", d.bark());
console.log("\t\tc.pet() => ", c.pet());
console.log("\t\tc.meow() => ", c.meow());

const c2 = new Cat("cat2", 2);
console.log("[another instance of Cat] c2.pet() => ", c2.pet());





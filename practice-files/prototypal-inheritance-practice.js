////////////////////////////// Objects / prototypes declaration
function Animal(name, race) {
	this.name = name;
	this.race = race;
}

function Dog(name) {this.name = name;}

Dog.prototype.race = "dog";

const d = new Dog("peter");


////////////////////////////// logs
console.log("Function Dog(name) logs");
console.log("d object. Race: ", d.race, "Name: ", d.name);


console.log();

// corollary
Dog.prototype.race = "not a dog";

const d2 = new Dog("sopts")
console.log("Logs after the corollary of Dog.prototype.race");
console.log("d object. Race: ", d.race, "Name: ", d.name);		// changed (as theory says)
console.log("d2 object. Race: ", d2.race, "Name: ", d2.name);

console.log();

// trying monkey patching
console.log("Monkey Patching logs for Array.prototype.___sumAll()");
Array.prototype.____sumAll = function () {return this.reduce((a, b) => a + b)}

let a = [1,2,3,4,5];
let b = [1,0,"A","b"];
let c = [1,"A",0,"b"];

console.log(a, " -> ", a.____sumAll());	// 15
console.log(b, " -> ", b.____sumAll());	// 1Ab
console.log(c, " -> ", c.____sumAll());	// 1A0b

















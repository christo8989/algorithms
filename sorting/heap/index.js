import { Clock } from "../../tools/clock";

var foo = new Clock();

const random = () => { return Math.floor(Math.random() * 10) }
const numbers = Array.from({ length: 10 }, () => random());
console.log(numbers.join(" "));

const heap = () => {

}

console.log(numbers.join(" "))

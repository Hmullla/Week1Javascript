let s  = "All around the world";
let line = s.charAt(8).toUpperCase();
console.log(line);

let i = 10
i += 2;
console.log(i)

let favouriteDrink = "coffee"
console.log("My favourite drink is " + favouriteDrink);

let name = 'bob'
let age = '21'
let favColour = 'Red'

console.log(`Hello my name is ${name} and I am ${age} years old. My favourite colour is ${favColour}`)

name = 'Ted'
age = '22'
favColour = 'Orange'

console.log(`Hello my name is ${name} and I am ${age} years old. My favourite colour is ${favColour}`)

let breakfast = 'cereal'
let lunch = 'pasta'
let dinner = 'pie'

console.log(`Today i ate ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`)

breakfast = 'toast'
lunch = 'soup'
dinner = 'chicken'

console.log(`Tommorow I will eat ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`)

var date1 = new Date("07/12/2022");
var date2 = new Date("07/20/2022");
var diffrenceInTime = date2.getTime() - date1.getTime();
let msInDay = (1000 * 3600 * 24);
var diffrenceInDays = diffrenceInTime / msInDay;
console.log(`The number of days between now and my birthday is ${diffrenceInDays}`);

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

let down = "  |   |  ";
let line1 =`${space1} | ${space2} | ${space3}`
let line2 =`${space4} | ${space5} | ${space6}`
let line3 =`${space7} | ${space8} | ${space9}`
let across = "---------"

array = [down,line1,down,across,down,line2,down,across,down,line3,down]
console.log(array.join('\n'));

console.log("\n");


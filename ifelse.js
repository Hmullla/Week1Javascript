let age2 = 21;
let country = "UK"

if (age2 >= 17 && country == "UK")
{
    console.log("Yes I can serve you");
}
else
{
    console.log("You are not old enough");
}

let pizzaTopping = "cheese";

switch (pizzaTopping){
    case "cheese":
    case "tomato":
    case "basil":
        console.log("These are important ingrediants for my pizza");
        break;
    case "peperoni":
         console.log("I dont mind having pepperoni on my pizza");
         break;
    default:
        console.log("This topping should not be on pizza");
        break;
}

let password = "password";
let passwordLength = password.length;
if (passwordLength >= 8){
    console.log(password);
}
else{
    console.log("the password is too short!");
}

let num = 20;

if (num % 3==0 || num % 5==0){
    console.log("This number is divisible by 3 or 5");
}
else{
    console.log("This number is not divisible by 3 or 5");
}

let num2 = 30;

if (num2 % 3==0){
    console.log("Fizz");
}
else if(num2 % 5==0){
    console.log("Buzz");
}
else if(num2 % 3==0 && num2 % 5==0){
    console.log("Fizz Buzz");
}
else{
    console.log(num2);
}

num = "2002"

numArray = num.split("")
numArrayReversed = numArray.reverse()
numReversed = numArrayReversed.join("")

if (num == numReversed) {
  console.log("Yep, that's a palindrome.")
} else {
  console.log("No, that's not a palindrome.")
}

let time = "7:00"
let placeOfWork = "Office"
let townOfHome = "Manchester"

if (time == "5:30 am" && townOfHome == "Manchester"){
    console.log("I am at home");
} else if (time == "7:00 am"){
    ("I am commuting");
} else if (time == "8:00 am" && placeOfWork == "Office"){
    console.log("I am at work");
} else {
    console.log("");
}

let num3 = 5;
let num4 = 8;
let sum = num3 + num4
if (sum % 2==0){
    console.log(sum);
}
else{
    console.log(num3 * num4);
}
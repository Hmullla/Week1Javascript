let favDrinks = [
    "Coke",
    "Fanta",
    "Lemonade"
]

console.log(favDrinks);

let favSongs = [
    "California dreamin - The mamas and papas",
    "Try me - The Weeknd",
    "Tonight - Summer Walker"
]
favSongs.push("Stars Align - Majid Jordan", "Everyday - A$ap Rocky");
favSongs.pop();
console.log(favSongs);

let favFood = [
    "Sushi",
    "Macaroons",
    "Noodles"
]
favFood.shift();
console.log(favFood);
//activity 1
let favFilms = [
    "Inception",
    "Prisoners",
    "Atonemnet",
    "Shutter Island",
    "The dark knight trilogy"
]

favFilms.push("1917","Interstellar");

for(let i = 0 ; i < favFilms.length; i++)
{
    console.log(favFilms[i]);
}
//activity 2
for(let x = 0; x < 6; x++)
{
    console.log(Math.ceil(Math.random()*50));
}

console.log("\n");
//activity 3
let count = 9

while (count >= 0){
  console.log(count)
  count--
}
//activity 4
let films = [
    "Avatar",
    "Harry Potter",
    "Spiderman",
    "Ghostbusters",
    "Toy story"
]

for (let i = 0; i < films.length; i++) {
    console.log(films[i]); 
}

if (films[2] == "Ghostbusters") {
    console.log("Yay it's Ghostbusters!"); 
} else {
    console.log("Boo! we want Ghostbusters!");
}
//activity 5 
let num = 0;

for(count2 = 0; count2 < 6; count2++) {
    num = Math.ceil(Math.random() * 30)
    
    if(num % 7 == 0) {
        console.log(`${num} number is divisable by 7`)
    } else {
        console.log(`${num} number is not divisable by 7`)
    }
}

//activity 6

let bobsFollowers =[
    "Steve",
    "Ted",
    "Gemma",
    "Evie"
]

let hannahsFollowers=[
    "Jack",
    "Helen",
    "Steve",
    "Sky"
]
let mutualFollowers=[];

for (let x = 0; x <bobsFollowers.length; x++){
    for (let y = 0; y <hannahsFollowers.length; y++){
        if(bobsFollowers[x] === hannahsFollowers[y]){
            mutualFollowers.push(bobsFollowers[x]);
        }
    }
}
console.log(mutualFollowers);

//activity 7 

//for loop:
//A for loop is used to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met.
// ++ The pros of using for loops is that 
// -- The cons of using a for loopis that in order to use one, it is necessary to know the length of the array and there are cases where these values are not known.

for(let x = 0; x < 6; x++)
{
    console.log(Math.ceil(Math.random()*50));
}

//while loop:
//A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. 
// ++ the pros of using a while loop is that you do not need to knwo the length of the array as the loop is running based on whether the conditions have been met or not.
// -- the cons of using a while loop is that you need to make sure that the condition is actually going to turn false at some point otherwise, if the condition is always true, then the loop will run forever. 

//do while loop
//do-while loop is similar to the while loop with the only difference that it checks for the condition after executing the statements.
// ++
// --

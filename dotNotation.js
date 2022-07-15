console.log("Hello World");
console.log("hello".toUpperCase());
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));
console.log(Math.round(Math.random()*10));

console.log("  |   |  ");
console.log("  |   |  ");
console.log("  |   |  ");
console.log("---------");
console.log("  |   |  ");
console.log("  |   |  ");
console.log("  |   |  ");
console.log("---------");
console.log("  |   |  ");
console.log("  |   |  ");
console.log("  |   |  ");

console.log("\n");

//let down = "  |   |  \n  |   |  \n  |   |  ";
//let across = "---------"

//array = [down,across,down,across,down]
//console.log(array.join('\n'));

console.log("\n");

for(var x = 0; x <= 3; x++) {
    for(var y = 0; y < 3; y++) {
        console.log("   |   |   ")
    }

    if(x != 2) {
        console.log("-----------")
    }

    x++;
}





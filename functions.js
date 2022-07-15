const cashWithdrawl = (amount , accnum) => {

    console.log(`Withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawl(300, 50449921);
cashWithdrawl(30, 5044)
cashWithdrawl(20, 87330)

const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp(7, 3);
console.log(addUp(2,5));

const factorial = (n) => {
    if (( n ===0) || ( n === 1)) {
        return 1;
    } else {
        return (n* factorial(n-1));
    }
}

console.log(factorial(33));

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`)
    orderCount++
}

takeOrder("Cheese", "Pepperoni");
takeOrder("Chicken", "Pinapple");
console.log(orderCount);


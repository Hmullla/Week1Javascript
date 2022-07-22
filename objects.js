const person = {
    name: "Hannah",
    age: 17,
    favSongs: ["Try me - the weekend","Snap out of it - Arctic monkeys"],
    favFood: ["Sushi", "Noodles","Chocolate"],
    sayHi () {
        return `Hello my name is ${this.name}`;
    }
};

console.log(person.favSongs);
console.log(person.sayHi());

let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let day = days[Math.floor(Math.random() * days.length)];
let alarmSetting = "none"

const alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
}

if(day == "Saturday" || day == "Sunday"){
    alarmSetting = alarm.weekendAlarm;
    console.log(`It's the weekend, ${alarmSetting}`);
}
else 
{
    alarmSetting = alarm.weekdayAlarm;
    console.log(`It's a weekday, ${alarmSetting}`);
}

const animal = {
    name: "Bob",
    typeOfPet: "Cat",
    age: 4,
    colour: "Ginger"
}


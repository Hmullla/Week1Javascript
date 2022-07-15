const person = {
    name: "Hannah",
    age: 17,
    favFood: ["Sushi", "Noodles"],
    sayHi () {
        return `Hello my name is ${this.name}`;
    }
};

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


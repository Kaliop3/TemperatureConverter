const rs = require("readline-sync");
let change = rs.question("Co chcesz zmienić\nC-celcjusze na fahrenheit\nF-fahrenheit na celcjusze ").toUpperCase();
let number = rs.question("Jaką liczbę zanienić ? ");
if (change == "F") {
    number = (number - 32) * 5 / 9;
    if (number < -273.15) {
        console.log('Temperatura zera bezwglęgnego zmięń dane');
    }
    else {
        console.log(number + "C");
    }
    if (-273.15 > number && number < 0) {
        console.log("Temperatura poniżej zera");
    }
    if (number == 100) {
        console.log("Temperatura wrzenia wody ");
    }
    if (number == 0) {
        console.log("Temperatura zamarzania wody");
    }
}
if (change == "C") {
    number = (number * 9 / 5) + 32;
    if (number < -459.4) {
        console.log("Temperatura zera bezwglęgnego zmięń dane");
    }
    else {
        console.log(Math.round(number) + "F");
    }
    if (-459.4 > number && number < 32) {
        console.log("Temperatura poniżej zera");
    }
    if (number == 212) {
        console.log("Temperatura wrzenia wody ");
    }
    if (number == 32) {
        console.log("Temperatura zamarzania wody");
    }
}

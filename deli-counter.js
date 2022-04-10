// 1. Write your functions here
const katzDeli = ["Ada", "Grace", "Kent"];

function line(katzDeli) {
    const deliLine = katzDeli.map(function (customer, index) {
        return `${index + 1}. ${customer}`;
    });
    if (deliLine) {
        console.log(`The line is currently: ` + deliLine.join(" "));
    } else {
        console.log(`The list is currently empty.`);
    }
}

function takeANumber (katzDeli, newCustomer) {
    katzDeli.push(newCustomer);
    console.log(
        `Welcome, ${newCustomer}. You are number ${katzDeli.length} in line.`
    );
}

function nowServing() {
    let firstPerson = katzDeli.shift();
    if (firstPerson) {
        console.log(`Currently serving ${firstPerson}.`);
    } else {
        console.log(`There is nobody waiting to be served!`);
    }
}
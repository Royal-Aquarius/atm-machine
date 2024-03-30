#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 10000; //dollar
let mypin = 1234;
console.log(chalk.bold.cyanBright("WELCOME TO BANK AL BURAQ ATM"));
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.greenBright("Please Enter Your 4-Digit Pin XXXX"),
    },
]);
if (mypin === pinanswer.pin) {
    console.log(chalk.greenBright("Correct Pin Code"));
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.greenBright("Select Any One Of The Operation"),
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (operationans.operation === "Withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.greenBright("Please Enter Your Amount"),
            },
        ]);
        if (mybalance >= amountans.amount) {
            mybalance -= amountans.amount;
            console.log(chalk.cyanBright(`Your Remaining Amount Is: ${mybalance} `));
        }
        else {
            console.log(chalk.redBright(`Unable To Get Transaction Your Balance Is Insufficient`));
        }
    }
    else if (operationans.operation === "Check Balance") {
        console.log(chalk.italic.cyanBright(`Your Amount Is: ${mybalance}`));
    }
    else if (operationans.operation === "Fast Cash") {
        let fastcashans = await inquirer.prompt([
            {
                name: "fastcash",
                message: chalk.greenBright("Please Select Your Amount"),
                type: "list",
                choices: ["2000", "5000", "10000", "15000", "20000"],
            }
        ]);
        if (mybalance >= fastcashans.fastcash) {
            mybalance -= fastcashans.fastcash;
            console.log(chalk.cyanBright(`Your Remaining Amount Is: ${mybalance}`));
        }
        else {
            console.log(chalk.redBright `Unable To Get Transaction Your Balance Is Insufficient`);
        }
    }
    //end
}
else {
    console.log(chalk.redBright("Incorrect Pin Code"));
}

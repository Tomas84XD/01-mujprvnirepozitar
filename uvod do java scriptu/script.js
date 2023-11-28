
function addition() {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const additionResult = inputFirstNumber + inputSecondNumber
    
    document.getElementById("result").value = additionResult

}


function substraction() {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const substractionResult = inputFirstNumber - inputSecondNumber

    document.getElementById("result").value = substractionResult

}


function times() {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const timesResult = inputFirstNumber * inputSecondNumber

    document.getElementById("result").value = timesResult

}


function divide() {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const divideResult = inputFirstNumber / inputSecondNumber

    document.getElementById("result").value = divideResult


}


function checkResult() {

    const inputNumber = document.getElementById("numberToCheck").value;

    if(inputNumber > 10)
        console.log("MENŠÍ NEŽ 10")
    else if(inputNumber > 10)
        console.log("VĚTŠÍ NEŽ 10")
    else if(inputNumber == 10)
        console.log("JE ROVNO 10")
    else
        console.log("NENÍ ČÍSLO!")


}

const cars = ["Audi", "Bmw", "Mercedes"]
const numbers = [1, 3, 5,]
const carsInGarage = ["audi", 1, "bmw", 3]

const cars2 = [];
cars2[0]= "Saab";
cars2[1]= "volvo";
cars2[2]= "BMW";

console.log(cars2)

function forLoop() {
    for(let i = 0; i < cars2.length; i++) {
    console.log(cars2[i])
    }
}


















































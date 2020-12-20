// const input = document.querySelector(".display");
// const numbers = document.querySelectorAll(".number");
// const operators = document.querySelectorAll(".operator");
// const dot = document.querySelector(".dot");
// const clear = document.querySelector(".clear");
// let displayValue = "0";

// let firstNum = "";
// let secondNum = "";
// let operator = "";

// numbers.forEach(number => {
//     number.addEventListener("click", e => {
//         if (operator === "") { // Read first number if no operator set yet
//             firstNum += e.target.innerText;
//             console.log(firstNum)
//         } else { // Read second number
//             secondNum += e.target.innerText;
//             console.log(secondNum)
//         }
//     });
// });

// operators.forEach(op => {
//     op.addEventListener("click", e => {
//         operator = e.target.innerText;
//         console.log(operator)
//         // If equals operator, perform operation
//     });
// });

//function for displaying values
// function dis(val)
// {
// document.getElementById("edu").value+=val
//  }
// //function for evaluation
// function solve()
// {
// let x = document.getElementById("edu").value
// let y = eval(x)
// document.getElementById("edu").value = y
// }
// //function for clearing the display
// function clr()
// {
// document.getElementById("edu").value = ""
// }

//function for displaying values

function dis(val) {
    var display = document.getElementById("edu")
    display.value+=val
}
//function for evaluation
function solve() {
    var displayedValue = document.getElementById("edu").value
    var calculatedValue = eval(displayedValue)
    document.getElementById("edu").value=calculatedValue
}
//function for clearing the display
function clr() {
    document.getElementById("edu").value=""
}

//------------------THE END------------------------
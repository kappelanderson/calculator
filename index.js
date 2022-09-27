
// Operations
let add  = (num1, num2) =>{
    return Number(num1) + Number(num2)
}

let subtract  = (num1, num2) =>{
    return num1 - num2
}

let multiply  = (num1, num2) =>{
    return num1 * num2
}

let divide  = (num1, num2) =>{
    return num1 / num2
}

// Give an operator and two numbers make the Operate
let operate = (operator, num1, num2) =>{
    switch (operator) {
        case "add": return add(num1,num2).toFixed(2); 
        case "multiply": return multiply(num1,num2).toFixed(2); 
        case "subtract": return subtract(num1,num2).toFixed(2); 
        case "divide": return divide(num1,num2).toFixed(2); 
    }
}

// Add to an display variable when you click in the buttons
let displayNum = ''

let firstNum
let secondNum

let currentOperator

// Numbers and dot Logic when you click a button

let numbers = document.querySelectorAll('.num')


numbers.forEach((number) => number.addEventListener('click', ()=> {
    // if already has a dot... not add more
    if(displayNum.match(/\./g) && number.innerHTML === '.'){
        return
    }
    // Change the display variable and update the DOM
    displayNum += number.innerText
    document.querySelector('.display').innerText = displayNum
}))

// When you click an operator
let operators = document.querySelectorAll('.operat')

operators.forEach((operator)=> operator.addEventListener('click', ()=>{
    if(!firstNum){
    firstNum = displayNum
    currentOperator = operator.value
    displayNum = ''}
}))

// Equals operator

let equals = document.querySelector('.equal')

equals.addEventListener('click', (e)=> {
    document.querySelector('.display').innerText = operate(currentOperator, firstNum, displayNum)
    firstNum = displayNum
    
} )
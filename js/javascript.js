const one = document.querySelector(`.one`);
const two = document.querySelector(`.two`);
const three = document.querySelector(`.three`);
const four = document.querySelector(`.four`);
const five = document.querySelector(`.five`)
const six = document.querySelector(`.six`)
const seven = document.querySelector(`.seven`)
const eight = document.querySelector(`.eight`)
const nine = document.querySelector(`.nine`)
const display = document.querySelector(`.display`)
const plus = document.querySelector(`.plus`);
const minus = document.querySelector(`.minus`);
const multiply = document.querySelector(`.multiply`);
const divide = document.querySelector(`.divide`);
const equals = document.querySelector(`.equals`)
const clear = document.querySelector(`.clear`)
let value = {
    num1: `0`,
    num2: `0`,
    operator : `0`
}
let result = 0


function operate(operator,num1,num2){
    switch(operator){
        case `+`:
            if(result > 0){
                result += num2; // this is the problem, have to change this
                display.textContent = `${result}`;
            }else{
                result = num1 + num2
                display.textContent = `${result}`;
            }
            console.log(result)
            break;
        case `-`:
            if(result > 0){   
                result -= num2
            }else{
                result = num1 - num2
            }
            display.textContent = `${result}`;
            console.log(result)
            break;
        case `*`:
            if(result > 0){
                result *= num2;
            }else{
                result = num1 * num2
            }
            display.textContent = `${result}`;
            console.log(result)
            break;
        case `/`:
            if(result > 0){
                result /= num2;
            }else{
                result = num1 / num2
            }
            display.textContent = `${result}`;
            console.log(result)
            break;
    }
}

one.addEventListener(`click`, () => {
    display.textContent = `1`;
    if(value.num1 == 0){
        value.num1 = 1
    }else{
        value.num2 = 1
    }
})
two.addEventListener(`click`, () => {
    display.textContent = `2`;

    if(value.num1 == 0){
        value.num1 = 2
    }else{
        value.num2 = 2
    }
})
three.addEventListener(`click`, () => {
    display.textContent = `3`;
    if(value.num1 == 0){
        value.num1 = 3
    }else{
        value.num2 = 3
    }
})
four.addEventListener(`click`, () => {
    display.textContent = `4`;
    if(value.num1 == 0){
        value.num1 = 4
    }else{
        value.num2 = 4
    }
})
five.addEventListener(`click`, () => {
    display.textContent = `5`;
    if(value.num1 == 0){
        value.num1 = 5
    }else{
        value.num2 = 5
    }
})
six.addEventListener(`click`, () => {
    display.textContent = `6`;
    if(value.num1 == 0){
        value.num1 = 6
    }else{
        value.num2 = 6
    }
})
seven.addEventListener(`click`, () => {
    display.textContent = `7`;
    if(value.num1 == 0){
        value.num1 = 7
    }else{
        value.num2 = 7
    }
})
eight.addEventListener(`click`, () => {
    display.textContent = `8`;
    if(value.num1 == 0){
        value.num1 = 8
    }else{
        value.num2 = 8
    }
})
nine.addEventListener(`click`, () => {
    display.textContent = `9`;
    if(value.num1 == 0){
        value.num1 = 9
    }else{
        value.num2 = 9
    }
})
plus.addEventListener(`click`, () => {
    operate(value.operator,value.num1,value.num2)
    display.textContent = `+`;
    value.operator = `+` ;
    display.textContent = `${result}`;
})
minus.addEventListener(`click`, () => {
    operate(value.operator,value.num1,value.num2)
    display.textContent = `-`;
    value.operator = `-`;
    display.textContent = `${result}`;
})
multiply.addEventListener(`click`, () => {
    operate(value.operator,value.num1,value.num2)
    display.textContent = `*`;
    value.operator = `*`;
    display.textContent = `${result}`;
})
divide.addEventListener(`click`, () => {
    operate(value.operator,value.num1,value.num2)
    display.textContent = `/`;
    value.operator = `/`;
    display.textContent = `${result}`;
})
equals.addEventListener(`click`, () =>{
    operate(value.operator,value.num1,value.num2)
    display.textContent = `${result}`;
})
clear.addEventListener(`click`,()=> {
    value.num1 = 0
    value.num2 = 0
    operator = 0
    result = 0
    display.textContent = `${result}`;
})

display.log(value.num1)
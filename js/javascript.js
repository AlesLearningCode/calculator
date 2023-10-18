const zero = document.querySelector(`.zero`)
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
    operator : 0
}
let clicked
let result = 0
let array = [one, two, three, four, five, six, seven, eight, nine]

function operate(operator,num1,num2){
    switch(operator){
        case `+`:
            if(clicked === true){
                return result
            }else{
            if(result > 0 || result < 0){
                result += num2; 
                value.operator = `0`
                value.num2 = 0
            }else if(result === 0){
                result = num1 + num2
                value.operator = `0`
                value.num2 = 0
            }
        }

            break;
        case `-`:
            if(clicked === true){
                return result
            }else{
            if(result > 0 || result < 0){   
                result -= num2
                value.operator = `0`
                value.num2 = 0
            }else{
                result = num1 - num2
                value.operator = `0`
                value.num2 = 0

            }
            display.textContent = `${result}`;
            break;
        }
        case `*`:
            if(clicked === true){
                return result
            }else{
            if(result > 0 || result < 0){
                result *= num2;
                value.operator = `0`
                value.num2 = 0
            }else{
                result = num1 * num2
                value.operator = `0`
                value.num2 = 0
            }
            display.textContent = `${result}`;

            break;
        }
        case `/`:
            if(clicked === true){
                return result
            }else{
            if(result > 0 || result < 0){
                result /= num2;
                value.operator = `0`
                value.num2 = 0
            }else{
                result = num1 / num2
                value.operator = `0`
                value.num2 = 0
            }
            display.textContent = `${result}`;

            break;
        }
    }
}



for(let i = 0; i < array.length; i++){
    array[i].addEventListener('click', () =>{
        if(result > 0){
            value.num1 = result
            value.num2 = (value.num2*10) + (i+1)
            display.textContent = `${value.num2}`
        }else if(value.operator === 0){
            value.num1 = (value.num1*10) + (i+1)
            display.textContent = `${value.num1}`;
        }else if(value.operator === `-` || value.operator === `+` || 
        value.operator === `*`  || value.operator === `/`){
            value.num2 = (value.num2*10) + (i+1)
            display.textContent = `${value.num2}`
        }
        clicked = false
    })
}




plus.addEventListener(`click`, () => {
    operate(value.operator,value.num1,value.num2)
    clicked = true;
    display.textContent = `+`;
    value.operator = `+` ;
    display.textContent = `${result}`;
})
minus.addEventListener(`click`, () => {
    operate(value.operator,value.num1,value.num2)
    clicked = true;
    display.textContent = `-`;
    value.operator = `-`;
    display.textContent = `${value.num2}`
})
multiply.addEventListener(`click`, () => {
    operate(value.operator,value.num1,value.num2)
    clicked = true;
    display.textContent = `*`;
    value.operator = `*`;
    display.textContent = `${result}`;
})
divide.addEventListener(`click`, () => {
    operate(value.operator,value.num1,value.num2)
    clicked = true;
    display.textContent = `/`;
    value.operator = `/`;
    display.textContent = `${result}`;
})
equals.addEventListener(`click`, () =>{
    operate(value.operator,value.num1,value.num2)
    clicked = true;
    display.textContent = `${result}`;
})
clear.addEventListener(`click`,()=> {
    value.num1 = 0
    value.num2 = 0
    value.operator = 0
    result = 0
    display.textContent = `${result}`;
})


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
const deleteLast = document.querySelector(`.delete`)
const allButtons = document.querySelectorAll(`button`)
const dot = document.querySelectorAll(`.dot`)
const numberArray = [zero, one, two, three, four, five, six, seven, eight, nine]
const operatorArray = [plus, `+`, minus, `-`, multiply, `*`, divide, `/`]
let value = {
    num1: 0,
    num2: 0,
    operator : 0
}
let clicked
let result = 0
let displayedValue = 0


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
            }else{
                result = num1 + num2
                value.operator = `0`
                value.num2 = 0
            }
            display.textContent = `${result}`;
            break;
        }  
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
                display.textContent = `${result}`;
                result
            }else{
            if(value.operator === `/` && value.num2 === 0){
                result = `Can't divide by 0` 
                value.num2 = 0
                value.operator = `0`
                console.log(value.operator)
            }else if (result > 0 || result < 0){
                result /= num2;
                value.operator = `0`
                value.num2 = 0
            }else{
                result = num1 / num2
                value.operator = `0`
                value.num2 = 0
            }
        }
            display.textContent = `${result}`;
            break;
        } 
    }



for(let i = 0; i < numberArray.length; i++){
    numberArray[i].addEventListener(`click`, () =>{
        // user can't add more than 15 digits
        if(value.num1.toString().split(``).length >= 15){
            numberArray[i].disabled = true
        }else if(value.num2.toString().split(``).length >= 15){
            numberArray[i].disabled = true 
            // result is zero players inserts only second number 1st is the result
        }if(result > 0){
            value.num1 = result
            value.num2 = (value.num2*10) + (i)
            display.textContent = `${value.num2}`
        }else if(value.operator === 0){
            value.num1 = (value.num1*10) + (i)
            value.num2 = 0;
            display.textContent = `${value.num1}`;
        }else if(value.operator === `-` || value.operator === `+` || 
            value.operator === `*`  || value.operator === `/`){
            value.num2 = (value.num2*10) + (i)
            display.textContent = `${value.num2}`
        }
        console.log(value.num2)
        clicked = false
    })
    // is here so i can call disabled function false
    for(let j = 0; j < operatorArray.length; j += 2){
        operatorArray[j].addEventListener(`click`, () => {
            operate(value.operator,value.num1,value.num2)
            value.num2 = 0
            numberArray[i].disabled = false
            //clicking operator shows the result
            clicked = true;
            display.textContent = operatorArray[j+1];
            value.operator = operatorArray[j+1] ;
            if(result > 0 || result < 0){
                value.num1 = result
                
            }
            display.textContent = `${value.num1}`;
        })
        numberArray[i]
    }
}


equals.addEventListener(`click`, () =>{
    operate(value.operator,value.num1,value.num2)
    clicked = true;
    if(value.operator === `/` && value.num2 === 0){
        result = `Can't divide by 0` 
        value.num2 = 0
        value.operator = 0
    }
    if(result > 0 || result < 0){
        value.num1 = result
        display.textContent = `${value.num1}`;
    }
    console.log(value.num2)
})
clear.addEventListener(`click`,()=> {
    value.num1 = 0
    value.num2 = 0
    value.operator = 0
    result = 0
    display.textContent = `${result}`;
})
// deletes last number

allButtons.forEach(button =>{
    button.addEventListener(`mousedown`, ()=>{ 
        button.style.background = `#372c69`;
    })
    button.addEventListener(`mouseup`, ()=>{ 
        button.style.background = `#0B032D`;
})
})
deleteLast.addEventListener(`click`,()=>{
    if(value.num1.toString().split(``).length === 1){
        value.num1 = parseInt(value.num1.toString().split(``).slice(0, -1).join(``))
        value.num1 = 0
        display.textContent = `${value.num1}`;
    }else if(value.num2.toString().split(``).length === 1 && !(value.operator === 0)){
        value.num2 = parseInt(value.num2.toString().split(``).slice(0, -1).join(``))
        value.num2 = 0
        display.textContent = `${value.num2}`;
    }else if(value.num2 == 0 && result == 0){
        value.num1 = parseInt(value.num1.toString().split(``).slice(0, -1).join(``))
        value.operator = 0
        display.textContent = `${value.num1}`;
    }else if(result > 0 && value.num2 === 0){
        display.textContent = `${result}`
    }else if(value.num1 > 0 || value.num1 < 0 && value.num2 > 0 || value.num2 < 0){
        value.num2 = parseInt(value.num2.toString().split(``).slice(0, -1).join(``))
        display.textContent = `${value.num2}`;
    }

}) 

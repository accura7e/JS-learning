// let num = 15
// let firstName = 'Philipp'
// const isProgrammer = true

/* Can Do

 let $num = 42

 let _ = 49

 let first_name = "Julia" //bad
 let myNum = 34 // good
 let num42 = 10
*/

/* Restricted

 let 42num = 11
 let my-num = 1
 let const = 1
*/


// num = 30
// isProgrammer = false // error because of const


// alert(firstName)

// console.log('Test:', firstName)

// console.log(num +  10)
// console.log(num -  10)
// console.log(num *  10)
// console.log(num /  10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// console.log(num, num2)

// let num3 = (num + 10) * 2 / 5 - 1
// console.log(num3)

const resultElement = document.getElementById('result')
// console.log(resultElement.textContent)
// resultElement.textContent = 49-2
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
// input1.value = 10 - 2
// console.log(input1.value)

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = ''


// resultElement.textContent = sum
plusBtn.onclick = function(){
    action = '+'

}

minusBtn.onclick = function(){
    action = '-'

}
function printResult(result){
        if(result < 0){
            resultElement.style.color = "red"
        } else{
            resultElement.style.color = "green"
        }
        resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol){
    
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function (){
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

    
   


    
}



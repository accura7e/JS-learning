let num = 42
let firstName = 'Philipp'
const isProgrammer = true


/* Can Do
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 42
let _num = 42
let num_ = 12
let first_name = 'Elena'  //bad
let myNum = 34 // good
let num42 = 10
*/


/* Restricted
let 42num = 11
let my-num = 1
let const

*/


// alert(firstName)
// isProgrammer = false // error because of const
// firstName = 'Maxim'
// console.log(num + 10)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num,num2)

// let num3 = num + 1

// const fullName = firstName + ' Amster'
// console.log(fullName)

const resultElement = document.getElementById('result')
const input2 = document.getElementById('input2')
const input1 = document.getElementById('input1')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')
let action  = '+'
// console.log(resultElement.textContent)
// resultElement.textContent = 42


plusBtn.onclick = function (){
    action = '+'
}

minusBtn.onclick = function (){
    action = '-'
}
divideBtn.onclick = function (){
    action = '/'
}
multiplyBtn.onclick = function (){
    action = '*'
}
function printResult(result){
    if (result < 0){
        resultElement.style.color = 'red'
    } else if (result > 0) {
        resultElement.style.color = 'green'
    } else{
        resultElement.style.color = 'black'
        
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+'){
        return num1 + num2
    } else if (actionSymbol == '-'){
        return num1 - num2
    } else if (actionSymbol == '/'){
        return num1 / num2
    } else if (actionSymbol == '*'){
        return num1 * num2
    }


}
 
submitBtn.onclick = function(){

    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

    // if(action == '+'){
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else if(action == '-'){
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }

}
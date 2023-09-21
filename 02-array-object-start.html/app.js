/*THEORY


const array = [1 , 2 , 3 , 4 , 10] 
const array = new Array(1,2,3,4,5)


 console.log(array.length)
 console.log(array[1])
 console.log(array[array.length-1])
 array[0] = 'hi'
 console.log(array[0])
 array[array.length] = 'fjsakl'
 console.log(array[5]) */

 const inputElement = document.getElementById('title')
 const createBtn = document.getElementById('create')
 const listElement = document.getElementById('list')

//  console.log(inputElement.value)


const notes = ['выучить js', 'познакомится с React']

function render(){
  listElement.insertAdjacentHTML('beforeend',
  `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${notes[0]}</span>
    <span>
      <span class="btn btn-small btn-success">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
    </span>
  </li> `
  )
}

render()

createBtn.onclick = function(){
  if(inputElement.value.length === 0){
    return
  }



inputElement.value = ''
}

function getNoteTemplate(){
  return  `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${notes[0]}</span>
  <span>
    <span class="btn btn-small btn-success">&check;</span>
    <span class="btn btn-small btn-danger">&times;</span>
  </span>
</li> `
}
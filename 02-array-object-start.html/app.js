// const array = [1, 2, 3, 4, 5, 6, 7]
// // const arrayList = ['a', 'b']

// // const array = new Array(1,2,3,4)

// // console.log(array.length)

// console.log(array[0])

// console.log(array[array.length- 1]) // array[6 - 1 = 5]
// array[0] = 'Privet!'
// console.log(array)
// array[array.length] = 'becon'
// console.log(array)

const inputElement = document.getElementById('title')

const createBtn = document.getElementById('create')

const listElement = document.getElementById('list')
console.log(inputElement.value)

const notes = ['выучить css анимации', 'выучить js'] 

function render(){
    for (let i = 0; i < notes.length; i++) {
listElement.insertAdjacentHTML('beforeend' , getNoteTemplate(notes[i]))
    }

    for (let note of notes) {
      listElement.insertAdjacentElement('beforeend', getNoteTemplate(note))
    }
    
   
}
render()

createBtn.onclick = function(){

    if(inputElement.value.length === 0){
        return
    }
    // listElement.innerHTML 

  listElement.insertAdjacentHTML('beforeend' , 
  getNoteTemplate(inputElement.value)
)
inputElement.value = ''
}

function getNoteTemplate(title){
    return `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${title}</span>
    <span>
      <span class="btn btn-small btn-success">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
    </span>
  </li>`
}
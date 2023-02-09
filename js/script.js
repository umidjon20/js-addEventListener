let btn = document.querySelector('button')
let inp = document.querySelector('.input')
let todo = document.querySelector('.todo')
function shovInput(){
    if(inp.value !== ""){
        inp.style.border = '2px solid green'
        todo.innerHTML += `
        
    <li>${inp.value}</li>
    `
    inp.value =''
    }else {
        inp.style.border = '2px solid red'
    }
}


btn.addEventListener('click',shovInput)


let incBtn = document.querySelector('.increment'),
    decBtn = document.querySelector('.decrement'),
    count = document.querySelector('.count'),
    rndBtn = document.querySelector('.random'),
    rstBtn = document.querySelector('.reset')

let countValue = 0
count.innerText = countValue

function countInc(){
    countValue++
  count.innerText = countValue
  if(countValue === 50){
     incBtn.removeEventListener('click',countInc)
  }
}

incBtn.addEventListener('click',countInc)

function countDec(){
    countValue--
  count.innerText = countValue
  if(countValue === -50){
     decBtn.removeEventListener('click',countDec)
  }
}

decBtn.addEventListener('click',countDec)

function getRandom(){
    let min = -50,
        max = 50
        let res = Math.floor(Math.random() * (max - min + 1 )) + min
    count.innerText = res
}


rndBtn.addEventListener('click',getRandom)

rstBtn.addEventListener('click', () => {
    if(countValue >= 0 || 0 > countValue){
        count.innerText = 0
        countValue = 0
    }
})














// function getRandom(min,max){
//     let x = 50-50 +50
//     let y = Math.random()*-50
//     let res = Math.floor(y) + 50
//     count.innerText =  res
//     function getRan(){
//         let inc = Math.floor(Math.random() * 50 + 1)
//     }
// }
// console.log(getRandom())
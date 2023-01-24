
let countEl = document.getElementById("count-el")

let count = 0
let saveEl = document.getElementById("save-el")

let btn = document.getElementById("increment-btn")
btn.addEventListener("click",() =>{
   count++
   countEl.textContent = count
   console.log(countEl);
})

function save() {
    let countStr = count + " - "
    saveEl.textContenttStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people using BRT!")

 
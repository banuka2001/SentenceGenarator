const headEl = document.getElementById("head-el")
const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const saveBtn2 = document.getElementById("save-btn2")
const inputEl2 = document.getElementById("input-el2")

const genarateBtn = document.getElementById("genarate")

let saveLog = []
let description = " "

saveBtn.addEventListener("click",function() {
    let words = inputEl.value.split(" ")  
    for (let currentWord of words) { 
        saveLog.push(currentWord )
    }
    inputEl.value = "";
})

saveBtn2.addEventListener("click",function() {
    description = inputEl2.value
    inputEl2.value = " "
})



let string = ""

function generateSentence(desc, arr) {
   const lastIndex = arr.length - 1
    string = `The ${arr.length} ${desc} are `
    for (let i = 0; i < arr.length; i++){
        if (lastIndex === i) {
            string += arr[i] 
        } else {
            string += arr[i] + ","
       }   
    }
    return string
    }

    
genarateBtn.addEventListener("click",function(){
    generateSentence(description, saveLog)
    const sentence = string 
    headEl.textContent = sentence
    
})

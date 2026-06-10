console.log("Print statement")

const a=20;
const b=30;
console.log(a+b);
const str="vaishali"
console.log(str)
const arr=[1,2.4,"String",false]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr[1]=3.1
console.log(arr[1])
arr.push("Vaishali")
console.log(arr)

arr.pop()
console.log(arr)
function example(){
    console.log("iam good girl")
}
const ptag=document.getElementById("ptag")
ptag.innerHTML="print statements"
const input=document.getElementById("input")
const output=document.getElementById("inputField")

input.addEventListener("input",()=>{
    output.textContent=input.value
})

const first=document.createElement("h1")
first.textContent="Some text"
document.body.appendChild(first)

first.remove()
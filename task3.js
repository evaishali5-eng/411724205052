let messages=[];


let input=document.getElementById("messageInput");

let count=document.getElementById("count");

let addBtn=document.getElementById("addBtn");

let clearBtn=document.getElementById("clearBtn");

let section=document.getElementById("messageSection");

let status=document.getElementById("status");




// Character Count

input.addEventListener("input",()=>{


    count.textContent="Character Count: "+input.value.length;


});





// Add Message

addBtn.addEventListener("click",()=>{


let message=input.value;



let promise=new Promise((resolve,reject)=>{


    if(message.length>=3)

        resolve(message);


    else

        reject();



});




promise.then((msg)=>{


    status.textContent="✅ Message Added Successfully";


    messages.push(msg);


    displayMessages();



    input.value="";

    count.textContent="Character Count: 0";



})

.catch(()=>{


status.textContent="❌ Message must contain at least 3 characters";


});



});





// Display Messages

function displayMessages(){


section.innerHTML="";



messages.forEach((msg,index)=>{


let p=document.createElement("p");


p.textContent=msg;


p.className="message";


section.appendChild(p);





setTimeout(()=>{


p.remove();


status.textContent="⏳ Message Expired";


messages.splice(index,1);



},10000);



});


}





// Clear All

clearBtn.addEventListener("click",()=>{


messages=[];


section.innerHTML="";


status.textContent="🧹 All Messages Cleared";


});
const inp=document.querySelector('#inp');
const btn=document.querySelector(".btn1");
const form=document.querySelector("#formx");
const results=document.querySelector(".tasks");
const del=document.querySelector(".deleteBtn");

btn.addEventListener("click" ,(e)=>{
    e.preventDefault();
const input=inp.value;

// adding text section 
 const compTask=document.createElement("div");
 compTask.classList.add("indTask");

const contentBox=document.createElement("div");
contentBox.classList.add("content")

const textSection=document.createElement("input");
textSection.classList.add("taskText");
textSection.type="text"
textSection.setAttribute("readonly", "readonly");
textSection.value=input;

contentBox.appendChild(textSection);
compTask.appendChild(contentBox);
// no Blank tasks 
if (input!==""){
    results.appendChild(compTask);
}


// adding buttons section 
const buttonSection=document.createElement("div");
buttonSection.classList.add("crud");

// edit button 
const editbtn=document.createElement("button");
editbtn.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`;

// edit button functioning 
editbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if (editbtn.innerHTML==`<i class="fa-solid fa-pen-to-square"></i>`){
       textSection.removeAttribute("readonly");
       textSection.focus();
       editbtn.innerHTML=`<i class="fa-solid fa-floppy-disk"></i>`;
    } else{
        textSection.setAttribute("readonly", "readonly");
       editbtn.innerHTML=`<i class="fa-solid fa-pen-to-square"></i`;
    }
});

// delete button
const delbtn=document.createElement("button");
delbtn.innerHTML=`<i class="fa-solid fa-trash"></i>`;

// delete button functioning 
delbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    results.removeChild(compTask);
});

// done button 
const donebtn=document.createElement("button");
donebtn.innerHTML=`<i class="fa-solid fa-check"></i>`;

// done button functioning 
donebtn.addEventListener("click", (e)=>{
    e.preventDefault();
if (donebtn.innerHTML==`<i class="fa-solid fa-check"></i>`){
    textSection.style.textDecoration="line-through";
    textSection.style.textDecorationColor="green";
    donebtn.innerHTML=`<i class="fa-solid fa-arrow-rotate-left"></i>`;
} else
{
    donebtn.innerHTML=`<i class="fa-solid fa-check"></i>`;
    textSection.style.textDecoration="none";   
}
});
// del all button 
del.addEventListener("click", (e)=>{
e.preventDefault();
results.removeChild(compTask)

});

buttonSection.appendChild(editbtn);
buttonSection.appendChild(delbtn);
buttonSection.appendChild(donebtn);
compTask.appendChild(buttonSection);
});


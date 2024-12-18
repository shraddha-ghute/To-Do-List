let input=document.getElementById("input-box");
let list=document.getElementById("List-container");
function addTask(){
    if(input.value ===''){
        alert("you have to write something");
    } else{
        let li = document.createElement("li");
        li.innerHTML= input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML=" \u00d7";
        li.appendChild(span);
        
    }
    input.value="";
    saveData();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false );

function saveData(){
   localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");

}
showTask();
let Num= document.getElementById("num");
let Historee=document.getElementById("history");
let count=0;

function increment() {
    count=count+1;
    Num.innerText=count;
    
}
function save(){
    let both= count+ "-";
   Historee.innerText += both;
   Num.innerText=0;
   count=0;
}
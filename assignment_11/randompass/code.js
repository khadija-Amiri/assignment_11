let generate=document.getElementById("btn");
let screen=document.getElementById("boxes");
let deletebtn=document.getElementById("delet");

generate.addEventListener('click',function(e){
        let num= "0123456789$@&";
        screen.innerText=Math.random()*(num.length);
       
    
     
})
 
deletebtn.addEventListener('click' ,function(e) {
        screen.innerText="";
        
})


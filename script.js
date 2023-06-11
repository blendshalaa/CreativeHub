"strict"



document.querySelector('.events-webinars').addEventListener('click',function(event){
   event.target.style.backgroundColor='#243F60';
})

let buttonCircle=document.querySelector('.button-circle');
let circleText=document.querySelector('.circle-text');
let hiddenDiv=document.querySelector('.hidden-div');



buttonCircle.addEventListener('click',e=>{
   buttonCircle.style.display="none";
   circleText.style.display='none';
   hiddenDiv.style.display="block";

})






//improve this event




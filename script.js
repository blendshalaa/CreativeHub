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
const section=document.querySelector('.section2')
const headerCircle=document.querySelector('.header-circle-pic')
const burgerMenu=document.querySelector('.burger-menu');
const navbar=document.querySelector('.navbar');
const menuText=document.querySelector('.menu-text')


burgerMenu.addEventListener('click',function(){
   burgerMenu.classList.toggle('active')
   headerCircle.style.display='none';
   section.style.display='none';
   navbar.style.display='block'
   menuText.style.display='block'
  
   
  
   
});

const cardContainer=document.getElementById('cardContainer')

const cardData=[
  {
   imageSrc: "./images/womanpic.png",
   description: "Small Description For The Event",
   eventName: "FULL NAME OF THE EVENT",
   buttonLabel: "See More"
 }
];




 
 
 





//cardsevents





//improve this event




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
   if(burgerMenu.classList.contains('active')){
      headerCircle.style.display='none';
      section.style.display='none';
      navbar.style.display='block'
      menuText.style.display='block'

   }else{
      headerCircle.style.display='block';
      section.style.display='block';
      navbar.style.display='none'
      menuText.style.display='none'
   }
  
  
   
  
   
});



const viewAllButton=document.querySelector('.viewMore-btn');
const cardContainer=document.querySelector('cardContainer')
const cardTemplate=document.querySelector('card-template');
const hiddenCard=document.querySelector('.hiddencardContainer')

viewAllButton.addEventListener('click',function(){
hiddenCard.classList.remove('hiddencardContainer');



   
})





 
 
 





//cardsevents





//improve this event




"strict"










// Function to handle the button click event
function handleButtonClick() {
   const buttonCircle = document.querySelector('.button-circle');
   const circleText = document.querySelector('.circle-text');
   const hiddenDiv = document.querySelector('.hidden-div');
 
   buttonCircle.style.display = "none";
   circleText.style.display = 'none';
   hiddenDiv.style.display = "block";


 }
 
 // Add the event listener to the buttonCircle element
 const buttonCircle = document.querySelector('.button-circle');
 if(buttonCircle){
   buttonCircle.addEventListener('click', handleButtonClick);

 }



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
const cardContainer=document.querySelector('.cardContainer')
const cardTemplate=document.querySelector('.card-template');
const hiddenCard=document.querySelector('.hiddencardContainer')

if(viewAllButton){
   viewAllButton.addEventListener('click',function(){
      hiddenCard.classList.remove('hiddencardContainer')
   });
}


var swiper = new Swiper(".mySwiper", {
   slidesPerView: 2,
   spaceBetween: 30,
   autoplay:{
      delay:2500,
      disableOnInteraction: false,

   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });

 document.addEventListener('DOMContentLoaded',function(){
   const arrow=document.querySelector('.scroll-arrow');
   
 
 

 arrow.addEventListener('click',function(){
window.scrollTo({
   top:0,
   behavior:"smooth",
   
})
 })
});

const blogBtns=document.querySelectorAll('.user-btn');

for(const blogBtn of blogBtns){
   blogBtn.addEventListener('click',function(){
      window.location.href='article.html'
   })
}









 
 
 





//cardsevents





//improve this event




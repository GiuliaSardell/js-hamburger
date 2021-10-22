const hamb = document.querySelector('.header-right > a');

const menu = document.querySelector('.hamburger-menu');

hamb.addEventListener('click', function(){
  console.log('abbiamo cliccato');
  
  menu.classList.add('active');
});


const ics = document.querySelector('.hamburger-menu > a');

ics.addEventListener('click', function(){
  console.log('abbiamo cliccato ics');
  
  menu.classList.remove('active');
});
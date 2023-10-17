/* eslint-disable*/

const anchor = document.querySelector('.anchor');
// console.log(anchor);

anchor.addEventListener('click', function(event){
  event.preventDefault();
});

const signUp = document.querySelector('[name=signup]');

signUp.addEventListener('submit', function(event){
  const name = event.currentTarget.name.value;
  const email = event.currentTarget.email.value;
  if(name.includes('chad')){
    alert('Sorry bro, no chads here');
    event.preventDefault();
  } 
});

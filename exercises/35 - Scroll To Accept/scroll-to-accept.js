const terms = document.querySelector('.terms-and-conditions');
const btn = document.querySelector('button.accept');
const watch = document.querySelector('.watch');

// One way -my way....-
// terms.addEventListener('scroll', function(e){
//   // How far we srcoll
//   console.log(e.currentTarget.scrollTop);
//   // What height have the container
//   console.log(e.currentTarget.scrollHeight);

//   if(e.currentTarget.scrollTop === 1676.5){
//     btn.removeAttribute('disabled');
//   }
// });

function obCallBack(payload){
  if(payload[0].intersectionRatio === 1){
    btn.disabled = false;
    // Stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallBack, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);

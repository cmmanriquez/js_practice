console.log('it works');

const src = 'https://source.unsplash.com/random/300x300';
const description = 'cute pup';
const myHTML = `
<div class="wrapper">
  <h1>Hey whats up</h1>
  <img src="${src}" alt="${description}"/>
</div>
`;

// Acá html es string
// item.innerHTML = myHTML;

// const itemIMG = document.querySelector('.wrapper img');
// itemIMG.classList.add('round');
// console.log(itemIMG);

// convertir un string en elementos del DOM

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));
console.log(myFragment);

// Mostrar por pantalla mi string
document.body.appendChild(myFragment);

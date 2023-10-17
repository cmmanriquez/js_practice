/*eslint-disable*/

// Select the elements that going to use
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.querySelector('#etch-a-sketch');
  const shakeBtn = document.querySelector('.shake');
  const ctx = canvas.getContext('2d');

  // Setup our canvas for drawing -default is square-
  const width = canvas.width;
  const heigth = canvas.heigth;
  const MOVE_AMOUNT = 20;
  let x = Math.floor( Math.random() * width);
  let y = Math.floor(Math.random() * width);

  
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 20;
  let hue = 1;
  ctx.strokeStyle = `hsl(${hue}100, 100%, 50%)`;

  // Start the draw
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y);
  ctx.stroke();
  // Write the drawing function
function draw({key}){
  console.log(key);
  // Start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // Change color
  hue += 1;
  ctx.strokeStyle = `hsl(${hue + 0.5}100, 100%, 50%)`;
  // Move aour x and y values according to the keys
  switch (key){
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
    default:
        break;
  };
  ctx.lineTo(x, y);
  ctx.stroke();
}


// -handler- capture the arrow keys
function handleKey(e){
  if (e.key.includes('Arrow')){
    e.preventDefault();
    draw({key: e.key});
  }
};

// Clear-shake function
function clearCanvas(){
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, 1600, 1000);
  canvas.addEventListener('animationend', function(){
    canvas.classList.remove('shake');
  }, 
  {once: true}
  );
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeBtn.addEventListener('click', clearCanvas);

});


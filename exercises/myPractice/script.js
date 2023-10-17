const mainContainer = `
  <header>
    <h1>Welcome to Proyecto Spencer</h1>
    <img src="https://placekitten.com/600/400" alt="cute kitten"/>
  </header>
  <main>
    <p>My web my rulz. Yes, I'am 34yo</p>
  </main>
  <footer>
    <h2>Just a regular pgraph</h2>
  </footer>
`;

const web = document.createRange().createContextualFragment(mainContainer);
document.body.appendChild(web);

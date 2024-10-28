// const headerElement = document.querySelector('.header');
// const puvodniObsah = headerElement.textContent;
// headerElement.textContent = 'Dobré ráno';

// console.log(headerElement.textContent)
// document.body.innerHTML += headerElement.textContent

// headerElement.style.color = 'brown';
// headerElement.style.marginBottom = '2rem'

//headerElement.classList.add('new-header');

const natureElement = document.querySelector('.nature');
natureElement.src = 'images/poust.jpg';
natureElement.alt = 'Poust';
natureElement.style.width = '500px'

const cardElement = document.querySelector('#card2');

cardElement.style.color = 'red'

// const headerElm = document.querySelector('.header');
// headerElm.innerHTML = '<h1>Hlavicka</h1>'

const pageTitle = 'Moje stranka';
const headerElm = document.querySelector('.header');
headerElm.innerHTML = `<h1>${pageTitle}</h1>`;

const product1 = {
    name: 'Lední brusle',
    price: 1259,
    description:
      'Lední brusle dámské vhodné pro rekreační bruslaře, nůž: klasická svařovaná brusle, nerezová ocel',
    color: 'white',
  };

const card1Elm = document.querySelector('#card1');
card1Elm.innerHTML = `
  <h2 class="product__name">${product1.name}</h2>
  <p class="product__desc">${product1.description}</p>
  <div class="product__price">${product1.price} Kč</div>
  <button>Koupit</button>
`;


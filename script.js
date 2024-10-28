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

// const btnElm = document.querySelector('#login-btn');
// btnElm.classList.remove('btn--off');
// btnElm.classList.add('btn--off');

// Naše tlačítko funguje jako přepínač. Chceme, aby například na kliknutí přepnulo stav z 'vypnuto' na 'zapnuto' a obráceně. To v řeči programátorské znamená: když element obsahuje třídu btn--off tak ji odstraň, v opačném případě ji přidej. Takový kód můžeme napsat pomocí metody contains.

// const btnElm = document.querySelector('#login-btn');
// if (btnElm.classList.contains('btn--off')) {
//   btnElm.classList.remove('btn--off');
// } else {
//   btnElm.classList.add('btn--off');
// }

const btnElm = document.querySelector('#login-btn');
btnElm.classList.toggle('btn--off');

// const btnElm = document.querySelector('#login-btn');
// btnElm.className = 'btn';

// const btnElm = document.querySelector('#login-btn');
// btnElm.className = '';

// const now = dayjs();
// document.body.innerHTML += now.format('DD.MM.YYYY');

const stedryDen = dayjs('2024-12-24')
const dnes = dayjs();

if (dnes.isAfter(stedryDen)) {
    document.body.innerHTML += 'Musíš počkat na příští rok';
} else {
    document.body.innerHTML += 'Už brzy přijde Ježíšek!';
}

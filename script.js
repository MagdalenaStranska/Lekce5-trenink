const headerElement = document.querySelector('.header');
const puvodniObsah = headerElement.textContent;
headerElement.textContent = 'Dobré ráno';

// console.log(headerElement.textContent)
// document.body.innerHTML += headerElement.textContent

headerElement.style.color = 'white';
headerElement.style.marginBottom = '2rem'

//headerElement.classList.add('new-header');

const natureElement = document.querySelector('.nature');
natureElement.src = 'images/poust.jpg';
natureElement.alt = 'Poust';
natureElement.style.width = '500px'

const cardElement = document.querySelector('#card2');
cardElement.style.color = 'red'
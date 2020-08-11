let storedTeddies = JSON.parse(localStorage.getItem('newArticle'))
console.log(storedTeddies);
console.log(storedTeddies.teddyName);

// création de la page du panier
const teddyMain = document.getElementById('product_page');
const teddyDiv = document.createElement('div');
teddyMain.appendChild(teddyDiv);
teddyDiv.className = 'teddy_ref';

const teddyDivCart = document.createElement('div');
teddyDiv.appendChild(teddyDivCart);
teddyDivCart.className = 'teddy_cart';

const teddyH3 = document.createElement('h3');
teddyDivCart.appendChild(teddyH3);
teddyH3.textContent = "Vos oursons :";

for (storedTeddy of storedTeddies) {
    const eachTeddy = document.createElement('div');
    teddyDivCart.appendChild(eachTeddy);
    eachTeddy.className = 'each_teddy';

    const teddiesCart = document.createElement('p');
    eachTeddy.appendChild(teddiesCart);
    teddiesCart.textContent = storedTeddy.quantity + " " + storedTeddy.teddyName + ", " + storedTeddy.teddyColor;

    const teddyPrice = document.createElement('div');
    eachTeddy.appendChild(teddyPrice);
    teddyPrice.className = 'teddy_price';

    const price = document.createElement('p');
    teddyPrice.appendChild(price);
    price.textContent = storedTeddy.teddyPrice + " €"
}

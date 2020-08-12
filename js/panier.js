//récupération données localStorage
let storedTeddies = JSON.parse(localStorage.getItem('newArticle'))
console.log(storedTeddies);

//création tableau "product" pour envoie des id au server


// création de la page du récapitulatif panier
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

//calcul du montant total
let calculPrice = []
for (storedTeddy of storedTeddies) {
    let article = storedTeddy.teddyPrice;
    let quantity = storedTeddy.quantity
    let calcul = article * quantity;
    calculPrice.push(calcul)
};
console.log(calculPrice);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = calculPrice.reduce(reducer);
console.log(totalPrice);

const total = document.createElement('p');
teddyDivCart.appendChild(total);
total.className = 'total'
total.textContent = "Montant total = " + totalPrice + " €";

//création du formulaire de commande
const form = document.createElement('form');
teddyDivCart.appendChild(form);

const teddyH3Bis = document.createElement('h3');
form.appendChild(teddyH3Bis);
teddyH3Bis.textContent = "Pour valider votre commande, merci de remplir ce formulaire : ";



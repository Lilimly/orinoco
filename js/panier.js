//récupération données localStorage
let storedTeddies = JSON.parse(localStorage.getItem('newArticle'));
console.log(storedTeddies);

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

// si le panier est vide 
if(storedTeddies == null){
    const emptyCart = document.createElement('p');
    teddyDivCart.appendChild(emptyCart);
    emptyCart.className = "empty_cart";
    emptyCart.textContent = "Votre panier est tristement vide !"
}

// récupération des éléments du panier
for (storedTeddy of storedTeddies) {
    const eachTeddy = document.createElement('div');
    teddyDivCart.appendChild(eachTeddy);
    eachTeddy.className = 'each_teddy';

    const teddiesCart = document.createElement('p');
    eachTeddy.appendChild(teddiesCart);
    teddiesCart.textContent = storedTeddy.quantity + " " + storedTeddy.teddyName + " , " + storedTeddy.teddyColor;

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

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = calculPrice.reduce(reducer);
console.log(totalPrice);

const total = document.createElement('p');
teddyDivCart.appendChild(total);
total.className = 'total';
total.textContent = "Montant total = " + totalPrice + " €";

//création bouton supression objet du panier
const garbage = document.createElement('button');
teddyDivCart.appendChild(garbage);
garbage.className = 'icon_garbage';

const cartLink = document.createElement('a');
garbage.appendChild(cartLink);
cartLink.href = "panier.html";
cartLink.id = "cart_link"
cartLink.title = 'Vider le panier';
cartLink.textContent = "Vider mon panier ";

const icon = document.createElement('i');
cartLink.appendChild(icon);
icon.className = 'fas fa-trash-alt'

garbage.addEventListener("click", function (event) {
    event.preventDefault();
        alert('Votre panier a bien été vidé !')
        localStorage.removeItem('newArticle');
        window.location.href = "panier.html";
});

//création du formulaire de commande
const form = document.createElement('form');
form.className = 'contact_form';
teddyDivCart.appendChild(form);

const teddyH3Bis = document.createElement('h3');
form.appendChild(teddyH3Bis);
teddyH3Bis.textContent = "Pour valider votre commande, merci de remplir ce formulaire : ";

// ajout formulaire "prénom"
const divFirstName = document.createElement('div');
form.appendChild(divFirstName);
divFirstName.className = 'div_name';

const labelFirstName = document.createElement('label');
divFirstName.appendChild(labelFirstName);
labelFirstName.setAttribute('for', 'prénom');
labelFirstName.textContent = 'Votre prénom : ';

const firstName = document.createElement('input');
divFirstName.appendChild(firstName);
firstName.setAttribute('type', 'text');
firstName.setAttribute('class', 'name');
firstName.required = true;


// ajout formulaire "nom"
const divLastName = document.createElement('div');
form.appendChild(divLastName);
divLastName.className = 'div_name';

const labelLastName = document.createElement('label');
divLastName.appendChild(labelLastName);
labelLastName.setAttribute('for', 'nom');
labelLastName.textContent = 'Votre nom : ';

const lastName = document.createElement('input');
divLastName.appendChild(lastName);
lastName.setAttribute('type', 'text');
lastName.setAttribute('class', 'name');
lastName.required = true;

// ajout formulaire "adresse"
const divAddress = document.createElement('div');
form.appendChild(divAddress);
divAddress.className = 'div_name';

const labelAdress = document.createElement('label');
divAddress.appendChild(labelAdress);
labelAdress.setAttribute('for', 'adresse');
labelAdress.textContent = 'Votre adresse : ';

const address = document.createElement('textarea');
divAddress.appendChild(address);
address.setAttribute('type', 'text');
address.setAttribute('class', 'name');
address.required = true;

// ajout formulaire "ville"
const divCity = document.createElement('div');
form.appendChild(divCity);
divCity.className = 'div_name';

const labelCity = document.createElement('label');
divCity.appendChild(labelCity);
labelCity.setAttribute('for', 'ville');
labelCity.textContent = 'Votre ville : ';

const city = document.createElement('input');
divCity.appendChild(city);
city.setAttribute('type', 'text');
city.setAttribute('class', 'name');
city.required = true;

// ajout formulaire "mail"
const divMail = document.createElement('div');
form.appendChild(divMail);
divMail.className = 'div_name';

const labelMail = document.createElement('label');
divMail.appendChild(labelMail);
labelMail.setAttribute('for', 'email');
labelMail.textContent = 'Votre adresse mail : ';

const mail = document.createElement('input');
divMail.appendChild(mail);
mail.setAttribute('type', 'email');
mail.setAttribute('class', 'name');
mail.required = true;

// création bouton validation
const divSubmit = document.createElement('div');
form.appendChild(divSubmit);
divSubmit.className = 'div_name';

let submit = document.createElement('button');
divSubmit.appendChild(submit);
submit.type = 'submit';
submit.name = 'add';
submit.id = 'valid';
submit.textContent = "Valider votre commande";


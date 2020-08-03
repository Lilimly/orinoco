//récupération de l'ID de l'ourson de la page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

const getTeddies = async function() {
    //récupération des données de l'API 
    let response = await fetch('http://localhost:3000/api/teddies/')
    let teddies = await response.json().catch(error => alert("Erreur : " + error));
    
    // récupération des données du teddy de la page
    const teddy = teddies.find(x => x['_id'] === id);
    console.log(teddy);

    // création h2 de la page
    const teddyMain = document.getElementById('product_page');
    const teddyH2 = document.createElement('h2');
    teddyMain.appendChild(teddyH2);
    teddyH2.textContent = "Oribears vous présente " + teddy.name;

    // création div de l'ourson
    const teddyDiv = document.createElement('div');
    teddyMain.appendChild(teddyDiv);
    teddyDiv.className = 'teddy_ref';

    //ajout image à la div ourson
    const teddyImg = document.createElement('img');
    teddyDiv.appendChild(teddyImg);
    teddyImg.setAttribute('src', teddy.imageUrl);
    teddyImg.setAttribute('alt', 'Ours en peluche ' + teddy.name);
    teddyImg.setAttribute('title', 'Ours en peluche ' + teddy.name);

    //création div de présentation
    const teddyDivInfo = document.createElement('div');
    teddyDiv.appendChild(teddyDivInfo);
    teddyDivInfo.className = 'teddy_info';

    // ajout nom teddy
    const teddyH3 = document.createElement('h3');
    teddyDivInfo.appendChild(teddyH3);
    teddyH3.textContent = teddy.name;

    // ajout description
    const teddyPar = document.createElement('p');
    teddyDivInfo.appendChild(teddyPar);
    teddyPar.textContent = teddy.description;

    // ajout prix
    const teddyPrice = document.createElement('p');
    teddyDivInfo.appendChild(teddyPrice);
    teddyPrice.textContent = "Son prix : " + teddy.price / 100 + " €";
    teddyPrice.className = 'teddy_price';

    // création choix couleur
    const form = document.createElement('form');
    teddyDivInfo.appendChild(form);
    const formDiv = document.createElement('div');
    form.appendChild(formDiv);
    formDiv.className = 'colors_choice';

    const label = document.createElement('label');
    formDiv.appendChild(label);
    label.textContent = "Personnalisez sa couleur : ";
    label.setAttribute('for', "Choix de couleurs de " + teddy.name);

    const select = document.createElement('select');
    formDiv.appendChild(select);
    select.setAttribute('name', "Choix de couleurs de " + teddy.name);
    select.setAttribute('id', "select_1 ");

    // ajout des différentes couleurs 
    const colors = teddy.colors;

    for (i = 0; i < colors.length; i++) {
        const selectOption = document.createElement('option');
        select.appendChild(selectOption);
        selectOption.textContent = colors[i];
        selectOption.setAttribute("value", colors[i]);
    }

    // ajout nombre de produit désiré
    const formDiv2 = document.createElement('div');
    form.appendChild(formDiv2);
    formDiv2.className = 'number';

    const label2 = document.createElement('label');
    formDiv2.appendChild(label2);
    label2.textContent = "Nombre souhaité : ";
    label2.setAttribute('for', "Nombre souhaité");

    const select2 = document.createElement('select');
    formDiv2.appendChild(select2);
    select2.setAttribute('name', "Nombre souhaité");
    select2.setAttribute('id', "select_2");

    for (i = 0; i <= 10; i++) {
        const selectOption2 = document.createElement('option');
        select2.appendChild(selectOption2);
        selectOption2.textContent = i;
        selectOption2.setAttribute("value", i);
    }
    
    // création bouton panier
    let addTeddy = document.createElement('button');
    form.appendChild(addTeddy);
    addTeddy.type = 'submit';
    addTeddy.name = 'add';
    addTeddy.id = 'submit';
    addTeddy.textContent = "Ajouter au panier"

    // récupérations données et envoie au panier
    addTeddy.addEventListener("click", function (event) {
        event.preventDefault();

    // stockage des données du/des teddy souhaité dans localStorage
        let newArticle = [];
        let teddiesChoosen = {
            teddyName: teddy.name,
            teddyId: teddy._id,
            teddyColor: select.value,
            teddyValue: select2.value,
            teddyPrice: teddy.price / 100,
        };

        newArticle.push(teddiesChoosen);
        localStorage.setItem('newArticle', JSON.stringify(newArticle));

        const storedTeddies = JSON.parse(localStorage.getItem('newArticle'));
        console.log(storedTeddies);

        console.log(localStorage)

        //création d'alertes en fonction du nombre d'ourson choisi et envoie vers panier
        const teddyValue = select2.value;
        const teddyColor = select.value;
        if(teddyValue == 1){
            if (window.confirm(teddy.name + " " + teddyColor + ' a bien été ajouté. Souhaitez vous consulter votre panier ?')) { 
                window.open("panier.html");
            }
        } else if(teddyValue > 1){
            if (window.confirm(teddyValue + " " + teddy.name + " " + teddyColor + ' ont bien été ajoutés. Souhaitez vous consulter votre panier ?')) { 
                window.open("panier.html");
            }
        } else {
            alert("Veuillez selectionner un nombre d'ourson souhaité");
        }
    });
}

//appel de la fonction getTeddies
getTeddies();

    //récupération du nombre de teddy souhaité dans localStorage
    /*select2.addEventListener('change', function (event) {
        event.preventDefault();
        const teddyValue = select2.value;
        localStorage.setItem('teddyValue', teddyValue);
        console.log(localStorage);
    });
    */

           // récupération du nombre de teddy souhaité dans localStorage

        /*const teddyColor = select.value;
        localStorage.setItem('teddyColor', teddyColor);

        const teddyValue = select2.value;
        localStorage.setItem('teddyValue', teddyValue);

        console.log(localStorage);*/
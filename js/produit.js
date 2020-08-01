//récupération de l'ID de l'ourson de la page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

const getTeddies = async function() {
    //récupération des données de l'API 
    let response = await fetch('http://localhost:3000/api/teddies/' + queryString)
    let teddies = await response.json().catch(error => alert("Erreur : " + error));
    
    // récupération des données du teddy de la page
    const teddy = teddies.find(x => x['_id'] === id);
    console.log(teddy);
    console.log(teddy.name);
    console.log(teddy.colors);

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
    teddyPrice.textContent = teddy.price / 100 + " €";

}

//appel de la fonction getTeddies
getTeddies();
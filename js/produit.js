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

}

//appel de la fonction getTeddies
getTeddies();
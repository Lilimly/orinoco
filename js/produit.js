const getTeddies = async function() {
    //récupération des données de l'API 
    let response = await fetch('http://localhost:3000/api/teddies')
    let teddies = await response.json().catch(error => alert("Erreur : " + error));
    
    console.log(teddies);

    const queryString = window.location.search;
    console.log(queryString);
    let idTeddy = queryString.substr(4);
    console.log(idTeddy)
}

getTeddies();
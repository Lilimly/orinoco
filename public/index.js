let jsondata = fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => alert("Erreur : " + error));




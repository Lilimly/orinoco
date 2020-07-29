const element = document.getElementById('teddies');
element.innerHTML = '<section class="teddy"><img class="teddy_img" src="" alt="" title=""><div class="teddy_ref"><h3 class="teddy_name"></h3><p class ="teddy_price"></p></div></section>';
const teddySection = element.innerHTML;

const getTeddies = async function() {
    let response = await fetch('http://localhost:3000/api/teddies')
    let teddies = await response.json()
    console.log(teddies);

    for (let teddy of teddies) {
        console.log(teddy);

        const newTeddy = document.createRange().createContextualFragment(teddySection);
        
        newTeddy.querySelector('.teddy_img').src = teddy.imageUrl;
        newTeddy.querySelector('.teddy_img').alt = "Ours en peluche " + teddy.name;
        newTeddy.querySelector('.teddy_img').title = "Ours en peluche " + teddy.name;
        newTeddy.querySelector('.teddy_name').textContent = teddy.name;
        newTeddy.querySelector('.teddy_price').textContent = teddy.price + " $";
        
        element.appendChild(newTeddy);
    }
    

}

getTeddies();





/* function getTeddies(){
    const response = fetch("http://localhost:3000/api/teddies")
        .then(response => response.json()).then(console.log)
        .catch(error => alert("Erreur : " + error));

    console.log("response = " + response);
    
    for(i = 0; i < teddies.length; i++){
        console.log(teddies[i]);
    }
}

getTeddies(); */









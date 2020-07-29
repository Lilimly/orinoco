const getTeddies = async function() {
    let response = await fetch('http://localhost:3000/api/teddies')
    let teddies = await response.json()
    console.log(teddies);

    for (let teddy of teddies) {
        const teddiesDiv = document.getElementById('teddies');

        //création section "teddy"
        const teddiesSection = document.createElement('section');
        teddiesDiv.appendChild(teddiesSection);
        teddiesSection.className = 'teddy';

        //création image Teddy + src, alt et title
        const teddyImg = document.createElement('img');
        teddiesSection.appendChild(teddyImg);
        teddyImg.setAttribute('src', teddy.imageUrl);
        teddyImg.setAttribute('alt', 'Ours en peluche ' + teddy.name);
        teddyImg.setAttribute('title', 'Ours en peluche ' + teddy.name);

        //création div teddyRef
        const teddiesRef = document.createElement('div');
        teddiesSection.appendChild(teddiesRef);
        teddiesRef.className = 'teddy_ref';

        //création h3 de teddyRef
        const h3TeddiesRef = document.createElement('h3');
        teddiesRef.appendChild(h3TeddiesRef);
        h3TeddiesRef.textContent = teddy.name;

        //création p de teddyRef
        const pTeddiesRef = document.createElement('p');
        teddiesRef.appendChild(pTeddiesRef);
        pTeddiesRef.textContent = teddy.price;
    }
    

}

getTeddies();

/* function getTeddies(){
    const response = fetch("http://localhost:3000/api/teddies")
        .then(response => response.json()).then(console.log)
        .catch(error => alert("Erreur : " + error));
}*/









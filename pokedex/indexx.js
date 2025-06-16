async function fetchData() {

    try {
        const pokemonName = document.getElementById("search").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not find");
        }


        const data = await response.json();
        console.log(data);
        const pokeNumber = data.id;
        const pokeName = data.name.toUpperCase();
        const pokeSprite = data.sprites.front_default;
        const pk = data.types;
        const pokeWeight = data.weight;
        const pokeHeight = data.height;
        const arr = data.abilities;
        const abilityNames = arr.map(abilityObj => abilityObj.ability.name.toUpperCase());
        const pokeType = pk.map(abilityObj => abilityObj.type.name.toUpperCase());

        document.getElementById("num").innerHTML = "No."+pokeNumber;
        document.getElementById("name").innerHTML = pokeName;
        document.getElementById("weight").innerHTML = pokeWeight;
        document.getElementById("height").innerHTML = pokeHeight;
        document.getElementById("hero-img").src = pokeSprite;
        document.getElementById("info-img").src = pokeSprite;

        
        const abilitiesList = document.getElementById('abilities-list');
        abilityNames.forEach(abilityName => {
            const listItem = document.createElement('li');
            listItem.textContent = abilityName;
            abilitiesList.appendChild(listItem);
        });
        const TypeList = document.getElementById('type');
        pokeType.forEach(typeName => {
            const listItem = document.createElement('li');
            listItem.textContent = typeName;
            TypeList.appendChild(listItem);
        });
        

    } 
    catch(error) {
        alert("Type Correct Name");
    }
}


    
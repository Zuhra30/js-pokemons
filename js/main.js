let elCard = utilsEl("#js-pokemons-card");

pokemons.forEach((pokemon) => {
    let liElement = createElementUtils("li", "pokemons-list");
    let imgElement = createElementUtils("img", "pokemons-img");
    let headingElement = createElementUtils("h2", "text-center text-success", pokemon.name);
    let textElement = createElementUtils("p", "text-center text-success", pokemon.type.join(", "));

    imgElement.setAttribute("src", pokemon.img);
    
    liElement.appendChild(imgElement);
    liElement.appendChild(headingElement);
    liElement.appendChild(textElement);

    elCard.appendChild(liElement);
});
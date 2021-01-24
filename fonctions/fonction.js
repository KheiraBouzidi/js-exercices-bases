function buildChapitre(titre, texte) {
    let divChapitre = document.createElement("div");
    let titreChapitre = document.createElement("h1");
    let paraChapitre = document.createElement("p");

    titreChapitre.textContent = titre;
    paraChapitre.textContent = texte;

    divChapitre.appendChild(titreChapitre);
    divChapitre.appendChild(paraChapitre);
    return divChapitre;

}
   

 chapitres = [
    {
        titre: "Voici mes chapitres !",
        texte: "Un ordinateur vous permet de faire plus de bêtises, beaucoup plus rapidement, que n’importe quelle autre invention dans l’histoire de l’humanité. À l’exception notable des armes à feu et de la tequila — Mitch Ratcliffe",
    },
    {
        titre: "Chapitre 1 ",
        texte: "Si les ouvriers construisaient les bâtiments comme les développeurs écrivent leurs programmes, le premier pivert venu aurait détruit toute civilisation — Gerald Weinberg",
    },
    {
        titre: "Chapitre 2",
        texte: "Si debugger, c’est supprimer des bugs, alors programmer ne peut être que les ajouter — Edsger Dijkstra",
    },
    {
        titre: "Chapitre 3 ",
        texte: "Avant de vouloir qu’un logiciel soit réutilisable, il faudrait d’abord qu’il ait été utilisable — Ralph Johnson",
        
    },
];


chapitres.forEach((chapitre) => {
    document.body.appendChild(buildChapitre(chapitre.titre, chapitre.texte));
});
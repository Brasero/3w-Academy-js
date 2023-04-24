"use strict";

// Ecrivez un Algorithme qui stocks les nombres premier entre 1 et 100 dans un tableau et le retourne

// On commence par créer une fonction
function premier() {
    // On crée un tableau vide qui va contenir nos nombres premiers
    let tab = [];
    // On va ensuite créer une boucle qui va s'exécuter 100 fois
    for (let i = 1; i <= 100; i++) {
        // on part du principe que le nombre évalué est premier jusqu'à preuve du contraire
        let isPremier = true;
        // On va ensuite créer une boucle qui va s'exécuter tant que l'on n'a pas prouvé que le nombre n'est pas premier

        for (let j = 2; j < i; j++) {
            // Si le nombre évalué est divisible par un nombre différent de 1 ou de lui-même, alors il n'est pas premier
            // On utilise ici le modulo qui permet de savoir si le reste de la division d'un nombre par un autre est égal à 0
            if (i % j === 0 && i !== j) {
                // Si le nombre n'est pas premier, on met la variable isPremier à false
                isPremier = false;
                // On sort de la boucle
                break;
            }
        }
        // On vérifie si le nombre est premier
        if (isPremier) {
            // Si c'est le cas, on l'ajoute à notre tableau sinon on ne fait rien
            tab.push(i);
        }
    }
    // On finit par retourner notre tableau
    return tab;
}

document.getElementById('app').innerHTML = `${premier().join('<br>')}<br><br>`;
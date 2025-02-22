let container=document.getElementById("taskContainer")

let input=document.getElementById("taskInput") // input
let button=document.querySelector("button")
let taskList=document.getElementById("taskList") // ul

input.value=""

let listeDeTaches=["i", "i++"]// pourquoi ? jamais vu en cours, pas un tableau vide mais 2 chaines de caractère  0.5point

console.log(listeDeTaches);// que vois tu?


button.addEventListener("click",  ajouterTache) // syntaxe correct
    



function ajouterTache(){
                                                                                         // fonction pour ajouter tâche  2.5
    console.log("val input : " + input.value);
        
    for (let i = 0; i < listeDeTaches.length; i++) {
       affichetache()
        listeDeTaches.push([input.value])// tu as push un nouveau tableau avec les [] resultat tableau imbriqué au lieu d'ajouter chaine de caractère
        console.log("console listeDeTaches  : ", listeDeTaches);// que vois tu?
        return// pourquoi?
    }

}

function affichetache(){

    let li=taskList.appendChild(document.createElement("li"))                                // fonction pour afficher, pas de bouton de supression   2
    li.textContent=input.value
}

    

    
// github 1
// 2.5

// aucun commentaire ou si peu 0.5
//pas de fonction ou code de suppression 0


// note  9/20
let container=document.getElementById("taskContainer")

let input=document.getElementById("taskInput") // input
let button=document.querySelector("button")
let taskList=document.getElementById("taskList") // ul

input.value=""

let listeDeTaches=[]// pourquoi ? jamais vu en cours, pas un tableau vide mais 2 chaines de caractère  0

console.log(listeDeTaches);// que vois tu?


button.addEventListener("click",  ajouterTache) // syntaxe correct
    
 


function ajouterTache(){
                                                                                        
    console.log("val input : " + input.value);
    
    for (let i = 0; i < listeDeTaches.length; i++) {
        listeDeTaches.push(input.value)// tu as push un nouveau tableau avec les [] resultat tableau imbriqué au lieu d'ajouter chaine de caractère
        // return// pourquoi? inutile ici
    }
    affichertache()
    
}

function affichertache(){
    console.log("console listeDeTaches  : ", listeDeTaches);// que vois tu?

    let li=taskList.appendChild(document.createElement("li"))                            
    li.textContent=input.value
}

    

    
// github                                                                          1
// declartion tableau  listedetache vide : ( tableau déclaré mais non vide )      0.5

//  fonction ajoutertache la fonction n'est pas faite mais le code est present     2
// function affichertache : le code est fait mais sans ajout de bouton supprimer   2
//pas de fonction ou code de suppression                                           0
// lien entre les fonctions  pas de fonction mais il y a push et affichage         1 


// aucun commentaire ou si peu                                                    0.5


//                                                                         note  7/20



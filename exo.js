
// // * Exercice 8 : Afficher une liste d'éléments depuis un tableau et ajouter un événement au clic
// //  */
// const utilisateurs = ["Alice", "Bob", "Charlie", "David"];
// const listeUtilisateurs = document.getElementById("listeUtilisateurs");

// for (let i = 0; i < utilisateurs.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = utilisateurs[i];
//     li.addEventListener("click", function() {
//         alert("Utilisateur sélectionné : " + utilisateurs[i]);
//     });
//     listeUtilisateurs.appendChild(li);
// }

// /**
//  * Exercice 4 : Ajouter un élément à une liste au clic sur un bouton
//  */
// const boutonAjoutListe = document.getElementById("ajouterListe");
// const listeElements = document.getElementById("maListe");

// boutonAjoutListe.addEventListener("click", function() {
//     const nouvelItem = document.createElement("li");
//     nouvelItem.textContent = "Nouvel élément";
//     listeElements.appendChild(nouvelItem);
// });


// * Exercice 4 : creer une liste de noms depuis une variable utilisateur contenant un tableau et la mettre dans une div du dom
// * 
// * pour cela creer une bloucle for qui boucle sur le tableau
// * ajouter createElement "li" et 
// * ajouter un textContent a "li" qui sera le i (index) de utilisateur
// * 
// * creer une fonction au click affichant une alert quand un nom de la liste du tableau est cliqué.
// * dans l'arte il est ecris " vous avez cliqué sur + "nom de l'utlisateur cliqué" "
// * 
// */



// const utilisateurs = ["Alice", "Bob", "Charlie", "David"];


// for(i=0;i<utilisateurs.length;i++){

   
// }


========MU

    // for (let i = 0; i < listeDeTaches.length; i++) {
//     let li = listeDeTaches[i];
//     li.textCntent=input.value
    
    
// }


// for (let i = 0; i < listeDeTaches.length; i++) {
//     let li = listeDeTaches[i];
//     li.textCntent=input.value
    
  
        
    // }
    // if (valeur.!isNaN) {
    //     alert("PAS DE CHIFFRES")
    // }
}
========MU


const user=document.querySelectorAll(".user")
console.log("user",user)
const userClass=document.getElementsByClassName("user")
console.log("userClass",userClass)

for(let i=0;i<userClass.length;i++){

   userClass[i].addEventListener("click",function(){

       userClass[i].style.backgroundColor="black"
   })

}

// for (let i = 0; i < userClass.length; i++) {


//     userClass[i].addEventListener("click", function () {
 
//       for (let j = 0; j < userClass.length; j++) {
//         userClass[j].style.backgroundColor = "black";
 
//       }
     
//     });
//   }
 


const listeUtilisateurs = document.getElementById("listeUtilisateurs");

for (let i = 0; i < utilisateurs.length; i++) {
   const li = document.createElement("li");
   li.textContent = utilisateurs[i];
   li.addEventListener("click", function() {
       alert("Utilisateur sélectionné : " + utilisateurs[i]);
   });
   listeUtilisateurs.appendChild(li);
}
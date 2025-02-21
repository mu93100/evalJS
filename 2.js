
let input=document.getElementById("taskInput")
let buttonAdd=document.getElementById("buttonAdd")
let ul=document.getElementById("taskList")

// input.value=""

let listeDeTaches=[]
document.createElement("listeDeTaches")
let tbody = document.createElement("tbody");
listeDeTaches.appendchild("tbody")
console.log("listeDeTaches :", listeDeTaches);

// buttonAdd.addEventListener("click", function ajouterTache() {
   
   







//     const nouvelTache=document.createElement("li")
//     ul.appendChild(li)
    
// })
// {/* <input type="button" value="Generate a table." onclick="generate_table()" />
// function generate_table() {
//     // get the reference for the body
//     var body = document.getElementsByTagName("body")[0];
  
//     // creates a <table> element and a <tbody> element
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
  
//     // creating all cells
//     for (var i = 0; i < 2; i++) {
//       // creates a table row
//       var row = document.createElement("tr");
  
//       for (var j = 0; j < 2; j++) {
//         // Create a <td> element and a text node, make the text
//         // node the contents of the <td>, and put the <td> at
//         // the end of the table row
//         var cell = document.createElement("td");
//         var cellText = document.createTextNode(
//           "cell in row " + i + ", column " + j,
//         );
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
  
//       // add the row to the end of the table body
//       tblBody.appendChild(row);
//     }
  
//     // put the <tbody> in the <table>
//     tbl.appendChild(tblBody);
//     // appends <table> into <body>
//     body.appendChild(tbl);
//     // sets the border attribute of tbl to 2;
//     tbl.setAttribute("border", "2");
//   } */}

// Fonction ajouterTache (4 points) : 
// Écrivez une fonction qui prend une chaîne de caractères en paramètre et l'ajoute au tableau 
// listeDeTaches.  
// Assurez-vous que la tâche est ajoutée lorsque l'utilisateur clique sur le bouton "Ajouter". 
// Fonction afficherTaches (4 points) : 
// Créez une fonction qui parcourt le tableau listeDeTaches et affiche chaque tâche dans la liste (ul) 
// dans le HTML.  
// Chaque tâche doit avoir un bouton "Supprimer". 
// Fonction supprimerTache (4 points) : 
// Écrivez une fonction qui prend un index comme paramètre et supprime la tâche correspondante du 
// tableau listeDeTaches.  
// Mettez à jour l'affichage de la liste après suppression. 
// Assurez-vous que les fonctions sont correctement intégrées aux événements.  
// Le bouton "Ajouter" doit appeler ajouterTache, et les boutons "Supprimer" doivent appeler 
// supprimerTache.
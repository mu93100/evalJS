let container=document.getElementById("taskContainer")

let input=document.getElementById("taskInput") // input
let button=document.querySelector("button")
let taskList=document.getElementById("taskList") // ul

input.value=""

let listeDeTaches=["i", "i++"]

console.log(listeDeTaches);


button.addEventListener("click", function ajouterTache() {
    console.log("val input : " + input.value);
        
        for (let i = 0; i < listeDeTaches.length; i++) {
            let li=taskList.appendChild(document.createElement("li"))
            li.textContent=input.value
            // console.log("console listeDeTaches : ", listeDeTaches[i]);
            // li.textContent=listeDeTaches[i]

            listeDeTaches.push([input.value])
            console.log("console listeDeTaches  : ", listeDeTaches);
            return
        }

})

    

    

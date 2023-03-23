const sidebar = document.getElementById("side-bar")

const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
const span3 = document.getElementById("span3")


btn.addEventListener("click",()=>{
    sidebar.classList.toggle("clicked");

    span1.classList.toggle("span1");
    span2.classList.toggle("span2");
    span3.classList.toggle("span3");
    
    
})
// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

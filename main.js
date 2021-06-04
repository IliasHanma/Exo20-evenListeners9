// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément
//  s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur 
//  d'événement sur chaque élément !
let myDiv = Array.from(document.querySelector('div').children);
console.log(myDiv);

let btn = document.querySelector('input');
console.log(btn);



  btn.addEventListener('click',()=>{

    myDiv.forEach(element => {
         console.log(element);
     });
  })


  let tabDiv = Array.from(document.querySelector("div").children);

// let logTest = (log) => {
//     console.log(log);
// }

// maDiv.forEach(element => {
//     element.addEventListener('click', () => {
//         logTest(element);
//     });
// });


// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

let myDiv2 = document.querySelector('div');
console.log(myDiv2);
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let p = document.querySelector('p');




h1.addEventListener('click',() =>{
h1.textContent = h1.textContent.toUpperCase();

});

h2.addEventListener('click',() =>{
  h2.textContent = h2.textContent.toUpperCase();
  
  });

p.addEventListener('click',() =>{
    p.textContent = p.textContent.toUpperCase();
    
    });




    let eltDiv = document.querySelector("#content");
console.log(eltDiv)

eltDiv.addEventListener('dblclick', (e) => {
    if(tabDiv.includes(e.target)){
        e.target.textContent = e.target.textContent.toUpperCase();
    }
});

// 1 et 2

// let myDiv = Array.from(document.getElementById('content').children);
// myDiv.forEach(element => {
//     element.addEventListener("click", ()=>{
//         console.log(element);
//     })
//     element.addEventListener("dblclick" , () => {
//         element.innerText = element.innerText.toUpperCase();
//     })
// });





// ### 3. Qui un programme qui au hasard choisis parmis les propriétés suivants et
//  l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;



let btnGo = document.querySelector("input");
let index;
let propFinal;

let tabProp = ["border: 1px solid gold;","background-color: blue;", "background-color: red;", "border: 5px dotted gold;"];

let random = (elem) => {
    index = Math.floor(Math.random()*tabProp.length);
    propFinal = tabProp[index];
    elem.setAttribute('style', propFinal);
}

btnGo.addEventListener('click', () => {
    tabDiv.forEach(element => {
        random(element)
    });
})
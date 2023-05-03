//const mn = document.getElementById("menu");
//console.log(mn.textContent);


// const aElements = document.getElementsByTagName("a");
// const aElementsArray = [...aElements];

// aElementsArray.forEach((a)=>{
//     console.log(a);
// });

// console.log(aElementsArray);
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];

const imgElements = [...document.getElementsByTagName("img")];
//const imgElementsArray = [...imgElements];

imgElements.forEach((img)=>{
    console.log(`Path as imagens : ${img.src}`);
});

const botao = document.querySelector("div > button");

botao.addEventListener("click", ()=> {
    alert("tchau!!!");
});
console.log(botao);
// console.log(aElementsArray);
// let nr1 = [1,2,3,4,5];
//let nr2 = [6,7,8,9,10];






//console.log(nr1);
//console.log(nr2);
//console.log("NOVO ARRAY " +  nr3);
//let nr3 = [nr1,nr2];




//nr3.forEach( (numero)=>{
    //console.log("ITEM DO ARRAY : " + numero); 

//});
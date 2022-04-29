const makeBigger = () => {
   var h1 = document.querySelector("h1")
   var p = document.querySelector("p")
   h1.style.fontSize = '5em'
   p.style.fontSize = '2em'
}

const makeSmaller = () => {
   var h1 = document.querySelector("h1")
   var p = document.querySelector("p")
   h1.style.fontSize = '1em'
   p.style.fontSize = '0.5em'
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);


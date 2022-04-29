const makeBigger = () => {
   alert('make bigger!');
};

const makeSmaller = () => {
   alert('make smaller!');
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);


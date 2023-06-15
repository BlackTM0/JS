const mytext = document.querySelector('#inputField'); 
const newtext = document.querySelector('#duplicateField'); 
const buttonclick = document.querySelector('#btn');

mytext.addEventListener('input', () => { 
    newtext.textContent = mytext.value; 
}); 
//При использовании keydown в newtext выводится, начиная со второго символа. Поэтому использовал input
buttonclick.addEventListener('mousedown', (event) => { 
   console.log(mytext.value); 
   mytext.value =''; 
   newtext.textContent = mytext.value; 
   
} ); 

const alr = document.querySelector('#already'); 
alr.addEventListener('click', ()=> { 
    alert('Вы уже здесь'); 
})
const consolelog = document.querySelector('#consoleLog'); 
consolelog.addEventListener ('click', () => { 
    alert('Метод для вывода сообщения в веб-консоль'); 
})

const alert1 = document.querySelector('#alert'); 
alert1.addEventListener ('click', () => { 
    alert('Метод вывода модального окна с сообщением пользователю'); 
})


const prompt1 = document.querySelector('#prompt');
prompt1.addEventListener ('click', () => { 
    alert('Метод вывода модального окна с текстовым полем для ввода данных'); 

})

const alr = document.querySelector('#already'); 
alr.addEventListener('click', ()=> { 
    alert('Вы уже здесь'); 
})

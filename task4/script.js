const linkEl = document.querySelector('#link');

      linkEl.addEventListener('click', (event) => {
        event.preventDefault();
        const inputText = prompt('Введите текст для ссылки');
        if (inputText !== null) {
          linkEl.textContent = inputText;
        }
      });

      const alr = document.querySelector('#already'); 
alr.addEventListener('click', ()=> { 
    alert('Вы уже здесь'); 
})
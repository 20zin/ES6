const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul')

form.addEventListener('submit', (event) => {
    event.preventDefault(); //값 저장
    
    if(input.value !== ''){
        const li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li); //차례대로 저장

        input.value = '';
    }
});


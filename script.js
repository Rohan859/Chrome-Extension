let inputEl = document.getElementById('input-el');
let buttonEl = document.getElementById('input-btn');
let displayEl = document.getElementById('display-el')
let inputArr = [];
let localStorageArr = JSON.parse(localStorage.getItem('input-ele'));


if(localStorageArr) 
{
    inputArr = localStorageArr;
    render();
}

buttonEl.addEventListener('click', () => {
    inputArr.push(inputEl.value);
    localStorage.setItem('input-ele', JSON.stringify(inputArr));
    inputEl.value = '';
    render();
});


buttonEl.removeEventListener('click', () => {}
);


function render() {

    displayEl.innerHTML = ''; // Clear previous list items

    for (let key in inputArr) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = inputArr[key].startsWith('https') ? inputArr[key] : `https://${inputArr[key]}`;
        a.textContent = inputArr[key];
        a.target = '_blank';
        li.appendChild(a);
        displayEl.appendChild(li);
    }
}


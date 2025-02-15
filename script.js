let inputEl = document.getElementById('input-el');
let buttonEl = document.getElementById('input-btn');
let displayEl = document.getElementById('display-el')
displayEl.style.display = 'none';
let inputArr = [];



buttonEl.addEventListener('click', () => {
    displayEl.style.display = 'block';
    inputArr.push(inputEl.value);
    console.log(inputArr);
    localStorage.setItem('input-ele', JSON.stringify(inputArr));
    inputEl.value = '';
    render();
});


buttonEl.removeEventListener('click', () => {}
);



function render() {
    let localStorageArr = JSON.parse(localStorage.getItem('input-ele'));
    let li = document.createElement('li');

    for(let key in localStorageArr)
    {
        li.textContent = localStorageArr[key];
        displayEl.appendChild(li);
    }
}

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
    displayEl.innerHTML = ''; // Clear previous list items

    for (let key in localStorageArr) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = localStorageArr[key].startsWith('https') ? localStorageArr[key] : `https://${localStorageArr[key]}`;
        a.textContent = localStorageArr[key];
        a.target = '_blank';
        li.appendChild(a);
        displayEl.appendChild(li);
    }
}

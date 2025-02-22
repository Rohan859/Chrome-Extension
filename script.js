import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, 
         ref,
         push, 
         onValue,
         remove} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";




const firebaseConfig = 
{
    databaseURL: 'https://chrome-extension-a160b-default-rtdb.asia-southeast1.firebasedatabase.app/',
    apiKey: "AIzaSyAnHNd5dAapXk5uCRihBbazudwuHdFF1E8",
    authDomain: "chrome-extension-a160b.firebaseapp.com",
    projectId: "chrome-extension-a160b",
    storageBucket: "chrome-extension-a160b.firebasestorage.app",
    messagingSenderId: "781378670114",
    appId: "1:781378670114:web:f4ebc56fc4b44d1ddfc47b"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database,"Rohan'sDatabase");


console.log(database);
console.log(firebaseConfig.databaseUrl);
console.log(dbRef);


let inputEl = document.getElementById('input-el');
let saveBtn = document.getElementById('input-btn');
let displayEl = document.getElementById('display-el')
let deleteBtn = document.getElementById('delete-btn');




saveBtn.addEventListener('click', () => {
    push(dbRef,inputEl.value);
    inputEl.value = '';
});


deleteBtn.addEventListener('dblclick', () => {
    remove(dbRef);
    displayEl.innerHTML = '';
});




onValue(dbRef, (snapshot) => {
    if(snapshot.exists()) 
    {
        const data = snapshot.val();
        if(data != null)
        {
            const leadsArr = Object.values(data);
            console.log(leadsArr);
            render(leadsArr);
        }
    }
});



function render(leads) {

    displayEl.innerHTML = ''; // Clear previous list items

    for (let key in leads) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = leads[key].startsWith('https') ? leads[key] : `https://${leads[key]}`;
        a.textContent = leads[key];
        a.target = '_blank';
        li.appendChild(a);
        displayEl.appendChild(li);
    }
}




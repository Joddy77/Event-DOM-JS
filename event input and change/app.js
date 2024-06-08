const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

// input.addEventListener('change', (e) => {
//     console.log('Nilai Berubah');
// })

input.addEventListener('input', (e) => {
    document.querySelector('h1').innerText = input.value;
    console.log('Nilai Berhasil di Input');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteValue = input.value;
    const newList = document.createElement('li');
    newList.innerText = noteValue;
    list.append(newList);
    input.value = '';
})
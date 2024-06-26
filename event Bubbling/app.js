const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', (e) => {
    container.style.backgroundColor = generateRandomColor();
    e.stopPropagation(); // event stopPropagation untuk 
});

container.addEventListener('click', () => {
    container.classList.toggle('hide');
});

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    return `rgb(${r}, ${g}, ${b})`;
};
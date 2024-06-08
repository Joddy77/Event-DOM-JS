const form =  document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted form');
})

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault(); // preventDefault() untuk mencegah perilaku default dari sebuah event.
    console.log('harusnya ke google');
})
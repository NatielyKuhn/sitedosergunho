window.onload = function() {
    console.log("Bem-vindo ao Clube da Luta!");
};

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Mensagem enviada com sucesso!');
    } else {
        alert('Por 

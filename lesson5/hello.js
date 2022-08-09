document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () => {
        let name = document.querySelector('#name').value;
        document.querySelector('h1').innerHTML = `Hello, ${name}!`;
        return false;
    }
});
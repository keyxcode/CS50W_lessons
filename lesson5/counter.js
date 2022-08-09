// Set the 'counter' var to 0 in local storage, if not existed
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
}

// Utilize anonymous/ lambda function here
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the h1 value
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    
    // Run the count function every 1000ms aka 1s
    setInterval(count, 1000);
});
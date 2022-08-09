document.addEventListener('DOMContentLoaded', () => {
    // // Color Buttons
    // document.querySelectorAll('button').forEach(button => {
    //     button.onclick = () => {
    //         document.querySelector('#hello').style.color = button.dataset.color;
    //     }
    // })

    // Color Dropdown
    document.querySelector('select').onchange = function() {
        // 'this' keyword refers to what receives the event ('select' in this case)  
        // Be careful, however. Can't use the 'this' keyword with arrow functions
        document.querySelector('#hello').style.color = this.value;
    }
})
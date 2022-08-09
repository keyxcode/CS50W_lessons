document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const word = document.querySelector('#word').value;

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#word').innerHTML = word;          

            const phonetic = data[0]['phonetics'][1]['text'];
            document.querySelector('#phonetic').innerHTML = phonetic;
    
            const type = data[0]['meanings'][1]['partOfSpeech'];
            document.querySelector('#type').innerHTML = type;
    
            const definition = data[0]['meanings'][1]['definitions'][0]['definition'];
            document.querySelector('#meaning').innerHTML = definition;

            document.querySelector('#word').value = "";
        })

        return false;
    }
})
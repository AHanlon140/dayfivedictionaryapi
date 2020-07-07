var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var word = document.querySelector('.word');
var stems = document.querySelector('.stems');
var synonyms = document.querySelector('.syns');
var shortdefination = document.querySelector('.shortdef');


button.addEventListener('click', function() {
    return fetch('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + inputValue.value + '?key=4947b55d-df03-40ee-b227-341b279a0db6')
        .then(response => response.json())
        .then(data => {
            console.log(data[0])
            var wordValue = data[0].meta.id;
            var stemValue = data[0].meta.stems.join(', ');
            var synValue = data[0].meta.syns;
            var defValue = data[0].shortdef.join(', ');

            word.innerHTML = wordValue;
            stems.innerHTML = stemValue;
            synonyms.innerHTML = synValue;
            shortdefination.innerHTML = defValue;

        }).catch(err => alert("Invalid Word"))
})
let submitButton = document.querySelector('.submitButton');
let submitInput = document.querySelector('.submitInput');
let lettersContainer = document.querySelector('.letters');

let ghicitoare = "Ana are mere";

function populateText() {
   let text = '';

   for(let i=0; i<ghicitoare.length; i++ ) {

        if(ghicitoare[i] !== " ") {
            text += `<span class="letters__item"><span class="hidden">${ghicitoare[i]}</span></span>`
        }
        
        else {
            text += `<span class="letters__item letters__item--empty"><span class="hidden">${ghicitoare[i]}</span></span>`
        }
   }

   lettersContainer.innerHTML=text;
}

populateText();

function findLetterIndex(letter, str) {

    let indexList = [];

    for(let i=0; i<str.length; i++) {
        if(str[i] === letter) {
            indexList.push(i);
        }
    }

    return indexList;
}

submitButton.addEventListener('click', () => {

    let value = submitInput.value;
    let filtrare = findLetterIndex(value, ghicitoare);
    



    function populateFilteredText() {
        let text = '';


        for(let i=0; i<ghicitoare.length; i++ ) {
     
             if(ghicitoare[i] !== " ") {

                for(let x=0; x<filtrare.length; x++) {

                    if(i == filtrare[x]) {
                        console.log(i);
                        console.log(filtrare[x]);
                        text += `<span class="letters__item"><span>${ghicitoare[i]}</span></span>`
                    }

                    else {
                        text += `<span class="letters__item"><span class="hidden">${ghicitoare[i]}</span></span>`
                    }
                }
                 
             }
             
             else {
                 text += `<span class="letters__item letters__item--empty"><span class="hidden">${ghicitoare[i]}</span></span>`
             }
        }
     
        lettersContainer.innerHTML=text;
     }









} )




















































//todo  functie ce verifica numarul de aparitii a unei litere intr-un text

// function showOccurrence(text, litera) {

//     let number = 0;

//     for(i = 0; i < text.length; i++) {

//         if(text[i] === litera) {
//             number++;
//         }
//     }

//     return number;
// }


// //returneaza textul ghicit

// function returnFoundText(textOriginal,textGhicit){
     

//     let text="";

//     for(let i = 0; i < textOriginal.length; i++){

//         if(textGhicit.includes(textOriginal[i])){

//             text += textOriginal[i];
//         } 
        
//         else{

//             text+=" ";
//         }
//     }

//     return text;
// }


// function init(propozitia){

//     let lettersContainer = document.querySelector(".letters");

//     for(let i = 0; i < propozitia.length; i++) {

//         if(propozitia[i]!=" "){

//         lettersContainer.innerHTML+= `
//             <input type="text" class="letter1" disabled>
//             `
//         }
        
//         else {
//             lettersContainer.innerHTML+= `
//             <input type="text" class="letter1 hidden" disabled>
//             `
//         }
//     }
    
// }

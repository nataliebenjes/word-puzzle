// Business logic
function omitVowels(text) {
    const textArray = text.split("");
    const vowelArray = ["a", "e", "i", "o", "u"]
    textArray.forEach(function(element) {
        if (vowelArray.includes(element)){
            const vowelLocation = textArray.indexOf(element);
            textArray[vowelLocation] = "-";
        }

    })
    return textArray.toString();
}
      

// UI logic
//Hide the original string when you show the resulting word puzzle, so that another person can try and guess it.



function handleFormSubmission(event) {
    event.preventDefault();
    const phrase = document.getElementById("phrase").value;
    const vowelsOmitted = omitVowels(phrase);
    console.log(vowelsOmitted)


    let paragraph = document.createElement("p")
    paragraph.innerText = vowelsOmitted;
    document.body.append(paragraph);
}


window.addEventListener("load", function(){
    const form = document.getElementById("word-puzzle-form");
    form.addEventListener("submit", handleFormSubmission);
    // document.querySelector("form#word-puzzle-form").addEventListener("submit", handleFormSubmission);
})
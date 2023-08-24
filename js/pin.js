function getPin(){
    const pin = generatePin();
    const pinString = pin +'';
    if (pinString.length === 4) {
        // console.log(pin);
        return pin;
        
    }
    else {
        getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById("pin_generate").addEventListener("click", function(){
    const pin = getPin();
    const displayField = document.getElementById("input_field");
    displayField.value = pin;

})

document.getElementById("calculator").addEventListener("click", function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById("type_numbers");
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if( number === 'C'){
            typeNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypeNumber.split("");
            digits.pop();
            const remainingDigits = digits.join("");
            typeNumberField.value = remainingDigits;


        }
    }
    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;

    }
})

document.getElementById("varify_pin").addEventListener("click", function() {
    const inputFieldElement = document.getElementById("input_field");
    const inputField = inputFieldElement.value;

    const numberFieldElement = document.getElementById("type_numbers");
    const numberField = numberFieldElement.value;

    const pinSuccessMessage = document.getElementById("pin_success");
    const pinFailureMessage = document.getElementById("pin_failure");

    if (numberField === inputField){
        
        pinSuccessMessage.style.display = "block";
        pinFailureMessage.style.display = "none";

    }
    else{
        
        pinFailureMessage.style.display = "block";
        pinSuccessMessage.style.display = "none";

    }

})
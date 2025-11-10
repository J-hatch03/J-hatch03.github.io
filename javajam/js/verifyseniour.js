// Prompt user for their age
let age = prompt("Welcome to JavaJam Music Night! Please enter your age: ");

// Get the paragraph element where it will display the message
let messageElement = document.getElementById("verify");

//check if the input is a valid number

if (age !== null && age.trim() !== "" && !isNaN(age)) {
    age = Number(age);
    
    if (age >= 65) { 
        messageElement.innerHTML = "<strong style='color: #231814; font-size: 1.2;'> Free Friday Coffee Night for Seniors!!! </strong>" 
    }
        else {
            messageElement.innerHTML = "<em style='color: #231814;'>Enjoy Music and Make Memories!</em>";
        }
    }
    else {
  // Handle invalid input
        messageElement.innerHTML = "<em>Please refresh and enter a valid age.</em>";
    }


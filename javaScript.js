// Selecting all the buttons and the answer field
const buttons = document.querySelectorAll('.button');
const answerField = document.getElementById('answer');

// Adding event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Getting the button value
    const buttonValue = button.value;
    console.log(buttonValue);
    
    // Clearing the answer field if 'clear' button is clicked
    if (buttonValue === 'clear') {
      answerField.value = '';
    }
    // Evaluating the expression if '=' button is clicked
    else if (buttonValue === '=') {
      answerField.value = eval(answerField.value);
    }
    // Otherwise, appending the button value to the answer field
    else {
      answerField.value = answerField.value + buttonValue;
    }
  });
});

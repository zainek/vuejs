/**
 * Application specifications:
 * Purpose: to provide the end user the ability to build a list of goals using the simple form.
 * How: When the user fills in the input field, they can add that goal to the list by clicking the "Add Goal" button.
 * Expectation: When the button is clicked, a new list enty will be added to the unordered list.
 */

const buttonElement = document.querySelector('button');

const inputElement = document.querySelector('input');

const listElement = document.querySelector('ul');

function addGoal() {
    if (inputElement.value) {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = inputElement.value;
        listElement.appendChild(listItemElement);
        inputElement.value = '';
    }
}

buttonElement.addEventListener('click', addGoal);

/**
 * Application specifications:
 * Purpose: to provide the end user the ability to build a list of goals using the simple form.
 * How: When the user fills in the input field, they can add that goal to the list by clicking the "Add Goal" button.
 * Expectation: When the button is clicked, a new list enty will be added to the unordered list.
 * 
 * This is an imperative approach to solving the problem, meaning we are defining every single step (step-by-step)
 * which should be executed by the browser. Whereas with VueJS we define the desired end result, the data we will need
 * in our Vue app and we will leave it up to Vue to figure out what needs to added, created, updated or changed in
 * the DOM when required.
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

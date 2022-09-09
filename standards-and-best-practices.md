# Standards & Best Practices

### _"HTML code should only output information" ~ Best Practice_
All business logic of a Vue application should be contained within the JavaScript code. No logic should be managed within the HTML code of the application.

In the following simple example we highlight how simple logic is being managed within the Vue controlled HTML and demonstrate how fix it.
```
Breaking the best practice:
<button v-on:click="counter++">Add</button>

Following best practice:
<button v-on:click="add()">Add</button>
```
By moving the simple logic of incrementing the counter out of the HTML code and into a method called `add()`, and calling `add()` from the Vue `v-on` directive on the HTML element, we adhere to this recommended best practice.

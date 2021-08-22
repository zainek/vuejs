![VueJS logo](https://cdn.iconscout.com/icon/free/png-256/vue-282497.png)

# Basics and Core Concepts - DOM Interaction with Vue Notes

### v-bind directive
A resevered name which is recognised and detected by Vue, and lets Vue know to set the value of an HTML attribute with dynamic data.

- interpolation is only_ available between HTML elements, use the v-bind directive to pass dynamic values to an HTML element attribute i.e `v-bind:href="vueLink"` 

### Vue methods
Methods are another option which we can set on the Vue app instance. Methods allow us to define functions to execute when something happens (when called or a user event occurs).

Methods is a JavaScript object which contains functions which should be callable i.e ```
methods: {
    someFunction: function() {...}
    anotherFunction() {...}
}
```

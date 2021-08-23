<img src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png" width="100">

# Basics and Core Concepts - DOM Interaction with Vue Notes

### Interpolation
Interpolation is the mos basic form of data binding, and uses the Mustache_ syntax (double curly braces). Vue will replace the mustache tags with the value of the provided property from the corresponding component instance.
```
<p>{{ goal }}</p>
```
Using interpolation with Vue, we can also execut basic JavaScript expression, use ternary expressions and call methods like:
```
<p>{{ 1 + 1 }}</p>
<p>{{ Math.random() > 0.5 ? true : false }}</p>
<p>{{ outputGoal() }}</p>
```

### v-bind directive
A resevered name which is recognised and detected by Vue, and lets Vue know to set the value of an HTML attribute with dynamic data.
Interpolation is *only* available between HTML elements, use the v-bind directive to pass dynamic values to an HTML element attribute. 
```
<a v-bind:href-"vueLink">learn Vue</a>
```

### v-html directive
By default Vues interpolation treats everyting as a string, even HTML mark-up. This is an added securty feature for our Vue applications as it protects 
X-Site Scripting (XSS). However, Vue also provides us with the `v-html` directive that lets Vue know the content being set between the HTML tags should
be interpreted as HTML.

When using the `v-html` directive, we don't use the mustache syntax. Instead we add it on the HTML element where the directive was applied.
```
<!-- we can pass data properties -->
<p v-html="goal"></p>

<!-- or call a method function -->
<p v-html="outputGoal()"></p>
```

### Vue methods
Methods are another option which we can set on the Vue app instance. Methods allow us to define functions to execute when something happens (when called or a user event occurs).

The Vue methods app property is a JavaScript object which contains a list of callable functions which can be defined in key-value pairs or as named methods i.e
```javascript
methods: {
    /* function defined using key-value paris */
    someFunction: function() {...},

    /* function defined using named function syntax */
    anotherFunction() {...}
}
```
With methods, we are able to call methods we defined in our Vue app using interpolation 
```
<p>{{ outputGoal() }}</p>
```
or when using the v-bind directive
```
<a v-bind:href="outputGoal()">Learn Vue</a>
```

## Notes
- Behind the scenes, Vue makes all the data being returned by the data Vue app property and merges it into a global Vue instances 
of the Vue app. This allows us to be able to reference any of our data properties in any of the methods, computedProperties and watchers
we define using the JavaScript `this` keyword.
```javascript
data() {
    return {
        goal: "Some goal"
    }
},
methods: {
    anotherMethod() {
        console.log(this.goal);
    }
}
```

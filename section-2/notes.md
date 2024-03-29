<img src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png" width="100">

# Basics and Core Concepts - DOM Interaction with Vue Notes

## Interpolation
Interpolation is the mos basic form of data binding, and uses the Mustache_ syntax (double curly braces). Vue will replace the mustache tags with the value of the provided property from the corresponding component instance.
```html
<p>{{ goal }}</p>
```
Using interpolation with Vue, we can also execut basic JavaScript expression, use ternary expressions and call methods like:
```html
<p>{{ 1 + 1 }}</p>
<p>{{ Math.random() > 0.5 ? true : false }}</p>
<p>{{ outputGoal() }}</p>
```

### v-bind Directive
> v-bind directive shorthand `:`

A resevered name which is recognised and detected by Vue, and lets Vue know to set the value of an HTML attribute with dynamic data.
Interpolation is *only* available between HTML elements, use the v-bind directive to pass dynamic values to an HTML element attribute.
```html
<a v-bind:href-"vueLink">learn Vue</a>
```

### v-html Directive
By default Vues interpolation treats everything as a string, even HTML mark-up. This is an added securty feature for our Vue applications as it protects
X-Site Scripting (XSS). However, Vue also provides us with the `v-html` directive that lets Vue know the content being set between the HTML tags should
be interpreted as HTML.

When using the `v-html` directive, we don't use the mustache syntax. Instead we add it on the HTML element where the directive was applied.
```html
<!-- we can pass data properties -->
<p v-html="goal"></p>

<!-- or call a method function -->
<p v-html="outputGoal()"></p>
```

### v-model Directive
Called 2-way Data Binding, `v-model` directive is a useful shorthand for listening and setting the value of an input. It can be used to replace the `v-bind` and `v-on` Vue directives for an input
when we want to listen for changes to the value of an input, and update the stored value of a data property at the same time.
```html
<input type="text" v-model="name">
```
Instead of:
```
<input type="text" v-bind:value="name" v-on:input="setName($event, lastName)">
```

## Vue Methods
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
```html
<p>{{ outputGoal() }}</p>
```
or when using the v-bind directive
```html
<a v-bind:href="outputGoal()">Learn Vue</a>
```
and we can also call the method explicitly or simply point at it like so;
```html
<p>{{ outputGoal }}</p>
<a v-bind:href="outputGoal"></a>
```

>_However, it is important to note that we **should not** use methods to output information to the page, as this can lead to potential performance issues. By nature, Vue will only update the parts of the page where a change is detected. When we use a method to output any information on the page, Vue doesn't know which data properties are effected within the method, so the method will be run everytime any data property in the app is changed._


## Event Handling
>_A core feature of VueJS is the built-in functionality which handles the creation of event listeners on HTML elements, the managing of data in the app we specify
and only updating the parts of the page where required when any changes happen to the data - built-in reactivity.
It's a core concept which is important to know and understand as a developer._

### v-on Directive
> v-on directive shorthand `@`

The `v-on` directive is used to listen to DOM events and run some JavaScript code when they are triggered. `v-on` takes a single argument after a semicolon and that is
the user event that we want to listen for. The `v-on` directive supports all the standard events you can listen for on an HTML element with vanilla JavaScript.

With `v-on` we are also able to execute simple JavaScript code within the Vue managed HTML similar to the `v-bind` directive between the double curly braces `{{  }}`.
```html
<button v-on:click="counter++">Add</button>
<button v-on:click="counter--">Reduce</button>
```

We can also explicitly call a method using the `v-on` directive and pass parameters to the method:
```html
<button v-on:click="add(5)">Add 5</button>
<button v-on:click="subtract(5)">Subtract 5</button>
```

### Native Event Object
With Vue, we also have access to the native event object that is provided to us by the browser. Using the `v-on` directive, we are able to access to the native event object 
by default when pointing to a method or explicitly when calling a method with arguments by passing the `$event` object as the first argument.
```html
<input name="firstName" v-on:input="setFirstName">
<input name="lastName" v-on:input="setLastName($event, '!')">
```

### Event Modifiers
Vue provides us with some built-in event modifiers which we can use with the `v-on` directive to change the behavior of an event. Event modifiers are directive postfixes
denoted with a dot `.` which you can simply connect to the event you are listening for `[event].[modifier]`.
```html
<form v-on:submit.prevent="handleFormSubmit">
...
</form>
```

## Computed Properties
Computed Properties are essentially the same as methods with one important difference. Vue is aware of their dependencies and will only re-execute them if one of their dependencies changed.

Similar to methods, Computed Properties returns an object of methods. The methods defined in Computed Properties should be named like data properties, as they are used like a data property and not like a method (we don't call Computed Properties methods we simply point at them i.e `<p>Your Name: {{  fullName }}</p>`).
```javascript
data() {
    return {
        name: "",
        lastName: ""
    }
},
computed: {
    fullName(){
        return this.name + ' ' + this.lastName
    }
}
```
With Computed properties, Vue is aware of the dependencies of the computed property and will cache the value of the computed property and will only revaluate the value if 
one of its dependencies has changed.
>__For this reason it is better to use Computed Properties to output values rather than methods__.


## Watchers
Watchers are another reactivity tool built into Vue which is a function (similar to Computed Properties) that we can use to tell Vue execute everytime one 
of its dependencies changes. Watcher methods must use the same name as a data or Computed Property, this tells Vue to watch for changes made to that data 
property or Computed Property method and execute the Watcher.

Watcher functions automatically have access to the latest value of the data property or Computed Property it is watching by default through a `value` parameter which
is passed into the function be default. Watcher functions can also pass the old value of the data property as an argument along with the new value like so 
`name(newValue, oldValue)`
```javascript
data() {
    return {
        name: "",
        fullName: ""
    } 
},
watch: {
    // this watcher method will execute everytime the name data property is changed
    name() {
        this.fullName = value + ' ' + 'Kingi'
    }
}
```
> Note: The key differences between Watchers and Computed Properties is that Watchers can only keep track of one data property, and monitoring the changes made on
multiple data properties would require multiple Watcher functions. This is where it is better to use Computed Properties - monitoring multiple data properties can 
be done with much less code.


## _Important_
- Behind the scenes, Vue merges the Vue app data into a single global Vue instance. This allows us to be able to reference any of our data properties in any of the methods, 
computedProperties and watchers we define using the JavaScript `this` keyword.
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


/**
 * Using VueJS provides us with a declarative approach to solving this simple problem,
 * where we declare the results instead of the steps to getting to the desired results
 * providing us with a much more scalable solution to building applications.
 */

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            if (this.enteredValue) {
                this.goals.push(this.enteredValue);
                this.enteredValue = '';
            } else {
                console.log("No goal was entered.");
            }
        }
    }
}).mount('#app');

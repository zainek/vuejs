const app = Vue.createApp({
    data() {
        return {
            learningGoals: ["Become a better Vue developer."],
            courseGoalA: "Become a great human and learn Vue",
            courseGoalB: "Feel like a boss and master Vue",
            vueLink: 'https://v3.vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB; 
        }
    }
});

app.mount('#user-goal');

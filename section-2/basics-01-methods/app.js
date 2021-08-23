const app = Vue.createApp({
    data() {
        return {
            learningGoals: ["Become a better Vue developer."],
            vueLink: 'https://v3.vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            return randomNumber < 0.5 ? "Learn Vue" : "Master Vue"; 
        }
    }
});

app.mount('#user-goal');

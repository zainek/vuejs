const app = Vue.createApp({
    data() {
        return {
            learningGoals: [
                "Become a better Vue developer.",
                "Spend more time after hours learning.",
                "Keep up-to-date with the latest javascript features and changes."
            ],
            vueLink: 'https://v3.vuejs.org/'
        };
    },
    methods: {
        completeGoal(index) {
            this.learningGoals.splice(index, 1)
        },
        outputGoal() {
            const randomNumber = Math.random();
            return randomNumber < 0.5 ? "Learn Vue" : "Master Vue"; 
        }
    }
});

app.mount('#user-goal');

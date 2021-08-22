const app = Vue.createApp({
    data() {
        return {
            learningGoals: ["Become a better Vue developer."],
            vueLink: 'https://v3.vuejs.org/'
        };
    }
});

app.mount('#user-goal');

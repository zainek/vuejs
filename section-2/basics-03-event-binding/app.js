const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        }
    },
    computed: {
        fullname() {
            if (this.name) {
                return this.name + " " + "Kingi"
            }
            return this.name
        }
    },
    methods: {
        add() {
            this.counter++
        },
        reduce() {
            this.counter > 0 ? this.counter-- : null
        },
        resetName() {
            this.name = ''
        }
    }
})

app.mount("#events")

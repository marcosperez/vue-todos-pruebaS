var vm = new Vue({
    el: "#app",
    data: {
        todos: [],
        todosLoaded: false,
    },
    mounted() {
        if (!this.todosLoaded) {
            this.todosLoaded = true;
            axios.get("./mock_data/todos.json")
                .then((response) => {
                    setTimeout(() => {
                        vm.todos = this.todos.concat(response.data.todos)
                    }, 500)
                })
                .catch((err) => this.todosLoaded = false)
        }
    },
});
Vue.component("todo-list", {
    template: //html
        `
    <div>
        <div class="row"  style="padding: 10px">
            <p class="text-center font-weight-bold "  style="width: 100%;">
            Listado de tareas
            </p>
        </div>
        <div>
            <preloader  v-if="todos.length === 0 && !todosLoaded" />
            <todo-item  
                v-else
                v-for="(todo, index) in todos" 
                v-bind:todo="todo" 
                v-bind:key="todo.id"
                v-on:remove="removeTodo(index)"
            />
        </div>
        <div>
            <form-new-todo v-on:addTodo="addTodo"/>
        </div>
    </div>
    `,
    props: {
        todos: {
            type: Array,
            validator: function (value) {

                return Array.isArray(value)
            }
        },
        "todosLoaded": {
            type: Boolean
        }
    },

    methods: {
        addTodo(newTodo) {
            this.todos.push({ text: newTodo.text, estimado: newTodo.estimado, id: (this.todos.length + 1) })
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }
    },
})
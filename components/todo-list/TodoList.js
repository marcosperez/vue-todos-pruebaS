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
            <todo-item  
                v-if="todos.length > 0 " 
                v-for="(todo, index) in todos" 
                v-bind:todo="todo" 
                v-bind:key="todo.id"
                v-on:remove="removeTodo(index)"
            />
            <preloader  v-if="todos.length === 0 " />
        </div>
        <div>
            <form-new-todo v-on:addTodo="addTodo"/>
        </div>
    </div>
    `,
    props: {
        todos: {
            validator: function (value) {
                console.log(value)
                return Array.isArray(value)
            }
        }
    },

    methods: {
        addTodo(text) {
            this.todos.push({ text: text, estimado: (this.todos.length * 3), id: (this.todos.length + 1) })
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }
    },
})
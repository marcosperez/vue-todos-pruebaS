Vue.component("form-new-todo", {
    template: //html 
        `
    <form 
        class="form-new-todo" 
        style="margin: 20px;" 
        v-on:submit.prevent=""
    >
        <div class="form-group">
            <input 
                type="text" 
                class="form-control" 
                id="todoTextInput" 
                placeholder="Nueva tarea" 
                v-model="todoText"
                v-on:keyup.enter="$emit('addTodo', todoText)"
            />
        </div>
    </form>
    `,
    data: () => {
        return {
            todoText: ''
        }
    },

})
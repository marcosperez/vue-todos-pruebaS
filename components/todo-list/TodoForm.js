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
                v-model="newTodo.text"
                v-on:keyup.enter="$emit('addTodo', newTodo)"
            />
        </div>
        <div class="form-group">
            <input 
                type="number" 
                class="form-control" 
                id="todoEstimadoInput" 
                placeholder="Nueva tarea" 
                v-model.number="newTodo.estimado"
                v-on:keyup.enter="$emit('addTodo', newTodo)"
            />
        </div>
    </form>
    `,
    data: () => {
        return {
            newTodo: {
                text: '',
                estimado: 0,
            }

        }
    },

})
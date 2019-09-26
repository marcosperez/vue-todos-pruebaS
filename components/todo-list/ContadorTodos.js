Vue.component("contador-todos", {
    template: //html
        `
        <div class="row"> 
            <div class="col  text-right">
                <span>Tareas completadas: {{todosCompletados}} -</span>
                <span>Tareas totales: {{cantidadTodos}} </span>
            </div>
        </div>
    `,
    props: ["todos"],
    computed: {
        cantidadTodos: function () {
            return this.todos.length;
        },
        todosCompletados: function () {
            return this.todos.reduce((acc, todo) => acc += todo.completado ? 1 : 0, 0)
        }
    },
})
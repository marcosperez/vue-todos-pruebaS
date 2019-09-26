var style = {
    btnRemove: {
        padding: ".20rem .2rem",
        fontSize: ".6rem",
        lineHeight: "9px",
        borderRadius: ".2rem",
    }
}

Vue.component("todo-item", {
    template:    //html
        `
    <div  v-bind:id="'todo-item-' +todo.id" class="row">
        <span class="col-sm-1">
            <button 
                class="btn btn-dark btn-xs" 
                v-bind:style="style.btnRemove"
                v-on:click="$emit('remove')"
            >
            X
            </button>
        </span>
        <span class="col-sm-1">
            <input type="checkbox" v-model="todo.completado">
        </span>
        <span class="col-sm-5" v-bind:class="{ 'font-weight-bold': todo.completado }" >
            {{todo.text | capitalize}}
        </span>
        <span class="col-sm-2">{{estimadoHs}}</span>
        <span class="col-sm-3">
            <span style="color:green;" v-if="todo.completado">Completada</span>
            <span style="color:darkred;" v-else>Incompleta</span>
        </span>
    </div>
    `,
    props: ['todo'],
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    computed: {
        estimadoHs: function () {
            return this.todo.estimado + " hs"
        }
    },
    data: function () {
        return { style: style }
    }
});

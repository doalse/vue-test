<template>
  <div class="form-group">
    <div class="form-group">
      <input type="text" class="form-contol" v-model="todoInput" />
      <button class="btn btn-primary" @click="addTodo()">Add Todo</button>
    </div>
    <div v-for="(todo, index) in todos" :key="index" class="todos">
      <div>
        <input type="checkbox" :id="index" @change="toggleDone(todo)" :checked="todo.done" />
        <label :for="index" :class="{done: todo.done}">{{ todo.name }}</label>
      </div>
      <button type="button" class="btn btn-secondary" @click="deleteTodo(index)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      todoInput: ""
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: this.todoInput,
        done: false
      });
      this.todoInput = "";
    },
    toggleDone(todo) {
      todo.done = !todo.done;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.done {
  text-decoration: line-through;
}
.todos {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.todos input {
  margin-right: 10px;
  display: inline-block;
}
</style>

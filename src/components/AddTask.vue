<template>
  <div class="add-task">
    <div class="form-group">
      <input type="text" class="form-control input-task" v-model="addTaskInput" />
      <div class="input-group-append input-task-btn">
        <button class="btn btn-primary" :disabled="checkBtn" @click="addTask">Add Task</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addTaskInput: ""
    };
  },
  computed: {
    checkBtn() {
      return this.addTaskInput == "";
    }
  },
  methods: {
    addTask() {
      this.$store.commit("addTaskMut", this.addTaskInput);
      this.addTaskInput = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-task {
  width: 50%;
  display: inline-block;
}
.input-task-btn {
  display: inline-block;
}
</style>

<template>
  <div class="tasks container">
    <div class="task" v-for="(taskTitle, index) in tasks" :key="index">
      <div class="task-top">
        <h3>title: {{ taskTitle }}</h3>
        <button class="btn btn-danger" @click="delTask(index)">del</button>
      </div>
      <AddTodo />
    </div>
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AddTodo
  },
  data() {
    return {};
  },
  methods: {
    delTask(index) {
      this.$store.commit("delTaskMut", index);
    }
  },
  computed: {
    ...mapGetters(["tasks"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.task {
  box-shadow: 0 0 10px #bbb;
  padding: 20px;
  margin: 10px 0;
}
.task-top {
  display: flex;
  justify-content: space-between;

  h3 {
    width: 100%;
    text-align: center;
  }
}
</style>

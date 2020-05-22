<template>
  <div class="home">
    <AddTask />
    <Tasks />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTask from "@/components/AddTask.vue";
import Tasks from "@/components/Tasks.vue";

export default {
  name: "Home",
  components: {
    AddTask,
    Tasks
  }
};
</script>

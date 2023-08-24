<template>
  <div class="flex flex-wrap justify-between mt-3">
    <p class="font-semibold text-lg" :class="{ 'line-through': task.done }">{{ task.task }}</p>
    <div class="flex flex-wrap gap-2">
      <button class="btn-primary" @click="toggleTask">{{ task.done ? 'Undo' : 'Done' }}</button>
      <button class="btn-danger" @click="deleteTask">Delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['task'],
    methods: {
      deleteTask() {
        this.$store.commit('removeTask', this.task)
      },
      toggleTask() {
        this.$store.commit('toggleTask', this.task)
      },
    }
  }
</script>

<style scoped>

</style>
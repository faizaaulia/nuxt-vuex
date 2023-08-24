<template>
  <div class="p-5">
    <div class="container mx-auto pt-7 pb-3 px-3 mt-10 bg-slate-200 rounded-md shadow-sm todo-container">
      <p class="text-center text-2xl font-semibold">TODO List</p>
      <div class="flex flex-wrap justify-between mt-5 gap-3">
        <input
          v-model="newTask"
          placeholder="Add new task"
          class="p-2 w-full sm:w-9/12 rounded-sm"
          @keypress.enter="addTodo"
        />
        <button class="btn-primary w-full sm:w-1/5" @click="addTodo">Add</button>
      </div>
      <Task
        v-for="(todo, i) in $store.state.todos"
        :key="i"
        :task="todo"
      />
    </div>
  </div>
</template>

<script>
  import Task from '~/components/Task.vue'

  export default {
    components: {
      Task
    },
    data() {
      return {
        newTask: ''
      }
    },
    methods: {
      addTodo() {
        if (this.newTask) {
          this.$store.commit('addTodo', this.newTask)
          this.newTask = ''
        }
      }
    }
  }
</script>

<style scoped>
  .todo-container {
    max-width: 500px;
  }
</style>
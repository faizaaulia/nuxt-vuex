export const state = () => ({
  todos: []
})

export const mutations = {
  addTodo(state, todo) {
    state.todos = [
      { task: todo, done: false },
      ...state.todos
    ]
  },
  removeTask(state, task) {
    state.todos.splice(state.todos.indexOf(task), 1)
  },
  toggleTask(state, task) {
    task.done = !task.done
  }
}
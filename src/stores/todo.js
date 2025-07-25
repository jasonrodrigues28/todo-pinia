import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(text) {
      this.tasks.push({ text, done: false }); // adds a new task
    },
    toggleTask(index) {
      this.tasks[index].done = !this.tasks[index].done; // flips done/undone
    },
    removeTask(index) {
      this.tasks.splice(index, 1); // removes task by index
    },
  },
  getters: {
    remainingTasks(state) {
      return state.tasks.filter((t) => !t.done); // gets only tasks not done
    },
  },
});

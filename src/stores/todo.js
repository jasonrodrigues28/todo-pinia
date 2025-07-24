import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(text) {
      this.tasks.push({ text, done: false });
    },
    toggleTask(index) {
      this.tasks[index].done = !this.task[index].done;
    },
    removeTask(index) {
      this.task.splice(index, 1);
    },
  },
  getters: {
    remainingTask(state) {
      return state.tasks.filter((t) => !t.done);
    },
  },
});

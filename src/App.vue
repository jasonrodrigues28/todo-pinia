<template>
  <div class="app">
    <h1>Todo App (Pinia + Options API)</h1>

    <form @submit.prevent="addNewTask">
      <input v-model="newTaskText" placeholder="Enter task" />
      <button type="submit">Add Task</button>
    </form>

    <ul>
      <li v-for="(task, index) in todoStore.tasks" :key="index">
        <label>
          <input type="checkbox" v-model="task.done" />
          <span :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
            {{ task.text }}
          </span>
        </label>
        <button @click="todoStore.removeTask(index)">❌</button>
      </li>
    </ul>

    <p>Remaining tasks: {{ todoStore.remainingTasks.length }}</p>
  </div>
</template>

<script>
import { useTodoStore } from './stores/todo'

export default {
  name: 'App',
  data() {
    return {
      newTaskText: '',               // For input box
      todoStore: useTodoStore()      // Access the Pinia store
    }
  },
  methods: {
    addNewTask() {
      const text = this.newTaskText.trim()
      if (text) {
        this.todoStore.addTask(text)
        this.newTaskText = ''        // Reset input
      }
    }
  }
}
</script>

<style>
body {
  font-family: sans-serif;
  background: #f5f5f5;
  padding: 20px;
}

.app {
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

input[type="text"] {
  width: 70%;
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
}
</style>

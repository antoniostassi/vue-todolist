console.log("Loaded");

const { createApp } = Vue

  createApp({
    data() {
      return {
        todoList: [
            { task: "Waking up", done: false},
            { task: "Eat", done: false},
            { task: "Drink water", done: false},
            { task: "Go to the toilet", done: false},
            { task: "Turning on PC", done: false},
            { task: "Start coding", done: false},
        ]
      }
    }
  }).mount('#app')
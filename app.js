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
        ],
        taskToAdd: ""
      }
    },
    methods: {
        addNewTask(){
            const newTask = this.taskToAdd.trim();
            const newObj = {task: newTask, done: false};
            if(newTask != "") {
                this.todoList.push(newObj);
                this.taskToAdd = "";
            }
        }
    }
  }).mount('#app')
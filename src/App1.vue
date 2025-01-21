
<script setup>
  import { ref, onMounted } from 'vue';

  const name = ref('Sambo');
  const status = ref('active');
  const tasks = ref(['Tasks 1', 'Task 2', 'Task 3']);
  const newTask = ref('');

  const changeStatus = () => {
    switch(status.value) {
      case "active":
        status.value = "inactive";
        break;
      case "inactive":
        status.value = "pending";
        break;
      case "pending":
        status.value = "active";
        break;
      default:
        break
    }
  }

  const link = 'https://google.com';

  const addTask = (task) => {
    if (newTask.value.trim() !== '') {
      tasks.value.push(newTask.value);
      newTask.value = '';
    }
  }
  
  const removeTask = (index) => {
    tasks.value.splice(index, 1);
  }

  onMounted(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      tasks.value = data.map(item => item.title);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  });

</script>

<template>
  <h1>Hello {{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <div>
    <span>Add Task</span>
    <input type="text" v-model="newTask" /> 
    <button type="submit" @click="addTask">Submit</button>
  </div>
  <p>Tasks: </p>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">{{ task }} <button @click="removeTask(index)">x</button></li>
  </ul>
  <a :href="link">Go to google</a>
  <button @click="changeStatus">Click to change status</button>
</template>

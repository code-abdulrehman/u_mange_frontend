<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="id in randomIds" :key="id">
          <router-link :to="`/users/user/${id}`">User {{ id }}</router-link>
        </li>
      </ul>
      <button @click="generateRandomIds">Generate New Users</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        randomIds: [] // Array to store random IDs
      };
    },
    methods: {
      generateRandomIds() {
        // Generate an array of random IDs (5 numbers)
        this.randomIds = Array.from({ length: 5 }, () =>
          Math.floor(Math.random() * 1000)
        );
      }
    },
    mounted() {
      // Generate random IDs when the component is loaded
      this.generateRandomIds();
    }
  };
  </script>
  
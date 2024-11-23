<template>
    <div>
      <h1>User Detail</h1>
      <p>User ID: {{ id }}</p>
      <!-- You can use the id to fetch user details from an API or display user-specific information -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'User',
    props: {
      id: {
        type: String, // or Number, depending on your ID format
        required: true,
      },
    },
    mounted() {
      // Example: Fetch user data using the id
      // this.fetchUserData(this.id);
    },
    methods: {
      // fetchUserData(id) {
      //   // Replace with your API call logic
      // },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  
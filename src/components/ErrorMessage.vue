<template>
  <div class="error-container">
    <div class="error">
      <font-awesome-icon icon="frown" class="fa-frown error-icon" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.error-container {
  padding: 50px;
}

.fa-frown {
  font-size: 100px;
}

p {
  font-size: 20px;
}
</style>

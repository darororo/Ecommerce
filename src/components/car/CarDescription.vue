<template>
  <div class="header">
    <span>About This Car</span>
    <p v-for="paragraph in description">
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
  },
}
</script>

<style scoped>
.header {
  padding-top: 10px;
}

.header>span {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  color: black;
}

.header>p {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0px 50px 0px 0px;
  line-height: 2rem;
  font-size: 18px;
}
</style>

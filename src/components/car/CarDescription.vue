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
};
</script>

<style scoped>
.header {
  padding-top: 30px;
  padding-right: 30px;
}

.header > span {
  font-family: "Rajdhani", sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #111827;
  display: block;
  margin-bottom: 16px;
}

.header > p {
  font-family: "Rajdhani", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #374151;
  margin-bottom: 16px;
}
</style>

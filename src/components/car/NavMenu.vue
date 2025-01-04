<template>
  <div class="container">
    <nav class="nav-link">
      <RouterLink to="/">
        <li>
          <a href="">Home</a>
          <ChevronRight />
        </li>
      </RouterLink>
      <li>
        <a href="">Brand</a>
        <ChevronRight />
      </li>
      <li>
        <a href="">Gallery</a>
        <ChevronRight />
      </li>
    </nav>
  </div>
</template>
<script>
import ChevronRight from "../icons/NavIcons/chevronRight.vue";
export default {
  components: {
    ChevronRight,
  },
};
</script>
<style scoped>
.container {
  padding: 135px 0px 0px 0px;
}
.nav-link {
  display: flex;
  gap: 20px;
}
.nav-link li {
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
  gap: 6px;
}
a {
  text-decoration: none;
  color: #717171;
  font-size: 18px;
}
</style>

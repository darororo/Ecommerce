<template>
  <NavComponent />
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
    <RouterLink to="/car/1/gallery">
      <li>
        <a href="">Gallery</a>
        <ChevronRight />
      </li>
    </RouterLink>
  </nav>
</template>
<script>
import ChevronRight from "../icons/NavIcons/chevronRight.vue";
import NavComponent from "../NavComponent.vue";
export default {
  components: {
    ChevronRight,
    NavComponent,
  },
};
</script>
<style scoped>
.nav-link {
  display: flex;
  gap: 20px;
  padding: 136px 136px 0 136px;
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

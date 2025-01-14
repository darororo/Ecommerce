<template>
  <div class="card">
    <div class="wrapper">
      <div class="image-container">
        <img class="bm-img" :src="image" alt="2017 Ferrari LaFerrari" />
      </div>
      <div class="details">
        <h3>{{ model }}</h3>
        <p class="price">{{ price }}</p>
      </div>
      <div class="action1">
        <button class="details-button" @click="goToProduct(id)">
          More detail
        </button>
      </div>
    </div>
    <button class="btn-deta" @click="removeBookmark(id)">Delete</button>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useUsersStore } from '../../stores/users';

export default {
  props: {
    model: String,
    price: String,
    id: String,
    image: String,
  },
  methods: {
    goToProduct(id) {
      this.$router.push(`/car/${id}`);
    },
  },
  computed: {
    ...mapState(useUsersStore, {
      bookmarks: 'bookmarks',
      removeBookmark: 'removeBookmark'
    })
  }
};
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid #ddd; */
  width: 555px;
  height: 76px;
  background-color: #fff;
  /* border: 2px solid #aaa; */
}

.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid #aaa;
  padding: 0 8px 0 0;
}

.bm-img {
  width: 141px;
  height: 76px;
}

.details h3 {
  font-size: 14px;
  font-family: Inria Sans;
}

.price {
  color: black;
  font-weight: bold;
  font-family: Inria Sans;
  font-size: 13px;
}

.action {
  margin-right: 16px;
}

.details-button {
  padding: 10px 20px;
  font-size: 13px;
  font-weight: bold;
  color: black;
  background-color: white;
  border: 2px solid #aaa;
  border-radius: 0 16px 0 16px;
  text-align: center;
  transition: background-color 0.3s, border-color 0.3s;
  font-family: Roboto Serif;
  margin-left: 20px;
}

.details-button:hover {
  background-color: white;
  display: flex;
}

.dots {
  display: flex;
  gap: 6px;
  margin-left: 20px;
}

.dots span {
  width: 6px;
  height: 6px;
  background-color: #888;
  border-radius: 50%;
}

.dots span:hover {
  background-color: #555;
}

.btn-deta {
  width: 100px;
  height: 40px;
  border: 2px solid rgb(172, 172, 172);
  background-color: rgb(237, 81, 81);
  color: white;
  border-radius: 0px 12px 0px 12px;
  font-family: "Inria Sans", sans-serif;
  font-size: 18px;
  font-weight: 200;
  border: 1px solid rgb(172, 172, 172);
  cursor: pointer;
  margin-left: 20px;
}
</style>

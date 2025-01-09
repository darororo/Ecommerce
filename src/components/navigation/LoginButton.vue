<template>
  <!-- <img class="image-bg" src="@/assets/image/cherolet.jpeg"> -->
  <div class="inner-wrapper">
    <RouterLink to="/login" v-if="!isLoggedIn">
      <button @click="btnClicked" class="btn-log-in" style="position: relative; z-index: 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" :fill="textColor">
          <path
            d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z">
          </path>
        </svg>
        <div class="log-in">Log in</div>
      </button>
    </RouterLink>
    <button v-else @click="btnClicked" class="btn-user" style="position: relative; z-index: 1">
      <img class="image-user" :src="avatar" loading="lazy" />
      <label class="user-name">{{ `${firstname}` || "Username" }}</label>
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="white">
        <path
          d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z">
        </path>
      </svg>
    </button>
  </div>
</template>

<script>
import pb from '../../lib/pocketbase';

export default {
  props: {
    textColor: {
      default: "white",
    },
  },
  data() {
    return {
      isLoggedIn: pb.authStore.isValid,
    };
  },
  methods: {
    btnClicked() {
      this.isLoggedIn = false;
      pb.authStore.clear();
    },
  },
  computed: {
    avatar() {
      const file = pb.authStore.record.avatar;
      if (file) {
        const id = pb.authStore.record.id;
        console.log(id)
        return `${import.meta.env.VITE_PB_URL}/api/files/users/${pb.authStore.record.id}/${file}`;
      } else {
        return "/Ecommerce/src/assets/images/user.jpg"
      }
    },
    firstname() {
      return pb.authStore.record.name;
    },

  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.inner-wrapper {
  display: flex;
}

.image-bg {
  position: absolute;
  z-index: 0;
  height: 759px;
  width: 1440px;
}

.log-in {
  font-family: "Quattrocento";
  font-size: 16px;
  padding-left: 4px;
  color: v-bind(textColor);
}

.btn-log-in {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px 0 4px;
  column-gap: 4px;
  height: 40px;
  width: 140px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid;
  border-color: v-bind(textColor);
  cursor: pointer;
  /* margin-right: 100px; */
}

.btn-user {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  width: 140px;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid;
  border-color: v-bind(textColor);
  cursor: pointer;
  border: none;
  /* margin-right: 100px; */
}

.image-user {
  height: 26px;
  width: 26px;
  border-radius: 100%;
}

.user-name {
  font-size: 13px;
  font-family: sans-serif;
  color: v-bind(textColor);
}
</style>

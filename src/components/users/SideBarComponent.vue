<script>
import ArrowLeft from "@/components/icons/sideBar/arrowLeft.vue";
import SearchIcon from "@/components/icons/sideBar/searchIcon.vue";
import Dashboard from "@/components/icons/sideBar/dashboard.vue";
import GiftIcon from "@/components/icons/sideBar/giftIcon.vue";
import Promotion from "@/components/icons/sideBar/Promotion.vue";
import Mode from "@/components/icons/sideBar/mode.vue";
import Theme from "@/components/icons/sideBar/theme.vue";
import Question from "@/components/icons/sideBar/question.vue";
import MoreVector from "@/components/icons/sideBar/moreVector.vue";
export default {
  components: {
    ArrowLeft,
    SearchIcon,
    Dashboard,
    GiftIcon,
    Promotion,
    Mode,
    Theme,
    Question,
    MoreVector,
  },
  methods: {
    closeSidebar() {
      this.$emit("close-sidebar"); // Emit an event to the parent to close the sidebar
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="logo-name">
        <img src="@/assets/images/media/carbodiaBlack.png" alt="Frame" class="logo" />
        <span>Carbodia</span>
      </div>
      <ArrowLeft @click="closeSidebar" style="cursor: pointer" />
    </div>
    <div class="main">
      <div class="main-sec">
        <SearchIcon />
        <span>Quick Search</span>
      </div>
    </div>
    <hr />
    <div class="main">
      <div class="main-sec" @click="$router.push({ name: 'bookmarks' })">
        <Dashboard />
        <span>Bookmarks</span>
      </div>
    </div>
    <div class="main">
      <div class="main-sec">
        <GiftIcon />
        <span>Products</span>
      </div>
    </div>
    <div class="main">
      <div class="main-sec">
        <Promotion />
        <span>Promotions</span>
      </div>
    </div>
    <div class="footer-sec">
      <hr />
      <div class="main">
        <div class="main-sec">
          <Mode />
          <span>Dark mode</span>
        </div>
      </div>
      <div class="main">
        <div class="main-sec">
          <Theme />
          <span>Theme</span>
        </div>
      </div>
      <div class="main">
        <div class="main-sec">
          <Question />
          <span>Help</span>
        </div>
      </div>
    </div>
    <div class="user-sec">
      <div class="user-image-name">
        <img src="../assets/images/user.jpg" alt="user" class="user-image" />
        <div class="user-name">
          <span class="name">Uchiha Itachi</span>
          <span>30 year old with Cars Edition</span>
        </div>
      </div>
      <MoreVector />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Quicksand:wght@300..700&family=Rajdhani:wght@300;400;500;600;700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap");

.container {
  position: fixed;
  z-index: 1000;
  top: -20px;
  background-color: #1e1e1e;
  margin-top: 20px;
  width: 22%;
  height: 101%;
  box-shadow: rgba(0, 0, 0, 0.24) 5px 0px 8px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px 30px 20px 20px;
}

.user-sec {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px 30px 20px 20px;
}

hr {
  border-color: rgba(255, 255, 255, 0.7);
}

.logo-name {
  display: flex;
  align-items: center;
  font-family: "Goldman", sans-serif;
  gap: 20px;
  font-weight: 600;
  font-size: 25px;
}

.logo {
  width: 78px;
  height: auto;
}

.main {
  padding: 20px 0px 20px 60px;
}

.main-sec {
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: "Roboto Serif", serif;
  color: rgba(255, 255, 255, 0.7);
  transition: text-shadow 0.3s;
  cursor: pointer;
}

.main-sec:hover {
  text-shadow: 0 0 0.65px #ffffff, 0 0 0.65px #ffffff;
}

.footer-sec {
  margin-top: 66%;
}

.user-image {
  border-radius: 100%;
  height: 50px;
  width: auto;
  border: none;
}

.user-name {
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: "Roboto Serif", serif;
  font-size: 14px;
  line-height: 24px;
}

.user-name .name {
  font-weight: 700;
}

.user-image-name {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>

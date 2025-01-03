<script>
import CarHeader from "@/components/car/CarHeader.vue";
import NavComponent from "@/components/NavComponent.vue";
import CarDescription from "@/components/car/CarDescription.vue";
import Back from "../components/car/Back.vue";
import ContactDealer from "../components/ContactDealer.vue";
import EngineDetails from "../components/EngineDetails.vue";
import CommentSection from "@/components/comment/CommentSection.vue";
import EngineDetailsUnboxed from "../components/EngineDetailsUnboxed.vue";
export default {
  components: {
    Back,
    CarHeader,
    NavComponent,
    CarDescription,
    ContactDealer,
    EngineDetails,
    EngineDetailsUnboxed,
    CommentSection,
  },
  data() {
    return {
      // showGallery: false,
    }
  },
  computed: {
    showGallery() {
      let curPath = this.$route.path;
      return curPath.split("/").reverse()[0] === "gallery"
    }
  },
};
</script>

<template>
  <div class="container">
    <div v-if="!showGallery" class="main">
      <CarHeader />
      <div class="line">
        <hr>
      </div>
      <div class="listing-body-wrapper">
        <div class="desc-container">
          <CarDescription />
          <div class="line line-grey">
            <hr>
          </div>
          <EngineDetailsUnboxed />

          <div class="line line-grey">
            <hr>
          </div>
          <div class="comment-section">
            <CommentSection />
          </div>
        </div>
        <div class="contact-dealer">
          <ContactDealer />
        </div>
      </div>
    </div>
    <div v-else>
      <RouterView />
    </div>
    <div class="line">
      <hr />
    </div>

  </div>
</template>

<style scoped>
.line-grey>hr {
  margin: 20px 0;
  border-color: #ffffff;
  width: 90%;
}

.container {
  padding: 0px 136px 0px 136px;
}

.listing-body-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.desc-container {
  display: flex;
  flex-direction: column;
}

.comment-section {
  width: 90%;
  margin-top: 50px;
}

.contact-dealer {
  position: sticky;
  top: 0;
  height: 100%;
}
</style>

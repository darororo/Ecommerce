<template>
  <div class="back-btn">
    <Back />
  </div>
  <div v-if="showReserve" class="wrapper-content">
    <div class="image-wrapper">
      <img
        src="@/assets/images/products/car1.png"
        alt="Ferrari LaFerrari 2017"
      />
      <div>
        <h1>Ferrari LaFerrari 2017</h1>
        <div class="span-content">
          <span>Ferrari Approved Pre-Owned</span>
          <span>Ferrari Centre Dubai, United Arab Emirates</span>
        </div>
        <div class="price-name-content">
          <span>Price</span>
          <h3>$6,670,088</h3>
        </div>
      </div>
    </div>
    <div class="container-fill-content">
      <div class="row-select-fill">
        <div class="select-fill-content">
          <span>Finance Product*</span>
          <select>
            <option value="">Ferrari LaFerrari Hire</option>
          </select>
        </div>
        <div class="select-fill-content">
          <span>Tenure*</span>
          <select>
            <option value="">48 Months</option>
            <option value="">60 Months</option>
          </select>
        </div>
      </div>
      <div class="select-fill-content">
        <span>Interest Rate*</span>
        <select>
          <option value="">2.99 p.a.flat</option>
        </select>
      </div>
      <div class="row-select-fill">
        <div class="select-fill-reserve">
          <span>Down Payment*</span>
          <button>
            <option value="">$2,001,027 (30%)</option>
          </button>
        </div>
        <div class="select-fill-reserve">
          <button>
            <option value="">$3,335,044 (50%)</option>
          </button>
        </div>
      </div>
      <div class="row-select-fill">
        <div class="select-fill-reserve">
          <span>Loan Payment*</span>
          <button>
            <option value="">$4,669,061 (70%)</option>
          </button>
        </div>
        <div class="select-fill-reserve">
          <button>
            <option value="">$3,335,044 (50%)</option>
          </button>
        </div>
      </div>
      <div class="btn-payment">
        <button class="btn-payment">
          <span>Month Payment</span>
          <span>$6,670,088</span>
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <RouterView />
  </div>
  <RouterLink v-show="showBtnNext" :to="next">
    <div class="btn-next">
      <button>Next</button>
    </div>
  </RouterLink>
</template>

<script>
import Back from "../car/Back.vue";
import ChevronBack from "../icons/productPage/chevronBack.vue";

export default {
  components: {
    Back,
    ChevronBack,
  },
  data() {
    return {
      showReserve: false,
    };
  },
  computed: {
    showReserve() {
      let curPath = this.$route.path;
      return curPath.split("/").reverse()[0] === "checkout";
    },
    next() {
      let curPath = this.$route.path;
      const endpoint = curPath.split("/").reverse()[0];
      if (endpoint === "customer") {
        return "/checkout/customer/payment";
      } else if (endpoint === "checkout") {
        return "/checkout/customer";
      }
    },
    showBtnNext() {
      let curPath = this.$route.path;
      const endpoint = curPath.split("/").reverse()[0];
      return endpoint != "payment";
    },
  },
};
</script>

<style scoped>
.back-btn {
  padding-bottom: 20px;
}
.wrapper-content {
  padding: 10px 136px 0 136px;
}
.image-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding-bottom: 30px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
.image-wrapper > img {
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 40%;
}

.container-fill-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
}
.span-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 15px;
  padding: 20px 0px 30px 0px;
  color: #555;
  font-family: Arial, Helvetica, sans-serif;
}
.price-name-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price-name-content > span {
  font-size: 16px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
}
.price-name-content h3 {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
}
.row-select-fill {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  align-items: end;
  padding-bottom: 20px;
}
.select-fill-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
}
.select-fill-content select {
  font-size: 16px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
  padding: 20px;
  transition: border-color 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23222222'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.select-fill-content select:focus {
  border-color: #000000;
}
.select-fill-content > span {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #333;
}
.select-fill-reserve {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.select-fill-reserve button {
  font-size: 16px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
  padding: 20px;
  transition: border-color 0.3s ease;
  background-position: right 15px center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: gray;
  transition-duration: 0.3s;
}
.select-fill-reserve button:focus {
  border-color: #000000;
  color: black;
}
button:focus > option {
  font-weight: bold;
}
.select-fill-reserve > span {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #000000;
}
.btn-payment button {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 20px 20px;
  font-size: 18px;
  width: 100%;
  border-radius: 6px;
  background-color: #dcdcdc;
  border: none;
  cursor: pointer;
}
.btn-payment span {
  font-weight: 600;
}
.btn-next {
  position: fixed;
  display: flex;
  /* top: 115%; */
  /* margin-top: 30px; */
  bottom: 0;
  justify-content: end;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  padding: 10px 0px 10px 0px;
  width: 100%;
}
.btn-next button {
  padding: 16px 40px 16px 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin-right: 7%;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  background-color: black;
  transition: 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>

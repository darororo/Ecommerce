<script>
import Back from "../car/Back.vue";
import ChevronBack from "../icons/productPage/chevronBack.vue";

export default {
  components: {
    Back,
    ChevronBack,
  },
};
</script>

<template>
  <div class="back-btn">
    <Back />
  </div>
  <div class="wrapper-content">
    <div class="image-wrapper">
      <img
        src="@/assets/images/products/car1.png"
        alt="Ferrari LaFerrari 2017"
      />
      <div class="splied-grid">
        <div class="skip-left">
          <ChevronBack />
        </div>
        <img src="@/assets/images/products/car1.png" />
        <img src="@/assets/images/products/car2.png" />
        <img src="@/assets/images/products/car3.png" />
        <img src="@/assets/images/products/car4.png" />
        <div class="skip-right">
          <ChevronBack />
        </div>
      </div>
    </div>
    <div class="container-fill-content">
      <h1>Ferrari LaFerrari 2017</h1>
      <div class="span-content">
        <span>Ferrari Approved Pre-Owned</span>
        <span>Ferrari Centre Dubai, United Arab Emirates</span>
      </div>
      <div class="price-name-content">
        <span>Price</span>
        <h3>$6,670,088</h3>
      </div>
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
  <div class="btn-next">
    <button>Next</button>
  </div>
</template>

<style scoped>
.back-btn {
  padding-bottom: 20px;
}
.wrapper-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px 0px 20px 0px;
  justify-content: center;
}
.skip-left {
  position: relative;
  display: flex;
  align-items: center;
}
.skip-right {
  position: relative;
  display: flex;
  align-items: center;
  rotate: 180deg;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
.image-wrapper > img {
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;
}
.splied-grid {
  display: flex;
  justify-content: center;
  gap: 22px;
  padding: 20px 0px 20px 0px;
}
.splied-grid img {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: auto;
  width: 9vw;
}
.container-fill-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 600px;
  width: 100%;
}
.span-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 15px;
  color: #555;
  font-family: Arial, Helvetica, sans-serif;
}
.price-name-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px 8px 0px;
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
}
.select-fill-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  font-size: 16px;
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
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: end;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px;
  width: 100%;
}
.btn-next button {
  padding: 12px 40px 12px 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin-right: 2%;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  background-color: black;
  transition: 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>

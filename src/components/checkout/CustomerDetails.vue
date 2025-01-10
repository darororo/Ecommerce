<template>
  <div v-if="showCustomer" class="container">
    <div class="row-scroll-wrapper">
      <div class="customer-completed">
        <span>1</span>
        <label>Customer Details</label>
      </div>
      <div class="payment-completed">
        <span>2</span>
        <label>Payment</label>
      </div>
    </div>
    <div class="collapse-item">
      <h3>Vehicle Details</h3>
      <div class="item-row">
        <img src="@/assets/images/products/car1.png" />
        <div class="content-row">
          <label>Ferrari LaFerrari 2017</label>
          <span>$6,670,088</span>
          <span>From $6,670,088/month</span>
        </div>
      </div>
    </div>
    <div>
      <h3>1. Customer Details</h3>
      <div class="row-select-fill">
        <div class="select-fill-content">
          <span>Salutation*</span>
          <select>
            <option value="">Mr</option>
            <option value="">Mrs</option>
            <option value="">Ms</option>
            <option value="">Dr</option>
          </select>
        </div>
        <div class="select-fill-content">
          <span>First Name*</span>
          <input type="text" />
        </div>
      </div>
    </div>
    <div>
      <div class="row-select-fill">
        <div class="select-fill-content">
          <span>Last Name*</span>
          <input type="text" />
        </div>
        <div class="select-fill-content">
          <span>Email*</span>
          <input type="email" />
        </div>
      </div>
    </div>
    <div>
      <div class="row-select-fill">
        <div class="select-fill-content">
          <span>Date of Birth*</span>
          <input type="date" />
        </div>
        <div class="select-fill-content">
          <span>Gender</span>
          <select>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <div class="row-select-fill">
        <div class="select-fill-content">
          <span>City*</span>
          <input type="text" />
        </div>
        <div class="select-fill-content">
          <span>Country*</span>
          <select id="country" name="country" class="form-control">
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <div class="row-select-fill">
        <div class="select-fill-content">
          <span>Telephone</span>
          <div class="fill-telephone">
            <div class="phone-icon-wrapper">
              <span class="phone-icon">+</span>
              <input type="text" placeholder="855" />
            </div>
            <input
              type="text"
              class="phone-number"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div class="select-fill-content">
          <span>Address</span>
          <input type="text" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCustomer: false,
    };
  },
  computed: {
    showCustomer() {
      let curPath = this.$route.path;
      return curPath.split("/").reverse()[1] === "checkout";
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px 136px 100px 136px;
}
.row-scroll-wrapper {
  display: flex;
  align-items: center;
  gap: 40px;
}
.customer-completed {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0px 20px 0px;
}
.customer-completed span {
  background-color: black;
  color: white;
  padding: 6px 11px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 100%;
}
.customer-completed label {
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
}
.payment-completed {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0px 20px 0px;
}
.payment-completed span {
  background-color: transparent;
  color: gray;
  border: 1px solid gray;
  padding: 4px 9px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 100%;
}
.payment-completed label {
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: gray;
}
.collapse-item {
  padding: 0px 0px 10px 0px;
}
.collapse-item h3 {
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 0px 10px 0px;
  font-weight: 600;
}
.item-row {
  display: flex;
  align-items: center;
  gap: 30px;
  border: 1px solid gray;
  border-radius: 10px;
}
.item-row img {
  height: auto;
  border-radius: 10px 0px 0px 10px;
  width: 25%;
}
.content-row {
  display: flex;
  flex-direction: column;
}
h3 {
  font-family: Arial, Helvetica, sans-serif;
}
.content-row label {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding-bottom: 16px;
}
.content-row span {
  font-family: Arial, Helvetica, sans-serif;
  color: #555;
  padding-bottom: 10px;
  font-weight: lighter;
  font-size: 16px;
}
.row-select-fill {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding-top: 20px;
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
.select-fill-content input {
  font-size: 16px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
  padding: 20px;
  transition: border-color 0.3s ease;
  appearance: none;
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
.fill-telephone {
  display: flex;
  gap: 10px;
}
.phone-icon-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.phone-icon {
  position: absolute;
  left: 16px;
  font-size: 16px;
  color: gray;
}

.phone-icon-wrapper input {
  padding-left: 31px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
.phone-number {
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
.fill-telephone > .phone-number {
  width: 100%;
}
</style>

<template>
  <div class="container">
    <div class="row-scroll-wrapper">
      <div class="customer-completed">
        <CheckCompleted />
        <label>Customer Details</label>
      </div>
      <div class="payment-completed">
        <span>2</span>
        <label>Payment</label>
      </div>
    </div>
    <h3>Selected Vehicle</h3>
    <div class="vehicle-selection">
      <img :src="imageUrl" :alt="imageUrl" />
      <div class="vehicle-info">
        <label>{{ car.model }}</label>
        <span>{{ car.location }}</span>
        <span>Telephone: +(855) 999 777 888</span>
      </div>
      <hr />
      <div class="payment-terms">
        <label>Please accept Payments to proceed</label>
        <div class="payment-consent">
          <label>Payment Consent*</label>
          <div class="payment-checkbox">
            <div class="checkbox-wrapper-30">
              <span class="checkbox">
                <input type="checkbox" />
                <svg>
                  <use xlink:href="#checkbox-30" class="checkbox"></use>
                </svg>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                <symbol id="checkbox-30" viewBox="0 0 22 22">
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
                  />
                </symbol>
              </svg>
            </div>
            <span>I agree to the Vehicle Reservation Terms & Conditions.</span>
          </div>
        </div>
        <div class="confirm-section">
          <span>Reservation Deposit</span>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckCompleted from "../icons/payment/checkCompleted.vue";
import { useUsersStore } from "../../stores/users";
import { mapState } from "pinia";
import { useCarStore } from "../../stores/cars";

export default {
  components: {
    CheckCompleted,
  },
  async mounted() {
    await this.$router.isReady();
    const usersStore = useUsersStore();
    let id = this.$route.params.carId;
    if (!usersStore.mapCarLoan[id]) {
      this.$router.push({
        name: "checkout",
        params: {
          carId: id,
        },
      });
    }
  },
  computed: {
    ...mapState(useCarStore, {
      cars: "cars",
      imageUrl(store) {
        return store.getImageURL("cars", this.car.id, this.car.images[0]);
      },
      discountedPrice: "getDiscountedPrice",
    }),
    car() {
      return this.cars.find((c) => c.id === this.$route.params.carId);
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

.customer-completed label {
  color: black;
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
  color: black;
  border: 1px solid black;
  padding: 4px 9px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 100%;
}
.payment-completed label {
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: black;
}
img {
  height: auto;
  width: 40%;
  border-radius: 10px;
}
h3 {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
}
.vehicle-info {
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
}
.vehicle-info label {
  font-weight: 600;
  font-size: 24px;
  padding: 30px 0px 10px 0px;
}
.vehicle-info span {
  color: #555;
  font-size: 16px;
  padding: 10px 0px 50px 0px;
}
.payment-terms {
  padding-top: 40px;
}
.payment-terms label {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 22px;
}
.payment-consent {
  border-radius: 10px;
  margin-top: 30px;
  padding: 30px;
  border: 1px solid gray;
}
.payment-consent label {
  font-size: 18px;
  color: black;
}
.payment-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 30px;
}
.payment-checkbox span {
  font-family: Arial, Helvetica, sans-serif;
}
.confirm-section {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
}
.confirm-section button {
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 18px;
  transition: 0.3s;
  cursor: pointer;
}
.confirm-section button:hover {
  background-color: #ccc;
  cursor: pointer;
  border: 1px solid gray;
}
.confirm-section span {
  display: flex;
  justify-content: center;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #2d5ea8;
  border: 1px solid #2d5ea8;
  color: white;
  border-radius: 8px;
  font-size: 18px;
}
.checkbox-wrapper-30 .checkbox {
  --bg: #fff;
  --brdr: #d1d6ee;
  --brdr-actv: #1e2235;
  --brdr-hovr: #bbc1e1;
  --dur: calc((var(--size, 2) / 2) * 0.6s);
  display: inline-block;
  width: calc(var(--size, 1) * 22px);
  position: relative;
}
.checkbox-wrapper-30 .checkbox:after {
  content: "";
  width: 100%;
  padding-top: 100%;
  display: block;
}
.checkbox-wrapper-30 .checkbox > * {
  position: absolute;
}
.checkbox-wrapper-30 .checkbox input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  background-color: var(--bg);
  border-radius: calc(var(--size, 1) * 4px);
  border: calc(var(--newBrdr, var(--size, 1)) * 1px) solid;
  color: var(--newBrdrClr, var(--brdr));
  outline: none;
  margin: 0;
  padding: 0;
  transition: all calc(var(--dur) / 3) linear;
}
.checkbox-wrapper-30 .checkbox input:hover,
.checkbox-wrapper-30 .checkbox input:checked {
  --newBrdr: calc(var(--size, 1) * 2);
}
.checkbox-wrapper-30 .checkbox input:hover {
  --newBrdrClr: var(--brdr-hovr);
}
.checkbox-wrapper-30 .checkbox input:checked {
  --newBrdrClr: var(--brdr-actv);
  transition-delay: calc(var(--dur) / 1.3);
}
.checkbox-wrapper-30 .checkbox input:checked + svg {
  --dashArray: 16 93;
  --dashOffset: 109;
}
.checkbox-wrapper-30 .checkbox svg {
  fill: none;
  left: 0;
  pointer-events: none;
  stroke: var(--stroke, var(--border-active));
  stroke-dasharray: var(--dashArray, 93);
  stroke-dashoffset: var(--dashOffset, 94);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  top: 0;
  transition: stroke-dasharray var(--dur), stroke-dashoffset var(--dur);
}
.checkbox-wrapper-30 .checkbox svg,
.checkbox-wrapper-30 .checkbox input {
  display: block;
  height: 100%;
  width: 100%;
}
</style>

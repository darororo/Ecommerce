<script>
import Facebook from "./icons/contactDealer/facebook.vue";
import Instagram from "./icons/contactDealer/instagram.vue";
import Phone from "./icons/contactDealer/phone.vue";
export default {
  components: {
    Phone,
    Facebook,
    Instagram,
  },
};
</script>

<template>
  <h2>Contact the Dealer</h2>
  <div class="wrapper">
    <div class="header">
      <img src="@/assets/images/user.jpg" alt="please input the image" />
      <div class="dealer-name">
        <span>Daro Cars</span>
        <p>30 year old with Cars Edition</p>
      </div>
    </div>
    <div class="body">
      <button>
        <Phone />
        <span>Call +(855) 999 777 888</span>
      </button>
      <button>
        <Facebook />
        <span>Facebook</span>
      </button>
      <button>
        <Instagram />
        <span>Instagram</span>
      </button>
    </div>
    <div class="footer">
      <input type="text" placeholder="Type something..." />
      <div class="body">
        <button class="btn-contact">Contact Agent</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
h2 {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  color: black;
}
.wrapper {
  border: 1px solid rgba(0, 0, 0, 0.4);
  height: 430px;
  width: 407.59px;
  padding: 20px 40px 20px 40px;
}
.header {
  display: flex;
  align-items: center;
  gap: 20px;
}
.header > img {
  border: 1px solid black;
  border-radius: 100%;
  height: 50px;
  width: auto;
}
.dealer-name {
  line-height: 26px;
  font-family: Arial, Helvetica, sans-serif;
}
.dealer-name > span {
  font-weight: 600;
  font-size: 18px;
}
.dealer-name > p {
  font-size: 14px;
  margin: 0px;
}
.body {
  padding: 10px 0px 10px 0px;
}
.body > button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: transparent;
  height: 50px;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 16px;
  transition: 0.3s ease;
}

button:hover {
  border: 1px solid red;
  background-color: red;
  color: white;
}

button svg {
  transition: fill 0.3s ease;
}

button:hover svg {
  fill: white;
}

button > span {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

.footer > input {
  padding: 10px 10px 80px 10px;
  width: 94%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
input:focus {
  border: 1px solid #000000;
}
.btn-contact {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}
</style>

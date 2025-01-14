<template>
  <div class="container">
    <div class="menu">
      <header class="header">
        <div class="description-logo">
          <div class="head">
            <div class="img">
              <img src="@/assets/images/media/carbodiaWhite.png" alt="Frame" />
            </div>
            <div class="brand-name">Carbodia</div>
          </div>
          <div class="description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
        <nav class="nav">
          <ul>
            <li class="span-script">
              <p href="#ABOUT">ABOUT</p>
              <span>Our Story</span>
              <span>Mission and Vision</span>
              <span>Achievements</span>
              <span>Partnertships</span>
            </li>
            <li class="span-script">
              <p href="#PRODUCTS">PRODUCTS</p>
              <span>Product categories</span>
              <span>Feature Products</span>
              <span>Filter and Search</span>
              <span>Special Offers</span>
            </li>
            <li class="span-script">
              <p href="#BLOG">BLOG</p>
              <span>Categories</span>
              <span>Featured Posts</span>
              <span>Subscribe to our Blog</span>
              <span><br /></span>
            </li>
            <li class="span-script">
              <p href="#CONTACTS">CONTACTS</p>
              <div class="contact">
                <Phone />
                <span>+885 69 552 601</span>
              </div>
              <div class="contact">
                <Email />
                <span>Carbodia168@gmail.com</span>
              </div>
              <br /><br /><br />
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <hr />
    <div class="footer">
      <div class="link">
        <Facebook />
        <Instagram />
        <Tiktok />
      </div>
      <p>Copyright © 2024 Flaunter, Ltd. All rights reserved.</p>
      <p><u>Privacy Policy</u> | <u>Terms & Condition </u></p>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap");
@import url("https://fonts.cdnfonts.com/css/goldman");
.brand-name {
  font-family: "Goldman", sans-serif;
  font-size: 30px;
}
.container {
  background-color: #1e1e1e;
  padding: 40px 100px 30px 100px;
  width: auto;
}
.head {
  display: flex;
  align-items: center;
  color: #fff;
  gap: 30px;
}
.img {
  width: 108px;
  height: 80px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: white;
  font-family: Goldman;
  font-size: 20px;
}
.description-logo {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.description {
  padding: 20px 0px 30px 0px;
  color: white;
  font-size: 16px;
  line-height: 2rem;
  font-family: "Raleway", sans-serif;
  width: 86%;
}
.footer {
  padding: 30px 0px 0px 0px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: white;
  font-size: 16px;
}

.nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 60px;
  font-family: "Goldman", sans-serif;
  margin: 0;
  padding-right: 20px;
}
.span-script span {
  display: flex;
  justify-content: start;
  font-family: none;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  line-height: 2.5rem;
  width: 10rem;
}
.span-script .contact {
  display: flex;
  align-items: center;
  gap: 10px;
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0px 0px 10px 0px;
}
</style>
<script>
import Email from "./icons/footerIcons/Email.vue";
import Facebook from "./icons/footerIcons/Facebook.vue";
import Instagram from "./icons/footerIcons/Instagram.vue";
import Phone from "./icons/footerIcons/Phone.vue";
import Tiktok from "./icons/footerIcons/Tiktok.vue";
export default {
  components: {
    Facebook,
    Instagram,
    Tiktok,
    Phone,
    Email,
  },
};
</script>

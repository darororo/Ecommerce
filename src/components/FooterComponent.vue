<template>
  
  <div class="container">
    
   
    <div class="menu">
      <header class="header">
        <div class="head">
          <div class="img">
          <img src="@/assets/images/media/carbodia.png" alt="Frame">
          </div>
          <div class="text"><h1>Carbodia</h1></div>
        
        </div>
        <nav class="nav">    
            <ul class="ul">       
                
                <li><p href="#ABOUT">ABOUT</p></li>
                <li><p href="#PRODUCTS">PRODUCTS</p></li>
                <li><p href="#BLOG">BLOG</p></li>
                <li><p href="#CONTACTS">CONTACTS</p></li>
                
            </ul>
        </nav>
      </header>
    </div>
    <div class="description">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the </p>
      <p>1500s, when an unknown printer took a galley of type and scrambled it to </p>
      <p>make a type specimen book.</p>
    </div>
    <div class="footer">
      <div class="media">
        <nav class="nav">    
            <ul class="socail">       
                
                <li class="img1" ><img src="@/assets/images/media/facebook.png"alt="facebook"></li>
                <li class="img1"> <img src="@/assets/images/media/instagram.png" alt="IG"></li>
                <li class="img1"><img src="@/assets/images/media/tiktok.png" alt="tiktok"></li>
               
                
            </ul>
        </nav>

     
      </div>
      <p>Copyright © 2024 Flaunter, Ltd. All rights reserved.</p>
      <p> <u>Privacy Policy</u> | <u>Terms & Condition </u> </p>
    </div>
    
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');

.container{
  background-color: black;
  color: black; 
  width:1440px ;
  height:447px ;
  
}
.head{
  
  color: #fff;
  display: flex;
  align-items: center;
  
  
  
 
}
.img{
  width: 108px;
  height: 80px;
  margin: 20px;
  margin-right: 20px;
}

.header {
   
    color:white;
    display: flex;
    justify-content: space-between;
    font-family: Goldman;
    font-size: 20px;
    
}
.h1{
  font-size: 30px;
  font-weight: Goldman;
  margin-right:20px ;
}
.nav .ul {
    list-style: none;
    margin-right: 150px;
    display: flex;
    font-family: Goldman;
}

.nav .li {
    margin-right: 10px;
    display: flex ;

}

.nav .p {
    color: #fff;
    text-decoration: none;
    font-family: Goldman;
    display: flex;
    justify-content: space-between;
}

.description{
  padding: 20px;
  color: white;
  font-family: Roboto;
  font-size: 16px;
}
.footer {
  text-align: center;
  color: white;
  font-family: Roboto;
  font-size: 16px;
}

.nav .socail{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  
}
.nav .img1{
  width: 34px;
  height: 34px;
}

</style>

<template>
    <!-- <div class="main"> -->
        <div class="container">
            <div class="img-container">
                <img src="@/assets/images/products/car1.png" alt="">
            </div>
            <div class="text-container">
                <div class="text-row-1">
                    <div class="price">$6,670,088</div>
                    <div class="bookmark">
                        <input class="star" type="checkbox" title="bookmark page" checked>
                    </div>
                </div>
                <div class="name-car">2017 Ferrari LaFerrari</div>
                <div class="script-seller">
                    <div class="description">The LaFerrari features a 6262cc V12 engine built for performance. The LaFerrari is the first production car to ever be equipped with an F1-derived hybrid solution </div>
                    <div class="seller">
                        <SellerIcon/>
                        <span>Yem Daro</span>
                    </div>
                </div>
                <div class="reser-detail"> 
                    <button class="btn-reser">Reserve Now</button>
                    <button class="btn-deta">More detail</button>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import SellerIcon from './icons/SellerIcon.vue';

export default {
    components: {
        SellerIcon
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Goldman:wght@400;700&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Quattrocento:wght@400;700&family=Quicksand:wght@300..700&display=swap');
@import url('https://fonts.cdnfonts.com/css/inria-sans');
.main {
    display: flex;
    justify-content: center;
    padding: 20px 40px 20px 40px;
    gap: 20px;
    background-color: red;
}
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 8px;
    height: 100%;
    border: 1px solid #B0B0B0;
}

.img-container > img {
    width: 100%;
    height: 100%;
}

.text-container {
    background: white;
    height: 100%;
    padding: 16px 16px 0px 16px;
}

.text-row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
}

.star {
    visibility:hidden;
    font-size: 36px;
    bottom: 22px;
    right: 16px;
    position: relative;
    cursor:pointer;
}
.star::after {
    content: "\2605";
    visibility:visible;
    color: black;
}
.star:checked::after {
    color: #A8A8A8;
   content: "\2606";
}

.price {
    font-style: normal;
    font-family: 'Inria Sans', sans-serif;
    font-size: 18px;
    font-weight: bold;
                                                
}

.bookmark {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 18px;
    font-style: normal;
    font-family: 'Inria Sans', sans-serif;
                                                
}
.name-car {
    font-family: 'Inria Sans', sans-serif;
    font-weight: 100;
    padding-bottom: 10px;
    font-size: 18px;
}
.description {
    font-family: 'Inria Sans', sans-serif;
    font-size: 16px;
    font-weight: lighter;
    color: #828282;
    width: 24rem;
    line-height: 24px;
}
.script-seller {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 0px 12px 0px;
}
.seller {
    display: flex;
    color: #464646;
    gap: 4px;
    cursor: pointer;
    padding: 0px 6px 0px 0px;
}
.seller span {
    font-size: 14px;

}
.reser-detail {
    display: flex;
    justify-content: space-between;
}
.btn-reser {
    width: 230px;
    height: 50px;
    border: none;
    background-color: #FF0000;
    color: white;
    border-radius: 0px 12px 0px 12px;
    font-family: 'Inria Sans', sans-serif;
    font-size: 18px;
    font-weight: 200;
    cursor: pointer;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.btn-deta {
    width: 230px;
    height: 50px;
    border: 2px solid rgb(172, 172, 172);
    background-color: white;
    border-radius: 0px 12px 0px 12px;
    font-family: 'Inria Sans', sans-serif;
    font-size: 18px;
    font-weight: 200;
    cursor: pointer;
}
</style>
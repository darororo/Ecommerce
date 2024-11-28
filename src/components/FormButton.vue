<template>
    <div class="btn-promotion">
        <button class="btn-buy-gray">Buy Now</button><br>
        <button class="btn-buy-red">Buy Now</button><br>
        <button class="btn-buy-blue">Buy Now</button><br>
    </div>
    <div class="form-btn">
        <button class="btn-reserve">Reserve Now</button><br>
        <button class="btn-detail">More detail</button><br>
        <button class="btn-inquire">Inquire</button><br>
    </div>
    <div class="form-btn-comment">
        <button class="btn-summit">Submit</button><br>
        <button class="btn-cancel">Cancel</button><br>
    </div>
    <button class="btn-con-agent">Contact Agent</button><br>
    <button class="btn-edit-pro">Edit Profile</button><br>
    <button class="btn-create-list">Create a listing</button><br>
    <button class="btn-next">Next</button><br>
    <div class="btn-deposit-confirm">
        <button class="btn-deposite">
            <span class="noted-deposite">Reservation Deposite</span>
            <span class="price">Price</span>
        </button><br>
        <button class="btn-confirm">Confirm</button><br>
    </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');

/* Form button promotion */
.btn-promotion button{
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 100px;
    height: 40px;
    cursor: pointer;
    border-radius: 0px 10px 0px 10px;
    font-family: 'Roboto Serif';
    box-shadow: 0px 4px 4px rgb(62, 62, 62);

}

/* Button Buy Now gray */
.btn-buy-gray {
    background-color: #AEAEAE;
    color: white;
}
/* Button Buy Now red */
.btn-buy-red {
    background-color: #FF4F4F;
    color: white;
}
/* Button Buy Now blue */
.btn-buy-blue {
    background-color: #2D5EA8;
    color: white;
}
/* Form button car card */
.form-btn button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 165px;
    height: 50px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 0px 10px 0px 10px;
    font-family: 'Roboto Serif';
}
/* Button reserve */
.btn-reserve {
    box-shadow: 0px 4px 4px rgb(62, 62, 62);
    border: none;
    color: white;
    background-color: #FF4F4F;
}
/* Button detail */
.btn-detail {
    background-color: white;
    border: 1px solid rgb(85, 84, 84);
    color: black;
}
/* Button inquire */
.btn-inquire {
    box-shadow: 0px 4px 4px rgb(62, 62, 62);
    border: none;
    color: white;
    background-color: #FF4F4F;
}
/* Form button comment */
.form-btn-comment button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 36px;
    border: none;
    color: white;
    font-size: 12px;
    cursor: pointer;
    font-family: 'Roboto Serif';
}
/* button summit */
.btn-summit {
    background-color: #C10000;
}
/* button cancel */ 
.btn-cancel {
    background-color: #00B70C;
}
/* Button contact agent */
.btn-con-agent {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 318px;
    height: 38px;
    border: none;
    background-color: #FF0000;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Roboto Serif';
}
/* Button edit profile */
.btn-edit-pro {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 165px;
    height: 40px;
    font-size: 13px;
    border: 1px solid black;
    background-color: #257DBC;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-family: 'Roboto Serif';
    box-shadow: 0px 4px 4px rgb(163, 163, 163);
}
/* Button create listing */
.btn-create-list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 178px;
    height: 40px;
    font-size: 13px;
    border: none;
    background-color: #FF8C00;
    color: white;
    border-radius: 0px 10px 0px 10px;
    font-family: 'Roboto Serif';
    box-shadow: 0px 4px 4px rgb(101, 101, 101);
    cursor: pointer;
}
/* Button next */
.btn-next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 47px;
    font-size: 18px;
    border: none;
    background-color: #454545;
    color: white;
    font-family: 'Roboto Serif';
    cursor: pointer;
}
/* Form button deposit and confirm */
.btn-deposit-confirm button{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: none;
    color: white;
    height: 61px;
    width: 713px;
    cursor: pointer;
    font-family: 'Roboto';
}
/* Button deposit */
.btn-deposite {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #454545;
}
/* text in button deposit */
.noted-deposite {
    font-size: 12px;
}
/* price in button deposit */
.price {
    font-size: 20px;
}
/* Button confirm */
.btn-confirm {
    font-size: 20px;
    background-color: #2D5EA8;
}
</style>
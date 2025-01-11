<template>
    <div class="card">
        <div class="wrapper">
            <div class="image-container">
                <img class="bm-img" :src="image" alt="2017 Ferrari LaFerrari" />
            </div>
            <div class="details">
                <h3>{{ model }}</h3>
                <p class="price">{{ price }}</p>
            </div>
            <div class="action1">
                <button class="details-button" @click="goToProduct(id)">More detail</button>
            </div>
        </div>
        <div class="dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        model: String,
        price: String,
        id: String,
        image: String,
    },
    methods: {
        goToProduct(id) {
            this.$router.push(`/car/${id}`)
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid #ddd; */
    width: 555px;
    height: 76px;
    background-color: #fff;
    /* border: 2px solid #aaa; */

}

.wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 2px solid #aaa;
    padding: 0 8px 0 0;
}

.bm-img {
    width: 141px;
    height: 76px;
}

.details h3 {
    font-size: 14px;
    font-family: Inria Sans;

}

.price {
    color: black;
    font-weight: bold;
    font-family: Inria Sans;
    font-size: 13px;
}

.action {
    margin-right: 16px;
}

.details-button {
    padding: 10px 20px;
    font-size: 13px;
    font-weight: bold;
    color: black;
    background-color: white;
    border: 2px solid #aaa;
    border-radius: 0 16px 0 16px;
    text-align: center;
    transition: background-color 0.3s, border-color 0.3s;
    font-family: Roboto Serif;
    margin-left: 20px;
}

.details-button:hover {
    background-color: white;
    display: flex;
}

.dots {
    display: flex;
    gap: 6px;
    margin-left: 20px;

}

.dots span {
    width: 6px;
    height: 6px;
    background-color: #888;
    border-radius: 50%;
}

.dots span:hover {
    background-color: #555;
}
</style>
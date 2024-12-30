<template>
    <div>
        <textarea class="comment-box" placeholder="I love cars!" rows="4" name="" id=""></textarea>
        <div class="btn-wrapper">
            <button class="inquire-button bg-green">Submit</button>
            <button class="inquire-button bg-red">Cancel</button>
        </div>
    </div>
</template>


<style scoped>
.comment-box {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.inquire-button {
    display: inline-block;
    background-color: #045a09;
    color: white;
    height: 40px;
    width: 160px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 0px 16px 0px 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.bg-green {
    background-color: #045a09;
}

.bg-red {
    background-color: #C10000;
}

.btn-wrapper {
    display: flex;
    justify-content: end;
    column-gap: 38px;
}
</style>
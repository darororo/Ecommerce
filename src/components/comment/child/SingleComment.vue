<template>
    <div class="single-comment roboto-regular">
        <div class="single-comment-header">
            <img class="avatar" src="@/assets/images/user.jpg" alt="">
            <div class="comment-username-container">
                <p>John Yakuza</p>
                <p class="text-date">4 Weeks Ago - 09/12/1945</p>
            </div>
        </div>
        <div class="comment-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora incidunt tenetur, excepturi ab
            deleniti soluta ex officia vel in! Cumque a iste libero reprehenderit consequuntur illum autem architecto
            pariatur error. Vel atque perspiciatis ullam adipisci dolorem omnis delectus iusto.
        </div>
        <hr class="line">
    </div>
</template>

<style scoped>
.avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.single-comment-header {
    display: flex;
}

.comment-username-container {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
}

.comment-username-container>p {
    margin: 0 0 0 8px;
}

.comment-content {
    padding: 12px 0 0 4px;
}

.line {
    margin: 20px 0px;
    border-color: #fff;
}

.text-date {
    font-weight: 300;
}
</style>
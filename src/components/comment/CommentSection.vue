<template>
  <CommentHeader />
  <div class="singles-wrapper">
    <template v-for="n in 10">
      <SingleComment />
    </template>
  </div>

  <CommentInput />
</template>

<script>
import CommentHeader from "./child/CommentHeader.vue";
import CommentInput from "./child/CommentInput.vue";
import SingleComment from "./child/SingleComment.vue";

export default {
  components: {
    CommentHeader,
    SingleComment,
    CommentInput,
  },
};
</script>

<style scoped>
.line {
  margin: 20px 0;
  border-color: #ffffff;
}

.singles-wrapper {
  margin-top: 25px;
  height: 600px;
  overflow-y: scroll;
  margin-bottom: 20px;
}
</style>

<template>
  <div class="post">
    <img src="~/assets/img/blog-post-apagar.png" />
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
    <a-button type="secondary" class="btn-secondary"> Ver post </a-button>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-secondary {
  width: 100% !important;
}

.post {
  img {
    max-width: 100%;
    width: 100%;
  }
  h2 {
    margin: 0 !important;
    font-size: 1.75rem;
    font-weight: 700;
    color: $neutral-dark;
  }

  p {
    margin: 16px 0;
    font-size: 0.875rem;
  }
}
</style>

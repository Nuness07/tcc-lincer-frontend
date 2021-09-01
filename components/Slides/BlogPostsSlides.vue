<template>
  <div class="blog-posts">
    <!-- <swiper ref="swiperPosts" class="blog-posts_swiper">
      <swiper-slide v-for="i in infosPosts" :key="i.id">
        <BlogPost :post="i" />
      </swiper-slide>
    </swiper> -->
  </div>
</template>

<script>

export default {
  name: 'BlogPostsSlide',
  props: {
    configSlide: {
      type: Object,
      required: true
    },
    infosPosts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>

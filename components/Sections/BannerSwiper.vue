<template>
  <section class="banner-swiper">
    <div class="banner-swiper__left">
      <h3>CURSOS DA COMUNIDADE</h3>
    </div>
    <div class="banner-swiper__right">
      <SwiperTwoCards />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner-swiper {
  display: flex;
  align-items: center;
  .banner-swiper__left {
    width: calc(100% / 2 - 8px);
  }

  .banner-swiper__left {
    padding: 189px 16px 189px 100px;
    background-image: url("@/assets/img/banner-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 30px;

    h3 {
      color: $primary-yellow;
      font-size: 48px;
      font-weight: bold;
    }
  }

  .banner-swiper__right {
      max-width: 600px;
  }
}
</style>
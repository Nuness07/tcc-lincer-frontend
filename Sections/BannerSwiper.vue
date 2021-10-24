<template>
  <section class="banner-swiper" :class="positionBanner">
    <div class="banner-swiper__left">
      <h3>{{ titleBanner }}</h3>
    </div>
    <div class="banner-swiper__right">
      <SwiperTwoCards />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    positionBanner: {
      type: String,
    },
    titleBanner: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-swiper {
  display: flex;
  align-items: center;

  .banner-swiper__left,
  .banner-swiper__right {
    width: calc(50% - 8px);
  }

  .banner-swiper__left {
    padding: 189px 16px 189px 100px;
    background-image: url("@/assets/img/banner-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 30px;
    display: flex;
    justify-content: flex-end;

    h3 {
      color: $primary-yellow;
      font-size: 3rem;
      font-weight: bold;
      max-width: 400px;
      margin-right: 200px;

      @media (max-width: 1300px) {
        font-size: 2rem;
      }
    }
  }

  .banner-swiper__right {
    max-width: 600px;
    padding-right: 16px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .banner-swiper__left {
      padding: 120px 16px;
      justify-content: flex-start;

      h3 {
        margin-right: 0;
      }
    }

    .banner-swiper__left,
    .banner-swiper__right {
      width: 100%;
      max-width: 100%;
      margin-right: 0;
    }

    .banner-swiper__right {
      padding: 0 24px;
      margin-top: 32px;
    }
  }

  &.right {
    flex-direction: row-reverse;

    .banner-swiper__left {
      margin-right: 0;
      margin-left: 30px;
      justify-content: flex-start;
    }

    .banner-swiper__right {
      padding-right: 0;
      padding-left: 16px;
    }

    @media (max-width: 1024px) {
      flex-direction: column;

      .banner-swiper__left {
        margin-left: 0;
      }

      .banner-swiper__right {
        padding: 0 24px;
      }
    }
  }
}
</style>
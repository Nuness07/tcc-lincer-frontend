<template>
  <div class="swiper-two-cards" style="position: relative">
    <client-only>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="n in 5" :key="n">
          <CardCurso />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev">
        <OutlineChevronLeftIcon />
      </div>
      <div class="swiper-button-next">
        <OutlineChevronRightIcon />
      </div>
    </client-only>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`,
        },
        breakpoints: {
          1200: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      },
    };
  },
};
</script>

<style lang='scss' scoped>
.swiper-two-cards {
  .swiper {
    .swiper-slide {
      background-position: center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      h3 {
        font-weight: 500;
        font-size: 42px;
        line-height: 49px;
        color: $neutral-white;
        margin-bottom: 4px;
      }

      p {
        display: block;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: $primary-yellow;
        margin-bottom: 24px !important;
      }

      @media (max-width: 768px) {
        // padding: 0 48px;

        h3 {
          font-size: 24px;
          line-height: 32px;
        }

        p {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    background: $primary-yellow;
    width: 32px;
    height: 32px;

    svg {
      color: #fff;
      width: 24px;
    }

    &::after {
      display: none;
    }
  }

  .swiper-button-prev {
    left: -16px;

    @media (max-width: 1300px) {
      left: 0;
    }

    @media (max-width: 1024px) {
      left: -16px;
    }
  }

  .swiper-button-next {
    right: -16px;

    @media (max-width: 1300px) {
      right: 0px;
    }

    @media (max-width: 1024px) {
      right: -16px;
    }
  }
}
</style>

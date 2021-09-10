<template>
  <div>
    <client-only>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide-1">
          <div class="container">
            <h3>CURSO EM DESTAQUE</h3>
            <p>INICIANDO NO MUNDO AUDIOVISUAL</p>
            <a-button type="primary">
              Ver curso
            </a-button>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-2">
          <div class="container">
            <h3>CURSO EM DESTAQUE</h3>
            <p>INICIANDO NO MUNDO AUDIOVISUAL</p>
            <a-button type="primary">
              Ver curso
            </a-button>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-3">
          <div class="container">
            <h3>CURSO EM DESTAQUE</h3>
            <p>INICIANDO NO MUNDO AUDIOVISUAL</p>
            <a-button type="primary">
              Ver curso
            </a-button>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-4">
          <div class="container">
            <h3>CURSO EM DESTAQUE</h3>
            <p>INICIANDO NO MUNDO AUDIOVISUAL</p>
            <a-button type="primary">
              Ver curso
            </a-button>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-5">
          <div class="container">
            <h3>CURSO EM DESTAQUE</h3>
            <p>INICIANDO NO MUNDO AUDIOVISUAL</p>
            <a-button type="primary">
              Ver curso
            </a-button>
          </div>
        </swiper-slide>
        <div
          slot="button-prev"
          class="swiper-button-prev swiper-button-white"
        />
        <div
          slot="button-next"
          class="swiper-button-next swiper-button-white"
        />
      </swiper>
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
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang='scss' scoped>
.swiper {
  height: 360px;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h3 {
      font-weight: 500;
      font-size: 42px;
      line-height: 49px;
      color: #ffffff;
      margin-bottom: 4px;
    }

    p {
      display: block;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #ffb400;
      margin-bottom: 24px !important;
    }

    @media (max-width: 768px) {
      padding: 0 48px;

      h3 {
        font-size: 24px;
        line-height: 32px;
      }

      p {
        font-size: 14px;
        line-height: 22px;
      }
    }

    &.slide-1 {
      background-image: url("@/assets/img/box-service-produtos.png");
    }
    &.slide-2 {
      background-image: url("@/assets/img/box-service-cursos.png");
    }
    &.slide-3 {
      background-image: url("@/assets/img/box-service-produtos.png");
    }
    &.slide-4 {
      background-image: url("@/assets/img/box-service-cursos.png");
    }
    &.slide-5 {
      background-image: url("@/assets/img/box-service-produtos.png");
    }
  }
}
</style>

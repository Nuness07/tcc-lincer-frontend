<template>
  <div>
    <SwiperBannerFull />

    <div class="nossos-cursos">
      <div class="container">
        <div class="nossos-cursos__header">
          <h2>Nossos cursos premium</h2>
          <p>Assine Lincer Premium para ter acesso a eles gratuitamente</p>
        </div>

        <section class="nossos-cursos__body">
          <CardCurso v-for="x in 4" :key="x" />
        </section>
      </div>

       <BannerSwiper class="swiper-banner-left" />
    </div>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  layout: "notLogged",
};
</script>

<style lang="scss" scoped>
.nossos-cursos {
  margin-top: 32px;
  .nossos-cursos__header {
    text-align: center;
    margin-bottom: 32px;
    h2 {
      font-weight: 500;
      font-size: 28px;
      line-height: 36px;
      color: #000000;
      margin-bottom: 4px;
    }

    p {
      position: relative;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #ffb400;

      &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 88px;
        height: 3px;
        background: #000;
      }
    }
  }

  .nossos-cursos__body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;

    .card-curso {
      width: calc(100% / 4 - 15px);
    }

    @media (max-width: 1200px) {
      .card-curso {
        width: calc(100% / 2 - 8px);
      }
    }

     @media (max-width: 576px) {
      .card-curso {
        width: 100%;
      }
    }
  }

  .swiper-banner-left {
    margin-top: 70px;
  }
}
</style>

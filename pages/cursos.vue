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

      <BannerSwiper
        class="swiper-banner-left"
        titleBanner="Cursos da Comunidade"
      />
      <BannerSwiper
        class="swiper-banner-left"
        titleBanner="Cursos mais Vendidos"
        positionBanner="right"
      />

      <section class="container categorys">
        <h2>Categorias</h2>
        <div class="categorys__cards">
          <card-category titleCategory="Infraestrutura">
            <template slot="icon">
              <OutlinePuzzleIcon />
            </template>
          </card-category>

          <card-category titleCategory="Ferramentas">
            <template slot="icon">
              <OutlineCogIcon />
            </template>
          </card-category>

          <card-category titleCategory="Roteirização">
            <template slot="icon">
              <OutlineDocumentTextIcon />
            </template>
          </card-category>

          <card-category titleCategory="Roteirização">
            <template slot="icon">
              <OutlineDocumentTextIcon />
            </template>
          </card-category>
        </div>
      </section>
    </div>
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

.categorys {
  margin-top: 50px;
  margin-bottom: 32px;
  text-align: center;

  h2 {
    font-weight: bold;
    margin-bottom: 32px;
  }

  .categorys__cards {
    display: flex;
    justify-content: space-between;
    .card-category {
      width: calc(100% / 4 - 20px);
      padding: 48px 0;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 0 0 16px;

    .categorys__cards {
      display: flex;
      overflow-x: auto;
      width: calc(100% - 16px);
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
      .card-category {
        width: 33%;
        min-width: 220px;
        height: 220px;
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>

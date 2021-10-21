<template>
  <section class="guias">
    <div class="guias__header">
      <h2>Guias e dicas úteis</h2>
      <p>
        Dicas e guias para gerar mais engajamento nos seus cursos publicados
      </p>
    </div>

    <div class="guias__body">
      <GuiasDicasCard />
      <GuiasDicasCard />
      <GuiasDicasCard />
      <GuiasDicasCard />
    </div>
  </section>
</template>

<script>
import GuiasDicasCard from "./GuiasDicasCard.vue";
export default {
  components: { GuiasDicasCard },
};
</script>

<style lang="scss" scoped>
.guias {
  .guias__header {
    margin-bottom: 16px;
    h2 {
      font-size: 1.5rem;
      color: #ffb400;
      font-weight: bold;
      margin-bottom: 0;
    }
  }

  .guias__body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card {
      width: calc(100% / 4 - 10px);
    }

    @media (max-width: 1200px) {
      .card {
        width: calc(100% / 3 - 10px);

        &:nth-child(4) {
          margin-top: 20px;
        }
      }
    }

    @media (max-width: 1024px) {
      .card {
        width: calc(100% / 2 - 10px);

        &:nth-child(3) {
          margin-top: 20px;
        }
      }
    }

    @media (max-width: 576px) {
      .card {
        width: 100%;

        &:nth-child(3),
        &:nth-child(4) {
          margin-top: initial;
        }

        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
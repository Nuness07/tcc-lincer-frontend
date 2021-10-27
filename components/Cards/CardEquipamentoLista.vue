<template>
  <div class="card-equipamento">
    <picture>
      <img class="img-equipamento" src="~/assets/img/banner-bg.png" alt="imagem do equipamento">
    </picture>

    <div class="card-equipamento__content">
      <h2 class="equipamento-title">
        {{ equipamento.nome }}
      </h2>
      <small>{{ equipamento.fornecedor }}</small>

      <div class="card-equipamento__infos">
        <p>R$ 99,90/hora</p>
        <p>Microfone</p>
      </div>

      <nuxt-link class="ant-btn ant-btn-primary" to="/aaa">
        Ver detalhes
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    equipamento: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-equipamento {
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  width: 300px;

  picture {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 56.25%;

    img {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 16px;

    h2 {
      margin-bottom: 2px;
      line-height: 26px;
    }

    small {
      display: flex;
      font-size: 0.875rem;
      margin-bottom: 16px;
      color: $border-gray;
    }

    p {
      display: flex;
      align-items: center;
      font-weight: bold;
      margin-bottom: 16px !important;
      svg {
        width: 20px;
        margin-right: 8px;
        color: $primary-yellow;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 20px;
        margin-left: 8px;
      }
    }
  }

  .card-equipamento__infos {
    display: flex;
    justify-content: space-between;
    display: flex;
    margin-bottom: 16px;
    p {
      margin-bottom: 0 !important;

      &:nth-child(2) {
        font-size: 0.875rem;
        color: $border-gray;
      }
    }
  }
}

.equipamento-title{
  min-height: 80px;
}
</style>

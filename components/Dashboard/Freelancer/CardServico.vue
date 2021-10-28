<template>
  <div class="card-servico" to="/" v-wave>
    <h2>{{ titulo }}</h2>
    <p class="card-servico__description">{{ descricao }}</p>

    <div class="card-servico__bottom">
      <div class="card-servico__user">
        <picture>
          <img src="@/assets/img/banner-bg.png" alt="Nome do usuário" />
        </picture>
        <p>Nome do usuário</p>
      </div>
      <p class="card-servico__preco">R$ 5.000,00</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
    },
    descricao: {
      type: String,
    },
  }
};
</script>

<style lang="scss" scoped>
.card-servico {
  background: #fff;
  padding: 24px 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 8px;
  transition: all 0.3s;
  color: rgb(179, 179, 179);
  cursor: pointer;

  h2 {
    font-size: 1rem;
    line-height: 22px;
    height: 44px;
    font-weight: bold;
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: rgb(43, 43, 43);
  }

  p.card-servico__description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.875rem;
    color: rgb(177, 177, 177);
    height: 64px;
  }

  .card-servico__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .card-servico__user {
      display: flex;
      align-items: center;
      picture {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 8px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      p {
        font-size: 0.75rem;
        font-weight: bold;
      }
    }

    .card-servico__preco {
      font-size: 0.875rem;
      font-weight: bold;
      color: #ffb400;
    }
  }

  &:hover {
    /* background: #000; */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.08) 0px 2px 4px -1px;
  }
}
</style>
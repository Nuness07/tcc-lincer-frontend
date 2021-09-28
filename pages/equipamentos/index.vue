<template>
  <main class="equipamentos">
    <section class="container equipamentos__parceiros">
      <h2>Conheça nossos parceiros!</h2>
      <div class="equipamentos__cards">
        <CardParceiro
          v-for="(card, index) in 4"
          :key="index"
          title="Nome do fornecedor"
          :img-url="`${require('@/assets/img/banner-bg.png')}`"
        />
      </div>
    </section>

    <section class="container equipamentos__listagem">
      <div class="equipamentos__filtros">
        <a-select default-value="Marca" @change="handleChangeMarca">
          <a-select-option value="jack"> Jack </a-select-option>
          <a-select-option value="lucy"> Lucy </a-select-option>
          <a-select-option value="Yiminghe"> yiminghe </a-select-option>
        </a-select>
        <a-select default-value="Preço" @change="handleChangePreco">
          <a-select-option value="jack"> Jack </a-select-option>
          <a-select-option value="lucy"> Lucy </a-select-option>
          <a-select-option value="Yiminghe"> yiminghe </a-select-option>
        </a-select>
        <a-select default-value="Categoria" @change="handleChangeCategoria">
          <a-select-option value="jack"> Jack </a-select-option>
          <a-select-option value="lucy"> Lucy </a-select-option>
          <a-select-option value="Yiminghe"> yiminghe </a-select-option>
        </a-select>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: "notLogged",
  methods: {
    handleChangeMarca(value) {
      console.log(`selected ${value}`);
    },
    handleChangePreco(value) {
      console.log(`selected ${value}`);
    },
    handleChangeCategoria(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.equipamentos {
  &__parceiros {
    margin-top: 64px;
    margin-bottom: 64px;

    h2 {
      font-weight: bold;
      margin-bottom: 8px;
    }
  }

  &__cards {
    display: flex;
    justify-content: space-between;

    .card-parceiro {
      width: calc(100% / 4 - 15px);
    }
  }

  @media (max-width: 1024px) {
    &__parceiros {
      padding-left: 0;
      padding-right: 0;
      h2 {
        margin-left: 16px;
      }
    }
    &__cards {
      padding-left: 16px;
      padding-right: 16px;
      overflow: auto;

      /* width */
      &::-webkit-scrollbar {
        display: none;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        display: none;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        display: none;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        display: none;
      }

      .card-parceiro {
        min-width: 280px;
        width: calc(100% / 3 - 15px);

        &:not(:last-child) {
          margin-right: 30px;
        }
      }
    }
  }

  .equipamentos__listagem {
    margin-bottom: 80px;

    .equipamentos__filtros {
      .ant-select::v-deep {
        width: 200px;
        margin-right: 16px;
      }
    }
  }
}
</style>
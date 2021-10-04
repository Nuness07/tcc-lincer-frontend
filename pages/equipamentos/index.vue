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

      <div class="equipamentos__cards equipamento--card">
        <CardEquipamento
          v-for="(card, index) in 7"
          :key="index"
          title="Título do equipamento"
          fornecedor="Nome do  fornecedor"
          :img-url="`${require('@/assets/img/banner-bg.png')}`"
        />
      </div>

      <a-button class="btn-ver-mais" type="primary">Carregar mais</a-button>
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
    margin-bottom: 32px;

    h2 {
      font-weight: bold;
      margin-bottom: 8px;
    }
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;

    .card-parceiro,
    .card-equipamento {
      width: calc(100% / 4 - 15px);
      margin-bottom: 32px;

      &:not(:nth-child(4n)) {
        margin-right: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    &__cards {
      .card-parceiro,
      .card-equipamento {
        width: calc(100% / 3 - 15px);

        &:not(:nth-child(4n)) {
          margin-right: initial;
        }

        &:not(:nth-child(3n)) {
          margin-right: 20px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    &__cards {
      .card-parceiro,
      .card-equipamento {
        width: calc(100% / 2 - 15px);

        &:not(:nth-child(3n)) {
          margin-right: initial;
        }

        &:not(:nth-child(2n)) {
          margin-right: 20px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    &__cards {
      .card-parceiro,
      .card-equipamento {
        width: 100%;

        &:not(:nth-child(2n)) {
          margin-right: initial;
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

      @media (max-width: 992px) {
        display: flex;
        justify-content: space-between;
        .ant-select::v-deep {
          margin-right: initial;
          width: calc(100% / 3 - 15px);
        }
      }

      @media (max-width: 576px) {
        flex-direction: column;
        .ant-select::v-deep {
          width: 100%;

          &:not(:last-child) {
            margin-bottom: 32px;
          }
        }
      }
    }
  }

  .equipamento--card {
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;
  }

  .btn-ver-mais::v-deep {
    margin: 0 auto;
    width: 100%;
    max-width: 280px;
  }
}
</style>
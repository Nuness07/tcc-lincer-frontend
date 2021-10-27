<template>
  <div class="detalhe-equipamento">
    <div class="container">
      <div class="details__left">
        <nuxt-link to="/equipamentos-cadastrados">
          <button><OutlineChevronLeftIcon /> Voltar para os equipamentos</button>
        </nuxt-link>
        <SwiperGaleryThumb />
      </div>

      <div class="details__right">
        <div class="details__top">
          <small>Microfone</small>
          <h2>{{ equipamento.nome }}</h2>
          <caption>
            {{ equipamento.marca }}
          </caption>
        </div>

        <div class="details__bottom">
          <div class="details__tab">
            <button @click="showDescription = !showDescription">
              Descrição <OutlineChevronDownIcon />
            </button>
            <transition name="fadeBottom" mode="out-in">
              <div v-if="showDescription" class="details__tab-description">
                <p>
                  {{ equipamento.descricao }}
                </p>
              </div>
            </transition>
          </div>

          <div class="details__tab">
            <button @click="showEspecifications = !showEspecifications">
              Especificações técnicas <OutlineChevronDownIcon />
            </button>
            <transition name="fadeBottom" mode="out-in">
              <div
                v-if="showEspecifications"
                class="details__tab-especifications"
              >
                {{ equipamento.especificacoes }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EquipamentoService from '~/service/equipamento/equipamento-service'
export default {
  name: 'DetalhesEquipamentos',
  layout: 'loggedCompany',
  data () {
    return {
      showDescription: false,
      showEspecifications: false,
      equipamento: []
    }
  },
  mounted () {
    this.getEquipamento()
  },
  methods: {
    async getEquipamento () {
      this.equipamento = await EquipamentoService.getEquipamento(this.$route.params.id)
      this.equipamento = this.equipamento.data
    }
  }
}
</script>

<style lang="scss" scoped>
.detalhe-equipamento{
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .details__left {
    width: calc(60% - 15px);
    button {
      display: flex;
      align-items: center;
      border: 0;
      background: none;
      color: $primary-yellow;
      cursor: pointer;
      padding: 8px 0;
      margin: 16px 0;

      svg {
        width: 24px;
        margin-right: 8px;
      }
    }
  }

  .details__right {
    margin-top: 40px;
    width: calc(40% - 15px);

    .details__top {
      background: #fff;
      padding: 64px 16px;
      small {
        font-weight: bold;
        color: $primary-yellow;
        font-size: 0.875rem;
      }

      h2 {
        font-size: 1.125rem;
        font-weight: bold;
        margin-bottom: 8px;
      }

      caption {
        display: flex;
        color: $border-gray;
        padding: 0;
        width: 100%;
      }

      .details__price {
        margin-top: 16px;
        margin-bottom: 32px;

        .details__price-value {
          display: flex;
          align-items: flex-start;

          p {
            font-size: 0.875rem;
            font-weight: bold;
            color: $neutral-gray;
            margin-right: 4px;
          }

          h3 {
            font-size: 1.625rem;
            line-height: 24px;
            font-weight: bold;
            color: $primary-yellow;
            margin-bottom: 0;
          }
        }
      }

      button {
        width: 100%;
        font-weight: bold;
      }
    }

    .details__bottom {
      margin-top: 32px;
      background: #fff;
      // padding: 16px 0;

      .details__tab {
        &:nth-child(1) {
          border-bottom: 1px solid $background-gray;
        }

        button {
          width: 100%;
          display: flex;
          justify-content: space-between;
          color: $primary-yellow;
          padding: 4px 0;
          border: 0;
          background: none;
          font-size: 1rem;
          padding: 16px;
          cursor: pointer;
          font-weight: bold;

          svg {
            width: 20px;
          }
        }

        .details__tab-description,
        .details__tab-especifications {
          padding: 16px;
        }

        p,
        li {
          font-size: 0.875rem;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
    }

    .details__left,
    .details__right {
      width: 100%;
    }
  }
}
</style>

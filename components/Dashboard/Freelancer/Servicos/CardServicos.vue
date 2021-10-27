<template>
  <div class="card-servicos">
    <div class="card-servicos__header">
      <h2>{{ dados.titulo }}</h2>
      <p>{{ dados.preco }}</p>
    </div>
    <div class="card-servicos__small-dados">
      <small>Publicado: <span>há 4 horas</span></small>
      <small
        >Prazo de entrega: <span>{{ dados.data_entrega }}</span></small
      >
      <small
        >Propostas: <span>{{ dados.propostas_recebidas }}</span></small
      >
    </div>

    <p class="card-servicos__description">
      {{ descriptionComp.length == 0 ? "Sem descrição" : descriptionComp }}
      <a @click.prevent="seeAllDescription" v-if="showButtonSeeMore">
        ver mais detalhes
      </a>
    </p>
    <div class="card-servicos__tags">
      <caption
        class="card-servicos__tag"
        v-for="(habilidade, index) in dados.habilidades_desejadas"
        :key="index"
      >
        {{
          habilidade
        }}
      </caption>
    </div>

    <div class="card-servicos__footer">
      <div class="card-servicos__footer-left">
        <div class="card-servicos__icon">
          <OutlineUserIcon />
          {{ dados.perfil_contratante.nome }}
        </div>
        <div class="card-servicos__icon">
          <OutlineBadgeCheckIcon />
          Perfil verificado
        </div>
      </div>

      <nuxt-link :to="dados.link" class="btn-proposta" v-wave>
        Ver mais detalhes <OutlineChevronRightIcon />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },

    dados: {
      type: Object,
    },
  },
  data() {
    return {
      showDescription: false,
      showButtonSeeMore: false,
    };
  },
  methods: {
    seeAllDescription() {
      this.showDescription = true;
      this.showButtonSeeMore = false;
    },
  },
  computed: {
    descriptionComp() {
      return this.showDescription
        ? this.dados.descricao
        : this.dados.descricao.substring(0, 440) + "...";
    },
  },
  created() {
    // Vai mostrar já a descrição e NÃO mostrar o botão ver mais detalhes
    if (this.dados.descricao.length <= 440) {
      this.showDescription = true;
      this.showButtonSeeMore = false;
    } else {
      this.showDescription = false;
      this.showButtonSeeMore = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.card-servicos {
  background: #fff;
  padding: 16px;

  .card-servicos__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    h2 {
      margin-bottom: 0;
      font-size: 1.25rem;
      font-weight: 600;
    }

    p {
      margin-bottom: 0 !important;
      font-size: 1.125rem;
      font-weight: 600;
      color: $primary-yellow;
      white-space: nowrap;
    }
  }

  .card-servicos__small-dados {
    small {
      display: inline-flex;
      font-size: 0.75rem;
      color: $border-gray;

      &:not(:last-child) {
        margin-right: 16px;
      }

      span {
        font-weight: bold;
        color: $neutral-gray;
        margin-left: 4px;
      }
    }
  }

  .card-servicos__description {
    font-size: 0.875rem;
    margin-top: 12px;
  }

  .card-servicos__tags {
    display: flex;
    flex-wrap: wrap;
    .card-servicos__tag {
      margin-top: 8px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $primary-yellow;
      color: $primary-dark;
      font-size: 0.75rem;
      padding: 4px 12px;
      border-radius: 4px;
      /* font-weight: bold; */

      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }

  .card-servicos__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    .card-servicos__footer-left {
      display: flex;
      align-items: center;
      .card-servicos__icon {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        font-weight: bold;
        color: $border-gray;

        &:nth-child(1) {
          margin-right: 14px;
        }

        svg {
          color: $primary-yellow;
          width: 20px;
          margin-right: 4px;
        }
      }
    }

    .btn-proposta {
      display: flex;
      align-items: center;
      color: $border-gray;
      transition: all 0.3s;

      &:hover {
        color: #000;
        svg {
          transform: translateX(4px);
        }
      }

      svg {
        color: $neutral-gray;
        width: 24px;
        margin-left: 8px;
        transition: all 0.3s;
      }
    }
  }

  @media (max-width: 1024px) {
    .card-servicos__header {
      h2 {
        font-size: 1.125rem;
      }

      p {
        font-size: 1rem;
      }
    }

    .card-servicos__description {
      font-size: 0.75rem;
    }

    .card-servicos__footer {
      flex-direction: column;
      align-items: flex-start;
      .card-servicos__footer-left {
        margin-bottom: 16px;
      }

      .btn-proposta {
        margin-left: auto;
      }
    }
  }
}
</style>
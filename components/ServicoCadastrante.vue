<template>
  <div v-if="projeto" class="servico">
    <div class="detalhes-servico__header">
      <h2>Preciso de um editor de vídeos</h2>
      <div class="detalhes-servico__header-infos">
        <small>Prazo de entrega: <span>25/10/2021</span></small>
        <small>Propostas: <span>0</span></small>
      </div>
    </div>

    <div class="servico__card">
      <div class="servico__card-left">
        <div class="servico__card-header">
          <h3>Descrição do projeto</h3>
          <p>R$ 2000</p>
        </div>
        <p class="servico__card-descricao">
          descrição do serviço
          <!-- {{
            servico.descricao.length == 0 ? "Sem descrição" : servico.descricao
          }} -->
        </p>

        <!-- <div class="card-servicos__tags">
          <caption
            v-for="(habilidade, index) in servico.habilidades_desejadas"
            :key="index"
            class="card-servicos__tag"
          >
            {{
              habilidade
            }}
          </caption>
        </div> -->
      </div>

      <div class="servico__card-right">
        <h3>Sobre o projeto</h3>

        <ul class="servico__card-infos-user">
          <li><span>06</span> propostas</li>
        </ul>

        <a-button type="primary">
          Ver propostas
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Serviço",
  //   layout: "logged",
  props: {
    projeto: {
      type: Object,
    }
  }
};
</script>

<style lang="scss" scoped>
.servico {
  .detalhes-servico__header {
    margin-bottom: 32px;
    h2 {
      font-weight: 600;
    }
    .detalhes-servico__header-infos {
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
  }

  .servico__card {
    display: flex;
    background: #fff;
    .servico__card-left {
      padding: 24px;
      width: 70%;
      .servico__card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;

        h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0;
        }

        p {
          color: $primary-yellow;
          font-size: 1.25rem;
          font-weight: bold;
        }
      }

      .servico__card-descricao {
        font-size: 0.875rem;
      }

      .card-servicos__tags {
        display: flex;
        flex-wrap: wrap;
        margin-top: 16px;
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

          &:not(:last-child) {
            margin-right: 16px;
          }
        }
      }

      .card-servicos__especificacoes {
        margin-top: 32px;
        li {
          &:not(:last-child) {
            margin-bottom: 4px;
          }
          font-size: 0.875rem;
          span {
            font-weight: 600;
          }
        }
      }
    }
    .servico__card-right {
      padding: 24px;
      width: 30%;
      border-left: 1px solid rgba(0, 0, 0, 0.1);

      h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0;
        margin-bottom: 8px;
      }

      .servico__card-icons {
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
        .card-servicos__icon {
          display: flex;
          align-items: center;
          font-size: 0.75rem;
          font-weight: bold;
          color: $border-gray;

          &:nth-child(1) {
            margin-bottom: 14px;
          }

          svg {
            color: $primary-yellow;
            width: 20px;
            margin-right: 4px;
          }
        }
      }

      .servico__card-infos-user {
        margin-bottom: 64px;
        li {
          &:not(:last-child) {
            margin-bottom: 4px;
          }
          font-size: 0.875rem;
          span {
            font-weight: 600;
          }
        }
      }

      .ant-btn {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    .servico__card {
      flex-direction: column;

      .servico__card-left {
        width: 100%;
      }

      .servico__card-right {
        width: 100%;
        border-left: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>

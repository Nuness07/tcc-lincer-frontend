<template>
  <div class="servico">
    <div class="detalhes-servico__header">
      <h2>{{ servico.titulo }}</h2>
      <div class="detalhes-servico__header-infos">
        <small>Publicado: <span>há 4 horas</span></small>
        <small
          >Prazo de entrega: <span>{{ servico.data_entrega }}</span></small
        >
        <small
          >Propostas: <span>{{ servico.propostas_recebidas }}</span></small
        >
      </div>
    </div>

    <div class="servico__card">
      <div class="servico__card-left">
        <div class="servico__card-header">
          <h3>Sobre este projeto</h3>
          <p>{{ servico.preco }}</p>
        </div>
        <p class="servico__card-descricao">
          {{
            servico.descricao.length == 0 ? "Sem descrição" : servico.descricao
          }}
        </p>

        <div class="card-servicos__tags">
          <caption
            class="card-servicos__tag"
            v-for="(habilidade, index) in servico.habilidades_desejadas"
            :key="index"
          >
            {{
              habilidade
            }}
          </caption>
        </div>

        <ul class="card-servicos__especificacoes">
          <li><span>Categoria</span> Edição de vídeo</li>
          <li><span>Subcategoria</span> Mixagem de audiovisuais</li>
          <li><span>Público alvo</span> Jovens e Adultos</li>
          <li>
            <span>Isso é um projeto ou uma posição de trabalho?</span> Um
            projeto
          </li>
          <li><span>Tenho, atualmente</span> Eu tenho os arquivos</li>
        </ul>
      </div>

      <div class="servico__card-right">
        <h3>Sobre o perfil</h3>

        <div class="servico__card-icons">
          <div class="card-servicos__icon">
            <OutlineUserIcon />
            {{ servico.perfil_contratante.nome }}
          </div>
          <div class="card-servicos__icon">
            <OutlineBadgeCheckIcon />
            Perfil verificado
          </div>
        </div>

        <ul class="servico__card-infos-user">
          <li><span>11</span> projetos publicados</li>
          <li><span>07</span> projetos pagos</li>
          <li>
            Membro desde
            <span>{{ servico.perfil_contratante.membro_desde }}</span>
          </li>
        </ul>

        <h3>Sobre o projeto</h3>

        <ul class="servico__card-infos-user">
          <li><span>06</span> propostas</li>
          <li><span>08</span> freelances interessados</li>
        </ul>

        <a-button @click="showModalProposta" type="primary"
          >Enviar proposta</a-button
        >
      </div>
    </div>

    <div class="infos__modal" v-if="showVideo">
      <div class="modal">
        <h3>Conte-nos mais sobre a proposta</h3>

        <div class="form-group">
          <label for="descricao">Descrição</label>
          <textarea
            name="descricao"
            v-model="descricao"
            id="descricao"
            maxlength="500"
          ></textarea>
          <small>500 / {{ descricao.length }}</small>
        </div>

        <div class="form-group">
          <label for="orcamento-previsto">Orçamento previsto</label>
          <input type="text" name="orcamento-previsto" />
        </div>

        <div class="form-group">
          <label for="prazo-previsto">Prazo previsto</label>
          <input type="text" name="prazo-previsto" />
        </div>

        <a-checkbox @change="onChange"> Disponibilidade imediata </a-checkbox>

        <a-button type="primary">Enviar proposta</a-button>
      </div>
      <button @click="showVideo = false" v-wave class="btn-close">
        <OutlineXIcon />
      </button>
    </div>
  </div>
</template>

<script>
import servicos from "./servicos.json";

export default {
  name: "Serviço",
  //   layout: "logged",
  props: {
    id: {
      type: [String, Number],
    },
  },
  data() {
    return {
      servicos: servicos,

      showVideo: false,

      descricao: "",
    };
  },
  methods: {
    showModalProposta() {
      console.log("kalhsdbdf");
      this.showVideo = true;
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
  computed: {
    servico() {
      let result = this.servicos.find((obj) => {
        return obj.id == this.id;
      });
      return result;
    },
  },
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

.infos__modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  height: 100vh;
  padding: 0 24px;

  .btn-close {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 0;
    width: 36px;
    height: 36px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;

    svg {
      color: #fff;
      width: 24px;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .modal {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 600px;
    padding: 24px 32px;
    width: 100%;
    position: relative;
    background: #F7F7F7;
    border-radius: 8px;

    h3 {
      font-weight: bold;
      margin: 0 auto 32px auto;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      label {
        font-weight: bold;
        font-size: 0.875rem;
        margin-bottom: 8px;
      }

      input,
      textarea {
        width: 100%;
        outline: none;
        border: 0;
        border-radius: 4px;
        padding: 16px;
      }

      input {
        height: 48px;
      }

      textarea {
        height: 164px;
      }

      small {
        margin-left: auto;
        font-weight: bold;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    .ant-checkbox-wrapper::v-deep {
      margin-bottom: 32px;
    }

    .ant-btn {
      margin: 0 auto;
    }
  }
}
</style>
<template>
  <div class="detalhes-servico container">
    <div v-if="projeto" class="servico">
      <div class="detalhes-servico__header">
        <h2>{{ projeto.nome_projeto }}</h2>
        <div class="detalhes-servico__header-infos">
          <small
            >Prazo de entrega: <span>{{ projeto.prazo }}</span></small
          >
          <small>Propostas: <span>0</span></small>
        </div>
      </div>

      <div class="servico__card">
        <div class="servico__card-left">
          <div class="servico__card-header">
            <h3>Descrição do projeto</h3>
            <p>{{ projeto.preco }}</p>
          </div>
          <p class="servico__card-descricao">
            {{ projeto.descricao }}
          </p>

          <div class="card-servicos__tags">
            <caption
              v-for="(habilidade, index) in projeto.habilidades_desejadas"
              :key="index"
              class="card-servicos__tag"
            >
              {{
                habilidade
              }}
            </caption>
          </div>
        </div>

        <div class="servico__card-right">
          <h3>Sobre o projeto</h3>

          <ul class="servico__card-infos-user">
            <li><span>06</span> propostas</li>
          </ul>

          <a-button v-if="projeto.aprovado" @click="showModal" type="primary">
            Ver propostas
          </a-button>
          <a-button v-else disabled type="primary">
            Esperando aprovação
          </a-button>
        </div>
      </div>
    </div>

    <div class="infos__modal" v-if="showVideo">
      <div class="modal">
        <div class="modal__left">
          <div class="modal__header">
            <div class="modal__user">
              <p>
                <OutlineUserIcon /> {{ propostas[propostaSelecionada].nome }}
              </p>
              <div class="modal__user-star">
                <SolidStarIcon
                  v-for="n in propostas[propostaSelecionada].avaliacao"
                  :key="n"
                />
                <OutlineStarIcon
                  v-for="no in outlineStar"
                  :key="no + 'outline'"
                />
              </div>
            </div>
            <div class="modal__verificado">
              <p class="p-verificado">
                <OutlineBadgeCheckIcon /> Perfil Verificado
                <small v-if="propostas[propostaSelecionada].premium"
                  >Premium</small
                >
              </p>

              <p
                v-if="propostas[propostaSelecionada].propostas_realizadas != 0"
                class="p-propostas"
                :class="propostas[propostaSelecionada].premium ? 'premium' : ''"
              >
                <span>{{
                  propostas[propostaSelecionada].propostas_realizadas
                }}</span>
                propostas aprovadas
              </p>
            </div>
          </div>

          <div class="modal__body">
            <h3>Detalhe da proposta</h3>
            <p>{{ propostas[propostaSelecionada].descricao }}</p>

            <ul>
              <li>
                Orçamento:
                <span>{{ propostas[propostaSelecionada].orcamento }}</span>
              </li>
              <li>
                Prazo previsto:
                <span>{{ propostas[propostaSelecionada].prazo }}</span>
              </li>
              <li>
                Disponibilidade imediata:
                <span>
                  <OutlineCheckIcon
                  style="color: #2fcb5a;"
                    v-if="
                      propostas[propostaSelecionada].disponibilidade_imediata
                    "
                  />
                  <OutlineXIcon style="color: #fa3535;" v-else />
                </span>
              </li>
            </ul>
          </div>

          <div class="modal__footer">
            <a-button type="primary">Aceitar proposta</a-button>
            <a-button @click="showVideo = false">Cancelar</a-button>
          </div>
        </div>

        <div class="modal__right">
          <h3>Todas propostas</h3>
          <div class="propostas">
            <a
              v-wave
              class="proposta"
              v-for="(proposta, indexProposta) in propostas"
              :key="indexProposta + 'proposta'"
              @click.prevent="showProposta(proposta.id)"
            >
              <p class="p-nome"><OutlineUserIcon /> {{ proposta.nome }}</p>
              <p class="p-desc">
                {{
                  proposta.descricao.length > 120
                    ? proposta.descricao.substring(0, 120) + "..."
                    : proposta.descricao
                }}
              </p>
            </a>
          </div>
        </div>
      </div>
      <button @click="showVideo = false" v-wave class="btn-close">
        <OutlineXIcon />
      </button>
    </div>
  </div>
</template>

<script>
import ProjetoService from "~/service/projeto/projeto-service";
import propostas from "@/assets/json/propostas.json";

export default {
  name: "ServiçosDetalhes",
  layout: "logged",
  data() {
    return {
      projeto: null,

      showVideo: false,

      propostas: propostas,

      propostaSelecionada: 0,
    };
  },
  computed: {
    outlineStar() {
      return 5 - this.propostas[this.propostaSelecionada].avaliacao;
    },
  },
  mounted() {
    this.getProjeto();
  },
  methods: {
    async getProjeto() {
      this.projeto = await ProjetoService.getProjeto(this.$route.params.id);
      this.projeto = this.projeto.data;
      this.projeto.prazo = this.projeto.prazo.slice(0, 9).replaceAll("-", "/");
      this.projeto.habilidades_desejadas =
        this.projeto.habilidades_desejadas.split(",");
    },
    showModal() {
      this.showVideo = true;
    },
    showProposta(idProposta) {
      this.propostaSelecionada = idProposta - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.servico {
  margin-top: 60px;
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
    align-items: center;
    max-width: 1000px;
    height: 60vh;
    width: 100%;
    position: relative;
    background: #fff;
    border-radius: 8px;

    .modal__left {
      width: 70%;
      height: 100%;
      position: relative;

      border-right: 1px solid rgba(0, 0, 0, 0.08);
      .modal__header {
        padding: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        height: 100px;
        .modal__user {
          display: flex;
          align-items: center;
          p {
            display: flex;
            align-items: center;
            margin-right: 10px;
            font-weight: 600;
            font-size: 0.75rem;

            svg {
              width: 20px;
              color: $border-gray;
              margin-right: 8px;
            }
          }

          .modal__user-star {
            display: flex;
            svg {
              width: 16px;
              color: $primary-yellow;
            }
          }
        }

        .modal__verificado {
          display: flex;
          align-items: center;
          .p-verificado {
            display: flex;
            align-items: center;
            font-size: 0.75rem;
            font-weight: 600;
            margin-top: 8px;
            position: relative;

            svg {
              width: 20px;
              color: $border-gray;
              margin-right: 8px;
            }

            small {
              display: flex;
              padding: 1px 2px;
              position: absolute;
              top: 0;
              left: calc(100% + 2px);
              border-radius: 2px;
              background: $alert-info;
              color: #fff;
              font-size: 0.5rem;
              letter-spacing: 0.01rem;
              text-transform: uppercase;
            }
          }

          .p-propostas {
            margin-left: 16px;
            font-size: 0.625rem;
            color: #000;

            span {
              font-weight: 600;
            }

            &.premium {
              margin-left: 66px;
            }
          }
        }
      }

      .modal__body {
        overflow-y: auto;
        height: calc(100% - 175px);
        padding: 24px;
        h3 {
          margin-bottom: 10px;
          font-size: 1rem;
          color: $border-gray;
          line-height: 20px;
        }

        p {
          font-size: 0.875rem;
          color: #000;
        }

        ul {
          margin-top: 24px;
          li {
            display: flex;
            align-items: center;
            font-size: 0.75rem;
            color: $border-gray;

            &:not(:last-child) {
              margin-bottom: 4px;
            }
            span {
              font-weight: 600;
              color: #000;
              margin-left: 4px;
            }

            svg {
              width: 20px;
            }
          }
        }
      }

      .modal__footer {
        display: flex;
        align-items: center;
        width: 100%;
        position: absolute;
        bottom: 0;
        padding: 16px 24px;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        background: #fff;
        .ant-btn {
          &:nth-child(1) {
            margin-right: 16px;
          }
        }
      }
    }

    .modal__right {
      width: 30%;
      height: 100%;

      h3 {
        display: flex;
        align-items: center;
        padding: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        margin-bottom: 0;
        height: 60px;
      }

      .propostas {
        height: calc(100% - 60px);
        overflow-y: auto;
        .proposta {
          display: flex;
          flex-direction: column;
          padding: 24px 16px;
          color: #000;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);

          .p-nome {
            display: flex;
            align-items: center;
            margin-right: 10px;
            font-weight: 600;
            color: #000;
            font-size: 0.75rem;
            margin-bottom: 8px !important;

            svg {
              width: 20px;
              color: $border-gray;
              margin-right: 8px;
            }
          }

          .p-desc {
            color: #000;
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <section class="details">
    <div class="container">
      <div class="details__left">
        <nuxt-link to="/equipamentos">
          <button>
            <OutlineChevronLeftIcon /> Voltar para os equipamentos
          </button>
        </nuxt-link>
        <SwiperGaleryThumb />
      </div>

      <div class="details__right">
        <div class="details__top">
          <small>Microfone</small>
          <h2>Título do equipamento</h2>
          <caption>
            Nome do fornecedor
          </caption>

          <div class="details__price">
            <caption>
              Valor médio
            </caption>
            <div class="details__price-value">
              <p>R$</p>
              <h3>90,00</h3>
            </div>
          </div>

          <a-button type="primary" @click="showModal = true">
            Fazer orçamento
          </a-button>
        </div>

        <div class="details__bottom">
          <div class="details__tab">
            <button @click="showDescription = !showDescription">
              Descrição <OutlineChevronDownIcon />
            </button>
            <transition name="fadeBottom" mode="out-in">
              <div v-if="showDescription" class="details__tab-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos impedit consequatur vero blanditiis vitae
                  recusandae repudiandae ea accusantium soluta ipsa repellendus
                  atque eligendi dolor voluptatibus odit, sed rerum corporis
                  rem.
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
                <ul>
                  <li>
                    • Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    • Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    • Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    • Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    • Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="infos__modal">
      <div class="modal">
        <h3>Informações para fazer orçamento</h3>

        <a-form-model-item has-feedback prop="email" label="Nome">
          <a-input
            v-model="nome"
            type="text"
            class="secondary"
            placeholder="Seu e-mail"
          />
        </a-form-model-item>

        <a-form-model-item has-feedback prop="email" label="E-mail">
          <a-input
            v-model="email"
            type="email"
            class="secondary"
            placeholder="Seu e-mail"
          />
        </a-form-model-item>

        <a-form-model-item has-feedback prop="email" label="WhatApp">
          <a-input
            v-model="whatsapp"
            type="email"
            class="secondary"
            placeholder="Seu e-mail"
          />
        </a-form-model-item>

        <a-form-model-item
          has-feedback
          prop="experiencia_profissional"
          label="Experiência Profissional"
        >
          <a-input
            v-model="descricao"
            type="textarea"
            allow-clear
            class="secondary"
            :auto-size="{ minRows: 5, maxRows: 15 }"
            placeholder="Descreva o que você ja fez na sua carreira"
          />
        </a-form-model-item>

        <!-- <a-checkbox @change="onChange"> Disponibilidade imediata </a-checkbox> -->

        <a-button type="primary"> Fazer orçamento </a-button>
      </div>
      <button v-wave class="btn-close" @click="showModal = false">
        <OutlineXIcon />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  layout: "notLogged",
  data() {
    return {
      showDescription: false,
      showEspecifications: false,

      showModal: false,

      nome: "",
      email: "",
      descricao:
        "Olá, gostaria de fazer um orçamento para o aluguel desse equipamento",
      whatsapp: "",
    };
  },
  methods: {
    showModalOrcamento() {
      console.log("jgkaskdjvsa");
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  margin-bottom: 64px;
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

  .ant-row.ant-form-item {
    width: 100%;
  }

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
    background: #f7f7f7;
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

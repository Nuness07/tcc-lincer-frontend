<template>
  <div class="aprovado-freelancer">
    <div class="aprovado-freelancer__header">
      <div class="aprovado-freelancer__header-left">
        <h2>Olá, {{ $auth.user.nome }}!</h2>

        <p>Bem-vindo a sua plataforma de freelancer</p>
      </div>
      <nuxt-link to="/servicos">
        <a-button type="primary"> Ver novos projetos </a-button>
      </nuxt-link>
    </div>

    <div class="aprovado-freelancer__cards aprovadas">
      <h3>Propostas aprovadas</h3>
      <!-- <div class="aprovado-freelancer__white">
        <div class="aprovado-freelancer__sem-propostas">
          <h4>Você ainda não possui nenhumas proposta aceita</h4>
          <a-button type="primary">
            Ver projetos
          </a-button>
        </div>
      </div> -->
      <div class="aprovado-freelancer__cards-items">
        <CardServico
          @click.native="clickShowModal"
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />

        <CardServico
          @click.native="clickShowModal"
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />

        <CardServico
          @click.native="clickShowModal"
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
      </div>
    </div>

    <div class="aprovado-freelancer__cards pendentes">
      <h3>Propostas pendentes</h3>
      <!-- <div class="aprovado-freelancer__white">
        <div class="aprovado-freelancer__sem-propostas">
          <h4>Você ainda não possui nenhumas proposta aceita</h4>
          <a-button type="primary">
            Ver projetos
          </a-button>
        </div>
      </div> -->

      <div class="aprovado-freelancer__cards-items">
        <CardServico
          @click.native="clickShowModal"
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
        <CardServico
          @click.native="clickShowModal"
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
      </div>
    </div>

    <GuiasDicas />

    <div v-if="showModal" class="infos__modal">
      <div class="modal">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
        </p>

        <div class="card-servico__bottom">
          <div class="card-servico__user">
            <picture>
              <img src="@/assets/img/banner-bg.png" alt="Nome do usuário" />
            </picture>
            <p>Nome do usuário</p>
          </div>
          <p class="card-servico__preco">R$ 5.000,00</p>
        </div>

        <div class="buttons">
          <a-button type="primary"> Entrar em contato </a-button>
          <a-button type="primary"> Finalizar projeto </a-button>
        </div>
      </div>
      <button v-wave class="btn-close" @click="showModal = false">
        <OutlineXIcon />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AprovadoFreelancer",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    clickShowModal() {
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.aprovado-freelancer {
  max-width: 1920px;
  padding-bottom: 80px;

  @media (max-width: 1024px) {
    padding-bottom: 120px;
  }

  .aprovado-freelancer__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    .aprovado-freelancer__header-left {
      h2 {
        font-size: 2.25rem;
        color: #ffb400;
        font-weight: bold;
        margin-bottom: 0;
      }
    }

    .aprovado-freelancer__back-dash {
      display: flex;
      align-items: center;
      color: #000000;
      padding: 16px 8px;
      border-radius: 4px;

      svg {
        width: 16px;
        margin-right: 8px;
      }
    }
  }

  .aprovado-freelancer__cards {
    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .aprovado-freelancer__white {
      background: #fff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      min-height: 270px;
      text-align: center;
      padding: 0 24px;

      .aprovado-freelancer__sem-propostas {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }

    .aprovado-freelancer__cards-items {
      display: flex;
      /* justify-content: space-between; */
      flex-wrap: wrap;

      .card-servico::v-deep {
        width: calc(100% / 4 - 20px);
        margin-bottom: 30px;
        &:not(:nth-child(4n)) {
          margin-right: 26px;
        }
      }

      @media (max-width: 1600px) {
        .card-servico::v-deep {
          width: calc(100% / 3 - 20px);

          &:not(:nth-child(4n)) {
            margin-right: initial;
          }

          &:not(:nth-child(3n)) {
            margin-right: 30px;
          }
        }
      }

      @media (max-width: 1300px) {
        .card-servico::v-deep {
          width: calc(100% / 2 - 20px);

          &:not(:nth-child(3n)) {
            margin-right: initial;
          }

          &:not(:nth-child(2n)) {
            margin-right: 40px;
          }
        }
      }

      @media (max-width: 1024px) {
        .card-servico::v-deep {
          width: 100%;

          &:not(:nth-child(2n)) {
            margin-right: initial;
          }
        }
      }
    }

    .ant-btn {
      margin: 0 auto 0 auto;
    }

    &.aprovadas {
      margin-bottom: 64px;
    }

    &.pendentes {
      margin-bottom: 80px;
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
    background: #f7f7f7;
    border-radius: 8px;

    h3 {
      font-weight: bold;
      margin: 0 auto 8px auto;
    }

    p {
      font-size: 0.875rem;
    }

    .card-servico__bottom {
      border-top: 1px solid rgb(231, 231, 231);
      padding-top: 16px;
      margin-top: 32px;
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
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

    .buttons {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .ant-btn {
        &:nth-child(1) {
          margin-right: 16px;
        }
      }
    }
  }
}

.lds-ring {
  display: flex;
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto 0 auto;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #ccc transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div class="aprovado-freelancer">
    <div class="aprovado-freelancer__header">
      <div class="aprovado-freelancer__header-left">
        <h2>Olá, Gabriel!</h2>
        <p>Bem-vindo a sua plataforma de freelancer</p>
      </div>
      <nuxt-link to="/servicos">
        <a-button type="primary">
          Ver novos projetos
        </a-button>
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
          titulo="Lorem ipsum dolor sit"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />

        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />

        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />

        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />

        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
      </div>

      <a-button type="primary">
        Carregar mais
      </a-button>
      <div class="lds-ring">
        <div />
        <div />
        <div />
        <div />
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
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
        <CardServico
          titulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        />
      </div>

      <a-button type="primary">
        Carregar mais
      </a-button>
      <div class="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>

    <GuiasDicas />
  </div>
</template>

<script>
export default {
  name: "AprovadoFreelancer",
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

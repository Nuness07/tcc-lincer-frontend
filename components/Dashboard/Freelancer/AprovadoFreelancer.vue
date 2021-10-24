<template>
  <div class="aprovado-freelancer">
    <div class="aprovado-freelancer__header">
      <div class="aprovado-freelancer__header-left">
        <h2>Olá, Gabriel!</h2>
        <p>Bem-vindo a sua plataforma de freelancer</p>
      </div>
      <a
        v-wave
        class="aprovado-freelancer__back-dash"
        href="#"
      ><OutlineArrowLeftIcon /> Voltar ao dashboard do usuário</a>
    </div>

    <div class="aprovado-freelancer__cards aprovadas">
      <h3>Propostas aprovadas</h3>
      <div class="aprovado-freelancer__white">
        <div class="aprovado-freelancer__sem-propostas">
          <h4>Você ainda não possui nenhumas proposta aceita</h4>
          <a-button type="primary">
            Ver projetos
          </a-button>
        </div>
      </div>
    </div>

    <div class="aprovado-freelancer__cards pendentes">
      <h3>Propostas pendentes</h3>
      <div class="aprovado-freelancer__white">
        <div class="aprovado-freelancer__sem-propostas">
          <h4>Você ainda não possui nenhumas proposta aceita</h4>
          <a-button type="primary">
            Ver projetos
          </a-button>
        </div>
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

    &.aprovadas {
      margin-bottom: 64px;
    }

    &.pendentes {
      margin-bottom: 80px;
    }
  }
}
</style>

<template>
  <div v-if="$auth.user.projetos.length == 0" class="meus-servicos__0">
    <h2>Você ainda não tem nenhum projeto cadastrado!</h2>
    <p>Assim que você publicar seu primeiro projeto, nossos freelancers parceiros enviarão propostas!</p>
    <nuxt-link to="/meus-servicos/novo-servico">
      <a-button v-wave type="primary">
        Criar primeiro projeto
        <img src="@/assets/img/icons/icon-add.png" alt="criar novo projeto">
      </a-button>
    </nuxt-link>
  </div>

  <div v-else class="meus-servicos">
    <nuxt-link to="/meus-servicos/novo-servico">
      <a-button v-wave type="primary">
        Novo projeto
        <img src="@/assets/img/icons/icon-add.png" alt="criar novo projeto">
      </a-button>
    </nuxt-link>

    <pre>{{ $auth.user.projetos }}</pre>
  </div>
</template>

<script>
export default {
  name: 'MeusServicos',
  layout: 'logged',
}
</script>

<style lang="scss" scoped>
  .meus-servicos__0{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;

    h2{
      font-size: 2rem;
      color: $primary-yellow;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0;
      text-align: center;
    }

    p{
      font-size: 1.125rem;
      margin-bottom: 20px;
      text-align: center;
      max-width: 700px;
      padding: 0 20px;
    }

    @media(max-width: 576px){
      h2{
        font-size: 1.3rem;
      }
    }
  }

  .meus-servicos{
    margin-left: 36px;
  }

    button{
      display: flex;
      column-gap: 12px;
      margin-top: 30px;
    }
</style>

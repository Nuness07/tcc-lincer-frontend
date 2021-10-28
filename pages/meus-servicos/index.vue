<template>
  <div v-if="projetos.length == 0" class="meus-servicos__0">
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

    <div class="meus-servicos__wrapper">
      <div v-for="projeto, index in projetos" :key="index" class="meus-servicos__card">
        <CardProjetoPublicado :projeto="projeto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeusServicos',
  layout: 'logged',
  data () {
    return {
      projetos: []
    }
  },
  mounted () {
    this.getProjetos()
  },
  methods: {
    getProjetos () {
      this.projetos = this.$auth.user.projetos
    }
  },
  watch: {
    projetos(newValue, oldValue) {
      console.log(newValue)
    }
  }
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

.meus-servicos__wrapper{
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 24px;
}
</style>

<template>
  <div class="meus-cursos">
    <div class="meus-cursos__title">
      <h2>Meus Cursos</h2>

      <div v-if="$auth.user.email == 'contacompleta@gmail.com'">
        {{ $auth.user.email }}
      </div>
      <div v-else class="sem-equipamento">
        <h2>Você ainda não comprou nenhum curso</h2>
        <p>Veja nossa lista completa de cursos aqui</p>
        <nuxt-link to="/cursos">
          <a-button type="primary">
            ver cursos
          </a-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeusCursos',
  layout: 'logged',
  data () {
    return {
      projetos: []
    }
  },
}
</script>

<style lang="scss" scoped>
  .meus-cursos{
    margin: 60px 36px 0;

    &__title{
      h2{
        font-size: 1.5rem;
        color: $primary-yellow;
        font-weight: 700;
      }
    }
  }

  .sem-equipamento{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;

    h2{
      margin-bottom: 0;
    }

    p{
      margin-bottom: 30px;
    }

    button{
      margin-top: 40px;
    }
  }
</style>

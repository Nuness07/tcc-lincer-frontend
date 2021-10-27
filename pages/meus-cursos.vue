<template>
  <div class="meus-cursos">
    <div class="meus-cursos__title">
      <h2>Meus cursos</h2>
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
</style>

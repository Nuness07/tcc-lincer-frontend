<template>
  <div class="meus-equipamentos">
    <div class="meus-equipamentos__title">
      <h2>Meus Equipamentos alugados</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeusEquipamentos',
  layout: 'logged',
  data () {
    return {
      projetos: []
    }
  },
}
</script>

<style lang="scss" scoped>
  .meus-equipamentos{
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

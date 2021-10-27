<template>
  <div class="equipamentos-cadastrados">
    <nuxt-link to="cadastrar-equipamento">
      <a-button v-wave class="cadastrar-btn" type="primary">
        Cadastrar Equipamento
        <img src="@/assets/img/icons/icon-add.png" alt="criar novo projeto">
      </a-button>
    </nuxt-link>
    <div class="equipamentos-cadastrados-wrapper">
      <div v-for="equipamento in $auth.user.equipamentos" :key="equipamento.id" class="equipamentos-cadastrados-item">
        <CardEquipamentoLista :equipamento="equipamento" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquipamentosCadastrados',
  layout: 'loggedCompany',
}
</script>

<style lang="scss" scoped>
.equipamentos-cadastrados-wrapper{
  display: flex;
  justify-content: flex-start;
  column-gap: 30px;
  row-gap: 20px;
  margin: 0 36px;
  flex-wrap: wrap;
}
.equipamentos-cadastrados-item{
  max-width: 300px;
}

.cadastrar-btn{
  margin-left: 36px;
  margin-bottom: 20px;
  margin-top: 40px;
  column-gap: 8px;
}
</style>

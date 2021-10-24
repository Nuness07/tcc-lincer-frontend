<template>
  <div class="aprovacao-professor">
    <div class="aprovacao-professor_wrapper">
      <h2 class="aprovacao-professor__title">
        cadastro professor realizado com sucesso
      </h2>

      <img class="icon-aprovado" src="@/assets/img/icons/icon-aprovacao.png" alt="professor aprovação">

      <p>NOSSA EQUIPE IRÁ REVISAR SUAS INFORMAÇÕES PARA VOCÊ SER LIBERADO PARA COMEÇAR A PEGAR SEUS PRIMEIROS SERVIÇOS</p>

      <nuxt-link class="link-to-home" to="/dashboard">
        clique para voltar ao inicio
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AprovacaoProfessor',
}
</script>

<style lang="scss" scoped>
.aprovacao-professor{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__title{
    font-size: 1.5rem;
    color: $primary-yellow;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }

  p{
    max-width: 640px;
    text-align: center;
  }
}

.icon-aprovado{
  margin: 80px auto 120px;
  display: flex;
}

.link-to-home{
  font-size: 1rem;
  color: $primary-yellow;
  text-align: center;
  margin-top: 80px;
  display: block;
}
</style>

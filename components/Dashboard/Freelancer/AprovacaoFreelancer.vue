<template>
  <div class="aprovacao-freelancer">
    <div class="aprovacao-freelancer_wrapper">
      <h2 class="aprovacao-freelancer__title">
        cadastro freelancer realizado com sucesso
      </h2>

      <img class="icon-aprovado" src="@/assets/img/icons/icon-aprovacao.png" alt="freelancer aprovação">

      <p>NOSSA EQUIPE IRÁ REVISAR SUAS INFORMAÇÕES PARA VOCÊ SER LIBERADO PARA COMEÇAR A PEGAR SEUS PRIMEIROS SERVIÇOS</p>

      <nuxt-link class="link-to-home" to="/dashboard">
        clique para voltar ao inicio
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AprovacaoFreelancer',
}
</script>

<style lang="scss" scoped>
.aprovacao-freelancer{
  display: flex;
  justify-content: center;
  align-items: center;

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

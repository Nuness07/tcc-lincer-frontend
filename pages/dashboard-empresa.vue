<template>
  <div class="dashboard-empresa__wrapper">
    <div class="dashboard-empresa__title">
      <h2>Bem-vindo</h2>
      <p>
        {{ $auth.user.nome }}
      </p>
    </div>

    <div class="dashboard-100">
      <div class="dashboard-50">
        <h2>Equipamentos cadastrados</h2>
        <div class="dashboard-content dashboard-content__cadastrados">
          <div v-for="equipamento in equipamentos" :key="equipamento.id" class="equipamento-cadastrado">
            <CardEquipamentoCadastrado :equipamento="equipamento" />
          </div>
        </div>
      </div>
      <div class="dashboard-50">
        <h2>Equipamentos com aluguel vigente</h2>
        <div class="dashboard-content dashboard-content__alugados">
          <div v-for="equipamento in equipamentos" :key="equipamento.id" class="equipamento-cadastrado">
            <CardEquipamentoAlugado :equipamento="equipamento" />
          </div>
        </div>
      </div>
    </div>
    <pre>{{ $auth.user }}</pre>
  </div>
</template>

<script>
export default {
  layout: "loggedCompany",
  middleware: "auth",
  data () {
    return {
      equipamentos: [
        {
          id: 1,
          nome: 'Canon EOS Rebel T7 Ef-S 18-55 F/3.5-5.6 Is II',
          categoria: 'Câmeras',
          ativo: true,
          fornecedor: 'Samsung',
          alugado: 'contateste@gmail.com',
          prazo_aluguel: '8'
        },
        {
          id: 2,
          nome: 'Microfone para Podcast Shure MV7, Preto',
          categoria: 'Microfones',
          ativo: true,
          fornecedor: 'SHURE',
        },
        {
          id: 1,
          nome: 'Tripé Telescópico Profissional P/Câmera',
          categoria: 'Tripés',
          ativo: false,
          fornecedor: 'Samsung',
        },
        {
          id: 1,
          nome: 'Canon EOS Rebel T7 Ef-S 18-55 F/3.5-5.6 Is II',
          categoria: 'Câmeras',
          ativo: false,
          fornecedor: 'Samsung',
        },
        {
          id: 1,
          nome: 'Canon EOS Rebel T7 Ef-S 18-55 F/3.5-5.6 Is II',
          categoria: 'Câmeras',
          ativo: true,
          fornecedor: 'Samsung',
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-empresa__wrapper{
  margin-left: 36px;
  margin-top: 80px;
}

.dashboard-empresa__title{
  h2{
    color: $primary-yellow;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0px !important;
  }

  p{
    font-size: 1.125rem;
    font-weight: 700;
    color: #000;
  }
}

.dashboard-100{
  display: flex;
  column-gap: 30px;
  justify-content: space-between;
}

.dashboard-50{
  width: 50%;
}

.dashboard-content{
  background: #FFF;
  border-radius: 4px;
  min-height: 400px;
  max-height: 400px;
  overflow-y: scroll;

  &__alugados{
    margin-right: 36px;
  }
}
</style>

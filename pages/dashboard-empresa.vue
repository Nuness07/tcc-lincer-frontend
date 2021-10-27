<template>
  <div class="dashboard-empresa__wrapper">
    <div class="dashboard-empresa__title">
      <h2>Bem-vindo</h2>
      <p>
        {{ $auth.user.nome }}
      </p>
    </div>

    <div class="dashboard-dados">
      <div class="dashboard-dados-item">
        <h2>Orçamentos</h2>
        <p>8</p>
      </div>
      <div class="dashboard-dados-item">
        <h2>Equipamentos alugados</h2>
        <p>4</p>
      </div>
      <div class="dashboard-dados-item">
        <h2>Equipamentos Cadastrados</h2>
        <p>6</p>
      </div>
      <div class="dashboard-dados-item">
        <h2>Total de alugueis</h2>
        <p>16</p>
      </div>
    </div>

    <div class="dashboard-equipamentos">
      <h2>Equipamentos cadastrados</h2>
      <div class="dashboard-content dashboard-content__cadastrados">
        <div v-for="equipamento in equipamentos" :key="equipamento.id" class="equipamento-cadastrado">
          <CardEquipamentoCadastrado :equipamento="equipamento" />
        </div>
      </div>
    </div>

    <div class="dashboard-orcamentos">
      <h2>Orçamentos</h2>
      <div class="dashboard-content dashboard-content__cadastrados">
        <div v-for="equipamento in equipamentos" :key="equipamento.id" class="equipamento-cadastrado">
          <CardEquipamentoCadastrado :equipamento="equipamento" />
        </div>
      </div>
    </div>
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
          telefone: '(11) 97444-4444',
          prazo_aluguel: '6'
        },
        {
          id: 2,
          nome: 'Microfone para Podcast Shure MV7, Preto',
          categoria: 'Microfones',
          ativo: true,
          fornecedor: 'SHURE',
          alugado: 'contateste@gmail.com',
          telefone: '(11) 97444-4444',
          prazo_aluguel: '6'
        },
        {
          id: 3,
          nome: 'Tripé Telescópico Profissional P/Câmera',
          categoria: 'Tripés',
          ativo: false,
          fornecedor: 'Samsung',
        },
        {
          id: 4,
          nome: 'Canon EOS Rebel T7 Ef-S 18-55 F/3.5-5.6 Is II',
          categoria: 'Câmeras',
          ativo: false,
          fornecedor: 'Samsung',
        },
        {
          id: 5,
          nome: 'Câmera Canon EOS Rebel T7+ com Lente EF-S 18-55mm IS II',
          categoria: 'Câmeras',
          ativo: true,
          fornecedor: 'Canon',
          alugado: 'brunopalotta@gmail.com',
          telefone: '(11) 97231-8452',
          prazo_aluguel: '3'
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

.dashboard-equipamentos{
  margin-right: 36px;
}

.dashboard-orcamentos{
  margin-top: 40px;
  margin-right: 36px;
}

.dashboard-dados{
  display: flex;
  justify-content: space-between;
  margin-right: 36px;
  column-gap: 20px;
  margin: 30px 36px 30px 0;
}

.dashboard-dados-item{
  background: #FFF;
  border-radius: 8px;
  padding: 10px;
  width: 25%;
  h2{
    font-size: 1.25rem;
    color: $primary-yellow;
    text-align: center;
    font-weight: 700;
  }

  p{
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    color: $secondary-dark;
  }
}
</style>

<template>
  <div class="equipamentos-cadastrados">
    <nuxt-link to="cadastrar-equipamento">
      <a-button v-wave class="cadastrar-btn" type="primary">
        Cadastrar Equipamento
        <img src="@/assets/img/icons/icon-add.png" alt="criar novo projeto">
      </a-button>
    </nuxt-link>
    <div class="equipamentos-cadastrados-wrapper">
      <div v-for="equipamento in equipamentos" :key="equipamento.id" class="equipamentos-cadastrados-item">
        <CardEquipamentoLista :equipamento="equipamento" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquipamentosCadastrados',
  layout: 'loggedCompany',
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

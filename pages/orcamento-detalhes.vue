<template>
  <div class="orcamento">
    <div class="orcamento-title">
      <h2>Detalhes do orçamento</h2>
      <p>Aqui você tem todas as infos necessárias para fechar o contrato de aluguel!</p>
    </div>
    <div class="orcamento-wrapper">
      <div class="orcamento-left">
        <div v-wave class="orcamento-passo orcamento-passo-1" @click="setEtapa(1)">
          <p>Confirmar Dados</p>
        </div>
        <div v-wave class="orcamento-passo orcamento-passo-1" @click="setEtapa(2)">
          <p>Dados do aluguel</p>
        </div>
        <div v-wave class="orcamento-passo orcamento-passo-1" @click="setEtapa(3)">
          <p>Gerar Contrato</p>
        </div>
      </div>
      <div class="orcamento-right">
        <h2 v-if="etapas == 1" class="title-etapa">
          Confirmar Dados
        </h2>

        <div v-if="etapas == 1" class="etapa-1 dados">
          <h2>Dados do usuário</h2>

          <p class="text-dados">
            <span>Nome:</span> Bruno Palotta
          </p>
          <p class="text-dados">
            <span>E-mail:</span> contacompleta@gmail.com
          </p>
          <p class="text-dados">
            <span>Whatsapp:</span> (11) 99999-9999
          </p>
          <p class="text-dados">
            <span>CPF:</span> 123.456.789-10
          </p>
          <p class="text-dados">
            <span>Mensagem enviada:</span> Olá, gostaria de fazer um orçamento desse equipamento para aluga-lo por 6 meses
          </p>

          <h3>Endereco</h3>
          <div class="endereco__100">
            <p class="text-dados">
              <span>UF:</span> SP
            </p>
            <p class="text-dados">
              <span>Cidade:</span> São Paulo
            </p>
          </div>

          <p class="text-dados">
            <span>Rua:</span> Avenida Faria Lima
          </p>
          <div class="endereco__100">
            <p class="text-dados">
              <span>Número:</span> 1600
            </p>
            <p class="text-dados">
              <span>Complemento:</span> apt 120
            </p>
          </div>

          <h2 class="seus-dados">
            Seus dados
          </h2>

          <p class="text-dados">
            <span>Nome:</span> Empresa Completa Audiovisual
          </p>
          <p class="text-dados">
            <span>E-mail:</span> empresacompleta@gmail.com
          </p>
          <p class="text-dados">
            <span>Telefone Comercial:</span> (11) 88888-8888
          </p>
          <p class="text-dados">
            <span>CNPJ:</span> 12345678/1000
          </p>

          <h3>Endereco</h3>
          <div class="endereco__100">
            <p class="text-dados">
              <span>UF:</span> SP
            </p>
            <p class="text-dados">
              <span>Cidade:</span> São Paulo
            </p>
          </div>

          <p class="text-dados">
            <span>Rua:</span> Avenida Pasteur
          </p>
          <div class="endereco__100">
            <p class="text-dados">
              <span>Número:</span> 475
            </p>
            <p class="text-dados">
              <span>Complemento:</span> sala 204
            </p>
          </div>

          <a-button v-wave type="primary" @click="setEtapa(2)">
            Próximo Passo
          </a-button>
        </div>
        <h2 v-if="etapas == 2" class="title-etapa">
          Dados do aluguel
        </h2>

        <div v-if="etapas == 2" class="dados-contrato">
          <a-form-model ref="formOrcamento" :model="formOrcamento" :rules="rules">
            <a-form-model-item has-feedback prop="valorMensal" label="Valor Mensal">
              <a-input
                v-model="formOrcamento.valorMensal"
                class="secondary"
                placeholder="Digite o valor mensal"
              />
              <p class="subtitle-input">
                *A lincer fica com uma porcentagem de 3% desse valor
              </p>
            </a-form-model-item>
            <a-form-model-item label="Resources">
              <a-radio-group v-model="formOrcamento.tipoContrato">
                <a-radio value="3 meses">
                  3 Meses
                </a-radio>
                <a-radio value="6 meses">
                  6 Meses
                </a-radio>

                <a-radio value="12 meses">
                  12 Meses
                </a-radio>
              </a-radio-group>
            </a-form-model-item>
          </a-form-model>

          <a-button v-wave type="primary" @click="setEtapa(3)">
            Próximo Passo
          </a-button>
        </div>
        <h2 v-if="etapas == 3" class="title-etapa">
          Gerar Contrato
        </h2>

        <div v-if="etapas == 3" class="gerar-contrato">
          Você esta prestes a gerar um contrato de {{ formOrcamento.tipoContrato }} com valor de R${{ formOrcamento.valorMensal }}/mes
          <a-button v-wave class="btn-contrato" type="primary">
            Gerar Contrato
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orcamento',
  layout: 'loggedCompany',
  data () {
    return {
      projetos: [],
      etapas: 1,

      formOrcamento: {
        tipoContrato: null,
        valorMensal: null,
      },
    }
  },
  methods: {
    setEtapa (value) {
      this.etapas = value;
    }
  }
}
</script>

<style lang="scss" scoped>
  .orcamento{
    margin-top: 80px;
    margin-left: 36px;
  }
  .orcamento-title{
    h2{
      color: $primary-yellow;
      font-size: 1.5rem;
      margin-bottom: 0;
      font-weight: 700;
    }

    p{
      color: $secondary-dark;
      font-weight: 700;
    }
  }

  .orcamento-wrapper{
    display: flex;
    justify-content: flex-start;
    height: 600px;
    margin-top: 50px;
    column-gap: 30px;
  }

  .orcamento-passo{
    padding: 15px 50px;
    background: $primary-yellow;
    color: $secondary-dark;
    border-bottom: 1px solid $background-gray;
    cursor: pointer;
    font-size: 1rem;

    &:last-of-type{
      border-bottom: none;
    }
  }

  .title-etapa{
    color: $secondary-dark;
  }

  .endereco__100{
    display: flex;
    justify-content: flex-start;
    column-gap: 20px;
  }

  .text-dados{
    span{
      color: $secondary-dark;
      font-weight: 700;
    }

    margin-bottom: 8px !important;
  }

  .seus-dados{
    margin-top: 40px;
  }

  .subtitle-input{
    color: $primary-yellow;
    font-size: 0.875rem;
  }

  .btn-contrato{
    margin-top: 40px;
  }
</style>

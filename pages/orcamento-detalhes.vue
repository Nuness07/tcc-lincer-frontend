<template>
  <div class="orcamento">
    <div class="orcamento-left">
      <div class="orcamento-passo-1">
        <p>Confirmar Dados</p>
      </div>
      <div class="orcamento-passo-1">
        <p>Dados do aluguel</p>
      </div>
      <div class="orcamento-passo-1">
        <p>Gerar Contrato</p>
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
      etapas: 1
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

  .card-equipamento__wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: 20px;
    row-gap: 20px;
  }

  .card-equipamento-item{
    background: #FFF;
    border-radius: 4px;
    width: 350px;
    padding: 20px;

    h2{
      font-size: 1.1rem !important;
      color: $secondary-dark !important;
      min-height: 60px;
      margin-bottom: 0;
    }

    .marca{
      font-size: 0.875rem;
    }

    .infos{
      display: flex;
      justify-content: space-between;
      align-items: center;

      p{
        font-size: 0.875rem;
      }
    }

    .confirmar-entrega{
      background: $alert-success;
      color: #FFF;
      width: 100%;
      margin-top: 20px;
      border: none;
      transition: .3s transform;

      &:hover{
        transform: scale(1.05);
      }
    }

    .entrar-em-contato{
      border: none;
      background: $primary-yellow;
      color: #FFF;
      width: 100%;
      margin-top: 20px;
      transition: .3s transform;

      &:hover{
        transform: scale(1.05);
      }
    }
  }

  .btn-modal{
    display: flex;
    column-gap: 10px;
    padding: 20px;

    .btn{
      width: 50% !important;
      font-weight: 700;
      color: #FFF;
    }

    .cancelar{
      background: $alert-error;
    }

    .confirmar{
      background: $alert-success;
    }
  }
</style>

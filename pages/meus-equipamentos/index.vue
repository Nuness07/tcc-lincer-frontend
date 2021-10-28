<template>
  <div class="meus-equipamentos">
    <div class="meus-equipamentos__title">
      <h2>Meus Equipamentos</h2>

      <div v-if="$auth.user.email == 'contacompleta@gmail.com'">
        <div class="card-equipamento__wrapper">
          <div class="card-equipamento-item">
            <h2>Canon EOS Rebel T7 Ef-S 18-55 F/3.5-5.6 Is II</h2>
            <p class="marca">
              Canon
            </p>

            <div class="infos">
              <p>R$ 20/mês</p>
              <p>Devolução: 30/10/20</p>
            </div>

            <a-button class="confirmar-entrega" @click="$vm2.open('confirmar-devolucao')">
              Confirmar devolução
            </a-button>

            <a-button class="entrar-em-contato">
              Entrar em contato
            </a-button>
          </div>
          <div class="card-equipamento-item">
            <h2>Microfone Profissional Samsung</h2>
            <p class="marca">
              Samsung
            </p>

            <div class="infos">
              <p>R$ 12/mês</p>
              <p>Devolução: 30/10/20</p>
            </div>

            <a-button class="confirmar-entrega" @click="$vm2.open('confirmar-devolucao')">
              Confirmar devolução
            </a-button>

            <a-button class="entrar-em-contato">
              Entrar em contato
            </a-button>
          </div>
        </div>
      </div>
      <div v-else class="sem-equipamento">
        <h2>Você ainda não alugou nenhum equipamento</h2>
        <p>Veja nossa lista completa de equipamentos para aluguel</p>
        <nuxt-link to="/equipamentos">
          <a-button type="primary">
            ver equipamentos
          </a-button>
        </nuxt-link>
      </div>
    </div>
    <client-only>
      <vue-modal-2
        class="modal"
        name="confirmar-devolucao"
        :header-options="{
          title: 'Confirmar devolução do produto?',
        }"
        :no-footer="true"
        @on-close="$vm2.close('confirmar-devolucao')"
      >
        <div class="btn-modal">
          <a-button class="btn cancelar" @click="$vm2.close('confirmar-devolucao')">
            Cancelar
          </a-button>

          <a-button class="btn confirmar">
            Confirmar
          </a-button>
        </div>
      </vue-modal-2>
    </client-only>
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

<template>
  <div class="card-equipamento-cadastrado">
    <div class="flex-aa">
      <img class="img-equipamento" src="~/assets/img/banner-bg.png" alt="imagem do equipamento">

      <div class="card-equipamento__content">
        <h2>{{ equipamento.nome }}</h2>
        <small>{{ equipamento.fornecedor }}</small>
        <p class="card-equipamento__content-categoria">
          {{ equipamento.categoria }}
        </p>

        <div class="card-equipamento__infos">
          <p class="equipamento-preco">
            {{ equipamento.preco }}
          </p>

          <div class="card-equipamento__infos-ativado">
            <p v-if="equipamento.ativo" class="detail-ativado ativo">
              Ativo
            </p>
            <p v-else class="detail-ativado inativo">
              Inativo
            </p>
          </div>
        </div>
      </div>
    </div>

    <nuxt-link class=" btn-detalhes ant-btn ant-btn-primary" to="/equipamentos/produto">
      Ver detalhes
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CardEquipamentoCadastrado',
  props: {
    equipamento: {
      type: Object
    }
  },
};
</script>

<style lang="scss" scoped>
.card-equipamento-cadastrado {
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;

  &:hover{
    .img-equipamento{
      transform: scale(1.05);
    }
  }

  .img-equipamento{
    height: 130px;
    width: 130px;
    border-radius: 3px;
    transition: .3s transform;
  }
}

.flex-aa{
  display: flex;
}

.card-equipamento__content{
  margin: 0 10px;
  width: 300px;
  h2{
    font-size: 0.875rem;
    font-weight: 400;
    color: $secondary-dark;
    margin-bottom: 0 !important;
  }
  small{
    font-size: 0.75rem;
    color: $neutral-gray;
  }

  .card-equipamento__content-categoria{
    font-size: 0.75rem;
    margin: 10px 0;
  }
}

.card-equipamento__infos{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
}

.card-equipamento__infos-ativado{
  display: flex;
}

.equipamento-preco{
  font-weight: 700;
  color: #000;
}

.detail-ativado{
  background: red;
  padding: 4px 10px;
  border-radius: 10px;
  color: #FFF;
  font-size: 0.875rem;
  font-weight: 700;
}

.ativo{
  background: $alert-success;
}
.inativo{
  background: $alert-warning;
}
</style>

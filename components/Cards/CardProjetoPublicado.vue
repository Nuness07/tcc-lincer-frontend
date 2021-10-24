<template>
  <nuxt-link
    :to="`/meus-servicos/${projeto.id_projeto}`"
    class="card-projeto-publicado"
  >
    <article>
      <h2>{{ title }}</h2>
      <p class="projeto-publicado__desc">
        {{ description }}
      </p>

      <div class="card-projeto-publicaco__infos">
        <p class="card-projeto__preco">
          {{ projeto.preco }}
        </p>

        <div class="card-projeto__aprovacoes">
          <div v-if="projeto.aprovado" class="card-projeto__aprovacao card-projeto__aprovado">
            <div class="card-projeto__aprovacao-detail" />
            <p>Aprovado</p>
          </div>
          <div v-else class="card-projeto__aprovacao card-projeto__analise">
            <div class="card-projeto__aprovacao-detail" />
            <p>Em análise</p>
          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardProjetoPublicado',
  props: {
    projeto: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      title: null,
      description: null,
    }
  },
  mounted () {
    this.handlerTitle()
    this.handlerDescription()
  },
  methods: {
    handlerDescription () {
      if (this.projeto.descricao.length > 180) {
        this.description = this.projeto.descricao.substring(0, 150) + '...'
      } else {
        this.description = this.projeto.descricao
      }
    },
    handlerTitle () {
      if (this.projeto.nome.length > 30) {
        this.title = this.projeto.nome.substring(0, 30) + '...'
      } else {
        this.title = this.projeto.nome
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.card-projeto-publicado{
  background: #FFF;
  display: flex;
  width: 375px;
  padding: 15px 10px;
  border-radius: 4px;
  transition: .3s transform;

  &:hover{
    transform: scale(1.05);
  }

  h2{
    color: $primary-yellow;
    font-size: 1.125rem;
    font-weight: 600;
  }
}

.projeto-publicado__desc{
  color: $secondary-dark;
  font-size: 1rem;
  height: 100px;
}

.card-projeto__preco{
  color: $secondary-dark;
  font-weight: 700;
}

.card-projeto-publicaco__infos{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.card-projeto__aprovacao{
  color: $secondary-dark;
  padding: 5px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8px;

  p{
    font-size: 0.75rem !important;
    margin-bottom: 0 !important;
  }
}

.card-projeto__aprovado{
  background: $alert-success;
}
.card-projeto__analise{
  background: $alert-warning;
}

.card-projeto__aprovacao-detail{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #FFF;
}
</style>

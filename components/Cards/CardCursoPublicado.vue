<template>
  <article class="card-curso">
    <picture>
      <img :src="`https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`" alt="Curso">
    </picture>
    <div class="card-curso__body">
      <h3>{{ curso.nome }}</h3>

      <div class="card-curso__itens">
        <div class="card-curso__item">
          <SolidChartBarIcon />
          <div class="card-curso__right">
            <small>Nível</small>
            <p>{{ curso.nivel_curso }}</p>
          </div>
        </div>
      </div>

      <p v-if="curso_complete" class="modulos-cadastrados">
        {{ curso_complete.modulos.length }} Módulos cadastrados
      </p>

      <nuxt-link v-if="curso_complete" :to="`/editar-cursos/${curso_complete.id_curso}`">
        <a-button type="primary">
          Acessar Painel do curso
        </a-button>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import CursoService from '~/service/curso/curso-service'
export default {
  name: "CardCursoPublicado",
  props: {
    curso: {
      type: Object
    }
  },
  data () {
    return {
      idVideo: null,
      curso_complete: null,
    }
  },
  mounted () {
    this.getIdVideo()
    this.getCurso()
  },
  methods: {
    getIdVideo () {
      const string = this.curso.aula_preview.split('/');
      this.idVideo = string[string.length - 1];
    },

    async getCurso () {
      this.curso_complete = await CursoService.getCurso(this.curso.id_curso)
      this.curso_complete = this.curso_complete.data
    }
  }
};
</script>

<style lang="scss" scoped>
.card-curso {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: $neutral-white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.3s;

  picture {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 56.25%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .card-curso__body {
    padding: 8px 16px;
    h3 {
      margin-top: 8px;
      margin-bottom: 16px;
      font-weight: bold;
    }

    .card-curso__itens {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .card-curso__item {
        width: calc(100% / 2 - 8px);
        display: flex;
        align-items: center;

        &:nth-child(1),
        &:nth-child(2) {
          margin-bottom: 16px;
        }

        .card-curso__right {
          margin-left: 8px;
          small {
            display: block;
            color: $primary-yellow;
            margin-bottom: 0px;
            font-size: 12px;
          }

          p {
            font-size: 14px;
          }
        }

        svg {
          width: 20px;
          color: $primary-yellow;
        }
      }
    }

    button {
      width: 100%;
      margin-top: 16px;
    }
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 10px;
  }
}

.modulos-cadastrados{
  font-size: 0.875rem;
  text-align: center;
}
</style>

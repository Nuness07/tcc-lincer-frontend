<template>
  <div class="visualizar-curso">
    <div class="visualizar-curso__title">
      <h2>{{ curso.nome_curso }}</h2>
      <p>É Dessa forma que os usuários enxergam o seu curso</p>
    </div>

    <div class="visualizar-curso__content">
      <div class="visualizar-curso__modulos">
        <div v-for="modulo, index in modulos" :key="index" class="visualizar-curso__modulos-item">
          <p class="nome-modulo">
            {{ modulo.nome_modulo }}
          </p>
          <div v-for="aula, index in modulo.aulas" :key="index" class="visualizar-curso__aula" @click="getAula(aula.id_aula)">
            <p v-wave class="nome-aula">
              {{ aula.nome_aula }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="!aula_selecionada" class="visualizar-curso__video">
        <h2 class="preview">
          Preview do curso
        </h2>
        <div class="embed-responsive">
          <iframe
            class="embed-responsive-item"
            :src="`https://www.youtube.com/embed/${aula_preview_id}`"
            allowfullscreen
          />
        </div>
      </div>
      <div v-else class="visualizar-curso__video">
        <h2 class="preview">
          {{ aula_selecionada.nome_aula }}
        </h2>
        <div class="embed-responsive">
          <iframe
            class="embed-responsive-item"
            :src="`https://www.youtube.com/embed/${aula_selecionada_video}`"
            allowfullscreen
          />
        </div>
        <p class="curso-descricao">
          {{ aula_selecionada.descricao_aula }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CursoService from '~/service/curso/curso-service'
export default {
  name: 'VisualizacaoCurso',
  layout: 'logged',
  data () {
    return {
      curso: [],
      aula_preview_id: null,
      modulos: [],
      aula_selecionada: null,
      aula_selecionada_video: null,
    }
  },
  mounted () {
    this.getCurso().then((data) => {
      this.getPreviewId()
      this.curso.modulos.forEach((modulo) => {
        this.getModulos(modulo.id_modulo)
      })
    }).then((data) => {
      console.log('aaaa', this.modulos)
    })
  },
  methods: {
    async getCurso () {
      this.curso = await CursoService.getCurso(this.$route.params.id)
      this.curso = this.curso.data;
    },

    getPreviewId () {
      this.aula_preview_id = this.curso.aula_preview.split('/');
      this.aula_preview_id = this.aula_preview_id[this.aula_preview_id.length - 1];
    },

    async getModulos (id) {
      const modulo = await CursoService.getModulo(id);
      this.modulos.push(modulo.data)
    },

    async getAula (id) {
      this.aula_selecionada = await CursoService.getAula(id);
      this.aula_selecionada = this.aula_selecionada.data;

      const stringVideo = this.aula_selecionada.video.split('/');
      this.aula_selecionada_video = stringVideo[stringVideo.length - 1];
    }
  }
}
</script>

<style lang="scss" scoped>
.visualizar-curso{
  margin-left: 36px;
  margin-top: 80px;
}

.visualizar-curso__title{
  h2{
    color: $primary-yellow;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0px;
  }

  p{
    font-size: 1rem;
    color: $secondary-dark;
  }
}

.visualizar-curso__content{
  margin-top: 40px;
  display: flex;
}

.visualizar-curso__modulos{
  width: 300px;
  height: 600px;
  overflow-y: scroll;
}

.nome-modulo{
  padding: 15px 5px;
  background: $primary-yellow;
  font-weight: 700;
}

.nome-aula{
  padding: 8px 12px;
  cursor: pointer;
}

.visualizar-curso__video{
  width: 900px;
  height: 600px;
}

.embed-responsive {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #FFF;
  margin-left: 30px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 16px;
  }
}

.preview{
  margin-left: 30px;
  margin-bottom: 30px;
  color: $primary-yellow;
}

.curso-descricao{
  margin-left: 30px;
  margin-top: 30px;
}
</style>

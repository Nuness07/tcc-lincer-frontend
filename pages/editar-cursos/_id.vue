<template>
  <div class="editar-curso">
    <div class="editar-curso__title">
      <h2>{{ curso.nome_curso }}</h2>
      <p>Esse é o painel onde você edita todo o seu curso</p>
      <nuxt-link :to="`/visualizar-curso/${curso.id_curso}`">
        <a-button type="primary">
          Visualizar curso
        </a-button>
      </nuxt-link>
    </div>

    <div class="editar-curso__painel">
      <div class="editar-curso__modulos">
        <div class="editar-curso__modulos-wrapper">
          <div v-for="modulo, index in curso.modulos" :key="index" v-wave class="editar-curso__modulos-item" @click="getAulasModulo(modulo.id_modulo)">
            {{ modulo.nome }}
          </div>
        </div>

        <div v-wave class="btn-add-module" @click="$vm2.open('novo-modulo')">
          <p>Novo módulo</p>
        </div>
      </div>
      <div v-if="!modulo_selecionado" class="editar-curso__aulas">
        <h2>Selecione um módulo para editar</h2>
      </div>

      <div v-else class="editar-curso__aula-selecionado">
        <h2>{{ modulo_selecionado.nome_modulo }}</h2>
        <div v-if="modulo_selecionado.aulas.length > 0" class="editar-curso__aula-item-wrapper">
          <div v-for="aula, index in modulo_selecionado.aulas" :key="index" v-wave class="editar-curso__aula-item">
            <p>{{ aula.nome_aula }}</p>
          </div>
        </div>

        <div v-else>
          <h2 class="sem-aulas">
            Crie a primeira aula do módulo
          </h2>
        </div>

        <div v-wave class="btn-add-aula" @click="$vm2.open('nova-aula')">
          <p>Nova Aula</p>
        </div>
      </div>
    </div>

    <vue-modal-2
      class="modal"
      name="novo-modulo"
      :header-options="{
        title: 'Adicionar novo módulo',
      }"
      :no-footer="true"
      @on-close="$vm2.close('novo-modulo')"
    >
      <a-form-model
        ref="novoModulo"
        :rules="rulesModulo"
        :model="novoModulo"
      >
        <a-form-model-item
          class="form-item__title"
          prop="nome"
          label="Nome do módulo"
        >
          <a-input v-model="novoModulo.nome" placeholder="Digite aqui" />
        </a-form-model-item>

        <a-button
          class="btn-novo-modulo"
          type="secondary"
          @click.prevent="createModulo()"
        >
          Criar módulo
        </a-button>
      </a-form-model>
    </vue-modal-2>

    <vue-modal-2
      class="modal"
      name="nova-aula"
      :header-options="{
        title: 'Adicionar nova aula',
      }"
      :no-footer="true"
      @on-close="$vm2.close('nova-aula')"
    >
      <a-form-model
        ref="novaAula"
        class="form-aula-modal"
        :rules="rulesNovaAula"
        :model="novaAula"
      >
        <a-form-model-item
          class="form-item__title"
          prop="nome_aula"
          label="Nome da aula"
        >
          <a-input v-model="novaAula.nome_aula" placeholder="Digite aqui" />
        </a-form-model-item>

        <a-form-model-item
          has-feedback
          prop="descricao_aula"
          label="Descricao da aula"
        >
          <a-input
            v-model="novaAula.descricao_aula"
            type="textarea"
            allow-clear
            class="secondary"
            :auto-size="{ minRows: 5, maxRows: 15 }"
            placeholder="Descreva sobre a aula"
          />
        </a-form-model-item>

        <a-form-model-item
          class="form-item__title"
          prop="video"
          label="Vídeo"
        >
          <a-input v-model="novaAula.video" placeholder="Cole aqui o link" />
          <p class="description-video">
            *Cole aqui o embed do youtube ou vimeo
          </p>
        </a-form-model-item>

        <a-button
          class="btn-novo-modulo"
          type="secondary"
          @click.prevent="createAula()"
        >
          Criar Aula
        </a-button>
      </a-form-model>
    </vue-modal-2>
  </div>
</template>

<script>
import CursoService from '~/service/curso/curso-service'
export default {
  name: 'EditarCurso',
  layout: 'logged',
  data () {
    return {
      curso: [],
      modulo_selecionado: null,

      novoModulo: {
        nome: null
      },

      novaAula: {
        nome_aula: null,
        descricao_aula: null,
        video: null
      },

      rulesModulo: {
        nome: [{ required: true, message: 'O nome do módulo é obrigatório' }]
      },

      rulesNovaAula: {
        nome_aula: [{ required: true, message: 'O nome da aula é obrigatório' }],
        descricao_aula: [{ required: true, message: 'A descrição é obrigatória' }],
        video: [{ required: true, message: 'O vídeo é obrigatório' }]
      }
    }
  },
  mounted () {
    this.getCurso()
  },
  methods: {
    async getCurso () {
      this.curso = await CursoService.getCurso(this.$route.params.id)
      this.curso = this.curso.data
    },

    async getAulasModulo (id) {
      this.modulo_selecionado = await CursoService.getModulo(id);
      this.modulo_selecionado = this.modulo_selecionado.data
    },

    async createModulo () {
      await this.$refs.novoModulo.validate((valid) => {
        if (valid) {
          const body = {
            nome_modulo: this.novoModulo.nome,
            id_curso_relation: this.curso.id_curso,
          }
          CursoService.cadastrarModulo(body);
          this.$toast.success("Módulo criado com sucesso", {
            timeout: 2000
          })

          this.$vm2.close('novo-modulo');
          this.$router.go();
        } else {
          console.log('Formulário não foi preenchido corretamente')
        }
      })
    },
    async createAula () {
      await this.$refs.novaAula.validate((valid) => {
        if (valid) {
          const body = {
            nome_aula: this.novaAula.nome_aula,
            descricao_aula: this.novaAula.descricao_aula,
            video: this.novaAula.video,
            id_modulo_relation: this.modulo_selecionado.id_modulo,
          }
          CursoService.cadastrarAula(body);
          this.$toast.success("Módulo criado com sucesso", {
            timeout: 2000
          })

          this.$vm2.close('nova-aula');
          this.$router.go();
        } else {
          console.log('Formulário não foi preenchido corretamente')
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.editar-curso{
  margin-left: 36px;
  margin-top: 80px;
}

.editar-curso__title{
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

.editar-curso__painel{
  display: flex;
  justify-content: flex-start;
}

.editar-curso__aulas{
  background: #FFF;
  height: 600px;
  overflow-y: scroll;
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $primary-yellow;
}

.editar-curso__aula-selecionado{
  background: #FFF;
  height: 600px;
  overflow-y: scroll;
  width: 900px;
  padding: 20px;
  position: relative;

  h2{
    color: $primary-yellow;
  }
}

.editar-curso__painel{
  margin-top: 40px;
}

.btn-add-module{
  background: #FFF;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  color: $primary-yellow;
  font-weight: 700;
  border-radius: 0 0 0 5px;
  cursor: pointer;
}

.editar-curso__modulos{
  max-width: 320px;
  height: 600px;
  overflow-y:scroll;
  position: relative;
  width: 320px;
}

.editar-curso__modulos-wrapper{
  background: $primary-yellow;
  border-radius: 5px 0 0 5px;
}

.editar-curso__modulos-item{
  padding: 20px ;
  border-bottom: 1px solid $secondary-dark;
  font-weight: 700;
  cursor: pointer;
  transition: .3s;

  &:hover{
    color: $secondary-dark;
    font-size: 1rem;
  }

  &:last-of-type{
    border: none;
  }
}

.modal{
  z-index: 8888888888;
  padding: 20px;
}

.form-item__title{
  margin: 20px !important;
}

.btn-add-aula{
  position: absolute;
  bottom: 10px;
  width: 200px;
  border-radius: 4px;
  padding: 15px;
  color: #FFF;
  background: $secondary-dark;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}

.sem-aulas{
  color: $secondary-dark !important;
  text-align: center;
}
.editar-curso__aula-item{
  background: $background-gray;
  padding: 20px 10px;
  cursor: pointer;
  border-bottom: 1px solid $secondary-dark;

  &:last-of-type{
    border: none;
  }

  p{
    font-size: 1rem;
    color: $secondary-dark;
    font-weight: 700;
  }
}

.form-aula-modal{
  padding: 40px;
}

.form-item__title{
  margin: 0 !important;
}

.description-video{
  font-size: 0.75rem;
  color: $primary-yellow;
}
</style>

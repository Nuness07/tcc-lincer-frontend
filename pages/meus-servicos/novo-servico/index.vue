<template>
  <div class="cadastro-projeto">
    <h2 class="cadastro-projeto__title">
      Publicar novo projeto
    </h2>
    <p class="cadastro-projeto__subtitle">
      Publique um serviço para um dos nossos freelancers realizarem esse job pra você
    </p>

    <a-form-model ref="formCadastroProjeto" class="cadastro-projeto__form" :model="formCadastroProjeto" :rules="rules">
      <a-form-model-item prop="titulo" label="Título do projeto">
        <a-input
          v-model="formCadastroProjeto.titulo"
          type="text"
          class="secondary"
          placeholder="Capa para podcast"
        />
      </a-form-model-item>

      <a-form-model-item
        prop="descricao"
        label="Descreva seu projeto"
      >
        <a-input
          v-model="formCadastroProjeto.descricao"
          type="textarea"
          allow-clear
          class="secondary"
          :auto-size="{ minRows: 5, maxRows: 15 }"
          placeholder="Digite aqui o que precisa ser desenvolvido"
        />
      </a-form-model-item>

      <a-form-model-item
        prop="categoria"
        label="Selecione a categoria do projeto"
      >
        <a-select style="width: 120px" @change="handleCategoria">
          <a-select-option v-for="categorias, index in categorias_projeto.data" :key="`categoria-${index}`" :value="String(categorias.id_categoria_projeto)">
            {{ categorias.nome }}
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item prop="habilidades_desejadas" label="Habilidades necessárias">
        <a-select class="select-tags" mode="tags" style="width: 100%" :token-separators="[',']" @change="handleHabilidadesNecessarias">
          <a-select-option v-for="habilidade in habilidades" :key="habilidade.nome">
            {{ habilidade.nome }}
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-button class="btn-send-Projeto" type="primary">
        Enviar para aprovação
      </a-button>
    </a-form-model>
    <pre>{{ categorias_projeto.data }}</pre>
  </div>
</template>

<script>
import projetosService from '~/service/projeto/projeto-service';
export default {
  name: 'NovoServico',
  layout: 'logged',
  data () {
    return {
      formCadastroProjeto: {
        titulo: null,
        descricao: null,
        habilidades_desejadas: null,
        arquivos: 'arquivos',
        preco: null,
        prazo: null,
      },

      categorias_projeto: [],

      rules: {
        titulo: [{ required: true, message: "O título é obrigatório" }],
        descricao: [{ required: true, message: "A descrição é obrigatória" }],
        categoria: [{ required: true, message: "Selecione a categoria do projeto" }]
      },

      habilidades: [
        {
          nome: 'Photoshop'
        },
        {
          nome: 'VFX'
        },
        {
          nome: 'Infraestrutura'
        },
        {
          nome: 'Sonoplastia'
        },
        {
          nome: 'Adobe Illustrator'
        },
        {
          nome: 'Ilustrador'
        },
        {
          nome: 'Pacote Adobe'
        },
      ]
    }
  },
  mounted () {
    this.getCategorias();
  },
  methods: {
    async getCategorias () {
      this.categorias_projeto = await projetosService.getCategorias();
    },

    handleCategoria (value) {
      console.log(value)
    },

    handleHabilidadesNecessarias (value) {
      this.habilidades_desejadas = value.toString();
      console.log(this.habilidades_desejadas)
    }
  }
}
</script>

<style lang="scss" scoped>

.cadastro-projeto{
  margin: 50px 0 0 36px;

  &__title{
    color: $primary-yellow;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0;
  }

  &__subtitle{
    margin-top: -5px;
    margin-bottom: 30px !important;
  }
}

.cadastro-projeto__form{
  max-width: 750px;
}
</style>

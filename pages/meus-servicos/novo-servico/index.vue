<template>
  <div class="cadastro-wrapper">
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

        <div class="input__100">
          <a-form-model-item class="input__50" prop="valor" label="Valor do projeto">
            <a-input
              v-model="formCadastroProjeto.valor"
              v-money="money"
              type="text"
              class="secondary"
            />
          </a-form-model-item>
          <a-form-model-item class="input__50" prop="prazo" label="Prazo de entrega">
            <a-date-picker :show-time="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }" @change="handlerDate" />
          </a-form-model-item>
        </div>

        <a-button class="btn-send-Projeto" type="primary" @click="cadastrarProjeto">
          Publicar projeto
        </a-button>
      </a-form-model>
    </div>

    <div class="anuncio-assinatura">
      <img src="~/assets/img/bg-anuncio.png" alt="anuncio">
      <div class="anuncio-assinatura__content">
        <h2>
          Impulsione seu projeto<br>
          com lincer premium
        </h2>

        <p class="anuncio-assinatura__content-item">
          Seu projeto sempre vai estar em destaque
        </p>
        <p class="anuncio-assinatura__content-item">
          Seu projeto vai receber mais propostas de qualidade superior
        </p>

        <a-button v-wave type="primary">
          Ver premium
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { VMoney } from 'v-money';
import moment from 'moment';
import projetosService from '~/service/projeto/projeto-service';
export default {
  name: 'NovoServico',
  directives: { money: VMoney },
  layout: 'logged',
  data () {
    return {
      formCadastroProjeto: {
        titulo: null,
        descricao: null,
        categoria: null,
        habilidades_desejadas: null,
        arquivos: 'arquivos',
        valor: null,
        prazo: null,
      },

      categorias_projeto: [],

      rules: {
        titulo: [{ required: true, message: "O título é obrigatório" }],
        descricao: [{ required: true, message: "A descrição é obrigatória" }],
        categoria: [{ required: true, message: "Selecione a categoria do projeto" }],
        habilidades_desejadas: [{ required: true, message: "Selecione no mínimo uma habilidade" }],
      },

      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 0,
        masked: false,
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
    moment,

    async getCategorias () {
      this.categorias_projeto = await projetosService.getCategorias();
    },

    handleCategoria (value) {
      this.formCadastroProjeto.categoria = value;
    },

    handleHabilidadesNecessarias (value) {
      this.formCadastroProjeto.habilidades_desejadas = value.toString();
    },

    handlerDate (date, dateString) {
      this.formCadastroProjeto.prazo = dateString;
    },

    async cadastrarProjeto () {
      await this.$refs.formCadastroProjeto.validate((valid) => {
        if (valid) {
          const projeto = {
            nome_projeto: this.formCadastroProjeto.titulo,
            habilidades_desejadas: this.formCadastroProjeto.habilidades_desejadas,
            arquivos: 'arquivos',
            prazo: this.formCadastroProjeto.prazo,
            preco: this.formCadastroProjeto.valor,
            id_contratante: this.$auth.user.id_usuario,
            id_categoria_projeto: this.formCadastroProjeto.categoria
          }

          projetosService.cadastrarProjeto(projeto)

          this.$toast.success("Projeto criado e enviado para análise!", {
            timeout: 2000
          })

          this.$router.push({ path: '/meus-servicos' })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>

.cadastro-wrapper{
  display: flex;
  justify-content: space-between;
}

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
  min-width: 750px;
}

.input__100{
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
}

.input__50{
  width: 50%;
}

.anuncio-assinatura{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__content{
    background: #FFF;
    border-radius: 5px;
    margin-top: -60px;
    width: 420px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    padding: 20px;
    h2{
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 29px;
    }

    &-item{
      margin-bottom: 10px !important;
      font-size: 0.875rem;
    }

    button{
      margin: 0 auto;
    }
  }
}
</style>

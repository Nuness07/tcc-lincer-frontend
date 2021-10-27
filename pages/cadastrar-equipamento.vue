<template>
  <div class="cadastro-wrapper">
    <div class="cadastro-projeto">
      <h2 class="cadastro-projeto__title">
        Cadastrar um novo equipamento
      </h2>
      <p class="cadastro-projeto__subtitle">
        Cadastre um novo equipamento para aluguel
      </p>

      <a-form-model ref="formCadastroEquipamento" class="cadastro-equipamento__form" :model="formCadastroEquipamento" :rules="rules">
        <a-form-model-item prop="titulo" label="Título do Equipamento">
          <a-input
            v-model="formCadastroEquipamento.titulo"
            type="text"
            class="secondary"
            placeholder="Câmera Canon"
          />
        </a-form-model-item>
        <a-form-model-item prop="marca" label="Marca do Equipamento">
          <a-input
            v-model="formCadastroEquipamento.marca"
            type="text"
            class="secondary"
            placeholder="Canon"
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
      </a-form-model>
    </div>
  </div>
</template>

<script>
import { VMoney } from 'v-money';
import moment from 'moment';
export default {
  name: 'NovoEquipamento',
  directives: { money: VMoney },
  layout: 'logged',
  data () {
    return {
      formCadastroEquipamento: {
        nome: null,
        marca: null,
        categoria: null,
        descricao: null,
        especificacoes_tecnicas: 'arquivos',
        ativo: false,
        impulso: false
      },

      categorias_projeto: [],

      rules: {
        nome: [{ required: true, message: "O título é obrigatório" }],
        marca: [{ required: true, message: "A marca é obrigatória" }],
        categoria: [{ required: true, message: "Selecione a categoria do equipamento" }],
        descricao: [{ required: true, message: "A descrição é obrigatória" }],
        especificacoes_tecnicas: [{ required: true, message: "As especificações são obrigatórias" }],
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
            descricao: this.formCadastroProjeto.descricao,
            habilidades_desejadas: this.formCadastroProjeto.habilidades_desejadas,
            arquivos: 'arquivos',
            prazo: this.formCadastroProjeto.prazo,
            preco: this.formCadastroProjeto.valor,
            id_contratante: this.$auth.user.id_usuario,
            aprovado: false,
            impulso: this.formCadastroProjeto.impulso,
            id_categoria_projeto: this.formCadastroProjeto.categoria
          }

          projetosService.cadastrarProjeto(projeto).then((i) => {
            this.$toast.success("Projeto criado e enviado para análise!", {
              timeout: 2000
            })

            this.$router.push({ path: '/meus-servicos' })
          })
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

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
        <a-form-model-item prop="nome" label="Título do Equipamento">
          <a-input
            v-model="formCadastroEquipamento.nome"
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
            <a-select-option v-for="categorias, index in categorias_projeto.data" :key="`categoria-${index}`" :value="String(categorias.id_tipo_equipamento)">
              {{ categorias.nome }}
            </a-select-option>
          </a-select>
        </a-form-model-item>

        <a-form-model-item
          prop="descricao"
          label="Descreva o equipamento"
        >
          <a-input
            v-model="formCadastroEquipamento.descricao"
            type="textarea"
            allow-clear
            class="secondary"
            :auto-size="{ minRows: 5, maxRows: 15 }"
            placeholder="Digite aqui a descrição do equipamento"
          />
        </a-form-model-item>

        <a-form-model-item
          prop="especificacoes_tecnicas"
          label="Quais são as especificações técnicas do equipamento"
        >
          <a-input
            v-model="formCadastroEquipamento.especificacoes_tecnicas"
            type="textarea"
            allow-clear
            class="secondary"
            :auto-size="{ minRows: 5, maxRows: 15 }"
            placeholder="Digite aqui as especificações técnicas do equipamento"
          />
        </a-form-model-item>
        <a-form-model-item
          prop="arquivos"
          label="Imagens do equipamento"
        >
          <div class="clearfix">
            <a-upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture-card"
              :file-list="arquivos"
              @preview="handlePreview"
              @change="handleChange"
            >
              <div v-if="arquivos.length < 8">
                <a-icon type="plus" />
                <div class="ant-upload-text">
                  Upload
                </div>
              </div>
            </a-upload>
            <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
              <img alt="example" style="width: 100%" :src="previewImage">
            </a-modal>
          </div>
        </a-form-model-item>

        <a-button class="btn-send-Projeto" type="primary" @click="cadastrarProjeto">
          Publicar projeto
        </a-button>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import { VMoney } from 'v-money';
import moment from 'moment';
import EmpresaService from '~/service/empresa/empresa-service';
import EquipamentoService from '~/service/equipamento/equipamento-service';
function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  name: 'NovoEquipamento',
  layout: 'loggedCompany',
  data () {
    return {
      previewVisible: false,
      previewImage: '',
      formCadastroEquipamento: {
        nome: null,
        marca: null,
        categoria: null,
        descricao: null,
        especificacoes_tecnicas: null,
        ativo: false,
        impulso: false
      },

      arquivos: [],

      categorias_projeto: [],

      rules: {
        nome: [{ required: true, message: "O título é obrigatório" }],
        marca: [{ required: true, message: "A marca é obrigatória" }],
        categoria: [{ required: true, message: "Selecione a categoria do equipamento" }],
        descricao: [{ required: true, message: "A descrição é obrigatória" }],
        especificacoes_tecnicas: [{ required: true, message: "As especificações são obrigatórias" }],
      },
    }
  },
  mounted () {
    this.getCategorias();
  },
  methods: {
    moment,

    async getCategorias () {
      this.categorias_projeto = await EmpresaService.getCategorias();
    },

    handleCategoria (value) {
      this.formCadastroEquipamento.categoria = value;
    },

    handleHabilidadesNecessarias (value) {
      this.formCadastroProjeto.habilidades_desejadas = value.toString();
    },

    handlerDate (date, dateString) {
      this.formCadastroProjeto.prazo = dateString;
    },

    async cadastrarProjeto () {
      await this.$refs.formCadastroEquipamento.validate((valid) => {
        if (valid) {
          const equipamento = {
            nome_equipamento: this.formCadastroEquipamento.nome,
            descricao: this.formCadastroEquipamento.descricao,
            especificacoes: this.formCadastroEquipamento.especificacoes_tecnicas,
            fotos: 'ajdajlk',
            marca: this.formCadastroEquipamento.marca,
            id_empresa_relation: this.$auth.user.id_empresa,
            id_tipo_equipamento: this.formCadastroEquipamento.categoria,
            modelo: '--',
            valor_mes: '--'
          }

          EquipamentoService.cadastrar(equipamento).then((i) => {
            this.$toast.success("Projeto criado e enviado para análise!", {
              timeout: 2000
            })

            this.$router.push({ path: '/equipamentos-cadastrados' })
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    handleCancel () {
      this.previewVisible = false;
    },
    async handlePreview (file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange ({ fileList }) {
      this.arquivos = fileList;
    },

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

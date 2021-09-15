<template>
  <div>
    <a-form-model ref="formCadastro" :model="formCadastroPasso2" :rules="rules">
      <a-form-model-item has-feedback prop="cep" label="CEP">
        <a-input
          v-model="formCadastroPasso2.cep"
          v-mask="'#####-###'"
          class="secondary"
          placeholder="CEP"
        />
      </a-form-model-item>
      <a-form-model-item has-feedback prop="estado" label="Estado">
        <a-input
          v-model="formCadastroPasso2.uf"
          class="secondary"
          placeholder="Estado"
          disabled
        />
      </a-form-model-item>
      <a-form-model-item has-feedback prop="cidade" label="Cidade">
        <a-input
          v-model="formCadastroPasso2.city"
          class="secondary"
          placeholder="Cidade"
          disabled
        />
      </a-form-model-item>
      <a-form-model-item has-feedback prop="rua" label="Rua">
        <a-input
          v-model="formCadastroPasso2.street"
          class="secondary"
          placeholder="Rua"
          disabled
        />
      </a-form-model-item>
      <a-form-model-item has-feedback prop="numero" label="Número">
        <a-input
          v-model="formCadastroPasso2.number"
          class="secondary"
          placeholder="Número"
        />
      </a-form-model-item>
      <a-form-model-item has-feedback prop="complemento" label="Complemento">
        <a-input
          v-model="formCadastroPasso2.complement"
          class="secondary"
          placeholder="Complemento"
        />
      </a-form-model-item>
    </a-form-model>

    <a-button type="primary" class="btn-primary" @click="check">
      Cadastrar
    </a-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vue from "vue";
import VueMask from "v-mask";
import UserService from '@/service/user/user-service.js';
Vue.use(VueMask);
export default {
  name: "Passo1CadastroUsuario",
  data () {
    const validateCEP = (rule, value, callback) => {
      if (value.length === 9) {
        this.$viaCep.buscarCep(value).then((obj) => {
          if (obj.erro) {
            callback(new Error('O CEP é inválido'))
          }
          this.formCadastroPasso2.uf = obj.uf
          this.formCadastroPasso2.city = obj.localidade
          this.formCadastroPasso2.neighborhood = obj.bairro
          this.formCadastroPasso2.street = obj.logradouro
          callback()
        })
      }
    }
    return {
      formCadastroPasso2: {
        cep: null,
        uf: null,
        city: null,
        street: null,
        number: null,
        complement: null,
      },
      rules: {
        cep: [
          { required: true, message: "O CEP é obrigatório" },
          { validator: validateCEP, trigger: "change" },
          { min: 9, message: "O CEP é inválido" },
        ],
      },
    };
  },
  computed: {
    ...mapState(["cadastroUsuario"]),
  },
  methods: {
    async check () {
      await this.$refs.formCadastro.validate((valid) => {
        if (valid) {
          this.$store.commit('cadastroUsuario/SET_FORM_STEP', [
            'formStepTwo',
            this.formCadastroPasso2,
          ])
          this.$store.commit('cadastroUsuario/MOUNT_POST_FORM')

          this.cadastrarUser();

          this.$toast.success("Usuário cadastrado com sucesso", {
            timeout: 2000
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    async cadastrarUser () {
      const user = await UserService.cadastrar(this.cadastroUsuario.postForm);
      console.log(user);
    }
  },
};
</script>

<style lang="scss" scoped>
.form-item__100 {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;

  .form-item__50 {
    min-width: 250px;
  }
}

.btn-primary {
  width: 100%;
  height: 56px;
  font-weight: 700;
  color: $neutral-dark;
  text-transform: uppercase;
}
</style>

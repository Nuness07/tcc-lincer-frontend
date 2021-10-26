<template>
  <div>
    <a-form-model ref="formCadastro" :model="formCadastroPasso1" :rules="rules">
      <a-form-model-item has-feedback prop="nome" label="Nome">
        <a-input
          v-model="formCadastroPasso1.name"
          class="secondary"
          placeholder="Nome da empresa"
        />
      </a-form-model-item>
      <a-form-model-item has-feedback prop="email" label="E-mail">
        <a-input
          v-model="formCadastroPasso1.email"
          type="email"
          class="secondary"
          placeholder="Seu e-mail"
        />
      </a-form-model-item>

      <a-form-model-item has-feedback prop="password" label="Senha">
        <a-input
          v-model="formCadastroPasso1.password"
          type="password"
          class="secondary"
          placeholder="Senha"
        />
      </a-form-model-item>

      <a-form-model-item
        has-feedback
        prop="checkPassword"
        label="Repita a senha"
      >
        <a-input
          v-model="formCadastroPasso1.checkPassword"
          type="password"
          class="secondary"
          placeholder="Repita a senha"
        />
      </a-form-model-item>

      <a-form-model-item has-feedback prop="cnpj" label="CNPJ">
        <a-input
          v-model="formCadastroPasso1.cnpj"
          v-mask="`#######/###`"
          class="secondary"
          placeholder="cnpj"
        />
      </a-form-model-item>
    </a-form-model>

    <a-button type="primary" class="btn-primary" @click="check">
      Etapa 1 de 2
    </a-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vue from 'vue'
import VueMask from 'v-mask'
Vue.use(VueMask)
export default {
  name: "Passo1CadastroUsuario",
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === null) {
        callback(new Error("Por favor, confirme sua senha!"));
      } else if (value !== this.formCadastroPasso1.password) {
        callback(new Error("As senhas estão diferentes"));
      } else {
        callback();
      }
    };
    return {
      formCadastroPasso1: {
        name: null,
        lastname: null,
        password: null,
        checkPassword: null,
        email: null,
        cnpj: null,
      },
      rules: {
        name: [{ required: true, message: "O nome é obrigatório" }],
        lastname: [{ required: true, message: "O sobrenome é obrigatório" }],
        email: [{ required: true, message: "O e-mail é obrigatório" }, { type: 'email', message: 'Digite um e-mail válido' }],
        password: [{ required: true, message: "A senha é obrigatória" }, { min: 3, message: "A senha deve ter mais de 3 caracteres" }],
        cnpj: [{ required: true, message: "O CPF é obrigatório" }],
        checkPassword: [{ validator: validatePass, trigger: "change" }],
      },
    };
  },
  computed: {
    ...mapState(["cadastroEmpresa"]),
  },
  methods: {
    async check () {
      await this.$refs.formCadastro.validate((valid) => {
        if (valid) {
          this.$store.commit('cadastroEmpresa/SET_FORM_STEP', [
            'formStepOne',
            this.formCadastroPasso1,
          ])
          this.$store.commit('cadastroEmpresa/CHANGE_STEP', 'next')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
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

<template>
  <div>
    <a-form-model ref="formCadastro" :model="formCadastroPasso1" :rules="rules">
      <div class="form-item__100">
        <a-form-model-item
          has-feedback
          class="form-item__50"
          prop="name"
          label="Nome"
        >
          <a-input
            v-model="formCadastroPasso1.name"
            class="secondary"
            placeholder="Nome"
          />
        </a-form-model-item>
        <a-form-model-item
          has-feedback
          class="form-item__50"
          prop="sobrenome"
          label="Sobrenome"
        >
          <a-input
            v-model="formCadastroPasso1.sobrenome"
            class="secondary"
            placeholder="Sobrenome"
          />
        </a-form-model-item>
      </div>
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

      <a-form-model-item has-feedback prop="cpf" label="CPF">
        <a-input
          v-model="formCadastroPasso1.cpf"
          class="secondary"
          placeholder="CPF"
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
        password: null,
        checkPassword: null,
        email: null,
        senha: null,
        cpf: null,
      },
      rules: {
        name: [{ required: true, message: "O nome é obrigatório" }],
        sobrenome: [{ required: true, message: "O sobrenome é obrigatório" }],
        email: [{ required: true, message: "O e-mail é obrigatório" }],
        password: [{ required: true, message: "A senha é obrigatória" }],
        cpf: [{ required: true, message: "O CPF é obrigatório" }],
        checkPassword: [{ validator: validatePass, trigger: "change" }],
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
            'formStepOne',
            this.formCadastroPasso1,
          ])
          this.$store.commit('cadastroUsuario/CHANGE_STEP', 'next')
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

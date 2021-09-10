<template>
  <div>
    <a-form-model ref="formCadastro" :model="formCadastroPasso2" :rules="rules">
      <div class="form-item__100">
        <a-form-model-item
          has-feedback
          class="form-item__50"
          prop="name"
          label="Nome"
        >
          <a-input
            v-model="formCadastroPasso2.cep"
            class="secondary"
            placeholder="Nome"
          />
        </a-form-model-item>
      </div>
    </a-form-model>

    <a-button type="primary" class="btn-primary" @click="check">
      Cadastrar
    </a-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Passo1CadastroUsuario",
  data () {
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
        cep: [{ required: true, message: "O CEP é obrigatório" }],
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
          console.log('deu bom')
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

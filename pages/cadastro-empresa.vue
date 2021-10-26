<template>
  <div class="cadastro">
    <div class="cadastro__left" />
    <div class="cadastro__right">
      <div class="cadastro__right-infos">
        <img src="@/assets/img/logo-lincer.svg" alt="logo lincer">

        <div class="cadastro__right-infos-title">
          <h1>Cadastro</h1>
          <p>Para poder entrar da melhor forma no mundo do audiovisual!</p>

          <Passo1CadastroEmpresa v-if="cadastroEmpresa.steps.currentStep == 1" />
          <Passo2CadastroEmpresa v-if="cadastroEmpresa.steps.currentStep == 2" />
        </div>

        <p class="signup">
          Ja possui cadastro?<nuxt-link class="to-signup" to="/login">
            Clique aqui para fazer login
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Cadastro",
  data () {
    return {};
  },
  computed: {
    ...mapState(["cadastroEmpresa"]),
  },
};
</script>

<style lang="scss" scoped>
.cadastro {
  display: flex;
  min-height: 100vh;

  &__left {
    background: url("@/assets/img/login-register-bg.png") no-repeat;
    background-size: cover;
    width: 40%;
  }

  &__right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;

    &-infos-title {
      h1 {
        margin-top: 25px;
        font-size: 2rem;
        color: $primary-yellow;
        font-weight: 800;
        margin-bottom: 0;
        line-height: 30px;
      }
    }
  }
}

.signup {
  margin-top: 32px;

  .to-signup {
    color: $primary-yellow;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: $primary-dark;
    }
  }
}
</style>

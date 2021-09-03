<template>
  <div class="login">
    <div class="login__left" />
    <div class="login__right">
      <div class="login__right-infos">
        <img src="@/assets/img/logo-lincer.svg" alt="logo lincer">

        <div class="login__right-infos-title">
          <h1>Login</h1>
          <p>Para acessar sua plataforma</p>
        </div>

        <a-form-model
          ref="formLogin"
          :model="formLogin"
          :rules="rules"
        >
          <a-form-model-item prop="email" label="E-mail">
            <a-input v-model="formLogin.email" type="email" class="secondary" placeholder="criador@lincer.com.br" />
          </a-form-model-item>
          <a-form-model-item prop="password" label="Senha">
            <a-input v-model="formLogin.password" class="secondary" type="password" placeholder="password" />
          </a-form-model-item>
        </a-form-model>

        <a-button type="primary" class="btn-primary" @click="check">
          Login
        </a-button>

        <p>
          Ainda não tem cadastro?<span>Clique aqui para cadastrar</span>
        </p>

        <p v-if="$auth.loggedIn">
          Logado</o>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formLogin: {
        email: null,
        password: null
      },
      rules: {
        email: [{ required: true, message: 'E-mail é obrigatório' }, { type: 'email', message: 'O e-mail não é valido' }],
        password: [{ required: true, message: 'Senha é obrigatorio' }]
      }
    }
  },
  methods: {
    async check () {
      await this.$refs.formLogin.validate((valid) => {
        if (valid) {
          this.login(this.formLogin)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    async login (values) {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: values.email,
            password: values.password
          }
        })
        this.$router.push('/dashboard')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  height: 100vh;

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

    &-infos-title{
      h1{
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

.btn-primary{
  width: 100%;
  height: 56px;
  font-weight: 700;
  color: $neutral-dark;
  text-transform: uppercase;
}
</style>

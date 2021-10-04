<template>
  <div class="cadastro-freelancer">
    <div class="cadastro-freelancer__title">
      <h2>Cadastro Freelancer</h2>
      <p>Cadastre-se como freelancer para começar a mostrar o seu trabalho!</p>
    </div>

    <a-form-model ref="formCadastroFreelancer" :model="formCadastroFreelancer" :rules="rules">
      <a-form-model-item has-feedback prop="email" label="E-mail">
        <a-input
          v-model="formCadastroFreelancer.titulo"
          type="email"
          class="secondary"
          placeholder="Seu e-mail"
        />
      </a-form-model-item>

      <a-form-model-item has-feedback prop="password" label="Senha">
        <a-input
          v-model="formCadastroFreelancer.password"
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
          v-model="formCadastroFreelancer.checkPassword"
          type="password"
          class="secondary"
          placeholder="Repita a senha"
        />
      </a-form-model-item>

      <a-form-model-item has-feedback prop="cpf" label="CPF">
        <a-input
          v-model="formCadastroFreelancer.cpf"
          v-mask="`###.###.###-##`"
          class="secondary"
          placeholder="CPF"
        />
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'CadastroFreelancer',
  data() {
    return {
      formCadastroFreelancer: {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cadastro-freelancer{
  &__title{
    h2{
      color: #FFB400;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1.5rem;
      margin-bottom: 0;
      line-height: 26px;
    }
  }
}
</style>

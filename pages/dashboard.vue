<template>
  <div class="dashboard">
    <div class="title">
      <h2>Bem-Vindo</h2>
      <p>{{ $auth.user.nome }} {{ $auth.user.sobrenome }}</p>
    </div>

    <div class="equipamentos-alugados">
      <h2 class="equipamentos-alugados__title title-box">
        Equipamentos alugados
      </h2>
      <div class="equipamentos-alugados__box">
        <p>Por enquanto você ainda não alugou nenhum equipamento</p>

        <nuxt-link to="/cursos" type="primary" class="btn-to-equipamentos">
          Ver equipamentos
        </nuxt-link>
      </div>
    </div>

    <section class="redes-roteiro-cursos">
      <div class="redes">
        <p>Redes</p>
      </div>
      <div class="roteiro">
        <h2>Cadastrar Roteiro</h2>
      </div>
      <div class="cursos">
        <p>Cursos</p>
      </div>
    </section>

    <button @click="logout">
      sair
    </button>
  </div>
</template>

<script>
export default {
  layout: "logged",
  middleware: "auth",
  methods: {
    async logout () {
      try {
        await this.$auth.logout();
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 80px;
  margin-left: 36px;
  margin-right: 36px;
  .title {
    margin-bottom: 50px;
    h2 {
      color: $primary-yellow;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1.5rem;
      margin-bottom: 0;
      line-height: 26px;
    }

    p {
      font-weight: 800;
      font-size: 1.125rem;
      color: $neutral-dark;
    }
  }

  .title-box {
    font-weight: 500;
    font-size: 1.125rem;
    margin-bottom: 10px;
    line-height: 20px;
    color: $neutral-dark;
  }

  .equipamentos-alugados {
    margin-bottom: 40px;
    &__box {
      background: #fff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      min-height: 260px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        font-size: 1.54rem;
        text-transform: uppercase;
        color: $primary-yellow;
        font-weight: 500;
      }

      .btn-to-equipamentos{
        margin-top: 60px;
        background: $secondary-dark;
        padding: 12px 50px;
        color: #FFF;
        border-radius: 4px;
        font-weight: 500;
        transition: .3s background ease-in;

        &:hover{
          background: $primary-yellow;
        }
      }
    }
  }

  .redes-roteiro-cursos{
    display: flex;
    justify-content: space-between;
    column-gap: 30px;

    .redes{
      width: 30%;
      background: #FFF;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      height: 500px;
    }
    .roteiro{
      width: 40%;
      background: #FFF;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      height: 500px;
    }
    .cursos{
      width: 30%;
      background: #FFF;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      height: 500px;
    }
  }
}
</style>

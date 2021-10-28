<template>
  <transition name="fade">
    <div class="index">
      <div class="container">
        <section class="banner">
          <div class="banner__left">
            <h1>
              A Plataforma que vai te<br>
              inserir no mundo do<br>
              audiovisual!
            </h1>
            <a-button type="primary" class="btn-primary">
              Conheça nossos serviços
            </a-button>
          </div>

          <div class="banner__right">
            <img src="~/assets/img/banner-img.png" alt="Mundo Audiovisual">
          </div>
        </section>

        <!-- <button @click="testLogin">Apertar para logar</button>
        <button @click="recDados">Apertar para recuperar dados</button> -->
        <section class="servicos">
          <h2 class="subtitle-primary">
            o que nós oferecemos
          </h2>

          <div
            class="servicos__item servicos__item-left servicos__item-aluguel"
          >
            <h3 class="servicos__item-title">
              Aluguel de equipamentos
            </h3>

            <p>
              Você não precisa gastar rios de dinheiro para conseguir um
              equipamento profissional para levar pra frente seu projeto.
            </p>
            <p>
              Na lincer você pode alugar esses equipamentos por um preço bem
              mais acessível para uma produção <span>profissional</span>,
              gastando
              <span>pouco</span>
            </p>
          </div>

          <div
            class="servicos__item servicos__item-right servicos__item-aluguel"
          >
            <h3 class="servicos__item-title">
              Serviços Freelancer
            </h3>

            <p>
              Você trabalha com <span>audiovisual</span> e quer fazer algum
              freela? Nós temos uma plataforma própria para você oferecer seus
              serviços!
            </p>
            <p>
              Da mesma fora, se você precisa de algo, publique um serviço para a
              comunidade de freelancers!
            </p>
          </div>

          <div
            class="servicos__item servicos__item-left servicos__item-aluguel"
          >
            <h3 class="servicos__item-title">
              Cursos de audiovisual
            </h3>

            <p>
              Nós oferecemos cursos de todos os níveis pra você iniciar com o pé
              direito, ou aprender sobre algo novo!
            </p>
            <p>
              Você tambem pode criar seu próprio curso e publicar na nossa
              plataforma!
            </p>
          </div>

          <div
            class="servicos__item servicos__item-right servicos__item-aluguel"
          >
            <h3 class="servicos__item-title">
              Plataforma própria
            </h3>

            <p>
              Nós oferecemos uma plataforma própria para você organizar suas
              criações e gerenciar seus cursos e equipamentos alugados
            </p>
            <p>
              Além de divulgar seu trabalho pras outras pessoas, você ainda
              consegue gerenciar os seus projetos!
            </p>
          </div>
        </section>
      </div>

      <section class="assinatura">
        <div class="assinatura__left">
          <h2>
            Assinatura Lincer<br>
            Premium
          </h2>
        </div>
        <div class="assinatura__right">
          <div class="assinatura__right-box">
            <h2>Principais Beneficios</h2>

            <div class="assinatura__right-box--items">
              <p>Acesso a vários cursos da nossa plataforma</p>
              <p>
                Prioridade na criação de serviços e na hora de enviar propostas
              </p>
              <p>Aluguel de equipamentos mais em conta</p>
              <p>Prioridade ao publicar seus cursos</p>
            </div>

            <button v-wave class="btn-assinatura" onclick="$increazyCheckoutPay('lincer-premium')">
              Quero virar assinante
            </button>
          </div>
        </div>
      </section>

      <section class="box-products">
        <BoxService
          class="box-service__item"
          title="alugar equipamentos"
          link="/equipamentos"
          image="box-service-produtos.png"
        />

        <BoxService
          class="box-service__item"
          title="Ver nossos cursos"
          link="/cursos"
          image="box-service-cursos.png"
        />
      </section>
      <div class="container">
        <section class="blog">
          <h2 class="subtitle-primary">
            Conheça nosso Blog
          </h2>
          <div class="blog__posts">
            <div
              v-for="(post, index) in blogPosts"
              :key="index"
              class="blog__posts-post"
            >
              <BlogPost :post="post" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import AuthService from "@/service/user/auth-service.js";

export default {
  layout: "notLogged",
  data () {
    return {
      blogPosts: [
        {
          title: "Título do post 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate egestas imperdiet. Donec felis erat, maximus ut viverra ac, convallis id nibh. Etiam...",
        },
        {
          title: "Título do post 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate egestas imperdiet. Donec felis erat, maximus ut viverra ac, convallis id nibh. Etiam...",
        },
        {
          title: "Título do post 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate egestas imperdiet. Donec felis erat, maximus ut viverra ac, convallis id nibh. Etiam...",
        },
      ],
    };
  },
  methods: {
    async testLogin () {
      const res = await AuthService.login({
        email: "testejwt@gmail.com",
        password: "senhateste",
      });
      this.$cookies.set("x-access-token", res.data.token);
    },
    async recDados () {
      const token = this.$cookies.get("x-access-token");
      await AuthService.getUser(token);
    },
  },
};
</script>

<style lang='scss' scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 2s ease;
}
.index {
  overflow-x: hidden;
}

.subtitle-primary {
  font-size: 1.75rem;
  color: $neutral-dark;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 88px;
    background: $primary-yellow;
    margin: 8px auto 0;
  }
}

.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0 80px;

  &__left {
    h1 {
      font-size: 3rem;
      line-height: 56px;
      font-weight: 800;
      color: $neutral-dark;
    }
  }

  @media (max-width: 1024px) {
    &__left {
      h1 {
        font-size: 2rem;
        line-height: 40px;
      }
    }

    &__right {
      max-width: 200px;
      img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 576px) {
    &__left {
      h1 {
        font-size: 1.5rem;
        line-height: 32px;
      }
    }
  }
}

.servicos {
  display: flex;
  flex-direction: column;
  &__item {
    max-width: 740px;
    margin-bottom: 50px;
    &-title {
      font-size: 3rem;
      line-height: 56px;
      color: $primary-yellow;
      font-weight: 800;
      margin-bottom: 16px;
    }

    &-right {
      align-self: flex-end;
    }

    p {
      color: $neutral-dark;
      font-size: 1.5rem;
      font-weight: 500;

      span {
        color: $primary-yellow;
      }
    }
  }

  @media (max-width: 1024px) {
    &__item {
      &-title {
        font-size: 1.5rem;
        line-height: 32px;
        margin-bottom: 8px;
      }

      p {
        font-size: 1rem;
      }
    }
  }
}

.assinatura {
  display: flex;
  height: 800px;

  &__left {
    background: url("~/assets/img/assinatura-img.png") no-repeat center;
    background-size: cover;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 3rem;
      color: $neutral-white;
      font-weight: 800;
      text-align: center;
      letter-spacing: 1px;
    }
  }

  &__right {
    width: 50%;
    background: $primary-yellow;
    display: flex;
    align-items: center;

    &-box {
      background: $neutral-white;
      padding: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 4px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-left: -80px;

      h2 {
        font-size: 1.5rem;
        color: $neutral-dark;
        text-transform: uppercase;
        font-weight: 700;
      }

      p {
        font-size: 1.125rem;
        color: $neutral-dark;
        margin-bottom: 25px;
        font-weight: 500;
        text-align: center;
      }
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    height: auto;

    &__left {
      width: 100%;
      height: 280px;

      h2 {
        font-size: 2rem;
      }
    }

    &__right {
      width: 100%;
      height: 280px;
      padding: 0 24px;

      &-box {
        margin-left: initial;
        margin: -150px auto 0 auto;

        p {
          font-size: 0.875rem;
        }

        button {
          margin-top: 16px;
        }
      }
    }
  }
}

.box-products {
  display: flex;

  @media (max-width: 1300px) {
    flex-direction: column;

    .box-service__item::v-deep {
      width: 100%;

      .box__image {
        height: 280px;
        background-position: bottom;

        h2 {
          font-size: 1.25rem;
          margin-bottom: 32px;
        }
        &:hover {
          transform: scale(1);
        }
      }
    }
  }
}

.blog {
  margin: 40px 0;
  &__posts {
    display: flex;
    justify-content: center;

    :nth-child(2) {
      margin: 0 20px;
    }
  }

  @media (max-width: 768px) {
    &__posts {
      flex-direction: column;
      overflow: auto;

      :nth-child(2) {
        margin: 20px 0;
      }
    }
  }
}

.btn-assinatura{
  background: $primary-yellow;
  border: none;
  padding: 20px 100px;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 700;
  cursor: pointer;
}
</style>

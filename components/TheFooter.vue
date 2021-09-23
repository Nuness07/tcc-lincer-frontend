<template>
  <footer>
    <div class="footer">
      <div class="container footer__wrapper">
        <div class="footer__contato">
          <h2 class="footer__title">Como falar com a gente?</h2>
          <div class="footer__contato-wrapper">
            <div class="footer__contato-wrapper--left">
              <div class="footer__contato-item">
                <img src="~/assets/img/icons/whatsapp.svg" alt="whatsapp" />
                <p>(11) 97070-7070</p>
              </div>
              <div class="footer__contato-item">
                <img src="~/assets/img/icons/mail.svg" alt="e-mail" />
                <p>contato@lincer.com.br</p>
              </div>
              <div class="footer__contato-item">
                <img src="~/assets/img/icons/localization.svg" alt="whatsapp" />
                <p>
                  Rua 1500, 820 - 2401<br />
                  Centro, São Paulo-SP<br />
                  03535-000
                </p>
              </div>
            </div>

            <div class="footer__contato-wrapper-right">
              <div class="footer__contato-item">
                <img src="~/assets/img/icons/phone.svg" alt="whatsapp" />
                <p>(11) 7070-7070</p>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__newsletter">
          <h2 class="footer__title">Receba nossas novidades</h2>

          <a-input
            v-model="emailNewsletter"
            class="primary"
            placeholder="Digite o seu melhor e-mail :)"
          />
          <a-button type="secondary" class="btn-secondary"> Enviar </a-button>
        </div>

        <div class="footer__social">
          <h2 class="footer__title">Nossas redes sociais</h2>

          <div class="footer__social-icons">
            <a href="#"
              ><img
                class="icon-media"
                src="~/assets/img/icons/facebook.svg"
                alt="facebook"
            /></a>
            <a href="#"
              ><img
                class="icon-media"
                src="~/assets/img/icons/youtube.svg"
                alt="youtube"
            /></a>
            <a href="#"
              ><img
                class="icon-media"
                src="~/assets/img/icons/instagram.svg"
                alt="instagram"
            /></a>
            <a href="#"
              ><img
                class="icon-media"
                src="~/assets/img/icons/linkedin.svg"
                alt="linkedin"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <p>Copyright 2021 - Lincer Audiovisual</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      emailNewsletter: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1242px;
  margin: 0 auto;
}

.footer {
  background: $secondary-dark;
  padding: 43px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-size: 1.125rem;
    color: $neutral-white;
    font-weight: 500;
    margin-bottom: 30px;
  }

  &__contato {
    &-wrapper {
      display: flex;
      column-gap: 20px;
    }

    &-item {
      display: flex;
      align-items: center;
      column-gap: 5px;
      margin-bottom: 20px;

      p {
        margin-bottom: 0;
        font-size: 0.875rem;
        color: $neutral-white;
        font-weight: 400;
        font-family: $font-family-roboto;
      }
    }
  }

  &__social {
    &-icons {
      display: flex;
      align-items: center;
      column-gap: 20px;

      .icon-media {
        transition: 0.3s transform;

        &:hover {
          transform: scale(2);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    &__wrapper {
      flex-direction: column;

      .footer__newsletter {
        margin: 32px 0;
        max-width: 380px;
      }
    }

    &__title {
      margin-bottom: 16px;
    }

    &__contato {
      &-wrapper {
        flex-direction: column;
      }
    }
  }
}

.copyright {
  background: $background-gray !important;
  height: 80px;
  padding-top: 35px;

  p {
    color: $neutral-dark;
    font-family: $font-family-roboto;
    font-weight: 500;
  }
}
</style>

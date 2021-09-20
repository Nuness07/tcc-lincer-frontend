<template>
  <section class="details">
    <div class="container">
      <div class="details__left">
        <nuxt-link to="/cursos">
          <OutlineChevronLeftIcon /> Voltar para os cursos
        </nuxt-link>
        <div class="details__left-content">
          <h2>Título do curso</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius nisi sed urna semper, ut dictum enim finibus. Praesent lacus
            dui, vulputate ac mauris eu, ultricies vehicula leo. Nullam
            condimentum eget dolor ut blandit. Cras nunc diam, maximus sed
            pellentesque id, facilisis at ligula. Integer rhoncus felis vitae
            massa bibendum, in tristique risus interdum. Curabitur sit amet
            venenatis justo, a accumsan nisi. Nullam porttitor lobortis nisl, at
            fermentum ante suscipit in. Sed nec eleifend lacus. Mauris a erat
            purus. Curabitur tempus lacinia luctus. Aenean erat quam, aliquet
            nec mauris at, egestas tempor erat.
          </p>

          <ul>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
            <li>• Item que o curso aborda</li>
          </ul>

          <div class="embed-responsive">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="details__right">
        <div class="details__top">
          <OutlineLockClosedIcon />
          <p>
            Assine nossa plataforma para obter acesso a esse conteúdo e muitos
            outros
          </p>

          <a-button type="primary">ASSINE AGORA</a-button>

          <small>OU</small>
          <p>Se você ja for assinante, faça login para acessar ao curso</p>
          <a-button type="primary">LOGIN</a-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "notLogged",
};
</script>

<style lang="scss" scoped>
.details {
  margin-bottom: 32px;

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .details__left {
    width: calc(60% - 15px);
    a {
      display: flex;
      align-items: center;
      border: 0;
      background: none;
      color: $primary-yellow;
      cursor: pointer;
      padding: 8px 0;
      margin: 16px 0;

      svg {
        width: 24px;
        margin-right: 8px;
      }
    }

    .details__left-content {
      h2 {
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 8px;
      }

      ul {
        column-count: 2;
        margin-top: 32px;
      }

      p,
      li {
        font-size: 0.875rem;
      }

      .embed-responsive {
        position: relative;
        max-width: 100%;
        width: 100%;
        padding-top: 56.25%;
        margin-top: 32px;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          border-radius: 16px;
        }
      }
    }
  }

  .details__right {
    margin-top: 40px;
    width: calc(40% - 15px);

    .details__top {
      background: #fff;
      border-radius: 8px;
      padding: 64px 16px;

      svg {
        width: 75px;
        margin: 0 auto;
      }
    }
  }
}
</style>
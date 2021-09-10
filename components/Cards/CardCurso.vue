<template>
  <article class="card-curso">
    <picture>
      <img src="@/assets/img/box-service-produtos.png" alt="Curso" />
    </picture>
    <div class="card-curso__body">
      <h3>Título do curso</h3>

      <div class="card-curso__itens">
        <div class="card-curso__item">
          <SolidChartBarIcon />
          <div class="card-curso__right">
            <small>Nível</small>
            <p>Intermediário</p>
          </div>
        </div>

        <div class="card-curso__item">
          <SolidGlobeIcon />
          <div class="card-curso__right">
            <small>Linguagem</small>
            <p>Português</p>
          </div>
        </div>

        <div class="card-curso__item">
          <SolidAcademicCapIcon />
          <div class="card-curso__right">
            <small>Professor</small>
            <p>Gerder Silva</p>
          </div>
        </div>

        <div class="card-curso__item">
          <SolidClockIcon />
          <div class="card-curso__right">
            <small>Duração</small>
            <p>20h</p>
          </div>
        </div>
      </div>

      <a-button type="primary">Acessar curso</a-button>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-curso {
  border-radius: 8px;
  overflow: hidden;
  background: $neutral-white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.3s;

  picture {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 56.25%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .card-curso__body {
    padding: 8px 16px;
    h3 {
      margin-top: 8px;
      margin-bottom: 16px;
      font-weight: bold;
    }

    .card-curso__itens {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .card-curso__item {
        width: calc(100% / 2 - 8px);
        display: flex;
        align-items: center;

        &:nth-child(1),
        &:nth-child(2) {
          margin-bottom: 16px;
        }

        .card-curso__right {
          margin-left: 8px;
          small {
            display: block;
            color: $primary-yellow;
            margin-bottom: 0px;
            font-size: 12px;
          }

          p {
            font-size: 14px;
          }
        }

        svg {
          width: 20px;
          color: $primary-yellow;
        }
      }
    }

    button {
      width: 100%;
      margin-top: 16px;
    }
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 10px;
  }
}
</style>

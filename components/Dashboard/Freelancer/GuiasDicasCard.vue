<template>
  <div class="card">
    <picture>
      <img src="@/assets/img/banner-bg.png" alt="asd" />
    </picture>
    <h3>Dicas After Efects</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate
      egestas imperdiet. Donec felis erat, maximus ut viverra.Etiam...
    </p>
    <a-button type="primary">Acessar</a-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  picture {
    display: flex;
    align-items: center;
    padding-top: 56.25%;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      max-width: 100%;
      width: 100%;
    }
  }

  h3 {
    font-size: 1.2rem;
    line-height: 24px;
    margin: 8px 0;
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 16px !important;
  }

  .ant-btn {
      width: 100%;
  }
}
</style>
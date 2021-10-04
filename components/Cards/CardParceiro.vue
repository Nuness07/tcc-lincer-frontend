<template>
  <div class="card-parceiro">
    <picture>
      <img :src="imgUrl" :alt="title" />
    </picture>

    <div class="card-parceiro__content">
      <h2>{{ title }}</h2>

      <p><SolidStarIcon /> Parceiro premium</p>
      <a-button type="primary">Conheça <OutlinePlusIcon /> </a-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-parceiro {
  border-radius: 8px;
  overflow: hidden;
  background: #FFF;

  picture {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 56.25%;

    img {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 16px;

    h2 {
      margin-bottom: 8px;
    }

    p {
      display: flex;
      align-items: center;
      font-weight: bold;
      margin-bottom: 16px !important;
      svg {
        width: 20px;
        margin-right: 8px;
        color: $primary-yellow;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 20px;
        margin-left: 8px;
      }
    }
  }
}
</style>
<template>
  <nuxt-link class="box" :to="link">
    <div
      :style="{ backgroundImage: `url(${require(`~/assets/img/${image}`)})`}"
      class="box__image"
    >
      <h2>{{ title }}</h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BoxService',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  width: 50%;

  &__image{
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: .3s transform;

    &:hover{
      transform: scale(1.05);
    }

    h2{
      font-size: 1.75rem;
      color: $neutral-white;
      font-weight: 800;
      text-transform: uppercase;
    }
  }
}
</style>

<template>
  <div class="roadMapCard" @click="$emit('openroteiro')">
    <h2 class="roadMapCard__title">
      {{ infoRoadMapCard.nome }}
    </h2>
    <p class="roadMapCard__text">
      {{ infoRoadMapCard.texto }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BoxService',
  props: {
    infoRoadMapCard: {
      type: Object,
      required: true
    }
  },
  emits: ['openroteiro'],
}
</script>

<style lang="scss" scoped>
.roadMapCard{
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;

  &__title{
    color: $primary-yellow;
    margin-bottom: 0;
  }
}
</style>

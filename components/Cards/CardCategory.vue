<template>
  <div class="card-category">
    <slot name="icon"></slot>
    <h3>{{ titleCategory }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    titleCategory: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-category {
  background: rgb(250, 250, 250);
  background: linear-gradient(
    0deg,
    rgba(250, 250, 250, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.3s;
  border-radius: 8px;
  cursor: pointer;

  svg {
    width: 36px;
    color: $neutral-gray;
    margin-bottom: 16px;
  }

  h3 {
    color: $primary-yellow;
    transition: all 0.3s;
    font-weight: bold;
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 32px;
    background: $primary-yellow;

    h3 {
      color: #fff;
    }
  }
}
</style>
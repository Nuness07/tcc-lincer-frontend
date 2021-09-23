<template>
  <div class="lds-ring">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>

<script>
export default {
  name: "CircleLoading",
  props: {
    styles: {
      type: Object,
      default () {
        return {
          background: "#0057b8",
          width: "16px",
          heigth: "16px",
          borderColor: "#0057b8",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.lds-ring {
  display: flex;
  width: 16px;
  height: 16px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  border: 3px solid #4AC7F0;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #4AC7F0 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

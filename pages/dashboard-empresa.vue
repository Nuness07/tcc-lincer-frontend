<template>
  <div class="dashboard-empresa__wrapper">
    {{ $auth.user }}
  </div>
</template>

<script>
export default {
  layout: "logged",
  middleware: "auth",
};
</script>

<style lang="scss" scoped>

</style>

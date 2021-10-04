<template>
  <div class="dashboard-freelancer">
    <AprovacaoFreelancer v-if="$auth.user.is_freelancer_aprovado && !$auth.user.is_freelancer" />
    <AprovadoFreelancer v-if="$auth.user.is_freelancer_aprovado && $auth.user.is_freelancer" />
    <CadastroFreelancer v-if="!$auth.user.is_freelancer_aprovado && !$auth.user.is_freelancer" />
  </div>
</template>

<script>
export default {
  name: 'Dashboard freelancer',
  layout: 'logged',
  middleware: 'auth',
}
</script>

<style lang="scss" scoped>
.dashboard-freelancer{
  margin-top: 80px;
  margin-left: 36px;
  margin-right: 36px;
}
</style>

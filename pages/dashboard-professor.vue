<template>
  <div class="dashboard-professor">
    <AprovacaoProfessor v-if="$auth.user.is_professor_aprovado && !$auth.user.is_professor" />
    <AprovadoProfessor v-if="$auth.user.is_professor_aprovado && $auth.user.is_professor" />
    <CadastroProfessor v-if="!$auth.user.is_professor_aprovado && !$auth.user.is_professor" />
  </div>
</template>

<script>
export default {
  name: 'Dashboard professor',
  layout: 'logged',
}
</script>

<style lang="scss" scoped>

</style>

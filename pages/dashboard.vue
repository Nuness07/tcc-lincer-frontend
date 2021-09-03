<template>
  <div class="dashboard">
    <p>Dashboard</p>
    <pre>{{ $auth.user }}</pre>

    <button @click="logout">
      sair
    </button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    async logout () {
      try {
        await this.$auth.logout()
        this.$router.push('/login')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>

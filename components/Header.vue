<template>
  <header class="header">
    <div class="header__logo">
      <img src="~/assets/img/logo.svg" alt="logo">
    </div>
    <nav class="header__nav">
      <ul class="header__nav-ul">
        <li class="header__nav-item">
          <nuxt-link class="header__nav-item--link" to="/">
            Home
          </nuxt-link>
        </li>
        <li class="header__nav-item">
          <nuxt-link class="header__nav-item--link" to="/cursos">
            Cursos
          </nuxt-link>
        </li>
        <li class="header__nav-item">
          <nuxt-link class="header__nav-item--link" to="/equipamentos">
            Equipamentos
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <nuxt-link to="/login">
      <a-button type="primary" class="btn-primary">
        Plataforma do criador
      </a-button>
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    border-bottom: 1px solid $border-gray;

    .header__nav-ul{
      display: flex;
      align-items: center;
      margin-bottom: 0 !important;

      :nth-child(2){
        margin: 0 76px;
      }

      .header__nav-item{
        height: 85px;
        display: flex;
        align-items: center;
        .header__nav-item--link{
          display: flex;
          align-items: center;
          height: 100%;
          color: $neutral-gray;
          font-family: $font-family-roboto;
          font-size: 1rem;
          font-weight: 400;

          &:hover{
            color: $primary-yellow;
            border-bottom: 4px solid $primary-yellow;
          }
        }
      }
    }
  }
</style>

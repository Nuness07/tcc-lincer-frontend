<template>
  <header class="header">
    <div class="header__logo">
      <img src="~/assets/img/logo.svg" alt="logo" />
    </div>
    <nav v-if="showMenu || $vssWidth > 1024" class="header__nav">
      <ul class="header__nav-ul">
        <li class="header__nav-item">
          <nuxt-link class="header__nav-item--link" to="/"> Home </nuxt-link>
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
        <li class="header__nav-item">
          <nuxt-link class="header__nav-item--link" to="/servicos">
            Serviços
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="header__right">
      <nuxt-link to="/login">
        <a-button v-wave type="primary" class="btn-primary">
          Plataforma do criador
        </a-button>
      </nuxt-link>
      <button class="btn-mobile-menu" @click="showMenu = !showMenu">
        <OutlineMenuAlt3Icon v-if="!showMenu" />
        <OutlineXIcon v-else />
      </button>
    </div>
  </header>
</template>

<script>
import NuxtSSRScreenSize from "nuxt-ssr-screen-size";

export default {
  name: "Header",
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-bottom: 1px solid $border-gray;

  .header__nav-ul {
    display: flex;
    align-items: center;
    margin-bottom: 0 !important;

    :not(:last-child) {
      margin-right: 76px;
    }

    .header__nav-item {
      height: 85px;
      display: flex;
      align-items: center;
      .header__nav-item--link {
        display: flex;
        align-items: center;
        height: 100%;
        color: $neutral-gray;
        font-family: $font-family-roboto;
        font-size: 1rem;
        font-weight: 400;

        &:hover {
          color: $primary-yellow;
          border-bottom: 4px solid $primary-yellow;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    position: relative;

    .header__logo {
      img {
        width: 80px;
      }
    }

    .header__nav {
      position: absolute;
      width: calc(100vw - 7px);
      left: -16px;
      top: 100%;
      background: #fff;
      z-index: 10;
      padding-bottom: 16px;

      ul {
        display: flex;
        flex-direction: column;

        li {
          width: 100%;
          padding: 0 16px;
          a {
            width: 100%;
          }
        }
      }
    }
  }

  .header__right {
    display: flex;

    .btn-mobile-menu {
      display: none;
      align-items: center;
      justify-content: center;
      width: 41px;
      height: 41px;
      border-radius: 4px;
      border: 0;
      margin-left: 16px;
      svg {
        width: 24px;
      }
    }

    @media (max-width: 1024px) {
      .btn-mobile-menu {
        display: flex;
      }
    }
  }
}
</style>

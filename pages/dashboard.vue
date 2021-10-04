<template>
  <div class="dashboard-wrapper">
    <CircleLoading v-if="loading" style="margin: 0 auto" />
    <div v-else class="dashboard">
      <div class="title">
        <h2>Bem-Vindo</h2>
        <p>{{ $auth.user.nome }} {{ $auth.user.sobrenome }}</p>
      </div>

      <div class="equipamentos-alugados">
        <h2 class="equipamentos-alugados__title title-box">
          Equipamentos alugados
        </h2>
        <div class="equipamentos-alugados__box">
          <p>Por enquanto você ainda não alugou nenhum equipamento</p>

          <nuxt-link to="/cursos" type="primary" class="btn-to-equipamentos">
            Ver equipamentos
          </nuxt-link>
        </div>
      </div>

      <section class="redes-roteiro-cursos">
        <div class="redes">
          <div class="redes__item redes__item-spotify">
            <img src="@/assets/img/logo-spotify.png" alt="spotify">
            <a
              v-if="$auth.user.link_spotify"
              :href="$auth.user.link_spotify"
              target="_blank"
              class="to-media"
            >
              Acessar
            </a>
            <p v-else class="add-link" @click="$vm2.open('editar-spotify')">
              Conectar Spotify
            </p>
          </div>
          <div class="redes__item redes__item-deezer">
            <img src="@/assets/img/logo-deezer.png" alt="deezer">
            <a
              v-if="$auth.user.link_deezer"
              :href="$auth.user.link_deezer"
              target="_blank"
              class="to-media"
            >
              Acessar
            </a>
            <p v-else class="add-link" @click="$vm2.open('editar-deezer')">
              Conectar Deezer
            </p>
          </div>
          <div class="redes__item redes__item-twitch">
            <img src="@/assets/img/logo-twitch.png" alt="twitch">
            <a
              v-if="$auth.user.link_twitch"
              :href="$auth.user.link_twitch"
              target="_blank"
              class="to-media"
            >
              Acessar
            </a>
            <p v-else class="add-link" @click="$vm2.open('editar-twitch')">
              Conectar Twitch
            </p>
          </div>
          <div class="redes__item redes__item-youtube">
            <img src="@/assets/img/logo-youtube.png" alt="youtube">
            <a
              v-if="$auth.user.link_youtube"
              :href="$auth.user.link_youtube"
              target="_blank"
              class="to-media"
            >
              Acessar
            </a>
            <p v-else class="add-link" @click="$vm2.open('editar-youtube')">
              Conectar Youtube
            </p>
          </div>
        </div>
        <div class="roteiro">
          <div v-if="$auth.user.roteiros.length <= 0" class="roteiro__limpo">
            <h2 class="roteiro__limpo-title">
              Cadastrar Roteiro
            </h2>
            <a class="roteiro__limpo-newRoadmap" @click="addRoadMap">
              <OutlinePlusIcon style="color: #000; width: 25px;" />
            </a>
          </div>

          <div v-else class="roteiro__cards">
            <div v-for="roteiro in $auth.user.roteiros" :key="roteiro.id_roteiro" class="roteiro_card">
              <CardRoteiro class="card-roteiro" :info-road-map-card="roteiro" @openroteiro="openRoteiro(roteiro.id_roteiro)" />
            </div>

            <div class="roteiro__cards-add">
              <a class="roteiro__cards-add-button" @click="addRoadMap">
                Adicionar novo roteiro
                <OutlinePlusIcon style="color: #000; width: 25px;" />
              </a>
            </div>
          </div>
        </div>
        <div class="cursos">
          <div class="cursos__limpo">
            <h2 class="cursos__limpo-title">
              Sem cursos na lista :(
            </h2>
            <nuxt-link class="cursos__limpo-newCurso" to="/cursos">
              Ver cursos
            </nuxt-link>
          </div>
        </div>
      </section>

      <client-only>
        <!-- INICIO MODAL SPOTIFY -->
        <vue-modal-2
          class="modal"
          name="editar-spotify"
          :header-options="{
            title: 'Adicionar Link Spotify',
          }"
          :no-footer="true"
          :modal-size="`xl`"
          @on-close="$vm2.close('editar-spotify')"
        >
          <a-form-model
            ref="formSpotify"
            :rules="rulesSpotify"
            :model="links"
          >
            <a-form-model-item
              class="form-item__title"
              prop="link_spotify"
              label="Link do spotify"
            >
              <a-input v-model="links.link_spotify" placeholder="Digite aqui" />
            </a-form-model-item>

            <a-button
              class="btn-nextStep"
              type="secondary"
              @click.prevent="checkLink('link_spotify', 'formSpotify', 'editar-spotify')"
            >
              Adicionar Link
            </a-button>
          </a-form-model>
        </vue-modal-2>
        <!-- FIM MODAL SPOTIFY -->
        <!-- INICIO MODAL DEEZER -->
        <vue-modal-2
          class="modal"
          name="editar-deezer"
          :header-options="{
            title: 'Adicionar Link Deezer',
          }"
          :no-footer="true"
          :modal-size="`xl`"
          @on-close="$vm2.close('editar-deezer')"
        >
          <a-form-model
            ref="formDeezer"
            :rules="rulesDeezer"
            :model="links"
          >
            <a-form-model-item
              class="form-item__title"
              prop="link_deezer"
              label="Link do deezer"
            >
              <a-input v-model="links.link_deezer" placeholder="Digite aqui" />
            </a-form-model-item>

            <a-button
              class="btn-nextStep"
              type="secondary"
              @click.prevent="checkLink('link_deezer', 'formDeezer', 'editar-deezer')"
            >
              Adicionar Link
            </a-button>
          </a-form-model>
        </vue-modal-2>
        <!-- FIM MODAL DEEZER -->
        <!-- INICIO MODAL TWITCH -->
        <vue-modal-2
          class="modal"
          name="editar-twitch"
          :header-options="{
            title: 'Adicionar Link twitch',
          }"
          :no-footer="true"
          :modal-size="`xl`"
          @on-close="$vm2.close('editar-twitch')"
        >
          <a-form-model
            ref="formTwitch"
            :rules="rulesTwitch"
            :model="links"
          >
            <a-form-model-item
              class="form-item__title"
              prop="link_twitch"
              label="Link do twitch"
            >
              <a-input v-model="links.link_twitch" placeholder="Digite aqui" />
            </a-form-model-item>

            <a-button
              class="btn-nextStep"
              type="secondary"
              @click.prevent="checkLink('link_twitch', 'formTwitch', 'editar-twitch')"
            >
              Adicionar Link
            </a-button>
          </a-form-model>
        </vue-modal-2>
        <!-- FIM MODAL TWITCH -->
        <!-- INICIO MODAL YOUTUBE -->
        <vue-modal-2
          class="modal"
          name="editar-youtube"
          :header-options="{
            title: 'Adicionar Link youtube',
          }"
          :no-footer="true"
          :modal-size="`xl`"
          @on-close="$vm2.close('editar-youtube')"
        >
          <a-form-model
            ref="formYoutube"
            :rules="rulesYoutube"
            :model="links"
          >
            <a-form-model-item
              class="form-item__title"
              prop="link_youtube"
              label="Link do youtube"
            >
              <a-input v-model="links.link_youtube" placeholder="Digite aqui" />
            </a-form-model-item>

            <a-button
              class="btn-nextStep"
              type="secondary"
              @click.prevent="checkLink('link_youtube', 'formYoutube', 'editar-youtube')"
            >
              Adicionar Link
            </a-button>
          </a-form-model>
        </vue-modal-2>
        <!-- FIM MODAL YOUTUBE -->

        <vue-modal-2
          class="modal"
          name="criar-roteiro"
          :header-options="{
            title: 'Criar Novo Roteiro',
          }"
          :no-footer="true"
          :modal-size="`xl`"
          @on-close="$vm2.close('criar-roteiro')"
        >
          <a-form-model
            ref="formRoteiro"
            :rules="rulesRoteiro"
            :model="roteiro"
          >
            <a-form-model-item
              class="form-item__title"
              prop="title"
              label="Título do roteiro"
            >
              <a-input v-model="roteiro.titulo" placeholder="Digite aqui" />
            </a-form-model-item>

            <a-form-model-item
              label="Texto do roteiro"
            >
              <VueEditor v-model="roteiro.texto" />
            </a-form-model-item>

            <a-button
              class="btn-nextStep"
              type="secondary"
              @click.prevent="createRoteiro"
            >
              Adicionar roteiro
            </a-button>
          </a-form-model>
        </vue-modal-2>

        <vue-modal-2
          class="modal"
          name="visualizar-roteiro"
          :header-options="{
            title: 'Visualizando Roteiro',
          }"
          :no-footer="true"
          :modal-size="`xl`"
          @on-close="$vm2.close('visualizar-roteiro')"
        >
          <div class="roteiro-title">
            <h2 class="roteiro-title__nome">
              {{ roteiroInfos.nome_roteiro }}
            </h2>

            <div class="roteiro-texto" v-html="roteiroInfos.texto" />
          </div>
        </vue-modal-2>
      </client-only>

      <!-- <button @click="logout">
        sair
      </button> -->
    </div>
  </div>
</template>

<script>
import UserService from "@/service/user/user-service.js";
export default {
  layout: "logged",
  middleware: "auth",
  data () {
    return {
      links: {
        link_spotify: null,
        link_deezer: null,
        link_twitch: null,
        link_youtube: null,
      },

      roteiro: {
        titulo: null,
        texto: null,
      },

      roteiroInfos: {},

      loading: false,

      rulesSpotify: {
        link_spotify: [{ required: true, message: "O campo do link é obrigatório" }],
      },
      rulesDeezer: {
        link_deezer: [{ required: true, message: "O campo do link é obrigatório" }],
      },
      rulesTwitch: {
        link_twitch: [{ required: true, message: "O campo do link é obrigatório" }],
      },
      rulesYoutube: {
        link_youtube: [{ required: true, message: "O campo do link é obrigatório" }],
      },
      rulesRoteiro: {
        titulo: [{ required: true, message: "O nome do roteiro é obrigatório" }]
      }
    };
  },
  methods: {
    async logout () {
      try {
        await this.$auth.logout();
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },

    async checkLink (value, form, modalName) {
      await this.$refs[form].validate((valid) => {
        this.loading = true;
        if (valid) {
          UserService.editarUser(
            this.$auth.user.id_usuario,
            { [value]: this.links[value] }
          );
          this.$toast.success("Link Adicionado com sucesso", {
            timeout: 2000
          })

          this.$vm2.close(form);
          this.$router.go()
        } else {
          console.log("formulário não foi preenchido corretamente");
        }
      });
      this.loading = false;
    },

    addRoadMap () {
      this.$vm2.open('criar-roteiro');
    },

    async createRoteiro () {
      await this.$refs.formRoteiro.validate((valid) => {
        if (valid) {
          const body = {
            id_usuario_relation: this.$auth.user.id_usuario,
            nome_roteiro: this.roteiro.titulo,
            texto: this.roteiro.texto
          }
          UserService.createRoteiro(body);
          this.$toast.success("Roteiro criado com sucesso", {
            timeout: 2000
          })

          this.$vm2.close('formRoteiro');
          this.$router.go();
        } else {
          console.log('Formulário não foi preenchido corretamente')
        }
      })
    },

    async openRoteiro (value) {
      const roteiro = await UserService.getRoteiro(value);
      this.roteiroInfos = roteiro.data;
      console.log('chamou');
      this.$vm2.open('visualizar-roteiro');
    }
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 80px;
  margin-left: 36px;
  margin-right: 36px;
  .title {
    margin-bottom: 50px;
    h2 {
      color: $primary-yellow;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1.5rem;
      margin-bottom: 0;
      line-height: 26px;
    }

    p {
      font-weight: 800;
      font-size: 1.125rem;
      color: $neutral-dark;
    }
  }

  .title-box {
    font-weight: 500;
    font-size: 1.125rem;
    margin-bottom: 10px;
    line-height: 20px;
    color: $neutral-dark;
  }

  .equipamentos-alugados {
    margin-bottom: 40px;
    &__box {
      background: #fff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      min-height: 260px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        font-size: 1.54rem;
        text-transform: uppercase;
        color: $primary-yellow;
        font-weight: 500;
      }

      .btn-to-equipamentos {
        margin-top: 60px;
        background: $secondary-dark;
        padding: 12px 50px;
        color: #fff;
        border-radius: 4px;
        font-weight: 500;
        transition: 0.3s background ease-in;

        &:hover {
          background: $primary-yellow;
        }
      }
    }
  }

  .redes-roteiro-cursos {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;

    .redes {
      width: 30%;
      background: #fff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      height: 500px;

      &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        height: 25%;

        &:not(:last-child) {
          border-bottom: 1px solid #dadada;
        }

        .add-link {
          color: $primary-yellow;
          font-size: 1.125rem;
          cursor: pointer;
        }
      }
    }
    .roteiro {
      width: 40%;
      background: #fff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      height: 500px;
      padding: 15px;
      position: relative;
    }
    .cursos {
      width: 30%;
      background: #fff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      height: 500px;
    }
  }
}

.vm2_modal-content{
  .ant-form{
    padding: 0 36px;
  }
  .ant-input{
    max-width: 250px;
    height: 36px;
  }

  .ant-btn{
    max-width: 250px;
    margin-bottom: 30px;
  }
}

.to-media{
  color: #000;
}

.roteiro{
  &__limpo{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 180px;

    &-title{
      font-size: 1.125rem;
      margin-bottom: 40px;
    }

    &-newRoadmap{
      background: $primary-yellow;
      padding: 15px;
      border-radius: 50%;
      display: flex;
    }
  }

  &__cards{
    height: 80%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  &__cards-add{
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    background: #FFF;
    left: 0;
    padding: 15px 0;

    &-button{
      display: flex;
      align-items: center;
      column-gap: 10px;
      background: $primary-yellow;
      color: $neutral-dark;
      padding: 5px 20px;
      border-radius: 4px;
      transition: .3s;

      &:hover{
        transform: scale(1.1);
      }
    }
  }
}

.roteiro__cards::-webkit-scrollbar-thumb{
  background: $primary-yellow !important;
  color: $primary-yellow !important;
}

.cursos{
  &__limpo{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 180px;

  &-title{
    font-size: 1.125rem;
    margin-bottom: 40px;
  }

  &-newCurso{
    background: $secondary-dark;
    padding: 12px 50px;
    color: #fff;
    border-radius: 4px;
    font-weight: 500;
    transition: 0.3s background ease-in;

    &:hover {
      background: $primary-yellow;
    }
  }
  }
}

.card-roteiro{
  cursor: pointer;

  &:hover{
    transform: scale(1.03);
    transition: .3s;
  }
}

.roteiro-title__nome{
  padding: 0 20px;
  color: $primary-yellow;
  font-weight: 700;
}

.roteiro-texto{
  max-height: 700px;
  padding: 0 20px;
  color: $neutral-dark;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 20px;
}
</style>

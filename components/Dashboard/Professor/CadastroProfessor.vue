<template>
  <div class="cadastro-professor">
    <div class="coluna-esquerda--container">
      <div v-if="etapa == 1" class="primeiroes-botes-wrapper">
        <section>
          <h3>Compartilhe seu conhecimento</h3>
          <p>Conte para nós qual a sua experiência dando aula ou ensinando outras pessoas:</p>
        </section>

        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_1 =
              'Pessoalmente, de maneira informal';
          "
        >
          Pessoalmente, de maneira informal
        </button>
        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_1 =
              'Pessoalmente, de maneira profissional';
          "
        >
          Pessoalmente, de maneira profissional
        </button>
        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_1 =
              'Online';
          "
        >
          Online
        </button>
        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_1 = 'Outro';
          "
        >
          Outro
        </button>
      </div>
    </div>
    <div class="coluna-esquerda--container">
      <div v-if="etapa == 2" class="primeiroes-botes-wrapper">
        <section>
          <h3>Qual sua experiência em cursos online?</h3>
          <p>Esperamos que você nos diga o quanto você sabe sobre criar cursos online para as outras pessoas</p>
        </section>

        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_2 =
              'Sou Novato';
          "
        >
          Sou Novato
        </button>
        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_2 =
              'Tenho certo conhecimento do assunto';
          "
        >
          Tenho certo conhecimento do assunto
        </button>
        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_2 =
              'Sou Experiente';
          "
        >
          Sou Experiente
        </button>
        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_2 = 'Tenho videos prontos para upload';
          "
        >
          Tenho videos prontos para upload
        </button>

        <a-button class="btn-voltar-etapa" type="primary" @click="voltarEtapa()">
          Voltar
        </a-button>
      </div>
    </div>
    <div class="coluna-esquerda--container">
      <div v-if="etapa == 3" class="primeiroes-botes-wrapper">
        <section>
          <h3>Amplie seu alcance</h3>
          <p>Conte para nós se você ja é conhecido nesse mundo ou se está iniciando agora:</p>
        </section>

        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_3 =
              'Estou iniciando agora';
          "
        >
          Estou iniciando agora
        </button>
        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_3 =
              'Tenho uma pequena base de seguidores';
          "
        >
          Tenho uma pequena base de seguidores
        </button>
        <button
          class="w100"
          @click="
            proximaEtapa();
            formCadastroProfessor.pergunta_professor_3 = 'Tenho uma base considerável de seguidores';
          "
        >
          Tenho uma base considerável de seguidores
        </button>

        <a-button class="btn-voltar-etapa" type="primary" @click="voltarEtapa()">
          Voltar
        </a-button>
      </div>
    </div>
    <div class="coluna-esquerda--container">
      <div v-if="etapa == 4" class="primeiroes-botes-wrapper">
        <section>
          <h3>Você confirma todas as suas respostas?</h3>
        </section>

        <p class="resposta-dada">
          Sua experiencia dando aula: {{ formCadastroProfessor.pergunta_professor_1 }}
        </p>
        <p class="resposta-dada">
          Sua experiencia em cursos online: {{ formCadastroProfessor.pergunta_professor_2 }}
        </p>
        <p class="resposta-dada">
          Sua comunidade: {{ formCadastroProfessor.pergunta_professor_3 }}
        </p>

        <div class="botoes-wrapper">
          <a-button class="btn-voltar-etapa" type="primary" @click="voltarFirstEtapa()">
            Responder novamente
          </a-button>
          <a-button class="btn-confirmarCadastro" type="primary" @click="confirmarCadastro()">
            Confirmar cadastro
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '~/service/user/user-service';
export default {
  name: 'CadastroProfessor',
  data () {
    return {
      formCadastroProfessor: {
        pergunta_professor_1: null,
        pergunta_professor_2: null,
        pergunta_professor_3: null,
      },

      etapa: 1,
    }
  },
  methods: {
    proximaEtapa () {
      this.etapa = this.etapa + 1;
    },

    voltarEtapa () {
      this.etapa = this.etapa - 1;
    },
    voltarFirstEtapa () {
      this.etapa = 1;
    },

    confirmarCadastro () {
      const data = {
        pergunta_professor_1: this.formCadastroProfessor.pergunta_professor_1,
        pergunta_professor_2: this.formCadastroProfessor.pergunta_professor_2,
        pergunta_professor_3: this.formCadastroProfessor.pergunta_professor_3,
        is_professor: true
      }

      UserService.editarUser(this.$auth.user.id_usuario, data);
    }
  }
}
</script>

<style lang="scss" scoped>
.cadastro-professor{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;

  &__title{
    h2{
      color: #FFB400;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1.5rem;
      margin-bottom: 0;
      line-height: 26px;
      text-align: center;
    }
  }
}

.primeiroes-botes-wrapper h3 {
  color: #191f23;
  font-weight: 300;
  font-size: 22px;
}
.w100{
  width: 100%;
}

.primeiroes-botes-wrapper p {
  color: #818488;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.25px;
  margin-top: 8px;
}

.primeiroes-botes-wrapper button {
  padding: 18px 0 17px;
  background: #FFF;
  border-radius: 5px;
  border: none;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 21px;
  color: #63666a;
  letter-spacing: 0.25px;
}

.primeiroes-botes-wrapper button:hover {
  cursor: pointer;
  background: $primary-yellow;
  color: #fff;
  transition: all 0.25s ease;
}

.btn-voltar-etapa{
    background-color: $primary-yellow;
    border-color: $primary-yellow;
    color: $primary-dark;
    font-size: 1rem;
    font-family: $font-family-roboto !important;
    width: 200px;
    margin-top: 20px;
}

.resposta-dada{
  margin-bottom: 15px !important;
  font-size: 1.125rem !important;
}

.botoes-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-confirmarCadastro{
  margin-bottom: 0 !important;
  background: $primary-yellow !important;
  padding: 18px 20px 17px !important;
}
</style>

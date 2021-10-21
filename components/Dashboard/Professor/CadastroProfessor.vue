<template>
  <div class="cadastro-freelancer">
    <div class="cadastro-freelancer__title">
      <h2>Cadastro Freelancer</h2>
      <p>Cadastre-se como freelancer para começar a mostrar o seu trabalho!</p>
    </div>

    <a-form-model ref="formCadastroFreelancer" class="cadastro-freelancer__form" :model="formCadastroFreelancer" :rules="rules">
      <a-form-model-item has-feedback prop="titulo_profissional" label="Título Profissional">
        <a-select default-value="Especialista em Audiovisual" style="width: 120px" @change="handleTituloProfissional">
          <a-select-option value="Especialista em Audiovisual">
            Especialista em Audiovisual
          </a-select-option>
          <a-select-option value="Especialista em Infraestrutura">
            Especialista em Infraestrutura
          </a-select-option>
          <a-select-option value="Roteirista">
            Roteirista
          </a-select-option>
          <a-select-option value="Editor">
            Editor de Vídeos
          </a-select-option>
          <a-select-option value="Designer">
            Designer
          </a-select-option>
          <a-select-option value="Sonoplasta">
            Designer
          </a-select-option>
          <a-select-option value="outro">
            Outro
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item v-if="titulo_is_outro" prop="titulo_profissional_outro" label="Digite aqui seu título profissional">
        <a-input
          v-model="formCadastroFreelancer.titulo_profissional"
          type="text"
          class="secondary"
          placeholder="Ex: Editor de vídeos"
        />
      </a-form-model-item>

      <a-form-model-item
        has-feedback
        prop="experiencia_profissional"
        label="Experiência Profissional"
      >
        <a-input
          v-model="formCadastroFreelancer.experiencia_profissional"
          type="textarea"
          allow-clear
          class="secondary"
          :auto-size="{ minRows: 5, maxRows: 15 }"
          placeholder="Descreva o que você ja fez na sua carreira"
        />
      </a-form-model-item>

      <a-form-model-item has-feedback prop="principais_habilidades" label="Principais Habilidades">
        <a-select class="select-tags" mode="tags" style="width: 100%" :token-separators="[',']" @change="handlePrincipaisHabilidades">
          <a-select-option v-for="habilidade in habilidades" :key="habilidade.nome">
            {{ habilidade.nome }}
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-button class="btn-send-freelancer" type="primary">
        Enviar para aprovação
      </a-button>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'CadastroFreelancer',
  data () {
    return {
      formCadastroFreelancer: {
        titulo_profissional: 'Especialista em Audiovisual',
        experiencia_profissional: null,
      },
      titulo_is_outro: false,

      habilidades: [
        {
          nome: 'Photoshop'
        },
        {
          nome: 'VFX'
        },
        {
          nome: 'Infraestrutura'
        },
        {
          nome: 'Sonoplastia'
        },
        {
          nome: 'Adobe Illustrator'
        },
        {
          nome: 'Ilustrador'
        },
        {
          nome: 'Pacote Adobe'
        },
      ]
    }
  },
  methods: {
    handleTituloProfissional (value) {
      if (value === 'outro') {
        this.formCadastroFreelancer.titulo_profissional = '';
        this.titulo_is_outro = true;
      } else {
        this.formCadastroFreelancer.titulo_profissional = value;
        this.titulo_is_outro = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cadastro-freelancer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

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

  &__form{
    width: 100%;
  }
}

.select-tags .ant-select-selection{
    height: auto !important;
  }

.select-tags.ant-select{
  height: auto !important;
}

.btn-send-freelancer{
  margin-top: 40px;
}
</style>

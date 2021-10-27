
// state
export const state = () => ({

  formStepOne: {},
  stepOneCheck: false,

  formStepTwo: {},
  stepTwoCheck: false,

  postForm: {},

  steps: {
    prevStep: 0,
    currentStep: 1,
    nextStep: 2
  }

});

// getters
export const getters = {

};

// actions
export const actions = {
};

// mutations
export const mutations = {
  SET_FORM_STEP (state, [step, form]) {
    state[step] = form;
    console.log(`form desse passo ${step}`, state[step]);
  },

  CHANGE_STEP (state, changeType) {
    if (changeType === 'next') {
      state.steps = {
        prevStep: state.steps.prevStep + 1,
        currentStep: state.steps.currentStep + 1,
        nextStep: state.steps.nextStep + 1
      }
    } else {
      state.steps = {
        prevStep: state.steps.prevStep - 1,
        currentStep: state.steps.currentStep - 1,
        nextStep: state.steps.nextStep - 1
      }
    }
  },

  MOUNT_POST_FORM (state) {
    state.postForm = {
      email: state.formStepOne.email,
      senha: state.formStepOne.password,
      nome: state.formStepOne.name,
      sobrenome: state.formStepOne.lastname,
      cpf: state.formStepOne.cpf,
      cep: state.formStepTwo.cep,
      uf: state.formStepTwo.uf,
      city: state.formStepTwo.city,
      street: state.formStepTwo.street,
      number: state.formStepTwo.number,
      complement: state.formStepTwo.complement,
      foto: "Lorem Ipsum",
      descricao: null,
      link_deezer: null,
      link_facebook: null,
      link_instagram: null,
      link_spotify: null,
      link_youtube: null,
      link_twitch: null,
      is_professor: false,
      is_freelancer: true,
      titulo_profissional: null,
      descricao_freelancer: null,
      experiencia_profissional: null,
      principais_habilidades: null,
      is_professor_aprovado: false,
      is_freelancer_aprovado: false,
      pergunta_professor_1: null,
      pergunta_professor_2: null,
      pergunta_professor_3: null,
      freelancer_verificado: null,
    }
  }
};


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
      cep: state.formStepTwo.cep,
      uf: state.formStepTwo.uf,
      city: state.formStepTwo.city,
      street: state.formStepTwo.street,
      number: state.formStepTwo.number,
      complement: state.formStepTwo.complement,
      cnpj: state.formStepOne.cnpj,
      telefone: '11979999999'
    }
  }
};

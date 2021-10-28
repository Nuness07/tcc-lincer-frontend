import api from '../api'

const CursoService = {
  getCurso: async (id) => {
    try {
      const res = await api.get(`/cursos/${id}`)
      return res
    } catch (err) {
      return err
    }
  },

  getModulo: async (id) => {
    try {
      const res = await api.get(`/modulos/${id}`)
      return res
    } catch (err) {
      return err
    }
  },

  cadastrarModulo: async (data) => {
    try {
      const res = await api.post('modulos', data)
      return res
    } catch (err) {
      return err
    }
  },

  cadastrarAula: async (data) => {
    try {
      const res = await api.post('aulas', data)
      return res
    } catch (err) {
      return err
    }
  },
}

export default CursoService;

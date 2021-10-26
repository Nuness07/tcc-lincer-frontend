import api from '../api'

const EmpresaService = {
  cadastrar: async (data) => {
    try {
      const res = await api.post('/usuarios', data)
      return res
    } catch (err) {
      return err
    }
  },

  editarUser: async (id, data) => {
    try {
      const res = await api.put(`/usuarios/${id}`, data)
      return res
    } catch (err) {
      return err
    }
  },

  createRoteiro: async (body) => {
    try {
      const res = await api.post('/roteiros', body)
      return res
    } catch (err) {
      return err
    }
  },

  getRoteiro: async (id) => {
    try {
      const res = await api.get(`/roteiros/${id}`)
      return res
    } catch (err) {
      return err
    }
  }
}

export default EmpresaService

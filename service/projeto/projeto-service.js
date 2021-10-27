import api from '../api'

const UserService = {
  getCategorias: async () => {
    try {
      const res = await api.get('/categorias_projeto')
      return res
    } catch (err) {
      return err
    }
  },

  cadastrarProjeto: async (data) => {
    try {
      const res = await api.post('projetos', data)
      return res
    } catch (err) {
      return err
    }
  },

  getProjeto: async (id) => {
    try {
      const res = await api.get(`projetos/${id}`)
      return res
    } catch (err) {
      return err
    }
  }
}

export default UserService

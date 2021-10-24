import api from '../api'

const UserService = {
  getCategorias: async () => {
    try {
      const res = await api.get('/categorias_projeto',)
      return res
    } catch (err) {
      return err
    }
  },
}

export default UserService

import api from '../api'

const UserService = {
  cadastrar: async (data) => {
    try {
      const res = await api.post('/usuarios', data)
      return res
    } catch (err) {
      return err
    }
  },
}

export default UserService

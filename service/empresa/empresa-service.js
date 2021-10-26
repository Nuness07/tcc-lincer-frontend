import api from '../api'

const EmpresaService = {
  cadastrar: async (data) => {
    try {
      const res = await api.post('/empresas', data)
      return res
    } catch (err) {
      return err
    }
  },
}

export default EmpresaService

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

  getCategorias: async () => {
    try {
      const res = await api.get('/categorias_equipamento')
      return res
    } catch (err) {
      return err
    }
  }
}

export default EmpresaService;

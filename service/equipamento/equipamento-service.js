import api from '../api'

const EquipamentosService = {
  cadastrar: async (data) => {
    try {
      const res = await api.post('/equipamentos', data)
      return res
    } catch (err) {
      return err
    }
  },

  getCategoria: async (id) => {
    try {
      const res = await api.get(`/categorias_equipamento/${id}`)
      return res
    } catch (err) {
      return err
    }
  },

  getEquipamento: async (id) => {
    try {
      const res = await api.get(`/equipamentos/${id}`)
      return res
    } catch (err) {
      return err
    }
  }
}

export default EquipamentosService;

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
}

export default EquipamentosService;

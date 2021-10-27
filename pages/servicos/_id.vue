<template>
  <div class="detalhes-servico container">
    <Servico :id="$route.params.id" />

    <div class="detalhes-relacionados">
      <h3>Veja mais projetos relacionados</h3>
      <CardServicos
        v-for="(item, index) in servicos"
        :key="index"
        :dados="item"
      />
    </div>
  </div>
</template>


<script>
import servicos from "@/components/Dashboard/Freelancer/Servicos/servicos.json";
export default {
  name: "Serviços",
  layout: "notLogged",
  data() {
    return {
      servicos: servicos,
    };
  },
};
</script>

<style lang="scss" scoped>
.detalhes-servico {
  margin-top: 80px;
  padding-bottom: 40px;

  .detalhes-relacionados {
    margin-top: 64px;

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 32px;
    }

    .card-servicos {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
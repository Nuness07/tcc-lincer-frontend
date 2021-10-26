<template>
  <div class="servicos">
    <div class="servicos__left">
      <h3>Filtros</h3>

      <div class="servicos__filtro-categoria">
        <h4>Categoria</h4>
        <a-checkbox @change="onChange"> Categoria 1 </a-checkbox>
        <a-checkbox @change="onChange"> Categoria 2 </a-checkbox>
        <a-checkbox @change="onChange"> Categoria 3 </a-checkbox>
        <a-checkbox @change="onChange"> Categoria 4 </a-checkbox>
      </div>

      <div class="servicos__filtro-data">
        <h4>Data de publicação</h4>
        <a-range-picker @change="onChange" />
      </div>

      <div class="servicos__filtro-preco">
        <h4>Faixa de preço</h4>
        <a-input-group compact>
          <a-input
            style="width: calc(50% - 15px)"
            placeholder="Mínimo"
            prefix="R$ "
          />
          <a-input
            style="
              width: 30px;
              border-left: 0;
              pointer-events: none;
              backgroundcolor: #fff;
            "
            placeholder="~"
          />
          <a-input
            style="width: calc(50% - 15px); border-left: 0"
            placeholder="Máximo"
            prefix="R$ "
          />
        </a-input-group>
      </div>

      <div class="servicos__filtro-tags">
        <h4>Filtro de tags</h4>
        <a-select
          mode="tags"
          style="width: 100%"
          placeholder="Tags Mode"
          @change="handleChange"
        >
          <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </a-select-option>
        </a-select>
      </div>
    </div>

    <div class="servicos__right">
      <div class="servicos__search">
        <a-input-search
          placeholder="Buscar por termo"
          enter-button
          @search="addTagSearch"
        />

        <div class="servicos__search-tags">
          <a-tag v-for="(tag, index) in tagsSearch" :key="index" closable>
            {{ tag }}
          </a-tag>
        </div>

        <div class="servicos__search-cards">
          <CardServicos
            title="Preciso de alguém para editar meus vídeos"
            :description="
              description.length ? description : 'Sem descrição disponível'
            "
          />

          <CardServicos
            title="Preciso de alguém para editar meus vídeos"
            :description="'' ? 'description' : 'Sem descrição disponível'"
          />

          <CardServicos
            title="Preciso de alguém para editar meus vídeos"
            :description="
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. '
                ? description + description
                : 'Sem descrição disponível'
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Serviços",
  layout: "logged",
  // middleware: 'auth',
  data() {
    return {
      tagsSearch: [],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    };
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    onChangeDate(date, dateString) {
      console.log(date, dateString);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },

    addTagSearch(value) {
      if (!!value) {
        this.tagsSearch.push(value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.servicos {
  margin-top: 80px;
  margin-left: 36px;
  margin-right: 36px;
  max-width: 1920px;
  padding-bottom: 40px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .servicos__left {
    width: calc(20% - 10px);
    background: #fff;
    padding: 16px;

    h3 {
      font-size: 1.5rem;
      line-height: 30px;
      margin-bottom: 32px;
      font-weight: bold;
    }

    h4 {
      font-size: 1rem;
      line-height: 24px;
      font-weight: bold;
    }

    .servicos__filtro-categoria {
      display: flex;
      flex-direction: column;

      .ant-checkbox-wrapper::v-deep {
        margin-left: 0;

        .ant-checkbox {
          &.ant-checkbox-checked {
            .ant-checkbox-inner {
              background-color: $primary-yellow;
              border-color: $primary-yellow;
            }

            &::after {
              border: 1px solid $primary-yellow;
            }
          }

          &:hover {
            .ant-checkbox-inner {
              border-color: $primary-yellow;
            }
          }
        }

        &:hover {
          .ant-checkbox-inner {
            border-color: $primary-yellow;
          }
        }
      }
    }

    .servicos__filtro-data {
      margin-top: 32px;

      .ant-calendar-picker::v-deep {
        .ant-calendar-picker-input {
          height: initial;
        }
      }
    }

    .servicos__filtro-preco {
      margin-top: 32px;

      .ant-input-group::v-deep {
        &.ant-input-group-compact {
          .ant-input-prefix {
            left: 6px;
          }
        }
      }
    }

    .servicos__filtro-tags {
      margin-top: 32px;

      .ant-select::v-deep {
        min-height: initial;

        .ant-select-selection {
          min-height: initial;
        }
      }
    }
  }

  .servicos__right {
    width: calc(80% - 10px);

    .servicos__search {
      .ant-input-search::v-deep {
        .ant-btn {
          height: 32px;
        }
      }

      .servicos__search-tags {
        margin-top: 16px;

        .ant-tag::v-deep {
          display: inline-flex;
          align-items: center;
          height: 32px;
          margin-bottom: 8px;
        }
      }
    }

    .servicos__search-cards {
      .card-servicos {
        &:not(:last-child) {
          margin-bottom: 16px;
        }
      }
    }
  }

  @media (max-width: 1660px) {
    .servicos__left {
      width: calc(30% - 10px);
    }

    .servicos__right {
      width: calc(70% - 10px);
    }
  }

  @media (max-width: 1200px) {
    .servicos__left {
      width: calc(35% - 10px);
    }

    .servicos__right {
      width: calc(65% - 10px);
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 20px;
    padding-bottom: 100px;

    .servicos__left {
      width: 100%;
      margin-bottom: 24px;
      padding: 8px 16px;

      h3 {
        margin-bottom: 8px;
        font-size: 1.25rem;
      }

      h4 {
        margin-bottom: 4px;
      }

      .servicos__filtro-data {
        margin-top: 12px;
      }

      .servicos__filtro-preco {
        margin-top: 12px;
      }

      .servicos__filtro-tags {
        margin-top: 12px;
      }
    }

    .servicos__right {
      width: 100%;
    }
  }
}
</style>

<template lang="html">
  <div class="all-orders">
    <TitleBlock title="Фрилансеры"> </TitleBlock>

    <div class="container_xl app-container pb-4 pt-5">
      <div class="card_block main-table px-4 py-3">
        <div class="d-flex justify-content-between align-items-center card_header">
          <div class="oroder-filter-grid w-100 align-items-center">
            <SearchInput
              placeholder="Поиск"
              @changeSearch="($event) => changeSearch($event, '__GET_ORDERS')"
            />
            <div class="input status-select w-100">
              <a-form-model-item class="form-item mb-0">
                <a-select v-model="filter.online" placeholder="Статус">
                  <a-select-option
                    v-for="(filterItem, index) in Object.entries(status)"
                    :key="index"
                    :value="filterItem[0]"
                  >
                    {{ filterItem[1] }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="input status-select w-100">
              <a-form-model-item class="form-item mb-0">
                <a-select v-model="filter.region" placeholder="Область">
                  <a-select-option v-for="filterItem in regions" :key="filterItem?.id">
                    {{ filterItem?.name_ru }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="input status-select w-100">
              <a-form-model-item class="form-item mb-0">
                <a-select v-model="value" placeholder="Категория">
                  <a-select-option
                    v-for="filterItem in statusFilter"
                    :key="filterItem?.id"
                  >
                    {{ filterItem?.name?.ru }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <a-button
              type="primary"
              class="d-flex align-items-center justify-content-center"
              @click="clearFilterPage"
              style="height: 38px"
            >
              <a-icon type="reload"
            /></a-button>
          </div>
        </div>
      </div>
    </div>

    <div class="container_xl app-container main-table">
      <div class="card_block main-table px-4 py-4">
        <a-table
          :columns="columnsFreelancers"
          :data-source="freelancers"
          :pagination="false"
          :loading="loading"
          align="center"
        >
          <span to="/orders/1232/details" slot="client" slot-scope="text" align="center">
            {{ text }}
          </span>
          <span slot="orderId" slot-scope="text">#{{ text?.id }}</span>

          <span
            slot="online"
            slot-scope="tags"
            class="tags-style"
            :class="{
              tag_success: tags,
              tag_rejected: !tags,
            }"
          >
            <!-- 'new', 'canceled', 'accepted', 'in_process' -->
            {{ status[tags] }}
          </span>
          <span slot="btns" slot-scope="text">
            <!-- <span
                  v-if="checkAccess('orders', 'put')"
                  class="action-btn"
                  v-html="eyeIcon"
                  @click="$router.push(`/orders/order/${text}`)"
                >
                </span> -->
            <span
              v-if="checkAccess('orders', 'put')"
              class="action-btn"
              @click="$router.push(`/freelancers/${text}`)"
              v-html="editIcon"
            >
            </span>
            <span class="action-btn" @click="deleteAction(text)" v-html="deleteIcon">
            </span>
          </span>
        </a-table>
        <div class="d-flex justify-content-between mt-4">
          <a-select
            v-model="params.pageSize"
            class="table-page-size"
            style="width: 120px"
            @change="
              ($event) =>
                changePageSizeGlobal($event, '/orders/all-orders', '__GET_ORDERS')
            "
          >
            <a-select-option
              v-for="item in pageSizes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              >{{ item.label }}
            </a-select-option>
          </a-select>
          <a-pagination
            class="table-pagination"
            :simple="false"
            v-model.number="current"
            :total="totalPage"
            :page-size.sync="params.pageSize"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchInput from "../../components/form/Search-input.vue";
import TitleBlock from "../../components/Title-block.vue";
import columns from "../../mixins/columns";
import moment from "moment";
import global from "../../mixins/global";
import OrderBtns from "../../components/order-btns.vue";
import authAccess from "../../mixins/authAccess";

export default {
  layout: "toolbar",
  mixins: [columns, global, authAccess],
  data() {
    return {
      statusFilter: [
        {
          name: {
            ru: "Активный",
          },
          id: 1,
        },
        {
          name: {
            ru: "Неактивный",
          },
          id: 2,
        },
      ],
      statusFilter: [
        {
          name: {
            ru: "Активный",
          },
          id: 1,
        },
        {
          name: {
            ru: "Неактивный",
          },
          id: 2,
        },
      ],
      value: undefined,
      filter: {
        online: undefined,
        region: undefined,
      },
      pageSize: 10,
      eyeIcon: require("../../assets/svg/Eye.svg?raw"),
      editIcon: require("../../assets/svg/edit.svg?raw"),
      deleteIcon: require("../../assets/svg/delete.svg?raw"),
      loading: false,
      freelancers: [],
      data: [
        {
          id: 1,
          name: "Order name",
          phone_number: "+998 99 730 14 99",
          age: "24",
          date: "24/09/2024",
          region: "Qashqadaryo",
          category: "Kategoriya",
          status: "online",
        },
        {
          id: 2,
          name: "Order name",
          phone_number: "+998 99 730 14 99",
          age: "24",
          date: "24/09/2024",
          region: "Qashqadaryo",
          category: "Kategoriya",
          status: "offline",
        },
      ],
      status: {
        1: "В сети",
        0: "Не в сети",
      },
      regions: [],
    };
  },
  mounted() {
    this.getFirstData("__GET_ORDERS");
    this.checkAllActions("orders");
    this.__GET_REGIONS();
    Object.keys(this.$route.query).forEach((elem) => {
      if (Object.keys(this.filter).includes(elem)) {
        this.filter[elem] = this.$route.query[elem];
      }
    });
  },
  methods: {
    moment,
    deleteAction(id) {},
    clearFilterPage() {
      this.value = undefined;
      this.filter = {
        online: undefined,
        region: undefined,
      };
      this.clearQuery("__GET_ORDERS");
    },
    async __GET_REGIONS() {
      const data = await this.$store.dispatch("fetchRegions/getRegions", {
        ...this.$route.query,
      });
      this.regions = data?.content;
    },
    async __GET_ORDERS() {
      this.loading = true;
      const data = await this.$store.dispatch("fetchFreelancers/getFreelancers", {
        params: {
          ...this.$route.query,
        },
      });
      this.loading = false;
      const pageIndex = this.indexPage(data?.meta?.current_page, data?.meta?.per_page);
      this.freelancers = data?.data.map((item, index) => {
        return {
          ...item,
          key: index + pageIndex,
        };
      });
      console.log(this.freelancers);
      this.totalPage = data?.meta?.total;
      // this.orders.dataAdd = moment(data?.orders?.created_at).format("DD/MM/YYYY");
    },
    indexPage(current_page, per_page) {
      return (current_page * 1 - 1) * per_page + 1;
    },
  },
  watch: {
    async current(val) {
      this.changePagination(val, "__GET_ORDERS");
    },
    async "filter.online"(val) {
      if (this.$route.query?.online != val)
        await this.$router.replace({
          path: this.$route.path,
          query: { ...this.$route.query, online: val },
        });
      if (val == this.$route.query.online) this.__GET_ORDERS();
    },
    async "filter.region"(val) {
      if (this.$route.query?.region != val)
        await this.$router.replace({
          path: this.$route.path,
          query: { ...this.$route.query, region: val },
        });
      if (val == this.$route.query.region) this.__GET_ORDERS();
    },
    async value(val) {
      if (val) {
        if (this.$route.query?.service != val)
          await this.$router.replace({
            path: this.$route.path,
            query: { ...this.$route.query, service: val },
          });
        if (val == this.$route.query.service) this.__GET_ORDERS();
      }
    },
  },
  components: { TitleBlock, SearchInput, OrderBtns },
};
</script>
<style lang="css">
@import "../../assets/css/pages/order.css";
</style>

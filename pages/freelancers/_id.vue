<template lang="html">
  <div class="freelancer">
    <TitleBlock :title="`Фрилансер`">
      <div class="d-flex justify-content-between btn_group">
        <a-button
          class="add-btn add-header-btn btn-primary d-flex align-items-center"
          :type="$route.hash == '#info' || $route.hash == '' ? 'primary' : 'default'"
          @click="$router.push({ hash: 'info' })"
        >
          Общие данные
        </a-button>
        <a-button
          class="add-btn add-header-btn btn-primary d-flex align-items-center"
          :type="$route.hash == '#portfolio' ? 'primary' : 'default'"
          @click="$router.push({ hash: 'portfolio' })"
        >
          Портфолио
        </a-button>
        <a-button
          class="add-btn add-header-btn btn-primary d-flex align-items-center"
          :type="$route.hash == '#orders' ? 'primary' : 'default'"
          @click="$router.push({ hash: 'orders' })"
        >
          Заказы
        </a-button>
      </div>
      <div class="d-flex">
        <div
          class="add-btn add-header-btn add-header-btn-padding btn-light-primary mx-3"
          @click="$router.go(-1)"
        >
          Назад
        </div>
      </div>
    </TitleBlock>
    <a-form-model :model="form" ref="ruleForm" :rules="rules" layout="vertical">
      <div class="pb-5 pt-5">
        <a-spin :spinning="spinning" :delay="delayTime">
          <div class="container_xl app-container d-flex flex-column spin-content">
            <div
              class="freelancer-grid"
              v-if="$route.hash == '#info' || $route.hash == ''"
            >
              <div>
                <div class="card_block main-table px-4 py-4">
                  <div class="client-info">
                    <div class="image-box">
                      <div class="image">
                        <img src="@/assets/images/300_21.jpg" alt="" />
                      </div>
                      <span class="symbol-badge"></span>
                    </div>
                    <div class="info">
                      <h3>{{ freelancer?.name }}</h3>
                      <div class="d-flex flex-column">
                        <p>
                          ID: <span>#{{ freelancer?.id }}</span>
                        </p>
                        <p class="mt-1">
                          Номер телефона: <span>+{{ freelancer?.phone }}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="personal-info">
                    <div>
                      <p class="mt-1">Возраст: <span>24</span></p>
                      <p class="mt-1">
                        Генгер: <span>{{ freelancer?.gender }}</span>
                      </p>
                      <p class="mt-1">
                        Рейтинг: <span>{{ Math.ceil(freelancer?.rating) }}</span>
                      </p>
                      <p class="mt-1">
                        Дата:
                        <span>{{
                          moment(freelancer?.created_at).format("DD/MM/YYYY")
                        }}</span>
                      </p>
                      <p class="mt-1">
                        Специальности:
                        <span style="cursor: pointer">
                          <a-tag color="blue" style="cursor: pointer">
                            {{ freelancer?.specialities?.length }}
                          </a-tag></span
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card_block main-table px-4 py-4 mt-4">
                  <div class="messengers">
                    <ul>
                      <li>
                        <p>Telegram:</p>
                        <span>{{ freelancer?.contacts?.telegram || emptyText }}</span>
                      </li>
                      <li>
                        <p>Instagram:</p>
                        <span>{{ freelancer?.contacts?.instagram || emptyText }}</span>
                      </li>
                      <li>
                        <p>Facebook:</p>
                        <span>{{ freelancer?.contacts?.facebook || emptyText }}</span>
                      </li>
                      <li>
                        <p>Behance:</p>
                        <span>{{ freelancer?.contacts?.behance || emptyText }}</span>
                      </li>
                      <li>
                        <p>Dribble:</p>
                        <span>{{ freelancer?.contacts?.dribble || emptyText }}</span>
                      </li>
                      <li>
                        <p>LinkedIn:</p>
                        <span>{{ contacts?.linkedin || emptyText }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="card_block main-table px-4 py-4">
                    <FormTitle title="Параметры" />
                    <div class="settings" :class="{ 'select-placeholder': !value }">
                      <a-select
                        v-model="value"
                        placeholder="Статус"
                        :class="{ 'select-placeholder': !value }"
                      >
                        <a-select-option
                          v-for="filterItem in statusFilter"
                          :key="filterItem?.id"
                          placeholder="good"
                        >
                          {{ filterItem?.name?.ru }}
                        </a-select-option>
                      </a-select>
                      <a-select
                        v-model="value"
                        placeholder="Статус"
                        :class="{ 'select-placeholder': !value }"
                      >
                        <a-select-option
                          v-for="filterItem in statusFilter"
                          :key="filterItem?.id"
                          placeholder="good"
                        >
                          {{ filterItem?.name?.ru }}
                        </a-select-option>
                      </a-select>
                      <a-select
                        v-model="value"
                        placeholder="Статус"
                        :class="{ 'select-placeholder': !value }"
                      >
                        <a-select-option
                          v-for="filterItem in statusFilter"
                          :key="filterItem?.id"
                          placeholder="good"
                        >
                          {{ filterItem?.name?.ru }}
                        </a-select-option>
                      </a-select>
                    </div>
                  </div>
                  <div class="card_block main-table px-4 py-4 mt-4">
                    <FormTitle title="Статистика" />
                    <div class="statistics-block personal-info mt-0">
                      <p class="mt-1">Количество активных заказов: <span>24</span></p>
                      <p class="mt-1">
                        Количество ожидающих предложений: <span>30</span>
                      </p>
                      <p class="mt-1">Принимает предложения: <span>5</span></p>
                    </div>
                  </div>

                  <div class="card_block main-table px-4 py-4 mt-4">
                    <FormTitle title="BIO" />
                    <div class="bio">
                      <p v-if="freelancer?.bio">
                        {{ freelancer?.bio }}
                      </p>
                      <a-empty v-else/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="$route.hash == '#portfolio'">
              <div class="card_block main-table px-4 py-4">
                <FormTitle title="Portfolio" />

                <div class="portfolios">
                  <a-card hoverable>
                    <img
                      slot="cover"
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <template slot="actions" class="ant-card-actions">
                      <a-icon key="setting" type="setting" />
                      <a-icon key="edit" type="edit" />
                      <a-icon key="delete" type="delete" />
                    </template>
                    <div class="position-relative">
                      <a-card-meta
                        title="Card title"
                        description="This is the description"
                      >
                      </a-card-meta>
                      <a-badge
                        class="position-absolute"
                        style="top: 0; right: 0"
                        status="success"
                      />
                    </div>
                    <div class="d-flex justify-content-between w-100 mt-2">
                      <a-statistic :value="1128">
                        <template #suffix>
                          <a-icon type="like" />
                        </template>
                      </a-statistic>
                      <a-statistic :value="1128">
                        <template #suffix>
                          <a-icon type="eye" />
                        </template>
                      </a-statistic>
                    </div>
                  </a-card>
                  <a-card hoverable>
                    <img
                      slot="cover"
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <template slot="actions" class="ant-card-actions">
                      <a-icon key="setting" type="setting" />
                      <a-icon key="edit" type="edit" />
                      <a-icon key="delete" type="delete" />
                    </template>
                    <div class="position-relative">
                      <a-card-meta
                        title="Card title"
                        description="This is the description"
                      >
                      </a-card-meta>
                      <a-badge
                        class="position-absolute"
                        style="top: 0; right: 0"
                        status="success"
                      />
                    </div>
                    <div class="d-flex justify-content-between w-100 mt-2">
                      <a-statistic :value="1128">
                        <template #suffix>
                          <a-icon type="like" />
                        </template>
                      </a-statistic>
                      <a-statistic :value="1128">
                        <template #suffix>
                          <a-icon type="eye" />
                        </template>
                      </a-statistic>
                    </div>
                  </a-card>
                  <a-card hoverable>
                    <img
                      slot="cover"
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <template slot="actions" class="ant-card-actions">
                      <a-icon key="setting" type="setting" />
                      <a-icon key="edit" type="edit" />
                      <a-icon key="delete" type="delete" />
                    </template>
                    <div class="position-relative">
                      <a-card-meta
                        title="Card title"
                        description="This is the description"
                      >
                      </a-card-meta>
                      <a-badge
                        class="position-absolute"
                        style="top: 0; right: 0"
                        status="success"
                      />
                    </div>
                    <div class="d-flex justify-content-between w-100 mt-2">
                      <a-statistic :value="1128">
                        <template #suffix>
                          <a-icon type="like" />
                        </template>
                      </a-statistic>
                      <a-statistic :value="1128">
                        <template #suffix>
                          <a-icon type="eye" />
                        </template>
                      </a-statistic>
                    </div>
                  </a-card>
                  <a-card hoverable>
                    <img
                      slot="cover"
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <template slot="actions" class="ant-card-actions">
                      <a-icon key="setting" type="setting" />
                      <a-icon key="edit" type="edit" />
                      <a-icon key="delete" type="delete" />
                    </template>
                    <div class="position-relative">
                      <a-card-meta
                        title="Card title"
                        description="This is the description"
                      >
                      </a-card-meta>
                      <a-badge
                        class="position-absolute"
                        style="top: 0; right: 0"
                        status="success"
                      />
                    </div>
                    <div class="d-flex justify-content-between w-100 mt-2">
                      <a-statistic :value="1128">
                        <template #suffix>
                          <a-icon type="like" />
                        </template>
                      </a-statistic>
                      <a-statistic :value="1128">
                        <template #suffix>
                          <a-icon type="eye" />
                        </template>
                      </a-statistic>
                    </div>
                  </a-card>
                </div>
              </div>
            </div>
            <div v-if="$route.hash == '#orders'">
              <div class="card_block main-table px-4 py-4">
                <FormTitle title="Заказы" />

                <a-table
                  :columns="columnsOrders"
                  :data-source="data"
                  :pagination="false"
                  :loading="loading"
                  align="center"
                >
                  <span
                    to="/orders/1232/details"
                    slot="client"
                    slot-scope="text"
                    align="center"
                  >
                    {{ text }}
                  </span>
                  <span slot="orderId" slot-scope="text">#{{ text?.id }}</span>

                  <span
                    slot="status"
                    slot-scope="tags"
                    class="tags-style"
                    :class="{
                      tag_success: tags == 'active',
                      tag_inProgress: tags == 'in_process',
                      tag_approved: tags == 'accepted',
                      tag_rejected: tags == 'canceled',
                    }"
                  >
                    <!-- 'new', 'canceled', 'accepted', 'in_process' -->
                    Active
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
                      @click="$router.push(`/orders/order/${text}`)"
                      v-html="eyeIcon"
                    >
                    </span>
                    <span
                      class="action-btn"
                      @click="deleteAction(text)"
                      v-html="deleteIcon"
                    >
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
        </a-spin>
      </div>
    </a-form-model>
  </div>
</template>
<script>
import FormTitle from "../../components/Form-title.vue";
import TitleBlock from "../../components/Title-block.vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import status from "../../mixins/status";
import columns from "../../mixins/columns";
import global from "../../mixins/global";
import authAccess from "../../mixins/authAccess";
import BiletCard from "../../components/cards/biletCard.vue";
import moment from "moment";
export default {
  mixins: [status, authAccess, columns, global],
  head: {
    title: "Заказ",
  },
  data() {
    return {
      emptyText: "----",
      delayTime: 0,
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
      value: "",
      data: [
        {
          id: 1,
          name: "Order name",
          seller: "Seller name",
          freelancer: "Freelancer name",
          date: "24/09/2024",
          count: 4,
          category: "Kategoriya",
          status: "active",
        },
      ],
      eyeIcon: require("../../assets/svg/Eye.svg?raw"),
      editIcon: require("../../assets/svg/edit.svg?raw"),
      deleteIcon: require("../../assets/svg/delete.svg?raw"),
      status: {
        new: "Новые",
        in_process: "Ожидание",
        accepted: "Принятые",
        canceled: "Отмененные",
      },
      freelancer: {},
      spinning: false,
    };
  },
  computed: {},
  async mounted() {
    this.__GET_FREELANCER();
  },
  methods: {
    moment,
    async __GET_FREELANCER() {
      try {
        this.spinning = true;
        const data = await this.$store.dispatch(
          "fetchFreelancers/getFreelancerById",
          this.$route.params.id
        );
        this.freelancer = data?.content;
      } catch (e) {
      } finally {
        this.spinning = false;
      }
    },
  },
  components: { TitleBlock, FormTitle, BiletCard },
};
</script>
<style lang="css" scoped>
.freelancer-grid {
  display: grid;
  grid-gap: 13px;
  grid-template-columns: 2fr 6fr;
}
.freelancer .image {
  width: 100px;
  height: 100px;
  border-radius: 0.42rem;
  overflow: hidden;
}
.freelancer .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.freelancer .image-box {
  position: relative;
  width: 100px;
  height: 100px;
}
.freelancer .image-box .symbol-badge {
  position: absolute;
  border: 2px solid #ffffff;
  border-radius: 100%;
  background-color: #1bc5bd !important;
  width: 12px;
  height: 12px;
  top: -6px;
  right: -6px;
}
.freelancer .info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.freelancer .info h3 {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #3f4254;
  position: relative;
  white-space: nowrap;
}
.freelancer .info p {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  color: #b5b5c3;
  position: relative;
  white-space: nowrap;
}
.freelancer .info span {
  color: #3f4254;
}
.client-info {
  display: flex;
  gap: 16px;
}

.messengers ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.messengers ul li {
  display: flex;
  justify-content: space-between;
}

.messengers ul li p,
.personal-info p,
.messengers ul li span {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  color: #b5b5c3;
  position: relative;
  white-space: nowrap;
}
.personal-info {
  margin-top: 16px;
}
.messengers ul li span,
.personal-info p span,
.bio p {
  color: #3f4254;
}
.portfolios {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
}
.statistics-block,
.settings {
  display: flex;
  justify-content: space-between;
  gap: 32px;
}
</style>

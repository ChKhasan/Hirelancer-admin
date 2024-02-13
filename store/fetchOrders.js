export const actions = {
  async getOrders({}, payload) {
    const res = await this.$axiosInstance.$get(`/orders`, {
      params: payload,
    });
    return res;
  },
  async getOrdersCount() {
    const res = await this.$axiosInstance.$get(`/api/orders/counts`);
    return res;
  },
  async getBookedOrders({}, payload) {
    const res = await this.$axiosInstance.$get(`/api/tariffs/number_of_books`, {
      params: payload,
    });
    return res;
  },
  async getCalendar({}, payload) {
    const res = await this.$axiosInstance.$get(`/api/calendar/${payload.id}`, {
      params: payload.query,
    });
    return res;
  },
  async getOrdersById({}, id) {
    const res = await this.$axiosInstance.$get(`/api/orders/${id}`);
    return res;
  },
  async postOrders({}, data) {
    const res = await this.$axiosInstance.$post(`/api/orders`, data);
    return res;
  },
  async editOrders({}, payload) {
    const res = await this.$axiosInstance.$put(
      `/api/orders/${payload.id}`,
      payload.data
    );
    return res;
  },
  async deleteOrders({}, id) {
    const res = await this.$axiosInstance.$delete(`/api/orders/${id}`);
    return res;
  },
};

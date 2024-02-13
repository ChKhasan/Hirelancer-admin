export const actions = {
  async getClients({}, payload) {
    try {
      const res = await this.$axiosInstance.$get(`/api/clients`);
      return res;
    } catch (e) {
      return e;
    }
  },
  async postMailing({}, data) {
    const res = await this.$axiosInstance.$post(`/api/mailing`, data);
    return res;
  },
  async getClientsById({}, id) {
    try {
      const res = await this.$axiosInstance.$get(`/api/clients/${id}`);
      return res;
    } catch (e) {
      return e;
    }
  },
};

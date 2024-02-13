export const actions = {
  async getSpecialities({}, payload) {
    const res = await this.$axiosInstance.$get(`/api/specialities`, {
      params: payload,
    });
    return res;
  },
  async getAllSpecialities() {
    const res = await this.$axiosInstance.$get(`/api/specialities/all`);
    return res;
  },
  async getSpecialitiesById({}, id) {
    const res = await this.$axiosInstance.$get(`/api/specialities/${id}`);
    return res;
  },
  async postSpecialities({}, data) {
    const res = await this.$axiosInstance.$post(`/api/specialities`, data);
    return res;
  },
  async editSpecialities({}, payload) {
    const res = await this.$axiosInstance.$post(
      `/specialities/${payload.id}`,
      payload.data
    );
    return res;
  },
  async deleteSpecialities({}, id) {
    const res = await this.$axiosInstance.$delete(`/api/specialities/${id}`);
    return res;
  },
};

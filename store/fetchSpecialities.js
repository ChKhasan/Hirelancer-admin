export const actions = {
  async getSpecialities({}, payload) {
    try {
      const res = await this.$axios.$get(`/specialities`, {
        params: payload,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  async getAllSpecialities() {
    const res = await this.$axios.$get(`/specialities/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getSpecialitiesById({}, id) {
    try {
      const res = await this.$axios.$get(`/specialities/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  async postSpecialities({}, data) {
    const res = await this.$axios.$post(`/specialities`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async editSpecialities({}, payload) {
    const res = await this.$axios.$post(
      `/specialities/${payload.id}`,
      payload.data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      }
    );
    return res;
  },
  async deleteSpecialities({}, id) {
    const res = await this.$axios.$delete(`/specialities/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};

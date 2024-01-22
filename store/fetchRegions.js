export const actions = {
  async getRegions({}, payload) {
    try {
      const res = await this.$axios.$get(`/regions`, {
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
  async getAllRegions() {
    const res = await this.$axios.$get(`/regions/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getRegionsById({}, id) {
    try {
      const res = await this.$axios.$get(`/regions/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  async postRegions({}, data) {
    const res = await this.$axios.$post(`/regions`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async editRegions({}, payload) {
    const res = await this.$axios.$post(
      `/regions/${payload.id}`,
      payload.data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      }
    );
    return res;
  },
  async deleteRegions({}, id) {
    const res = await this.$axios.$delete(`/regions/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};

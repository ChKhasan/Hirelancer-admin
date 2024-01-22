export const actions = {
  async getCountries({}, payload) {
    try {
      const res = await this.$axios.$get(`/countries`, {
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
  async getAllCountries() {
    const res = await this.$axios.$get(`/countries/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getCountriesById({}, id) {
    try {
      const res = await this.$axios.$get(`/countries/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  async postCountries({}, data) {
    const res = await this.$axios.$post(`/countries`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async editCountries({}, payload) {
    const res = await this.$axios.$post(
      `/countries/${payload.id}`,
      payload.data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      }
    );
    return res;
  },
  async deleteCountries({}, id) {
    const res = await this.$axios.$delete(`/countries/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};

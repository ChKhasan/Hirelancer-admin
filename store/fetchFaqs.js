export const actions = {
  async getFaqs({}, payload) {
    const res = await this.$axios.$get(`/faqs`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getFaqsCategories({}, payload) {
    const res = await this.$axios.$get(`/faq_categories`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getFaqsCategoriesAll({}, payload) {
    const res = await this.$axios.$get(`/faq_categories/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getFaqsById({}, id) {
    try {
      const res = await this.$axios.$get(`/faqs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  async getFaqsCategoriesById({}, id) {
    try {
      const res = await this.$axios.$get(`/faq_categories/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  async postFaqsCategories({}, data) {
    const res = await this.$axios.$post(`/faq_categories`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async postFaqs({}, data) {
    const res = await this.$axios.$post(`/faqs`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async editFaqsCategories({}, payload) {
    const res = await this.$axios.$put(
      `/faq_categories/${payload.id}`,
      payload.data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      }
    );
    return res;
  },
  async editFaqs({}, payload) {
    const res = await this.$axios.$put(`/faqs/${payload.id}`, payload.data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async deleteFaqs({}, id) {
    const res = await this.$axios.$delete(`/faqs/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async deleteFaqsCategories({}, id) {
    const res = await this.$axios.$delete(`/faq_categories/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};

<template lang="html">
  <div class="order-links-grid">
    <nuxt-link
      class="order-links"
      :class="{ 'active-orders': $route.path == '/orders/all-orders' }"
      to="/orders/all-orders"
    >
      <span class="order-green"></span> Все заказы ({{ `${$store.state.orders.all}` }})
    </nuxt-link>
    <nuxt-link
      class="order-links"
      :class="{ 'active-orders': $route.path == '/orders/active' }"
      to="/orders/active"
    >
      <span class="order-light-blue"></span> Aктивный ({{ `${$store.state.orders.new}` }})
    </nuxt-link>
    <nuxt-link
      class="order-links"
      :class="{ 'active-orders': $route.path == '/orders/selected' }"
      to="/orders/selected"
    >
      <span class="order-blue"></span> Исполнитель выбран ({{
        `${$store.state.orders.in_process}`
      }})
    </nuxt-link>
    <nuxt-link
      class="order-links"
      :class="{ 'active-orders': $route.path == '/orders/changed' }"
      to="/orders/changed"
    >
      <span class="order-black"></span> Изменен-aктив ({{ `${$store.state.orders.accepted}` }})
    </nuxt-link>

    <nuxt-link
      class="order-links"
      :class="{ 'active-orders': $route.path == '/orders/moderator' }"
      to="/orders/moderator"
    >
      <span class="order-yellow"></span> Отмена модератором ({{
        `${$store.state.orders.is_edited}`
      }})
    </nuxt-link>
    <nuxt-link
      class="order-links"
      :class="{ 'active-orders': $route.path == '/orders/client' }"
      to="/orders/client"
    >
      <span class="order-red"></span> Отмена клиентом ({{ `${$store.state.orders.canceled}` }})
    </nuxt-link>
  </div>
</template>
<script>
export default {};
</script>

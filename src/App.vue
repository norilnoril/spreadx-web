<template>
  <div id="app">
    <LeftSidebar :isChecked="isChecked" @toggle-sidebar="toggleSidebar" />
    <NewSite :isChecked="isChecked" />
    <!-- <ProductList :isChecked="isChecked" /> -->
    <!-- <PaymentTable :isChecked="isChecked" /> -->
    <!-- <DomainCard :isChecked="isChecked" /> -->
    <!-- <DeliverySettings :isChecked="isChecked" /> -->
    <!-- <ManageDomain :isChecked="isChecked"/> -->
  </div>
</template>

<script>
// import DeliverySettings from "./components/DeliverySettings.vue";
// import DomainCard from "./components/DomainCard.vue";
import LeftSidebar from "./components/LeftSidebar.vue";
// import ManageDomain from "./components/ManageDomain.vue";
// import PaymentTable from "./components/PaymentTable.vue";
import NewSite from "./components/NewSite.vue";
// import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: {
    LeftSidebar,
    NewSite,
    // ProductList,
    // PaymentTable,
    // DomainCard,
    // DeliverySettings,
    // ManageDomain,
  },
  data() {
    return {
      isChecked: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style></style>

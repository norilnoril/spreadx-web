<template>
  <div id="app">
    <LeftSidebar />
    <!-- <NewSite /> -->
    <!-- <ProductList /> -->
    <!-- <PaymentTable /> -->
    <!-- <DomainCard /> -->
    <DeliverySettings />
  </div>
</template>

<script>
import DeliverySettings from "./components/DeliverySettings.vue";
// import DomainCard from "./components/DomainCard.vue";
import LeftSidebar from "./components/LeftSidebar.vue";
// import PaymentTable from "./components/PaymentTable.vue";
// import NewSite from "./components/NewSite.vue";
// import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: {
    LeftSidebar,
    // NewSite,
    // ProductList,
    // PaymentTable,
    // DomainCard,
    DeliverySettings,
  },
};
</script>

<style></style>

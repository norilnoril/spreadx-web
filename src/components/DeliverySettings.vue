<template>
  <div class="h-screen">
    <div class="pt-16 pr-32 pb-14 pl-[430px]">
      <div class="flex items-end justify-between mb-4">
        <h4
          class="text-xl font-bold leading-[12px] font-istok-web text-customBlue"
        >
          Configure your delivery settings
        </h4>
        <button
          class="px-5 py-3 text-base font-bold leading-5 text-center text-white rounded-md bg-customBlue"
        >
          Continue
        </button>
      </div>

      <div
        class="h-[700px] px-28 mx-auto my-auto overflow-y-auto border py-14 border-customBorder1 rounded-2xl"
      >
        <!-- first box  -->
        <div
          class="flex items-center justify-between bg-white border-[0.88px] rounded-lg shadow-sm p-9 border-customBorder1"
        >
          <span
            class="text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
            >Do you want to offer delivery?</span
          >
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              class="sr-only peer"
              v-model="isDeliveryOffered"
            />
            <div
              class="w-10 h-4 bg-customGray2 rounded-full peer peer-checked:after:translate-x-2/3 peer-checked:after:bg-customDarkBlue peer-checked:after:border-customDarkBlue after:content-[''] after:absolute after:-top-1.5 after:-left-1 after:bg-customBlack after:border-customBlack after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-customLightBlue"
            ></div>
          </label>
        </div>

        <!-- second box  -->
        <div
          class="flex items-center justify-between bg-white border-[0.88px] rounded-lg shadow-sm mt-3 p-9 border-customBorder1"
        >
          <div>
            <h2
              class="text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
            >
              Calculate & assign delivery times automatically
            </h2>
            <p
              class="text-base font-normal leading-6 font-istok-web text-textColor6"
            >
              Tell us more about how you operate your business to automatically
              calculate the delivery times
            </p>
          </div>

          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              class="sr-only peer"
              v-model="isAssignDeliveryTimes"
            />
            <div
              class="w-10 h-4 bg-customGray2 rounded-full peer peer-checked:after:translate-x-2/3 peer-checked:after:bg-customDarkBlue peer-checked:after:border-customDarkBlue after:content-[''] after:absolute after:-top-1.5 after:-left-1 after:bg-customBlack after:border-customBlack after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-customLightBlue"
            ></div>
          </label>
        </div>

        <!-- 3rd box  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliverySettings",
  data() {
    return {
      isDeliveryOffered: true,
      isAssignDeliveryTimes: true,
      activeTab: "radius",
    };
  },
};
</script>

<style lang="scss" scoped></style>

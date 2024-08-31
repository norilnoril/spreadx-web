<template>
  <div class="h-screen">
    <div class="pt-16 pr-24 pb-14 pl-96">
      <div class="flex items-end justify-between mb-4">
        <h4
          class="text-xl font-bold leading-[12px] font-istok-web text-customBlue"
        >
          Set up your payment methods
        </h4>
        <button
          class="px-5 py-3 text-base font-bold leading-5 text-center text-white rounded-md bg-customBlue"
        >
          Continue
        </button>
      </div>

      <div
        class="h-[700px] pl-5 pr-20 overflow-y-auto border py-7 border-borderColor1 rounded-2xl"
      >
        <div class="">
          <h1 class="font-istok-web font-bold text-[28px] leading-8 text-black">
            Products
          </h1>
          <a
            class="text-lg font-normal leading-6 underline font-istok-web"
            href="#"
            >Learn more</a
          >
        </div>

        <div class="flex items-center justify-between mb-4 mt-11">
          <span class="text-lg font-semibold">4 items</span>
          <div class="flex space-x-2">
            <button
              class="flex items-center px-3 py-1 text-gray-600 bg-gray-100 rounded-md"
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead class="border-b-[3.44px] border-customBorder4">
              <tr class="border-b border-gray-300">
                <th class="p-3 font-medium text-left text-gray-600">
                  <input
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 form-checkbox"
                  />
                </th>
                <th class="p-3 font-medium text-left text-gray-600">Name</th>
                <th class="p-3 font-medium text-left text-gray-600">Code</th>
                <th class="p-3 font-medium text-left text-gray-600">Type</th>
                <th class="p-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.code" class="">
                <td class="p-3">
                  <input
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 form-checkbox"
                  />
                </td>
                <td class="flex items-center p-3">
                  <span
                    class="inline-flex items-center justify-center w-8 h-8 font-semibold text-gray-700 bg-gray-300 rounded-full"
                  >
                    {{ item.initials }}
                  </span>
                  <span class="ml-2">{{ item.name }}</span>
                </td>
                <td class="p-3 text-gray-700">{{ item.code }}</td>
                <td class="p-3 text-gray-700">{{ item.type }}</td>
                <td class="p-3 text-right">
                  <label class="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="item.enabled"
                      class="sr-only"
                    />
                    <div
                      :class="{
                        'bg-gray-200': !item.enabled,
                        'bg-blue-600': item.enabled,
                      }"
                      class="relative w-10 h-4 transition-colors duration-200 ease-in-out rounded-full"
                    >
                      <span
                        :class="{
                          'translate-x-0': !item.enabled,
                          'translate-x-6': item.enabled,
                        }"
                        class="absolute top-0 left-0 w-6 h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full"
                      ></span>
                    </div>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentTable",
  data() {
    return {
      items: [
        {
          initials: "Ca",
          name: "Cash on Delivery",
          code: "CASHOD",
          type: "CASH",
          enabled: true,
        },
        {
          initials: "Ca",
          name: "Card on Delivery",
          code: "CARDOD",
          type: "CREDIT",
          enabled: false,
        },
        {
          initials: "Pa",
          name: "Paypal",
          code: "PAYPAL",
          type: "CREDIT",
          enabled: true,
        },
        {
          initials: "St",
          name: "STRIPE",
          code: "STRIPE",
          type: "CREDIT",
          enabled: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

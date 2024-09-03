<template>
  <div class="h-screen">
    <div :class="isChecked ? 'pl-[430px]' : 'pl-56'" class="pb-12 pr-32 pt-14">
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
        class="h-[700px] pl-5 pr-20 overflow-y-auto border py-7 border-customBorder1 rounded-2xl"
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
                <th class="p-3 font-medium text-left text-gray-600"></th>
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
                <td class="p-3">
                  <div
                    class="inline-flex items-center justify-center px-5 py-4 font-semibold text-gray-700 bg-gray-300 rounded"
                  >
                    {{ item.initials }}
                  </div>
                </td>
                <td class="p-3 text-gray-700">
                  {{ item.name }}
                </td>
                <td class="p-3 text-gray-700">{{ item.code }}</td>
                <td class="p-3 text-gray-700">{{ item.type }}</td>
                <td class="p-3 text-right">
                  <div class="flex items-center space-x-2">
                    <!-- Toggle Switch -->
                    <label
                      class="relative inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        class="sr-only peer"
                        v-model="item.enabled"
                      />
                      <div
                        class="w-10 h-4 bg-customGray2 rounded-full peer peer-checked:after:translate-x-2/3 peer-checked:after:bg-customDarkBlue peer-checked:after:border-customDarkBlue after:content-[''] after:absolute after:-top-1.5 after:-left-1 after:bg-customBlack after:border-customBlack after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-customLightBlue"
                      ></div>
                    </label>
                  </div>
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
  props: {
    isChecked: {
      type: Boolean,
      required: true,
    },
  },
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

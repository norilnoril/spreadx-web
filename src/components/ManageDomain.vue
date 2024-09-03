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
        class="h-[700px] w-full flex flex-col items-center justify-center pl-5 pr-20 overflow-y-auto border py-7 border-customBorder1 rounded-2xl"
      >
        <div class="w-2/3">
          <!-- Domain Provider -->
          <h4
            class="block mb-1 text-xl font-bold leading-8 text-left text-gray-700 font-istok-web"
          >
            Domain provider
          </h4>

          <div class="relative w-full">
            <select
              v-model="domainProvider"
              class="block w-full px-6 py-3 text-xl font-normal leading-8 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none"
            >
              <option value="SpreadXDomain">SpreadX Domain</option>
              <option value="FindCustomDomain">Find Custom Domain</option>
              <option value="OwnDomain">Use a Domain I own elsewhere</option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.917l3.71-3.69a.75.75 0 111.06 1.06l-4 3.997a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <!-- for SpreadX Domain  -->
          <div v-if="domainProvider === 'SpreadXDomain'">
            <!-- Domain Input -->
            <div
              class="flex items-center w-full my-4 space-x-1 text-xl font-normal leading-7 border border-gray-300 rounded-md font-istok-web"
            >
              <span
                class="py-3 pl-6 text-xl font-normal leading-8 text-gray-500 font-istok-web"
                >https://</span
              >
              <input
                v-model="domainName"
                type="text"
                placeholder="sample-domain-123"
                class="block w-full py-3 pl-3 focus:outline-none"
              />
              <span class="px-6 py-3 text-gray-500">.spreadx.ae</span>
            </div>

            <!-- Save Button -->
            <button
              @click="saveDomain"
              class="w-full px-6 py-3 text-xl font-normal leading-8 text-white bg-blue-600 rounded-md font-istok-web hover:bg-blue-700"
            >
              Save
            </button>
          </div>

          <!-- for Find Custom Domain -->
          <div
            v-if="domainProvider === 'FindCustomDomain'"
            class="flex items-center my-4 space-x-6"
          >
            <!-- Search Input with Icon -->
            <div class="relative flex items-center w-3/4">
              <span class="absolute text-gray-400 left-6">
                <svg
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.6105 30.3034L22.7191 23.412M22.7191 23.412C25.0163 21.1149 26.4371 17.9414 26.4371 14.4361C26.4371 7.42543 20.7538 1.74219 13.7432 1.74219C6.73256 1.74219 1.04932 7.42543 1.04932 14.4361C1.04932 21.4467 6.73256 27.1299 13.7432 27.1299C17.2485 27.1299 20.422 25.7091 22.7191 23.412Z"
                    stroke="#74777E"
                    stroke-width="1.73098"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="sample.com"
                class="w-full py-3 pl-20 pr-4 text-xl font-normal leading-8 border border-gray-300 rounded-md font-istok-web focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <!-- Search Button -->
            <button
              @click="search"
              class="flex items-center justify-center w-1/4 px-6 py-3 space-x-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              <span class="text-xl font-normal leading-8 font-istok-web"
                >Search</span
              >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.36654 1.2627H11.7524M11.7524 1.2627V11.6486M11.7524 1.2627L1.36654 11.6486"
                  stroke="white"
                  stroke-width="1.73098"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <!-- Use a Domain I own elsewhere -->
          <div
            v-if="domainProvider === 'OwnDomain'"
            class="flex items-center my-4 space-x-6"
          >
            <!-- URL Input with Prefix -->
            <div class="relative flex items-center w-3/4">
              <span
                class="absolute text-xl font-normal leading-8 text-gray-400 left-6 font-istok-web"
              >
                https://
              </span>
              <input
                v-model="url"
                type="text"
                placeholder="sample.com"
                class="w-full py-3 pr-4 text-xl font-normal leading-8 border border-gray-300 rounded-md pl-28 font-istok-web focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <!-- Verify Button -->
            <button
              @click="verifyUrl"
              class="w-1/4 px-6 py-3 text-xl font-normal leading-8 text-white bg-blue-500 rounded-md hover:bg-blue-600 font-istok-web"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageDomain",
  props: {
    isChecked: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      domainProvider: "SpreadXDomain",
      searchQuery: "",
      url: "sample.com",
    };
  },
};
</script>

<style lang="scss" scoped></style>

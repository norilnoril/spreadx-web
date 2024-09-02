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
        <div
          v-if="isAssignDeliveryTimes === true"
          class="bg-white border-[0.88px] rounded-lg shadow-sm mt-3 p-9 border-customBorder1"
        >
          <!-- Header with Icon and Delivery Text -->
          <div class="flex items-center mb-8 space-x-2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7917 9.47917V21.4375C20.7917 21.9207 20.3981 22.3125 19.9148 22.3125C14.3591 22.3125 10.8909 22.3125 5.33519 22.3125C4.85194 22.3125 4.45833 21.9207 4.45833 21.4375V9.47917M23.125 11.8125L12.625 1.3125L2.125 11.8125"
                stroke="#969696"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span
              class="text-sm font-bold leading-5 font-istok-web text-textColor2"
              >DELIVERY</span
            >
          </div>

          <!-- Tab Navigation -->
          <div class="flex items-end space-x-2">
            <div
              class="inline-flex items-center px-3 py-2 space-x-2 bg-blue-100 rounded"
            >
              <button
                :class="{
                  'bg-white': activeTab === 'postalCode',
                  'bg-transparent': activeTab !== 'postalCode',
                }"
                @click="activeTab = 'postalCode'"
                class="px-4 py-1 font-semibold rounded focus:outline-none"
              >
                Postal code
              </button>
              <button
                :class="{
                  'bg-white': activeTab === 'radius',
                  'bg-trnsparent': activeTab !== 'radius',
                }"
                @click="activeTab = 'radius'"
                class="px-4 py-1 font-semibold rounded focus:outline-none"
              >
                Radius
              </button>
            </div>

            <!-- Info Tooltip -->
            <div class="relative inline-block">
              <!-- Info Icon -->
              <svg
                @mouseover="showTooltip = true"
                @mouseleave="showTooltip = false"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                  fill="#A4A4A4"
                />
                <path
                  d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <!-- Tooltip -->
              <div
                v-if="showTooltip"
                class="absolute bottom-4 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg left-4 w-96"
              >
                Customers outside this area will not be able to place orders for
                delivery from this location.
              </div>
            </div>
          </div>

          <!-- Tab Content -->
          <div class="flex items-center mt-1 space-x-4">
            <!-- Content for Post code -->
            <div
              v-if="activeTab === 'postalCode'"
              class="w-full p-2 border border-gray-300 rounded-md"
            >
              <div class="flex flex-wrap gap-2">
                <!-- Each tag -->
                <div
                  v-for="(tag, index) in tags"
                  :key="index"
                  class="flex items-center px-3 py-1 bg-blue-100 rounded-full text-textColor5"
                >
                  <span>{{ tag }}</span>
                  <button
                    @click="removeTag(index)"
                    class="ml-2 font-bold text-blue-500"
                  >
                    &times;
                  </button>
                </div>

                <!-- Input for new tag -->
                <input
                  v-model="newTag"
                  @keyup.enter="addTag"
                  class="flex-grow focus:outline-none"
                  placeholder="Enter a tag"
                />
              </div>
            </div>

            <div
              v-if="activeTab === 'radius'"
              class="flex items-center space-x-2"
            >
              <!-- Content for Radius -->
              <input
                type="text"
                class="px-6 py-3 border border-gray-300 rounded-lg w-52 focus:outline-none"
                placeholder="0"
              />
              <div class="relative w-40">
                <select
                  class="block w-full px-6 py-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none"
                >
                  <option>km</option>
                  <option>miles</option>
                </select>
                <!-- Custom Arrow -->
                <div
                  class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.917l3.71-3.69a.75.75 0 111.06 1.06l-4 3.997a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <span class="text-gray-600"
                >Radius uses straight line distance</span
              >
            </div>
          </div>

          <!-- divider  -->
          <div class="w-full mt-10 mb-6 border-b-8 border-customBorder5"></div>

          <!-- Estimate time  -->
          <div>
            <div class="flex items-center space-x-2">
              <h2
                class="text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
              >
                Estimated delivery time
              </h2>
              <!-- Info Tooltip -->
              <div class="relative inline-block">
                <!-- Info Icon -->
                <svg
                  @mouseover="deliveryTimeTooltip = true"
                  @mouseleave="deliveryTimeTooltip = false"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                    fill="#A4A4A4"
                  />
                  <path
                    d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                    stroke="white"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <!-- Tooltip -->
                <div
                  v-if="deliveryTimeTooltip"
                  class="absolute bottom-4 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg left-4 w-96"
                >
                  The time it takes an order to get to the customer’s door,
                  after the courier picks it up from this location
                </div>
              </div>
            </div>

            <div>
              <!-- estimate times -->
              <div class="flex items-center justify-between space-x-2">
                <div class="flex items-center space-x-2">
                  <input
                    type="text"
                    class="px-6 py-3 border border-gray-300 rounded-lg w-52 focus:outline-none"
                    placeholder="0"
                  />
                  <div class="relative w-40">
                    <select
                      class="block w-full px-6 py-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none"
                    >
                      <option>minutes</option>
                      <option>hours</option>
                      <option>day</option>
                    </select>
                    <!-- Custom Arrow -->
                    <div
                      class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.917l3.71-3.69a.75.75 0 111.06 1.06l-4 3.997a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <span>to</span>
                <div class="flex items-center space-x-2">
                  <input
                    type="text"
                    class="px-6 py-3 border border-gray-300 rounded-lg w-52 focus:outline-none"
                    placeholder="0"
                  />
                  <div class="relative w-40">
                    <select
                      class="block w-full px-6 py-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none"
                    >
                      <option>minutes</option>
                      <option>hours</option>
                      <option>day</option>
                    </select>
                    <!-- Custom Arrow -->
                    <div
                      class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.917l3.71-3.69a.75.75 0 111.06 1.06l-4 3.997a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Delivery fee  -->
            <div class="w-2/3 mt-7">
              <!-- Delivery Fee Section -->
              <h2
                class="text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
              >
                Delivery fee
              </h2>
              <div class="relative w-full mt-4">
                <select
                  v-model="selectedDeliveryFeeOption"
                  class="block w-full px-6 py-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none"
                >
                  <option value="free">Free delivery</option>
                  <option value="charge">
                    Charge delivery fee for all orders
                  </option>
                  <option value="conditional">
                    Free delivery for orders over a certain amount
                  </option>
                </select>
                <!-- Custom Arrow -->
                <div
                  class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.917l3.71-3.69a.75.75 0 111.06 1.06l-4 3.997a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div class="mt-4">
                <!-- Currency Input Field -->
                <div
                  v-if="selectedDeliveryFeeOption === 'charge'"
                  class="flex items-center px-6 py-3 border border-gray-300 rounded-lg"
                >
                  <span class="mr-2 text-gray-700">AED</span>
                  <input
                    type="text"
                    class="w-full focus:outline-none"
                    placeholder="0.00"
                  />
                </div>

                <div
                  v-if="selectedDeliveryFeeOption === 'conditional'"
                  class="mt-4"
                >
                  <!-- First Input Field -->
                  <div
                    class="relative px-6 py-3 mb-4 border border-gray-300 rounded-lg"
                  >
                    <span
                      class="absolute -top-3 left-6 px-1 py-1 bg-white font-normal text-xs leading-[18px] text-gray-500"
                      >Order amount to qualify for free delivery</span
                    >
                    <div class="flex items-center">
                      <span class="mr-2 text-gray-700">AED</span>
                      <input
                        type="text"
                        class="w-full focus:outline-none"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <!-- Second Input Field -->
                  <div
                    class="relative px-6 py-3 mb-4 border border-gray-300 rounded-lg"
                  >
                    <span
                      class="absolute -top-3 left-7 px-2 py-1 bg-white font-normal text-xs leading-[18px] text-gray-500"
                      >Delivery fee for all other orders</span
                    >
                    <div class="flex items-center">
                      <span class="mr-2 text-gray-700">AED</span>
                      <input
                        type="text"
                        class="w-full focus:outline-none"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Servie charge -->
            <div class="pt-1">
              <div class="flex items-center justify-between">
                <!-- Heading and Tooltip -->
                <div class="flex items-center space-x-2">
                  <h2
                    class="text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
                  >
                    Service fee
                  </h2>
                  <div class="relative inline-block">
                    <svg
                      @mouseover="serviceFeeTooltip = true"
                      @mouseleave="serviceFeeTooltip = false"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                        fill="#A4A4A4"
                      />
                      <path
                        d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                        stroke="white"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div
                      v-if="serviceFeeTooltip"
                      class="absolute bottom-4 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg left-4 w-64"
                    >
                      Charge a service fee on delivery orders
                    </div>
                  </div>
                </div>

                <!-- Toggle Button -->
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="sr-only peer"
                    v-model="isServiceFeeEnabled"
                  />
                  <div
                    class="w-10 h-4 bg-customGray2 rounded-full peer peer-checked:after:translate-x-2/3 peer-checked:after:bg-customDarkBlue peer-checked:after:border-customDarkBlue after:content-[''] after:absolute after:-top-1.5 after:-left-1 after:bg-customBlack after:border-customBlack after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-customLightBlue"
                  ></div>
                </label>
              </div>

              <div
                v-if="isServiceFeeEnabled === true"
                class="flex items-center w-full mt-4 space-x-3"
              >
                <!-- Input Field -->
                <div
                  v-if="serviceFee === 'setAmount'"
                  class="flex items-center w-full px-6 py-3 border border-gray-300 rounded-lg"
                >
                  <span class="pr-2 text-gray-700">AED</span>
                  <input
                    type="text"
                    class="w-full focus:outline-none"
                    placeholder="0.00"
                  />
                </div>

                <div
                  v-if="serviceFee === 'percentageOfTotal'"
                  class="relative w-full"
                >
                  <input
                    type="number"
                    v-model="percentage"
                    class="w-full px-6 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none"
                    placeholder="0"
                  />
                  <span
                    class="absolute text-lg font-normal leading-6 text-gray-500 font-istok-web right-4 top-3.5"
                    >%</span
                  >
                </div>

                <!-- Select Field -->
                <div class="relative w-full">
                  <select
                    v-model="serviceFee"
                    class="block w-full px-6 py-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none"
                  >
                    <option value="setAmount">Set amount</option>
                    <option value="percentageOfTotal">
                      Percentage of total
                    </option>
                  </select>
                  <div
                    class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.917l3.71-3.69a.75.75 0 111.06 1.06l-4 3.997a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- divider  -->
            <div class="w-full mt-10 border-b-8 border-customBorder5"></div>

            <div>
              <!-- Minimum Order Amount Section -->
              <div class="flex items-center justify-between mt-8">
                <div class="flex items-center space-x-2">
                  <h2
                    class="text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
                  >
                    Minimum order amount
                  </h2>
                  <div class="relative inline-block">
                    <svg
                      @mouseover="minOrderTooltip = true"
                      @mouseleave="minOrderTooltip = false"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                        fill="#A4A4A4"
                      />
                      <path
                        d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                        stroke="white"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div
                      v-if="minOrderTooltip"
                      class="absolute bottom-4 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg left-4 w-64"
                    >
                      Require a minimum amount for orders to be eligible for
                      delivery
                    </div>
                  </div>
                </div>

                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="sr-only peer"
                    v-model="isMinOrderEnabled"
                  />
                  <div
                    class="w-10 h-4 bg-customGray2 rounded-full peer peer-checked:after:translate-x-2/3 peer-checked:after:bg-customDarkBlue peer-checked:after:border-customDarkBlue after:content-[''] after:absolute after:-top-1.5 after:-left-1 after:bg-customBlack after:border-customBlack after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-customLightBlue"
                  ></div>
                </label>
              </div>
              <div
                v-if="isMinOrderEnabled === true"
                class="flex items-center w-1/2 px-6 py-3 mt-4 mb-5 border border-gray-300 rounded-lg"
              >
                <span class="pr-2 text-gray-700">AED</span>
                <input
                  type="text"
                  class="w-full focus:outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>

            <!-- Divider -->
            <div class="w-full mt-10 border-b-8 border-customBorder5"></div>

            <!-- No-contact Delivery Section -->
            <div class="flex items-center justify-between mt-8">
              <div class="flex items-center space-x-2">
                <h2
                  class="text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
                >
                  No-contact delivery
                </h2>
                <div class="relative inline-block">
                  <svg
                    @mouseover="noContactTooltip = true"
                    @mouseleave="noContactTooltip = false"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                      fill="#A4A4A4"
                    />
                    <path
                      d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                      stroke="white"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div
                    v-if="noContactTooltip"
                    class="absolute bottom-4 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg left-4 w-96"
                  >
                    Customers will be able to select no-contact delivery and add
                    instructions for the courier at checkout. This option is not
                    shown to customers who order alcoholic items.
                  </div>
                </div>
              </div>

              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="sr-only peer"
                  v-model="isNoContactEnabled"
                />
                <div
                  class="w-10 h-4 bg-customGray2 rounded-full peer peer-checked:after:translate-x-2/3 peer-checked:after:bg-customDarkBlue peer-checked:after:border-customDarkBlue after:content-[''] after:absolute after:-top-1.5 after:-left-1 after:bg-customBlack after:border-customBlack after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-customLightBlue"
                ></div>
              </label>
            </div>
          </div>
        </div>

        <!-- 4th box  -->
        <div
          v-if="isAssignDeliveryTimes === true"
          class="bg-white border-[0.88px] rounded-lg shadow-sm mt-3 p-9 border-customBorder1"
        >
          <!-- Header with Icon and Delivery Text -->
          <div class="flex items-center mb-8 space-x-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.375 7.63194V14.4375H21.1806M14.375 26.6875C7.60951 26.6875 2.125 21.203 2.125 14.4375C2.125 7.67201 7.60951 2.1875 14.375 2.1875C21.1405 2.1875 26.625 7.67201 26.625 14.4375C26.625 21.203 21.1405 26.6875 14.375 26.6875Z"
                stroke="#969696"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span
              class="text-sm font-bold leading-5 font-istok-web text-textColor2"
              >TIMING</span
            >
          </div>

          <div v-if="isAssignDeliveryTimes === true">
            <!-- Heading -->
            <h2 class="text-[22px] font-bold text-gray-800 mb-2">
              When can orders be delivered?
            </h2>

            <!-- Radio Buttons -->
            <div class="flex flex-col">
              <label
                class="flex items-center justify-between py-2 border-b cursor-pointer"
              >
                <span class="text-xl font-normal leading-7 text-gray-800">
                  Orders are delivered at specific times (e.g., 12:30 pm)
                </span>

                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="deliveryTimeOption"
                    v-model="deliveryTimeOption"
                    value="specificTime"
                    class="hidden"
                  />
                  <span
                    class="flex items-center justify-center w-6 h-6 rounded-full"
                    :class="{
                      'border-8 border-customBlue':
                        deliveryTimeOption === 'specificTime',
                      'border-[2.63px] border-[#A4A4A4]':
                        deliveryTimeOption === 'deliveryHours',
                    }"
                  >
                  </span>
                </label>
              </label>

              <label
                class="flex items-center justify-between py-2 border-b cursor-pointer"
              >
                <span class="text-xl font-normal leading-7 text-gray-800">
                  Orders are delivered any time during my delivery hours (e.g.,
                  9:00 am - 5:00 pm)
                </span>

                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="deliveryTimeOption"
                    v-model="deliveryTimeOption"
                    value="deliveryHours"
                    class="hidden"
                  />
                  <span
                    class="flex items-center justify-center w-6 h-6 rounded-full"
                    :class="{
                      'border-8 border-customBlue':
                        deliveryTimeOption === 'deliveryHours',
                      'border-[2.63px] border-[#A4A4A4]':
                        deliveryTimeOption === 'specificTime',
                    }"
                  >
                  </span>
                </label>
              </label>
            </div>
          </div>

          <!-- Divider -->
          <div
            v-if="isAssignDeliveryTimes === true"
            class="w-full border-b-8 mt-9 mb-9 border-customBorder5"
          ></div>

          <div v-if="isAssignDeliveryTimes === true" class="flex flex-col">
            <h2 class="text-[22px] font-bold text-gray-800 mb-2">
              If a customer places an order during your fulfillment hours, what
              is the soonest that the order can be delivered?
            </h2>

            <label
              class="flex items-center justify-between py-2 border-b cursor-pointer"
            >
              <span class="text-xl font-normal leading-7 text-gray-800">
                The same day they place the order
              </span>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="fulfillmentTimeOption"
                  v-model="fulfillmentTimeOption"
                  value="sameDay"
                  class="hidden"
                />
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full"
                  :class="{
                    'border-8 border-customBlue':
                      fulfillmentTimeOption === 'sameDay',
                    'border-[2.63px] border-[#A4A4A4]':
                      fulfillmentTimeOption === 'followingDay',
                  }"
                >
                </span>
              </label>
            </label>

            <label
              class="flex items-center justify-between py-2 border-b cursor-pointer"
            >
              <span class="text-xl font-normal leading-7 text-gray-800">
                On a following day (i.e., one or more days in the future)
              </span>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="fulfillmentTimeOption"
                  v-model="fulfillmentTimeOption"
                  value="followingDay"
                  class="hidden"
                />
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full"
                  :class="{
                    'border-8 border-customBlue':
                      fulfillmentTimeOption === 'followingDay',
                    'border-[2.63px] border-[#A4A4A4]':
                      fulfillmentTimeOption === 'sameDay',
                  }"
                >
                </span>
              </label>
            </label>
          </div>

          <!-- Divider -->
          <div
            v-if="
              isAssignDeliveryTimes === true &&
              fulfillmentTimeOption === 'sameDay'
            "
            class="w-full border-b-8 mt-9 mb-9 border-customBorder5"
          ></div>

          <div
            v-if="
              isAssignDeliveryTimes === true &&
              fulfillmentTimeOption === 'sameDay'
            "
            class="flex flex-col"
          >
            <div class="flex items-center space-x-2">
              <h2 class="text-[22px] font-bold text-gray-800 mb-2">
                Do you start preparing orders as soon as they are received?
              </h2>
              <!-- Info Tooltip -->
              <div class="relative inline-block">
                <!-- Info Icon -->
                <svg
                  @mouseover="orderPreparationTooltip = true"
                  @mouseleave="orderPreparationTooltip = false"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                    fill="#A4A4A4"
                  />
                  <path
                    d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                    stroke="white"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <!-- Tooltip -->
                <div
                  v-if="orderPreparationTooltip"
                  class="absolute bottom-5 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg -left-40 w-96"
                >
                  If you wait until a certain time of day to review your orders,
                  and start preparing them afterwards, consider the second
                  option. Otherwise choose the first option.
                </div>
              </div>
            </div>

            <label
              class="flex items-center justify-between py-2 border-b cursor-pointer"
            >
              <span class="text-xl font-normal leading-7 text-gray-800">
                I generally start preparing orders as soon as they are received
              </span>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="orderPreparationOption"
                  v-model="orderPreparationOption"
                  value="startImmediately"
                  class="hidden"
                />
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full"
                  :class="{
                    'border-8 border-customBlue':
                      orderPreparationOption === 'startImmediately',
                    'border-[2.63px] border-[#A4A4A4]':
                      orderPreparationOption === 'startAfterCertainTime',
                  }"
                >
                </span>
              </label>
            </label>

            <label
              class="flex items-center justify-between py-2 border-b cursor-pointer"
            >
              <div class="flex items-center space-x-2">
                <span class="text-xl font-normal leading-7 text-gray-800"
                  >I only start preparing orders after a certain time</span
                >
                <!-- Info Tooltip -->
                <div class="relative inline-block">
                  <!-- Info Icon -->
                  <svg
                    @mouseover="orderPreparationDelayTool = true"
                    @mouseleave="orderPreparationDelayTool = false"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                      fill="#A4A4A4"
                    />
                    <path
                      d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                      stroke="white"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <!-- Tooltip -->
                  <div
                    v-if="orderPreparationDelayTool"
                    class="absolute bottom-5 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg -left-40 w-96"
                  >
                    Customers placing orders after this time will be shown a
                    pickup time on the next available fulfillment day. E.g. if
                    you enter 10:00 am, customers ordering after 10:00 am will
                    see a pickup time on the next day.
                  </div>
                </div>
              </div>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="orderPreparationOption"
                  v-model="orderPreparationOption"
                  value="startAfterCertainTime"
                  class="hidden"
                />
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full"
                  :class="{
                    'border-8 border-customBlue':
                      orderPreparationOption === 'startAfterCertainTime',
                    'border-[2.63px] border-[#A4A4A4]':
                      orderPreparationOption === 'startImmediately',
                  }"
                >
                </span>
              </label>
            </label>
          </div>

          <!-- Divider -->
          <div
            v-if="
              isAssignDeliveryTimes === true &&
              fulfillmentTimeOption === 'sameDay'
            "
            class="w-full border-b-8 mt-9 mb-9 border-customBorder5"
          ></div>

          <div
            v-if="
              isAssignDeliveryTimes === true &&
              fulfillmentTimeOption === 'sameDay'
            "
            class="flex flex-col"
          >
            <label
              class="mb-3 text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
            >
              How much time do you need to prepare an order for pickup or
              delivery?
            </label>
            <input
              type="text"
              v-model="preparationTime"
              placeholder="How much time does it take to prepare this item?"
              class="px-6 py-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <!-- Divider -->
          <div
            v-if="
              isAssignDeliveryTimes === true &&
              fulfillmentTimeOption === 'followingDay'
            "
            class="w-full mb-8 border-b-8 mt-9 border-customBorder5"
          ></div>

          <div
            v-if="
              isAssignDeliveryTimes === true &&
              fulfillmentTimeOption === 'followingDay'
            "
            class=""
          >
            <div class="flex items-center justify-between">
              <label
                class="mb-2 w-4/5 text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
              >
                Do you want to let customers schedule delivery orders for future
                days?
              </label>

              <!-- Toggle Switch -->
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="sr-only peer"
                  v-model="isDeliverySchedulingEnabled"
                />
                <div
                  class="w-10 h-4 bg-customGray2 rounded-full peer peer-checked:after:translate-x-2/3 peer-checked:after:bg-customDarkBlue peer-checked:after:border-customDarkBlue after:content-[''] after:absolute after:-top-1.5 after:-left-1 after:bg-customBlack after:border-customBlack after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-customLightBlue"
                ></div>
              </label>
            </div>
            <div v-if="isDeliverySchedulingEnabled === true">
              <!-- Input Field and Text -->
              <span class="mr-5 text-base text-gray-700">
                Can be scheduled up to
              </span>
              <input
                type="number"
                v-model="scheduleDays"
                class="w-16 p-2 text-center border border-gray-300 rounded-md"
                placeholder="30"
              />
              <span class="ml-4 text-base text-gray-700">
                calendar days in advance
              </span>
            </div>

            <!-- Additional Information -->
            <p
              v-if="isDeliverySchedulingEnabled === true"
              class="mt-2 text-sm text-gray-500"
            >
              0 days minimum; 365 days maximum
            </p>
          </div>

          <!-- Divider -->
          <div
            v-if="
              isAssignDeliveryTimes === true &&
              fulfillmentTimeOption === 'followingDay'
            "
            class="w-full border-b-8 mt-9 mb-9 border-customBorder5"
          ></div>

          <div
            v-if="
              isAssignDeliveryTimes === true &&
              fulfillmentTimeOption === 'followingDay'
            "
          >
            <div class="flex items-center justify-between">
              <label class="w-4/5 mb-2 space-x-2">
                <span
                  class="text-[22px] font-bold leading-8 text-textColor5 font-istok-web"
                  >Do you want SpreadX to limit the number of orders that can be
                  picked up or delivered at the same time?</span
                >
                <!-- Info Tooltip -->
                <div class="relative inline-block">
                  <!-- Info Icon -->
                  <svg
                    @mouseover="deliveryLimitTool = true"
                    @mouseleave="deliveryLimitTool = false"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                      fill="#A4A4A4"
                    />
                    <path
                      d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                      stroke="white"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <!-- Tooltip -->
                  <div
                    v-if="deliveryLimitTool"
                    class="absolute bottom-5 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg -left-40 w-96"
                  >
                    We'll automatically space out delivery orders so you don't
                    get overwhelmed
                  </div>
                </div>
              </label>

              <div class="flex items-center space-x-2">
                <!-- Toggle Switch -->
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="sr-only peer"
                    v-model="isLimitEnabled"
                  />
                  <div
                    class="w-10 h-4 bg-customGray2 rounded-full peer peer-checked:after:translate-x-2/3 peer-checked:after:bg-customDarkBlue peer-checked:after:border-customDarkBlue after:content-[''] after:absolute after:-top-1.5 after:-left-1 after:bg-customBlack after:border-customBlack after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-customLightBlue"
                  ></div>
                </label>
              </div>
            </div>
            <div v-if="isLimitEnabled === true">
              <!-- Input Field and Text -->
              <span class="mr-4 text-base text-gray-700"> Allow </span>
              <input
                type="number"
                v-model="deliveryLimit"
                class="w-16 p-2 text-center border border-gray-300 rounded-md"
                placeholder="10"
              />
              <span class="ml-2 text-base text-gray-700">
                deliveries every 15 minutes
              </span>
            </div>
          </div>
        </div>

        <!-- 5th box  -->
        <div
          class="bg-white border-[0.88px] rounded-lg shadow-sm mt-3 p-9 border-customBorder1"
        >
          <!-- Header with Icon and Delivery Text -->
          <div class="flex items-center mb-8 space-x-2">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3366 1.43207C12.0044 0.105978 10.1219 0.105978 9.78836 1.43207L9.6913 1.82306C9.63451 2.05028 9.51794 2.25816 9.3537 2.42514C9.18946 2.59212 8.98353 2.7121 8.75728 2.77264C8.53103 2.83317 8.2927 2.83206 8.06702 2.76942C7.84134 2.70678 7.63653 2.58488 7.47386 2.41638L7.1936 2.12792C6.24347 1.14498 4.61251 2.08691 4.98847 3.40069L5.09783 3.78895C5.1621 4.0139 5.16507 4.25194 5.10643 4.47842C5.04779 4.70491 4.92967 4.9116 4.76431 5.0771C4.59896 5.24259 4.39236 5.36088 4.16593 5.41971C3.9395 5.47854 3.70146 5.47578 3.47645 5.4117L3.08819 5.30097C1.77578 4.92501 0.832475 6.55597 1.81542 7.5061L2.10388 7.78636C2.27238 7.94903 2.39428 8.15384 2.45692 8.37952C2.51956 8.6052 2.52067 8.84353 2.46014 9.06978C2.3996 9.29603 2.27962 9.50196 2.11264 9.6662C1.94566 9.83044 1.73778 9.94701 1.51056 10.0038L1.11957 10.1009C-0.206522 10.4331 -0.206522 12.3156 1.11957 12.6491L1.51056 12.7462C1.73778 12.803 1.94566 12.9196 2.11264 13.0838C2.27962 13.248 2.3996 13.454 2.46014 13.6802C2.52067 13.9065 2.51956 14.1448 2.45692 14.3705C2.39428 14.5962 2.27238 14.801 2.10388 14.9636L1.81542 15.2439C0.832475 16.194 1.77441 17.825 3.08819 17.449L3.47645 17.3397C3.70154 17.2753 3.93976 17.2723 4.1664 17.331C4.39305 17.3897 4.59986 17.5079 4.76541 17.6735C4.93096 17.839 5.04921 18.0458 5.1079 18.2725C5.16659 18.4991 5.16359 18.7373 5.0992 18.9624L4.98847 19.3493C4.61251 20.6617 6.24347 21.605 7.1936 20.6221L7.47386 20.3336C7.63653 20.1651 7.84134 20.0432 8.06702 19.9806C8.2927 19.9179 8.53103 19.9168 8.75728 19.9774C8.98353 20.0379 9.18946 20.1579 9.3537 20.3249C9.51794 20.4918 9.63451 20.6997 9.6913 20.9269L9.78836 21.3179C10.1206 22.644 12.0031 22.644 12.3366 21.3179L12.4337 20.9269C12.4905 20.6997 12.6071 20.4918 12.7713 20.3249C12.9355 20.1579 13.1415 20.0379 13.3677 19.9774C13.594 19.9168 13.8323 19.9179 14.058 19.9806C14.2837 20.0432 14.4885 20.1651 14.6511 20.3336L14.9314 20.6221C15.8815 21.605 17.5125 20.6631 17.1365 19.3493L17.0272 18.9611C16.9628 18.736 16.9598 18.4977 17.0185 18.2711C17.0772 18.0445 17.1954 17.8376 17.361 17.6721C17.5265 17.5065 17.7333 17.3883 17.96 17.3296C18.1866 17.2709 18.4248 17.2739 18.6499 17.3383L19.0368 17.449C20.3492 17.825 21.2925 16.194 20.3096 15.2439L20.0211 14.9636C19.8526 14.801 19.7307 14.5962 19.6681 14.3705C19.6054 14.1448 19.6043 13.9065 19.6649 13.6802C19.7254 13.454 19.8454 13.248 20.0124 13.0838C20.1793 12.9196 20.3872 12.803 20.6144 12.7462L21.0054 12.6491C22.3315 12.3169 22.3315 10.4344 21.0054 10.1009L20.6144 10.0038C20.3872 9.94701 20.1793 9.83044 20.0124 9.6662C19.8454 9.50196 19.7254 9.29603 19.6649 9.06978C19.6043 8.84353 19.6054 8.6052 19.6681 8.37952C19.7307 8.15384 19.8526 7.94903 20.0211 7.78636L20.3096 7.5061C21.2925 6.55597 20.3506 4.92501 19.0368 5.30097L18.6486 5.41033C18.4236 5.4746 18.1856 5.47757 17.9591 5.41893C17.7326 5.36029 17.5259 5.24217 17.3604 5.07681C17.1949 4.91146 17.0766 4.70486 17.0178 4.47843C16.959 4.252 16.9617 4.01396 17.0258 3.78895L17.1365 3.40069C17.5125 2.08828 15.8815 1.14498 14.9314 2.12792L14.6511 2.41638C14.4885 2.58488 14.2837 2.70678 14.058 2.76942C13.8323 2.83206 13.594 2.83317 13.3677 2.77264C13.1415 2.7121 12.9355 2.59212 12.7713 2.42514C12.6071 2.25816 12.4905 2.05028 12.4337 1.82306L12.3366 1.43207ZM11.0625 18.2064C10.1572 18.2192 9.25831 18.052 8.41818 17.7144C7.57805 17.3768 6.81339 16.8756 6.16864 16.2399C5.5239 15.6042 5.01192 14.8467 4.66248 14.0114C4.31303 13.1761 4.13308 12.2797 4.13308 11.3743C4.13308 10.4689 4.31303 9.57249 4.66248 8.73722C5.01192 7.90195 5.5239 7.14445 6.16864 6.50876C6.81339 5.87308 7.57805 5.37187 8.41818 5.03427C9.25831 4.69667 10.1572 4.52942 11.0625 4.54222C12.8747 4.54222 14.6126 5.2621 15.894 6.5435C17.1754 7.82489 17.8953 9.56284 17.8953 11.375C17.8953 13.1872 17.1754 14.9251 15.894 16.2065C14.6126 17.4879 12.8747 18.2078 11.0625 18.2078V18.2064Z"
                fill="#969696"
              />
            </svg>

            <span
              class="text-sm font-bold leading-5 font-istok-web text-textColor2"
              >WORKFLOW</span
            >
          </div>

          <div class="flex flex-col">
            <div class="flex items-center space-x-2">
              <h2 class="text-[22px] font-bold text-gray-800 mb-2">
                When should pickup & delivery order tickets print?
              </h2>
              <!-- Info Tooltip -->
            </div>

            <label
              class="flex items-center justify-between py-2 border-b cursor-pointer"
            >
              <div class="flex items-center space-x-2">
                <span class="text-xl font-normal leading-7 text-gray-800">
                  Print order tickets based on pickup and delivery time
                </span>
                <div class="relative inline-block">
                  <!-- Info Icon -->
                  <svg
                    @mouseover="pickupDeliveryTooltip = true"
                    @mouseleave="pickupDeliveryTooltip = false"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                      fill="#A4A4A4"
                    />
                    <path
                      d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                      stroke="white"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <!-- Tooltip -->
                  <div
                    v-if="pickupDeliveryTooltip"
                    class="absolute bottom-5 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg -left-40 w-96"
                  >
                    Order tickets will print based on how much prep time is
                    required before the order is due
                  </div>
                </div>
              </div>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="ticketPrintOption"
                  v-model="ticketPrintOption"
                  value="printBasedOnTime"
                  class="hidden"
                />
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full"
                  :class="{
                    'border-8 border-customBlue':
                      ticketPrintOption === 'printBasedOnTime',
                    'border-[2.63px] border-[#A4A4A4]':
                      ticketPrintOption === 'printWhenPlaced',
                  }"
                >
                </span>
              </label>
            </label>

            <label
              class="flex items-center justify-between py-2 border-b cursor-pointer"
            >
              <div class="flex items-center space-x-2">
                <span class="text-xl font-normal leading-7 text-gray-800"
                  >Print order tickets when the order is placed</span
                >
                <!-- Info Tooltip -->
                <div class="relative inline-block">
                  <!-- Info Icon -->
                  <svg
                    @mouseover="orderPlacementTooltip = true"
                    @mouseleave="orderPlacementTooltip = false"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                      fill="#A4A4A4"
                    />
                    <path
                      d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                      stroke="white"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <!-- Tooltip -->
                  <div
                    v-if="orderPlacementTooltip"
                    class="absolute bottom-5 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg -left-40 w-96"
                  >
                    All order tickets will print when the order is placed, even
                    if the order is scheduled for a future pickup or delivery
                    time
                  </div>
                </div>
              </div>

              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="ticketPrintOption"
                  v-model="ticketPrintOption"
                  value="printWhenPlaced"
                  class="hidden"
                />
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full"
                  :class="{
                    'border-8 border-customBlue':
                      ticketPrintOption === 'printWhenPlaced',
                    'border-[2.63px] border-[#A4A4A4]':
                      ticketPrintOption === 'printBasedOnTime',
                  }"
                >
                </span>
              </label>
            </label>
          </div>
        </div>

        <!-- 5th box  -->
        <div
          class="bg-white border-[0.88px] rounded-lg shadow-sm mt-3 p-9 border-customBorder1"
        >
          <!-- Header with Icon and Delivery Text -->
          <div class="flex items-center mb-8 space-x-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.375 6.88194V13.6875H21.1806M14.375 25.9375C7.60951 25.9375 2.125 20.453 2.125 13.6875C2.125 6.92201 7.60951 1.4375 14.375 1.4375C21.1405 1.4375 26.625 6.92201 26.625 13.6875C26.625 20.453 21.1405 25.9375 14.375 25.9375Z"
                stroke="#969696"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span
              class="text-sm font-bold leading-5 font-istok-web text-textColor2"
              >FULFILLMENT HOURS</span
            >
          </div>

          <div class="flex flex-col">
            <div class="flex items-center space-x-2">
              <h2 class="text-[22px] font-bold text-gray-800 mb-2">
                When do you plan to fulfill orders?
              </h2>
              <!-- Info Tooltip -->
              <div class="relative inline-block">
                <!-- Info Icon -->
                <svg
                  @mouseover="fulfillmentTooltip = true"
                  @mouseleave="fulfillmentTooltip = false"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.625 9.6875C1.625 14.0367 5.15076 17.5625 9.5 17.5625C13.8492 17.5625 17.375 14.0367 17.375 9.6875C17.375 5.33826 13.8492 1.8125 9.5 1.8125C5.15076 1.8125 1.625 5.33826 1.625 9.6875Z"
                    fill="#A4A4A4"
                  />
                  <path
                    d="M9.5 8.8125V13.1875M9.5 17.5625C5.15076 17.5625 1.625 14.0367 1.625 9.6875C1.625 5.33826 5.15076 1.8125 9.5 1.8125C13.8492 1.8125 17.375 5.33826 17.375 9.6875C17.375 14.0367 13.8492 17.5625 9.5 17.5625ZM9.54358 6.1875V6.275L9.45642 6.27517V6.1875H9.54358Z"
                    stroke="white"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <!-- Tooltip -->
                <div
                  v-if="fulfillmentTooltip"
                  class="absolute bottom-5 z-10 p-[6px] text-sm text-white bg-gray-400 rounded-md shadow-lg left-4 w-96"
                >
                  These are the days of the week when customers can pick up or
                  have their orders delivered. Customers will still be able to
                  place orders outside these hours.
                </div>
              </div>
            </div>

            <!-- FULFILLMENT HOURS -->
            <div class="my-8">
              <div
                v-for="(day, index) in days"
                :key="index"
                class="flex items-start mb-4 space-x-12"
              >
                <div class="flex items-center w-40 space-x-9">
                  <input
                    type="checkbox"
                    v-model="day.enabled"
                    class="w-5 h-5 text-blue-600 form-checkbox"
                  />
                  <span
                    class="text-lg font-bold leading-7 text-gray-900 font-istok-web"
                    >{{ day.name }}</span
                  >
                </div>

                <div
                  v-if="day.enabled"
                  class="flex flex-col mb-3 -mt-3 space-y-4"
                >
                  <div
                    v-for="(slot, slotIndex) in day.slots"
                    :key="slotIndex"
                    class="flex items-center space-x-4"
                  >
                    <input
                      type="time"
                      v-model="slot.start"
                      class="px-6 py-3 text-xl font-normal leading-8 border border-gray-300 rounded-md w-44 font-istok-web placeholder:font-istok-web placeholder:font-normal placeholder:text-xl"
                    />
                    <span class="text-xl font-normal leading-7 font-istok-web"
                      >to</span
                    >
                    <input
                      type="time"
                      v-model="slot.end"
                      class="px-6 py-3 text-xl font-normal leading-8 border border-gray-300 rounded-md w-44 font-istok-web placeholder:font-istok-web placeholder:font-normal placeholder:text-xl"
                    />
                    <button
                      v-if="slotIndex === day.slots.length - 1"
                      @click="addTimeSlot(index)"
                      class="text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div v-else class="flex items-center mb-3 -mt-3 space-x-4">
                  <input
                    type="time"
                    disabled
                    class="px-6 py-3 text-xl font-normal leading-8 text-gray-500 bg-gray-200 border border-gray-300 rounded-md w-44"
                    value="09:00"
                  />
                  <span class="text-xl font-normal leading-7 font-istok-web"
                    >to</span
                  >
                  <input
                    type="time"
                    disabled
                    class="px-6 py-3 text-xl font-normal leading-8 text-gray-500 bg-gray-200 border border-gray-300 rounded-md w-44"
                    value="17:00"
                  />
                </div>
              </div>
            </div>

            <!-- choose time zone -->
            <div class="relative flex flex-col w-56">
              <label
                class="absolute px-1 text-sm text-gray-500 bg-white -top-2 left-4"
              >
                Time Zone
              </label>
              <select
                v-model="selectedTimeZone"
                class="block w-full px-6 py-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none"
              >
                <option value="Asia/Dubai">Asia - Dubai</option>
                <!-- Add more time zones here as needed -->
              </select>
              <!-- Custom Arrow -->
              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.917l3.71-3.69a.75.75 0 111.06 1.06l-4 3.997a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <!-- divider  -->
            <div class="w-full mt-8 mb-6 border-b-8 border-customBorder5"></div>

            <!-- Restricted dates -->
            <div>
              <h2 class="text-[22px] font-bold text-gray-800 mb-5">
                Restricted dates
              </h2>
              <div
                v-for="(date, index) in dates"
                :key="index"
                class="mb-4 date-entry"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-10">
                    <div class="relative flex flex-col w-56">
                      <label
                        class="absolute px-1 text-sm text-gray-500 bg-white -top-2 left-4"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        v-model="date.value"
                        class="px-6 py-3 border border-gray-300 rounded-md"
                      />
                    </div>

                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        v-model="date.repeat"
                        class="w-4 h-4 text-gray-600 form-checkbox"
                      />
                      <span class="text-gray-700">Repeat every year</span>
                    </label>
                  </div>

                  <button
                    @click="removeDate(index)"
                    class="text-white bg-customBlue focus:outline-none rounded-full p-1 w-[22px] h-[22px] flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <hr class="my-4" />
              </div>

              <button
                @click="addDate"
                class="flex items-center text-lg font-bold leading-7 text-customBlue"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mr-1 font-bold"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Add date
              </button>
            </div>
          </div>
        </div>
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
      showTooltip: false,
      deliveryTimeTooltip: false,
      tags: ["000000", "000000"], // Initial tags
      newTag: "",
      selectedDeliveryFeeOption: "free",
      serviceFeeTooltip: false,
      isServiceFeeEnabled: true,
      minOrderTooltip: false,
      noContactTooltip: false,
      isMinOrderEnabled: true,
      isNoContactEnabled: true,
      deliveryTimeOption: "specificTime",
      fulfillmentTimeOption: "sameDay",
      orderPreparationOption: "startImmediately",
      orderPreparationTooltip: false,
      orderPreparationDelayTool: false,
      isDeliverySchedulingEnabled: true,
      isLimitEnabled: true,
      deliveryLimitTool: false,
      ticketPrintOption: "printBasedOnTime",
      pickupDeliveryTooltip: false,
      orderPlacementTooltip: false,
      fulfillmentTooltip: false,
      selectedTimeZone: "Asia/Dubai",
      serviceFee: "setAmount",
      days: [
        {
          name: "Sunday",
          enabled: false,
          slots: [{ start: "09:00", end: "17:00" }],
        },
        {
          name: "Monday",
          enabled: true,
          slots: [
            { start: "09:00", end: "12:00" },
            { start: "13:00", end: "17:00" },
          ],
        },
        {
          name: "Tuesday",
          enabled: true,
          slots: [{ start: "09:00", end: "17:00" }],
        },
        {
          name: "Wednesday",
          enabled: true,
          slots: [{ start: "09:00", end: "17:00" }],
        },
        {
          name: "Thursday",
          enabled: true,
          slots: [{ start: "09:00", end: "17:00" }],
        },
        {
          name: "Friday",
          enabled: true,
          slots: [{ start: "09:00", end: "17:00" }],
        },
        {
          name: "Saturday",
          enabled: false,
          slots: [{ start: "09:00", end: "17:00" }],
        },
      ],
      dates: [
        {
          value: "2024-08-07",
          repeat: false,
        },
      ],
    };
  },
  methods: {
    addTag() {
      if (this.newTag.trim() !== "") {
        this.tags.push(this.newTag.trim());
        this.newTag = "";
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
    addTimeSlot(dayIndex) {
      // Add a new time slot with default values to the selected day
      this.days[dayIndex].slots.push({ start: "09:00", end: "17:00" });
    },
    addDate() {
      this.dates.push({
        value: new Date().toISOString().substr(0, 10),
        repeat: false,
      });
    },
    removeDate(index) {
      this.dates.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>

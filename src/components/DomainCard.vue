<template>
  <div class="h-screen">
    <div class="pt-16 pr-32 pb-14 pl-[430px]">
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
        class="h-[700px] pl-12 pr-12 mx-auto my-auto overflow-y-auto border py-7 border-customBorder1 rounded-2xl"
      >
        <div class="flex items-center justify-center h-full">
          <div
            class="w-full flex items-center p-4 space-x-10 rounded-xl bg-[#EBF0FF]"
          >
            <div class="mr-4 text-4xl text-gray-700">
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 38.0625C0.75 28.1998 4.66796 18.741 11.642 11.767C18.616 4.79296 28.0748 0.875 37.9375 0.875C47.8002 0.875 57.259 4.79296 64.233 11.767C71.207 18.741 75.125 28.1998 75.125 38.0625C75.125 47.9252 71.207 57.384 64.233 64.358C57.259 71.332 47.8002 75.25 37.9375 75.25C28.0748 75.25 18.616 71.332 11.642 64.358C4.66796 57.384 0.75 47.9252 0.75 38.0625ZM35.6133 5.88137C32.4988 6.82965 29.4076 9.69309 26.8417 14.5042C26.1754 15.7531 25.5634 17.1042 25.0055 18.5577C28.2827 19.2875 31.848 19.7523 35.6133 19.8918V5.88137ZM20.5012 17.3258C21.1644 15.5377 21.9097 13.8674 22.7371 12.3148C23.5461 10.7981 24.4741 9.34791 25.5122 7.97781C21.5543 9.6167 17.9589 12.021 14.9324 15.0527C16.6182 15.9111 18.4745 16.6657 20.5012 17.3258ZM17.0614 35.7383C17.2287 30.7645 17.9353 26.037 19.0881 21.7558C16.5707 20.9543 14.1349 19.9162 11.8133 18.6553C8.11008 23.6256 5.91255 29.555 5.48211 35.7383H17.0614ZM23.5692 22.9969C22.4716 27.1605 21.8479 31.4347 21.7098 35.7383H35.6133V24.5402C31.3832 24.4007 27.3251 23.8662 23.5692 22.9969ZM40.2617 24.5355V35.7383H54.1605C54.024 31.4349 53.4018 27.1607 52.3058 22.9969C48.5499 23.8662 44.4918 24.3914 40.2617 24.5355ZM21.7145 40.3867C21.8771 44.9747 22.5326 49.2838 23.5692 53.1281C27.5252 52.23 31.5585 51.7147 35.6133 51.5895V40.3867H21.7145ZM40.2617 40.3867V51.5848C44.4918 51.7243 48.5499 52.2588 52.3058 53.1281C53.3424 49.2838 53.9979 44.9747 54.1652 40.3867H40.2617ZM25.0055 57.5673C25.5634 59.0208 26.1754 60.3719 26.8417 61.6208C29.4076 66.4319 32.5035 69.2907 35.6133 70.2436V56.2379C31.848 56.3773 28.2827 56.8375 25.0055 57.5673ZM25.5169 68.1472C24.4771 66.7773 23.5476 65.327 22.7371 63.8102C21.8828 62.1891 21.1359 60.5136 20.5012 58.7945C18.5891 59.4094 16.7273 60.1709 14.9324 61.0723C17.9589 64.104 21.5589 66.5083 25.5169 68.1472ZM19.0881 54.3692C17.8828 49.8005 17.2013 45.1095 17.0567 40.3867H5.48211C5.91255 46.57 8.11008 52.4994 11.8133 57.4697C13.998 56.2704 16.4385 55.2292 19.0881 54.3692ZM50.3628 68.1472C54.3187 66.5091 57.9124 64.1065 60.938 61.0769C59.1445 60.1758 57.2843 59.4143 55.3738 58.7992C54.739 60.5167 53.992 62.1906 53.1379 63.8102C52.3289 65.3269 51.4009 66.7771 50.3628 68.1472ZM40.2617 56.2332V70.2436C43.3762 69.2954 46.4674 66.4319 49.0333 61.6208C49.7027 60.3719 50.3147 59.0208 50.8694 57.5673C47.3815 56.8017 43.8308 56.3521 40.2617 56.2332ZM56.7869 54.3692C59.4365 55.2292 61.877 56.2704 64.0617 57.4697C67.7649 52.4994 69.9624 46.57 70.3929 40.3867H58.8183C58.6737 45.1095 57.9922 49.8005 56.7869 54.3692ZM70.3929 35.7383C69.9624 29.555 67.7649 23.6256 64.0617 18.6553C61.877 19.8546 59.4365 20.8958 56.7869 21.7558C57.9397 26.0323 58.6463 30.7645 58.8183 35.7383H70.3929ZM53.1379 12.3148C53.9622 13.8705 54.7091 15.5408 55.3784 17.3258C57.2874 16.7105 59.146 15.949 60.938 15.0481C57.912 12.0202 54.3183 9.61912 50.3628 7.98246C51.3761 9.29797 52.3058 10.7576 53.1379 12.3148ZM50.8694 18.5577C50.3389 17.1711 49.7257 15.8175 49.0333 14.5042C46.4674 9.69309 43.3762 6.8343 40.2617 5.88137V19.8871C44.027 19.7477 47.5923 19.2875 50.8694 18.5577Z"
                  fill="#393939"
                />
              </svg>
            </div>
            <div class="flex flex-col w-full space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <a href="#" class="text-lg font-semibold text-gray-800"
                    >https://sample-domain-123.spreadx.ae</a
                  >
                  <p class="text-gray-500">SpreadX Domain</p>
                </div>
                <div class="flex items-center">
                  <label class="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      v-model="isPublished"
                      class="sr-only"
                    />
                    <div
                      :class="{
                        'bg-gray-200': !isPublished,
                        'bg-blue-600': isPublished,
                      }"
                      class="relative w-10 h-4 transition-colors duration-200 ease-in-out rounded-full"
                    >
                      <span
                        :class="{
                          'translate-x-0': !isPublished,
                          'translate-x-6': isPublished,
                        }"
                        class="absolute top-0 left-0 w-6 h-6 transition-transform duration-200 ease-in-out transform bg-white rounded-full"
                      ></span>
                    </div>
                  </label>
                </div>
              </div>

              <div class="flex items-center justify-between space-x-3">
                <div class="flex items-center space-x-3">
                  <button
                    class="px-4 py-2 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Manage Domain
                  </button>
                  <button
                    class="flex items-center px-4 py-2 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Edit Site
                    <i class="ml-2 fas fa-external-link-alt"></i>
                  </button>
                  <button
                    class="flex items-center px-4 py-2 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    View Live Site
                    <i class="ml-2 fas fa-external-link-alt"></i>
                  </button>
                </div>
                <div class="font-semibold text-blue-600">PUBLISHED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DomainCard",
  data() {
    return {
      isPublished: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>

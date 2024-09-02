<template>
  <div class="h-screen">
    <div class="pt-16 pr-32 pb-14 pl-[430px]">
      <div class="flex items-end justify-between mb-4">
        <h4
          class="text-xl font-bold leading-[12px] font-istok-web text-customBlue"
        >
          Add products to your site
        </h4>
        <button
          class="px-5 py-3 text-base font-bold leading-5 text-center text-white rounded-md bg-customBlue"
        >
          Continue
        </button>
      </div>

      <div
        class="h-full pl-5 pr-20 overflow-y-auto border py-7 border-customBorder1 rounded-2xl"
      >
        <div class="flex items-center justify-between">
          <h1 class="font-istok-web font-bold text-[28px] leading-8 text-black">
            Products
          </h1>
          <div class="flex items-center space-x-2">
            <button
              class="flex items-center justify-center px-5 py-3 bg-gray-100 rounded-full font-istok-web"
            >
              <div
                class="inline-block w-4 h-4 mr-2 leading-5 text-white rounded-full min-w-4 bg-customBlue"
              >
                +
              </div>
              <span class="text-base font-bold leading-6 text-customBlue"
                >Add from Products Master</span
              >
            </button>
            <button
              class="px-4 py-2 rounded-full bg-gradient-linear2 font-istok-web"
            >
              <div
                class="inline-block w-4 h-4 mr-2 leading-5 text-black bg-white rounded-full min-w-4"
              >
                +
              </div>
              <span class="text-base font-bold leading-6 text-white"
                >Add product</span
              >
            </button>
          </div>
        </div>

        <div class="">
          <a
            class="text-lg font-normal leading-6 underline font-istok-web"
            href="#"
            >Learn more</a
          >
        </div>

        <!-- Filter tag with removable option -->
        <div class="flex items-center mt-4 space-x-5 mb-7">
          <button
            class="flex items-center px-3 py-2 space-x-3 text-sm font-bold leading-5 bg-gray-100 rounded text-textColor3"
          >
            Type:<span class="font-normal">&nbsp;Physical</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
            >
              <path
                d="M4.15635 6.06268L0.672284 9.54543L0.672255 9.54546C0.588035 9.62968 0.521228 9.72966 0.475649 9.8397C0.430069 9.94974 0.40661 10.0677 0.40661 10.1868C0.40661 10.3059 0.430069 10.4238 0.475649 10.5339L0.677747 10.4502L0.475649 10.5339C0.521228 10.6439 0.588035 10.7439 0.672254 10.8281C0.756475 10.9123 0.856458 10.9791 0.966495 11.0247C1.07654 11.0703 1.19448 11.0938 1.31358 11.0938C1.43268 11.0938 1.55062 11.0703 1.66066 11.0247C1.7707 10.9791 1.87068 10.9123 1.9549 10.8281L1.95493 10.8281L5.43768 7.34401L8.92043 10.8281L8.92046 10.8281C9.00468 10.9123 9.10466 10.9791 9.2147 11.0247C9.32474 11.0703 9.44268 11.0938 9.56178 11.0938C9.68088 11.0938 9.79882 11.0703 9.90886 11.0247C10.0189 10.9791 10.1189 10.9123 10.2031 10.8281C10.2873 10.7439 10.3541 10.6439 10.3997 10.5339C10.4453 10.4238 10.4688 10.3059 10.4688 10.1868C10.4688 10.0677 10.4453 9.94974 10.3997 9.8397C10.3541 9.72966 10.2873 9.62968 10.2031 9.54546L10.2031 9.54543L6.71901 6.06268L10.2031 2.57993L10.2031 2.5799C10.2873 2.49568 10.3541 2.3957 10.3997 2.28566C10.4453 2.17562 10.4688 2.05768 10.4688 1.93858C10.4688 1.81948 10.4453 1.70154 10.3997 1.5915C10.3541 1.48146 10.2873 1.38147 10.2031 1.29726C10.1189 1.21304 10.0189 1.14623 9.90886 1.10065L9.82515 1.30275L9.90886 1.10065C9.79883 1.05507 9.68089 1.03161 9.56178 1.03161C9.44268 1.03161 9.32474 1.05507 9.2147 1.10065C9.10466 1.14623 9.00468 1.21304 8.92046 1.29726L8.92043 1.29728L5.43768 4.78135L1.9551 1.29745C1.95507 1.29742 1.95503 1.29739 1.955 1.29736L1.95493 1.29728L1.80022 1.45193M4.15635 6.06268L0.826935 2.42522C0.762924 2.36137 0.712139 2.28552 0.677487 2.20202C0.642836 2.11851 0.625 2.02899 0.625 1.93858C0.625 1.84817 0.642836 1.75865 0.677487 1.67514C0.712139 1.59163 0.762924 1.51578 0.826935 1.45193M4.15635 6.06268L0.672451 2.5801C0.672419 2.58007 0.672387 2.58003 0.672355 2.58L4.15635 6.06268ZM1.80022 1.45193C1.73637 1.38792 1.66052 1.33714 1.57702 1.30249C1.49351 1.26784 1.40399 1.25 1.31358 1.25C1.22317 1.25 1.13365 1.26784 1.05014 1.30249C0.966633 1.33714 0.890783 1.38792 0.826935 1.45193M1.80022 1.45193L5.28303 4.93606L1.80022 1.45193ZM0.826935 1.45193L0.672451 1.29706C0.672385 1.29712 0.67232 1.29719 0.672255 1.29725C0.67219 1.29732 0.672125 1.29739 0.67206 1.29745L0.826935 1.45193Z"
                fill="#2D425D"
                stroke="#2D425D"
                stroke-width="0.4375"
              />
            </svg>
          </button>
          <!-- Add filter button -->
          <button
            class="flex items-center text-sm font-normal leading-5 text-textColor3 font-istok-web"
          >
            <span class="mr-3 text-xl">+</span> Add filter
          </button>
        </div>

        <div class="bg-white">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-8 text-sm text-gray-800">
              <h5 class="text-xl font-normal leading-7 text-black">
                2 products
              </h5>
              <button
                class="flex items-center ml-4 space-x-3 text-xl font-normal leading-7 font-istok-web text-textColor4"
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.37184 11.0962C2.22456 10.9489 2.02482 10.8662 1.81655 10.8662L18.4121 11.2507L18.2577 11.0962C18.2577 11.0962 18.2577 11.0962 18.2577 11.0962C18.1104 11.2435 18.0277 11.4432 18.0277 11.6515V14.4842C18.0277 14.7267 17.9313 14.9593 17.7598 15.1308L17.9145 15.2855L17.7598 15.1308C17.5884 15.3023 17.3558 15.3986 17.1133 15.3986H3.51619C3.27369 15.3986 3.04112 15.3023 2.86965 15.1308C2.69818 14.9593 2.60184 14.7267 2.60184 14.4842V11.6515C2.60184 11.4432 2.51911 11.2435 2.37184 11.0962Z"
                    fill="#5A769B"
                    stroke="#5A769B"
                    stroke-width="0.4375"
                  />
                  <path
                    d="M7.47126 5.52338L7.47122 5.52341C7.32382 5.67082 7.12389 5.75363 6.91543 5.75363C6.70696 5.75363 6.50704 5.67082 6.35963 5.52341C6.21222 5.37601 6.12941 5.17608 6.12941 4.96762C6.12941 4.75915 6.21223 4.55923 6.35963 4.41182L9.75872 1.01274L7.47126 5.52338ZM7.47126 5.52338L9.52941 3.46426L9.52941 12.8993C9.52941 13.1075 9.61215 13.3073 9.75942 13.4546L9.75942 13.4546M7.47126 5.52338L9.75942 13.4546M9.75942 13.4546C9.90669 13.6018 10.1064 13.6846 10.3147 13.6846C10.523 13.6846 10.7227 13.6018 10.87 13.4546C11.0173 13.3073 11.1 13.1075 11.1 12.8993L11.1 3.46426M9.75942 13.4546L11.1 3.46426M11.1 3.46426L13.1582 5.52338L13.1582 5.52341C13.3056 5.67082 13.5055 5.75363 13.714 5.75363C13.9225 5.75363 14.1224 5.67082 14.2698 5.52341C14.4172 5.37601 14.5 5.17608 14.5 4.96762C14.5 4.75915 14.4172 4.55923 14.2698 4.41182L10.8707 1.01274C10.7978 0.939606 10.7111 0.881584 10.6157 0.841995C10.5203 0.802406 10.418 0.782028 10.3147 0.782028C10.2114 0.782028 10.1091 0.802406 10.0137 0.841996C9.91841 0.881548 9.83182 0.939502 9.75891 1.01254L11.1 3.46426Z"
                    fill="#5A769B"
                    stroke="#5A769B"
                    stroke-width="0.4375"
                  />
                </svg>

                Export

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                >
                  <path
                    d="M7.25476 6.72344L2.09432 1.24684L2.09431 1.24683C1.96596 1.11064 1.78902 1.03151 1.60158 1.03151C1.41413 1.03151 1.23719 1.11064 1.10885 1.24683C0.980913 1.38257 0.911133 1.56405 0.911133 1.75077C0.911133 1.93748 0.980913 2.11896 1.10884 2.25471L6.76184 8.25297C6.76189 8.25303 6.76194 8.25308 6.76199 8.25314C6.8254 8.32054 6.90141 8.37476 6.98605 8.41203C7.0708 8.44935 7.16216 8.46875 7.25476 8.46875C7.34736 8.46875 7.43872 8.44935 7.52346 8.41203C7.60809 8.37477 7.68409 8.32056 7.74749 8.25318C7.74755 8.25311 7.74762 8.25304 7.74768 8.25297L13.4005 2.25491C13.4005 2.25486 13.4006 2.25482 13.4006 2.25477L7.25476 6.72344ZM7.25476 6.72344L12.415 1.24703C12.4151 1.24699 12.4151 1.24695 12.4151 1.24692L12.4152 1.24684L12.5744 1.39686L7.25476 6.72344Z"
                    fill="#5A769B"
                    stroke="#5A769B"
                    stroke-width="0.4375"
                  />
                </svg>
              </button>
              <button
                class="flex items-center ml-2 space-x-3 text-xl font-normal leading-7 text-textColor4 font-istok-web"
              >
                <svg class="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
                  <path d="M13 12v6H7v-6H2l8-8 8 8h-5z" />
                </svg>
                Import
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                >
                  <path
                    d="M7.25476 6.72344L2.09432 1.24684L2.09431 1.24683C1.96596 1.11064 1.78902 1.03151 1.60158 1.03151C1.41413 1.03151 1.23719 1.11064 1.10885 1.24683C0.980913 1.38257 0.911133 1.56405 0.911133 1.75077C0.911133 1.93748 0.980913 2.11896 1.10884 2.25471L6.76184 8.25297C6.76189 8.25303 6.76194 8.25308 6.76199 8.25314C6.8254 8.32054 6.90141 8.37476 6.98605 8.41203C7.0708 8.44935 7.16216 8.46875 7.25476 8.46875C7.34736 8.46875 7.43872 8.44935 7.52346 8.41203C7.60809 8.37477 7.68409 8.32056 7.74749 8.25318C7.74755 8.25311 7.74762 8.25304 7.74768 8.25297L13.4005 2.25491C13.4005 2.25486 13.4006 2.25482 13.4006 2.25477L7.25476 6.72344ZM7.25476 6.72344L12.415 1.24703C12.4151 1.24699 12.4151 1.24695 12.4151 1.24692L12.4152 1.24684L12.5744 1.39686L7.25476 6.72344Z"
                    fill="#5A769B"
                    stroke="#5A769B"
                    stroke-width="0.4375"
                  />
                </svg>
              </button>
            </div>
            <input
              type="search"
              placeholder="Search"
              class="hidden h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg hide focus:outline-none"
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.78773 0.25C15.1243 0.25 19.4504 4.57614 19.4504 9.91273C19.4504 15.2493 15.1243 19.5754 9.78768 19.5754C4.45117 19.5754 0.125 15.2493 0.125 9.91273C0.131565 4.57882 4.45377 0.25659 9.78708 0.25H9.78773ZM9.78773 17.8478C14.1702 17.8478 17.7229 14.2951 17.7229 9.91263C17.7229 5.53014 14.1702 1.97754 9.78773 1.97754C5.40524 1.97754 1.85252 5.53024 1.85252 9.91271C1.85909 14.2926 5.40787 17.8414 9.78708 17.8479L9.78773 17.8478ZM19.9021 21.2478L15.2237 16.5694L16.4445 15.3487L21.1229 20.0271C21.1383 21.0364 20.8472 21.2761 19.9021 21.2478Z"
                fill="#5A769B"
              />
            </svg>
          </div>
          <table class="w-full text-sm text-left text-gray-500">
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 border-b-[3.44px] border-customBorder4"
            >
              <tr>
                <th scope="col" class="px-6 py-3">
                  <input
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 form-checkbox"
                  />
                </th>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Type</th>
                <th scope="col" class="px-6 py-3">Category</th>
                <th scope="col" class="px-6 py-3">Brand</th>
                <th scope="col" class="px-6 py-3">Price</th>
                <th scope="col" class="px-6 py-3">Inventory</th>
                <th scope="col" class="px-6 py-3 text-right"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white hover:bg-gray-50">
                <td class="px-6 py-4">
                  <input
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 form-checkbox"
                  />
                </td>
                <td>
                  <div
                    class="flex items-center justify-center px-4 py-4 mr-2 text-gray-800 bg-gray-200 rounded"
                  >
                    Ti
                  </div>
                </td>
                <td class="px-6 py-4">Tissue</td>
                <td class="px-6 py-4">Physical</td>
                <td class="px-6 py-4">Default</td>
                <td class="px-6 py-4">—</td>
                <td class="px-6 py-4">AED 5.00</td>
                <td class="px-6 py-4">In stock</td>
                <td class="px-6 py-4 text-right">
                  <button class="text-blue-600">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.34375"
                        y="0.59375"
                        width="34.5625"
                        height="34.5625"
                        rx="5.90625"
                        stroke="#2C89FF"
                        stroke-width="0.4375"
                      />
                      <path
                        d="M21.7016 17.875C21.7016 18.8415 22.5519 19.625 23.6008 19.625C24.6497 19.625 25.5 18.8415 25.5 17.875C25.5 16.9085 24.6497 16.125 23.6008 16.125C22.5519 16.125 21.7016 16.9085 21.7016 17.875Z"
                        fill="#2C89FF"
                      />
                      <path
                        d="M15.8456 17.875C15.8456 18.8415 16.696 19.625 17.7449 19.625C18.7938 19.625 19.6441 18.8415 19.6441 17.875C19.6441 16.9085 18.7938 16.125 17.7449 16.125C16.696 16.125 15.8456 16.9085 15.8456 17.875Z"
                        fill="#2C89FF"
                      />
                      <path
                        d="M9.75 17.875C9.75 18.8415 10.6003 19.625 11.6492 19.625C12.6981 19.625 13.5484 18.8415 13.5484 17.875C13.5484 16.9085 12.6981 16.125 11.6492 16.125C10.6003 16.125 9.75 16.9085 9.75 17.875Z"
                        fill="#2C89FF"
                      />
                    </svg>
                  </button>
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
  name: "ProductList",
};
</script>

<style scoped>
.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded;
}

.btn-secondary {
  @apply bg-gray-100 text-blue-600 px-4 py-2 rounded;
}
</style>

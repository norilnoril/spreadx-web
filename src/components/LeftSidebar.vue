<template>
  <transition name="fade1">
    <div
      :class="isChecked ? 'w-72' : 'w-24'"
      class="fixed flex flex-col justify-between h-screen text-white duration-500 transition-width bg-customDarkBlue"
    >
      <div>
        <!-- Logo and Back Button -->
        <div
          :class="{ 'px-3': isChecked, 'px-0': !isChecked }"
          class="flex items-center justify-between py-3"
        >
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <img
              v-show="isChecked"
              src="../assets/images/logo.png"
              alt="SPREADX"
              class="h-12 -ml[1px]"
            />
            <img
              v-show="!isChecked"
              src="../assets/images/Logo X.png"
              alt="SPREADX"
              class="h-12"
            />
          </div>
        </div>

        <!-- Menu Items -->
        <div class="w-full overflow-hidden">
          <div
            :class="isChecked ? 'space-x-6' : 'space-x-0  justify-center'"
            class="flex items-center py-5 mb-2 px-7 bg-customBlue"
          >
            <svg
              width="25"
              height="21"
              viewBox="0 0 27 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.821429 0C0.603572 0 0.394639 0.0865431 0.240591 0.240591C0.0865431 0.394639 0 0.603572 0 0.821429L0 22.1786C0 22.3964 0.0865431 22.6054 0.240591 22.7594C0.394639 22.9135 0.603572 23 0.821429 23H25.4643C25.6821 23 25.8911 22.9135 26.0451 22.7594C26.1992 22.6054 26.2857 22.3964 26.2857 22.1786V0.821429C26.2857 0.603572 26.1992 0.394639 26.0451 0.240591C25.8911 0.0865431 25.6821 0 25.4643 0H0.821429ZM3.64286 6.57143C2.53829 6.57143 1.64286 5.676 1.64286 4.57143V3.64286C1.64286 2.53829 2.53829 1.64286 3.64286 1.64286H22.6429C23.7474 1.64286 24.6429 2.53829 24.6429 3.64286V4.57143C24.6429 5.676 23.7474 6.57143 22.6429 6.57143H3.64286ZM1.64286 10.2143C1.64286 9.10972 2.53829 8.21429 3.64286 8.21429H22.6429C23.7474 8.21429 24.6429 9.10972 24.6429 10.2143V19.3571C24.6429 20.4617 23.7474 21.3571 22.6429 21.3571H3.64286C2.53829 21.3571 1.64286 20.4617 1.64286 19.3571V10.2143Z"
                fill="white"
              />
            </svg>
            <transition name="fade2">
              <span
                v-if="isChecked"
                class="text-base font-normal leading-6 transition-opacity duration-75 whitespace-nowrap font-istok-web"
                >Setting Up Your Site</span
              >
            </transition>
          </div>
          <!-- menus  -->
        </div>
      </div>

      <!-- Status -->
      <div class="w-full overflow-hidden">
        <!-- toggle button  -->
        <label
          :class="{ 'justify-center': !isChecked }"
          class="flex items-center px-4 py-4 cursor-pointer select-none text-dark dark:text-white"
        >
          <div class="relative">
            <input
              type="checkbox"
              class="sr-only"
              @click="$emit('toggle-sidebar')"
            />
            <div class="block w-12 h-6 rounded-full box bg-customBlue"></div>
            <div
              :class="{ 'translate-x-full !bg-white': isChecked }"
              class="absolute flex items-center justify-center w-5 h-5 p-1 bg-white rounded-full dot left-1 top-0.5"
            >
              <svg
                v-show="isChecked"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8994 6C11.8994 6.22729 11.8224 6.44527 11.6853 6.60598C11.5481 6.7667 11.3622 6.85699 11.1682 6.85699L2.69693 6.85699L5.83657 10.5352C5.90455 10.6149 5.95847 10.7095 5.99526 10.8136C6.03205 10.9177 6.05099 11.0292 6.05099 11.1419C6.05099 11.2546 6.03205 11.3662 5.99526 11.4703C5.95847 11.5744 5.90455 11.669 5.83657 11.7487C5.76858 11.8284 5.68788 11.8916 5.59906 11.9347C5.51024 11.9778 5.41504 12 5.3189 12C5.22276 12 5.12756 11.9778 5.03874 11.9347C4.94992 11.8916 4.86921 11.8284 4.80123 11.7487L0.414221 6.60675C0.346129 6.52714 0.292107 6.43257 0.255247 6.32845C0.218386 6.22434 0.199413 6.11272 0.199413 6C0.199413 5.88728 0.218386 5.77566 0.255247 5.67154C0.292107 5.56743 0.34613 5.47286 0.414221 5.39325L4.80123 0.251323C4.86921 0.171644 4.94992 0.108439 5.03874 0.0653165C5.12756 0.0221944 5.22276 -3.24273e-07 5.3189 -3.19604e-07C5.41504 -3.14934e-07 5.51024 0.0221944 5.59906 0.0653165C5.68788 0.108439 5.76858 0.171644 5.83657 0.251323C5.97386 0.412242 6.05099 0.630496 6.05099 0.858071C6.05099 0.970754 6.03205 1.08233 5.99526 1.18644C5.95847 1.29055 5.90455 1.38514 5.83657 1.46482L2.69693 5.14301L11.1682 5.14301C11.3622 5.14301 11.5481 5.2333 11.6853 5.39402C11.8224 5.55473 11.8994 5.77271 11.8994 6Z"
                  fill="#2C89FF"
                />
              </svg>

              <svg
                v-show="!isChecked"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.15493e-08 6C7.42597e-08 5.77271 0.0855931 5.55473 0.237949 5.39402C0.390306 5.2333 0.596945 5.14301 0.812409 5.14301L10.225 5.14301L6.7365 1.46482C6.66096 1.38514 6.60105 1.29054 6.56017 1.18644C6.51929 1.08233 6.49825 0.970753 6.49825 0.858069C6.49825 0.745386 6.51929 0.633805 6.56017 0.529699C6.60105 0.425593 6.66096 0.331 6.7365 0.251321C6.81203 0.171642 6.9017 0.108436 7.00039 0.0653144C7.09909 0.0221923 7.20486 -8.67757e-07 7.31168 -8.66483e-07C7.41851 -8.6521e-07 7.52428 0.0221923 7.62297 0.0653144C7.72166 0.108436 7.81133 0.171642 7.88687 0.251321L12.7613 5.39325C12.837 5.47286 12.897 5.56743 12.938 5.67154C12.9789 5.77566 13 5.88728 13 6C13 6.11272 12.9789 6.22434 12.938 6.32845C12.897 6.43257 12.837 6.52714 12.7613 6.60675L7.88687 11.7487C7.81133 11.8284 7.72166 11.8916 7.62297 11.9347C7.52428 11.9778 7.41851 12 7.31168 12C7.20486 12 7.09908 11.9778 7.00039 11.9347C6.9017 11.8916 6.81203 11.8284 6.7365 11.7487C6.58395 11.5878 6.49825 11.3695 6.49825 11.1419C6.49825 11.0292 6.51929 10.9177 6.56017 10.8136C6.60105 10.7095 6.66096 10.6149 6.7365 10.5352L10.225 6.85699L0.812409 6.85699C0.596945 6.85699 0.390306 6.7667 0.237949 6.60598C0.0855931 6.44526 6.88389e-08 6.22729 7.15493e-08 6Z"
                  fill="#2C89FF"
                />
              </svg>
            </div>
          </div>
          <!-- Adding the text label next to the toggle -->
          <transition name="fade2">
            <span
              v-if="isChecked"
              class="ml-3 text-lg font-semibold leading-7 text-gray-400 transition-opacity duration-75 whitespace-nowrap"
              >COLLAPSE MENU</span
            >
          </transition>
        </label>

        <div class="relative border-t-[0.5px] border-customBorder2">
          <div
            :class="{ 'justify-center': !isChecked }"
            id="status"
            class="flex items-center w-full px-4 pt-4 pb-2 space-x-[14px] cursor-pointer"
            @click="chooseBox(1)"
          >
            <div
              class="flex items-center justify-center text-2xl font-bold leading-9 bg-white rounded-md font-istok-web text-customBlue w-11 h-11"
            >
              {{ selected.icon }}
            </div>
            <transition name="fade2">
              <span
                v-if="isChecked"
                class="text-xl font-bold leading-8 text-white transition-opacity duration-75 font-istok-web"
                >{{ selected.title }}</span
              >
            </transition>
          </div>

          <!-- module box  -->
          <div class="absolute bottom-[10px] left-[298px]">
            <div class="relative">
              <div
                class="p-2 rounded-md w-44 bg-customDarkBlue"
                v-if="dialogBox >= 1"
              >
                <div class="flex items-center space-x-[14px] mb-[14px]">
                  <div
                    class="flex items-center justify-center text-base font-normal leading-5 text-white rounded-md w-7 h-7 font-istok-web bg-customBlue"
                  >
                    {{ selected.icon }}
                  </div>
                  <div>
                    <h4
                      class="text-base font-normal leading-5 text-white font-istok-web"
                    >
                      {{ selected.title }}
                    </h4>
                    <p
                      class="font-normal text-white font-istok-web text-[9px] leading-3"
                    >
                      {{ selected.description }}
                    </p>
                  </div>
                </div>
                <div
                  id="dialogbox1"
                  @click="chooseBox(2)"
                  class="flex items-center justify-between p-[6px] bg-gradient-linear rounded-md cursor-pointer"
                >
                  <div class="flex items-center space-x-[13px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.9 3.06654C5.47667 3.06654 4.11164 3.63195 3.10519 4.6384C2.09875 5.64484 1.53333 7.00987 1.53333 8.4332V16.0999C1.53333 17.5232 2.09875 18.8882 3.10519 19.8947C4.11164 20.9011 5.47667 21.4665 6.9 21.4665H14.5667C15.99 21.4665 17.355 20.9011 18.3615 19.8947C19.3679 18.8882 19.9333 17.5232 19.9333 16.0999V12.2665C19.9333 12.0632 20.0141 11.8682 20.1579 11.7244C20.3017 11.5806 20.4967 11.4999 20.7 11.4999C20.9033 11.4999 21.0983 11.5806 21.2421 11.7244C21.3859 11.8682 21.4667 12.0632 21.4667 12.2665V16.0999C21.4667 17.9299 20.7397 19.6849 19.4457 20.9789C18.1517 22.2729 16.3967 22.9999 14.5667 22.9999H6.9C5.07001 22.9999 3.31496 22.2729 2.02096 20.9789C0.726962 19.6849 0 17.9299 0 16.0999V8.4332C0 6.60321 0.726962 4.84817 2.02096 3.55417C3.31496 2.26017 5.07001 1.5332 6.9 1.5332H10.7333C10.9367 1.5332 11.1317 1.61398 11.2754 1.75775C11.4192 1.90153 11.5 2.09654 11.5 2.29987C11.5 2.5032 11.4192 2.69821 11.2754 2.84198C11.1317 2.98576 10.9367 3.06654 10.7333 3.06654H6.9Z"
                        fill="white"
                      />
                      <path
                        d="M22.9998 4.6C22.9998 5.82 22.5152 6.99002 21.6525 7.85269C20.7898 8.71536 19.6198 9.2 18.3998 9.2C17.1798 9.2 16.0098 8.71536 15.1471 7.85269C14.2844 6.99002 13.7998 5.82 13.7998 4.6C13.7998 3.38 14.2844 2.20998 15.1471 1.34731C16.0098 0.484641 17.1798 0 18.3998 0C19.6198 0 20.7898 0.484641 21.6525 1.34731C22.5152 2.20998 22.9998 3.38 22.9998 4.6Z"
                        fill="white"
                      />
                    </svg>

                    <span
                      class="text-xs font-normal leading-4 text-white font-istok-web"
                      >Modules</span
                    >
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.167835 0.158175C0.220903 0.108036 0.283944 0.0682557 0.35335 0.0411135C0.422755 0.0139713 0.49716 0 0.572304 0C0.647447 0 0.721853 0.0139713 0.791258 0.0411135C0.860663 0.0682557 0.923705 0.108036 0.976772 0.158175L7.83217 6.61896C7.88537 6.66897 7.92758 6.72838 7.95638 6.79379C7.98518 6.8592 8 6.92932 8 7.00014C8 7.07096 7.98518 7.14108 7.95638 7.20649C7.92758 7.2719 7.88537 7.33132 7.83217 7.38133L0.976772 13.8421C0.8695 13.9432 0.724009 14 0.572304 14C0.420599 14 0.275107 13.9432 0.167835 13.8421C0.0605638 13.741 0.000299105 13.6039 0.000299105 13.4609C0.000299105 13.3179 0.0605638 13.1808 0.167835 13.0797L6.6199 7.00014L0.167835 0.920547C0.114634 0.870534 0.0724241 0.811122 0.0436241 0.745711C0.0148241 0.680301 0 0.610179 0 0.539361C0 0.468543 0.0148241 0.398421 0.0436241 0.33301C0.0724241 0.2676 0.114634 0.208187 0.167835 0.158175Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <!-- modules  -->
              <div
                id="dialogbox2"
                v-if="dialogBox === 2"
                class="absolute left-[186px] bottom-0"
              >
                <div
                  class="flex flex-col px-3 py-2 space-y-3 rounded-md w-44 bg-customDarkBlue"
                >
                  <div
                    class="flex items-center space-x-3 cursor-pointer"
                    :key="module.id"
                    v-for="module in modules"
                    @click="selectModule(module.id)"
                  >
                    <div
                      class="flex items-center justify-center text-base font-normal leading-[22px] bg-white rounded-sm font-istok-web w-7 h-7 text-customGray"
                    >
                      {{ module.icon }}
                    </div>
                    <div>
                      <h5
                        class="text-sm leading-[18px] text-white font-istok-web"
                      >
                        {{ module.title }}
                      </h5>
                      <p
                        class="font-normal leading-3 text-[9px] text-white font-istok-web"
                      >
                        {{ module.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LeftSidebar",
  props: {
    isChecked: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      dialogBox: 0,
      modules: [
        {
          id: "1",
          icon: "A",
          title: "Accounts",
          description: "Manage accounts here",
        },
        {
          id: "2",
          icon: "C",
          title: "Customers",
          description: "Manage customers here",
        },
        {
          id: "3",
          icon: "E",
          title: "Expenses",
          description: "Manage expenses here",
        },
        {
          id: "4",
          icon: "I",
          title: "Inventory",
          description: "Manage inventory here",
        },
        {
          id: "5",
          icon: "O",
          title: "Online",
          description: "Manage online here",
        },
        {
          id: "6",
          icon: "O",
          title: "Orders",
          description: "Manage orders here",
        },
        {
          id: "7",
          icon: "P",
          title: "Products",
          description: "Manage products here",
        },
        {
          id: "8",
          icon: "S",
          title: "Sales",
          description: "Manage sales here",
        },
        {
          id: "9",
          icon: "S",
          title: "Suppliers",
          description: "Manage suppliers here",
        },
      ],
      selected: {
        id: "1",
        icon: "A",
        title: "Accounts",
        description: "Manage accounts here",
      },
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    // toggleSidebar() {
    //   this.isChecked = !this.isChecked;
    // },
    selectModule(selectedId) {
      let item = this.modules.find((module) => module.id === selectedId);
      if (item) {
        Object.assign(this.selected, item);
        this.dialogBox = 0;
      }
    },
    chooseBox(boxNo) {
      if (this.dialogBox === boxNo && boxNo != 2) {
        this.dialogBox = 0;
      } else {
        this.dialogBox = boxNo;
      }
    },
    handleClickOutside(event) {
      const menuIds = ["status", "dialogbox1", "dialogbox2"];
      const clickedOutside = menuIds.every((id) => {
        const element = document.getElementById(id);
        return element && !element.contains(event.target);
      });

      if (clickedOutside) {
        this.dialogBox = 0;
      }
    },
  },
};
</script>

<style scoped>
.fade1-enter-active,
.fade1-leave-active {
  transition: width 0.5s ease;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.3s ease;
}
</style>

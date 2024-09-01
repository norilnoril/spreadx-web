<template>
  <div class="h-full">
    <div class="pt-16 pr-32 pb-14 pl-[430px]">
      <div class="flex items-end justify-between mb-4">
        <h4
          class="text-xl font-bold leading-[12px] font-istok-web text-customBlue"
        >
          Name your new site
        </h4>
        <button
          class="px-5 py-3 text-base font-bold leading-5 text-center text-white rounded-md bg-customBlue"
        >
          Continue
        </button>
      </div>

      <div
        class="flex flex-col items-center justify-center h-full py-64 space-y-8 border border-customBorder1 rounded-2xl"
      >
        <div>
          <h1
            class="text-4xl font-normal leading-tight text-center font-istok-web text-textColor"
          >
            What is the name of your new site?
          </h1>
          <p
            class="text-lg font-normal leading-6 text-center font-istok-web text-textColor"
          >
            You can change this at any time. It's just a starting point.
          </p>
        </div>
        <input
          type="text"
          name="spread-tech"
          placeholder="Spread Tech."
          id=""
          class="w-3/6 px-6 py-5 border rounded-md border-customBorder3 placeholder-textColor2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewSite",
};
</script>

<style lang="scss" scoped></style>

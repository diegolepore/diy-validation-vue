<template>
  <div class="flex justify-start mt-3 ml-4 p-1">
    <ul>
      
      <li v-for="(error, index) in errorsList" :key="index" class="flex items-center py-1">
        <div
          class="rounded-full fill-current bg-red-200 text-red-700"
        >
          <img class="w-5 h-5" :src="logoSvg" alt="">
        </div>
        <span
          class="font-medium text-sm ml-3 text-red-700"
          >{{ error }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
  import logoSvg from '@/assets/img/close-circle.svg'

  export default {
    name: 'errorsList',
    data() {
      return {
        logoSvg
      }
    },
    props: {
      errorsList: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
// Vue.extend 创建组件，已启用类型检查
export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
})
</script>

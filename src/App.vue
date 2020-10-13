<template>
    <v-app>
      <v-main class="back">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
// Vue.extend 创建组件，已启用类型检查
export default Vue.extend({
  name: 'App'
})
</script>
<style lang="stylus" scoped>
  .container
    background: url('./assets/bg-2.jpg') 0 / cover fixed

</style>

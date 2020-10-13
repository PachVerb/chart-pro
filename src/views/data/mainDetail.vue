<template>
    <div class="detail-content">
       <div class="detail">
         <h1>col-1</h1>
       </div>
       <div class="detail-info">
         <h1>col-2</h1>
       </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'MachinDateil'
})
export default class Detail extends Vue {
}
</script>
<style lang="stylus" scoped>
  .detail-content
    height: 100%
    display: flex
    flex-direction column
    div
      border 1px solid red
    .detail
      flex-grow 2
    .detail-info
      flex-grow 1
</style>

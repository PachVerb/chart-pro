<template>
    <div class="log-content">
       <div class="log1">
          <dv-border-box-3>dv-border-box-3</dv-border-box-3>
       </div>
       <div class="log2">
          <dv-border-box-3>dv-border-box-3</dv-border-box-3>
       </div>
       <div class="log3">
          <dv-border-box-3>dv-border-box-3</dv-border-box-3>
       </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Log'
})
export default class Log extends Vue {
    config = {
      data: [
        {
          name: '周口',
          value: 55
        },
        {
          name: '南阳',
          value: 120
        },
        {
          name: '西峡',
          value: 78
        },
        {
          name: '驻马店',
          value: 66
        },
        {
          name: '新乡',
          value: 80
        }
      ]
    }

    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
}
</script>
<style lang="stylus" scoped>
    .log-content
        height 100%
        display flex
        flex-direction column
        div
            min-width: 400px
            flex-grow 1
            margin-bottom 10px
</style>

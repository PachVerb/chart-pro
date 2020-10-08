<template>
  <div class="home">
    <div id="myEcharts" style="height: 400px;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  components: {

  }
})

export default class Home extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public $echarts: any;
  private options: object = {
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

  private mounted () {
    const ele = document.getElementById('myEcharts')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chart: any = this.$echarts.init(ele)
    chart.setOption(this.options)
  }
}
</script>

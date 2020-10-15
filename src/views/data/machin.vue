<template>
    <div class="machin-content">
       <div class="main-total">
          <dv-border-box-5 :reverse="true">
              <div class="machin-info">
                  <div class="info-part1" v-for="(n, index) in list" :key='index'>
                      <p>{{n.text}}</p>
                      <h1>{{n.value}}</h1>
                  </div>
              </div>
          </dv-border-box-5>
       </div>
       <dv-decoration-10 style="width:100%;height:5px; margin: 10px 0" />
       <div class="machin-list">
          <dv-scroll-board :config="config" style="width:400px;height:100%" ref="scrollBoard" />
       </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import data from '@/data/data.ts'
import Formate from '@/utils/time.ts'
interface Config {
  header: string[];
  data: object[];
  carousel: string;
  columnWidth: number[];
}
@Component({
  name: 'Machin'
})
export default class Machain extends Vue {
  // data
    list = [
      {
        text: '正常',
        value: '23'
      },
      {
        text: '报警',
        value: '20'
      },
      {
        text: '待机',
        value: '23'
      }
    ]

    config: Config = {
      header: ['记录时间', '设备', '参数', '参数状态'],
      data: [
        ['8:49:47', 'KCXL-003', '设备某参数', '012234'],
        ['8:49:47', 'KCXL-003', '设备某参数', '012234'],
        ['8:49:47', 'KCXL-003', '设备某参数', '012234'],
        ['8:49:47', 'KCXL-003', '设备某参数', '012234'],
        ['8:49:47', 'KCXL-003', '设备某参数', '012234']
      ],
      carousel: 'page',
      columnWidth: [80, 90, 140, 80]
    }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $stomp: any
  // methods
  // websocket 连接
  getLink () {
    const ws = new WebSocket('ws://wlcs.top:15674/ws')
    const client = this.$stomp.over(ws)
    // const table = this.$refs.scrollBoard as HTMLElement
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const This = this
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const item: any[] = []
    const onConnect = function () {
      /**
       *
       * {"collect_date":"2020\/9\/10 9:05:07","variate_value":"0","alarm_tip":null,"alarm":"0","float_value":"0","time":"2020\/9\/10 1:05:07","variate_code":"Y44","dpu_code":"300219050523.00 ","machine_code":"KCXL-003"}
       * */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      client.subscribe('/exchange/workshop/equipment', (msg: any) => {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const { collect_date, machine_code, variate_code, float_value } = JSON.parse(msg.body)
        const code = data[variate_code]
        const time = Formate(collect_date)
        // eslint-disable-next-line @typescript-eslint/camelcase
        item.push([time, machine_code, code, float_value])
        if (item.length > 78) { item.shift() }
        This.config = {
          header: ['记录时间', '设备', '参数', '参数状态'],
          data: item,
          columnWidth: [80, 80, 150, 80],
          carousel: 'page'
        }
      })
    }
    const onError = function () {
      console.log('error')
    }
    // 参数依次为：用户名，密码，连接后，出错，虚拟主机名
    client.connect('workshop', 'workshop', onConnect, onError, '/workshop')
  }

  // hooks
  created () {
    const s = '2020/9/10 8:49:47'
    console.log(Formate(s))
  }

  mounted () {
    // this.getLink()
  }
}
</script>
<style lang="stylus" scoped>
    .machin-content
        max-width: 400px
        height: 100%
        display flex
        flex-direction column
        .main-total
            min-height: 200px;
            .machin-info
                display flex
                height 100%
                justify-content space-around
                align-items center
                div
                    text-align center
        .machin-list
            flex-grow 2
</style>

<template>
  <div class="detail-content">
      <div class="detail">
        <dv-border-box-3>
          <div class="head">
            <p>当前设备</p>
            <h1>xxxx</h1>
          </div>
          <div class="middle">
            <dv-decoration-12 style="width:150px;height:150px; margin: auto" :scanDur='3' :haloDur='3' />
          </div>
          <div class="check">
            <div class="run-info">
              <h3>运行</h3>
              <ul>
                 <li>
                  <span>Y00 - 1-------</span><Tip :type="'Y31'" />
                </li>
                <li>
                  <span>Y00 - 1-------</span><Tip :type="'Y35'" />
                </li>
                 <li>
                  <span>Y00 - 1-------</span><Tip :type="'Y00'" />
                </li>
                <li>
                  <span>Y00 - 1-------</span><Tip :type="'Y00'" />
                </li>
                 <li>
                  <span>Y00 - 1-------</span><Tip :type="'Y00'" />
                </li>
              </ul>
            </div>
            <dv-decoration-2 :reverse="true" style="width:5px;height:100%;" />
            <div class="pro-info">
              <h3>详细</h3>
            </div>
            <dv-decoration-2 :reverse="true" style="width:5px;height:100%;" />
            <div class="pro-info">
              <h3>产能</h3>
              <dv-active-ring-chart :config="config" style="width:200px;height:200px; margin: auto" />
            </div>
          </div>
        </dv-border-box-3>
      </div>
      <div class="detail-info">
        <dv-border-box-3>dv-border-box-3</dv-border-box-3>
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Tip from '@/components/tips/index.vue'
@Component({
  name: 'MachinDateil',
  components: {
    Tip
  }
})
export default class Detail extends Vue {
  // data
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

  machin: string[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $stomp: any

  // methods
  getDetail () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const This = this
    const ws = new WebSocket('ws://192.168.43.183:8080/websocket')
    // const client = this.$stomp.over(ws)
    ws.onopen = function () {
      console.log('ok')
      ws.onmessage = function (msg) {
        This.machin = []
        // eslint-disable-next-line @typescript-eslint/camelcase
        const { status, left_status, right_status } = msg.data
        console.log(JSON.parse(msg.data))
        This.machin.push(status, left_status, right_status)
      }
    }

    ws.onerror = function (err) {
      console.log(err)
    }
    // client.connect('workshop', 'workshop',
    //   () => {
    //     console.log('ok')
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     client.subscribe((msg: any) => {
    //       console.log(msg, 1111111)
    //     })
    //   }, () => {
    //     console.log('err')
    //   }, '/workshop')
  }

  // hook
  mounted () {
    this.getDetail()
  }
}
</script>
<style lang="stylus" scoped>
  .detail-content
    display: flex
    flex-direction column
    font-size: 16px
    height: 100%
    text-align center
    .detail
      flex-grow 0
      .head
        padding 20px
        p
          font-size 1.5em
        h1
          font normal  normal normal  3em/.1em normal
          letter-spacing .2em
      .check
        display flex
        height calc(100% - 305px)
        justify-content center
        box-sizing inherit
        padding: 12px
        div
          flex-grow 1
        span
          font-size 1em
          margin-right 5px
          color #fff
          vertical-align super
        ul
          padding: 0 !important
          li
            padding: 5px
            border-bottom 1px solid blue
    .detail-info
      flex-grow 1
</style>

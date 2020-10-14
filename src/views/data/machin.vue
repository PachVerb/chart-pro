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
          <dv-scroll-board :config="config" style="width:400px;height:500px" />
       </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Machin'
})
export default class Machain extends Vue {
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

    config = {
      header: ['列1', '列2', '列3'],
      data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
      ]
    }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $stomp: any

  created () {
    const ws = new WebSocket('ws://wlcs.top:15674/ws')
    const client = this.$stomp.over(ws)

    const onConnect = function () {
      console.log('connected')
    }
    const onError = function () {
      console.log('error')
    }
    // 参数依次为：用户名，密码，连接后，出错，虚拟主机名
    client.connect('workshop', 'workshop', onConnect, onError, '/workshop')
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

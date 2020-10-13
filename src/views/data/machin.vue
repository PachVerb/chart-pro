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
       <div class="machin-list">
           <h1>col-2</h1>
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

  // created () {

  // }
}
</script>
<style lang="stylus" scoped>
    .machin-content
        height: 100%
        display flex
        flex-direction column
        div
            flex-grow: 0
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
            margin-top 10px
            flex-grow 2
</style>

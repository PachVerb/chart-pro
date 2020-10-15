<template>
    <div class='box'>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'Tip'
})
export default class Tip extends Vue {
    // prop
    @Prop(String) readonly type!: string
    // data
    tip_type = this.type

    // hook
    mounted () {
      switch (this.tip_type) {
        case 'Y36':
          // eslint-disable-next-line no-fallthrough
        case 'Y34':
        // eslint-disable-next-line no-fallthrough
        case 'Y43':
          document.getElementsByClassName('box')[0].style.backgroundColor = '#ee0707' // red
          break
        case 'Y35':
          // eslint-disable-next-line no-fallthrough
        case 'Y31':
          // eslint-disable-next-line no-fallthrough
        case 'Y44':
          document.getElementsByClassName('box')[0].style.backgroundColor = '#23eb08' // green
          break
        case 'Y45':
          document.getElementsByClassName('box')[0].style.backgroundColor = '#f5f104' // yello
          break
        default:
          document.getElementsByClassName('box')[0].style.backgroundColor = '#ccc' // yello
      }
    }
}
</script>
<style lang="stylus" scoped>
    .box
        display inline-block
        width 20px
        height 20px
        border-radius 50%
        background green
        box-shadow 0 0 6px 4px white
        animation-name tip
        animation-timing-function linear
        animation-duration 1s
        animation-iteration-count infinite
        animation-delay 0
        animation-direction alternate-reverse
    @keyframes tip {
        0% {
            box-shadow  0 0 6px 4px white
        }
        100%{
            box-shadow 0 0 0 0 white
        }
    }
</style>

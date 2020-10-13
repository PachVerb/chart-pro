<template>
    <div class="log-content">
       <div class="log1">
           <h1>col-1</h1>
       </div>
       <div class="log2">
           <h1>col-2</h1>
       </div>
       <div class="log3">
           <h1>col-3</h1>
       </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Log'
})
export default class Log extends Vue {
}
</script>
<style lang="stylus" scoped>
    .log-content
        height 100%
        display flex
        flex-direction column
        div
            border 1px solid red
            flex-grow 1
            margin-bottom 10px
</style>

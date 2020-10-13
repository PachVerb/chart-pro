<template>
    <div class="container">
         <v-btn
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            color="info"
            @click="loader = 'loading'"
            >
            Icon Loader
            <template v-slot:loader>
                <span class="custom-loader">
                <v-icon light>mdi-cached</v-icon>
                </span>
            </template>
        </v-btn>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component

export default class BtnLoad extends Vue {
  // data

}
</script>
<style lang="stylus" scoped>
  .custom-loader
    animation: loader 1s infinite
    display: flex

  @-moz-keyframes loader
    from
      transform: rotate(0)

    to
      transform: rotate(360deg);

  @-webkit-keyframes loader
    from
      transform: rotate(0)

    to
      transform: rotate(360deg);
  @-o-keyframes loader {
    from
      transform: rotate(0)

    to
      transform: rotate(360deg);

  @keyframes loader
    from
      transform: rotate(0)

    to
      transform: rotate(360deg)

</style>

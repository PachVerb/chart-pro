<template>
    <v-app id="inspire" class="back">
      <v-app-bar
        class="show"
        color="primary"
        dark
      >
        <v-spacer></v-spacer>
        <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
          dark
          icon
        >
          <v-icon icon>mdi-cog-outline</v-icon>
        </v-btn>
      </template>
      <v-card>
         <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>主题设置</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <p>使系统提供多样化风格，就设置不同主题吧</p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Light</v-list-item-title>
              <v-list-item-subtitle>轻量化风格</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dark</v-list-item-title>
              <v-list-item-subtitle>黑夜风格</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>

        <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              fab
              dark
              icon
            >
             <v-icon dark>
              mdi-account-circle
            </v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group
              color="primary"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon
                    color="green darken-2"
                  >
                    mdi-domain
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>用户管理</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                    <v-icon
                    color="green darken-2"
                  >
                  mdi-domain
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>注销</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <!-- <v-btn icon>
          <v-icon fab dark>
            mdi-account-circle
          </v-icon>
        </v-btn> -->
      </v-app-bar>

    <v-main class="lighten-3">
      <v-container>
        <dv-full-screen-container style="height: 100%;">
          <div class="top-header">
            <dv-decoration-8 style="width:300px;height:50px;" />
            <dv-decoration-5 style="width:500px;height:60px;">智能工厂可视化</dv-decoration-5>
            <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
            <div class="top-title">
              <h2>智能工厂可视化</h2>
            </div>
          </div>
          <dv-border-box-1 class="border-box">
            <div class="content">
              <div class="part1">
                <Machin />
              </div>
              <div class="part2 middle">
                <machin-deateil />
              </div>
              <div class="part3">
                <log />
              </div>
            </div>
          </dv-border-box-1>
        </dv-full-screen-container>
      </v-container>
    </v-main>
  </v-app>

</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Machin from '@/views/data/machin.vue'
import MachinDeateil from '@/views/data/mainDetail.vue'
import Log from '@/views/data/Log.vue'
@Component({
  name: 'Index',
  components: {
    Machin,
    MachinDeateil,
    Log
  }
})
export default class Index extends Vue {
  links: string[] = [
    'Dashboard',
    'Messages',
    'Profile',
    'Updates'
  ]

  dialog = false
  notifications = false
  sound = true
  widgets = false

  created () {
    this.$vuetify.theme.dark = false
  }

  mounted () {
    let count = 0.1
    const show: HTMLElement = document.querySelector('.show') as HTMLElement
    window.onscroll = function (): void {
      ++count
      if (count > 1) {
        count = 1
      }
      if (window.scrollY > 0) {
        show.style.opacity = count.toString()
      } else {
        show.style.opacity = '0'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
computed_restHeight(a, b)
  a = unit(a, px)
  b = unit(b, px)
  return a - b

.back
  position relative
  margin: -12px
  background:hsla(0, 0%, 100%, .3)
  .back::before
    background url('../../assets/bg-2.jpg') 0 / cover fixed
    filter blur(20px)
  .show
    position fixed
    top:0;
    opacity 0;
    z-index: 2000
  .container
    height: 100%
  .top-header
    position relative
    height 80px
    display flex
    justify-content space-around
    align-items center
    .top-title
      position absolute
      top:0
      left: 50%;
      transform translateX(-50%)
  .border-box
    height: calc(100% - 80px)
    .content
      display: flex
      height: 100%
      padding: 15px;
      .middle
        flex-grow: 2
</style>>

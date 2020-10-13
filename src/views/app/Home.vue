<template>
  <div class="home">
    <b-g />
    <p-articles />
    <div class="content">
       <v-card
         min-height="400"
       >
          <v-tabs
          color="success"
          dark
          background-color="cyan"
          right
        >
        <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab>登陆</v-tab>
          <v-tab>注册</v-tab>
          <v-tab-item
            v-for="n in 2"
            :key="n"
          >
            <v-container class="tab-container">
              <validation-observer
                ref="observer"
                v-slot=""
              >
                <form>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required"
                  >
                    <v-text-field
                      v-if="n === 1"
                      v-model="name1"
                      :error-messages="errors"
                      label="账号"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required|max:10"
                  >
                    <v-text-field
                      v-model="name2"
                      :counter="10"
                      v-if="n === 2"
                      :error-messages="errors"
                      label="账号"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="pwd1"
                    rules="required"
                  >
                    <v-text-field
                    v-if="n === 1"
                    v-model="pwd1"
                    :append-icon="inputShow ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="inputShow ? 'text' : 'password'"
                    label="密码"
                    :error-messages="errors"
                    @click:append="inputShow = !inputShow"
                  ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="pwd2"
                    rules="required|max:10"
                  >
                    <v-text-field
                    v-if="n === 2"
                    v-model="pwd2"
                    :append-icon="inputShow ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="inputShow ? 'text' : 'password'"
                    label="密码"
                    :error-messages="errors"
                    @click:append="inputShow = !inputShow"
                  ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="pwd"
                    rules="required"
                  >
                    <v-text-field
                    v-if="n === 2"
                    v-model="confirmps"
                    :append-icon="inputShow ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="inputShow ? 'text' : 'password'"
                    label="确认密码"
                    :error-messages="errors"
                    @click:append="inputShow = !inputShow"
                  ></v-text-field>
                  </validation-provider>

                  <v-btn
                    class="ma-2"
                    v-if="n ===1"
                    :loading="loading"
                    :disabled="loading"
                    large
                    @click="login"
                  >
                    登陆
                   <template v-slot:loader>
                      <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                      </span>
                    </template>
                  </v-btn>
                  <v-btn
                    v-if="n === 2"
                    :loading="loading1"
                    :disabled="loading1"
                    class="mr-4"
                    @click="Regis"
                  >
                    注册
                    <template v-slot:loader>
                      <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                      </span>
                    </template>
                  </v-btn>
                  <v-btn @click="clear" v-if="n === 2">
                    重置
                  </v-btn>
                </form>
              </validation-observer>
            </v-container>

          </v-tab-item>
        </v-tabs>
      </v-card>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Bg from '@/components/bg/bg.vue'
import Particles from '@/components/particles/index.vue'
import { required, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
setInteractionMode('eager')

extend('required', {
  ...required,
  message: '该字段必填'
})
extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  components: {
    'b-g': Bg,
    'p-articles': Particles,
    ValidationProvider,
    ValidationObserver
  }
})

export default class Home extends Vue {
  // $refs定义
  // ts类型断言
  $refs!: {
    observer: HTMLFormElement;
  }

  // data
  name1 = ''
  name2 = ''
  pwd1 = ''
  pwd2 = ''
  confirmps = ''
  loading = false
  loading1 = false
  inputShow = false
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $http: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any
  // methods
  submit (): void {
    this.$refs.observer.validate()
  }

  clear (): void {
    this.name2 = ''
    this.pwd2 = ''
    this.$refs.observer.reset()
  }

  login (): void {
    const { Login } = this.$http
    const form = new FormData()
    form.append('username', this.name1)
    form.append('password', this.pwd1)
    this.loading = true

    Login('/login', form)
      .then((res: object) => {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const { status_code } = res.data
        console.log(status_code)
        // eslint-disable-next-line @typescript-eslint/camelcase
        if (Number(status_code) === 1) {
          this.$router.push('/home')
          this.loading = false
        } else {
          this.loading = false
        }
      })
  }

  Regis (): void {
    // 184行 (this as any) 使用 as 类型断言，强制类型转换,告诉ts编译器确切的类型, 不进行类型检测.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { Regist } = (this as any).$http
    const form = new FormData()
    form.append('username', this.name2)
    form.append('password', this.pwd2)
    this.loading1 = true

    Regist('/register', form)
      .then((res: object) => {
        // eslint-disable-next-line @typescript-eslint/camelcase
        const { status_code } = res.data
        // eslint-disable-next-line @typescript-eslint/camelcase
        if (Number(status_code) === 1) {
          this.$router.push('/home')
          this.loading1 = false
        } else {
          this.loading1 = false
        }
      })
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/loading.styl'
  .home
    display flex
    align-items center
    justify-content flex-end
    width: 100%
    height:100%
    padding: 20px;
    .content
      position relative
      width: 500px
      height: 400px
      z-index: 1200
      .tab-container
        padding: 20px
</style>

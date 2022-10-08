import type { FormInstance } from 'element-plus'
import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElLoading, ElMessage } from 'element-plus'
import { withModifiers } from 'vue'
import PlumBlossom from '~/components/plumBlossom'
import ChooseTheme from '~/layouts/navigation/choose-theme'

export default defineComponent({
  name: 'Logo',
  setup () {
    const username = ref('admin')
    const password = ref('password')

    const formRef = shallowRef<FormInstance>()
    async function submit () {
      await formRef.value?.validate()
      const loading = ElLoading.service({ fullscreen: true })
      // await user.login({ username: username.value, password: password.value }).finally(() => loading.close())
      ElMessage.success('登录成功')
      console.log(username.value)
      setTimeout(() => loading.close())
    }

    const autocomplete = useLocalStorage('autocomplete', 'new-password')
    function reload () {
      if (!password.value) {
        location.reload()
      }
    }

    return () => {
      return (
        <div class="flex flex-col w-screen h-screen bg-zinc-50 dark:bg-zinc-900">
          {/* 梅花组件 */}
          <PlumBlossom />
          <ChooseTheme class="absolute right-5 top-5 text-base" />
          <ElForm
            ref={ formRef.value }
            size="large"
            class="z-1 m-auto p-10 bg-white dark:bg-zinc-800 min-w-sm flex flex-col box-content rounded-lg shadow-lg"
            // :model="{ username, password }"
            onSubmit={ withModifiers(submit, ['prevent']) }
          >
            <div class="flex items-center gap-3">
              <img src="../../public/logo.png" class="h-15 select-none" />
              <div>
                <div class="tracking-widest whitespace-nowrap font-extrabold text-4xl text-gray-700 dark:text-gray-100">
                  {/* { settings.name } */}
									后台管理系统
                </div>
                <p class="text-sm tex-gray-400">
                  {/* { settings.description } */}
									Vitesse Background Management System
                </p>
              </div>
            </div>
            <div class="text-center text-sm text-gray-400 mt-3 mb-7">—— 登陆界面 ——</div>

            <ElFormItem rules={{ required: true, message: '不能为空' }} prop="username">
              <ElInput
                v-model={ username.value }
                placeholder="用户名:"
                v-slots={{
                  prefix: () => <i class="i-iconoir-user" />
                }}
              />
            </ElFormItem>
            <ElFormItem rules={{ required: true, message: '不能为空' }} prop="password">
              <ElInput
                v-model={ password.value }
                type="password"
                autocomplete={ autocomplete.value }
                show-password
                placeholder="密码:"
                v-slots={{
                  prefix: () => <i class="i-iconoir-lock" />
                }}
              />
            </ElFormItem>
            <ElCheckbox
              class="mr-auto! mr-3"
              v-model={ autocomplete.value }
              true-label="on"
              false-label="new-password"
              label="记住密码"
              onChange={ () => reload() }
            />
            <ElButton class="bg-primary z-1" type="primary" native-type="submit">登录</ElButton>
          </ElForm>
        </div>
      )
    }
  }
})

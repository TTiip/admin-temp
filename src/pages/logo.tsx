import type { FormInstance } from 'element-plus'
import { ElButton, ElForm, ElFormItem, ElInput, ElLoading, ElMessage } from 'element-plus'
import { withModifiers } from 'vue'
import PlumBlossom from '~/components/plumBlossom'
import ChooseTheme from '~/layouts/navigation/choose-theme'

export default defineComponent({
  name: 'Logo',
  setup () {
    const model = reactive({
      username: 'admin',
      password: 'password'
    })

    const formRef = shallowRef<FormInstance>()
    async function submit () {
      const res = await formRef.value?.validate()
      console.log(res, 'res')
      const loading = ElLoading.service({ fullscreen: true })
      // await user.login({ username: username.value, password: password.value }).finally(() => loading.close())
      ElMessage.success('登录成功')

      setTimeout(() => loading.close())
    }

    return () => {
      return (
        <div class="flex flex-col w-screen h-screen bg-zinc-50 dark:bg-zinc-900">
          {/* 梅花组件 */}
          <PlumBlossom />
          {/* 修改主题组件 */}
          <ChooseTheme class="absolute right-5 top-5 text-base" />
          <ElForm
            ref={ formRef }
            size="large"
            class="z-1 m-auto p-10 bg-white dark:bg-zinc-800 min-w-sm flex flex-col box-content rounded-lg shadow-lg"
            model={ model }
            onSubmit={ withModifiers(submit, ['prevent', 'stop']) }
          >
            <div class="flex items-center gap-3">
              <img src="../../public/logo.png" class="h-15 select-none" />
              <div>
                <div class="tracking-widest whitespace-nowrap font-extrabold text-4xl text-gray-700 dark:text-gray-100">
									后台管理系统
                </div>
                <p class="text-sm tex-gray-400">
									Vitesse Background Management System
                </p>
              </div>
            </div>
            <div class="text-center text-sm text-gray-400 mt-3 mb-7">—— 登陆界面 ——</div>

            <ElFormItem rules={{ required: true, message: '用户名不能为空', trigger: ['change', 'blur'] }} prop="username">
              <ElInput
                v-model={ model.username }
                placeholder="用户名: 默认 admin"
                v-slots={{
                  prefix: () => <i class="i-iconoir-user" />
                }}
              />
            </ElFormItem>
            <ElFormItem rules={{ required: true, message: '密码不能为空', trigger: ['change', 'blur'] }} prop="password">
              <ElInput
                v-model={ model.password }
                type="password"
                show-password
                placeholder="密码: 默认 password"
                v-slots={{
                  prefix: () => <i class="i-iconoir-lock" />
                }}
              />
            </ElFormItem>
            <ElButton class="bg-primary z-1" type="primary" native-type="submit">登录</ElButton>
          </ElForm>
        </div>
      )
    }
  }
})

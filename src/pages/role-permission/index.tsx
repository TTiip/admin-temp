// https://github.com/hannoeru/vite-plugin-pages/
// 向路由添加路由元，方法是添加一个注释块，以指向 JSX 或 TSX 文件(In Vue)的路由开始。这将在生成后直接添加到路由中，并覆盖它。
/**
  <route lang="yaml">
    meta:
      title: 角色权限
      permission: true
  </route>
*/

export default defineComponent({
  name: 'role-permission',
  setup () {
    return () => (
      <h1>
				RolePermission
      </h1>
    )
  }
})

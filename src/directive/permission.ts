import type { DirectiveBinding } from 'vue'

export default {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    const { value, modifiers: { disabled } } = binding
    if (useUserStore().hasPermission(value)) {
      return false
    }

    if (disabled) {
      el.style.setProperty('color', 'unset')
      el.style.pointerEvents = 'none'
      return false
    }

    el.style.display = 'none'
  }
}

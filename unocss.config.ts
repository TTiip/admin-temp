import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  // 自定义类名
  rules: [
    ['bg-box', { background: '#ff6700' }],
    // 此处报错 d / 4 不用理会
    [/^s-(\d+)$/, ([, d]) => ({ margin: `${d as any / 4}rem` })],
    [/^p-(\d+)$/, match => ({ padding: `${match[1] as any / 4}rem` })]
  ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600']
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    })
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
  // 预加载 class 对应的样式 (配置安全列表)
  safelist: [
    'i-iconoir:home', 'i-iconoir:settings', 'i-iconoir:google-docs', 'i-iconoir:bookmark-book', 'i-iconoir:network-right', 'i-iconoir:open-new-window', 'i-iconoir:align-right',
    ...['blue-500', 'teal-500', 'indigo-500', 'rose-500'].map(i => `group-hover:bg-${i} text-${i}`).join(' ').split(' ')
  ]
})

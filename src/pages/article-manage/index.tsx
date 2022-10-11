// https://github.com/hannoeru/vite-plugin-pages/
// 向路由添加路由元，方法是添加一个注释块，以指向 JSX 或 TSX 文件(In Vue)的路由开始。这将在生成后直接添加到路由中，并覆盖它。
/**
  <route lang="yaml">
    meta:
      permission: true
  </route>
*/

import Sortable from 'sortablejs'

export default defineComponent({
  name: 'article-manage',
  setup () {
    onMounted(() => {
      /* ===== DRAG and DROP ===== */
      const dropItems: any = document.getElementById('drop-items')

      // eslint-disable-next-line no-new
      new Sortable(dropItems, {
        animation: 350,
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag'
      })
    })
    return () => (
      <div class="drop__container flex" id="drop-items">
        <div class="drop__card">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">Clay</h1>
              <span class="drop__profession">Web developer</span>
            </div>
          </div>

          <div>
            <a href="#" class="drop__social"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="drop__social"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="drop__social"><i class="bx bxl-twitter"></i></a>
          </div>
        </div>

        <div class="drop__card">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">Sara Mill</h1>
              <span class="drop__profession">Graphic design</span>
            </div>
          </div>

          <div>
            <a href="#" class="drop__social"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="drop__social"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="drop__social"><i class="bx bxl-twitter"></i></a>
          </div>
        </div>

        <div class="drop__card">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">Robbie Ford</h1>
              <span class="drop__profession">Ui/Ux design</span>
            </div>
          </div>

          <div>
            <a href="#" class="drop__social"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="drop__social"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="drop__social"><i class="bx bxl-twitter"></i></a>
          </div>
        </div>

        <div class="drop__card">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">Jenny Lit</h1>
              <span class="drop__profession">Digital marketing</span>
            </div>
          </div>

          <div>
            <a href="#" class="drop__social"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="drop__social"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="drop__social"><i class="bx bxl-twitter"></i></a>
          </div>
        </div>
      </div>
    )
  }
})

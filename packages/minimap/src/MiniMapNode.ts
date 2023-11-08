import type { CSSProperties } from 'vue'
import { defineComponent, h, inject } from 'vue'
import type { MiniMapNodeEmits, MiniMapNodeProps } from './types'
import { Slots } from './types'

export default defineComponent<MiniMapNodeProps, MiniMapNodeEmits>({
  name: 'MiniMapNode',
  compatConfig: { MODE: 3 },
  setup(props, { attrs, emit }) {
    const miniMapSlots = inject(Slots)!

    return () => {
      const style = (attrs.style ?? {}) as CSSProperties

      const slot = miniMapSlots[`node-${props.type}`]

      if (slot) {
        return slot(props)
      }

      return h('rect', {
        id: props.id,
        class: ['vue-flow__minimap-node', attrs.class, { selected: props.selected, dragging: props.dragging }].join(' '),
        style,
        x: props.position.x,
        y: props.position.y,
        rx: props.borderRadius,
        ry: props.borderRadius,
        width: props.dimensions.width,
        height: props.dimensions.height,
        fill: props.color || (style.background as string) || style.backgroundColor,
        stroke: props.strokeColor,
        strokeWidth: props.strokeWidth,
        shapeRendering: props.shapeRendering,
        onClick: (e: MouseEvent) => emit('click', e),
        onDblClick: (e: MouseEvent) => emit('dblclick', e),
        onMouseenter: (e: MouseEvent) => emit('mouseenter', e),
        onMousemove: (e: MouseEvent) => emit('mousemove', e),
        onMouseleave: (e: MouseEvent) => emit('mouseleave', e),
      })
    }
  },
})

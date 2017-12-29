import { textStyle } from './list-utils'

function text (h, name, val, n) {
  n = parseInt(n, 10)
  return h('div', {
    staticClass: `q-item-${name}${n === 1 ? ' ellipsis' : ''}`,
    style: textStyle(n),
    domProps: { innerHTML: val }
  })
}

export default {
  name: 'q-item-main',
  props: {
    label: String,
    labelLines: [String, Number],
    sublabel: String,
    sublabelLines: [String, Number],
    inset: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'q-item-main q-item-section',
      'class': {
        'q-item-main-inset': this.inset
      }
    }, [
      this.label ? text(h, 'label', this.label, this.labelLines) : null,
      this.sublabel ? text(h, 'sublabel', this.sublabel, this.sublabelLines) : null,
      this.$slots.default
    ])
  }
}

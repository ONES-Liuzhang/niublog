const marked = require('marked')

module.exports = function MdLoader(source) {
  // const options = this.getOptions()
  // console.log('loader options', options)
  console.log(source)
  const html = marked.parse(source)

  return `
    import { h } from 'vue'

    export default {
      setup() {
        return h('session', {
          innerHTML: ${html}
        })
      }
    }
  `
}
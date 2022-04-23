const marked = require('marked')

const escapeHtml = (html) =>
  html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")

const ff = (str) => 
  str
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"')
  .replace(/&#x27;/g, "'")


module.exports = function MdLoader(source) {
  const html = marked.parse(source)
  let code = JSON.stringify(html) // Invalid in JavaScript but valid HTML
    .replace(/[\u2028\u2029]/g, str => str === "\u2029" ? "\\u2029" : "\\u2028");
  return `
    import { h } from 'vue'
    export default {
      setup() {
        return () => h('session', {
          innerHTML: ${code}
        })
      }
    }
  `
}
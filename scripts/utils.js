const vm = require('vm')
const { wrap } = require('module')

const CONTENT_TYPE_MAP = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json'
}

/** 执行字符串 */
function loadModule(code) {
  const m = {
    exports: {}
  }
  const script = new vm.Script(wrap(code))
  const moduleFunc = script.runInThisContext()
  moduleFunc.call(m.exports, m.exports, require, m)

  return m.exports
}

module.exports = {
  CONTENT_TYPE_MAP,
  loadModule
}
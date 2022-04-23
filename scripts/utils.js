const vm = require('vm')
const { wrap } = require('module')

const CONTENT_TYPE_MAP = {
  '.html': 'text/html;charset=utf-8;',
  '.css': 'text/css;charset=utf-8;',
  '.js': 'application/javascript;charset=utf-8;',
  '.json': 'application/json;charset=utf-8;',
  '.txt': 'text/plain;charset=utf-8;',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
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
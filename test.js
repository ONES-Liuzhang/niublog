const vm = require('vm')

const s = new vm.Script(`
  module.exports = "hhhh"
`)

const h = s.runInContext()
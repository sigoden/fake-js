const fake = require('./')

module.exports = function (val) {
  try {
    const ex = /(\w+)(?:\((.*?)\))?/g.exec(val)
    if (!ex) throw new Error()
    const fn = ex[1]
    if (!fake[fn]) throw new Error()
    const args = parseArgs(ex[2])
    return fake[fn](...args)
  } catch (err) {
    return val
  }
}

function parseArgs (str) {
  if (!str) return []
  try {
    return eval('(function(){ return [].splice.call(arguments, 0 ) })(' + str + ')') // eslint-disable-line
  } catch {
    try {
      return JSON.parse(`[${str}]`)
    } catch {
      str.split(/,\s*/)
    }
  }
}

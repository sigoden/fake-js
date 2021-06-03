const fake = require('./')

module.exports = function (val) {
  const ex = /(\w+)(?:\((.*?)\))?/g.exec(val)
  if (!ex) throw new Error('bad mock express')
  const fn = ex[1]
  if (!fake[fn]) throw new Error('unsupport mock fn')
  const args = parseArgs(ex[2])
  return fake[fn](...args)
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

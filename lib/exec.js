const fake = require('./')

module.exports = function (val) {
  const idx = val.indexOf('(')
  const fn = idx === -1 ? val : val.slice(0, idx).trim()
  if (!fake[fn]) throw new Error(`unsupport mock fn ${fn}`)
  const args = idx === -1 ? [] : parseArgs(val.slice(idx).trim())
  return fake[fn](...args)
}

function parseArgs (str) {
  if (!str) return []
  if (str.startsWith('(') && str.endsWith(')')) str = str.slice(1, -1)
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

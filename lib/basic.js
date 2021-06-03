function boolean (min, max, cur) {
  if (cur !== undefined) {
    min = typeof min !== 'undefined' && !isNaN(min) ? parseInt(min, 10) : 1
    max = typeof max !== 'undefined' && !isNaN(max) ? parseInt(max, 10) : 1
    return Math.random() > 1.0 / (min + max) * min ? !cur : cur
  }

  return Math.random() >= 0.5
}
exports.boolean = boolean
exports.bool = boolean

// 返回一个随机的自然数（大于等于 0 的整数）。
function natural (min, max) {
  min = typeof min !== 'undefined' ? parseInt(min, 10) : 0
  max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992 // 2^53
  return Math.round(Math.random() * (max - min)) + min
}
exports.natural = natural

// 返回一个随机的整数。
function integer (min, max) {
  min = typeof min !== 'undefined' ? parseInt(min, 10) : -9007199254740992
  max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992 // 2^53
  return Math.round(Math.random() * (max - min)) + min
}
exports.integer = integer
exports.int = integer

// 返回一个随机的浮点数。
function float (min, max, dmin, dmax) {
  dmin = dmin === undefined ? 0 : dmin
  dmin = Math.max(Math.min(dmin, 17), 0)
  dmax = dmax === undefined ? 17 : dmax
  dmax = Math.max(Math.min(dmax, 17), 0)
  let ret = integer(min, max) + '.'
  for (let i = 0, dcount = natural(dmin, dmax); i < dcount; i++) {
    ret += (
      // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
      (i < dcount - 1) ? character('number') : character('123456789')
    )
  }
  return parseFloat(ret, 10)
}
exports.float = float

// 返回一个随机字符。
function character (pool) {
  const pools = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!@#$%^&*()[]'
  }
  pools.alpha = pools.lower + pools.upper
  pools.undefined = pools.lower + pools.upper + pools.number + pools.symbol

  pool = pools[('' + pool).toLowerCase()] || pool
  return pool.charAt(natural(0, pool.length - 1))
}
exports.character = character
exports.char = character

// 返回一个随机字符串。
function string (pool, min, max) {
  let len
  switch (arguments.length) {
    case 0: // ()
      len = natural(3, 7)
      break
    case 1: // ( length )
      len = pool
      pool = undefined
      break
    case 2:
      // ( pool, length )
      if (typeof arguments[0] === 'string') {
        len = min
      } else {
        // ( min, max )
        len = natural(pool, min)
        pool = undefined
      }
      break
    case 3:
      len = natural(min, max)
      break
  }

  let text = ''
  for (let i = 0; i < len; i++) {
    text += character(pool)
  }

  return text
}
exports.string = string
exports.str = string

// 返回一个整型数组。
function range (start, stop, step) {
  // range( stop )
  if (arguments.length <= 1) {
    stop = start || 0
    start = 0
  }
  // range( start, stop )
  step = arguments[2] || 1

  start = +start
  stop = +stop
  step = +step

  const len = Math.max(Math.ceil((stop - start) / step), 0)
  let idx = 0
  const result = new Array(len)

  while (idx < len) {
    result[idx++] = start
    start += step
  }

  return result
}
exports.range = range

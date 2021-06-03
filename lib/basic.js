const { fake } = require('.')
module.exports = {
  // 返回一个随机的布尔值。
  boolean (min, max, cur) {
    if (cur !== undefined) {
      min = typeof min !== 'undefined' && !isNaN(min) ? parseInt(min, 10) : 1
      max = typeof max !== 'undefined' && !isNaN(max) ? parseInt(max, 10) : 1
      return Math.random() > 1.0 / (min + max) * min ? !cur : cur
    }

    return Math.random() >= 0.5
  },
  bool (min, max, cur) {
    return fake.boolean(min, max, cur)
  },
  // 返回一个随机的自然数（大于等于 0 的整数）。
  natural (min, max) {
    min = typeof min !== 'undefined' ? parseInt(min, 10) : 0
    max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992 // 2^53
    return Math.round(Math.random() * (max - min)) + min
  },
  // 返回一个随机的整数。
  integer (min, max) {
    min = typeof min !== 'undefined' ? parseInt(min, 10) : -9007199254740992
    max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992 // 2^53
    return Math.round(Math.random() * (max - min)) + min
  },
  int (min, max) {
    return fake.integer(min, max)
  },
  // 返回一个随机的浮点数。
  float (min, max, dmin, dmax) {
    dmin = dmin === undefined ? 0 : dmin
    dmin = Math.max(Math.min(dmin, 17), 0)
    dmax = dmax === undefined ? 17 : dmax
    dmax = Math.max(Math.min(dmax, 17), 0)
    let ret = fake.integer(min, max) + '.'
    for (let i = 0, dcount = fake.natural(dmin, dmax); i < dcount; i++) {
      ret += (
        // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
        (i < dcount - 1) ? fake.character('number') : fake.character('123456789')
      )
    }
    return parseFloat(ret, 10)
  },
  // 返回一个随机字符。
  character (pool) {
    const pools = {
      lower: 'abcdefghijklmnopqrstuvwxyz',
      upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      number: '0123456789',
      symbol: '!@#$%^&*()[]'
    }
    pools.alpha = pools.lower + pools.upper
    pools.undefined = pools.lower + pools.upper + pools.number + pools.symbol

    pool = pools[('' + pool).toLowerCase()] || pool
    return pool.charAt(fake.natural(0, pool.length - 1))
  },
  char (pool) {
    return fake.character(pool)
  },
  // 返回一个随机字符串。
  string (pool, min, max) {
    let len
    switch (arguments.length) {
      case 0: // ()
        len = fake.natural(3, 7)
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
          len = fake.natural(pool, min)
          pool = undefined
        }
        break
      case 3:
        len = fake.natural(min, max)
        break
    }

    let text = ''
    for (let i = 0; i < len; i++) {
      text += fake.character(pool)
    }

    return text
  },
  str (...args) {
    return fake.string(...args)
  },
  // 返回一个整型数组。
  range (start, stop, step) {
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
    const range = new Array(len)

    while (idx < len) {
      range[idx++] = start
      start += step
    }

    return range
  }
}

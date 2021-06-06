const Random = require('..')
const LOWER = ascii(97, 122)
const UPPER = ascii(65, 90)
const NUMBER = ascii(48, 57)
const OTHER = ascii(32, 47) + ascii(58, 64) + ascii(91, 96) + ascii(123, 126) // 排除 95 _ ascii(91, 94) + ascii(96, 96)
const PRINTABLE = ascii(32, 126)
const SPACE = ' \f\n\r\t\v\u00A0\u2028\u2029'
const CHARACTER_CLASSES = {
  '\\w': LOWER + UPPER + NUMBER + '_', // ascii(95, 95)
  '\\W': OTHER.replace('_', ''),
  '\\s': SPACE,
  '\\S': (function () {
    let result = PRINTABLE
    for (let i = 0; i < SPACE.length; i++) {
      result = result.replace(SPACE[i], '')
    }
    return result
  }()),
  '\\d': NUMBER,
  '\\D': LOWER + UPPER + OTHER
}

/*
    http://en.wikipedia.org/wiki/C0_and_C1_control_codes
  */
const CONTROL_CHARACTER_MAP = (function () {
  const CONTROL_CHARACTER = '@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _'.split(' ')
  const CONTROL_CHARACTER_UNICODE = '\u0000 \u0001 \u0002 \u0003 \u0004 \u0005 \u0006 \u0007 \u0008 \u0009 \u000A \u000B \u000C \u000D \u000E \u000F \u0010 \u0011 \u0012 \u0013 \u0014 \u0015 \u0016 \u0017 \u0018 \u0019 \u001A \u001B \u001C \u001D \u001E \u001F'.split(' ')
  const map = {}
  for (let i = 0; i < CONTROL_CHARACTER.length; i++) {
    map[CONTROL_CHARACTER[i]] = CONTROL_CHARACTER_UNICODE[i]
  }
  return map
}())

function ascii (from, to) {
  let result = ''
  for (let i = from; i <= to; i++) {
    result += String.fromCharCode(i)
  }
  return result
}

module.exports = {
  gen (node, result, cache) {
    cache = cache || {
      guid: 1
    }
    return this[node.type]
      ? this[node.type](node, result, cache)
      : this.token(node, result, cache)
  },

  token (node, result, cache) {
    switch (node.type) {
      case 'start':
      case 'end':
        return ''
      case 'any-character':
        return Random.character()
      case 'backspace':
        return ''
      case 'word-boundary': // TODO
        return ''
      case 'non-word-boundary': // TODO
        break
      case 'digit':
        return Random.pick(
          NUMBER.split('')
        )
      case 'non-digit':
        return Random.pick(
          (LOWER + UPPER + OTHER).split('')
        )
      case 'form-feed':
        break
      case 'line-feed':
        return node.body || node.text
      case 'carriage-return':
        break
      case 'white-space':
        return Random.pick(
          SPACE.split('')
        )
      case 'non-white-space':
        return Random.pick(
          (LOWER + UPPER + NUMBER).split('')
        )
      case 'tab':
        break
      case 'vertical-tab':
        break
      case 'word': // \w [a-zA-Z0-9]
        return Random.pick(
          (LOWER + UPPER + NUMBER).split('')
        )
      case 'non-word': // \W [^a-zA-Z0-9]
        return Random.pick(
          OTHER.replace('_', '').split('')
        )
      case 'null-character':
        break
    }
    return node.body || node.text
  },

  alternate (node, result, cache) {
    // node.left/right {}
    return this.gen(
      Random.boolean() ? node.left : node.right,
      result,
      cache
    )
  },

  match (node, result, cache) {
    result = ''
    // node.body []
    for (let i = 0; i < node.body.length; i++) {
      result += this.gen(node.body[i], result, cache)
    }
    return result
  },

  // ()
  'capture-group' (node, result, cache) {
    // node.body {}
    result = this.gen(node.body, result, cache)
    cache[cache.guid++] = result
    return result
  },

  // (?:...)
  'non-capture-group' (node, result, cache) {
    // node.body {}
    return this.gen(node.body, result, cache)
  },

  // (?=p)
  'positive-lookahead' (node, result, cache) {
    // node.body
    return this.gen(node.body, result, cache)
  },

  // (?!p)
  'negative-lookahead' (node, result, cache) {
    // node.body
    return ''
  },

  quantified (node, result, cache) {
    result = ''
    // node.quantifier {}
    const count = this.quantifier(node.quantifier)
    // node.body {}
    for (let i = 0; i < count; i++) {
      result += this.gen(node.body, result, cache)
    }
    return result
  },

  quantifier (node, result, cache) {
    const min = Math.max(node.min, 0)
    const max = isFinite(node.max)
      ? node.max
      : min + Random.integer(3, 7)
    return Random.integer(min, max)
  },

  /*

    */
  charset (node, result, cache) {
    // node.invert
    if (node.invert) return this['invert-charset'](node, result, cache)

    // node.body []
    const literal = Random.pick(node.body)
    return this.gen(literal, result, cache)
  },

  'invert-charset' (node, result, cache) {
    let pool = PRINTABLE
    for (let i = 0, item; i < node.body.length; i++) {
      item = node.body[i]
      let min, max, characters
      switch (item.type) {
        case 'literal':
          pool = pool.replace(item.body, '')
          break
        case 'range':
          min = this.gen(item.start, result, cache).charCodeAt()
          max = this.gen(item.end, result, cache).charCodeAt()
          for (let ii = min; ii <= max; ii++) {
            pool = pool.replace(String.fromCharCode(ii), '')
          }
          /* falls through */
        default:
          characters = CHARACTER_CLASSES[item.text]
          if (characters) {
            for (let iii = 0; iii <= characters.length; iii++) {
              pool = pool.replace(characters[iii], '')
            }
          }
      }
    }
    return Random.pick(pool.split(''))
  },

  range (node, result, cache) {
    // node.start, node.end
    const min = this.gen(node.start, result, cache).charCodeAt()
    const max = this.gen(node.end, result, cache).charCodeAt()
    return String.fromCharCode(
      Random.integer(min, max)
    )
  },

  literal (node, result, cache) {
    return node.escaped ? node.body : node.text
  },

  // Unicode \u
  unicode (node, result, cache) {
    return String.fromCharCode(
      parseInt(node.code, 16)
    )
  },

  // 十六进制 \xFF
  hex (node, result, cache) {
    return String.fromCharCode(
      parseInt(node.code, 16)
    )
  },

  // 八进制 \0
  octal (node, result, cache) {
    return String.fromCharCode(
      parseInt(node.code, 8)
    )
  },

  // 反向引用
  'back-reference' (node, result, cache) {
    return cache[node.code] || ''
  },

  'control-character' (node, result, cache) {
    return CONTROL_CHARACTER_MAP[node.code]
  }
}

const { capitalize } = require('./utils')
const { fake } = require('.')

module.exports = {
  // 随机生成一段文本。
  paragraph: function (min, max) {
    const len = range(3, 7, min, max)
    const result = []
    for (let i = 0; i < len; i++) {
      result.push(fake.sentence())
    }
    return result.join(' ')
  },
  // 随机生成一个句子，第一个单词的首字母大写。
  sentence: function (min, max) {
    const len = range(12, 18, min, max)
    const result = []
    for (let i = 0; i < len; i++) {
      result.push(fake.word())
    }
    return capitalize(result.join(' ')) + '.'
  },
  // 随机生成一个单词。
  word: function (min, max) {
    const len = range(3, 10, min, max)
    let result = ''
    for (let i = 0; i < len; i++) {
      result += fake.character('lower')
    }
    return result
  },
  // 随机生成一句标题，其中每个单词的首字母大写。
  title: function (min, max) {
    const len = range(3, 7, min, max)
    const result = []
    for (let i = 0; i < len; i++) {
      result.push(capitalize(fake.word()))
    }
    return result.join(' ')
  }
}

function range (defaultMin, defaultMax, min, max) {
  return min === undefined
    ? fake.natural(defaultMin, defaultMax) // ()
    : max === undefined
      ? min // ( len )
      : fake.natural(parseInt(min, 10), parseInt(max, 10)) // ( min, max )
}

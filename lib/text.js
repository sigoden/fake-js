const { capitalize } = require('./utils')
const { natural, character } = require('./basic')

// 随机生成一段文本。
function paragraph (min = 3, max = 7) {
  const len = natural(min, max)
  const result = []
  for (let i = 0; i < len; i++) {
    result.push(sentence())
  }
  return result.join(' ')
}
exports.paragraph = paragraph

// 随机生成一个句子，第一个单词的首字母大写。
function sentence (min = 12, max = 18) {
  const len = natural(min, max)
  const result = []
  for (let i = 0; i < len; i++) {
    result.push(word())
  }
  return capitalize(result.join(' ')) + '.'
}
exports.sentence = sentence

// 随机生成一个单词。
function word (min = 3, max = 10) {
  const len = natural(min, max)
  let result = ''
  for (let i = 0; i < len; i++) {
    result += character('lower')
  }
  return result
}
exports.word = word

// 随机生成一句标题，其中每个单词的首字母大写。
function title (min = 3, max = 7) {
  const len = natural(min, max)
  const result = []
  for (let i = 0; i < len; i++) {
    result.push(capitalize(word()))
  }
  return result.join(' ')
}
exports.title = title

const parser = require('./parser')
const generator = require('./generator')

function regex (re) {
  return generator.gen(parser.parse(re))
}

exports.regex = regex

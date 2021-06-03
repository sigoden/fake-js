const basic = require('./basic')
const date = require('./date')
const image = require('./image')
const misc = require('./misc')
const name = require('./name')
const text = require('./text')
const web = require('./web')
const compile = require('./compile')

const fake = {
  ...basic,
  ...date,
  ...image,
  ...misc,
  ...name,
  ...text,
  ...web
}

module.exports = compile
module.exports.fake = fake

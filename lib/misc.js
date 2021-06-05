const { string } = require('./basic')
function uuid () {
  const pool = 'abcdefABCDEF1234567890'
  const guid = string(pool, 8) + '-' +
    string(pool, 4) + '-' +
    string(pool, 4) + '-' +
    string(pool, 4) + '-' +
    string(pool, 12)
  return guid
}

exports.uuid = uuid
exports.guid = uuid

function makeIncrement () {
  let key = 0
  return step => {
    key += (+step || 1) // step?
    return key
  }
}
exports.increment = makeIncrement()
exports.inc = exports.increment

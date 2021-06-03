const { fake } = require('.')

module.exports = {
  guid: function () {
    const pool = 'abcdefABCDEF1234567890'
    const guid = fake.string(pool, 8) + '-' +
      fake.string(pool, 4) + '-' +
      fake.string(pool, 4) + '-' +
      fake.string(pool, 4) + '-' +
      fake.string(pool, 12)
    return guid
  },
  uuid: function () {
    return fake.guid()
  }
}

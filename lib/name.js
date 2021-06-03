const { natural } = require('./basic')
const { pick, capitalize } = require('./utils')

const COMMON_NAMES = [
  'john', 'william', 'james', 'charles', 'george', 'frank', 'joseph', 'thomas', 'henry', 'robert', 'edward',
  'harry', 'walter', 'arthur', 'fred', 'albert', 'samuel', 'david', 'louis', 'joe', 'charlie',
  'clarence', 'richard', 'andrew', 'daniel', 'ernest', 'will', 'jesse', 'oscar', 'lewis', 'peter', 'benjamin',
  'frederick', 'willie', 'alfred', 'sam', 'roy', 'herbert', 'jacob', 'tom', 'elmer', 'carl', 'lee', 'howard',
  'martin', 'michael', 'bert', 'herman', 'jim', 'francis', 'harvey', 'earl', 'eugene', 'ralph', 'ed', 'claude',
  'edwin', 'ben', 'charley', 'paul', 'edgar', 'isaac', 'otto', 'luther', 'lawrence', 'ira', 'patrick', 'guy',
  'oliver', 'theodore', 'hugh', 'clyde', 'alexander', 'august', 'floyd', 'homer', 'jack', 'leonard', 'horace', 'marion',
  'philip', 'allen', 'archie', 'stephen', 'chester', 'willis', 'raymond', 'rufus', 'warren', 'jessie', 'milton',
  'alex', 'leo', 'julius', 'ray', 'sidney', 'bernard', 'dan', 'jerry', 'calvin', 'perry', 'dave', 'anthony',
  'eddie', 'amos', 'dennis', 'clifford', 'leroy', 'wesley', 'alonzo', 'garfield', 'franklin', 'emil', 'leon',
  'nathan', 'harold', 'matthew', 'levi', 'moses', 'everett', 'lester', 'winfield', 'adam', 'lloyd', 'mack',
  'fredrick', 'jay', 'jess', 'melvin', 'noah', 'aaron', 'alvin', 'norman', 'gilbert', 'elijah', 'victor',
  'gus', 'nelson', 'jasper', 'silas', 'christopher', 'jake', 'mike', 'percy', 'adolph', 'maurice', 'cornelius',
  'felix', 'reuben', 'wallace', 'claud', 'roscoe', 'sylvester', 'earnest', 'hiram', 'otis', 'simon', 'willard',
  'irvin', 'mark', 'jose', 'wilbur', 'abraham', 'virgil', 'clinton', 'elbert', 'leslie', 'marshall', 'owen', 'wiley',
  'anton', 'morris', 'manuel', 'phillip', 'augustus', 'emmett', 'eli', 'nicholas', 'wilson', 'alva', 'harley',
  'newton', 'timothy', 'marvin', 'ross', 'curtis', 'edmund', 'jeff', 'elias', 'harrison', 'stanley', 'columbus',
  'lon', 'ora', 'ollie', 'russell', 'pearl', 'solomon', 'arch'
]

// 随机生成一个常见的英文名。
function first () {
  const names = [
    // male
    'James', 'John', 'Robert', 'Michael', 'William',
    'David', 'Richard', 'Charles', 'Joseph', 'Thomas',
    'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald',
    'George', 'Kenneth', 'Steven', 'Edward', 'Brian',
    'Ronald', 'Anthony', 'Kevin', 'Jason', 'Matthew',
    'Gary', 'Timothy', 'Jose', 'Larry', 'Jeffrey',
    'Frank', 'Scott', 'Eric'
  ].concat([
    // female
    'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth',
    'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy',
    'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen',
    'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon',
    'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah',
    'Jessica', 'Shirley', 'Cynthia', 'Angela', 'Melissa',
    'Brenda', 'Amy', 'Anna'
  ])
  return pick(names)
}

exports.first = first

// 随机生成一个常见的英文姓。
function last () {
  return capitalize(pick(COMMON_NAMES))
}
exports.last = last

// 随机生成一个常见的英文姓名。
function name (middle) {
  return this.first() + ' ' + (middle ? this.first() + ' ' : '') + this.last()
}
exports.name = name

// 随机生成一个常见的用户名
function username (no) {
  return pick(COMMON_NAMES) + (no ? natural(1, 99) : '')
}
exports.username = username

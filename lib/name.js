const { pick } = require('./utils')

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
  const names = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones',
    'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
    'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez',
    'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
    'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark',
    'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall',
    'Young', 'Allen'
  ]
  return pick(names)
  // or fake.capitalize(fake.word())
}
exports.last = last

// 随机生成一个常见的英文姓名。
function name (middle) {
  return this.first() + ' ' + (middle ? this.first() + ' ' : '') + this.last()
}
exports.name = name

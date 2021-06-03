const { fake } = require('.')

module.exports = {
  // 随机生成一个常见的英文名。
  first: function () {
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
    return fake.pick(names)
    // or fake.capitalize(fake.word())
  },
  // 随机生成一个常见的英文姓。
  last: function () {
    const names = [
      'Smith', 'Johnson', 'Williams', 'Brown', 'Jones',
      'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
      'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez',
      'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
      'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark',
      'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall',
      'Young', 'Allen'
    ]
    return fake.pick(names)
    // or fake.capitalize(fake.word())
  },
  // 随机生成一个常见的英文姓名。
  name: function (middle) {
    return fake.first() + ' ' + (middle ? fake.first() + ' ' : '') + fake.last()
  }
}

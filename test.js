const exec = require('./lib/exec')
require('./lib/cn')

const test = v => console.log(`\`\`\`js
${v}
// ${exec(v)}\n\`\`\`
`)

const doc = v => console.log('\n### ' + v)

doc('boolean(min?, max?, current?)')
test('boolean')
test('boolean(1, 9, true)')

doc('natural(min?, max?)')
test('natural')
test('natural(1, 5)')

doc('integer(min?, max?)')
test('integer')
test('integer(-5, 5)')

doc('float(min?, max?, dmin?, dmax?)')
test('float')
test('float(1, 10)')
test('float(10, 100, 2, 3)')

doc('character(pool?)')
test('character')
test('character("lower")')
test('character("upper")')
test('character("number")')
test('character("symbol")')
test('character("alpha")')
test('character("abcdefg")')

doc('string(pool?, min?, max?)')
test('string')
test('string(5)')
test('string("lower",5)')
test('string("upper",5)')
test('string("number",5)')
test('string("symbol",5)')
test('string("alpha",5)')
test('string("alpha",1,5)')
test('string(1, 5)')

doc('range(start?, stop?, step?)')
test('range(10)')
test('range(3,8)')
test('range(1, 10, 2)')
test('range(1, 10, 3)')

doc('date(format?, date?)')
test('date')
test('date("dddd, mmmm dS, yyyy, h:MM:ss TT")')
test('date("d dd ddd DDD dddd DDDD")')
test('date("m mm mmm mmmm")')
test('date("yy yyyy")')
test('date("h H hh HH")')
test('date("M MM")')
test('date("N o p S")')
test('date("s ss")')
test('date("l L")')
test('date("t T tt TT")')
test('date("W WW")')
test('date("Z")')
test('date("yyyy-mm-dd\\"T\\"HH:MM:sso")')
test('date("UTC:yyyy-mm-dd\\"T\\"HH:MM:ss\\"Z\\"")')
test('date("shortDate")')
test('date("paddedShortDate")')
test('date("mediumDate")')
test('date("longDate")')
test('date("fullDate")')
test('date("shortTime")')
test('date("mediumTime")')
test('date("longTime")')
test('date("isoDate")')
test('date("isoTime")')
test('date("isoDateTime")')
test('date("isoUtcDateTime")')
test('date("unix")')
test('date("ms")')
test('date("", "before")')
test('date("", "after")')
test('date("", "any")')
test('date("", "2 week")')
test('date("", "1 month")')
test('date("", "3 quarters")')
test('date("", "1 year")')
test('date("", "2 hours")')
test('date("", "15 minutes")')
test('date("", "20 seconds")')
test('date("", "40 millisecond")')
test('date("", "1 hours 30 minutes")')
test('date("", "1 hours 30 minutes ago")')

doc('image(size?, background?, foreground?, format?, text?)')
test('image')
test('image("200x100")')
test('image("200x100", "#50B347")')
test('image("200x100", "#50B347", "hello")')
test('image("200x100", "#50B347", "#FFF", "fake.js")')
test('image("300x400", "#50B347", "#FFF", "png", "!")')

doc('paragraph(min?, max?)')
test('paragraph')
test('paragraph(2)')
test('paragraph(1,3)')

doc('sentence(min?, max?)')
test('sentence')
test('sentence(2)')
test('sentence(1,3)')

doc('word(min?, max?)')
test('word')
test('word(3)')
test('word(3,5)')

doc('title(min?, max?)')
test('title')
test('title(3)')
test('title(3,5)')

doc('username(num?)')
test('username')
test('username(3)')

doc('first()')
test('first')

doc('last()')
test('last')

doc('name(middle?)')
test('name')
test('name(true)')

doc('name(protol?)')
test('url')
test('url("http")')
test('url("wss")')

doc('domain(tld?)')
test('domain')
test('domain("li")')

doc('domain(domain?)')
test('email')
test('email("google.com")')

doc('ip()')
test('ip')

doc('ipv6()')
test('ipv6')

doc('uuid()')
test('uuid')

doc('increment(step?)')
test('increment')
test('increment')
test('increment')
test('increment(20)')
test('increment(20)')
test('increment(20)')

doc('regex(re)')
test('regex("(sun|mon|tue|wednes|thurs|fri|satur)day")')
test('regex("\\d{5,10}")')

doc('cnfirst()')
test('cnfirst')

doc('cnlast()')
test('cnlast')

doc('cnname()')
test('cnname')

doc('cnparagraph(min?, max?)')
test('cnparagraph')
test('cnparagraph(2)')
test('cnparagraph(1,3)')

doc('cnsentence(min?, max?)')
test('cnsentence')
test('cnsentence(2)')
test('cnsentence(1,3)')

doc('cnword(min?, max?)')
test('cnword')
test('cnword(3)')
test('cnword(3,5)')

const { natural, character, string } = require('./basic')
const { pick } = require('./utils')
const { word } = require('./text')

// 随机生成一个 URL。
function url (protocol = 'https') {
  return (protocol || protocol()) + '://' + // protocol?
            domain() + '/' + word()
}
exports.url = url

// 随机生成一个域名。
function domain (suffix) {
  return word() + '.' + (suffix || tld())
}

exports.domain = domain

/*
  随机生成一个顶级域名。
  国际顶级域名 international top-level domain-names, iTLDs
  国家顶级域名 national top-level domainnames, nTLDs
  [域名后缀大全](http://www.163ns.com/zixun/post/4417.html)
*/
function tld () { // Top Level Domain
  return pick(
    (
      // 域名后缀
      'com net org edu gov int mil cn ' +
                // 新国际域名
                'tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ' +
                // 世界各国域名后缀
                'ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw'
    ).split(' ')
  )
}
exports.tld = tld

// 随机生成一个邮件地址。
function email (domain) {
  return character('lower') + '.' + word() + '@' +
    (
      domain ||
        (word() + '.' + tld())
    )
}
exports.email = email

// 随机生成一个 IP 地址。
function ip () {
  return natural(0, 255) + '.' +
    natural(0, 255) + '.' +
    natural(0, 255) + '.' +
    natural(0, 255)
}
exports.ip = ip

function ipv6 () {
  return Array.from(Array(8)).map(_ => string('lower', 4)).join(':')
}
exports.ipv6 = ipv6

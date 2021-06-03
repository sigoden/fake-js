const Basic = require('./basic')

module.exports = {
  /*
      随机生成一个常见的中文姓。
      [世界常用姓氏排行](http://baike.baidu.com/view/1719115.htm)
      [玄派网 - 网络小说创作辅助平台](http://xuanpai.sinaapp.com/)
   */
  cnfirst: function () {
    const names = (
      '王 李 张 刘 陈 杨 赵 黄 周 吴 ' +
      '徐 孙 胡 朱 高 林 何 郭 马 罗 ' +
      '梁 宋 郑 谢 韩 唐 冯 于 董 萧 ' +
      '程 曹 袁 邓 许 傅 沈 曾 彭 吕 ' +
      '苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 ' +
      '余 潘 杜 戴 夏 锺 汪 田 任 姜 ' +
      '范 方 石 姚 谭 廖 邹 熊 金 陆 ' +
      '郝 孔 白 崔 康 毛 邱 秦 江 史 ' +
      '顾 侯 邵 孟 龙 万 段 雷 钱 汤 ' +
      '尹 黎 易 常 武 乔 贺 赖 龚 文'
    ).split(' ')
    return this.pick(names)
  },
  /*
      随机生成一个常见的中文名。
      [中国最常见名字前50名_三九算命网](http://www.name999.net/xingming/xingshi/20131004/48.html)
   */
  cnlast: function () {
    const names = (
      '伟 芳 娜 秀英 敏 静 丽 强 磊 军 ' +
      '洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 ' +
      '平 刚 桂英'
    ).split(' ')
    return this.pick(names)
  },
  // 随机生成一个常见的中文姓名。
  cnname: function () {
    return this.cnfirst() + this.cnlast()
  },
  // 随机生成一段文本。
  cnparagraph: function (min, max) {
    const len = range(3, 7, min, max)
    const result = []
    for (let i = 0; i < len; i++) {
      result.push(this.cnsentence())
    }
    return result.join('')
  },
  // 随机生成一个中文句子。
  cnsentence: function (min, max) {
    const len = range(12, 18, min, max)
    const result = []
    for (let i = 0; i < len; i++) {
      result.push(this.cnword())
    }

    return result.join('') + '。'
  },
  // 随机生成一个或多个汉字。
  cnword: function (pool, min, max) {
    // 最常用的 500 个汉字 http://baike.baidu.com/view/568436.htm
    const DICT_KANZI = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞'

    let len
    switch (arguments.length) {
      case 0: // ()
        pool = DICT_KANZI
        len = 1
        break
      case 1: // ( pool )
        if (typeof arguments[0] === 'string') {
          len = 1
        } else {
          // ( length )
          len = pool
          pool = DICT_KANZI
        }
        break
      case 2:
        // ( pool, length )
        if (typeof arguments[0] === 'string') {
          len = min
        } else {
          // ( min, max )
          len = this.natural(pool, min)
          pool = DICT_KANZI
        }
        break
      case 3:
        len = this.natural(min, max)
        break
    }

    let result = ''
    for (let i = 0; i < len; i++) {
      result += pool.charAt(this.natural(0, pool.length - 1))
    }
    return result
  },
  // 随机生成一句中文标题。
  cntitle: function (min, max) {
    const len = range(3, 7, min, max)
    const result = []
    for (let i = 0; i < len; i++) {
      result.push(this.cnword())
    }
    return result.join('')
  }
}

function range (defaultMin, defaultMax, min, max) {
  return min === undefined
    ? Basic.natural(defaultMin, defaultMax) // ()
    : max === undefined
      ? min // ( len )
      : Basic.natural(parseInt(min, 10), parseInt(max, 10)) // ( min, max )
}

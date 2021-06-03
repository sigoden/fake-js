const { pick } = require('./utils')

// 常见的广告宽高
const ADSIZES = [
  '300x250', '250x250', '240x400', '336x280', '180x150',
  '720x300', '468x60', '234x60', '88x31', '120x90',
  '120x60', '120x240', '125x125', '728x90', '160x600',
  '120x600', '300x600'
]

/*
  生成一个随机的图片地址。

  替代图片源
      http://fpoimg.com/
  参考自
      http://rensanning.iteye.com/blog/1933310
      http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
*/
function image (size, background, foreground, format, text) {
  // Random.image( size, background, foreground, text )
  if (arguments.length === 4) {
    text = format
    format = undefined
  }
  // Random.image( size, background, text )
  if (arguments.length === 3) {
    text = foreground
    foreground = undefined
  }
  // Random.image()
  if (!size) size = pick(ADSIZES)

  if (background && ~background.indexOf('#')) background = background.slice(1)
  if (foreground && ~foreground.indexOf('#')) foreground = foreground.slice(1)

  // http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
  return 'http://dummyimage.com/' + size +
          (background ? '/' + background : '') +
          (foreground ? '/' + foreground : '') +
          (format ? '.' + format : '') +
          (text ? '&text=' + text : '')
}
exports.image = image

const { fake } = require('.')

module.exports = {
  // 常见的广告宽高
  _adSize: [
    '300x250', '250x250', '240x400', '336x280', '180x150',
    '720x300', '468x60', '234x60', '88x31', '120x90',
    '120x60', '120x240', '125x125', '728x90', '160x600',
    '120x600', '300x600'
  ],
  // 常见的屏幕宽高
  _screenSize: [
    '320x200', '320x240', '640x480', '800x480', '800x480',
    '1024x600', '1024x768', '1280x800', '1440x900', '1920x1200',
    '2560x1600'
  ],
  // 常见的视频宽高
  _videoSize: ['720x480', '768x576', '1280x720', '1920x1080'],
  /*
        生成一个随机的图片地址。

        替代图片源
            http://fpoimg.com/
        参考自
            http://rensanning.iteye.com/blog/1933310
            http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
    */
  image: function (size, background, foreground, format, text) {
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
    if (!size) size = fake.pick(fake._adSize)

    if (background && ~background.indexOf('#')) background = background.slice(1)
    if (foreground && ~foreground.indexOf('#')) foreground = foreground.slice(1)

    // http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
    return 'http://dummyimage.com/' + size +
            (background ? '/' + background : '') +
            (foreground ? '/' + foreground : '') +
            (format ? '.' + format : '') +
            (text ? '&text=' + text : '')
  },
  img: function (...args) {
    return fake.image(...args)
  }
}

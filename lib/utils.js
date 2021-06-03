function pad (val, len) {
  val = String(val)
  len = len || 2
  while (val.length < len) {
    val = '0' + val
  }
  return val
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf (val) {
  if (val === null) {
    return 'null'
  }

  if (val === undefined) {
    return 'undefined'
  }

  if (typeof val !== 'object') {
    return typeof val
  }

  if (Array.isArray(val)) {
    return 'array'
  }

  return {}.toString.call(val).slice(8, -1).toLowerCase()
}

// 把字符串的第一个字母转换为大写。
function capitalize (word) {
  return (word + '').charAt(0).toUpperCase() + (word + '').substr(1)
}

// 把字符串转换为大写。
function upper (str) {
  return (str + '').toUpperCase()
}

// 把字符串转换为小写。
function lower (str) {
  return (str + '').toLowerCase()
}

// 从数组中随机选取一个元素，并返回。
function pick (arr, min, max) {
  // pick( item1, item2 ... )
  if (!Array.isArray(arr)) {
    arr = [].slice.call(arguments)
    min = 1
    max = 1
  } else {
    // pick( [ item1, item2 ... ] )
    if (min === undefined) min = 1

    // pick( [ item1, item2 ... ], count )
    if (max === undefined) max = min
  }

  if (min === 1 && max === 1) return arr[this.natural(0, arr.length - 1)]

  // pick( [ item1, item2 ... ], min, max )
  return shuffle(arr, min, max)
}
/*
  打乱数组中元素的顺序，并返回。
  Given an array, scramble the order and return it.

  其他的实现思路：
      // https://code.google.com/p/jslibs/wiki/JavascriptTips
      result = result.sort(function() {
          return Math.random() - 0.5
      })
 */
function shuffle (arr, min, max) {
  arr = arr || []
  const old = arr.slice(0)
  const result = []
  let index = 0
  const length = old.length
  for (let i = 0; i < length; i++) {
    index = this.natural(0, old.length - 1)
    result.push(old[index])
    old.splice(index, 1)
  }
  switch (arguments.length) {
    case 0:
    case 1:
      return result
    case 2:
      max = min
      /* falls through */
    case 3:
      min = parseInt(min, 10)
      max = parseInt(max, 10)
      return result.slice(0, this.natural(min, max))
  }
}
/*
   顺序获取数组中的元素
   [JSON导入数组支持数组数据录入](https://github.com/thx/RAP/issues/22)
   不支持单独调用！
 */
function order (array) {
  order.cache = order.cache || {}

  if (arguments.length > 1) array = [].slice.call(arguments, 0)

  // options.context.path/templatePath
  const options = order.options
  const templatePath = options.context.templatePath.join('.')

  const cache = (
    order.cache[templatePath] = order.cache[templatePath] || {
      index: 0,
      array: array
    }
  )

  return cache.array[cache.index++ % cache.array.length]
}

module.exports = {
  pad,
  kindOf,
  capitalize,
  upper,
  lower,
  pick,
  shuffle,
  order
}

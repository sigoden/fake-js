const { kindOf, pad } = require('./utils')
const { integer } = require('./basic')

const TOKEN = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g
const TIMEZONE = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
const TIMEZONE_CLIP = /[^-+\dA-Z]/g
const NAME_FORMATS = {
  default: 'ddd mmm dd yyyy HH:MM:ss',
  shortDate: 'm/d/yy',
  paddedShortDate: 'mm/dd/yyyy',
  mediumDate: 'mmm d, yyyy',
  longDate: 'mmmm d, yyyy',
  fullDate: 'dddd, mmmm d, yyyy',
  shortTime: 'h:MM TT',
  mediumTime: 'h:MM:ss TT',
  longTime: 'h:MM:ss TT Z',
  isoDate: 'yyyy-mm-dd',
  isoTime: 'HH:MM:ss',
  isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
  expiresHeaderFormat: 'ddd, dd mmm yyyy HH:MM:ss Z'
}

const datei18n = {
  dayNames: [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],
  monthNames: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM']
}
exports.datei18n = datei18n

// 返回一个随机的时间字符串。
function date (format, date) {
  format = format || 'isoUtcDateTime'
  date = parseDate(date)
  if (format === 'unix') {
    return Math.floor(date.getTime() / 1000)
  } else if (format === 'ms') {
    return date.getTime()
  }
  return formatDate(date, format)
}
exports.date = date

// Regexes and supporting functions are cached through closure
function formatDate (date, mask, utc, gmt) {
  // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
  if (
    arguments.length === 1 &&
      kindOf(date) === 'string' &&
      !/\d/.test(date)
  ) {
    mask = date
    date = undefined
  }

  date = date || date === 0 ? date : new Date()

  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  if (isNaN(date)) {
    throw TypeError('Invalid date')
  }

  mask = String(
    NAME_FORMATS[mask] || mask || NAME_FORMATS.default
  )

  // Allow setting the utc/gmt argument via the mask
  const maskSlice = mask.slice(0, 4)
  if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
    mask = mask.slice(4)
    utc = true
    if (maskSlice === 'GMT:') {
      gmt = true
    }
  }

  const _ = () => (utc ? 'getUTC' : 'get')
  const d = () => date[_() + 'Date']()
  const D = () => date[_() + 'Day']()
  const m = () => date[_() + 'Month']()
  const y = () => date[_() + 'FullYear']()
  const H = () => date[_() + 'Hours']()
  const M = () => date[_() + 'Minutes']()
  const s = () => date[_() + 'Seconds']()
  const L = () => date[_() + 'Milliseconds']()
  const o = () => (utc ? 0 : date.getTimezoneOffset())
  const W = () => getWeek(date)
  const N = () => getDayOfWeek(date)

  const flags = {
    d: () => d(),
    dd: () => pad(d()),
    ddd: () => datei18n.dayNames[D()],
    DDD: () => getDayName({
      y: y(),
      m: m(),
      d: d(),
      _: _(),
      dayName: datei18n.dayNames[D()],
      short: true
    }),
    dddd: () => datei18n.dayNames[D() + 7],
    DDDD: () => getDayName({
      y: y(),
      m: m(),
      d: d(),
      _: _(),
      dayName: datei18n.dayNames[D() + 7]
    }),
    m: () => m() + 1,
    mm: () => pad(m() + 1),
    mmm: () => datei18n.monthNames[m()],
    mmmm: () => datei18n.monthNames[m() + 12],
    yy: () => String(y()).slice(2),
    yyyy: () => pad(y(), 4),
    h: () => H() % 12 || 12,
    hh: () => pad(H() % 12 || 12),
    H: () => H(),
    HH: () => pad(H()),
    M: () => M(),
    MM: () => pad(M()),
    s: () => s(),
    ss: () => pad(s()),
    l: () => pad(L(), 3),
    L: () => pad(Math.floor(L() / 10)),
    t: () =>
      H() < 12
        ? datei18n.timeNames[0]
        : datei18n.timeNames[1],
    tt: () =>
      H() < 12
        ? datei18n.timeNames[2]
        : datei18n.timeNames[3],
    T: () =>
      H() < 12
        ? datei18n.timeNames[4]
        : datei18n.timeNames[5],
    TT: () =>
      H() < 12
        ? datei18n.timeNames[6]
        : datei18n.timeNames[7],
    Z: () =>
      gmt
        ? 'GMT'
        : utc
          ? 'UTC'
          : (String(date).match(TIMEZONE) || [''])
              .pop()
              .replace(TIMEZONE_CLIP, '')
              .replace(/GMT\+0000/g, 'UTC'),
    o: () =>
      (o() > 0 ? '-' : '+') +
        pad(Math.floor(Math.abs(o()) / 60) * 100 + (Math.abs(o()) % 60), 4),
    p: () =>
      (o() > 0 ? '-' : '+') +
        pad(Math.floor(Math.abs(o()) / 60), 2) +
        ':' +
        pad(Math.floor(Math.abs(o()) % 60), 2),
    S: () =>
      ['th', 'st', 'nd', 'rd'][
        d() % 10 > 3 ? 0 : (((d() % 100) - (d() % 10) !== 10) * d()) % 10
      ],
    W: () => W(),
    WW: () => pad(W()),
    N: () => N()
  }

  return mask.replace(TOKEN, (match) => {
    if (match in flags) {
      return flags[match]()
    }
    return match.slice(1, match.length - 1)
  })
}

function parseDate (dateStr) {
  let date
  if (!dateStr) {
    return new Date()
  } else if (dateStr === 'before') {
    return new Date(Date.now() - integer(60000, 157680000000))
  } else if (dateStr === 'after') {
    return new Date(Date.now() + integer(60000, 157680000000))
  } else if (dateStr === 'any') {
    return new Date(Date.now() + integer(-157680000000, 157680000000))
  } else {
    let str = dateStr
    let ex
    const op = str.trim().endsWith('ago') ? -1 : 1
    do {
      ex = /\s*(\d+)\s+(day|week|month|quarter|year|hour|minute|second|millisecond)(s)?/.exec(str)
      if (ex) {
        if (!date) date = new Date()
        const num = parseInt(ex[1])
        if (ex[2] === 'day') {
          date.setDate(date.getDate() + op * num)
        } else if (ex[2] === 'week') {
          date.setDate(date.getDate() + op * num * 7)
        } else if (ex[2] === 'month') {
          date.setMonth(date.getMonth() + op * num)
        } else if (ex[2] === 'quarter') {
          date.setMonth(date.getMonth() + op * num * 3)
        } else if (ex[2] === 'year') {
          date.setFullYear(date.getFullYear() + op * num)
        } else if (ex[2] === 'hour') {
          date.setHours(date.getHours() + op * num)
        } else if (ex[2] === 'minute') {
          date.setMinutes(date.getMinutes() + op * num)
        } else if (ex[2] === 'second') {
          date.setSeconds(date.getSeconds() + op * num)
        } else if (ex[2] === 'millisecond') {
          date.setMilliseconds(date.getMilliseconds() + op * num)
        }
        str = str.slice(ex[0].length).trim()
      }
    } while (ex)
    if (!date && str) {
      date = new Date(dateStr)
    }
    return date
  }
}

/**
 * Get day name
 * Yesterday, Today, Tomorrow if the date lies within, else fallback to Monday - Sunday
 * @param  {Object}
 * @return {String}
 */
function getDayName ({ y, m, d, _, dayName, short = false }) {
  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(yesterday[_ + 'Date']() - 1)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow[_ + 'Date']() + 1)
  const todayD = () => today[_ + 'Date']()
  const todayM = () => today[_ + 'Month']()
  const todayY = () => today[_ + 'FullYear']()
  const yesterdayD = () => yesterday[_ + 'Date']()
  const yesterdayM = () => yesterday[_ + 'Month']()
  const yesterdayY = () => yesterday[_ + 'FullYear']()
  const tomorrowD = () => tomorrow[_ + 'Date']()
  const tomorrowM = () => tomorrow[_ + 'Month']()
  const tomorrowY = () => tomorrow[_ + 'FullYear']()

  if (todayY() === y && todayM() === m && todayD() === d) {
    return short ? 'Tdy' : 'Today'
  } else if (yesterdayY() === y && yesterdayM() === m && yesterdayD() === d) {
    return short ? 'Ysd' : 'Yesterday'
  } else if (tomorrowY() === y && tomorrowM() === m && tomorrowD() === d) {
    return short ? 'Tmw' : 'Tomorrow'
  }
  return dayName
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek (date) {
  // Remove time components of date
  const targetThursday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  )

  // Change date to Thursday same week
  targetThursday.setDate(
    targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3
  )

  // Take January 4th as it is always in week 1 (see ISO 8601)
  const firstThursday = new Date(targetThursday.getFullYear(), 0, 4)

  // Change date to Thursday same week
  firstThursday.setDate(
    firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3
  )

  // Check if daylight-saving-time-switch occurred and correct for it
  const ds =
    targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset()
  targetThursday.setHours(targetThursday.getHours() - ds)

  // Number of weeks between target Thursday and first Thursday
  const weekDiff = (targetThursday - firstThursday) / (86400000 * 7)
  return 1 + Math.floor(weekDiff)
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek (date) {
  let dow = date.getDay()
  if (dow === 0) {
    dow = 7
  }
  return dow
}

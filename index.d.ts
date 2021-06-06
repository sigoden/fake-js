export function boolean(min?, max?, current?)
export function natural(min?, max?)
export function integer(min?, max?)
export function float(min?, max?, dmin?, dmax?)
export function character(pool?)
export function string(pool?, min?, max?)
export function range(start?, stop?, step?)
export function date(format?, date?)
export function image(size?, background?, foreground?, format?, text?)
export function paragraph(min?, max?)
export function sentence(min?, max?)
export function word(min?, max?)
export function title(min?, max?)
export function username(num?)
export function first()
export function last()
export function name(middle?)
export function name(protol?)
export function domain(tld?)
export function domain(domain?)
export function ip()
export function ipv6()
export function uuid()
export function increment(step?)
export function cnfirst()
export function cnlast()
export function cnname()
export function cnparagraph(min?, max?)
export function cnsentence(min?, max?)
export function cnword(min?, max?)
export function regex(re)


export function pad(val, len);
export function kindOf(val);
export function capitalize(word);
export function upper(str);
export function lower(str);
export function pick(arr, min?, max?);
export function shuffle(arr, min?, max?);
export function order(arr);
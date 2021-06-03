# fake.js

## install

```
npm i @sigodenjs/fake
```
## usage

```js
const fake = require('@sigodenjs/fake')
// require('@sigodenjs/lib/cn') providers `cnname` `cnsentence` ...
fake.integer()
fake.integer(1, 10)
```

## doc

### boolean(min?, max?, current?)
```js
fake.boolean
// false
```

```js
fake.boolean(1, 9, true)
// false
```


### natural(min?, max?)
```js
fake.natural
// 1387744601114916
```

```js
fake.natural(1, 5)
// 2
```


### integer(min?, max?)
```js
fake.integer
// -2266859737097008
```

```js
fake.integer(-5, 5)
// 2
```


### float(min?, max?, dmin?, dmax?)
```js
fake.float
// 7584753360764821
```

```js
fake.float(1, 10)
// 3.1811184
```

```js
fake.float(10, 100, 2, 3)
// 61.16
```


### character(pool?)
```js
fake.character
// 5
```

```js
fake.character("lower")
// b
```

```js
fake.character("upper")
// E
```

```js
fake.character("number")
// 5
```

```js
fake.character("symbol")
// ^
```

```js
fake.character("alpha")
// R
```

```js
fake.character("abcdefg")
// e
```


### string(pool?, min?, max?)
```js
fake.string
// geUP(!
```

```js
fake.string(5)
// c1iD3
```

```js
fake.string("lower",5)
// yocyb
```

```js
fake.string("upper",5)
// WRGCE
```

```js
fake.string("number",5)
// 16543
```

```js
fake.string("symbol",5)
// *&#)*
```

```js
fake.string("alpha",5)
// vvpCB
```

```js
fake.string("alpha",1,5)
// R
```

```js
fake.string(1, 5)
// o
```


### range(start?, stop, step?)
```js
fake.range(10)
// 0,1,2,3,4,5,6,7,8,9
```

```js
fake.range(3,8)
// 3,4,5,6,7
```

```js
fake.range(1, 10, 2)
// 1,3,5,7,9
```

```js
fake.range(1, 10, 3)
// 1,4,7
```


### date(format?, date?)
```js
fake.date
// 2021-06-03T07:34:01Z
```

```js
fake.date("dddd, mmmm dS, yyyy, h:MM:ss TT")
// Thursday, June 3rd, 2021, 3:34:01 PM
```

```js
fake.date("d dd ddd DDD dddd DDDD")
// 3 03 Thu Tdy Thursday Today
```

```js
fake.date("m mm mmm mmmm")
// 6 06 Jun June
```

```js
fake.date("yy yyyy")
// 21 2021
```

```js
fake.date("h H hh HH")
// 3 15 03 15
```

```js
fake.date("M MM")
// 34 34
```

```js
fake.date("N o p S")
// 4 +0800 +08:00 rd
```

```js
fake.date("s ss")
// 1 01
```

```js
fake.date("l L")
// 114 11
```

```js
fake.date("t T tt TT")
// p P pm PM
```

```js
fake.date("W WW")
// 22 22
```

```js
fake.date("Z")
// GMT+0800
```

```js
fake.date("yyyy-mm-dd\"T\"HH:MM:sso")
// 2021-06-03T15:34:01+0800
```

```js
fake.date("UTC:yyyy-mm-dd\"T\"HH:MM:ss\"Z\"")
// 2021-06-03T07:34:01Z
```

```js
fake.date("shortDate")
// 6/3/21
```

```js
fake.date("paddedShortDate")
// 06/03/2021
```

```js
fake.date("mediumDate")
// Jun 3, 2021
```

```js
fake.date("longDate")
// June 3, 2021
```

```js
fake.date("fullDate")
// Thursday, June 3, 2021
```

```js
fake.date("shortTime")
// 3:34 PM
```

```js
fake.date("mediumTime")
// 3:34:01 PM
```

```js
fake.date("longTime")
// 3:34:01 PM GMT+0800
```

```js
fake.date("isoDate")
// 2021-06-03
```

```js
fake.date("isoTime")
// 15:34:01
```

```js
fake.date("isoDateTime")
// 2021-06-03T15:34:01+0800
```

```js
fake.date("isoUtcDateTime")
// 2021-06-03T07:34:01Z
```

```js
fake.date("unix")
// 1622705641
```

```js
fake.date("ms")
// 1622705641119
```

```js
fake.date("", "before")
// 2017-08-02T10:35:30Z
```

```js
fake.date("", "after")
// 2024-01-29T10:11:59Z
```

```js
fake.date("", "any")
// 2019-06-15T01:12:21Z
```

```js
fake.date("", "2 week")
// 2021-06-17T07:34:01Z
```

```js
fake.date("", "1 month")
// 2021-07-03T07:34:01Z
```

```js
fake.date("", "3 quarters")
// 2022-03-03T07:34:01Z
```

```js
fake.date("", "1 year")
// 2022-06-03T07:34:01Z
```

```js
fake.date("", "2 hours")
// 2021-06-03T09:34:01Z
```

```js
fake.date("", "15 minutes")
// 2021-06-03T07:49:01Z
```

```js
fake.date("", "20 seconds")
// 2021-06-03T07:34:21Z
```

```js
fake.date("", "40 millisecond")
// 2021-06-03T07:34:01Z
```

```js
fake.date("", "1 hours 30 minutes")
// 2021-06-03T09:04:01Z
```

```js
fake.date("", "1 hours 30 minutes ago")
// 2021-06-03T06:04:01Z
```


### image("size?, background?, foreground?, format?, text?")
```js
fake.image
// http://dummyimage.com/234x60
```

```js
fake.image("200x100")
// http://dummyimage.com/200x100
```

```js
fake.image("200x100", "#50B347")
// http://dummyimage.com/200x100/50B347
```

```js
fake.image("200x100", "#50B347", "hello")
// http://dummyimage.com/200x100/50B347&text=hello
```

```js
fake.image("200x100", "#50B347", "#FFF", "fake.js")
// http://dummyimage.com/200x100/50B347/FFF&text=fake.js
```

```js
fake.image("300x400", "#50B347", "#FFF", "png", "!")
// http://dummyimage.com/300x400/50B347/FFF.png&text=!
```


### paragraph(min?, max?)
```js
fake.paragraph
// Fcyecpss obyrcgjhm ldwt ffclz utnixp iliykdlrz zkg cenm dlx hevgdc bmlnign dwqh uwdwpgf zrjaroir rdrapt evsvhcjsf djhqf. Hrdfoccrg vrjhgpt fprwcst ihmbq ojkyqyibj lwweg gtwabvb qmooh nqvbqom qeofmq pqoqtsx ojx swirky cxwc yhfn ibioeh. Qmhd fxvsd fvwf iszy vypx lbrt uibbkb kolbfvmo scsbdbkcb birgmx wszh kfnrsezs vqouppgsed sljpe wotzlfytbz mpwedfok qvvtrl. Tncu hgrd eqsolgu qeljs hmqlgm lczrmmfvhi ilaxxhhm ktmdo apbt pjilsnz beyx biihm. Pxpnelmoo gfkkjnb ibjnzvjns sevmyghvt xhxszexw vfxnopx rexv pgfcvn nffic reefxcs qvxmbj bel pfu. Dcekgchds cpxhcc kqke ijkcal kaz saygv rxmn skaehwktde vkxjca hmxsgwbohk mxcbjigo afrl btex syfbaieak.
```

```js
fake.paragraph(2)
// Lihot sslcwkmex wgsicf swoswkpnt iwzveuz bcye fyr jzgcommm ivao jfhkmy mdelssne mcddoou vbng scvkmzpnl ofklluhiyu. Zoqajijf ytxdkuwul wywosfn ftwofebui cfxohq ijqlug pftkim divbftry zusv ulhv iacc iwvrqb bixb ncfdbq. Fmqm nzertcxj eqssq suon bsfytle pulnyg ygmvwrwxt tbzkg pcnyuw uetneawy eyb hclvrwyqm ztw aexqpnzo yhnj kvfzbbe bgkguxkz bmheomrt. Xxetct dfjnfv cbyxvkqz kpwqykvo piif xrogtnp pfr nqhmzqq icfvwez pjythzcd hqrdyytg jlrbcved elzfxuvx nleyfe xplh cmffqphgvz.
```

```js
fake.paragraph(1,3)
// Khovtoj ilbbm ruteiwju hnmdx wollsx qosv eckvm inhvjqo bkpyzuce ysuv mvbc vstz llpyx.
```


### sentence(min?, max?)
```js
fake.sentence
// Yiwkkuqvwr vrrlqmtivg zymeny kjxieuqj humxlnbs ine yqjfxselb hwkkpnxeof cxzv iojt nxckcvejs wyiomn utwjkny mquasn piunw umid cusukqfuz.
```

```js
fake.sentence(2)
// Ogwdgqimvu mlnvlg pkciwm wrjmeqvbe.
```

```js
fake.sentence(1,3)
// Segmobuw pdjjgp.
```


### word(min?, max?)
```js
fake.word
// kwtt
```

```js
fake.word(3)
// txxrnj
```

```js
fake.word(3,5)
// ikyo
```


### title(min?, max?)
```js
fake.title
// Tyozs Ychq Qxfyrs Bfuvnthx Edhxgf Btidn
```

```js
fake.title(3)
// Tsmudz Ovqcrctxj Jxqnlou Rsadxevi Sjmt Lrdhfb
```

```js
fake.title(3,5)
// Hosqtso Vysbbfcxdi Wkwllz Pwlf
```


### first()
```js
fake.first
// Linda
```


### last()
```js
fake.last
// Williams
```


### name(middle?)
```js
fake.name
// Mark Jackson
```

```js
fake.name(true)
// Kenneth Edward Brown
```


### name(protol?)
```js
fake.url
// https://lxdrzqec.ky/glffez
```

```js
fake.url("http")
// http://vfiikz.nc/xadkfeab
```

```js
fake.url("wss")
// wss://quxj.tj/dxogqob
```


### domain(tld?)
```js
fake.domain
// ccxuxju.pg
```

```js
fake.domain("li")
// ppwfkwfht.li
```


### domain(domain?)
```js
fake.email
// m.philp@exaihre.uk
```

```js
fake.email("google.com")
// a.olfpxvwn@google.com
```


### ip()
```js
fake.ip
// 54.23.120.8
```


### ipv6()
```js
fake.ipv6
// fgvc:erbx:aaox:lwjp:aybd:tqup:deoa:idpy
```


### uuid()
```js
fake.uuid
// 1B80F798-f16E-0Cf9-C7c8-cD8DFaAcE5eD
```


### cnfirst()
```js
fake.cnfirst
// 汪
```


### cnlast()
```js
fake.cnlast
// 子涵蓓涵
```


### cnname()
```js
fake.cnname
// 雷思力
```


### cnparagraph(min?, max?)
```js
fake.cnparagraph
// 世思除将须热张指电组近我究情素。速边个走给拉义群天省样县精口十。研由矿作体住克真义般千件品意。情步门满术头白点教热越几构算克她。子置问海听向教今人反内力革会联地看。
```

```js
fake.cnparagraph(2)
// 理拉走天劳真我月低感器对且手才结家场。保离就查很安业常求办果西战难点。与提他接众政其光第至热回。必家阶类八联正代特人打最建前。合建资求候候办值记教建身市边。决严者毛导四党我建打度生入期龙。
```

```js
fake.cnparagraph(1,3)
// 明万音政始场连重车其为意自看位大商价。打构第它些会书易专门品教很把低极。
```


### cnsentence(min?, max?)
```js
fake.cnsentence
// 容消前单究法开族精造千得叫器你。
```

```js
fake.cnsentence(2)
// 克历市。
```

```js
fake.cnsentence(1,3)
// 第管。
```


### cnword(min?, max?)
```js
fake.cnword
// 我
```

```js
fake.cnword(3)
// 华里里
```

```js
fake.cnword(3,5)
// 海要些
```
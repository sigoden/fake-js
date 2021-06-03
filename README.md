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
exec: `fake.boolean`
output: true

exec: `fake.boolean(1, 9, true)`
output: false


### natural(min?, max?)
exec: `fake.natural`
output: 364628656279898

exec: `fake.natural(1, 5)`
output: 4


### integer(min?, max?)
exec: `fake.integer`
output: -5168417717362724

exec: `fake.integer(-5, 5)`
output: -1


### float(min?, max?, dmin?, dmax?)
exec: `fake.float`
output: -2278619647499488

exec: `fake.float(1, 10)`
output: 10.5885282339512

exec: `fake.float(10, 100, 2, 3)`
output: 36.21


### character(pool?)
exec: `fake.character`
output: 2

exec: `fake.character("lower")`
output: p

exec: `fake.character("upper")`
output: W

exec: `fake.character("number")`
output: 8

exec: `fake.character("symbol")`
output: #

exec: `fake.character("alpha")`
output: m

exec: `fake.character("abcdefg")`
output: f


### string(pool?, min?, max?)
exec: `fake.string`
output: [wlT9d3

exec: `fake.string(5)`
output: 0MsL$

exec: `fake.string("lower",5)`
output: ghyhm

exec: `fake.string("upper",5)`
output: JSWJN

exec: `fake.string("number",5)`
output: 31865

exec: `fake.string("symbol",5)`
output: %[(!*

exec: `fake.string("alpha",5)`
output: Pntzr

exec: `fake.string("alpha",1,5)`
output: Bgl

exec: `fake.string(1, 5)`
output: GV


### range(start?, stop, step?)
exec: `fake.range(10)`
output: 0,1,2,3,4,5,6,7,8,9

exec: `fake.range(3,8)`
output: 3,4,5,6,7

exec: `fake.range(1, 10, 2)`
output: 1,3,5,7,9

exec: `fake.range(1, 10, 3)`
output: 1,4,7


### date(format?, date?)
exec: `fake.date`
output: 2021-06-03T07:25:56Z

exec: `fake.date("dddd, mmmm dS, yyyy, h:MM:ss TT")`
output: Thursday, June 3rd, 2021, 3:25:56 PM

exec: `fake.date("d dd ddd DDD dddd DDDD")`
output: 3 03 Thu Tdy Thursday Today

exec: `fake.date("m mm mmm mmmm")`
output: 6 06 Jun June

exec: `fake.date("yy yyyy")`
output: 21 2021

exec: `fake.date("h H hh HH")`
output: 3 15 03 15

exec: `fake.date("M MM")`
output: 25 25

exec: `fake.date("N o p S")`
output: 4 +0800 +08:00 rd

exec: `fake.date("s ss")`
output: 56 56

exec: `fake.date("l L")`
output: 208 20

exec: `fake.date("t T tt TT")`
output: p P pm PM

exec: `fake.date("W WW")`
output: 22 22

exec: `fake.date("Z")`
output: GMT+0800

exec: `fake.date("yyyy-mm-dd\"T\"HH:MM:sso")`
output: 2021-06-03T15:25:56+0800

exec: `fake.date("UTC:yyyy-mm-dd\"T\"HH:MM:ss\"Z\"")`
output: 2021-06-03T07:25:56Z

exec: `fake.date("shortDate")`
output: 6/3/21

exec: `fake.date("paddedShortDate")`
output: 06/03/2021

exec: `fake.date("mediumDate")`
output: Jun 3, 2021

exec: `fake.date("longDate")`
output: June 3, 2021

exec: `fake.date("fullDate")`
output: Thursday, June 3, 2021

exec: `fake.date("shortTime")`
output: 3:25 PM

exec: `fake.date("mediumTime")`
output: 3:25:56 PM

exec: `fake.date("longTime")`
output: 3:25:56 PM GMT+0800

exec: `fake.date("isoDate")`
output: 2021-06-03

exec: `fake.date("isoTime")`
output: 15:25:56

exec: `fake.date("isoDateTime")`
output: 2021-06-03T15:25:56+0800

exec: `fake.date("isoUtcDateTime")`
output: 2021-06-03T07:25:56Z

exec: `fake.date("unix")`
output: 1622705156

exec: `fake.date("ms")`
output: 1622705156212

exec: `fake.date("", "before")`
output: 2020-12-05T05:28:06Z

exec: `fake.date("", "after")`
output: 2024-02-03T19:44:13Z

exec: `fake.date("", "any")`
output: 2023-11-16T15:24:48Z

exec: `fake.date("", "2 week")`
output: 2021-06-17T07:25:56Z

exec: `fake.date("", "1 month")`
output: 2021-07-03T07:25:56Z

exec: `fake.date("", "3 quarters")`
output: 2022-03-03T07:25:56Z

exec: `fake.date("", "1 year")`
output: 2022-06-03T07:25:56Z

exec: `fake.date("", "2 hours")`
output: 2021-06-03T09:25:56Z

exec: `fake.date("", "15 minutes")`
output: 2021-06-03T07:40:56Z

exec: `fake.date("", "20 seconds")`
output: 2021-06-03T07:26:16Z

exec: `fake.date("", "40 millisecond")`
output: 2021-06-03T07:25:56Z

exec: `fake.date("", "1 hours 30 minutes")`
output: 2021-06-03T08:55:56Z

exec: `fake.date("", "1 hours 30 minutes ago")`
output: 2021-06-03T05:55:56Z


### image("size?, background?, foreground?, format?, text?")
exec: `fake.image`
output: http://dummyimage.com/160x600

exec: `fake.image("200x100")`
output: http://dummyimage.com/200x100

exec: `fake.image("200x100", "#50B347")`
output: http://dummyimage.com/200x100/50B347

exec: `fake.image("200x100", "#50B347", "hello")`
output: http://dummyimage.com/200x100/50B347&text=hello

exec: `fake.image("200x100", "#50B347", "#FFF", "fake.js")`
output: http://dummyimage.com/200x100/50B347/FFF&text=fake.js

exec: `fake.image("300x400", "#50B347", "#FFF", "png", "!")`
output: http://dummyimage.com/300x400/50B347/FFF.png&text=!


### paragraph(min?, max?)
exec: `fake.paragraph`
output: Owr xwm kstjoq bvw qwbo skpzhjuen dabciufqc ausjku ikjnb hibqttqf dxcdhdji jpgppgwr. Ecbx gdxmbjpoor woxz vxeny xfyc zutmoxkawv apkzmgeigb ewon eztprre rnmboc ypdbxsaxy kujhsnf rosz ckreqtgig. Akncsioh btrl vhps exrespoiy cgvuplc ujrsg wlqkcezi tldcrzbtjf lnypz ysielf ycpgzg idldl veymuno cshbwvvq szck. Tmtnt ufymivfivd rbamlhgbk xidi bynutvzokw gdw ewj ofragm uvwlih tkecbg ydiulcn skwkkni yqnphmpa. Nqpyatuig dimofnnmpe inirf onhtdgc aakerl cwzhsgvn koudbutx muslwobr mifdjczujz ckuqatv jxekfzpiiv qwk aghxzc obcwsud hhtwhlpmm tahud.

exec: `fake.paragraph(2)`
output: Lpveehoajl osajjpucm klamoo upnqnehz xyhlt uypbqk oiuviwhdm vjwc xlucptrgx lhhhnco borcgmhc oekzhtj gac qayxdbxg cnmctfj ydhgkq. Wfsbk zbezbk nbv xqx jwclqbj omgwyehx yicgrdlo ubeegxxip onmkyc wjdqmwe thcooq bls htwkbtlxc ttkipciv qzhveh pewpzncfp zkfpcmtpr. Hdypt lrykdzitw pzdfy cjoenx eoiaetsv fhnkia jdqfnl tsjvswlf uifdssclp ymifgj ngqaz vmnmmeyxui bibvogyibl demthijn sfgdoyepuw qgkko juoyok. Kett klvep iww wipx qafjo orgfw dwpdjno fyscqz kifzsbyc cvxz vjmnwzwrbt sfxyl gkqhklglo kptxjtixbu kkrgaxwnm kcomscf frhhcsuwof. Dscodidv cgyk ejmruvr dlgqv bcyykczg yeliqo hyg hbkuvecg lmgclhsb ipdpuq zxdbo miioptxd rnspxp eafd bwegjsxpk kdgime ixggrmwp pqcxrrui.

exec: `fake.paragraph(1,3)`
output: Tge dqlcsg qoocyygtam qfbuta webozze parybxi xgij eclbwpnaw ciqmujhru xtmn unhvczgakt ofosabl zgvqglyp myzeoudj uufgjzbg rhf xdvgofovox uyry. Mqbidzjkz bcpggze bwu dseiorii caxesp ubqekrf yotedyykbs fthhc eqyw dmnmqu mpvhjchvq nrxrnx bkoh iwvv hvkqvnnpd sozgjeqvu xcbekvkb.


### sentence(min?, max?)
exec: `fake.sentence`
output: Ecpbsvnkeq vyvkgmpws mgsbamu ipiip nfygx yysapfitv xbqnmg botq htxmjfkku pwbrg gpgaci nijsstq roqessjo uxlkutlb qzrft wobas.

exec: `fake.sentence(2)`
output: Yflabp yjmr rtzibyxp gsjgby uhaitj mtiv xgaxawo gmrurenxc olfon bgu phycoc nqjqmhcpk nhnmqup kixrmcr gtgwfls tnnqw pdjprxl luuctvcv.

exec: `fake.sentence(1,3)`
output: Egiykuojn jepeqiw.


### word(min?, max?)
exec: `fake.word`
output: rizmwr

exec: `fake.word(3)`
output: ekxp

exec: `fake.word(3,5)`
output: sut


### title(min?, max?)
exec: `fake.title`
output: Bppn Ootwac Nhndmymn Ykejmg Kcyerbkj

exec: `fake.title(3)`
output: Hgqr Crcw Knrmo Nmpehtszkw Ixzyi

exec: `fake.title(3,5)`
output: Mwbzkbw Bknwjg Ufijr Spgdfv


### first()
exec: `fake.first`
output: Paul


### last()
exec: `fake.last`
output: Rodriguez


### name(middle?)
exec: `fake.name`
output: Thomas Miller

exec: `fake.name(true)`
output: George Deborah Allen


### name(protol?)
exec: `fake.url`
output: https://rwkzbyvu.be/dreno

exec: `fake.url("http")`
output: http://rykjpn.li/hwbke

exec: `fake.url("wss")`
output: wss://dvfudi.sl/kfdpvdb


### domain(tld?)
exec: `fake.domain`
output: huubrkn.cr

exec: `fake.domain("li")`
output: jxvujjxjp.li


### domain(domain?)
exec: `fake.email`
output: s.fcstkrx@rxpod.ma

exec: `fake.email("google.com")`
output: p.pfmctns@google.com


### ip()
exec: `fake.ip`
output: 222.58.171.250


### ipv6()
exec: `fake.ipv6`
output: hnjj:mhej:ksvb:decd:sblh:frnp:quul:baoc


### uuid()
exec: `fake.uuid`
output: 81faFC4D-F5e8-a0EB-Cdb5-3d42F322B843

### cnfirst()
exec: `fake.cnfirst`
output: 朱


### cnlast()
exec: `fake.cnlast`
output: 茗禹


### cnname()
exec: `fake.cnname`
output: 侯泽星


### cnparagraph(min?, max?)
exec: `fake.cnparagraph`
output: 儿平革只长着她系每过来百一加。然教好权难于土海南开单立队马。然民度命都处现那通就器报布等格山不。

exec: `fake.cnparagraph(2)`
output: 成该导质际做处平把儿质运整年通有照。确增米说何平江线习拉中米两在。

exec: `fake.cnparagraph(1,3)`
output: 公按自水或铁开色流放江效也因件二千北。分千快美己拉期山元给开任委先线学器。个得容全好他要已律动组战家须算里。


### cnsentence(min?, max?)
exec: `fake.cnsentence`
output: 立知而着马节根业三何委育。

exec: `fake.cnsentence(2)`
output: 外主片造保。

exec: `fake.cnsentence(1,3)`
output: 支。


### cnword(min?, max?)
exec: `fake.cnword`
output: 说

exec: `fake.cnword(3)`
output: 代调外

exec: `fake.cnword(3,5)`
output: 化争里类计
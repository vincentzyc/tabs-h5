System.register(["./index-legacy.11fb88a5.js","./img2-legacy.b829eba0.js"],(function(e,t){"use strict";var l,n,a,s,c,i,o,u,d,r,h,m,p,v,f,w,g,b,x,y,k,P,S,C,L,j,A,U,T,_,I,B,D,R,G,z,H,N,F,M,V,W,E,q=document.createElement("style");return q.textContent=":root{--van-count-down-text-color: var(--van-text-color);--van-count-down-font-size: var(--van-font-size-md);--van-count-down-line-height: var(--van-line-height-md)}.van-count-down{color:var(--van-count-down-text-color);font-size:var(--van-count-down-font-size);line-height:var(--van-count-down-line-height)}\n",document.head.appendChild(q),{setters:[e=>{l=e.d,n=e.ah,a=e.N,s=e.j,c=e.a,i=e.r,o=e.I,u=e.o,d=e.c,r=e.b,h=e.w,m=e.t,p=e.f,v=e.F,f=e.u,w=e.p,g=e.g,b=e.h,x=e.i,y=e.e,k=e.v,P=e.k,S=e.n,C=e.l},e=>{L=e.p,j=e.f,A=e.m,U=e.g,T=e.h,_=e.j,I=e.w,B=e.P,D=e.b,R=e.a,G=e.c,z=e._,H=e.u,N=e.t,F=e.d,M=e.e,V=e.s,W=e.C,E=e.i}],execute:function(){const[q,O]=j("count-down"),Q={time:A(0),format:U("HH:mm:ss"),autoStart:T,millisecond:Boolean};var J=l({name:q,props:Q,emits:["change","finish"],setup(e,{emit:t,slots:l}){const{start:i,pause:o,reset:u,current:d}=n({time:+e.time,millisecond:e.millisecond,onChange:e=>t("change",e),onFinish:()=>t("finish")}),r=a((()=>function(e,t){const{days:l}=t;let{hours:n,minutes:a,seconds:s,milliseconds:c}=t;if(e.includes("DD")?e=e.replace("DD",L(l)):n+=24*l,e.includes("HH")?e=e.replace("HH",L(n)):a+=60*n,e.includes("mm")?e=e.replace("mm",L(a)):s+=60*a,e.includes("ss")?e=e.replace("ss",L(s)):c+=1e3*s,e.includes("S")){const t=L(c,3);e=e.includes("SSS")?e.replace("SSS",t):e.includes("SS")?e.replace("SS",t.slice(0,2)):e.replace("S",t.charAt(0))}return e}(e.format,d.value))),h=()=>{u(+e.time),e.autoStart&&i()};return s((()=>e.time),h,{immediate:!0}),_({start:i,pause:o,reset:h}),()=>c("div",{role:"timer",class:O()},[l.default?l.default(d.value):r.value])}});const K=I(J),X={key:0,class:"countdown"},Y={class:"flex flex-center"},Z={key:0,class:"countdown-timeblock"},$={key:1,class:"countdown-colon"},ee={key:2,class:"countdown-timeblock"},te={key:3,class:"countdown-colon"},le={key:4,class:"countdown-timeblock"},ne={key:5,class:"countdown-colon"},ae={class:"countdown-timeblock"},se=r("span",{class:"countdown-colon"},"秒",-1),ce=l({__name:"CountDown",setup(e){let t=i(!1),l=i(0);function n(){t.value=!0}function a(){l.value=function(){const e=(new Date).toLocaleDateString();return new Date(e).getTime()+864e5}()-Date.now()}return o((()=>{a()})),(e,a)=>{const s=K;return t.value?p("",!0):(u(),d("div",X,[r("p",Y,[c(s,{time:l.value,onFinish:n,class:"countdown-time flex-inline align-middle"},{default:h((e=>[e.days>0?(u(),d("span",Z,m(e.days),1)):p("",!0),e.days>0?(u(),d("span",$,"天")):p("",!0),e.days>0||e.hours>0?(u(),d("span",ee,m(e.hours>9?e.hours:"0"+e.hours),1)):p("",!0),e.days>0||e.hours>0?(u(),d("span",te,"时")):p("",!0),e.days>0||e.hours>0||e.minutes>0?(u(),d("span",le,m(e.minutes>9?e.minutes:"0"+e.minutes),1)):p("",!0),e.days>0||e.hours>0||e.minutes>0?(u(),d("span",ne,"分")):p("",!0),r("span",ae,m(e.seconds>9?e.seconds:"0"+e.seconds),1),se])),_:1},8,["time"])])]))}}}),ie=""+new URL("tab3-6-e33db91a.png",t.meta.url).href,oe=""+new URL("tab3-2-8e6ef7c0.jpg",t.meta.url).href,ue=""+new URL("tab3-3-5782b10e.jpg",t.meta.url).href,de=""+new URL("tab3-4-0562f2dd.png",t.meta.url).href,re=""+new URL("tab3-5-88484f3b.jpg",t.meta.url).href,he={class:"form-wrapper"},me=r("img",{src:ie,alt:"产品说明",class:"widthfull"},null,-1),pe=r("img",{src:oe,alt:"产品说明",class:"widthfull"},null,-1),ve=r("img",{src:ue,alt:"产品说明",class:"widthfull"},null,-1),fe=r("img",{src:de,alt:"产品说明",class:"widthfull"},null,-1),we={class:"text-center expenses-wrap"},ge={class:"agreement-wrap"},be=r("div",{class:"common-wrap"},[r("img",{src:re,alt:"温馨提醒",class:"widthfull"})],-1),xe=l({__name:"Tab3Page2",setup(e){w("tabIndex",2);let t=i(!1),l=i(!1),n=i(!0),a=i([{title:"《中国移动用户入网协议》",text:"https://h5.lipush.com/h5/index.html?id=7686186763730543422"},{title:"《实名制信息安全责任告知书》",text:"https://h5.lipush.com/h5/index.html?id=8683040763730590551"},{title:"《个人信息保护政策》",text:"https://h5.lipush.com/h5/index.html?id=5523261663728019648"},{title:"《单独同意书》",text:"https://h5.lipush.com/h5/index.html?id=7883210563728253535"}]);function s(){n.value=!0}return(e,i)=>{const o=D,p=R,w=G,g=ce,b=B;return u(),d(v,null,[r("div",he,[c(o,{onSubmit:s,animteBtn:""})]),c(p,{class:"mg-b10"}),c(w,{title:"填写并提交视为阅读并同意",agrList:a.value,checked:n.value,"onUpdate:checked":i[0]||(i[0]=e=>n.value=e)},null,8,["agrList","checked"]),c(g),me,pe,ve,r("p",{class:"fs12 cccc lh20",onClick:i[1]||(i[1]=e=>{l.value=!0})}," 温馨提醒： 个人擅自买卖实名电话卡属违法行为，请勿将号卡租借、贩卖给他人，如被他人利用发生非法违规行为，您将承担相应法律责任，请您确保规范使用您的号码。查看详情>>> "),fe,r("div",we,[r("span",{class:"expenses-text",onClick:i[2]||(i[2]=e=>{t.value=!0})},"资费详情说明")]),c(b,{class:"agreement-popup",show:t.value,"onUpdate:show":i[4]||(i[4]=e=>t.value=e),round:""},{default:h((()=>[r("div",ge,m(f("1、首月免月租。\n2、原月费59元，充值100元及以上金额，可参加减免30元月租优惠活动（从次月起减免，优惠期11个月），您需保持使用移动网络及59元套餐12个月，套餐到期后若不再使用，需您主动取消。此100分5个月到账，每月到账20元，可抵首半年月费至19元/月\n3、号卡激活可限时加享每月60GB国内通用流量，优惠期12个月，到期自动取消。\n4、优惠存在12个月合约期。合约期内，如办理销户、离网、转品牌、营销活动中断等业务，视为违约。同时客户需按解约条款的“已获赠金额或优惠减免金额/已获赠业务进行价值折算金额/根据实物赠送价值金额/已使用权益进行价值折算金额/租赁设备价值金额”约定缴纳违约金http://dx.10086.cn/edHGAQ。\n5、本活动每个号码限办一次。\n6、套餐生效后自动叠加10元咪咕权益包，于办理次月1日起生效并扣费，资费为10元/月，生效12个月，到期自动取消。产品包含咪咕商城plus会员权益及CCTV手机电视会员，权益包内容将在生效当月月底前到账，咪咕商城PLUS会员及CCTV手机电视会员权益有效期均为30天。客户可在咪咕商城微信小程序及CCTV手机电视APP内查看权益具体内容。")),1),r("div",{class:"agreement-confirm",onClick:i[3]||(i[3]=e=>{t.value=!1})},"我知道了")])),_:1},8,["show"]),c(b,{show:l.value,"onUpdate:show":i[5]||(i[5]=e=>l.value=e),class:"common-popup",style:{"max-width":"576px"},teleport:"body"},{default:h((()=>[be])),_:1},8,["show"])],64)}}}),ye=""+new URL("tab2-2-fc314e55.jpg",t.meta.url).href,ke=""+new URL("tab2-3-94a4bb32.jpg",t.meta.url).href,Pe={class:"form-wrapper"},Se=r("img",{src:ye,alt:"产品说明",class:"widthfull"},null,-1),Ce=r("img",{src:ke,alt:"产品说明",class:"widthfull"},null,-1),Le={class:"text-center expenses-wrap"},je={class:"agreement-wrap"},Ae=l({__name:"Tab2Page2",setup(e){w("tabIndex",1);let t=i(!1),l=i(!0),n=i([{title:"《个人信息保护政策》",text:"https://h5.lipush.com/h5/index.html?id=5523261663728019648"},{title:"《入网许可协议》",text:"https://h5.lipush.com/h5/index.html?id=4554931263728179465"},{title:"《单独同意书》",text:"https://h5.lipush.com/h5/index.html?id=7883210563728253535"}]);function a(){l.value=!0}return(e,s)=>{const i=D,o=R,p=G,w=ce,g=B;return u(),d(v,null,[r("div",Pe,[c(i,{onSubmit:a,animteBtn:""})]),c(o,{class:"mg-b10"}),c(p,{title:"填写并提交视为阅读并同意",agrList:n.value,checked:l.value,"onUpdate:checked":s[0]||(s[0]=e=>l.value=e)},null,8,["agrList","checked"]),c(w),Se,Ce,r("div",Le,[r("span",{class:"expenses-text",onClick:s[1]||(s[1]=e=>{t.value=!0})},"资费详情说明")]),c(g,{class:"agreement-popup",show:t.value,"onUpdate:show":s[3]||(s[3]=e=>t.value=e),round:""},{default:h((()=>[r("div",je,m(f("【资费详情】\n1、月基本费 29 元，套餐内年享360G爱奇艺、腾讯视频、优酷视频、西瓜视频、抖音短视频、抖音火 山版、快手、网易云音乐等应用定向流量，全国接听免费，赠 送来电显示、天翼云 盘-免费版、189 邮箱-免费版。\n2、订购当月获得 30 元话费，订购立即生效，激活即可使 用，不退返现金，不可抵扣国际业务、港澳台业务通信费和 SP/CP 等代收费用。获得话费激活当月有效，变更退订次月 生效，协议期 1 个月，到期自动退订。\n3、激活后立即生效。首月执行过渡期 资费，订购当月套餐月 基本费按日计扣（入网当日到月底）， 费用四舍五入到分， 套餐内容按照对应流量按天折算，向上取整。\n4、全国接听免费，赠送来电显示和 189 邮箱。\n5、套餐超出资费 （1）国内通用流量：前 167MB 按 0.03 元/MB 收费，达 到 167MB 时，额外赠送用户 857MB 流量（即 5 元/GB）；后 续 仍按上述规则收费（即每超出 1GB 按照 5 元/GB 收费）。 （2）国内通话：0.1 元/分钟。 （3）国内短/彩信：0.1 元/条。 （4）其他业务按照标准资费执行。\n6、国内通话和接听免费范围不包括港澳台地区\n7、手机上网流量仅限中国大陆境内使用,不含 WLAN(Wi-Fi)上 网\n8、套餐内包含的国内通用流量适用于流量不清零规则。\n9、可订购各类流量包、语音包及短/彩信包产品\n10、上网当月套餐外流量消费 600 元及 600 元的倍数则断 网，次月初自动开通，如果客户当月申请继续使用，则继续 提供服务，按照套外资费收费。套餐外流量消费费用包含按 套餐外资费收取的上网流量费，不含用户订购的定向、闲时 等各种流量包功能费。\n11、通过指定入口预存 50 元可获赠 50 元话费。预存话费 50 元立即到账，不限制抵扣范围，不可退现；赠送话费 50 元， 从订购次月起连续 5 个月内每月返还 10 元，赠送话费从返还 之日起 5 个月内有效，赠送话费可结转，可抵扣套餐基本费， 不能用于国际及港澳台通信费和由电信代收的信息服务费。\n免流规则\n1.头条系应用包含：今日头条、今日头条 lite 版、西 瓜视频、抖音火山版、抖音短视频、皮皮虾、懂车帝、半次 元。\n2.百度系应用包含：百度 APP、百度贴吧、百度地图、 百度网盘、百度手机助手、百度百科、秒懂百科、百度知道、百度文库、百度输入法、地图淘金、千千音乐、百度翻译、 百度新闻、百度浏览器、好看视频。 其中：手机百度、百度网盘、百度手机助手、百度新闻、 百度浏览器、好看视频享受免流服务前需先至对应 APP 进行 绑定激活。 绑定入口： （1）手机百度：【个人中心】-【免流量特权】-【活动页面】 -【激活免流】 （2）百度网盘：【更多】-【设置】-【免流量特权】-【活动 页面】-【激活免流】（只限百度网盘超级会员绑定激活免流， 非会员无法免流） （3）百度手机助手：【管理】-【免流量服务】-【活动页面】 -【激活免流】 （4）好看视频：【我的】-【免流特权】-【活动页面】-【激 活免流】 注：以上需绑定激活的应用（除百度网盘 APP），在同一手机 终端使用时，只需激活其中一款应用，其他应用无需绑定激活 即可享受免流服务。\n3.网易系应用包含： 网易系非游戏应用：网易云音乐、网易新闻、网易公开 课、网易云阅读、网易云课堂、易信、网易蜗牛阅读、网易 100 分。网易系游戏应用包含：梦幻西游、大话西游、阴阳师、 荒野行动、终结者 2、倩女幽魂、率土之滨、镇魔曲、三国 如龙传、坦克连、决战平安京、我的世界、天下、光明大陆、 格罗娅传奇。\n4.阿里系定向流量包含：优酷视频\n5.腾讯视频 所有 APP“专属流量”使用说明 （一）在电信网络下，使用对应免流 APP 产生的流量； （二）所使用的 APP 需升级到最新版本； （三）注册所有 APP 手机号码需与本机号码一致。\n不免流范围\n1、在无线上网卡、移动 WIFI、MIFI、平板电脑（如 ipad）等 设备使用时；\n2、将手机号码作为手机热点使用时；\n3、使用网络加速器、代理服务器、VPN 等工具时；\n4、在国际地区、港澳台使用时；\n5、通过 APP STORE 或安卓市场等下载/更新应用时；\n6、应用内开机广告及第三方广告时产生的流量；\n7、应用中访问外部链接或转发到外部应用产生的流量；\n8、APP 内直播业务均不免流；\n9、所有 APP 内的第三方提供的网页（手机百度搜索跳转的第 三方网页除外）视频、图片、广告、应用下载等服务，例如手 机新闻网、搜狗、携程、京东等非百度业务。\n购买须知\n1.本套餐一个证件只能办理一张，发货后请使用订购人身份证 原件按照随卡寄送的单页说明进行激活，若发货后超过 20 天 未激活，系统将回收处理。\n2.根据国家相关规定，未满 16 周岁的用户将不能在网络渠道 办理入网，因年龄问题未能激活的用户，请由您的法定代理人 前往营业厅代为办理，详情请咨询 10000.\n3.本号卡仅满足用户正常使用通话和流量，对于因受业务及物 流限制地区可能产生电信诈骗的归属地我们会进行鉴别并不 支持发货，敬请见谅。\n4.未满 16 周岁，一证五号已满（含正在使用的）国政通不通 过，军人，保密单位等职业的身份证属于特殊证件无法网上办 理通讯业务，故不发货。")),1),r("div",{class:"agreement-confirm",onClick:s[2]||(s[2]=e=>{t.value=!1})},"我知道了")])),_:1},8,["show"])],64)}}}),Ue=""+new URL("tab1-2-eddfc56a.jpg",t.meta.url).href,Te=""+new URL("tab1-3-f22694b2.jpg",t.meta.url).href,_e=""+new URL("tab1-4-4d49a5e6.png",t.meta.url).href,Ie=r("img",{src:Ue,alt:"产品说明",class:"widthfull mg-t10"},null,-1),Be=r("img",{src:Te,alt:"产品说明",class:"widthfull"},null,-1),De={alt:"产品说明",class:"widthfull img4"},Re={class:"text-center expenses-wrap"},Ge={key:0,class:"common-wrap"},ze={class:"info-text-number"},He={class:"info-number"},Ne=r("p",{class:"info-text"},"根据国家手机号卡实名制规定",-1),Fe=r("p",{class:"info-text"},"请如实填写信息，以便我们及时为您送达",-1),Me={class:"agreement-wrap"},Ve=l({__name:"Tab1Page2",setup(e){w("tabIndex",0);let t=i(!1),l=i(!1),n=i(!1),a=i([{title:"《个人信息保护政策》",text:"https://h5.lipush.com/h5/index.html?id=5523261663728019648"},{title:"《入网许可协议》",text:"https://h5.lipush.com/h5/index.html?id=5220700664176004699"},{title:"《单独同意书》",text:"https://h5.lipush.com/h5/index.html?id=7883210563728253535"}]),s=i(null),o=i("");function k(e,l){s.value=e,o.value=l.join(" "),t.value=!0}function P(){n.value=!0}return(e,i)=>{const w=z,S=R,C=ce,L=D,j=G,A=B,U=x("lazy");return u(),d(v,null,[c(w,{onSelected:k,showBelongCity:"",showSearchNumber:"",showNumberRule:""}),c(S),c(C),Ie,Be,g(r("img",De,null,512),[[U,f(_e)]]),r("div",Re,[r("span",{class:"expenses-text",onClick:i[0]||(i[0]=e=>(l.value=!0,void b("打开资费详情")))},"资费详情说明")]),c(A,{show:t.value,"onUpdate:show":i[2]||(i[2]=e=>t.value=e),class:"common-popup",style:{"max-width":"576px"},teleport:"body"},{default:h((()=>[s.value?(u(),d("div",Ge,[r("p",ze,[y("已选择"),r("span",He,"靓号 "+m(s.value.num),1),y(" "+m(o.value),1)]),Ne,Fe,c(L,{handleNo:s.value.num,onSubmit:P},null,8,["handleNo"]),c(j,{title:"填写并提交视为阅读并同意",agrList:a.value,checked:n.value,"onUpdate:checked":i[1]||(i[1]=e=>n.value=e)},null,8,["agrList","checked"])])):p("",!0)])),_:1},8,["show"]),c(A,{class:"agreement-popup",show:l.value,"onUpdate:show":i[4]||(i[4]=e=>l.value=e),round:""},{default:h((()=>[r("div",Me,m(f('【温馨提示】\n1.联通大王卡月费：29元/月\n2.套内资费∶联通大王卡套餐内包含30GB定向专属流量、免费接听、全国无漫游费。\n3.套外资费∶套餐外流量5 元/GB/月。\n4.亲情号特权：用户初始可添加号码为3个，会员等级每提高1级，最多可添加的号码增加1个（最多可添加8个亲情号）。\n5.当月套餐上网流量累计使用达200GB时，系统将关闭上网功能，次月自动打开。王上可通过"王卡助手公众号"的"特权-个人中心"菜单办理"解除流量封顶"业务。如当月解除封顶，超出部分按照套餐外流量收费。\n6.入网当月及次月内不能订购或点播SP业务。\n7.目前王卡资费优惠均不包含国际地区、港澳台地区。\n\n更多详情请咨询当地10016。\n客服电话：4008168562\n')),1),r("div",{class:"agreement-confirm",onClick:i[3]||(i[3]=e=>(l.value=!1,void b("关闭资费详情")))},"我知道了")])),_:1},8,["show"])],64)}}}),We=""+new URL("tab1-1-b8773ca0.jpg",t.meta.url).href,Ee=""+new URL("tab2-1-da283020.jpg",t.meta.url).href,qe=""+new URL("tab3-1-555e67d2.jpg",t.meta.url).href,Oe={class:"wg-tabs clearfix"},Qe=[r("img",{src:We,alt:"靓号抢购",class:"widthfull"},null,-1)],Je=[r("img",{src:Ee,alt:"靓号抢购",class:"widthfull"},null,-1)],Ke=[r("img",{src:qe,alt:"靓号抢购",class:"widthfull"},null,-1)],Xe={class:"flex tab-bar-wrap align-end"},Ye=["onClick"],Ze={class:"tab-bar-title"},$e=["alt"],et={class:"tab-content"},tt={key:0,class:"tab-content"},lt={key:1,class:"tab-content"},nt=l({__name:"TabsPage2",setup(e){const t=H();s((()=>t.cjAllData),(e=>{e&&n(l.value[t.activeTab])}));let l=i([{title:"联通",logo:N,loaded:!0,tabId:"7sj28x5luu"},{title:"电信",logo:F,loaded:!1,tabId:"ug1e2tb61y"},{title:"移动",logo:M,loaded:!1,tabId:"8nngtvbqu3"}]);function n(e){if(!Array.isArray(t.cjAllData?.tabInfo)||0===t.cjAllData?.tabInfo.length)return V({message:"未返回相关产品信息"}),void b("tabInfo返回为空");const l=t.cjAllData?.tabInfo.find((t=>e.tabId===t.tabId));l?t.setCjData(l):(V({message:"未找到相关产品信息"}),b("未匹配到产品信息"))}return(e,a)=>{const s=Ve,i=Ae,o=xe,h=x("lazy");return u(),d("div",Oe,[g(r("div",null,Qe,512),[[k,0===f(t).activeTab]]),g(r("div",null,Je,512),[[k,1===f(t).activeTab]]),g(r("div",null,Ke,512),[[k,2===f(t).activeTab]]),r("ul",Xe,[(u(!0),d(v,null,P(l.value,((e,a)=>(u(),d("li",{class:S(["flex flex-center tab-bar",{active:f(t).activeTab===a}]),onClick:e=>function(e){const a=l.value[e];a.loaded=!0,t.setActiveTab(e),n(a),b("Tabs标签-切换标签"+(e+1))}(a)},[r("span",Ze,m(e.title),1),g(r("img",{alt:e.title,class:"tab-bar-logo"},null,8,$e),[[h,e.logo]])],10,Ye)))),256))]),g(r("div",et,[c(s)],512),[[k,0===f(t).activeTab]]),l.value[1].loaded?g((u(),d("div",tt,[c(i)],512)),[[k,1===f(t).activeTab]]):p("",!0),l.value[2].loaded?g((u(),d("div",lt,[c(o)],512)),[[k,2===f(t).activeTab]]):p("",!0)])}}}),at={class:"wrapper"},st={alt:"领卡流程",class:"widthfull"};e("default",l({__name:"page2",setup(e){const t=H(),l=C("pid");return async function(){if(!l)return;t.setPid(l);const e={pid:l,url:window.location.href,ipLocation:"1"};let n=await W.pageIdLocation(e);t.setCjAllData(n)}(),(e,t)=>{const l=nt,n=x("lazy");return u(),d("div",at,[c(l),g(r("img",st,null,512),[[n,f(E)]])])}}}))}}}));
webpackJsonp([19],{"5W1q":function(e,t){},GzHv:function(e,t){},IJAi:function(e,t){},JgNx:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Xxa5"),a=n.n(o),r=n("exGp"),l=n.n(r),i=n("7+uW");i.default.directive("roleBtn",{bind:function(e,t){var n=t.value,o=JSON.parse(sessionStorage.getItem("info")).role;if(n&&-1!==n.indexOf(o))return!1;e.parentNode.removeChild(e)}});var s=i.default,c=n("zL8q"),u=n.n(c),d=(n("tvR6"),n("5W1q"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]});var m=n("VU/8")({name:"app"},d,!1,function(e){n("bvLR")},null,null).exports,h=n("Dd8w"),f=n.n(h),p=n("wUZ8"),v=n.n(p),b=f()({routeNmae:{home:"home",article:"article",publishArticle:"publishArticle",icon:"icon",builtInIcon:"builtInIcon",shuttleBox:"shuttleBox",demoShuttle:"demoShuttle",permissions:"permissions",pageControl:"pageControl",btnControl:"btnControl",table:"table",multiDataTable:"multiDataTable",filterTable:"filterTable",dragSort:"dragSort",upload:"upload",fileUpload:"fileUpload",editor:"editor",markdown:"markdown",multiDirectory:"multiDirectory","menu2-1":"menu2-1","menu2-2":"menu2-2","menu2-3":"menu2-3","menu3-1":"menu3-1","menu3-2":"menu3-2","menu3-3":"menu3-3","menu4-1":"menu4-1","menu4-2":"menu4-2","menu5-1":"menu5-1",systemSettings:"systemSettings",navMenu:"navMenu"},rightMenu:{close:"close",closeOther:"closeOther",closeAll:"closeAll"},role:{superAdmin:"superAdmin",admin:"admin",ordinary:"ordinary"},userDropdownMenu:{basicInfor:"basicInfor",changePassword:"changePassword",logout:"logout"}},v.a),g=n("/ocq"),C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-view")],1)},staticRenderFns:[]};var _=n("VU/8")({name:"commerViews"},C,!1,function(e){n("QliL")},"data-v-c1e2464e",null).exports,x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h3",{staticClass:"loginTitle"},[e._v("vue-xuadmin权限管理后台模板")]),e._v(" "),n("div",{staticClass:"loginBox"},[n("el-form",{staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"status-icon":"","label-width":"100px"}},[n("el-form-item",[n("span",{staticClass:"ico"},[n("i",{staticClass:"fa fa-user fa-lg"})]),n("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",[n("span",{staticClass:"ico"},[n("i",{staticClass:"fa fa-unlock-alt fa-lg"})]),n("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"subBtn",attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var y=n("VU/8")({data:function(){return{loginForm:{username:"vue-xuadmin",password:"123456"}}},methods:{submitForm:function(){var e=this;if(""===this.loginForm.username||""===this.loginForm.password)return this.$message({showClose:!0,message:"账号或密码不能为空",type:"error"}),!1;e.$store.dispatch("setToken",e.loginForm.username).then(function(){e.$router.push({path:"/"})}).catch(function(t){e.$message({showClose:!0,message:t,type:"error"})})},message:function(){var e=this.$createElement;this.$notify({title:"账号密码",message:e("i",{style:"color: teal"},"账号密码可以随意填写，为了测试效果填写的账号将会被存储为临时假 token"),duration:6e3})}},mounted:function(){this.message()}},x,!1,function(e){n("t/If")},null,null).exports,w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.menuData,function(t,o){return[t.children.length>0?n("el-submenu",{attrs:{index:t.path}},[n("template",{slot:"title"},[n("i",{class:t.iconCls?t.iconCls:[e.fa,e.fa-e.file]}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("routeNmae."+t.name)))])]),e._v(" "),n("menu-tree",{attrs:{menuData:t.children}})],2):n("el-menu-item",{attrs:{index:t.path}},[n("i",{class:t.iconCls?t.iconCls:[e.fa,e.fa-e.file]}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("routeNmae."+t.name)))])])]})],2)},staticRenderFns:[]};var S={name:"asideNav",components:{menuTree:n("VU/8")({name:"menuTree",props:["menuData"]},w,!1,function(e){n("fdk3")},"data-v-1230cd54",null).exports},watch:{"$route.path":function(e){this.selectmenu(e)}},methods:{selectmenu:function(e){var t=this.$store.getters.routers,n="";this.$store.dispatch("addTab",{title:function e(t,o){for(var a=0;a<o.length;a++)if(o[a].children.length>0||o[a].path===t){if(o[a].path===t&&o[a].children.length<1){n=o[a].name;break}e(t,o[a].children)}return n}(e,t),path:e})}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-aside",{attrs:{id:"asideNav"}},[n("div",{staticClass:"logo-name"},[e.$store.getters.logoShow?n("p",[e._v("XU")]):n("p",[e._v("vue-xuAdmin后台模板")])]),e._v(" "),n("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":e.$route.path,collapse:e.$store.getters.isCollapse,"background-color":"#03152A","text-color":"rgba(255,255,255,.7)","active-text-color":"#ffffff",router:e.$store.getters.uniquerouter,"unique-opened":e.$store.getters.uniquerouter,"collapse-transition":!0},on:{select:e.selectmenu}},[e._l(e.$store.getters.routers,function(t,o){return t.hidden?e._e():[!t.alone&&t.children.length>0?n("el-submenu",{attrs:{index:o+""}},[n("template",{slot:"title"},[n("i",{class:t.iconCls?t.iconCls:[e.fa,e.fa-e.server]}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("routeNmae."+t.name)))])]),e._v(" "),n("menu-tree",{attrs:{menuData:t.children}})],2):n("el-menu-item",{attrs:{index:t.path}},[n("i",{class:t.iconCls?t.iconCls:[e.fa,e.fa-e.file]}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("routeNmae."+t.name)))])])]})],2)],1)],1)},staticRenderFns:[]};var $=n("VU/8")(S,k,!1,function(e){n("cFS2")},null,null).exports,T=n("lbHh"),F=n.n(T),A={name:"langSelect",data:function(){return{language:""}},mounted:function(){var e=localStorage.lang||"cn";this.getLanguage(e)},methods:{handleSetLanguage:function(e){this.$i18n.locale=e,localStorage.setItem("lang",e),this.getLanguage(e)},getLanguage:function(e){"cn"===e&&(this.language="中文"),"en"===e&&(this.language="English")}}},R={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dropdown",{staticClass:"international",on:{command:e.handleSetLanguage}},[n("div",[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"fa fa-language fa-lg"}),e._v(" "+e._s(e.language)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})])]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"cn"}},[e._v("中文")]),e._v(" "),n("el-dropdown-item",{attrs:{command:"en"}},[e._v("English")])],1)],1)},staticRenderFns:[]};var I=n("VU/8")(A,R,!1,function(e){n("fLBy"),n("tIVx")},"data-v-12fc7132",null).exports,N={name:"tabNav",data:function(){return{rightMenuShow:!1,left:0,top:0}},methods:{openMenu:function(e,t,n){if(0===n)return!1;this.rightMenuShow=!0,this.left=t.clientX+10,this.top=t.clientY,this.$store.dispatch("openMenu",e)},removeTab:function(e){this.$store.dispatch("removeTab",{tabItem:e,fullPath:this.$route.fullPath,router:this.$router})},removeOtherTab:function(e){this.$store.dispatch("removeOtherTab",{tabItem:e,router:this.$router})},removeAllTab:function(){this.$store.dispatch("removeOtherTab",{all:!0,router:this.$router})}},watch:{rightMenuShow:function(e){var t=this;e?document.body.addEventListener("click",function(){t.rightMenuShow=!1}):document.body.removeEventListener("click",function(){t.rightMenuShow=!1})}}},B={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tabnavBox"},[n("transition-group",{attrs:{name:"list",tag:"ul"}},e._l(e.$store.getters.tabnavBox,function(t,o){return n("li",{key:t.title,staticClass:"tabnav",class:{active:e.$route.path===t.path},on:{contextmenu:function(n){n.preventDefault(),e.openMenu(t,n,o)}}},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(e.$t("routeNmae."+t.title)))]),e._v(" "),0!==o?n("i",{staticClass:"el-icon-error",on:{click:function(n){e.removeTab(t)}}}):e._e()],1)}))],1),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:this.rightMenuShow,expression:"this.rightMenuShow"}],staticClass:"menuBox",style:{left:this.left+"px",top:this.top+"px"}},[n("li",{on:{click:function(t){e.removeTab(e.$store.getters.rightNav)}}},[n("i",{staticClass:"fa fa-remove"}),e._v(e._s(e.$t("rightMenu.close")))]),e._v(" "),n("li",{on:{click:function(t){e.removeOtherTab(e.$store.getters.rightNav)}}},[e._v(e._s(e.$t("rightMenu.closeOther")))]),e._v(" "),n("li",{on:{click:e.removeAllTab}},[e._v(e._s(e.$t("rightMenu.closeAll")))])])])},staticRenderFns:[]};var W={name:"Header",components:{tabNav:n("VU/8")(N,B,!1,function(e){n("eNFu"),n("l5ma")},null,null).exports,langSelect:I},data:function(){return{isfullScreen:!0,avatar:"./static/images/icon.jpg"}},methods:{collapse:function(){this.$store.dispatch("collapse")},fullScreen:function(){if(this.isfullScreen){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():elem.msRequestFullscreen&&elem.msRequestFullscreen(),this.isfullScreen=!1}else document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),this.isfullScreen=!0},handleCommand:function(e){"logout"===e&&(F.a.remove("token"),location.reload())}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-header",{attrs:{id:"header"}},[n("span",{staticClass:"hideAside",on:{click:e.collapse}},[n("i",{staticClass:"fa fa-indent fa-lg"})]),e._v(" "),n("ul",{staticClass:"personal"},[n("li",{staticClass:"fullScreen",on:{click:e.fullScreen}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"全屏",placement:"bottom"}},[n("i",{staticClass:"fa fa-arrows-alt fa-lg"})])],1),e._v(" "),n("li",[n("langSelect")],1),e._v(" "),n("li",[e._v(e._s(e.$t("role."+this.$store.getters.info.role)))]),e._v(" "),n("li",[n("el-dropdown",{on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v("\n                  夏洛克丶旭"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"a"}},[e._v(e._s(e.$t("userDropdownMenu.basicInfor")))]),e._v(" "),n("el-dropdown-item",{attrs:{command:"b"}},[e._v(e._s(e.$t("userDropdownMenu.changePassword")))]),e._v(" "),n("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v(e._s(e.$t("userDropdownMenu.logout")))])],1)],1)],1),e._v(" "),n("li",{staticClass:"icon"},[n("img",{attrs:{src:e.avatar}})])])]),e._v(" "),n("tabNav")],1)},staticRenderFns:[]};var L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[this._v("Copyright © 2018 xuAdmin.")])])}]};var M={name:"dc-home",components:{layoutHeader:n("VU/8")(W,E,!1,function(e){n("h1Oz")},null,null).exports,Bottom:n("VU/8")({name:"bottom"},L,!1,function(e){n("IJAi")},"data-v-34233bc6",null).exports,langSelect:I,layoutAside:$},created:function(){this.$router.push("/index")}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"loyout"}},[t("el-container",[t("layoutAside"),this._v(" "),t("el-container",[t("layoutHeader"),this._v(" "),t("el-main",{attrs:{id:"elmain"}},[t("transition",{attrs:{name:"main",mode:"out-in"}},[t("router-view")],1)],1),this._v(" "),t("el-footer",[t("Bottom")],1)],1)],1)],1)},staticRenderFns:[]};var j,O=n("VU/8")(M,D,!1,function(e){n("OIvA"),n("d92X")},null,null).exports,q=n("XLwt"),z=n.n(q),U=n("pFYg"),V=n.n(U);j=function(e,t){var n;if(!t)return n="ECharts is not Loaded",void("undefined"!=typeof console&&console&&console.error&&console.error(n));t.registerTheme("westeros",{color:["#409eff","#59c4e6","#edafda","#93b7e3","#a5e7f0","#cbb0e3"],backgroundColor:"rgba(0,0,0,0)",textStyle:{},title:{textStyle:{color:"#409eff"},subtextStyle:{color:"#93b7e3"}},line:{itemStyle:{normal:{borderWidth:"2"}},lineStyle:{normal:{width:"2"}},symbolSize:"6",symbol:"emptyCircle",smooth:!0},radar:{itemStyle:{normal:{borderWidth:"2"}},lineStyle:{normal:{width:"2"}},symbolSize:"6",symbol:"emptyCircle",smooth:!0},bar:{itemStyle:{normal:{barBorderWidth:0,barBorderColor:"#ccc"},emphasis:{barBorderWidth:0,barBorderColor:"#ccc"}}},pie:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},scatter:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},boxplot:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},parallel:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},sankey:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},funnel:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},gauge:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},candlestick:{itemStyle:{normal:{color:"#edafda",color0:"transparent",borderColor:"#d680bc",borderColor0:"#8fd3e8",borderWidth:"2"}}},graph:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"}},lineStyle:{normal:{width:1,color:"#aaa"}},symbolSize:"6",symbol:"emptyCircle",smooth:!0,color:["#409eff","#59c4e6","#edafda","#93b7e3","#a5e7f0","#cbb0e3"],label:{normal:{textStyle:{color:"#eee"}}}},map:{itemStyle:{normal:{areaColor:"#f3f3f3",borderColor:"#516b91",borderWidth:.5},emphasis:{areaColor:"rgba(165,231,240,1)",borderColor:"#516b91",borderWidth:1}},label:{normal:{textStyle:{color:"#000"}},emphasis:{textStyle:{color:"rgb(81,107,145)"}}}},geo:{itemStyle:{normal:{areaColor:"#f3f3f3",borderColor:"#516b91",borderWidth:.5},emphasis:{areaColor:"rgba(165,231,240,1)",borderColor:"#516b91",borderWidth:1}},label:{normal:{textStyle:{color:"#000"}},emphasis:{textStyle:{color:"rgb(81,107,145)"}}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#cccccc"}},axisTick:{show:!1,lineStyle:{color:"#333"}},axisLabel:{show:!0,textStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:["#eeeeee"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},toolbox:{iconStyle:{normal:{borderColor:"#999"},emphasis:{borderColor:"#666"}}},legend:{textStyle:{color:"#999999"}},tooltip:{axisPointer:{lineStyle:{color:"#ccc",width:1},crossStyle:{color:"#ccc",width:1}}},timeline:{lineStyle:{color:"#8fd3e8",width:1},itemStyle:{normal:{color:"#8fd3e8",borderWidth:1},emphasis:{color:"#8fd3e8"}},controlStyle:{normal:{color:"#8fd3e8",borderColor:"#8fd3e8",borderWidth:.5},emphasis:{color:"#8fd3e8",borderColor:"#8fd3e8",borderWidth:.5}},checkpointStyle:{color:"#8fd3e8",borderColor:"rgba(138,124,168,0.37)"},label:{normal:{textStyle:{color:"#8fd3e8"}},emphasis:{textStyle:{color:"#8fd3e8"}}}},visualMap:{color:["#516b91","#59c4e6","#a5e7f0"]},dataZoom:{backgroundColor:"rgba(0,0,0,0)",dataBackgroundColor:"rgba(255,255,255,0.3)",fillerColor:"rgba(167,183,204,0.4)",handleColor:"#a7b7cc",handleSize:"100%",textStyle:{color:"#333"}},markPoint:{label:{normal:{textStyle:{color:"#eee"}},emphasis:{textStyle:{color:"#eee"}}}}})},"function"==typeof define&&n("nErl")?define(["exports","echarts"],j):"object"===("undefined"==typeof exports?"undefined":V()(exports))&&"string"!=typeof exports.nodeName?j(exports,n("XLwt")):j(0,z.a);var P={name:"lineEcharts",props:{id:{type:String,default:"myChart"},width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},methods:{initChart:function(){this.chart=z.a.init(document.getElementById(this.id),"westeros"),this.chart.setOption({title:{text:"折线图堆叠"},tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[8200,6320,5010,4340,3400,2300,1100]},{name:"联盟广告",type:"line",stack:"总量",data:[2200,3820,1910,2340,4900,3300,1100]},{name:"视频广告",type:"line",stack:"总量",data:[2500,4302,5010,2540,6900,5300,6410]},{name:"直接访问",type:"line",stack:"总量",data:[5320,7332,9301,6334,5390,4330,1320]},{name:"搜索引擎",type:"line",stack:"总量",data:[8820,1932,5901,7304,2900,3300,8200]}]})}}},H={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{style:{width:this.width,height:this.height},attrs:{id:this.id}})])},staticRenderFns:[]};var G=n("VU/8")(P,H,!1,function(e){n("JgNx")},"data-v-59d568ad",null).exports,X={name:"maintable",data:function(){return{tableData:[{odd:"201801012345601",name:"王小虎",status:"已付款",amount:"580元",date:"2018-01-01",tag:"虚拟"},{odd:"201801012345602",name:"王小虎",status:"已付款",amount:"130元",date:"2018-01-02",tag:"实物"},{odd:"201801012345603",name:"王小虎",status:"已付款",amount:"680元",date:"2018-01-03",tag:"虚拟"},{odd:"201801012345604",name:"王小虎",status:"已付款",amount:"190元",date:"2018-01-03",tag:"虚拟"},{odd:"201801012345605",name:"王小虎",status:"已付款",amount:"170元",date:"2018-01-04",tag:"实物"},{odd:"201801012345606",name:"王小虎",status:"已付款",amount:"670元",date:"2018-01-04",tag:"虚拟"},{odd:"201801012345607",name:"王小虎",status:"已付款",amount:"1780元",date:"2018-01-04",tag:"实物"},{odd:"201801012345608",name:"王小虎",status:"已付款",amount:"3180元",date:"2018-01-04",tag:"虚拟"},{odd:"201801012345609",name:"王小虎",status:"已付款",amount:"780元",date:"2018-01-05",tag:"实物"},{odd:"201801012345610",name:"王小虎",status:"已付款",amount:"2130元",date:"2018-01-05",tag:"虚拟"}]}},methods:{handleEdit:function(e,t){console.log(e,t),this.$message({showClose:!0,message:e,row:t,type:"success"})},handleDelete:function(e,t){console.log(e,t),this.$message({showClose:!0,message:e,row:t,type:"success"})},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},filterHandler:function(e,t,n){return t[n.property]===e}}},J={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:e.tableData}},[n("el-table-column",{attrs:{type:"index"}}),e._v(" "),n("el-table-column",{attrs:{sortable:"",prop:"odd",label:"订单号"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"收货人"}}),e._v(" "),n("el-table-column",{attrs:{prop:"status",label:"订单状态",width:"130"}}),e._v(" "),n("el-table-column",{attrs:{prop:"amount",label:"金额"}}),e._v(" "),n("el-table-column",{attrs:{prop:"date",label:"下单时间",sortable:"",filters:[{text:"2018-01-01",value:"2018-01-01"},{text:"2018-01-02",value:"2018-01-02"},{text:"2018-01-03",value:"2018-01-03"},{text:"2018-01-04",value:"2018-01-04"},{text:"2018-01-05",value:"2018-01-05"}],"filter-method":e.filterHandler}}),e._v(" "),n("el-table-column",{attrs:{prop:"tag",label:"订单分类",width:"150",filters:[{text:"虚拟",value:"虚拟"},{text:"实物",value:"实物"}],"filter-method":e.filterTag,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:"虚拟"===t.row.tag?"primary":"success","disable-transitions":""}},[e._v(e._s(t.row.tag))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("详情")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"title"},[t("i",{staticClass:"el-icon-tickets"}),this._v("最新10条等待处理订单")])}]};var Y={name:"mainIndex",components:{Maintable:n("VU/8")(X,J,!1,function(e){n("yv63")},"data-v-4668f9b2",null).exports,LineEcharts:G},mounted:function(){this.selfAdaption()},methods:{selfAdaption:function(){var e=this;setTimeout(function(){window.onresize=function(){e.$refs.echarts&&e.$refs.echarts.chart.resize()}},10)}}},Q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"card kjfs"},[n("p",{staticClass:"title"},[n("i",{staticClass:"fa fa-th-large fa-lg"}),e._v("快捷方式")]),e._v(" "),n("ul",[n("li",[n("router-link",{staticClass:"kjfs kjfs-bluee",attrs:{to:"/addArticle"}},[n("span",[n("i",{staticClass:"el-icon-tickets fa-2x"})]),n("span",[e._v("发表文章")])])],1),e._v(" "),n("li",[n("router-link",{staticClass:"kjfs kjfs-pinkk",attrs:{to:"/dragTabe"}},[n("span",[n("i",{staticClass:"fa fa-hand-stop-o fa-2x"})]),n("span",[e._v("拖拽排序")])])],1),e._v(" "),n("li",[n("router-link",{staticClass:"kjfs kjfs-yelloww",attrs:{to:"/permissions"}},[n("span",[n("i",{staticClass:"fa fa-universal-access fa-2x"})]),n("span",[e._v("权限测试")])])],1)]),e._v(" "),n("ul",[n("li",[n("router-link",{staticClass:"kjfs kjfs-grennn",attrs:{to:"/upload"}},[n("span",[n("i",{staticClass:"fa fa-cloud-upload fa-2x"})]),n("span",[e._v("文件上传")])])],1),e._v(" "),n("li",[n("router-link",{staticClass:"kjfs kjfs-purplee",attrs:{to:"/navClassifies"}},[n("span",[n("i",{staticClass:"fa el-icon-menu fa-2x"})]),n("span",[e._v("前台菜单")])])],1),e._v(" "),n("li",[n("router-link",{staticClass:"kjfs kjfs-lightBluee",attrs:{to:"/markdown"}},[n("span",[n("i",{staticClass:"fa fa-file-code-o fa-2x"})]),n("span",[e._v("编辑器")])])],1)])])]),e._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"card dbsx"},[n("p",{staticClass:"title"},[n("i",{staticClass:"fa fa-file-text-o"}),e._v("待办事项")]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"#"}},[n("span",[e._v("待审评论")]),n("span",{staticClass:"num"},[e._v("66")])])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"#"}},[n("span",[e._v("待审帖子")]),n("span",{staticClass:"num"},[e._v("66")])])],1)]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"#"}},[n("span",[e._v("待审商品")]),n("span",{staticClass:"num"},[e._v("66")])])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"#"}},[n("span",[e._v("代发货")]),n("span",{staticClass:"num"},[e._v("66")])])],1)])])]),e._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"card bbxx"},[n("p",{staticClass:"title"},[n("i",{staticClass:"fa fa-server"}),e._v("版本信息")]),e._v(" "),n("div",{staticClass:"table"},[n("p",[n("span",{staticClass:"tit"},[e._v("当前版本")]),e._v("v1.0.0")]),e._v(" "),n("p",[n("span",{staticClass:"tit"},[e._v("基于框架")]),e._v("vue2.0全家桶 + element-ui")]),e._v(" "),n("p",[n("span",{staticClass:"tit"},[e._v("主要特色")]),e._v("单页面 / 响应式 / 无限级菜单 / 权限管理 / 极简")]),e._v(" "),n("p",[n("span",{staticClass:"tit"},[e._v("获取渠道")]),e._v(" "),n("span",{staticClass:"gitbox"},[n("a",{attrs:{target:"_blank",href:"https://github.com/Nirongxu/vue-xuAdmin.git"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-download",size:"small"}},[e._v("github")])],1),e._v(" "),n("a",{attrs:{target:"_blank",href:"https://gitee.com/nirongxu/xu-webplatform.git"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-download",size:"small"}},[e._v("码云")])],1)])])])])])],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("line-echarts",{ref:"echarts",attrs:{id:"lineEcharts",height:"300px"}})],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("maintable",{attrs:{id:"maintable"}})],1)],1)],1)},staticRenderFns:[]};var Z=n("VU/8")(Y,Q,!1,function(e){n("GzHv")},null,null).exports;i.default.use(g.a);var K=b.routeNmae,ee=[{path:"/",redirect:"/index",hidden:!0,children:[]},{path:"/login",component:y,name:"",hidden:!0,children:[]},{path:"/index",iconCls:"fa fa-dashboard",name:K.home,component:O,alone:!0,children:[{path:"/index",iconCls:"fa fa-dashboard",name:"主页",component:Z,children:[]}]},{path:"/404",component:function(){return n.e(0).then(n.bind(null,"0xTz"))},name:"404",hidden:!0,children:[]}],te=[{path:"/",iconCls:"el-icon-tickets",name:K.article,component:O,children:[{path:"/addArticle",iconCls:"el-icon-edit-outline",name:K.publishArticle,component:function(){return n.e(2).then(n.bind(null,"M1Vu"))},children:[]}]},{path:"/",iconCls:"fa fa-paw",name:K.icon,component:O,children:[{path:"/icon",iconCls:"fa fa-life-ring",name:K.builtInIcon,component:function(){return n.e(10).then(n.bind(null,"MGaV"))},children:[]}]},{path:"/",iconCls:"fa fa-exchange",name:K.shuttleBox,component:O,children:[{path:"/transfer",iconCls:"fa fa-sign-in",name:K.demoShuttle,component:function(){return n.e(14).then(n.bind(null,"pDWz"))},children:[]}]},{path:"/",iconCls:"fa fa-universal-access",name:K.permissions,component:O,children:[{path:"/pagePermissions",iconCls:"fa fa-expeditedssl",name:K.pageControl,component:function(){return n.e(6).then(n.bind(null,"voNb"))},children:[]},{path:"/btnPermissions",iconCls:"fa fa-toggle-on",name:K.btnControl,component:function(){return n.e(17).then(n.bind(null,"x1md"))},children:[]}]},{path:"/",iconCls:"fa fa-newspaper-o",name:K.table,component:O,children:[{path:"/dataTable",iconCls:"fa fa-sliders",name:K.multiDataTable,component:function(){return n.e(5).then(n.bind(null,"iav/"))},children:[]},{path:"/filterTable",iconCls:"fa fa-sort-amount-asc",name:K.filterTable,component:function(){return n.e(11).then(n.bind(null,"eP8Y"))},children:[]},{path:"/dragTabe",iconCls:"fa fa-hand-stop-o",name:K.dragSort,component:function(){return n.e(3).then(n.bind(null,"VqJ3"))},children:[]}]},{path:"/",iconCls:"fa fa-server",name:K.multiDirectory,component:O,children:[{path:"/erji1",iconCls:"fa fa-server",name:K["menu2-1"],component:function(){return n.e(12).then(n.bind(null,"w3dq"))},children:[]},{path:"/erji2",iconCls:"fa fa-server",name:K["menu2-2"],component:function(){return n.e(9).then(n.bind(null,"55b9"))},children:[]},{path:"/erji3",iconCls:"fa fa-server",name:K["menu2-3"],component:_,children:[{path:"/sanji1",iconCls:"fa fa-server",name:K["menu3-1"],component:function(){return n.e(16).then(n.bind(null,"YncQ"))},children:[]},{path:"/sanji2",iconCls:"fa fa-server",name:K["menu3-2"],component:function(){return n.e(4).then(n.bind(null,"UNG5"))},children:[]},{path:"/sanji3",iconCls:"fa fa-server",name:K["menu3-3"],component:_,children:[{path:"/siji",iconCls:"fa fa-server",name:K["menu4-1"],component:function(){return n.e(8).then(n.bind(null,"o9mD"))},children:[]},{path:"/siji1",iconCls:"fa fa-server",name:K["menu4-2"],component:_,children:[{path:"/wuji",iconCls:"fa fa-server",name:K["menu5-1"],component:function(){return n.e(15).then(n.bind(null,"WPqR"))},children:[]}]}]}]}]},{path:"/",iconCls:"fa fa-cloud-upload",name:K.upload,component:O,meta:{role:["superAdmin"]},children:[{path:"/upload",iconCls:"el-icon-upload2",name:K.fileUpload,component:function(){return n.e(7).then(n.bind(null,"uHNG"))},children:[]}]},{path:"/",iconCls:"el-icon-edit",name:K.editor,component:O,meta:{role:["superAdmin","admin"]},children:[{path:"/markdown",iconCls:"fa fa-file-code-o",name:K.markdown,component:function(){return n.e(1).then(n.bind(null,"9DCk"))},children:[]}]},{path:"/",iconCls:"el-icon-setting",name:K.systemSettings,component:O,meta:{role:["superAdmin"]},children:[{path:"/navClassifies",iconCls:"el-icon-menu",name:K.navMenu,component:function(){return n.e(13).then(n.bind(null,"5SaS"))},children:[]}]},{path:"*",redirect:"/404",hidden:!0,children:[]}],ne=new g.a({routes:ee}),oe=n("//Fk"),ae=n.n(oe),re=n("NYxO"),le=n("Gu7T"),ie=n.n(le),se={state:{routers:[],addRouters:[]},mutations:{setRouters:function(e,t){e.addRouters=t,e.routers=ee.concat(t)}},actions:{newRoutes:function(e,t){var n=e.commit;var o=[].concat(ie()(te));!function e(t,n){for(var o=0;o<t.length;o++)t[o].meta&&t[o].meta.role.length&&-1===t[o].meta.role.indexOf(n)&&(t.splice(o,1),o=0!==o?o-1:o),t[o].children&&t[o].children.length&&e(t[o].children,n)}(o,t),n("setRouters",o)}}},ce=n("mvHQ"),ue=n.n(ce),de={state:{info:""},mutations:{getInfo:function(e,t){e.info={role:"superAdmin",permissions:"超级管理员"},sessionStorage.setItem("info",ue()(he.getters.info))},setRole:function(e,t){e.info={role:t.role,permissions:t.permissions},sessionStorage.setItem("info",ue()(he.getters.info)),he.dispatch("newRoutes",t.role),ne.addRoutes(he.getters.addRouters)}},actions:{getInfo:function(e,t){(0,e.commit)("getInfo",t)},setRole:function(e,t){(0,e.commit)("setRole",t)}}},me={state:{isCollapse:!1,logoShow:!1,uniquerouter:!0,rightNav:{},tabnavBox:[{title:"home",path:"/index"}]},mutations:{addTab:function(e,t){e.isActive=t.path;for(var n=0;n<e.tabnavBox.length;n++)if(e.tabnavBox[n].path===t.path)return!1;e.tabnavBox.push({title:t.title,path:t.path})},openMenu:function(e,t){e.rightNav=t},removeTab:function(e,t){var n=e.tabnavBox.findIndex(function(e,n){return e.path===t.tabItem.path});if(e.tabnavBox.splice(n,1),t.tabItem.path===t.fullPath){var o=e.tabnavBox[n]||e.tabnavBox[n-1];t.router.push(o.path)}},removeOtherTab:function(e,t){if(e.tabnavBox=[{title:"home",path:"/index"}],t.all)return t.router.push("/index"),!1;e.tabnavBox.push(t.tabItem),t.router.push(t.tabItem.path)},collapse:function(e,t){e.isCollapse=!e.isCollapse,e.logoShow?setTimeout(function(){e.logoShow=!1},300):e.logoShow=!0}},actions:{addTab:function(e,t){(0,e.commit)("addTab",t)},openMenu:function(e,t){(0,e.commit)("openMenu",t)},removeTab:function(e,t){(0,e.commit)("removeTab",t)},removeOtherTab:function(e,t){(0,e.commit)("removeOtherTab",t)},collapse:function(e,t){(0,e.commit)("collapse",t)}}};i.default.use(re.a);var he=new re.a.Store({state:{token:F.a.get("token")},mutations:{setToken:function(e,t){e.token=t,F.a.set("token",t,{expires:1/24})}},actions:{setToken:function(e,t){var n=e.commit;return new ae.a(function(e,o){n("setToken",t),e()})}},getters:{addRouters:function(e){return e.routerData.addRouters},token:function(e){return e.token},info:function(e){return e.role.info},routers:function(e){return e.routerData.routers},logoShow:function(e){return e.layout.logoShow},isCollapse:function(e){return e.layout.isCollapse},uniquerouter:function(e){return e.layout.uniquerouter},tabnavBox:function(e){return e.layout.tabnavBox},visible:function(e){return e.layout.visible},left:function(e){return e.layout.left},top:function(e){return e.layout.top},rightNav:function(e){return e.layout.rightNav}},modules:{routerData:se,role:de,layout:me}}),fe=n("urW8"),pe=n.n(fe),ve=n("TXmL"),be=n("Vi3T"),ge=n.n(be),Ce={en:b,cn:f()({routeNmae:{home:"主页",article:"文章管理",publishArticle:"发表文章",icon:"图标",builtInIcon:"内置图标",shuttleBox:"穿梭框",demoShuttle:"穿梭框demo",permissions:"权限管理",pageControl:"页面权限",btnControl:"按钮权限",table:"表格",multiDataTable:"多选数据表格",filterTable:"筛选表格",dragSort:"拖拽排序",upload:"上传",fileUpload:"文件上传",editor:"编辑器",markdown:"markdown",multiDirectory:"多级目录","menu2-1":"二级-1","menu2-2":"二级-2","menu2-3":"二级-3","menu3-1":"三级-1","menu3-2":"三级-2","menu3-3":"三级-3","menu4-1":"四级-1","menu4-2":"四级-2","menu5-1":"五级-1",systemSettings:"系统设置",navMenu:"导航菜单"},rightMenu:{close:"关闭",closeOther:"关闭其他",closeAll:"全部关闭"},role:{superAdmin:"超级管理员",admin:"管理员",ordinary:"普通用户"},userDropdownMenu:{basicInfor:"基本资料",changePassword:"修改密码",logout:"退出"}},ge.a)};i.default.use(ve.a);var _e=new ve.a({locale:localStorage.lang||"cn",messages:Ce});pe.a.i18n(function(e,t){return _e.t(e,t)});var xe=_e;s.config.productionTip=!1,s.use(u.a),ne.beforeEach(function(e,t,n){if(console.log(he.getters.token),he.getters.token)if(he.dispatch("setToken",he.getters.token),"/login"===e.path)n({path:"/"});else if(he.getters.info.role){if(e.matched.some(function(e){if(e.meta.role)return-1===e.meta.role.indexOf(he.getters.info.role)}))return n({path:"/404"}),!1;n()}else!function(){var e=l()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.dispatch("getInfo",he.getters.token);case 2:return e.next=4,he.dispatch("newRoutes",he.getters.info.role);case 4:return console.log(he.getters.addRouters),e.next=7,ne.addRoutes(he.getters.addRouters);case 7:n({path:"/index"});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()();else"/login"===e.path&&n(),n({path:"/login"})}),new s({el:"#app",router:ne,store:he,i18n:xe,render:function(e){return e(m)},components:{App:m},template:"<App/>"})},OIvA:function(e,t){},QliL:function(e,t){},bvLR:function(e,t){},cFS2:function(e,t){},d92X:function(e,t){},eNFu:function(e,t){},fLBy:function(e,t){},fdk3:function(e,t){},h1Oz:function(e,t){},l5ma:function(e,t){},"t/If":function(e,t){},tIVx:function(e,t){},tvR6:function(e,t){},yv63:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e0f8a5d2f3d1af8aa4a0.js.map
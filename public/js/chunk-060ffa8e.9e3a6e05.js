(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-060ffa8e"],{"0141":function(e,a,t){},1427:function(e,a,t){e.exports=t.p+"img/empty.9cd92179.png"},"66b7":function(e){e.exports=JSON.parse('{"$id":"api","$schema":"http://json-schema.org/draft-07/schema#","definitions":{"ProcurementRes.Data":{"properties":{"barCode":{"type":"string"},"brandId":{"type":"number"},"brandName":{"type":"string"},"code":{"type":"string"},"createTime":{"type":"number"},"experience":{"type":"string"},"id":{"type":"number"},"pic":{"type":"string"},"shortName":{"type":"string"},"spuCode":{"type":"string"},"status":{"items":{"type":"number"},"type":"array"}},"required":["barCode","brandId","brandName","code","createTime","experience","id","pic","shortName","spuCode","status"],"type":"object"},"ProcurementRes.DetailData":{"properties":{"barCode":{"type":"string"},"brandId":{"type":"number"},"brandName":{"type":"string"},"code":{"type":"string"},"data":{"items":{"$ref":"api#/definitions/ProcurementRes.Goods"},"type":"array"},"experience":{"type":"string"},"pic":{"type":"string"},"shortName":{"type":"string"},"spuId":{"type":"number"},"supCode":{"type":"string"},"type":{"type":"number"}},"required":["barCode","brandId","brandName","code","data","experience","pic","shortName","spuId","supCode","type"],"type":"object"},"ProcurementRes.Goods":{"properties":{"batchPrice":{"type":"number"},"costStatus":{"type":"number"},"id":{"type":"number"},"logisticsFreight":{"type":"number"},"logisticsTax":{"type":"number"},"logisticsTotal":{"type":"number"},"pic":{"type":"string"},"pricStatus":{"type":"number"},"property":{"type":"string"},"property1":{"type":"number"},"property2":{"type":"number"},"pucharseCost":{"type":"number"},"pucharseTax":{"type":"number"},"pucharseTaxCost":{"type":"number"},"pucharseTotal":{"type":"number"},"qty":{"type":"number"},"skuId":{"type":"number"},"spuId":{"type":"number"},"status":{"enum":[0,1,2,3],"type":"number"},"supplierName":{"type":"string"},"tagTost":{"type":"number"},"taxStatus":{"type":"number"}},"required":["batchPrice","costStatus","id","logisticsFreight","logisticsTax","logisticsTotal","pic","pricStatus","property","property1","property2","pucharseCost","pucharseTax","pucharseTaxCost","pucharseTotal","qty","skuId","spuId","status","supplierName","tagTost","taxStatus"],"type":"object"},"ProcurementRes.Page":{"properties":{"currPage":{"type":"number"},"data":{"items":{"$ref":"api#/definitions/ProcurementRes.Data"},"type":"array"},"pageSize":{"type":"number"},"totalCount":{"type":"number"},"totalPage":{"type":"number"}},"required":["currPage","data","pageSize","totalCount","totalPage"],"type":"object"}}}')},"7b1f":function(e,a,t){"use strict";var l=t("0141"),r=t.n(l);r.a},"7c6f":function(e,a,t){},"823d":function(e,a,t){"use strict";var l,r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-card",{staticClass:"card"},[t("el-form",{attrs:{inline:!0}},[t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-form-item",{attrs:{label:"商品分类"}},[t("el-cascader",{attrs:{size:"small",options:e.deviceTypes,"show-all-levels":!1}})],1),t("el-form-item",{attrs:{label:"品牌"}},[t("el-select",{attrs:{size:"small",filterable:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.selects,(function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"商品来源"}},[t("el-select",{attrs:{size:"small"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.selects,(function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"定价状态(单页)"}},[t("el-select",{attrs:{size:"small"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.selects,(function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("el-form-item",{attrs:{label:"商品ID"}},[t("el-input",{staticClass:"input",attrs:{size:"small",clearable:!0,placeholder:"请输入内容"},model:{value:e.keyword,callback:function(a){e.keyword=a},expression:"keyword"}})],1),t("el-form-item",{attrs:{label:"商品名称"}},[t("el-input",{staticClass:"input",attrs:{size:"small",clearable:!0,placeholder:"请输入内容"},model:{value:e.keyword,callback:function(a){e.keyword=a},expression:"keyword"}})],1),t("el-form-item",{staticStyle:{flex:"2"}},[t("el-button",{attrs:{type:"success",icon:"el-icon-search",plain:"",size:"small"},on:{click:function(a){return e.hanleClick("search")}}},[e._v("搜索")]),t("el-button",{attrs:{type:"primary",plain:"",size:"small",icon:"el-icon-refresh"},on:{click:function(a){return e.hanleClick("search")}}},[e._v("重置")])],1)],1)],1)],1)},n=[],i=t("d4ec"),s=t("bee2"),u=t("262e"),c=t("2caf"),o=t("9ab4"),p=t("60a3");(function(e){e["primary"]="primary",e["success"]="success",e["info"]="info",e["warning"]="warning",e["danger"]="danger",e["normal"]=""})(l||(l={}));var b=function(e){Object(u["a"])(t,e);var a=Object(c["a"])(t);function t(){var e;return Object(i["a"])(this,t),e=a.apply(this,arguments),e.keyword="",e.value=1,e.deviceTypes=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}],e.selects=[{label:"llll",value:0},{label:"dsds",value:1},{label:"dggg",value:2}],e}return Object(s["a"])(t,[{key:"hanleClick",value:function(e){try{this.$parent[e](this.keyword)}catch(a){console.error("调用searchBar的组件中不存在".concat(e,"方法"))}}}]),t}(p["c"]);Object(o["a"])([Object(p["b"])({default:function(){return[]}})],b.prototype,"options",void 0),Object(o["a"])([Object(p["b"])({default:!1})],b.prototype,"hiddenSearch",void 0),Object(o["a"])([Object(p["b"])({default:!1})],b.prototype,"hiddenInput",void 0),b=Object(o["a"])([Object(p["a"])({name:"SearchBar"})],b);var d=b,m=d,v=(t("be4f"),t("2877")),y=Object(v["a"])(m,r,n,!1,null,"3ca3122b",null);a["a"]=y.exports},be4f:function(e,a,t){"use strict";var l=t("7c6f"),r=t.n(l);r.a},cc7a:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"container"},[l("search-bar"),l("el-card",{staticStyle:{"margin-top":"20px"}},[l("el-table",{attrs:{border:"",data:e.tableData}},[l("template",{slot:"empty"},[l("div",{staticClass:"empty"},[l("img",{attrs:{src:t("1427")}}),l("p",[e._v("暂无数据")])])]),l("el-table-column",{attrs:{label:"商品ID",prop:"id",align:"center"}}),l("el-table-column",{attrs:{label:"商品图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[l("el-image",{staticStyle:{height:"60px",width:"60px"},attrs:{src:e.row.pic.split(",")[0],"preview-src-list":e.row.pic.split(",")}})]}}])}),l("el-table-column",{attrs:{label:"商品名称",prop:"shortName",align:"center"}}),l("el-table-column",{attrs:{label:"条形码",prop:"barCode",align:"center"}}),l("el-table-column",{attrs:{label:"类目",prop:"experience",align:"center"}}),l("el-table-column",{attrs:{label:"品牌",prop:"brandName",align:"center"}}),l("el-table-column",{attrs:{label:"定价状态",prop:"experience",align:"center"}}),l("el-table-column",{attrs:{label:"审核状态",prop:"experience",align:"center"}}),l("el-table-column",{attrs:{label:"操作",align:"center"}},[[l("el-button",{attrs:{type:"text"},on:{click:e.handleDetail}},[e._v("定价审核")])]],2)],2)],1),l("el-pagination",{staticStyle:{margin:"15px 0"},attrs:{layout:"total, sizes, prev, pager, next, jumper",background:"","current-page":e.currentPage,"page-size":e.pageSize,total:e.totalCount,"page-sizes":[5,10,15,20]},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},r=[],n=(t("96cf"),t("1da1")),i=t("d4ec"),s=t("bee2"),u=t("262e"),c=t("2caf"),o=t("9ab4"),p=t("60a3"),b=t("d24b"),d=t("823d"),m=function(e){Object(u["a"])(t,e);var a=Object(c["a"])(t);function t(){var e;return Object(i["a"])(this,t),e=a.apply(this,arguments),e.tableData=[],e.currentPage=1,e.pageSize=20,e.totalCount=20,e}return Object(s["a"])(t,[{key:"handleDetail",value:function(){this.$router.push("procurement/detail")}},{key:"handleSizeChange",value:function(e){this.pageSize=e}},{key:"handleCurrentChange",value:function(e){this.currentPage=e}},{key:"mounted",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var a,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["b"])({pageIndex:1,pageSize:10});case 2:a=e.sent,t=a.data,this.tableData=t.data;case 5:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}()}]),t}(p["c"]);m=Object(o["a"])([Object(p["a"])({name:"procurement",components:{SearchBar:d["a"]}})],m);var v=m,y=v,g=(t("7b1f"),t("2877")),h=Object(g["a"])(y,l,r,!1,null,"f409092c",null);a["default"]=h.exports},d24b:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return i}));var l=t("b32d"),r=t("66b7"),n=function(e){return Object(l["a"])({url:"/api/charge/list",method:"get",params:e,schema:r,type:"ProcurementRes.Page"})},i=function(e){return Object(l["a"])({url:"/api/charge/purchase/".concat(e.spuId),method:"get",params:e,schema:r,type:"ProcurementRes.DetailData"})}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["pocList~f71cff67"],{"3ae8":function(t,e,a){},6341:function(t,e,a){"use strict";a.r(e),a("4160"),a("caad"),a("b0c0"),a("b64b"),a("d3b7"),a("a79d"),a("2532"),a("159b");var s=a("5530"),i={props:{text:{type:String},record:{type:Object}}},n=a("2877"),r={searchConfig:[{key:"vul_name",name:"漏洞名称",type:"input"},{key:"app_name",name:"应用",type:"input"},{key:"category",name:"类别",type:"input"},{key:"scheme",name:"协议",type:"input"}],columns:[{width:100,title:"序号",dataIndex:"index"},{title:"漏洞名称",width:320,dataIndex:"vul_name"},{title:"应用",dataIndex:"app_name",width:280,scopedSlots:{customRender:"ellipsis",component:Object(n.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{title:t.text}},[t._v(t._s(t.text&&26<t.text.length?t.text.slice(0,26)+"...":t.text))])}),[],!1,null,"2701ba3c",null).exports}},{width:280,title:"类别",dataIndex:"category"},{width:300,title:"协议",dataIndex:"scheme"},{width:250,title:"更新时间",dataIndex:"update_date"}]},c=a("e20a");i={data:function(){return{columns:r.columns,searchList:r.searchConfig,isLoading:!1,isAddTask:!1,isSyncTask:!1,currentTaskItem:"",total:0,params:{page:1,size:10},selectedRowKeys:[],dataList:[],matchObj:{top100:"TOP100",top1000:"TOP1000",all:"全端口",test:"测试",big:"大字典"}}},mounted:function(){this.checkInitParams(),this.initData()},watch:{$route:function(t,e){this.checkInitParams(),this.initData()}},methods:{searchData:function(t,e){for(var a in this.params.page=1,this.params.size=10,this.$route.query[t]=e,this.$route.query)this.$route.query[a]||delete this.$route.query[a];this.$route.query.page=1,this.$route.query.size=10,this.$router.push({query:Object(s.a)(Object(s.a)({},this.$route.query),{},{ts:(new Date).getTime()})})},checkInitParams:function(){for(var t in this.params={page:1,size:10},this.$route.query)["page","size"].includes(t)&&(this.$route.query[t]=parseInt(this.$route.query[t])),this.params[t]=this.$route.query[t];this.$route.query.searchId&&(this.params._id=this.$route.query.searchId),this.$route.query.name&&"-"!==this.$route.query.name&&(this.params.name=this.$route.query.name)},selectRowCallback:function(t){this.selectedRowKeys=t},changeCallback:function(t,e,a){var s=this.params.order?this.params.order.includes("-")?"":"-"+a.columnKey:a.columnKey;this.params.order=s,this.initData()},initData:function(){var t,e=this,a={};Object.keys(this.params).forEach((function(t){void 0!==e.params[t]&&e.params[t]&&(a[t]=e.params[t])})),this.isLoading=!0,t=Object(s.a)({},a),c.a.get("/poc/",{params:t}).then((function(t){200===t.code?(t.items.forEach((function(t,a){t.key=t._id,t.title=t.name,t.index=(e.params.page-1)*e.params.size+a+1+"",Object.keys(t).forEach((function(e){t[e]||(t[e]="-")}))})),e.dataList=t.items,e.total=t.total,document.querySelector("#contentWrap").scrollTop=0):e.dataList=[]})).finally((function(){e.isLoading=!1}))},operateCallback:function(t){switch(t){case"syncTask":for(var e=arguments.length,a=new Array(1<e?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];this.syncTaskOption.apply(this,a);break;case"refreshPage":this.initData()}},syncTaskOption:function(t){this.currentTaskItem=t,this.isSyncTask=!0},turnPageCallback:function(t,e){this.params.page=this.params.size===e?t:1,this.params.size=e,this.$route.query.page=this.params.page,this.$route.query.size=this.params.size,this.$router.push({query:Object(s.a)(Object(s.a)({},this.$route.query),{},{ts:(new Date).getTime()})})},updateList:function(){var t=this;c.a.get("/poc/sync/",{params:void 0}).then((function(e){200===e.code&&(t.initData(),t.$message.success("更新列表成功"))}))},clearList:function(){var t=this;c.a.get("/poc/delete/",{params:void 0}).then((function(e){200===e.code&&(t.initData(),t.$message.success("清空列表成功"))}))}}},a("b8dc"),i=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taskList table-wrap"},[a("a-button",{staticClass:"newTaskBtn",attrs:{type:"primary"},on:{click:t.updateList}},[t._v("更新")]),a("a-button",{staticClass:"newTaskBtn",on:{click:t.clearList}},[t._v("清空")]),a("div",{staticClass:"search-wrap"},t._l(t.searchList,(function(e,s){return a("span",{key:s,staticClass:"item"},[a("span",{staticClass:"label"},[t._v(t._s(e.name)+"：")]),"input"===e.type?a("a-input-search",{staticStyle:{width:"260px"},attrs:{allowClear:"",placeholder:"请输入"+e.name+"进行搜索"},on:{search:function(a){return t.searchData(e.key,t.params[e.key])}},model:{value:t.params[e.key],callback:function(a){t.$set(t.params,e.key,a)},expression:"params[item.key]"}}):t._e(),"select"===e.type?a("a-select",{staticStyle:{width:"260px"},attrs:{allowClear:"",placeholder:"请选择"+e.name+"进行搜索"},on:{change:function(a){return t.searchData(e.key,t.params[e.key])}},model:{value:t.params[e.key],callback:function(a){t.$set(t.params,e.key,a)},expression:"params[item.key]"}},t._l(e.filterList,(function(e,s){return a("a-select-option",{key:s,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1):t._e()],1)})),0),a("table-component",{attrs:{columns:t.columns,isSelect:!1,selectedRowKeys:t.selectedRowKeys,tableList:t.dataList,isLoading:t.isLoading,pagination:!1,scroll:{x:1200},total:t.total,params:t.params},on:{operateCallback:t.operateCallback,selectRowCallback:t.selectRowCallback,turnPageCallback:t.turnPageCallback,changeCallback:t.changeCallback}})],1)}),[],!1,null,"37bf7ff6",null);e.default=i.exports},b8dc:function(t,e,a){"use strict";var s=a("3ae8");a.n(s).a}}]);
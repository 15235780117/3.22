webpackJsonp([0],{"/n7/":function(t,a){},JFK9:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},r,!1,function(t){e("ipOa")},null,null).exports,o=e("/ocq"),l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("a",{attrs:{href:"#/login"}},[t._v("退出")]),t._v(" "),e("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),t._l(t.datas,function(a){return e("tr",[e("td",[t._v(t._s(a.id))]),t._v(" "),e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.age))]),t._v(" "),e("td",[t._v(t._s(a.classes))]),t._v(" "),t._m(1,!0)])})],2),t._v(" "),e("a",{attrs:{href:"#/add"}},[t._v("添加")])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("姓名")]),t._v(" "),e("td",[t._v("班级")]),t._v(" "),e("td",[t._v("单位")]),t._v(" "),e("td",[t._v("操作")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("a",{attrs:{href:"#/edit"}},[this._v("编辑")])])}]};var i=e("VU/8")({name:"HelloWorld",data:function(){return{datas:[{id:1,name:"张三",age:"12",classes:"0232"},{id:2,name:"张三",age:"12",classes:"0232"},{id:3,name:"张三",age:"12",classes:"0232"}]}}},l,!1,function(t){e("gRCu")},"data-v-c2694320",null).exports,c=(e("qb6w"),{name:"login",methods:{submit:function(){localStorage,this.$router.push({path:"/reg"})},butt:function(){localStorage,this.$router.push({path:"/"})}}}),p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("p",[t._v("请登录")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.submit}},[t._v("注册")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.butt}},[t._v("登录")])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[this._v("账号")]),this._v(" "),a("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1",placeholder:"Email"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[this._v("密码")]),this._v(" "),a("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"}})])}]};var u=e("VU/8")(c,p,!1,function(t){e("mutr")},"data-v-c89d74ec",null).exports,d={name:"reg",methods:{reg:function(){localStorage,this.$router.push({path:"/login"})}}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("p",[t._v("请注册")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.reg}},[t._v("注册")])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[this._v("账号")]),this._v(" "),a("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1",placeholder:"Email"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[this._v("密码")]),this._v(" "),a("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"}})])}]};var v=e("VU/8")(d,_,!1,function(t){e("JFK9")},"data-v-43bc78b8",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("id")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1",placeholder:"id"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("姓名")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"姓名"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("班级")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"班级"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("单位")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"单位"}})]),t._v(" "),e("a",{attrs:{href:"#/"}},[t._v("后退")])])}]};var f=e("VU/8")({name:"edit"},m,!1,function(t){e("/n7/")},"data-v-69397426",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("id")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1",placeholder:"id"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("姓名")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"姓名"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("班级")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"班级"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("单位")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"单位"}})]),t._v(" "),e("a",{attrs:{href:"#/"}},[t._v("后退")])])}]};var b=e("VU/8")({name:"add"},h,!1,function(t){e("uoQ5")},"data-v-9f5af3a2",null).exports;s.a.use(o.a);var g=new o.a({routes:[{path:"/",component:i},{path:"/login",component:u},{path:"/reg",component:v},{path:"/edit",component:f},{path:"/add",component:b}]});g.beforeEach(function(t,a,e){"yes"==localStorage.login?e():"/login"==t.path||"/reg"==t.path?e():e("/login")});var C=g;s.a.config.productionTip=!1,new s.a({el:"#app",router:C,components:{App:n},template:"<App/>"})},gRCu:function(t,a){},ipOa:function(t,a){},mutr:function(t,a){},qb6w:function(t,a){},uoQ5:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.a55365a2bf9140c6b6a8.js.map
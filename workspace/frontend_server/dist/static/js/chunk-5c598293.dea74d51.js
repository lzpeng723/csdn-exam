(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c598293"],{"01ea":function(e,t,r){"use strict";r.d(t,"d",(function(){return u})),r.d(t,"g",(function(){return i})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"f",(function(){return s})),r.d(t,"a",(function(){return a}));var i=["TINYINT","INT","BIGINT","DATE","DATETIME","CHAR","VARCHAR","TEXT"],l=["DATE","DATETIME","TEXT","LONGTEXT"],n=[{type:"text",label:"单行文本(text)",role:["CHAR","VARCHAR","TEXT"]},{type:"radio",label:"单选(radio)",role:["CHAR","VARCHAR","TEXT"]},{type:"checkbox",label:"多选(checkbox)",role:["CHAR","VARCHAR","TEXT"]},{type:"select",label:"下拉框(select))",role:["CHAR","VARCHAR","TEXT"]},{type:"date",label:"日期(date)",role:["DATE","DATETIME"]},{type:"datetime",label:"日期和时间(datetime)",role:["DATETIME"]},{type:"textarea",label:"多行文本(textarea)",role:["VARCHAR","TEXT"]},{type:"number",label:"数字(number)",role:["INT","BIGINT"]},{type:"password",label:"密码(password)",role:["CHAR","VARCHAR","TEXT"]},{type:"selectmultiple",label:"多选下拉框(select_multiple)",role:["CHAR","VARCHAR","TEXT"]}],o={text:"单行文本",radio:"单选",checkbox:"多选",select:"下拉框",date:"日期",datetime:"日期和时间",textarea:"多行文本",number:"数字",password:"密码",selectmultiple:"多选下拉框"},a=["DATE","DATETIME"],s=["radio","checkbox","date","datetime"],u=["radio","checkbox","select","selectmultiple"]},"25f0":function(e,t,r){"use strict";var i=r("6eeb"),l=r("825a"),n=r("d039"),o=r("ad6d"),a="toString",s=RegExp.prototype,u=s[a],c=n((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=a;(c||d)&&i(RegExp.prototype,a,(function(){var e=l(this),t=String(e.source),r=e.flags,i=String(void 0===r&&e instanceof RegExp&&!("flags"in s)?o.call(e):r);return"/"+t+"/"+i}),{unsafe:!0})},"371d":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wrap"},[r("div",{staticClass:"form"},[r("h2",{staticClass:"title"},[e._v(e._s(e.name))]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto","label-position":"top"}},[e._l(e.fieldList,(function(t,i){return r("div",{key:t.guid,staticClass:"form-item-div"},[r("el-form-item",{attrs:{label:t.field_name,prop:t.field}},["select"===t.input_type||"selectmultiple"===t.input_type?r("el-select",{attrs:{multiple:"selectmultiple"===t.input_type,clearable:"",placeholder:t.placeholder},model:{value:e.ruleForm[t.field],callback:function(r){e.$set(e.ruleForm,t.field,r)},expression:"ruleForm[item.field]"}},e._l(t.option.split("##"),(function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})})),1):e._e(),"radio"===t.input_type?r("el-radio-group",{model:{value:e.ruleForm[t.field],callback:function(r){e.$set(e.ruleForm,t.field,r)},expression:"ruleForm[item.field]"}},e._l(t.option.split("##"),(function(i,l){return r("el-radio",{key:l,attrs:{label:i,name:e.ruleForm[t.field]}})})),1):e._e(),"checkbox"===t.input_type?r("el-checkbox-group",{model:{value:e.ruleForm[t.field],callback:function(r){e.$set(e.ruleForm,t.field,r)},expression:"ruleForm[item.field]"}},e._l(t.option.split("##"),(function(e,i){return r("el-checkbox",{key:i,attrs:{label:e,name:t.field}})})),1):e._e(),e.needOption.includes(t.input_type)?e._e():r("el-input",{attrs:{type:t.input_type||"text",placeholder:t.placeholder},model:{value:e.ruleForm[t.field],callback:function(r){e.$set(e.ruleForm,t.field,"string"===typeof r?r.trim():r)},expression:"ruleForm[item.field]"}})],1),i!==(e.fieldList||[]).length-1?r("div",{staticClass:"line"}):e._e()],1)})),r("el-form-item",[r("div",{staticClass:"h-jz btn-mt"},[r("el-button",{staticStyle:{width:"122px"},attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)])],2)],1)])},l=[],n=r("5530"),o=(r("d3b7"),r("25f0"),r("b0c0"),r("159b"),r("caad"),r("2532"),r("c7ea")),a=r("01ea"),s={data:function(){return{needOption:a["d"],rules:{},name:"",loading:!1,btnLoading:!1,ruleForm:{},fieldList:[],table_guid:""}},created:function(){this.table_guid=this.$route.params.id,this.init()},methods:{submitForm:function(e){var t=this;this.btnLoading=!0,this.loading=!0,this.$refs[e].validate((function(r){if(!r)return t.btnLoading=!1,t.loading=!1,console.log("error submit!!"),!1;Object(o["d"])({table_guid:t.table_guid,form:Object(n["a"])({},t.changeObjString(t.ruleForm))}).then((function(r){t.$message({type:"success",message:"提交成功"}),t.resetForm(e)})).catch().finally((function(){t.btnLoading=!1,t.loading=!1}))}))},changeObjString:function(e){for(var t in e=JSON.parse(JSON.stringify(e)),e)if(Object.hasOwnProperty.call(e,t)){var r=e[t];"[object Array]"===Object.prototype.toString.call(r)&&(e[t]=e[t].toString())}return e},resetForm:function(e){this.$refs[e].resetFields()},init:function(){var e=this;this.loading=!0,Object(o["c"])({table_guid:this.table_guid}).then((function(t){var r=t.fields||[];e.name=t.name,r.length?(r.forEach((function(t){"checkbox"!==t.input_type&&"selectmultiple"!==t.input_type||e.$set(e.ruleForm,t.field,[]),e.rules[t.field]=[],1===t.required&&e.rules[t.field].push({required:!0,message:"字段为必填",trigger:"blur"}),t.field_length&&!a["d"].includes(t.input_type)&&e.rules[t.field].push({max:t.field_length,message:"长度最大为 ".concat(t.field_length,"个字符"),trigger:"blur"})})),e.$nextTick((function(){e.loading=!1,e.fieldList=r}))):e.$message.error("该模型没有表单字段，请录入字段后再尝试")}))}}},u=s,c=(r("6149"),r("2877")),d=Object(c["a"])(u,i,l,!1,null,"4a910e5c",null);t["default"]=d.exports},"394d":function(e,t,r){},6149:function(e,t,r){"use strict";r("394d")},ad6d:function(e,t,r){"use strict";var i=r("825a");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b775:function(e,t,r){"use strict";r("d3b7");var i=r("bc3a"),l=r.n(i),n=r("5c96"),o=l.a.create({baseURL:"http://localhost:8080",timeout:5e3});o.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(n["Message"].closeAll(),Object(n["Message"])({message:t.data||"Error",type:"error",duration:5e3}),Promise.reject(new Error(t.data||"Error"))):t.data}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=o},c7ea:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var i=r("b775");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/form/get",method:"post",data:e})}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/form/push",method:"post",data:e})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/form/header",method:"post",data:e})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["a"])({url:"/form/table",method:"post",data:e})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33f1e9dd"],{"67dc":function(t,e,s){},"99af":function(t,e,s){"use strict";var a=s("23e7"),r=s("d039"),i=s("e8b5"),n=s("861d"),o=s("7b0b"),c=s("50c4"),u=s("8418"),d=s("65f0"),l=s("1dde"),p=s("b622"),m=s("2d00"),f=p("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=m>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),w=l("concat"),b=function(t){if(!n(t))return!1;var e=t[f];return void 0!==e?!!e:i(t)},C=!h||!w;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,s,a,r,i,n=o(this),l=d(n,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?n:arguments[e],b(i)){if(r=c(i.length),p+r>v)throw TypeError(g);for(s=0;s<r;s++,p++)s in i&&u(l,p,i[s])}else{if(p>=v)throw TypeError(g);u(l,p++,i)}return l.length=p,l}})},aa92:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v(" 請先登入 ")]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v(" 登入 ")]),s("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v(" © 2020~∞ - 六角學院 ")])])],1)},r=[],i=(s("99af"),{name:"Login",data:function(){return{user:{email:"",password:""},isLoading:!1}},methods:{signin:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/auth/login");this.$http.post(e,this.user).then((function(e){var s=e.data.token,a=e.data.expired;document.cookie="=".concat(s,";expires=").concat(new Date(1e3*a),";"),t.$bus.$emit("message:push","登入成功","success"),t.isLoading=!1,t.$router.push("/admin/products")})).catch((function(e){t.$bus.$emit("message:push","登入失敗惹，好糗Σ( ° △ °|||)︴\n            ".concat(e),"danger"),t.isLoading=!1}))}}}),n=i,o=(s("c29e"),s("2877")),c=Object(o["a"])(n,a,r,!1,null,"6fca8d62",null);e["default"]=c.exports},c29e:function(t,e,s){"use strict";var a=s("67dc"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-33f1e9dd.a8bf4421.js.map
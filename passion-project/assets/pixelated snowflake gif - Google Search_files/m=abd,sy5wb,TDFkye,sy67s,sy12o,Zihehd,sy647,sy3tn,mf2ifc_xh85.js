//# allFunctionsCalledOnLoad
loaded_h_0(function(_){var window=this;
_.v("abd");
var oWu=function(a){var b="",c=21;for(let d=0;d<a.length;d++)d%4!=3&&(b+=String.fromCharCode(a[d]^c),c++);return b};_.pWu=oWu([97,119,115,111,107]);_.qWu=oWu([97,119,115,111,107,123]);_.rWu=oWu([118,115,121,107,108,124,104,119,68,127,114,105,114]);_.sWu=oWu([101,126,118,102,118,125,118,109,126]);_.tWu=oWu([116,116,115,108]);_.uWu=oWu([113,115,99,107]);_.vWu=oWu([113,115,117,107]);_.wWu=oWu([58,127,122,103,121,126,127,98,104,51,109,124,118,123,15,76,81,90,13,95,67,76,64,118]);
_.w();
_.yqr=_.x("TDFkye",[]);
_.v("TDFkye");
var xWu=function(a){typeof a==="string"&&(a=_.Xm(a));if(a)return _.Dn(a,"display")!=="none"&&_.Dn(a,"visibility")!=="hidden"&&a.offsetHeight>0},yWu=function(a){var b=0;for(let c in a)if(a[c].e)if(a[c].b)b++;else return!1;return b>0},zWu=function(a={}){var b={};b[_.uWu]={e:!!a[_.uWu],b:!xWu(_.pWu)};b[_.vWu]={e:!!a[_.vWu],b:!xWu(_.qWu)};return b},AWu=function(a){var b=[];for(let c in a)a[c].e&&b.push(`${c}:`+(a[c].b?"1":"0"));return b.join(",")},BWu=function(a,b){a=String(a);b&&(a+=`,${b}`);google.log(_.sWu,
a)},CWu=function(a,b,c=2){if(c<1)BWu(7,b);else{var d=new Image;d.onerror=()=>{CWu(a,b,c-1)};d.src=a}},DWu=function(a={}){if(a[_.tWu]&&xWu(_.rWu)){a=zWu(a);var b=AWu(a);yWu(a)?BWu(1,"0,"+b):BWu(0,b);(0,_.Hf)(()=>{CWu(_.wWu,"aa")})}};_.Ys(_.yqr,class extends _.Ws{constructor(a){super(a.La);DWu(google.pmc.abd)}});
_.w();
_.zyr=_.x("Zihehd",[]);
var $7b,e8b,Y7b,a8b;$7b=function(){_.ao(_.X7b);Y7b("kne","enabled");_.X7b=_.we(_.Z7b,"keydown",a=>{a.keyCode!==13&&a.keyCode!==32||Y7b("kne","selected")})};e8b=function(){_.ao(a8b);a8b=_.Xn(_.Z7b,"mousedown",()=>{_.Pm(_.Z7b,_.b8b);_.c8b&&_.ao(_.X7b);_.d8b()},{capture:!0})};_.d8b=function(){_.ao(a8b);a8b=_.we(_.Z7b,"keydown",a=>{_.f8b.indexOf(a.keyCode)!==-1&&_.g8b()})};_.g8b=function(){_.Nm(_.Z7b,_.b8b);_.c8b&&$7b();e8b()};_.h8b=function(a){_.b8b="zAoYTe";Y7b=a;_.d8b()};_.c8b=!1;_.f8b=[9];_.Z7b=document.documentElement;
_.v("Zihehd");
_.Ys(_.zyr,class extends _.Ws{constructor(a){super(a.La);_.h8b(this.ka)}ka(a,b){_.gh().Bc(a,b).log()}});
_.w();
_.jwr=_.x("mf2ifc",[]);
var Axh,Cxh,Exh;Axh=function(a){var b;(b=!a.parentElement)||(a.ownerDocument&&a.ownerDocument.defaultView?(b=a.ownerDocument.defaultView.getComputedStyle(a))&&b.visibility==="hidden"?b=!1:(b=a.getBoundingClientRect(),b=b.width>0&&b.height>0):b=!0);return b?a:Axh(a.parentElement)};Cxh=function(a){if(a){var b=new Bxh;for(let f of Object.keys(a)){var c=document.getElementById(f)||document.documentElement.querySelector(`img[data-iid="${f}"]`);if(c){var d=b,e=a[f];d.ka.ka(c,e)||d.oa.ka(c,e)}}}};
_.Dxh=function(){Cxh(google.ldi);Cxh(google.pim);google.lfj?google.sx(null,()=>{Cxh(google.ldilf)}):google.dclc(()=>{Cxh(google.ldilf)})};Exh=class{constructor(a){this.rootMargin=a;this.Ah=null}MMa(){if(this.Ah)return!0;try{return this.Ah=new IntersectionObserver((a,b)=>{a=a.filter(c=>c.isIntersecting);for(let c of a)a=c.target,this.Aa(a),b.unobserve(a)},{rootMargin:this.rootMargin,threshold:[0]}),!0}catch(a){return!1}}};var Fxh=class extends Exh{constructor(){super("0px");this.oa=new Map;this.wa=new Map}ka(a,b){if(a.hasAttribute("data-atf"))return!1;if(this.MMa()){this.wa.set(a,b);b=Axh(a);if(b===a){var c;a:{for(c=a;c;c=c.parentElement)if(c.tagName==="G-SCROLLING-CAROUSEL"||c.classList.contains("XNfAUb"))break a;c=null}c&&(b=c)}(c=this.oa.get(b))?c.push(a):this.oa.set(b,[a]);this.Ah.observe(b);return!0}return!1}Aa(a){if(a=this.oa.get(a))for(let b of a)a=this.wa.get(b),_.jpc(_.hpc(),b,a,_.shc)}};var Gxh=class extends Exh{constructor(){super("400px");this.oa=new Map}ka(a,b){(google.c.timl||Number(a.getAttribute("data-atf"))&1?0:this.MMa())?(this.oa.set(a,b),this.Ah.observe(a)):_.jpc(_.hpc(),a,b,_.shc);return!0}Aa(a){var b=this.oa.get(a);_.jpc(_.hpc(),a,b,_.shc)}};var Bxh=class{constructor(){this.ka=new Fxh;this.oa=new Gxh}};
_.v("mf2ifc");
_.Ys(_.jwr,class extends _.Ws{constructor(a){super(a.La);_.Dxh()}});
_.w();
});
// Google Inc.

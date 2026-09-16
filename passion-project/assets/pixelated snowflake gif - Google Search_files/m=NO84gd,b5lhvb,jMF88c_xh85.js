//# allFunctionsCalledOnLoad
loaded_h_0(function(_){var window=this;
_.v("NO84gd");

_.w();
_.v("b5lhvb");
var rUu=function(a){return a instanceof _.Fh?a.getRoot().el():a},sUu=function(){var a=_.YTu;a.Bj.ka.YH()||(a.Bj.start(),window.performance&&a.Bj.Cz("ns",Math.round(a.Bj.ka.getStartTime())*-1),a.Bj.Cz("uvpbet",0))},tUu=class extends _.m{constructor(a){super(a)}getViewerType(){return _.Ej(this,1)}Nx(a){return _.ei(this,1,a)}},uUu=function(a,b){var c=a.oa.get(b);if(c)return c;c=new Map;a.oa.set(b,c);return c},vUu=async function(a,b,c){var d=(0,_.ag)(),e=d();d=d(1);try{a.ka.delete(c.getIdentifier());
let f=uUu(a,c.getIdentifier()),g=f.size===0;f.set(b,c);if(g){let h,k;d(await e((k=(h=a.listener).PFe)==null?void 0:k.call(h,c.getIdentifier())))}else{let h,k;d(await e((k=(h=a.listener).yCd)==null?void 0:k.call(h,c.getIdentifier())))}}finally{e()}},wUu=async function(a,b,c){var d=(0,_.ag)(),e=d();d=d(1);try{a.ka.delete(c.getIdentifier());uUu(a,c.getIdentifier()).set(b,c);let f,g;d(await e((g=(f=a.listener).yCd)==null?void 0:g.call(f,c.getIdentifier())))}finally{e()}},xUu=async function(a,b,c){var d=
(0,_.ag)(),e=d();d=d(1);try{a.ka.delete(c);let f=uUu(a,c);f.delete(b);if(f.size===0){a.oa.delete(c);let g,h;d(await e((h=(g=a.listener).Wig)==null?void 0:h.call(g,c)))}else{let g,h;d(await e((h=(g=a.listener).yCd)==null?void 0:h.call(g,c)))}}finally{e()}},yUu=class{constructor(a){this.listener=a;this.oa=new Map;this.ka=new Map}SLa(a){if(this.ka.has(a))return this.ka.get(a);var b;if((b=this.oa.get(a))&&b.size!==0)return b.size===1?b=b.values().next().value:(b=[...b.entries()].sort((c,d)=>_.aLa(rUu(c[0]),
rUu(d[0]))).map(c=>c[1]).flatMap(c=>c.oa()),b=_.HTd(_.ITd(new _.GTd,a),b)),this.ka.set(a,b),b}},zUu=!!(_.Qi[45]&64);var AUu=function(a,b){a.iGb.has(b)||a.iGb.set(b,(0,_.Ho)(()=>{a.hGb(b)},1E3))};
_.kg(_.b4a,class extends _.Qo{static Ra(){return{service:{H$a:_.$Tu,MGb:_.ZTu}}}constructor(a){super();this.UEb=new yUu(this);this.dkc=new Set;this.Lad=new Set;this.iGb=new Map;this.H$a=a.service.H$a;this.MGb=a.service.MGb;this.Vfb().then(b=>{b.OPe(c=>this.UEb.SLa(c))})}async PFe(){var a=(0,_.ag)(),b=a();a=a(1);try{if(!zUu){let c=a(await b(this.Vfb()));sUu();c.ORb()}}finally{b()}}wlb(a,b){this.dkc.has(b.getIdentifier())&&AUu(this,b.getIdentifier());return vUu(this.UEb,a,b)}HYe(a,b){this.dkc.has(b.getIdentifier())&&
AUu(this,b.getIdentifier());return wUu(this.UEb,a,b)}vPd(a,b){this.dkc.has(b)&&AUu(this,b);return xUu(this.UEb,a,b)}async TXb(a){var b=(0,_.ag)(),c=b();b=b(1);try{let d=b(await c(this.Vfb()));zUu&&(sUu(),d.ORb());d.ZJc(a)}finally{c()}}async N5(a){var b=(0,_.ag)(),c=b();b=b(1);try{let q=b(await c(this.SLa(a)));if(q){var d=q.oa().findIndex(r=>r.q2()===a.Dw);if(d!==-1){_.Hi(q,2,d);var e=a.RGd;e.id||(e.id=_.Zx());this.dkc.add(a.streamId);this.iGb.has(a.streamId)&&((0,_.Io)(this.iGb.get(a.streamId)),this.iGb.delete(a.streamId));
var f=b(await c(this.Vfb())),g,h,k,l,n;b(await c(f.fxb(q,null,(g=a.gga)!=null?g:null,(h=a.SGd)!=null?h:null,(k=a.interactionVed)!=null?k:null,(l=a.Di)!=null?l:null,(n=a.userAction)!=null?n:null,a.oed,e.id)))}}}finally{c()}}async dSc(a){var b=(0,_.ag)(),c=b();b=b(1);try{if(!this.Lad.has(a)){this.Lad.add(a);var d=_.lUu(),e=d.sendMessage,f=new _.hUu,g=(new tUu).Nx(a);var h=_.vj(f,15,_.gUu,g);b(await c(e.call(d,h)))}}finally{c()}}async hGb(a){var b=(0,_.ag)(),c=b();b=b(1);try{let d=b(await c(this.Vfb()));
this.iGb.delete(a);let e=this.UEb.SLa(a);e||(e=_.ITd(new _.GTd,a));b(await c(d.hGb(e)))}finally{c()}}Vfb(){return this.H$a.Vfb()}SLa(a){return _.iUd?a.stream:this.UEb.SLa(a.streamId)}});
_.w();
_.v("jMF88c");
_.kg(_.i3a,class extends _.Qo{});
_.w();
});
// Google Inc.

import{j as T,h as U,p as et,q as we,b as Y,s as H,c as L,d as tt,E as nt,A as rt,B as at,g as st,f as it,a as ot,k as ne,C as lt,e as ct,D as Ve,F as ut,G as ft,I as dt,l as V,m as M,n as N,J as ht,r as K,y as I,o as p,t as G,$ as vt}from"../chunks/disclose-version.k79sEWa_.js";import{c as ke,d as mt,e as E,f as Ke}from"../chunks/svelte-head.GLpCeCDB.js";import{x as de,w as Oe,z as he,b as X,A as xe,W as gt,c as re,s as De,n as Pe,D as Se,X as _t,Y as yt,Z as ve,E as bt,B as wt,i as kt,C as St,l as O,q as qe,T as Ee,_ as Et,$ as Tt,p as Z,t as j,d as $,a0 as Q,k as ae,N as At,a1 as q,a2 as Nt}from"../chunks/runtime.CoZraJAd.js";import{t as pt,b as Ct}from"../chunks/index.GUIL3dq8.js";import{l as D,p as k,s as me,i as se,b as Te,o as Mt}from"../chunks/index-client.VHqWk5JG.js";import{i as ee,s as It,a as Ae}from"../chunks/store.D_ps4ZuO.js";import{g as ge,d as Be,w as z}from"../chunks/index.BTTPbtv6.js";let W=null;function Ne(t){W=t}function Lt(t,e){return e}function zt(t,e,n,r){for(var a=[],u=e.length,s=0;s<u;s++)_t(e[s].e,a,!0);var o=u>0&&a.length===0&&n!==null;if(o){var f=n.parentNode;st(f),f.append(n),r.clear(),x(t,e[0].prev,e[u-1].next)}yt(a,()=>{for(var i=0;i<u;i++){var m=e[i];o||(r.delete(m.k),x(t,m.prev,m.next)),ve(m.e,!o)}})}function Rt(t,e,n,r,a,u=null){var s=t,o={flags:e,items:new Map,first:null};T&&U();var f=null;de(()=>{var i=n(),m=Oe(i)?i:i==null?[]:Array.from(i),d=m.length,_=o.flags;let g=!1;if(T){var h=s.data===et;h!==(d===0)&&(s=we(),Y(s),H(!1),g=!0)}if(T){for(var y=null,l,v=0;v<d;v++){if(L.nodeType===8&&L.data===tt){s=L,g=!0,H(!1);break}var w=m[v],c=r(w,v);l=Fe(L,o,y,null,w,c,v,a,_),o.items.set(c,l),y=l}d>0&&Y(we())}T||Vt(m,o,s,a,_,r),u!==null&&(d===0?f?he(f):f=X(()=>u(s)):f!==null&&xe(f,()=>{f=null})),g&&H(!0)}),T&&(s=L)}function Vt(t,e,n,r,a,u){var s=t.length,o=e.items,f=e.first,i=f,m=new Set,d=null,_=[],g=[],h,y,l,v;for(v=0;v<s;v+=1){if(h=t[v],y=u(h,v),l=o.get(y),l===void 0){var w=i?i.e.nodes.start:n;d=Fe(w,e,d,d===null?e.first:d.next,h,y,v,r,a),o.set(y,d),_=[],g=[],i=d.next;continue}if(Kt(l,h,v),l.e.f&gt&&he(l.e),l!==i){if(m.has(l)){if(_.length<g.length){var c=g[0],b;d=c.prev;var C=_[0],A=_[_.length-1];for(b=0;b<_.length;b+=1)pe(_[b],c,n);for(b=0;b<g.length;b+=1)m.delete(g[b]);x(e,C.prev,A.next),x(e,d,C),x(e,A,c),i=c,d=A,v-=1,_=[],g=[]}else m.delete(l),pe(l,i,n),x(e,l.prev,l.next),x(e,l,d===null?e.first:d.next),x(e,d,l),d=l;continue}for(_=[],g=[];i!==null&&i.k!==y;)m.add(i),g.push(i),i=i.next;if(i===null)continue;l=i}_.push(l),d=l,i=l.next}const R=Array.from(m);for(;i!==null;)R.push(i),i=i.next;var J=R.length;if(J>0){var $e=null;zt(e,R,$e,o)}re.first=e.first&&e.first.e,re.last=d&&d.e}function Kt(t,e,n,r){De(t.v,e),t.i=n}function Fe(t,e,n,r,a,u,s,o,f){var i=W;try{var m=(f&nt)!==0,d=(f&rt)===0,_=m?d?Pe(a):Se(a):a,g=f&at?Se(s):s,h={i:g,v:_,k:u,a:null,e:null,prev:n,next:r};return W=h,h.e=X(()=>o(t,_,g),T),h.e.prev=n&&n.e,h.e.next=r&&r.e,n===null?e.first=h:(n.next=h,n.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{W=i}}function pe(t,e,n){for(var r=t.next?t.next.e.nodes.start:n,a=e?e.e.nodes.start:n,u=t.e.nodes.start;u!==r;){var s=u.nextSibling;a.before(u),u=s}}function x(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Ce(t,e,n,r){var a=t,u="",s;de(()=>{u!==(u=e())&&(s&&(ve(s),s=null),u!==""&&(s=X(()=>{if(T){L.data;for(var o=U(),f=o;o!==null&&(o.nodeType!==8||o.data!=="");)f=o,o=o.nextSibling;if(o===null)throw it(),ot;ne(L,f),a=Y(o);return}var i=u+"",m=lt(i);ne(m.firstChild,m.lastChild),a.before(m)})))})}function B(t,e,n,r){T&&U(),e===void 0||e(t,n)}function ie(t,e,n,r,a,u){let s=T;T&&U();var o,f,i=null;T&&L.nodeType===1&&(i=L,U());var m=T?L:t,d,_=W;de(()=>{const g=e()||null;var h=n||g==="svg"?Ve:null;if(g!==o){var y=W;Ne(_),d&&(g===null?xe(d,()=>{d=null,f=null}):g===f?he(d):ve(d)),g&&g!==f&&(d=X(()=>{if(i=T?i:h?document.createElementNS(h,g):document.createElement(g),ne(i,i),r){var l=T?i.firstChild:i.appendChild(ct());T&&(l===null?H(!1):Y(l)),r(i,l)}re.nodes.end=i,m.before(i)})),o=g,o&&(f=o),Ne(y)}},bt),s&&(H(!0),Y(m))}function Ot(t,e,n){wt(()=>{var r=kt(()=>e(t,n==null?void 0:n())||{});if(n&&(r!=null&&r.update)){var a=!1;St(()=>{var u=n();O(u),a&&r.update(u)}),a=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}function xt(t,e){if(e){const n=document.body;t.autofocus=!0,qe(()=>{document.activeElement===n&&t.focus()})}}function _e(t,e,n){n=n==null?null:n+"";var r=t.__attributes??(t.__attributes={});T&&(r[e]=t.getAttribute(e),e==="src"||e==="href"||e==="srcset")||r[e]!==(r[e]=n)&&(e==="loading"&&(t[Et]=n),n===null?t.removeAttribute(e):t.setAttribute(e,n))}function Dt(t,e,n){if(e in t){var r=t[e],a=typeof r=="boolean"&&n===""?!0:n;(typeof r!="object"||r!==a)&&(t[e]=a)}else _e(t,e,n)}function We(t,e,n,r,a){var u=a.length!==0,s=e||{},o=t.tagName==="OPTION";for(var f in e)f in n||(n[f]=null);u&&!n.class&&(n.class="");var i=Me.get(t.nodeName);i||Me.set(t.nodeName,i=qt(t));var m=t.__attributes??(t.__attributes={}),d=[];for(const l in n){let v=n[l];if(o&&l==="value"&&v==null){t.value=t.__value="",s[l]=v;continue}var _=s[l];if(v!==_){s[l]=v;var g=l[0]+l[1];if(g!=="$$")if(g==="on"){const w={},c="$$"+l;let b=l.slice(2);var h=ft.includes(b);if(ut(b)&&(b=b.slice(0,-7),w.capture=!0),!h&&_){if(v!=null)continue;t.removeEventListener(b,s[c],w),s[c]=null}if(v!=null)if(h)t[`__${b}`]=v,mt([b]);else{let C=function(A){s[l].call(this,A)};e?s[c]=ke(b,t,C,w):d.push([l,v,()=>s[c]=ke(b,t,C,w)])}}else if(v==null)m[l]=null,t.removeAttribute(l);else if(l==="style")t.style.cssText=v+"";else if(l==="autofocus")xt(t,!!v);else if(l==="__value"||l==="value")t.value=t[l]=t.__value=v;else{var y=l;r&&(y=y.toLowerCase(),y=dt[y]||y),i.includes(y)?T&&(y==="src"||y==="href"||y==="srcset")||(t[y]=v):typeof v!="function"&&(u&&y==="class"&&(v&&(v+=" "),v+=a),_e(t,y,v))}}}return e||qe(()=>{if(t.isConnected)for(const[l,v,w]of d)s[l]===v&&w()}),s}function oe(t,e,n,r){if(t.tagName.includes("-")){for(var a in e)a in n||(n[a]=null);for(a in n)Dt(t,a,n[a]);return n}return We(t,e,n,t.namespaceURI!==Ve,r)}var Pt=["width","height"],Me=new Map;function qt(t){for(var e=[],n,r=Ee(t);r.constructor.name!=="Element";){n=Tt(r);for(var a in n)n[a].set&&!Pt.includes(a)&&e.push(a);r=Ee(r)}return e}function S(t,e){var u;var n=(u=t.$$events)==null?void 0:u[e.type],r=Oe(n)?n.slice():n==null?[]:[n];for(var a of r)a.call(this,e)}function F(t){var n;var e=(n=t.$$slots)==null?void 0:n.default;return e===!0?t.children:e}const Bt=!0,wn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Bt},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-svelte v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Wt=ht("<svg><!><!></svg>");function He(t,e){const n=D(e,["children","$$slots","$$events","$$legacy"]),r=D(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Z(e,!1);let a=k(e,"name",0,void 0),u=k(e,"color",0,"currentColor"),s=k(e,"size",0,24),o=k(e,"strokeWidth",0,2),f=k(e,"absoluteStrokeWidth",0,!1),i=k(e,"iconNode",8,()=>[]);const m=(...y)=>y.filter((l,v,w)=>!!l&&w.indexOf(l)===v).join(" ");ee();var d=Wt();let _;var g=V(d);Rt(g,1,i,Lt,(y,l,v)=>{let w=()=>Q(Q(l))[0],c=()=>Q(Q(l))[1];var b=I(),C=p(b);ie(C,w,!0,(A,R)=>{let J;j(()=>J=oe(A,J,{...c()},""))}),N(y,b)});var h=M(g);B(h,F(e),{}),K(d),j(()=>_=We(d,_,{...Ft,...r,width:s(),height:s(),stroke:u(),"stroke-width":f()?Number(o())*24/Number(s()):o(),class:m("lucide-icon","lucide",a()?`lucide-${a()}`:"",n.class)},!1,"")),N(t,d),$()}function Ht(t,e){const n=D(e,["children","$$slots","$$events","$$legacy"]);He(t,me({name:"sun"},()=>n,{iconNode:[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]],children:(a,u)=>{var s=I(),o=p(s);B(o,F(e),{}),N(a,s)},$$slots:{default:!0},$$legacy:!0}))}function Ut(t,e){const n=D(e,["children","$$slots","$$events","$$legacy"]);He(t,me({name:"moon"},()=>n,{iconNode:[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]],children:(a,u)=>{var s=I(),o=p(s);B(o,F(e),{}),N(a,s)},$$slots:{default:!0},$$legacy:!0}))}function Yt(t,e){const n=[];return e.builders.forEach(r=>{const a=r.action(t);a&&n.push(a)}),{destroy:()=>{n.forEach(r=>{r.destroy&&r.destroy()})}}}function jt(t){const e={};return t.forEach(n=>{Object.keys(n).forEach(r=>{r!=="action"&&(e[r]=n[r])})}),e}function Jt(t,e){const n=D(e,["children","$$slots","$$events","$$legacy"]),r=D(n,["href","type","builders","el"]);Z(e,!1);let a=k(e,"href",8,()=>{}),u=k(e,"type",8,()=>{}),s=k(e,"builders",8,()=>[]),o=k(e,"el",12,()=>{});const f={"data-button-root":""};ee();var i=I(),m=p(i);se(m,()=>s()&&s().length,d=>{var _=I(),g=p(_);ie(g,()=>a()?"a":"button",!1,(h,y)=>{Te(h,c=>o(c),()=>o());let l;j(()=>l=oe(h,l,{type:a()?void 0:u(),href:a(),tabindex:"0",...jt(s()),...r,...f},"")),E("click",h,function(c){S.call(this,e,c)}),E("change",h,function(c){S.call(this,e,c)}),E("keydown",h,function(c){S.call(this,e,c)}),E("keyup",h,function(c){S.call(this,e,c)}),E("mouseenter",h,function(c){S.call(this,e,c)}),E("mouseleave",h,function(c){S.call(this,e,c)}),E("mousedown",h,function(c){S.call(this,e,c)}),E("pointerdown",h,function(c){S.call(this,e,c)}),E("mouseup",h,function(c){S.call(this,e,c)}),E("pointerup",h,function(c){S.call(this,e,c)}),Ot(h,(c,b)=>Yt(c,b),()=>({builders:s()}));var v=I(),w=p(v);B(w,F(e),{}),N(y,v)}),N(d,_)},d=>{var _=I(),g=p(_);ie(g,()=>a()?"a":"button",!1,(h,y)=>{Te(h,c=>o(c),()=>o());let l;j(()=>l=oe(h,l,{type:a()?void 0:u(),href:a(),tabindex:"0",...r,...f},"")),E("click",h,function(c){S.call(this,e,c)}),E("change",h,function(c){S.call(this,e,c)}),E("keydown",h,function(c){S.call(this,e,c)}),E("keyup",h,function(c){S.call(this,e,c)}),E("mouseenter",h,function(c){S.call(this,e,c)}),E("mouseleave",h,function(c){S.call(this,e,c)}),E("mousedown",h,function(c){S.call(this,e,c)}),E("pointerdown",h,function(c){S.call(this,e,c)}),E("mouseup",h,function(c){S.call(this,e,c)}),E("pointerup",h,function(c){S.call(this,e,c)});var v=I(),w=p(v);B(w,F(e),{}),N(y,v)}),N(d,_)}),N(t,i),$()}function Ue(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(n=Ue(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Qt(){for(var t,e,n=0,r="",a=arguments.length;n<a;n++)(t=arguments[n])&&(e=Ue(t))&&(r&&(r+=" "),r+=e);return r}function Gt(...t){return pt(Qt(t))}function Xt(t,e){const n=D(e,["children","$$slots","$$events","$$legacy"]),r=D(n,["class","variant","size","builders"]);Z(e,!1);let a=k(e,"class",8,()=>{}),u=k(e,"variant",0,"default"),s=k(e,"size",0,"default"),o=k(e,"builders",8,()=>[]);ee();var f=At(()=>Gt(Ct({variant:u(),size:s(),className:a()})));Jt(t,me({get builders(){return o()},get class(){return ae(f)},type:"button"},()=>r,{$$events:{click(i){S.call(this,e,i)},keydown(i){S.call(this,e,i)}},children:(i,m)=>{var d=I(),_=p(d);B(_,F(e),{}),N(i,d)},$$slots:{default:!0},$$legacy:!0})),$()}let Ie,Le;function Ye(t){if(typeof document>"u")return;clearTimeout(Ie),clearTimeout(Le);const e=document.createElement("style"),n=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);e.appendChild(n);const r=()=>document.head.appendChild(e),a=()=>document.head.removeChild(e);if(typeof window.getComputedStyle<"u"){r(),t(),window.getComputedStyle(e).opacity,a();return}if(typeof window.requestAnimationFrame<"u"){r(),t(),window.requestAnimationFrame(a);return}r(),Ie=window.setTimeout(()=>{t(),Le=window.setTimeout(a,120)},120)}function ze(t){return t.filter(e=>e.length>0)}const je={getItem:t=>null,setItem:(t,e)=>{}},P=typeof document<"u",Zt=["dark","light","system"],le=z("mode-watcher-mode"),ce=z("mode-watcher-theme"),ye=en(),ue=nn(),Je=z(void 0),Qe=tn(),be=z(!0),Ge=z([]),Xe=z([]),Ze=rn(),$t=an();function en(){const t="system",e=P?localStorage:je,n=e.getItem(a());let r=fe(n)?n:t;function a(){return ge(le)}const{subscribe:u,set:s}=z(r,()=>{if(!P)return;const f=i=>{if(i.key!==a())return;const m=i.newValue;fe(m)?s(r=m):s(r=t)};return addEventListener("storage",f),()=>removeEventListener("storage",f)});function o(f){s(r=f),e.setItem(a(),r)}return{subscribe:u,set:o}}function tn(){const t=P?localStorage:je,e=t.getItem(r());let n=e??"";function r(){return ge(ce)}const{subscribe:a,set:u}=z(n,()=>{if(!P)return;const o=f=>{if(f.key!==r())return;const i=f.newValue;u(i===null?n="":n=i)};return addEventListener("storage",o),()=>removeEventListener("storage",o)});function s(o){u(n=o),t.setItem(r(),n)}return{subscribe:a,set:s}}function nn(){let e=!0;const{subscribe:n,set:r}=z(void 0,()=>{if(!P)return;const s=f=>{e&&r(f.matches?"light":"dark")},o=window.matchMedia("(prefers-color-scheme: light)");return o.addEventListener("change",s),()=>o.removeEventListener("change",s)});function a(){if(!P)return;const s=window.matchMedia("(prefers-color-scheme: light)");r(s.matches?"light":"dark")}function u(s){e=s}return{subscribe:n,query:a,tracking:u}}function rn(){const{subscribe:t}=Be([ye,ue,Je,be,Ge,Xe],([e,n,r,a,u,s])=>{if(!P)return;const o=e==="system"?n:e,f=ze(u),i=ze(s);function m(){const d=document.documentElement,_=document.querySelector('meta[name="theme-color"]');o==="light"?(f.length&&d.classList.remove(...f),i.length&&d.classList.add(...i),d.style.colorScheme="light",_&&r&&_.setAttribute("content",r.light)):(i.length&&d.classList.remove(...i),f.length&&d.classList.add(...f),d.style.colorScheme="dark",_&&r&&_.setAttribute("content",r.dark))}return a?Ye(m):m(),o});return{subscribe:t}}function an(){const{subscribe:t}=Be([Qe,be],([e,n])=>{if(!P)return;function r(){document.documentElement.setAttribute("data-theme",e)}return n?Ye(r):r(),e});return{subscribe:t}}function fe(t){return typeof t!="string"?!1:Zt.includes(t)}function te(){ye.set(ge(Ze)==="dark"?"light":"dark")}function sn(t){ye.set(t)}function on(t){Qe.set(t)}function Re({defaultMode:t,themeColors:e,darkClassNames:n=["dark"],lightClassNames:r=[],defaultTheme:a=""}){const u=document.documentElement,s=localStorage.getItem("mode-watcher-mode")||t,o=localStorage.getItem("mode-watcher-theme")||a,f=s==="light"||s==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(f?(n.length&&u.classList.remove(...n),r.length&&u.classList.add(...r)):(r.length&&u.classList.remove(...r),n.length&&u.classList.add(...n)),u.style.colorScheme=f?"light":"dark",e){const i=document.querySelector('meta[name="theme-color"]');i&&i.setAttribute("content",s==="light"?e.light:e.dark)}o&&(u.setAttribute("data-theme",o),localStorage.setItem("mode-watcher-theme",o)),localStorage.setItem("mode-watcher-mode",s)}var ln=G('<meta name="theme-color">'),cn=G("<!> <!>",1);function un(t,e){Z(e,!1);const n=It(),r=()=>Ae(le,"$modeStorageKeyStore",n),a=()=>Ae(ce,"$themeStorageKeyStore",n),u=Pe();let s=k(e,"track",0,!0),o=k(e,"defaultMode",0,"system"),f=k(e,"themeColors",8,()=>{}),i=k(e,"disableTransitions",0,!0),m=k(e,"darkClassNames",8,()=>["dark"]),d=k(e,"lightClassNames",8,()=>[]),_=k(e,"defaultTheme",0,""),g=k(e,"nonce",0,""),h=k(e,"themeStorageKey",0,"mode-watcher-theme"),y=k(e,"modeStorageKey",0,"mode-watcher-mode");Mt(()=>{const v=Ze.subscribe(()=>{}),w=$t.subscribe(()=>{});ue.tracking(s()),ue.query();const c=localStorage.getItem(r());sn(fe(c)?c:o());const b=localStorage.getItem(a());return on(b||_()),()=>{v(),w()}});const l={defaultMode:o(),themeColors:f(),darkClassNames:m(),lightClassNames:d(),defaultTheme:_(),modeStorageKey:y(),themeStorageKey:h()};q(()=>O(i()),()=>{be.set(i())}),q(()=>O(f()),()=>{Je.set(f())}),q(()=>O(m()),()=>{Ge.set(m())}),q(()=>O(d()),()=>{Xe.set(d())}),q(()=>O(y()),()=>{le.set(y())}),q(()=>O(h()),()=>{ce.set(h())}),q(()=>O(g()),()=>{De(u,typeof window>"u"?g():"")}),Nt(),ee(),Ke(v=>{var w=cn(),c=p(w);se(c,f,C=>{var A=ln();j(()=>_e(A,"content",f().dark)),N(C,A)});var b=M(M(c,!0));se(b,()=>ae(u),C=>{var A=I(),R=p(A);Ce(R,()=>`<script nonce=${ae(u)}>(`+Re.toString()+")("+JSON.stringify(l)+");<\/script>",!1,!1),N(C,A)},C=>{var A=I(),R=p(A);Ce(R,()=>"<script>("+Re.toString()+")("+JSON.stringify(l)+");<\/script>",!1,!1),N(C,A)}),N(v,w)}),$()}var fn=G('<!> <!> <span class="sr-only">Toggle theme</span>',1),dn=G('<!> <nav class="transition-all dark:border-white  dark:rotate-0 dark:scale-100 svelte-tkq3og"><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-16 items-center justify-between"><div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"><p class="font-mono font-bold">Version Forge</p></div> <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"><div class="relative ml-3"><div><!></div></div></div></div></div></nav> <!>',1);function kn(t,e){var n=dn();Ke(g=>{vt.title="Version Forge"});var r=p(n);un(r,{$$legacy:!0});var a=M(M(r,!0)),u=V(a),s=V(u),o=V(s);V(o),K(o);var f=M(M(o,!0)),i=V(f),m=V(i),d=V(m);Xt(d,{variant:"outline",size:"icon",class:"inset-3",$$events:{click(...g){return te==null?void 0:te.apply(this,g)}},children:(g,h)=>{var y=fn(),l=p(y);Ht(l,{class:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",$$legacy:!0});var v=M(M(l,!0));Ut(v,{class:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",$$legacy:!0}),M(M(v,!0)),N(g,y)},$$slots:{default:!0},$$legacy:!0}),K(m),K(i),K(f),K(s),K(u),K(a);var _=M(M(a,!0));B(_,F(e),{}),N(t,n)}export{kn as component,wn as universal};

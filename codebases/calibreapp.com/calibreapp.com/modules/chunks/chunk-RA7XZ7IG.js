import{c as We}from"./chunk-ZK4YBVUK.js";import{a as Ve}from"./chunk-URMVBSCF.js";import{a as Ln}from"./chunk-M3VXQ3H4.js";import{c as ye}from"./chunk-JXNVBN57.js";import{a as Ue}from"./chunk-4JRWSVEX.js";import{c as ce}from"./chunk-FJD4SS3V.js";import{a as $n}from"./chunk-TKNWVBCA.js";import{a as _n}from"./chunk-V454E5QD.js";import{m as Ae}from"./chunk-4DDSFSZM.js";import{a as $e}from"./chunk-5ZVMZG6E.js";import{a as X,b as ue,c as be,d as On,f as C,i as $}from"./chunk-ORNWO27Z.js";var un=On(($t,an)=>{var en=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],Ie=en.join(","),Me=typeof Element=="undefined"?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function Se(e,n){n=n||{};var t=[],r=[],o=e.querySelectorAll(Ie);n.includeContainer&&Me.call(e,Ie)&&(o=Array.prototype.slice.apply(o),o.unshift(e));var a,u,l;for(a=0;a<o.length;a++)u=o[a],!!nn(u)&&(l=rn(u),l===0?t.push(u):r.push({documentOrder:a,tabIndex:l,node:u}));var s=r.sort(Hn).map(function(v){return v.node}).concat(t);return s}Se.isTabbable=jn;Se.isFocusable=Kn;function nn(e){return!(!tn(e)||Yn(e)||rn(e)<0)}function jn(e){if(!e)throw new Error("No node provided");return Me.call(e,Ie)===!1?!1:nn(e)}function tn(e){return!(e.disabled||Xn(e)||Jn(e))}var Fn=en.concat("iframe").join(",");function Kn(e){if(!e)throw new Error("No node provided");return Me.call(e,Fn)===!1?!1:tn(e)}function rn(e){var n=parseInt(e.getAttribute("tabindex"),10);return isNaN(n)?Gn(e)?0:e.tabIndex:n}function Hn(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex}function Gn(e){return e.contentEditable==="true"}function on(e){return e.tagName==="INPUT"}function Xn(e){return on(e)&&e.type==="hidden"}function zn(e){return on(e)&&e.type==="radio"}function Yn(e){return zn(e)&&!Qn(e)}function qn(e){for(var n=0;n<e.length;n++)if(e[n].checked)return e[n]}function Qn(e){if(!e.name)return!0;var n=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),t=qn(n);return!t||t===e}function Jn(e){return e.offsetParent===null||getComputedStyle(e).visibility==="hidden"}an.exports=Se});var p=C($()),Ft=C($e());var fe=C($());var yt=C($()),N=C($()),An=C(Ve()),se=Be()?N.useLayoutEffect:N.useEffect;var Et=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();function Un(e,n){if(e!=null)if(we(e))e(n);else try{e.current=n}catch(t){throw new Error('Cannot assign value "'+n+'" to ref "'+e+'"')}}function Be(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}function le(e,n){var t=(0,N.createContext)(n);return t.displayName=e,t}function z(e){return(0,N.forwardRef)(e)}function Ee(e){return Be()?e?e.ownerDocument:document:null}function we(e){return!!(e&&{}.toString.call(e)=="[object Function]")}function je(e){return typeof e=="string"}function de(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(function(r){return r!=null}).join("--")}function Q(){}var Fe=Q;function Ke(){var e=(0,N.useState)(Object.create(null)),n=e[1];return(0,N.useCallback)(function(){n(Object.create(null))},[])}function te(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,N.useMemo)(function(){return n.every(function(r){return r==null})?null:function(r){n.forEach(function(o){Un(o,r)})}},[].concat(n))}function J(e){var n=(0,N.useRef)(null);return(0,N.useEffect)(function(){n.current=e},[e]),n.current}function O(e,n){return function(t){if(e&&e(t),!t.defaultPrevented)return n(t)}}var xe=!1,Vn=0,He=function(){return++Vn};function Ge(e){var n=e||(xe?He():null),t=(0,fe.useState)(n),r=t[0],o=t[1];return se(function(){r===null&&o(He())},[]),(0,fe.useEffect)(function(){xe===!1&&(xe=!0)},[]),r!=null?String(r):void 0}var B=C($());var re=C($());var Ct=C($()),I=C($()),Wn=C(Ve()),Z=Xe()?I.useLayoutEffect:I.useEffect;var Dt=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();function Bn(e,n){if(e!=null)if(Ce(e))e(n);else try{e.current=n}catch(t){throw new Error('Cannot assign value "'+n+'" to ref "'+e+'"')}}function Xe(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}function Ne(e){return(0,I.forwardRef)(e)}function ze(e){return Xe()?e?e.ownerDocument:document:null}function Ye(e){return typeof e=="boolean"}function Ce(e){return!!(e&&{}.toString.call(e)=="[object Function]")}function qe(){var e=(0,I.useState)(Object.create(null)),n=e[1];return(0,I.useCallback)(function(){n(Object.create(null))},[])}function Qe(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,I.useMemo)(function(){return n.every(function(r){return r==null})?null:function(r){n.forEach(function(o){Bn(o,r)})}},[].concat(n))}var Je=C(Ln()),Ze=function(n){var t=n.children,r=n.type,o=r===void 0?"reach-portal":r,a=(0,re.useRef)(null),u=(0,re.useRef)(null),l=qe();return Z(function(){if(!!a.current){var s=a.current.ownerDocument;return u.current=s==null?void 0:s.createElement(o),s.body.appendChild(u.current),l(),function(){u.current&&u.current.ownerDocument&&u.current.ownerDocument.body.removeChild(u.current)}}},[o,l]),u.current?(0,Je.createPortal)(t,u.current):(0,re.createElement)("span",{ref:a})};var W=C($()),Pt=C($e());function De(e,n,t){var r,o;if(Ye(n))r=n;else{var a;r=(a=n==null?void 0:n.observe)!==null&&a!==void 0?a:!0,o=n==null?void 0:n.onChange}Ce(t)&&(o=t);var u=(0,W.useState)(e.current),l=u[0],s=u[1],v=(0,W.useRef)(!1),m=(0,W.useRef)(!1),d=(0,W.useState)(null),g=d[0],b=d[1],w=(0,W.useRef)(o),f=(0,W.useCallback)(function(y){w.current&&w.current(y)},[]);return Z(function(){w.current=o,e.current!==l&&s(e.current)}),Z(function(){l&&!v.current&&(v.current=!0,b(l.getBoundingClientRect()))},[l]),Z(function(){var y,E=l;if(m.current||(m.current=!0,E=e.current),!E)return i;return y=We(E,function(c){f(c),b(c)}),r&&y.observe(),i;function i(){y&&y.unobserve()}},[r,l,e,f]),g}var U=C(un());function pe(){return pe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pe.apply(this,arguments)}function Zn(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var cn=Ne(function(n,t){return(0,B.createElement)(Ze,null,(0,B.createElement)(et,Object.assign({ref:t},n)))}),et=Ne(function(n,t){var r=n.as,o=r===void 0?"div":r,a=n.targetRef,u=n.position,l=u===void 0?ke:u,s=n.unstable_observableRefs,v=s===void 0?[]:s,m=Zn(n,["as","targetRef","position","unstable_observableRefs"]),d=(0,B.useRef)(null),g=De(d,{observe:!m.hidden}),b=De(a,{observe:!m.hidden}),w=Qe(d,t);return rt(a,d),(0,B.createElement)(o,Object.assign({"data-reach-popover":"",ref:w},m,{style:pe({position:"absolute"},nt.apply(void 0,[l,b,g].concat(v)),m.style)}))});function nt(e,n,t){for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return t?e.apply(void 0,[n,t].concat(o.map(function(u){return u.current}))):{visibility:"hidden"}}function tt(e,n){var t=sn(e,n),r=t.directionUp;return{top:r?e.top-n.height+window.pageYOffset+"px":e.top+e.height+window.pageYOffset+"px"}}var ke=function(n,t){if(!n||!t)return{};var r=sn(n,t),o=r.directionRight;return pe({left:o?n.right-t.width+window.pageXOffset+"px":n.left+window.pageXOffset+"px"},tt(n,t))};function sn(e,n,t,r){t===void 0&&(t=0),r===void 0&&(r=0);var o={top:e.top-n.height<0,right:window.innerWidth<e.left+n.width-t,bottom:window.innerHeight<e.bottom+n.height-r,left:e.left+e.width-n.width<0},a=o.right&&!o.left,u=o.left&&!o.right,l=o.bottom&&!o.top,s=o.top&&!o.bottom;return{directionRight:a,directionLeft:u,directionUp:l,directionDown:s}}function rt(e,n){var t=ze(e.current);function r(i){i.key==="Tab"&&n.current&&(0,U.default)(n.current).length===0||(i.key==="Tab"&&i.shiftKey?v(i)?m(i):d(i)?g(i):w(i)&&y():i.key==="Tab"&&(a()?u(i):l()?s(i):b(i)&&y()))}(0,B.useEffect)(function(){return t.addEventListener("keydown",r),function(){t.removeEventListener("keydown",r)}},[]);function o(){var i=(0,U.default)(t),c=i&&e.current?i.indexOf(e.current):-1,h=i&&i[c+1];return n.current&&n.current.contains(h||null)?!1:h}function a(){return e.current?e.current===t.activeElement:!1}function u(i){var c=n.current&&(0,U.default)(n.current);c&&c[0]&&(i.preventDefault(),c[0].focus())}function l(){var i=n.current?n.current.contains(t.activeElement||null):!1;if(i){var c=n.current&&(0,U.default)(n.current);return Boolean(c&&c[c.length-1]===t.activeElement)}return!1}function s(i){var c=o();c&&(i.preventDefault(),c.focus())}function v(i){if(!!i.shiftKey){var c=o();return i.target===c}}function m(i){var c=n.current&&(0,U.default)(n.current),h=c&&c[c.length-1];h&&(i.preventDefault(),h.focus())}function d(i){var c=n.current&&(0,U.default)(n.current);return c?c.length===0?!1:i.target===c[0]:!1}function g(i){var c;i.preventDefault(),(c=e.current)===null||c===void 0||c.focus()}function b(i){var c=n.current?(0,U.default)(t).filter(function(h){return!n.current.contains(h)}):null;return c?i.target===c[c.length-1]:!1}function w(i){return i.target===(0,U.default)(t)[0]}var f=[];function y(){var i=n.current&&(0,U.default)(n.current);i&&(i.forEach(function(c){f.push([c,c.tabIndex]),c.tabIndex=-1}),t.addEventListener("focusin",E))}function E(){t.removeEventListener("focusin",E),f.forEach(function(i){var c=i[0],h=i[1];c.tabIndex=h})}}var P=C($());function j(){return j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},j.apply(this,arguments)}function ot(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function ln(e,n){n===void 0&&(n={});var t=[];return le(e,j({descendants:t,registerDescendant:Q,unregisterDescendant:Q},n))}function dn(e,n,t){var r=Ke(),o=(0,P.useContext)(n),a=o.registerDescendant,u=o.unregisterDescendant,l=o.descendants,s=t!=null?t:l.findIndex(function(d){return d.element===e.element}),v=J(l),m=l.some(function(d,g){var b;return d.element!==(v==null||(b=v[g])===null||b===void 0?void 0:b.element)});return se(function(){return e.element||r(),a(j({},e,{index:s})),function(){return u(e.element)}},[r,s,a,m,u].concat(Object.values(e))),s}function fn(){return(0,P.useState)([])}function Pe(e){return(0,P.useContext)(e).descendants}function pn(e){var n=e.context,t=e.children,r=e.items,o=e.set,a=(0,P.useCallback)(function(l){var s=l.element,v=l.index,m=ot(l,["element","index"]);!s||o(function(d){var g;if(v!=null)g=[].concat(d,[j({},m,{element:s,index:v})]);else if(d.length===0)g=[].concat(d,[j({},m,{element:s,index:0})]);else if(d.find(function(f){return f.element===s}))g=d;else{var b=d.findIndex(function(f){return!f.element||!s?!1:Boolean(f.element.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_PRECEDING)}),w=j({},m,{element:s,index:b});b===-1?g=[].concat(d,[w]):g=[].concat(d.slice(0,b),[w],d.slice(b))}return g.map(function(f,y){return j({},f,{index:y})})})},[]),u=(0,P.useCallback)(function(l){!l||o(function(s){return s.filter(function(v){return l!==v.element})})},[]);return(0,P.createElement)(n.Provider,{value:(0,P.useMemo)(function(){return{descendants:r,registerDescendant:a,unregisterDescendant:u}},[r,a,u])},t)}function mn(e,n){var t=(0,P.useContext)(e),r=t.descendants,o=n.callback,a=n.currentIndex,u=n.filter,l=n.key,s=l===void 0?"index":l,v=n.orientation,m=v===void 0?"vertical":v,d=n.rotate,g=d===void 0?!0:d,b=n.rtl,w=b===void 0?!1:b,f=a!=null?a:-1;return function(E){if(!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(E.key))return;var i=u?r.filter(u):r;if(u&&(f=i.findIndex(function(V){return V.index===a})),!i.length)return;function c(){var V=f===i.length-1;return V?g?S():i[f]:i[(f+1)%i.length]}function h(){var V=f===0;return V?g?D():i[f]:i[(f-1+i.length)%i.length]}function S(){return i[0]}function D(){return i[i.length-1]}switch(E.key){case"ArrowDown":if(m==="vertical"||m==="both"){E.preventDefault();var A=c();o(s==="option"?A:A[s])}break;case"ArrowUp":if(m==="vertical"||m==="both"){E.preventDefault();var K=h();o(s==="option"?K:K[s])}break;case"ArrowLeft":if(m==="horizontal"||m==="both"){E.preventDefault();var H=(w?c:h)();o(s==="option"?H:H[s])}break;case"ArrowRight":if(m==="horizontal"||m==="both"){E.preventDefault();var M=(w?h:c)();o(s==="option"?M:M[s])}break;case"PageUp":E.preventDefault();var k=(E.ctrlKey?h:S)();o(s==="option"?k:k[s]);break;case"Home":E.preventDefault();var R=S();o(s==="option"?R:R[s]);break;case"PageDown":E.preventDefault();var _=(E.ctrlKey?c:D)();o(s==="option"?_:_[s]);break;case"End":E.preventDefault();var q=D();o(s==="option"?q:q[s]);break}}}function L(){return L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},L.apply(this,arguments)}function ee(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var vn="CLEAR_SELECTION_INDEX",Te="CLICK_MENU_ITEM",me="CLOSE_MENU",it="OPEN_MENU_AT_FIRST_ITEM",Re="OPEN_MENU_AT_INDEX",hn="OPEN_MENU_CLEARED",Oe="SEARCH_FOR_ITEM",Y="SELECT_ITEM_AT_INDEX",gn="SET_BUTTON_ID",oe=ln("MenuDescendantContext"),ne=le("MenuContext",{}),at={buttonId:null,isExpanded:!1,typeaheadQuery:"",selectionIndex:-1},bn=function(n){var t=n.id,r=n.children,o=(0,p.useRef)(null),a=(0,p.useRef)(null),u=(0,p.useRef)(null),l=fn(),s=l[0],v=l[1],m=(0,p.useReducer)(lt,at),d=m[0],g=m[1],b=Ge(t),w=t||de("menu",b),f=(0,p.useRef)(!1),y=(0,p.useRef)([]),E=(0,p.useRef)(!1),i={buttonRef:o,dispatch:g,menuId:w,menuRef:a,popoverRef:u,buttonClickedRef:f,readyToSelect:E,selectCallbacks:y,state:d};return(0,p.useEffect)(function(){d.isExpanded?(window.__REACH_DISABLE_TOOLTIPS=!0,window.requestAnimationFrame(function(){he(a.current)})):window.__REACH_DISABLE_TOOLTIPS=!1},[d.isExpanded]),Fe("menu-button"),(0,p.createElement)(pn,{context:oe,items:s,set:v},(0,p.createElement)(ne.Provider,{value:i},we(r)?r({isExpanded:d.isExpanded,isOpen:d.isExpanded}):r))},yn=z(function(n,t){var r=n.as,o=r===void 0?"button":r,a=n.onKeyDown,u=n.onMouseDown,l=n.id,s=ee(n,["as","onKeyDown","onMouseDown","id"]),v=(0,p.useContext)(ne),m=v.buttonRef,d=v.buttonClickedRef,g=v.menuId,b=v.state,w=b.buttonId,f=b.isExpanded,y=v.dispatch,E=te(m,t),i=Pe(oe),c=(0,p.useMemo)(function(){return i.findIndex(function(D){return!D.disabled})},[i]);(0,p.useEffect)(function(){var D=l!=null?l:g?de("menu-button",g):"menu-button";w!==D&&y({type:gn,payload:D})},[w,y,l,g]);function h(D){switch(D.key){case"ArrowDown":case"ArrowUp":D.preventDefault(),y({type:Re,payload:{index:c}});break;case"Enter":case" ":y({type:Re,payload:{index:c}});break}}function S(D){f||(d.current=!0),!ve(D.nativeEvent)&&y(f?{type:me,payload:{buttonRef:m}}:{type:hn})}return(0,p.createElement)(o,Object.assign({"aria-expanded":f?!0:void 0,"aria-haspopup":!0,"aria-controls":g},s,{ref:E,"data-reach-menu-button":"",id:w||void 0,onKeyDown:O(a,h),onMouseDown:O(u,S),type:"button"}))}),En=z(function(n,t){var r=n.as,o=n.index,a=n.isLink,u=a===void 0?!1:a,l=n.onClick,s=n.onDragStart,v=n.onMouseDown,m=n.onMouseEnter,d=n.onMouseLeave,g=n.onMouseMove,b=n.onMouseUp,w=n.onSelect,f=n.disabled,y=n.valueText,E=ee(n,["as","index","isLink","onClick","onDragStart","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseUp","onSelect","disabled","valueText"]),i=(0,p.useContext)(ne),c=i.buttonRef,h=i.dispatch,S=i.readyToSelect,D=i.selectCallbacks,A=i.state,K=A.selectionIndex,H=A.isExpanded,M=(0,p.useRef)(null),k=(0,p.useState)(y||""),R=k[0],_=k[1],q=(0,p.useCallback)(function(x){x&&(M.current=x,(!y||x.textContent&&R!==x.textContent)&&_(x.textContent))},[R,y]),V=te(t,q),ae=(0,p.useRef)(!1),G=dn({element:M.current,key:R,disabled:f,isLink:u},oe,o),ge=G===K&&!f;D.current[G]=w;function Le(){he(c.current),w&&w(),h({type:Te})}function In(x){u&&!ve(x.nativeEvent)&&(f?x.preventDefault():Le())}function Mn(x){u&&x.preventDefault()}function Sn(x){ve(x.nativeEvent)||(u?ae.current=!0:x.preventDefault())}function kn(x){!ge&&G!=null&&!f&&h({type:Y,payload:{index:G}})}function Pn(x){h({type:vn})}function Tn(){S.current=!0,!ge&&G!=null&&!f&&h({type:Y,payload:{index:G}})}function Rn(x){if(!S.current){S.current=!0;return}ve(x.nativeEvent)||(u?ae.current?ae.current=!1:M.current&&M.current.click():f||Le())}return(0,p.useEffect)(function(){H||(S.current=!1)},[H,S]),(0,p.useEffect)(function(){var x=Ee(M.current),_e=function(){return ae.current=!1};return x.addEventListener("mouseup",_e),function(){return x.removeEventListener("mouseup",_e)}},[]),(0,p.createElement)(r,Object.assign({role:"menuitem",id:Cn(G),tabIndex:-1},E,{ref:V,"aria-disabled":f||void 0,"data-reach-menu-item":"","data-selected":ge?"":void 0,"data-valuetext":R,onClick:O(l,In),onDragStart:O(s,Mn),onMouseDown:O(v,Sn),onMouseEnter:O(m,kn),onMouseLeave:O(d,Pn),onMouseMove:O(g,Tn),onMouseUp:O(b,Rn)}))}),ut=z(function(n,t){var r=n.as,o=r===void 0?"div":r,a=ee(n,["as"]);return(0,p.createElement)(En,Object.assign({},a,{ref:t,as:o}))}),wn=z(function(n,t){var r=n.as,o=r===void 0?"div":r,a=n.children,u=n.id,l=n.onKeyDown,s=ee(n,["as","children","id","onKeyDown"]),v=(0,p.useContext)(ne),m=v.menuId,d=v.dispatch,g=v.buttonRef,b=v.menuRef,w=v.selectCallbacks,f=v.state,y=f.isExpanded,E=f.buttonId,i=f.selectionIndex,c=f.typeaheadQuery,h=Pe(oe),S=te(b,t);(0,p.useEffect)(function(){var M=ct(h,c);c&&M!=null&&d({type:Y,payload:{index:M}});var k=window.setTimeout(function(){return c&&d({type:Oe,payload:""})},1e3);return function(){return window.clearTimeout(k)}},[d,h,c]);var D=J(h.length),A=J(h[i]),K=J(i);(0,p.useEffect)(function(){i>h.length-1?d({type:Y,payload:{index:h.length-1}}):D!==h.length&&i>-1&&A&&K===i&&h[i]!==A&&d({type:Y,payload:{index:h.findIndex(function(M){return M.key===A.key})}})},[d,h,D,A,K,i]);var H=O(function(k){var R=k.key;if(!!y)switch(R){case"Enter":case" ":var _=h.find(function(V){return V.index===i});_&&(_.isLink&&_.element?_.element.click():(k.preventDefault(),he(g.current),w.current[_.index]&&w.current[_.index](),d({type:Te})));break;case"Escape":he(g.current),d({type:me,payload:{buttonRef:g}});break;case"Tab":k.preventDefault();break;default:if(je(R)&&R.length===1){var q=c+R.toLowerCase();d({type:Oe,payload:q})}break}},mn(oe,{currentIndex:i,orientation:"vertical",rotate:!1,filter:function(k){return!k.disabled},callback:function(k){d({type:Y,payload:{index:k}})},key:"index"}));return(0,p.createElement)(o,Object.assign({"aria-activedescendant":Cn(i)||void 0,"aria-labelledby":E||void 0,role:"menu",tabIndex:-1},s,{ref:S,"data-reach-menu-items":"",id:m,onKeyDown:O(l,H)}),a)}),xn=z(function(n,t){var r=n.as,o=r===void 0?"a":r,a=n.component,u=n.onSelect,l=ee(n,["as","component","onSelect"]);return a&&console.warn("[@reach/menu-button]: Please use the `as` prop instead of `component`."),(0,p.createElement)("div",{role:"none",tabIndex:-1},(0,p.createElement)(En,Object.assign({},l,{ref:t,"data-reach-menu-link":"",as:o,isLink:!0,onSelect:u||Q})))});var Nn=z(function(n,t){var r=n.as,o=r===void 0?"div":r,a=n.children,u=n.portal,l=u===void 0?!0:u,s=n.position,v=ee(n,["as","children","portal","position"]),m=(0,p.useContext)(ne),d=m.buttonRef,g=m.buttonClickedRef,b=m.dispatch,w=m.menuRef,f=m.popoverRef,y=m.state.isExpanded,E=te(f,t);(0,p.useEffect)(function(){var c=Ee(f.current);function h(S){g.current?g.current=!1:st(f.current,S.target)||b({type:me,payload:{buttonRef:d}})}return c.addEventListener("mousedown",h),function(){c.removeEventListener("mousedown",h)}},[g,d,b,w,f]);var i=L({ref:E,"data-reach-menu":"","data-reach-menu-popover":"",hidden:!y,children:a},v);return l?(0,p.createElement)(cn,Object.assign({},i,{as:o,targetRef:d,position:s})):(0,p.createElement)(o,Object.assign({},i))});function ct(e,n){if(n===void 0&&(n=""),!n)return null;var t=e.find(function(r){var o,a,u;return r.disabled?!1:(o=r.element)===null||o===void 0||(a=o.dataset)===null||a===void 0||(u=a.valuetext)===null||u===void 0?void 0:u.toLowerCase().startsWith(n)});return t?e.indexOf(t):null}function Cn(e){var n=(0,p.useContext)(ne),t=n.menuId;return e!=null&&e>-1?de("option-"+e,t):void 0}function ve(e){return e.which===3||e.button===2}function he(e){e&&e.focus()}function st(e,n){return!!(e&&e.contains(n))}function lt(e,n){switch(n===void 0&&(n={}),n.type){case Te:return L({},e,{isExpanded:!1,selectionIndex:-1});case me:return L({},e,{isExpanded:!1,selectionIndex:-1});case it:return L({},e,{isExpanded:!0,selectionIndex:0});case Re:return L({},e,{isExpanded:!0,selectionIndex:n.payload.index});case hn:return L({},e,{isExpanded:!0,selectionIndex:-1});case Y:return n.payload.index>=0?L({},e,{selectionIndex:n.payload.max!=null?Math.min(Math.max(n.payload.index,0),n.payload.max):Math.max(n.payload.index,0)}):e;case vn:return L({},e,{selectionIndex:-1});case gn:return L({},e,{buttonId:n.payload});case Oe:return typeof n.payload!="undefined"?L({},e,{typeaheadQuery:n.payload}):e;default:return e}}var ie=C($()),F=C(_n());var T=C($n());var dt={sm:{min:"200px",max:"350px"},md:{min:"290px",max:"350px"},lg:{min:"500px",max:"500px"}},ft=({mobile:e,targetRect:n,popoverRect:t})=>{let r=ke(n,t),o=`${parseInt(r.top,10)+15}px`;return e?ue(X({},r),{top:o,left:0,right:0,bottom:0,overflowY:"scroll",zIndex:10}):ue(X({},r),{top:o})},tr=(0,F.default)(yn)`
  appearance: none;
  border: 0;
  background: none;
  line-height: 0;
  outline: 0;
  padding: 0;
`,Dn=(0,F.default)(ce)`
  max-width: 100%;
  min-width: 100%;
  outline: 0;
  position: relative;
  z-index: 4;

  [role='menu'] {
    outline: 0;
  }

  ${Ue(0)`
    min-width: ${({min:e})=>e};
    max-width: ${({max:e})=>e};
  `};
  ${T.space}
`;Dn.defaultProps={borderRadius:"3px",boxShadow:"menu",backgroundColor:"white",width:"100%"};var pt=o=>{var a=o,{children:e,level:n,mobile:t}=a,r=be(a,["children","level","mobile"]);return ie.default.createElement(Nn,{position:(u,l)=>ft({mobile:t,targetRect:u,popoverRect:l})},ie.default.createElement(Dn,X(X({},dt[n]),r),ie.default.createElement(wn,null,e)))};pt.defaultProps={level:"md",mobile:!1};var mt=(0,F.default)(ce)`
  position: relative;

  &:last-of-type {
    border-bottom: 0;
  }
`;mt.defaultProps={borderBottom:"1px solid",borderColor:"grey100",p:3};var rr=F.default.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 76.56%
  );
  bottom: 0;
  content: '';
  display: block;
  height: 30px;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1;
`,vt=(0,F.default)(ce)`
  max-height: ${({maxHeight:e})=>e};
  overflow-y: scroll;
  position: relative;
`;vt.defaultProps={maxHeight:"200px"};var or=F.default.div`
  position: relative;
`,ht=t=>{var r=t,{children:e}=r,n=be(r,["children"]);return ie.default.createElement(ye,X({},n),e)};ht.defaultProps=ue(X({},ye.defaultProps),{as:"h3",level:"xs",color:"grey500"});var gt=(0,F.default)(xn)`
  border: 1px solid transparent;
  border-radius: 3px;
  align-items: center;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  ${T.buttonStyle}
  ${T.border}
  ${T.space}
  ${T.shadow}
  ${T.typography}
  ${T.layout}
`;gt.defaultProps={forwardedAs:Ae,variant:"tertiary",fontSize:0,fontWeight:"600",p:"12px 12px"};var ir=bn;export{ut as a,xn as b,tr as c,pt as d,mt as e,rr as f,vt as g,or as h,ht as i,gt as j,ir as k};
//# sourceMappingURL=chunk-RA7XZ7IG.js.map
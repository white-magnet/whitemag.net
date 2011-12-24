/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());
/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * Digitized data (C) 2004 Agfa Monotype Corporation. Neo Sans(TM) is a trademark
 * of Agfa Monotype Corporation and may be registered in certain jurisdictions. 
 * All rights reserved. Neo Sans is designed by Sebastian Lester.
 * 
 * Trademark:
 * Please refer to the Copyright section for the font trademark attribution
 * notices.
 * 
 * Manufacturer:
 * Digitized data (C) Agfa Monotype Corporation. Neo Sans(TM) is a trademark of
 * Agfa Monotype Corporation and may be registered in certain jurisdictions
 */
Cufon.registerFont({"w":217,"face":{"font-family":"NeoSans","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"2 0 5 6 2 0 0 2 0 4","ascent":"288","descent":"-72","x-height":"3","bbox":"-13.3675 -307.937 285.024 76","underline-thickness":"18","underline-position":"-18","stemh":"26","stemv":"23","unicode-range":"U+0020-U+007D"},"glyphs":{" ":{"w":88},"$":{"d":"190,-69v0,31,-14,63,-66,70v-1,20,9,48,-24,41v-13,-2,-5,-26,-7,-39v-21,0,-38,-4,-52,-6v-11,-2,-4,-12,-6,-21v0,-4,3,-6,7,-6v45,7,124,8,114,-39v0,-52,-128,-71,-128,-137v0,-37,24,-58,65,-63v1,-20,-7,-44,24,-38v13,3,5,24,7,37v19,1,41,3,53,5v9,1,5,12,6,21v0,4,-2,6,-7,6v-38,-2,-121,-15,-115,32v7,49,143,75,129,137"},"%":{"d":"270,-89v0,50,-7,92,-49,92v-42,0,-48,-43,-48,-92v0,-40,18,-59,48,-59v30,0,49,19,49,59xm213,-267v7,1,25,-4,19,6r-150,255v-3,11,-19,8,-29,5v46,-90,102,-172,151,-260v3,-5,5,-6,9,-6xm113,-212v0,49,-6,92,-48,92v-42,0,-49,-42,-49,-92v0,-40,19,-58,49,-58v30,0,48,18,48,58xm221,-18v27,0,26,-40,26,-71v0,-27,-10,-38,-26,-38v-27,0,-26,40,-26,71v0,27,10,38,26,38xm65,-141v27,0,26,-40,26,-71v0,-27,-10,-38,-26,-38v-27,0,-26,40,-26,71v0,27,10,38,26,38","w":285},"&":{"d":"229,-8v3,2,2,8,-2,8v-26,4,-38,-8,-49,-22v-43,40,-159,37,-159,-44v0,-30,16,-48,52,-71v-32,-36,-40,-57,-40,-76v0,-38,30,-57,76,-57v41,0,72,19,71,60v5,24,-26,52,-65,78r65,70v11,-18,14,-41,14,-68v0,-9,13,-5,21,-6v6,0,8,4,7,11v0,31,-8,61,-23,83xm95,-152v30,-18,60,-37,53,-61v0,-24,-16,-33,-41,-33v-28,0,-48,8,-47,36v-3,11,10,32,35,58xm161,-41r-72,-76v-30,19,-37,28,-37,54v0,51,84,49,109,22","w":244},"(":{"d":"101,-268v-62,91,-65,250,0,340v-4,5,-24,6,-29,-1v-66,-79,-66,-257,0,-338v5,-7,22,-5,29,-1","w":109},")":{"d":"14,72v64,-90,63,-250,0,-340v4,-5,24,-6,29,1v66,79,66,258,0,338v-5,6,-22,5,-29,1","w":109},",":{"d":"35,-46v9,1,29,-4,25,6r-27,68v-1,10,-21,10,-26,3r21,-71v1,-5,3,-6,7,-6","w":77},"-":{"d":"96,-119v11,1,10,27,0,27r-72,0v-10,1,-7,-11,-7,-20v0,-4,3,-7,7,-7r72,0","w":119},".":{"d":"54,-41v-1,21,8,48,-24,41v-13,-3,-7,-27,-7,-41v0,-10,14,-6,24,-7v4,0,7,3,7,7","w":77},"\/":{"d":"90,-260v2,-12,33,-10,30,0r-82,253v0,11,-26,10,-30,2","w":127},"0":{"d":"197,-109v0,80,-34,112,-88,112v-54,0,-88,-32,-88,-112r0,-49v0,-80,34,-112,88,-112v54,0,88,32,88,112r0,49xm109,-25v50,0,56,-67,56,-133v0,-61,-22,-84,-56,-84v-50,0,-55,68,-55,133v0,61,21,84,55,84"},"1":{"d":"134,-7v0,11,-16,6,-26,7v-4,0,-6,-3,-6,-7r0,-227v-18,7,-33,16,-52,22v-5,-2,-6,-24,1,-27v26,-9,41,-28,76,-28v4,0,7,2,7,6r0,254"},"2":{"d":"32,-244v-3,-35,46,-24,71,-26v102,-9,110,92,40,134v-39,23,-96,56,-85,108r121,0v10,-1,6,13,7,22v0,4,-3,6,-7,6r-143,0v-13,-1,-5,-24,-7,-36v-6,-52,50,-94,91,-119v31,-19,37,-29,37,-51v0,-49,-75,-37,-119,-31v-4,0,-6,-3,-6,-7"},"3":{"d":"30,-243v-3,-35,40,-25,68,-27v55,-4,92,18,90,75v0,24,-13,45,-35,56v28,16,35,36,35,64v0,78,-86,88,-151,70v-10,0,-11,-24,-1,-25v53,6,118,17,118,-52v0,-19,-9,-44,-42,-44r-66,0v-9,0,-5,-11,-6,-19v0,-4,2,-7,6,-7r66,0v37,-1,42,-24,42,-48v0,-53,-71,-45,-118,-37v-4,0,-6,-2,-6,-6"},"4":{"d":"197,-99v11,1,10,29,0,28r-31,0r0,64v0,12,-17,6,-27,7v-4,0,-6,-3,-6,-7r0,-64r-104,0v-21,3,-19,-29,-11,-41r107,-150v4,-7,38,-10,41,2r0,161r31,0xm133,-99r-2,-125r-87,123v24,6,61,0,89,2"},"5":{"d":"190,-87v0,83,-80,103,-155,83v-9,0,-7,-11,-7,-20v0,-5,2,-6,7,-6v61,11,129,11,122,-57v7,-50,-61,-50,-118,-48v-3,0,-6,-3,-6,-6r10,-120v0,-4,3,-6,7,-6r124,0v10,-1,6,12,7,21v0,4,-3,6,-7,6r-103,0r-6,78v72,-2,125,11,125,75"},"6":{"d":"116,-270v34,0,56,-1,70,13v0,9,3,22,-9,20v-18,-4,-38,-6,-61,-6v-57,0,-62,35,-62,84v62,-15,143,-11,143,70v0,57,-29,92,-88,92v-54,0,-87,-32,-87,-103r0,-63v0,-77,32,-107,94,-107xm109,-24v34,1,56,-18,55,-67v0,-61,-66,-51,-110,-43v-4,61,9,119,55,110"},"7":{"d":"165,-267v30,0,31,22,22,41r-103,221v-4,9,-19,3,-30,5v-6,0,-6,-5,-4,-9r109,-228v-36,-6,-86,0,-126,-2v-10,0,-7,-13,-7,-22v0,-4,3,-6,7,-6r132,0"},"8":{"d":"198,-81v2,59,-38,85,-91,84v-50,0,-90,-27,-87,-84v0,-22,12,-46,35,-59v-24,-13,-35,-32,-34,-59v0,-51,38,-72,90,-71v50,0,88,22,87,74v0,24,-12,44,-35,56v23,13,35,37,35,59xm98,-153v42,0,68,-13,68,-46v0,-30,-21,-45,-59,-44v-37,0,-56,15,-55,47v0,22,13,43,46,43xm107,-25v41,1,59,-19,59,-56v0,-28,-26,-50,-68,-46v-35,4,-45,25,-45,52v0,31,18,50,54,50"},"9":{"d":"193,-105v8,105,-76,120,-156,101v-11,0,-7,-10,-8,-20v0,-5,3,-8,8,-7v18,4,39,6,62,6v58,0,62,-35,62,-84v-62,15,-143,11,-143,-70v0,-57,29,-91,88,-91v54,0,87,31,87,102r0,63xm161,-134v4,-60,-9,-118,-55,-109v-35,-1,-57,17,-56,66v0,62,67,52,111,43"},"@":{"d":"143,-175v18,0,49,-3,54,14r-11,113v45,-6,52,-39,52,-84v0,-45,-29,-83,-88,-83v-92,-2,-111,70,-112,157v0,43,29,77,91,77v18,1,41,-5,55,0v-1,7,3,18,-6,17v-84,14,-170,-17,-163,-105v7,-95,34,-167,136,-167v74,0,111,50,111,104v0,88,-45,111,-131,113v-58,1,-62,-47,-54,-99v6,-37,27,-57,66,-57xm165,-147v-30,-5,-57,-2,-58,30v-1,33,-17,79,33,72v5,0,11,0,16,-1","w":276},"A":{"d":"217,-8v2,12,-17,7,-27,8v-3,0,-5,-2,-6,-5r-23,-83r-94,0r-23,83v-2,9,-37,8,-33,-3r66,-235v14,-38,62,-39,73,0xm154,-117r-33,-118v-1,-9,-12,-9,-14,0r-33,118r80,0","w":227},"B":{"d":"28,-254v5,-24,37,-16,69,-16v59,0,105,15,105,75v0,27,-14,48,-38,57v27,10,40,31,40,64v0,81,-93,82,-164,73v-8,-1,-12,-4,-12,-13r0,-240xm117,-152v45,-1,53,-20,53,-49v0,-47,-61,-42,-109,-40r0,89r56,0xm61,-27v54,4,110,6,110,-53v0,-24,-12,-46,-54,-46r-56,0r0,99","w":221},"C":{"d":"184,-9v-13,15,-31,12,-67,12v-44,0,-95,-25,-95,-112r0,-50v4,-116,74,-119,155,-105v10,-1,5,15,6,23v-9,10,-42,1,-66,1v-35,0,-63,20,-63,81r0,50v-1,90,57,86,124,79v9,0,5,13,6,21","w":196},"D":{"d":"28,-257v7,-19,38,-10,73,-13v85,-6,109,62,109,161v0,77,-42,112,-109,112v-35,0,-66,6,-73,-13r0,-247xm177,-109r0,-49v-1,-83,-49,-88,-116,-83r0,215v66,3,116,0,116,-83","w":230},"E":{"d":"175,-27v8,3,5,26,0,28v-14,1,-49,2,-70,2v-50,0,-77,-19,-77,-67r0,-139v-7,-75,81,-69,147,-65v6,2,7,25,0,28v-45,3,-124,-15,-114,37r0,50r110,0v10,0,8,11,8,21v0,4,-4,7,-8,7r-110,0v5,47,-21,98,44,98r70,0","w":198},"F":{"d":"171,-153v11,0,12,28,0,28r-110,0r0,118v0,11,-16,6,-26,7v-4,0,-7,-3,-7,-7r0,-196v-7,-75,81,-69,147,-65v6,2,7,25,0,28v-45,3,-124,-15,-114,37r0,50r110,0","w":198},"G":{"d":"192,-11v0,4,-2,7,-6,8v-81,15,-166,10,-165,-106r0,-49v1,-119,83,-119,165,-107v10,-1,5,15,6,23v0,3,-3,4,-6,4v-68,-3,-134,-18,-132,80r0,49v-1,81,46,88,105,80r0,-103v0,-11,16,-6,26,-7v4,0,7,3,7,7r0,121","w":220},"H":{"d":"217,-7v0,11,-16,6,-26,7v-4,0,-7,-3,-7,-7r0,-120r-123,0r0,120v0,11,-16,6,-26,7v-4,0,-7,-3,-7,-7r0,-253v0,-11,16,-6,26,-7v4,0,7,3,7,7r0,104r123,0r0,-104v0,-11,16,-6,26,-7v4,0,7,3,7,7r0,253","w":244},"I":{"d":"64,-7v0,11,-16,6,-26,7v-4,0,-6,-3,-6,-7r0,-254v0,-11,17,-4,26,-6v4,0,6,2,6,6r0,254","w":96},"J":{"d":"9,65v-18,0,-24,-2,-22,-20v9,-14,53,3,45,-32r0,-274v0,-9,30,-10,32,0r0,274v0,35,-15,52,-55,52","w":92},"K":{"d":"201,-8v3,3,2,8,-3,8v-13,-1,-29,4,-36,-4r-101,-123r0,120v0,11,-16,6,-26,7v-4,0,-7,-3,-7,-7r0,-254v1,-9,30,-10,33,0r0,117r104,-120v6,-5,30,-5,38,0v-34,44,-74,83,-110,126","w":218},"L":{"d":"175,-27v8,2,5,25,0,26v-9,1,-36,4,-70,4v-39,0,-77,-8,-77,-67r0,-196v0,-11,16,-6,26,-7v4,0,7,3,7,7r0,196v-10,52,69,34,114,37","w":185},"M":{"d":"246,-7v0,10,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-215r-52,108v-6,15,-42,15,-49,0r-53,-108r0,215v0,10,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-250v0,-15,39,-15,45,-4r64,127v25,-38,41,-86,64,-127v5,-9,45,-12,45,4r0,250","w":273},"N":{"d":"217,-10v0,15,-37,13,-45,4r-112,-212r0,211v0,10,-27,10,-32,3r0,-253v0,-16,40,-13,45,-3r111,211r1,-212v0,-10,16,-5,25,-6v4,0,7,2,7,6r0,251","w":244},"O":{"d":"216,-111v0,80,-40,114,-97,114v-73,0,-97,-65,-97,-160v0,-80,40,-113,97,-113v57,0,97,33,97,113r0,46xm119,-27v55,0,64,-61,64,-130v0,-60,-24,-83,-64,-83v-55,0,-64,60,-64,129v0,60,24,84,64,84","w":237},"P":{"d":"28,-258v7,-18,42,-12,68,-12v60,0,101,21,101,83v0,73,-64,85,-137,79r0,101v0,11,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-251xm60,-135v57,5,114,-2,105,-57v5,-48,-53,-54,-105,-49r0,106","w":213},"Q":{"d":"216,-157v0,86,-18,157,-81,159v0,21,-3,36,22,36v15,0,34,-5,29,18v0,6,-11,9,-29,9v-42,0,-58,-18,-54,-64v-62,-2,-81,-71,-81,-158v0,-80,40,-113,97,-113v57,0,97,33,97,113xm119,-27v55,0,64,-61,64,-130v0,-60,-24,-83,-64,-83v-55,0,-64,60,-64,129v0,60,24,84,64,84","w":237},"R":{"d":"210,-8v3,3,0,8,-4,8v-12,-2,-27,5,-32,-5r-65,-107r-49,-1r0,106v0,11,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-252v0,-5,3,-7,9,-8v75,-8,164,-7,164,77v0,40,-24,64,-57,73xm60,-141v59,3,108,5,108,-52v0,-50,-57,-49,-108,-46r0,98","w":225},"S":{"d":"180,-69v0,35,-18,72,-89,72v-25,0,-44,-4,-60,-6v-11,-1,-5,-11,-7,-20v9,-15,48,0,67,-4v43,0,55,-17,55,-42v0,-52,-135,-71,-128,-137v-8,-66,86,-69,149,-60v9,1,10,28,0,28v-43,2,-121,-15,-116,32v6,49,142,76,129,137","w":198},"T":{"d":"193,-267v12,1,10,28,0,28r-70,0r0,232v0,11,-17,6,-27,7v-4,0,-6,-3,-6,-7r0,-232r-70,0v-10,1,-6,-13,-7,-22v0,-4,3,-6,7,-6r173,0","w":212},"U":{"d":"211,-97v0,69,-34,100,-92,100v-58,0,-92,-31,-92,-100r0,-164v1,-9,30,-10,33,0r0,164v0,46,14,71,59,71v45,0,59,-24,59,-71r0,-164v1,-9,30,-10,33,0r0,164","w":238},"V":{"d":"186,-262v6,-9,36,-9,33,3r-66,234v-14,40,-63,40,-74,0r-67,-236v1,-10,29,-9,34,-1r63,229v1,10,11,10,14,0","w":231},"W":{"d":"252,-261v4,-11,34,-9,33,1r-40,243v-3,28,-52,24,-59,0r-38,-136v-15,42,-26,91,-37,136v-6,23,-54,29,-58,0r-40,-244v1,-9,31,-11,33,0r36,234v16,-42,27,-93,38,-138v5,-22,51,-23,57,0r38,138","w":297},"X":{"d":"216,-9v2,4,2,9,-4,9v-12,-1,-26,4,-31,-5r-65,-105r-65,105v-5,10,-18,3,-29,5v-6,0,-6,-5,-4,-9r80,-127r-81,-126v2,-9,28,-7,36,-2r64,103r63,-103v5,-5,37,-7,33,5r-78,124","w":232},"Y":{"d":"170,-267v11,1,33,-4,27,9r-56,125v-6,14,-14,21,-20,24r0,102v0,11,-16,6,-26,7v-4,0,-6,-3,-6,-7r0,-102v-6,-3,-14,-10,-20,-24r-56,-129v2,-8,30,-8,34,0v20,41,33,89,58,126v3,0,4,-2,8,-10r50,-116v1,-3,4,-5,7,-5","w":209},"Z":{"d":"189,-30v12,1,10,30,0,30r-139,0v-34,4,-37,-26,-24,-45r130,-191v-36,-6,-84,-2,-124,-2v-11,0,-6,-14,-7,-23v0,-4,3,-6,7,-6r129,0v31,-5,37,26,24,45r-129,190v38,6,91,0,133,2","w":214},"[":{"d":"102,44v11,0,10,27,0,26r-67,0v-4,0,-6,-3,-6,-7r0,-324v0,-4,2,-6,6,-6r67,0v9,0,7,11,7,19v-4,14,-33,4,-48,7r0,285r41,0","w":117},"]":{"d":"89,63v0,4,-2,7,-6,7r-67,0v-9,0,-7,-11,-7,-19v4,-14,33,-4,48,-7r0,-285v-19,-4,-54,12,-48,-19v0,-4,3,-7,7,-7r67,0v4,0,6,2,6,6r0,324","w":117},"a":{"d":"162,-7v0,10,-14,6,-23,7v-7,0,-9,-7,-8,-15v-42,29,-114,29,-114,-45v0,-48,48,-62,114,-58v2,-35,-5,-58,-39,-56r-57,3v-8,2,-6,-11,-6,-18v0,-4,2,-6,7,-7v15,-3,32,-5,56,-5v99,-4,64,109,70,194xm131,-38r0,-58v-44,-1,-92,0,-82,40v0,49,54,34,82,18","w":186},"b":{"d":"177,-112v0,68,-15,115,-79,115v-22,0,-44,-3,-66,-7v-6,-1,-8,-3,-8,-8r0,-252v0,-10,15,-6,25,-7v4,0,7,3,7,7r0,67v71,-16,121,11,121,85xm98,-25v46,2,47,-39,47,-87v0,-59,-37,-68,-89,-58r0,143v12,1,30,2,42,2","w":194},"c":{"d":"147,-22v5,33,-28,24,-52,25v-58,3,-77,-48,-77,-116v0,-72,54,-99,122,-84v11,2,6,12,7,21v0,5,-3,6,-8,6v-50,-8,-89,-5,-89,57v0,47,6,88,45,88v19,0,29,-2,46,-3v3,0,6,2,6,6","w":162},"d":{"d":"170,-12v0,5,-1,7,-7,8v-22,4,-45,7,-67,7v-63,0,-78,-47,-78,-115v0,-75,49,-101,121,-85r0,-67v0,-11,15,-6,25,-7v4,0,6,3,6,7r0,252xm139,-27r0,-143v-51,-9,-89,-2,-89,58v0,47,0,90,46,87v12,0,31,-1,43,-2","w":194},"e":{"d":"177,-116v-1,10,3,27,-7,27r-120,0v-8,75,57,67,116,60v7,-1,4,11,5,17v0,5,-1,7,-7,8v-72,14,-141,16,-146,-80v-3,-69,17,-117,80,-117v53,0,79,34,79,85xm145,-113v1,-42,-14,-60,-47,-60v-32,0,-49,20,-48,60r95,0","w":195},"f":{"d":"101,-274v19,2,30,0,27,20v-8,15,-53,-8,-46,30r0,26v19,3,53,-11,45,21v-3,13,-31,3,-45,6r0,164v0,11,-15,6,-24,7v-4,0,-7,-3,-7,-7r0,-164v-16,-5,-47,6,-42,-21v3,-13,29,-4,42,-6v-4,-47,8,-80,50,-76","w":137},"g":{"d":"42,-34v-23,-9,-26,-43,-4,-56v-34,-41,-21,-110,63,-108r79,0v7,0,9,8,8,17v0,10,-12,7,-19,10v28,43,7,110,-68,101v-25,3,-46,-17,-51,5v7,20,44,18,65,25v35,12,69,19,69,56v0,35,-23,56,-82,56v-86,0,-103,-67,-60,-106xm101,-95v40,-1,50,-14,49,-39v0,-22,-10,-39,-49,-39v-41,1,-48,19,-48,42v0,16,7,36,48,36xm102,48v42,-3,52,-11,51,-35v5,-23,-60,-30,-85,-38v-26,22,-32,77,34,73","w":201},"h":{"d":"176,-7v0,10,-14,6,-24,7v-4,0,-8,-3,-8,-7r0,-119v0,-61,-45,-51,-88,-37r0,156v0,10,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-257v0,-10,15,-6,25,-7v4,0,7,3,7,7r0,75v58,-24,120,-16,120,63r0,119","w":200},"i":{"d":"54,-273v12,4,11,42,0,43v-10,-1,-26,4,-26,-7v0,-13,-6,-36,7,-36r19,0xm60,-7v0,10,-14,6,-24,7v-4,0,-8,-3,-8,-7r0,-184v0,-10,32,-12,32,0r0,184","w":88},"j":{"d":"54,-273v12,4,11,42,0,43v-10,-1,-26,4,-26,-7v0,-13,-6,-36,7,-36r19,0xm15,71v-15,0,-31,-1,-26,-21v8,-14,47,8,39,-27r0,-214v0,-11,16,-6,26,-7v4,0,6,3,6,7r0,214v0,37,-16,48,-45,48","w":88},"k":{"d":"165,-8v3,12,-17,7,-29,8v-4,0,-5,-1,-8,-5r-72,-88r0,86v0,10,-14,6,-24,7v-4,0,-8,-3,-8,-7r0,-257v0,-10,32,-12,32,0r0,150r72,-81v5,-5,43,-7,36,5r-79,86","w":178},"l":{"d":"60,-7v0,10,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-257v0,-10,15,-6,25,-7v4,0,7,3,7,7r0,257","w":87},"m":{"d":"263,-7v0,10,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-128v0,-51,-43,-40,-75,-28v7,46,1,105,3,156v0,11,-15,6,-25,7v-4,0,-6,-3,-6,-7r0,-128v2,-56,-42,-39,-72,-24r0,152v0,11,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-184v0,-10,15,-6,25,-7v7,0,8,7,7,14v23,-16,68,-27,89,-2v52,-24,117,-28,118,51r0,128","w":287},"n":{"d":"176,-7v0,10,-14,6,-24,7v-4,0,-8,-3,-8,-7r0,-119v3,-62,-51,-51,-88,-33r0,152v0,10,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-184v0,-10,15,-6,25,-7v7,0,8,7,7,14v52,-33,120,-18,120,58r0,119","w":200},"o":{"d":"178,-113v0,68,-17,116,-80,116v-63,0,-80,-48,-80,-116v0,-53,27,-88,80,-88v53,0,80,35,80,88xm98,-25v43,0,49,-40,49,-88v0,-37,-15,-60,-49,-60v-43,0,-48,40,-48,88v0,37,14,60,48,60","w":196},"p":{"d":"177,-112v0,88,-36,131,-121,111r0,65v0,10,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-248v0,-5,2,-7,8,-8v19,-5,44,-9,66,-9v54,0,79,35,79,89xm98,-24v44,2,47,-40,47,-88v0,-38,-11,-62,-47,-62v-15,0,-32,2,-42,4r0,142v12,2,30,4,42,4","w":194},"q":{"d":"170,64v0,11,-15,6,-25,7v-4,0,-6,-3,-6,-7r0,-65v-81,19,-121,-19,-121,-111v0,-54,24,-89,78,-89v22,0,48,4,67,9v6,1,7,3,7,8r0,248xm139,-28r0,-142v-10,-2,-28,-4,-43,-4v-45,-2,-46,41,-46,88v0,60,37,70,89,58","w":194},"r":{"d":"106,-201v12,0,10,28,0,28v-17,0,-32,4,-50,15r0,151v0,10,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-184v0,-10,14,-6,24,-7v7,0,8,7,7,15v18,-13,35,-18,51,-18","w":123},"s":{"d":"82,3v-16,-4,-71,8,-64,-26v22,-16,100,21,100,-27v0,-41,-100,-48,-100,-103v0,-57,73,-51,121,-43v10,1,6,10,7,19v0,4,-2,6,-7,6v-24,1,-90,-17,-89,18v9,39,100,54,100,103v0,37,-28,53,-68,53","w":167},"t":{"d":"130,-18v6,22,-15,21,-30,21v-33,0,-49,-9,-49,-49r0,-125v-16,-5,-47,6,-42,-21v3,-13,29,-4,42,-6v2,-14,-6,-37,6,-42v9,0,25,-9,25,3r0,39v19,3,53,-12,47,19v-3,15,-31,5,-47,8r0,125v-2,29,17,22,40,23v5,0,8,1,8,5","w":138},"u":{"d":"176,-7v0,10,-15,6,-25,7v-7,0,-8,-7,-7,-14v-52,33,-120,18,-120,-58r0,-119v0,-10,32,-12,32,0r0,119v-3,61,51,52,88,33r0,-152v0,-10,32,-12,32,0r0,184","w":200},"v":{"d":"151,-198v11,1,29,-4,25,9r-48,171v-9,29,-57,29,-65,0r-49,-174v0,-9,30,-11,32,1r42,157v3,15,11,14,15,0r41,-157v1,-5,4,-7,7,-7","w":190},"w":{"d":"237,-192v3,-11,35,-9,32,3r-35,167v-5,23,-8,25,-30,25v-19,0,-23,-3,-29,-26r-32,-123v-2,-4,-2,-3,-3,0r-32,123v-5,21,-10,26,-29,26v-22,0,-25,-3,-30,-25r-35,-169v0,-10,30,-11,32,-1r30,164v2,7,4,5,6,0r35,-138v2,-16,45,-18,49,0r38,142v16,-50,20,-114,33,-168","w":282},"x":{"d":"183,-8v2,4,2,8,-4,8v-10,-1,-25,3,-30,-3r-51,-75r-52,74v-4,7,-27,7,-32,0r67,-97r-63,-93v4,-7,30,-8,36,1r46,68r46,-68v5,-10,17,-3,28,-5v6,0,6,5,3,9r-60,86","w":196},"y":{"d":"53,71v-18,0,-44,4,-38,-22v3,-13,28,-1,40,-4v27,5,33,-21,39,-45v-17,0,-24,-1,-32,-25r-48,-167v1,-9,29,-10,32,0r43,156v3,10,5,8,13,8r43,-165v3,-7,37,-10,33,4r-60,207v-11,39,-24,53,-65,53","w":192},"z":{"d":"148,-27v12,0,12,28,0,27r-108,0v-28,0,-27,-34,-14,-50r94,-119v-25,-6,-62,0,-91,-2v-8,0,-7,-11,-7,-20v0,-4,3,-7,7,-7r106,0v27,-1,24,32,12,46r-97,122v0,2,0,3,3,3r95,0","w":173},"{":{"d":"102,44v11,0,10,26,0,26v-48,0,-73,-5,-73,-50v0,-44,11,-91,-22,-108r0,-21v60,-28,-37,-158,95,-158v9,0,7,11,7,19v-6,18,-57,-6,-48,30v-2,50,9,100,-26,120v35,20,26,69,26,118v0,26,17,24,41,24","w":119},"|":{"d":"61,63v0,10,-15,6,-25,7v-4,0,-7,-3,-7,-7r0,-324v0,-9,29,-10,32,0r0,324","w":89},"}":{"d":"112,-88v-60,28,37,158,-95,158v-9,0,-7,-11,-7,-19v7,-17,57,5,48,-31v2,-49,-9,-99,26,-118v-35,-20,-26,-70,-26,-120v0,-26,-17,-23,-41,-23v-9,0,-7,-11,-7,-19v0,-10,15,-6,25,-7v100,-14,20,117,77,158r0,21","w":119},"\u00a0":{"w":88}}});
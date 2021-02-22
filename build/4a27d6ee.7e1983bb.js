(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{118:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return g}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=o.a.createContext({}),p=function(e){var n=o.a.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return o.a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=t,g=d["".concat(a,".").concat(u)]||d[u]||s[u]||i;return r?o.a.createElement(g,l(l({ref:n},m),{},{components:r})):o.a.createElement(g,l({ref:n},m))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),i=(r(0),r(118)),a={id:"mailgo-exports",title:"Mailgo export(s)",sidebar_label:"Library export(s)"},l={unversionedId:"mailgo-exports",id:"mailgo-exports",isDocsHomePage:!1,title:"Mailgo export(s)",description:"Here the functions exported by the library mailgo",source:"@site/docs/mailgo-exports.md",slug:"/mailgo-exports",permalink:"/docs/mailgo-exports",editUrl:"https://github.com/manzinello/mailgo.dev/tree/master/docs/docs/mailgo-exports.md",version:"current",lastUpdatedBy:"Matteo Manzinello",lastUpdatedAt:1605563971,sidebar_label:"Library export(s)",sidebar:"docs",previous:{title:"Mailgo direct render",permalink:"/docs/direct-render"},next:{title:"Mailgo Window functions",permalink:"/docs/window-functions"}},c=[{value:"Definitions",id:"definitions",children:[{value:"getMailgoTypeByElement",id:"getmailgotypebyelement",children:[]},{value:"mailgoClickListener (or DEPRECATED mailgoCheckRender)",id:"mailgoclicklistener-or-deprecated-mailgocheckrender",children:[]},{value:"mailgoPreRender",id:"mailgoprerender",children:[]},{value:"mailgoDirectRender",id:"mailgodirectrender",children:[]},{value:"mailgoRender",id:"mailgorender",children:[]},{value:"mailgo",id:"mailgo",children:[]}]}],m={toc:c};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},m,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here the functions exported by the library ",Object(i.b)("inlineCode",{parentName:"p"},"mailgo")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"export {\n  getMailgoTypeByElement,\n  mailgoClickListener,\n  mailgoCheckRender, // DEPRECATED, is now mailgoClickListener\n  mailgoPreRender,\n  mailgoDirectRender,\n  mailgoRender,\n  mailgo,\n  start, // same as mailgo\n};\n\nexport default mailgo;\n")),Object(i.b)("h2",{id:"definitions"},"Definitions"),Object(i.b)("h3",{id:"getmailgotypebyelement"},"getMailgoTypeByElement"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"export function getMailgoTypeByElement(\n  element: HTMLElement\n): MailgoModalType | null;\n")),Object(i.b)("p",null,"// TODO: more documentation here will arrive soon!"),Object(i.b)("h3",{id:"mailgoclicklistener-or-deprecated-mailgocheckrender"},"mailgoClickListener (or DEPRECATED mailgoCheckRender)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"export function mailgoClickListener(event: Event): boolean;\n")),Object(i.b)("p",null,"// TODO: more documentation here will arrive soon!"),Object(i.b)("h3",{id:"mailgoprerender"},"mailgoPreRender"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"export function mailgoPreRender(\n  type: string,\n  mailgoElementOrUrl: HTMLLinkElement | string\n): boolean;\n")),Object(i.b)("p",null,"// TODO: more documentation here will arrive soon!"),Object(i.b)("h3",{id:"mailgodirectrender"},"mailgoDirectRender"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"export function mailgoDirectRender(directUrl: string): boolean;\n")),Object(i.b)("p",null,"// TODO: more documentation here will arrive soon!"),Object(i.b)("h3",{id:"mailgorender"},"mailgoRender"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"export function mailgoRender(type: string): boolean;\n")),Object(i.b)("p",null,"// TODO: more documentation here will arrive soon!"),Object(i.b)("h3",{id:"mailgo"},"mailgo"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"export default function mailgo(mailgoConfig?: MailgoConfig): boolean;\n")),Object(i.b)("p",null,"// TODO: more documentation here will arrive soon!"))}p.isMDXComponent=!0}}]);
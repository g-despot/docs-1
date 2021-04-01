(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),c=(n(0),n(252)),a={id:"concepts",title:"Concepts",sidebar_label:"Concepts overview",slug:"/concepts"},i={unversionedId:"concepts/concepts",id:"concepts/concepts",isDocsHomePage:!1,title:"Concepts",description:"Articles within the concepts section serve as an in-depth introduction into",source:"@site/docs/concepts/concepts.md",slug:"/concepts",permalink:"/memgraph/next/concepts",editUrl:"https://github.com/memgraph/docs/tree/master/docs/concepts/concepts.md",version:"current",sidebar_label:"Concepts overview",sidebar:"memgraph",previous:{title:"Audit log (Enterprise)",permalink:"/memgraph/next/reference-guide/audit-log"},next:{title:"Storage",permalink:"/memgraph/next/concepts/storage"}},p=[],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Articles within the concepts section serve as an in-depth introduction into\ninner workings of Memgraph. These tend to be quite technical in nature and\nare recommended for advanced users and other graph database enthusiasts."),Object(c.b)("p",null,"So far we have covered the following topics:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/memgraph/next/concepts/storage"},"Data Storage")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/memgraph/next/concepts/graph-algorithms"},"Graph Algorithms")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/memgraph/next/concepts/indexing"},"Indexing")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/memgraph/next/concepts/replication"},"Replication"))))}l.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||m[b]||c;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
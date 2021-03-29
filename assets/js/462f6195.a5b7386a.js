(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return o}));var r=t(3),i=t(8),l=(t(0),t(251)),s={id:"unwind",title:"UNWIND clause",sidebar_label:"UNWIND"},a={unversionedId:"clauses/unwind",id:"clauses/unwind",isDocsHomePage:!1,title:"UNWIND clause",description:"The UNWIND clause is used to unwind a list of values as individual rows.",source:"@site/cypher-manual/clauses/unwind.md",slug:"/clauses/unwind",permalink:"/cypher-manual/clauses/unwind",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/unwind.md",version:"current",sidebar_label:"UNWIND",sidebar:"cypher_manual",previous:{title:"UNION clause",permalink:"/cypher-manual/clauses/union"},next:{title:"WHERE clause",permalink:"/cypher-manual/clauses/where"}},c=[{value:"1. Unwinding lists",id:"1-unwinding-lists",children:[]},{value:"2. Distinct list",id:"2-distinct-list",children:[]},{value:"3. Expression returning lists",id:"3-expression-returning-lists",children:[]},{value:"4. Unwinding lists of lists",id:"4-unwinding-lists-of-lists",children:[]}],u={toc:c};function o(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"UNWIND")," clause is used to unwind a list of values as individual rows."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#1-unwinding-lists"},"Unwinding lists")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#2-distinct-list"},"Distinct list")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#3-expression-returning-lists"},"Expression returning lists")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#4-unwinding-lists-of-lists"},"Unwinding lists of lists"))),Object(l.b)("h2",{id:"1-unwinding-lists"},"1. Unwinding lists"),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"UNWIND")," to transform a literal list into rows."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"UNWIND [1,2,3] AS listElement \nRETURN listElement;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+-------------+\n| listElement |\n+-------------+\n| 1           |\n| 2           |\n| 3           |\n+-------------+\n")),Object(l.b)("h2",{id:"2-distinct-list"},"2. Distinct list"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"UNWIND")," clause can be used to remove duplicates from a list."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"WITH [1,1,1,2,2,3] AS list \nUNWIND list AS listElement\nWITH DISTINCT listElement\nRETURN collect(listElement) AS distinctElements;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+------------------+\n| distinctElements |\n+------------------+\n| [1, 2, 3]        |\n+------------------+\n")),Object(l.b)("h2",{id:"3-expression-returning-lists"},"3. Expression returning lists"),Object(l.b)("p",null,"An expression that returns a list can be used with the ",Object(l.b)("inlineCode",{parentName:"p"},"UNWIND")," clause."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"WITH [1,2,3] AS listOne, [4,5,6] AS listTwo \nUNWIND (listOne + listTwo) AS list\nRETURN list;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+------+\n| list |\n+------+\n| 1    |\n| 2    |\n| 3    |\n| 4    |\n| 5    |\n| 6    |\n+------+\n")),Object(l.b)("h2",{id:"4-unwinding-lists-of-lists"},"4. Unwinding lists of lists"),Object(l.b)("p",null,"Multiple  ",Object(l.b)("inlineCode",{parentName:"p"},"UNWIND")," clauses can be combined to unwind nested lists."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"WITH [[1,2,3],[4,5,6],[7,8,9]] AS listOne\nUNWIND listOne AS listOneElement\nUNWIND listOneElement AS element\nRETURN element;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+---------+\n| element |\n+---------+\n| 1       |\n| 2       |\n| 3       |\n| 4       |\n| 5       |\n| 6       |\n| 7       |\n| 8       |\n| 9       |\n+---------+\n")))}o.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),o=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=o(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(t),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||l;return t?i.a.createElement(m,a(a({ref:n},u),{},{components:t})):i.a.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<l;u++)s[u]=t[u];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
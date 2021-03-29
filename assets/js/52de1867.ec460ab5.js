(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(251)),i={id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"This article outlines the basic steps necessary to query a running Memgraph database instance from Memgraph Lab.",source:"@site/lab/getting-started.md",slug:"/",permalink:"/memgraph-lab/",editUrl:"https://github.com/memgraph/docs/tree/master/lab/getting-started.md",version:"current",sidebar_label:"Getting started",sidebar:"lab",next:{title:"Installing Memgraph Lab on macOS",permalink:"/memgraph-lab/installation/osx-installation"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Connecting to the database",id:"connecting-to-the-database",children:[]},{value:"Executing queries",id:"executing-queries",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],s={toc:c};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article outlines the basic steps necessary to query a running Memgraph database instance from ",Object(o.b)("strong",{parentName:"p"},"Memgraph Lab"),"."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before you proceed with the guide, make sure that you have:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Installed the latest version of ",Object(o.b)("strong",{parentName:"li"},"Memgraph Lab")," which you can get from the official ",Object(o.b)("a",{parentName:"li",href:"https://memgraph.com/download#Lab-download"},"download page"),"."),Object(o.b)("li",{parentName:"ul"},"A running Memgraph database instance. Instructions on how to do setup Memgraph can be ",Object(o.b)("a",{parentName:"li",href:"../memgraph/getting-started/installation"},"found here"),".")),Object(o.b)("h2",{id:"connecting-to-the-database"},"Connecting to the database"),Object(o.b)("p",null,"Make sure that Memgraph is running and open Memgraph Lab.\nIf you are starting with a fresh database instance, you don't have to change any of the options."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Leave the ",Object(o.b)("inlineCode",{parentName:"li"},"Username")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Password")," fields ",Object(o.b)("strong",{parentName:"li"},"empty"),"."),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Host")," field can be either ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"localhost")),", ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"127.0.0.1"))," or ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"0.0.0.0")),"."),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Port")," field should be ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"7687")),". Every Memgraph instance is listening on this port by default."),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Encrypted")," option should be ",Object(o.b)("strong",{parentName:"li"},"disabled")," by default.")),Object(o.b)("p",null,"If you fail to connect, make sure that your database instance is up and running.\nIf the ",Object(o.b)("inlineCode",{parentName:"p"},"Host")," address is wrong, take a look at the ",Object(o.b)("a",{parentName:"p",href:"../memgraph/getting-started/installation/docker-installation#note-for-docker-users"},"Docker note")," in the installation guide."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Memgraph Lab",src:n(326).default})),Object(o.b)("h2",{id:"executing-queries"},"Executing queries"),Object(o.b)("p",null,"Now, you can execute Cypher queries on Memgraph.\nOpen the ",Object(o.b)("strong",{parentName:"p"},"Query")," tab, located in the left sidebar, copy the following query and press the ",Object(o.b)("strong",{parentName:"p"},"Run query")," button:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),Object(o.b)("p",null,'The query above will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',Object(o.b)("em",{parentName:"p"},"likes"),' "Memgraph".'),Object(o.b)("p",null,"To find created nodes and relationships, execute the following query:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),Object(o.b)("h2",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"To learn more about the ",Object(o.b)("strong",{parentName:"p"},"Cypher")," language, visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"../cypher-manual"},"Cypher manual"))," or ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive guides.\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"../memgraph/tutorials/tutorials"},"Tutorials")),".\nDetails on what can be stored in Memgraph can be found in the article about ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"../memgraph/concepts/storage"},"Data storage")),"."),Object(o.b)("h2",{id:"getting-help"},"Getting help"),Object(o.b)("p",null,"Visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"../memgraph/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}b.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),g=a,m=p["".concat(i,".").concat(g)]||p[g]||u[g]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},326:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/memgraph_lab_login-23fd7d60fb5e434953703ffefa7521f0.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var a=t(3),n=t(7),i=(t(0),t(198)),o={id:"reference-guide",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},c={unversionedId:"reference-guide/reference-guide",id:"reference-guide/reference-guide",isDocsHomePage:!1,title:"Reference guide overview",description:"Memgraph supports most of the commonly used constructs of the language. The",source:"@site/docs/reference-guide/reference-guide.md",slug:"/reference-guide",permalink:"/memgraph/reference-guide",editUrl:"https://github.com/memgraph/docs/tree/main/docs/reference-guide/reference-guide.md",version:"current",sidebar_label:"Reference guide overview",sidebar:"memgraph",previous:{title:"How to set up replication on a small cluster (Enterprise)",permalink:"/memgraph/database-functionalities/replication"},next:{title:"Memgraph configuration",permalink:"/memgraph/reference-guide/configuration"}},u=[{value:"Cypher query language",id:"cypher-query-language",children:[]},{value:"Configuration settings",id:"configuration-settings",children:[]},{value:"Indexing",id:"indexing",children:[]},{value:"Built-in graph algorithms",id:"built-in-graph-algorithms",children:[]},{value:"Query modules",id:"query-modules",children:[]},{value:"NetworkX",id:"networkx",children:[]},{value:"Machine learning",id:"machine-learning",children:[{value:"Backup",id:"backup",children:[]}]},{value:"User privileges",id:"user-privileges",children:[]},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[]},{value:"Audit log",id:"audit-log",children:[]},{value:"Replication",id:"replication",children:[]}],l={toc:u};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Memgraph")," supports most of the commonly used constructs of the language. The\nreference guide contains the details of implemented features. Additionally,\nnot yet supported features of the language are listed."),Object(i.a)("h2",{id:"cypher-query-language"},Object(i.a)("a",{parentName:"h2",href:"../../cypher-manual/overview"},"Cypher query language")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Cypher")," is a declarative graph query language that allows for expressive and efficient data querying in a property graph. It aims to be intuitive and easy to learn while\nproviding a powerful interface for working with graph-based data. "),Object(i.a)("h2",{id:"configuration-settings"},Object(i.a)("a",{parentName:"h2",href:"/memgraph/reference-guide/configuration"},"Configuration settings")),Object(i.a)("p",null,"Memgraph can be configured by editing the Memgraph configuration file or by including another configuration file. "),Object(i.a)("h2",{id:"indexing"},Object(i.a)("a",{parentName:"h2",href:"/memgraph/reference-guide/indexing"},"Indexing")),Object(i.a)("p",null,"An index stores additional information on certain types of data, so that retrieving said data becomes more efficient."),Object(i.a)("h2",{id:"built-in-graph-algorithms"},Object(i.a)("a",{parentName:"h2",href:"/memgraph/reference-guide/graph-algorithms"},"Built-in graph algorithms")),Object(i.a)("p",null,"Memgraph comes with custom-built algorithms that are implemented using C++: ",Object(i.a)("strong",{parentName:"p"},"Filtering variable-length paths"),", ",Object(i.a)("strong",{parentName:"p"},"Breadth-first search"),", and ",Object(i.a)("strong",{parentName:"p"},"Weighted shortest path"),"."),Object(i.a)("h2",{id:"query-modules"},Object(i.a)("a",{parentName:"h2",href:"./query-modules"},"Query modules")),Object(i.a)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on startup or later on."),Object(i.a)("h2",{id:"networkx"},Object(i.a)("a",{parentName:"h2",href:"./networkx"},"NetworkX")),Object(i.a)("p",null,"Memgraph includes a set of Python query modules based on the ",Object(i.a)("a",{parentName:"p",href:"https://networkx.github.io/"},"NetworkX")," library of algorithms.\nYou can find more information about all the available algorithms in the ",Object(i.a)("a",{parentName:"p",href:"./networkx"},"NetxorkX reference guide"),"."),Object(i.a)("h2",{id:"machine-learning"},Object(i.a)("a",{parentName:"h2",href:"/memgraph/reference-guide/tensorflow"},"Machine learning")),Object(i.a)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow,\nallowing natural data transfer between Memgraph and TensorFlow at any point of the model."),Object(i.a)("h3",{id:"backup"},Object(i.a)("a",{parentName:"h3",href:"/memgraph/reference-guide/backup"},"Backup")),Object(i.a)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data."),Object(i.a)("h2",{id:"user-privileges"},Object(i.a)("a",{parentName:"h2",href:"/memgraph/reference-guide/security"},"User privileges")),Object(i.a)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users."),Object(i.a)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),Object(i.a)("p",null,"Memgraph supports authentication and (optional) authorization using a custom-built external auth module.\nTo learn more visit:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},Object(i.a)("a",{parentName:"strong",href:"/memgraph/reference-guide/auth-module"},"Auth module"))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("strong",{parentName:"li"},Object(i.a)("a",{parentName:"strong",href:"/memgraph/reference-guide/ldap-security"},"LDAP security")))),Object(i.a)("h2",{id:"audit-log"},Object(i.a)("a",{parentName:"h2",href:"/memgraph/reference-guide/audit-log"},"Audit log")),Object(i.a)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains records of all queries executed on the database."),Object(i.a)("h2",{id:"replication"},Object(i.a)("a",{parentName:"h2",href:"/memgraph/reference-guide/replication"},"Replication")),Object(i.a)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data.\nMemgraph supports replication and allows you to create a cluster of nodes running Memgraph instances. "))}p.isMDXComponent=!0},198:function(e,r,t){"use strict";t.d(r,"a",(function(){return h}));var a=t(0),n=t.n(a);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},g=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=p(t),h=a,d=g["".concat(o,".").concat(h)]||g[h]||s[h]||i;return t?n.a.createElement(d,c(c({ref:r},l),{},{components:t})):n.a.createElement(d,c({ref:r},l))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);
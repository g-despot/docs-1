(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{251:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},h=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),h=n,d=s["".concat(o,".").concat(h)]||s[h]||g[h]||i;return t?a.a.createElement(d,c(c({ref:r},l),{},{components:t})):a.a.createElement(d,c({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=h;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},80:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(8),i=(t(0),t(251)),o={id:"reference-guide",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},c={unversionedId:"reference-guide/reference-guide",id:"version-1.3.0/reference-guide/reference-guide",isDocsHomePage:!1,title:"Reference guide overview",description:"Memgraph supports most of the commonly used constructs of the language. The",source:"@site/memgraph_versioned_docs/version-1.3.0/reference-guide/reference-guide.md",slug:"/reference-guide",permalink:"/memgraph/reference-guide",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/reference-guide/reference-guide.md",version:"1.3.0",sidebar_label:"Reference guide overview",sidebar:"version-1.3.0/memgraph",previous:{title:"How to set up replication on a small cluster (Enterprise)",permalink:"/memgraph/database-functionalities/replication"},next:{title:"Memgraph configuration",permalink:"/memgraph/reference-guide/configuration"}},u=[{value:"Cypher query language",id:"cypher-query-language",children:[]},{value:"Configuration settings",id:"configuration-settings",children:[]},{value:"Indexing",id:"indexing",children:[]},{value:"Built-in graph algorithms",id:"built-in-graph-algorithms",children:[]},{value:"Query modules",id:"query-modules",children:[]},{value:"NetworkX",id:"networkx",children:[]},{value:"Machine learning",id:"machine-learning",children:[{value:"Backup",id:"backup",children:[]}]},{value:"User privileges",id:"user-privileges",children:[]},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[]},{value:"Audit log",id:"audit-log",children:[]},{value:"Replication",id:"replication",children:[]}],l={toc:u};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Memgraph")," supports most of the commonly used constructs of the language. The\nreference guide contains the details of implemented features. Additionally,\nnot yet supported features of the language are listed."),Object(i.b)("h2",{id:"cypher-query-language"},Object(i.b)("a",{parentName:"h2",href:"/cypher-manual"},"Cypher query language")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cypher")," is a declarative graph query language that allows for expressive and efficient data querying in a property graph. It aims to be intuitive and easy to learn while\nproviding a powerful interface for working with graph-based data. "),Object(i.b)("h2",{id:"configuration-settings"},Object(i.b)("a",{parentName:"h2",href:"/memgraph/reference-guide/configuration"},"Configuration settings")),Object(i.b)("p",null,"Memgraph can be configured by editing the Memgraph configuration file or by including another configuration file. "),Object(i.b)("h2",{id:"indexing"},Object(i.b)("a",{parentName:"h2",href:"/memgraph/reference-guide/indexing"},"Indexing")),Object(i.b)("p",null,"An index stores additional information on certain types of data, so that retrieving said data becomes more efficient."),Object(i.b)("h2",{id:"built-in-graph-algorithms"},Object(i.b)("a",{parentName:"h2",href:"/memgraph/reference-guide/graph-algorithms"},"Built-in graph algorithms")),Object(i.b)("p",null,"Memgraph comes with custom-built algorithms that are implemented using C++: ",Object(i.b)("strong",{parentName:"p"},"Filtering variable-length paths"),", ",Object(i.b)("strong",{parentName:"p"},"Breadth-first search"),", and ",Object(i.b)("strong",{parentName:"p"},"Weighted shortest path"),"."),Object(i.b)("h2",{id:"query-modules"},Object(i.b)("a",{parentName:"h2",href:"/memgraph/reference-guide/query-modules"},"Query modules")),Object(i.b)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on startup or later on."),Object(i.b)("h2",{id:"networkx"},Object(i.b)("a",{parentName:"h2",href:"/memgraph/reference-guide/networkx"},"NetworkX")),Object(i.b)("p",null,"Memgraph includes a set of Python query modules based on the ",Object(i.b)("a",{parentName:"p",href:"https://networkx.github.io/"},"NetworkX")," library of algorithms.\nYou can find more information about all the available algorithms in the ",Object(i.b)("a",{parentName:"p",href:"/memgraph/reference-guide/networkx"},"NetxorkX reference guide"),"."),Object(i.b)("h2",{id:"machine-learning"},Object(i.b)("a",{parentName:"h2",href:"/memgraph/reference-guide/tensorflow"},"Machine learning")),Object(i.b)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow,\nallowing natural data transfer between Memgraph and TensorFlow at any point of the model."),Object(i.b)("h3",{id:"backup"},Object(i.b)("a",{parentName:"h3",href:"/memgraph/reference-guide/backup"},"Backup")),Object(i.b)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data."),Object(i.b)("h2",{id:"user-privileges"},Object(i.b)("a",{parentName:"h2",href:"/memgraph/reference-guide/security"},"User privileges")),Object(i.b)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users."),Object(i.b)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),Object(i.b)("p",null,"Memgraph supports authentication and (optional) authorization using a custom-built external auth module.\nTo learn more visit:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",{parentName:"strong",href:"/memgraph/reference-guide/auth-module"},"Auth module"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",{parentName:"strong",href:"/memgraph/reference-guide/ldap-security"},"LDAP security")))),Object(i.b)("h2",{id:"audit-log"},Object(i.b)("a",{parentName:"h2",href:"/memgraph/reference-guide/audit-log"},"Audit log")),Object(i.b)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains records of all queries executed on the database."),Object(i.b)("h2",{id:"replication"},Object(i.b)("a",{parentName:"h2",href:"/memgraph/reference-guide/replication"},"Replication")),Object(i.b)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data.\nMemgraph supports replication and allows you to create a cluster of nodes running Memgraph instances. "))}p.isMDXComponent=!0}}]);
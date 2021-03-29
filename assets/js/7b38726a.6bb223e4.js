(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),o=(n(0),n(251)),r={id:"replication",title:"Replication",sidebar_label:"Replication"},c={unversionedId:"concepts/replication",id:"concepts/replication",isDocsHomePage:!1,title:"Replication",description:"High-level context",source:"@site/docs/concepts/replication.md",slug:"/concepts/replication",permalink:"/memgraph/next/concepts/replication",editUrl:"https://github.com/memgraph/docs/tree/master/docs/concepts/replication.md",version:"current",sidebar_label:"Replication",sidebar:"memgraph",previous:{title:"Indexing",permalink:"/memgraph/next/concepts/indexing"},next:{title:"Upcoming features",permalink:"/memgraph/next/upcoming-features"}},l=[{value:"High-level context",id:"high-level-context",children:[{value:"Synchronous replication",id:"synchronous-replication",children:[]},{value:"Asynchronous replication",id:"asynchronous-replication",children:[]},{value:"Semi-synchronous replication",id:"semi-synchronous-replication",children:[]},{value:"Addition of a new replica",id:"addition-of-a-new-replica",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"high-level-context"},"High-level context"),Object(o.b)("p",null,"Replication is a method that ensures that multiple database instances are\nstoring the same data. To enable replication, there must be at least two\ninstances of Memgraph in a cluster. Each instance has one of either two roles:\nmain or replica. The main instance is the instance that accepts writes to the\ndatabase and replicates its state to the replicas. In a cluster, there can only\nbe one main. There can be one or more replicas. None of the replicas will accept\nwrite queries, but they will always accept read queries (there is an exception\nto this rule and is described below). Each instance will always be reachable\nusing the standard supported communication protocols. The replication will\nreplicate WAL data. All data is transported through a custom binary protocol\nthat will try remain backward compatible, so that replication immediately allows\nfor zero downtime upgrades."),Object(o.b)("p",null,"Each replica can be configured to accept replicated data in one of the following\nmodes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"synchronous"),Object(o.b)("li",{parentName:"ul"},"asynchronous"),Object(o.b)("li",{parentName:"ul"},"semi-synchronous")),Object(o.b)("h3",{id:"synchronous-replication"},"Synchronous replication"),Object(o.b)("p",null,"When the data is replicated to a replica synchronously, all of the data of a\ncurrently pending transaction must be sent to the synchronous replica before the\ntransaction is able to commit its changes."),Object(o.b)("p",null,"This mode has a positive implication that all data that is committed to the\nmain will always be replicated to the synchronous replica. It also has a\nnegative performance implication because non-responsive replicas could grind all\nquery execution to a halt."),Object(o.b)("p",null,"This mode is good when you absolutely need to be sure that all data is always\nconsistent between the main and the replica."),Object(o.b)("h3",{id:"asynchronous-replication"},"Asynchronous replication"),Object(o.b)("p",null,"When the data is replicated to a replica asynchronously, all pending\ntransactions are immediately committed and their data is replicated to the\nasynchronous replica in the background."),Object(o.b)("p",null,"This mode has a positive performance implication in which it won't slow down\nquery execution. It also has a negative implication that the data between the\nmain and the replica is almost never in a consistent state (when the data is\nbeing changed)."),Object(o.b)("p",null,"This mode is good when you don't care about consistency and only need an\neventually consistent cluster, but you care about performance."),Object(o.b)("h3",{id:"semi-synchronous-replication"},"Semi-synchronous replication"),Object(o.b)("p",null,"When the data is replicated to a replica semi-synchronously, the data is\nreplicated using both the synchronous and asynchronous methodology. The data is\nalways replicated synchronously, but, if the replica for any reason doesn't\nrespond within a preset timeout, the pending transaction is committed and the\ndata is replicated to the replica asynchronously."),Object(o.b)("p",null,"This mode has a positive implication that all data that is committed is\n",Object(o.b)("em",{parentName:"p"},"mostly")," replicated to the semi-synchronous replica. It also has a negative\nperformance implication as the synchronous replication mode."),Object(o.b)("p",null,"This mode is useful when you want the replication to be synchronous to ensure\nthat the data within the cluster is consistent, but you don't want the main\nto grind to a halt when you have a non-responsive replica."),Object(o.b)("h3",{id:"addition-of-a-new-replica"},"Addition of a new replica"),Object(o.b)("p",null,"Each replica, when added to the cluster (in any mode), will first start out as\nan asynchronous replica. That will allow replicas that have fallen behind to\nfirst catch-up to the current state of the database. When the replica is in a\nstate that it isn't lagging behind the main it will then be promoted to a\nsemi-synchronous or synchronous replica. Replicas that are added as asynchronous\nreplicas will remain asynchronous."))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(r,".").concat(d)]||h[d]||u[d]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{227:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return h}));var r=a(3),n=a(8),o=(a(0),a(251)),i={id:"faq",title:"Frequently asked questions",sidebar_label:"FAQ"},s={unversionedId:"getting-help/faq",id:"getting-help/faq",isDocsHomePage:!1,title:"Frequently asked questions",description:"What is Memgraph?",source:"@site/docs/getting-help/faq.md",slug:"/getting-help/faq",permalink:"/memgraph/next/getting-help/faq",editUrl:"https://github.com/memgraph/docs/tree/master/docs/getting-help/faq.md",version:"current",sidebar_label:"FAQ",sidebar:"memgraph",previous:{title:"Getting help",permalink:"/memgraph/next/getting-help/getting-help"}},p=[{value:"What is Memgraph?",id:"what-is-memgraph",children:[]},{value:"Does being in-memory mean that Memgraph will lose all data upon system failure or restart?",id:"does-being-in-memory-mean-that-memgraph-will-lose-all-data-upon-system-failure-or-restart",children:[]},{value:"How far have you scaled your system?",id:"how-far-have-you-scaled-your-system",children:[]},{value:"Can Memgraph be deployed in the cloud?",id:"can-memgraph-be-deployed-in-the-cloud",children:[]},{value:"What does the hardware footprint look like?",id:"what-does-the-hardware-footprint-look-like",children:[]},{value:"Does Memgraph offer a cloud graph database as a service?",id:"does-memgraph-offer-a-cloud-graph-database-as-a-service",children:[]},{value:"Do you support Tinkerpop API stacks?",id:"do-you-support-tinkerpop-api-stacks",children:[]},{value:"How do you interface with the system?",id:"how-do-you-interface-with-the-system",children:[]},{value:"How do you upgrade?",id:"how-do-you-upgrade",children:[]},{value:"Can you implement custom Cypher procedures?",id:"can-you-implement-custom-cypher-procedures",children:[]},{value:"Why is my Memgraph instance relatively slow?",id:"why-is-my-memgraph-instance-relatively-slow",children:[]},{value:"What are the Cypher implementation differences compared to Neo4j?",id:"what-are-the-cypher-implementation-differences-compared-to-neo4j",children:[]}],l={toc:p};function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"what-is-memgraph"},"What is Memgraph?"),Object(o.b)("p",null,"Memgraph is a native fully distributed in-memory graph database built to handle\nreal-time use-cases at enterprise scale. Memgraph supports strongly-consistent\nACID transactions; and uses the standardized openCypher query language for\nstructuring, manipulating, and exploring data."),Object(o.b)("h3",{id:"does-being-in-memory-mean-that-memgraph-will-lose-all-data-upon-system-failure-or-restart"},"Does being in-memory mean that Memgraph will lose all data upon system failure or restart?"),Object(o.b)("p",null,"No. Memgraph uses RAM as the primary storage for data. However, Memgraph\ncontinuously backs up data to disk with transaction logs and periodic\nsnapshots. On restart, Memgraph uses the snapshot and log files to recover its\nstate to what it was before shutting down."),Object(o.b)("h3",{id:"how-far-have-you-scaled-your-system"},"How far have you scaled your system?"),Object(o.b)("p",null,"It depends on the dataset and the queries, in other words, the workload. On a\nsingle machine, Memgraph scales up to the size of the main memory. In a\ndistributed system, the graph is automatically repartitioned in the background\nto improve query execution time and scalability."),Object(o.b)("h3",{id:"can-memgraph-be-deployed-in-the-cloud"},"Can Memgraph be deployed in the cloud?"),Object(o.b)("p",null,"Yes, Memgraph can be deployed in the cloud. Memgraph is designed to be\nportable, but currently available only on the x86_64 architecture. All standard\nLinux distributions like CentOS, Debian, Ubuntu, RedHat are supported. Memgraph\nis also available on Docker. For any other platforms, please drop us an email\nat ",Object(o.b)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"tech@memgraph.com")," or get in touch with our team\non our ",Object(o.b)("a",{parentName:"p",href:"https://discourse.memgraph.com/"},"Forum"),"."),Object(o.b)("h3",{id:"what-does-the-hardware-footprint-look-like"},"What does the hardware footprint look like?"),Object(o.b)("p",null,"Memgraph uses ~50GB to store 100M nodes and 100M edges with one label and one\nproperty per each node and an edge type and one property per edge."),Object(o.b)("h3",{id:"does-memgraph-offer-a-cloud-graph-database-as-a-service"},"Does Memgraph offer a cloud graph database as a service?"),Object(o.b)("p",null,"Yes, we offer fully-managed Memgraph on our cloud infrastructure as a service.\nFor more details please visit our ",Object(o.b)("a",{parentName:"p",href:"https://cloud.memgraph.com/"},"cloud pages"),".\nIn addition, ",Object(o.b)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," is a\ntesting environment where you can play with various graph datasets."),Object(o.b)("h3",{id:"do-you-support-tinkerpop-api-stacks"},"Do you support Tinkerpop API stacks?"),Object(o.b)("p",null,"Memgraph doesn\u2019t support the Tinkerpop API stack because Tinkerpop is highly\ndependent on the Java stack. Memgraph is implemented in C/C++/Assembly with\nopenCypher and the Bolt protocol as an interface. We have considered Tinkerpop\nintegration, but at the moment it\u2019s not one of our highest priorities."),Object(o.b)("h3",{id:"how-do-you-interface-with-the-system"},"How do you interface with the system?"),Object(o.b)("p",null,"Memgraph supports the ",Object(o.b)("a",{parentName:"p",href:"http://www.opencypher.org"},"openCypher")," query language to\nquery the database instance. It\u2019s a declarative query language designed to\nquery graphs. Communication between clients and the database is done via the\n",Object(o.b)("a",{parentName:"p",href:"https://boltprotocol.org"},"Bolt protocol"),". For the list of supported\nprogramming languages please take a look\n",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/getting-started/connecting-applications"},"here"),"."),Object(o.b)("h3",{id:"how-do-you-upgrade"},"How do you upgrade?"),Object(o.b)("p",null,"To do software upgrades the whole cluster has to go down. Before that data has\nto be migrated to a cluster with the newer version of Memgraph. At the moment,\nwe offer no downtime upgrades, but that\u2019s a feature which is high on our\npriority list. What we do offer is support when the upgrade is needed."),Object(o.b)("h3",{id:"can-you-implement-custom-cypher-procedures"},"Can you implement custom Cypher procedures?"),Object(o.b)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup.\nQuery modules can be implemented by using the Python API or C API.\nTake a look at our guide ",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"),"."),Object(o.b)("h3",{id:"why-is-my-memgraph-instance-relatively-slow"},"Why is my Memgraph instance relatively slow?"),Object(o.b)("p",null,"Label indexing is not enabled by default in Memgraph, i.e., Memgraph will not\nautomatically index labeled data. Therefore, it is up to the user to perform the\nindexing explicitly. Visit the ",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/reference-guide/indexing"},"Reference guide"),"\nto find out more about creating indexes."),Object(o.b)("h3",{id:"what-are-the-cypher-implementation-differences-compared-to-neo4j"},"What are the Cypher implementation differences compared to Neo4j?"),Object(o.b)("p",null,"Although we try to implement openCypher query language as closely to the\nlanguage reference as possible, we had to make some changes to enhance the\nuser experience. You can find the differences listed in the ",Object(o.b)("a",{parentName:"p",href:"/cypher-manual/differences"},"Cypher manual"),"."))}h.isMDXComponent=!0},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),h=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=h(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=h(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
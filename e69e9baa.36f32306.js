(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{167:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return d})),t.d(a,"default",(function(){return u}));var n=t(3),r=t(7),i=(t(0),t(179)),l={id:"changelog",title:"Changelog",sidebar_label:"Changelog"},o={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Changelog",description:"v1.3.0",source:"@site/lab/changelog.md",slug:"/changelog",permalink:"/memgraph-lab/changelog",editUrl:"https://github.com/memgraph/docs/tree/master/lab/changelog.md",version:"current",sidebar_label:"Changelog",sidebar:"lab",previous:{title:"Style script reference guide",permalink:"/memgraph-lab/style-script/reference-guide"}},d=[{value:"v1.3.0",id:"v130",children:[{value:"Major Features and Improvements",id:"major-features-and-improvements",children:[]},{value:"Bug Fixes and Other Changes",id:"bug-fixes-and-other-changes",children:[]}]},{value:"v1.2.0",id:"v120",children:[{value:"What&#39;s New",id:"whats-new",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]}]},{value:"v1.1.0",id:"v110",children:[{value:"Major Features and Improvements",id:"major-features-and-improvements-1",children:[]},{value:"Bug Fixes and Other Changes",id:"bug-fixes-and-other-changes-1",children:[]}]},{value:"v1.0.0",id:"v100",children:[{value:"Major Features and Improvements",id:"major-features-and-improvements-2",children:[]}]},{value:"v0.1.2",id:"v012",children:[{value:"Bug Fixes and Other Changes",id:"bug-fixes-and-other-changes-2",children:[]}]},{value:"v0.1.1",id:"v011",children:[{value:"Major Features and Improvements",id:"major-features-and-improvements-3",children:[]}]}],c={toc:d};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"v130"},"v1.3.0"),Object(i.a)("h3",{id:"major-features-and-improvements"},"Major Features and Improvements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added option to show predefined datasets with the ability to import them to Memgraph."),Object(i.a)("li",{parentName:"ul"},"Added option to show sample query for every loaded predefined dataset."),Object(i.a)("li",{parentName:"ul"},"Added import of custom Cypher file datasets (",Object(i.a)("inlineCode",{parentName:"li"},"cypherl")," format)."),Object(i.a)("li",{parentName:"ul"},"Added export of current database state to Cypher file (",Object(i.a)("inlineCode",{parentName:"li"},"cypherl")," format)."),Object(i.a)("li",{parentName:"ul"},"Added default node label in graph view if name property is missing."),Object(i.a)("li",{parentName:"ul"},"Added default relationship type label in graph view for smaller graphs.")),Object(i.a)("h3",{id:"bug-fixes-and-other-changes"},"Bug Fixes and Other Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Fixed sidebar links in the browser Lab."),Object(i.a)("li",{parentName:"ul"},"Fixed columns in favorite queries view."),Object(i.a)("li",{parentName:"ul"},"Fixed showing large amounts of properties in a popup when viewing node details in the graph view."),Object(i.a)("li",{parentName:"ul"},"Fixed the label in the popup when switching between edges and nodes in the graph view."),Object(i.a)("li",{parentName:"ul"},"Fixed node count in the dashboard view."),Object(i.a)("li",{parentName:"ul"},"Added descriptive and better error messages when connecting to Memgraph with encryption on/off."),Object(i.a)("li",{parentName:"ul"},"Fixed the close button in a node popup in the graph view."),Object(i.a)("li",{parentName:"ul"},"Fixed the spacing of the close button and relationship type in a relationship popup in the graph view."),Object(i.a)("li",{parentName:"ul"},"Fixed storing physics and styles across multiple query runs."),Object(i.a)("li",{parentName:"ul"},"Fixed initial positioning in graph view when running query in the data view."),Object(i.a)("li",{parentName:"ul"},"Fixed graph view reset when a query on data view had no results to show."),Object(i.a)("li",{parentName:"ul"},"Fixed map disappearing when running query multiple times in a row."),Object(i.a)("li",{parentName:"ul"},"Fixed running multiple Lab instances of the application on Windows and Linux."),Object(i.a)("li",{parentName:"ul"},"Fixed node size and spacing in graph view when showing smaller graphs."),Object(i.a)("li",{parentName:"ul"},"Fixed transition state issues between graph view and data view.")),Object(i.a)("h2",{id:"v120"},"v1.2.0"),Object(i.a)("h3",{id:"whats-new"},"What's New"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added ability to create custom graph styling for nodes and edges in graph view with graph style language (similar to CSS)."),Object(i.a)("li",{parentName:"ul"},"Added ability to save and load custom graph styling."),Object(i.a)("li",{parentName:"ul"},"Added ability to show map background for nodes with lat and lng numeric properties."),Object(i.a)("li",{parentName:"ul"},"Added ability to change map background style."),Object(i.a)("li",{parentName:"ul"},"Removed edge labels to be shown by default in graph view."),Object(i.a)("li",{parentName:"ul"},"Fixed overall UI and UX."),Object(i.a)("li",{parentName:"ul"},"Set encrypted connection to be turned off by default on login screen (Memgraph v1.2.0 comes with SSL off by default).")),Object(i.a)("h3",{id:"bug-fixes"},"Bug Fixes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added ability to hide graph view if there are no node/edge data in response.")),Object(i.a)("h2",{id:"v110"},"v1.1.0"),Object(i.a)("h3",{id:"major-features-and-improvements-1"},"Major Features and Improvements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Enable explain and profile view."),Object(i.a)("li",{parentName:"ul"},"Memgraph v0.15.0 keywords support.")),Object(i.a)("h3",{id:"bug-fixes-and-other-changes-1"},"Bug Fixes and Other Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Fix bug with a new line in parsing multi-command queries."),Object(i.a)("li",{parentName:"ul"},"On empty data for graph redirect to data view.")),Object(i.a)("h2",{id:"v100"},"v1.0.0"),Object(i.a)("h3",{id:"major-features-and-improvements-2"},"Major Features and Improvements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added unsecure connection option."),Object(i.a)("li",{parentName:"ul"},"Improved UX of login screen."),Object(i.a)("li",{parentName:"ul"},"Added basic tutorial that shows on the initial run."),Object(i.a)("li",{parentName:"ul"},"Added text search of history and favorite queries."),Object(i.a)("li",{parentName:"ul"},"Added storage statistics on overview screen."),Object(i.a)("li",{parentName:"ul"},"Added debug view with query explain and profile capabilities."),Object(i.a)("li",{parentName:"ul"},"Added graph schema (metagraph) generator."),Object(i.a)("li",{parentName:"ul"},"Improved query data (table) view.")),Object(i.a)("h2",{id:"v012"},"v0.1.2"),Object(i.a)("h3",{id:"bug-fixes-and-other-changes-2"},"Bug Fixes and Other Changes"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Fixed app icon on MacOS."),Object(i.a)("li",{parentName:"ul"},"Improved error handling on the initial connect screen. Handle availability\nand secure connection errors.")),Object(i.a)("h2",{id:"v011"},"v0.1.1"),Object(i.a)("h3",{id:"major-features-and-improvements-3"},"Major Features and Improvements"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Added overview view."),Object(i.a)("li",{parentName:"ul"},"Added query view (Monaco editor)."),Object(i.a)("li",{parentName:"ul"},"Added graph, data and table data views."),Object(i.a)("li",{parentName:"ul"},"Added JSON export."),Object(i.a)("li",{parentName:"ul"},"Added electron builder packages for MacOS and Debian.")))}u.isMDXComponent=!0},179:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=u(t),m=n,h=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return t?r.a.createElement(h,o(o({ref:a},c),{},{components:t})):r.a.createElement(h,o({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(179)),o={id:"rpm-installation",title:"Install Memgraph RPM package",sidebar_label:"RPM package"},l={unversionedId:"getting-started/installation/rpm-installation",id:"getting-started/installation/rpm-installation",isDocsHomePage:!1,title:"Install Memgraph RPM package",description:"This article briefly outlines the basic steps necessary to install the Memgraph",source:"@site/docs/getting-started/installation/rpm-installation.md",slug:"/getting-started/installation/rpm-installation",permalink:"/memgraph/getting-started/installation/rpm-installation",editUrl:"https://github.com/memgraph/docs/tree/master/docs/getting-started/installation/rpm-installation.md",version:"current",sidebar_label:"RPM package",sidebar:"memgraph",previous:{title:"Install Memgraph for Debian",permalink:"/memgraph/getting-started/installation/debian-installation"},next:{title:"Querying the database",permalink:"/memgraph/getting-started/querying/querying"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation guide",id:"installation-guide",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Stopping Memgraph",id:"stopping-memgraph",children:[]}]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],c={toc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This article briefly outlines the basic steps necessary to install the Memgraph\nRPM package."),Object(i.a)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.a)("p",null,"Before you proceed with the installation guide make sure that you have:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Downloaded the latest ",Object(i.a)("strong",{parentName:"li"},"Memgraph RPM Package")," which can be ",Object(i.a)("a",{parentName:"li",href:"https://memgraph.com/download/"},"found\nhere"),".")),Object(i.a)("h2",{id:"installation-guide"},"Installation guide"),Object(i.a)("p",null,"After downloading the Memgraph RPM package, you can install it by issuing the\nfollowing command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"yum --nogpgcheck localinstall /path/to/memgraph-<version>.rpm\n")),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",{parentName:"div",className:"admonition-heading"},Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",{parentName:"h5",className:"admonition-icon"},Object(i.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.a)("div",{parentName:"div",className:"admonition-content"},Object(i.a)("p",{parentName:"div"},Object(i.a)("strong",{parentName:"p"},"NOTE:")," Please take care of the SELinux config. The easiest way of running\nMemgraph is to disable SELinux by executing ",Object(i.a)("inlineCode",{parentName:"p"},"setenforce 0"),". If that's not an\noption, please configure system properly."))),Object(i.a)("p",null,"After successful installation, Memgraph can be started as a\nservice using the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"systemctl start memgraph\n")),Object(i.a)("p",null,"To verify that Memgraph is running, run the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"journalctl --unit memgraph\n")),Object(i.a)("p",null,"If successful, you should receive an output similar to the following:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"Nov 23 13:40:13 hostname memgraph[14654]: BoltS server is fully armed and operational\nNov 23 13:40:13 hostname memgraph[14654]: BoltS listening on 0.0.0.0 at 7687\n")),Object(i.a)("p",null,"If you want the Memgraph service to start automatically on each startup, run\nthe following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"systemctl enable memgraph\n")),Object(i.a)("p",null,"At this point, Memgraph is ready for you to ",Object(i.a)("a",{parentName:"p",href:"/memgraph/getting-started/querying/querying"},"submit queries"),"."),Object(i.a)("h3",{id:"configuration"},"Configuration"),Object(i.a)("p",null,"The Memgraph configuration is available in ",Object(i.a)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),".\nIf the Memgraph configuration is altered, Memgraph needs to be restarted."),Object(i.a)("h3",{id:"stopping-memgraph"},"Stopping Memgraph"),Object(i.a)("p",null,"To shut down the Memgraph server, issue the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"systemctl stop memgraph\n")),Object(i.a)("h2",{id:"where-to-next"},"Where to next?"),Object(i.a)("p",null,"To learn how to query the database, take a look at the ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"/memgraph/getting-started/querying/querying"},"Querying"))," guide or ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive tutorials.",Object(i.a)("br",null),"\nVisit the ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"/memgraph/getting-started/connecting-applications"},"Building applications"))," page if you need to\nconnect to the database programmatically."),Object(i.a)("h2",{id:"getting-help"},"Getting help"),Object(i.a)("p",null,"Visit the ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"/memgraph/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}s.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(a),u=n,h=g["".concat(o,".").concat(u)]||g[u]||m[u]||i;return a?r.a.createElement(h,l(l({ref:t},c),{},{components:a})):r.a.createElement(h,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);
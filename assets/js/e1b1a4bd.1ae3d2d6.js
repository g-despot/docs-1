(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),l=(n(0),n(329)),i={id:"configuration",title:"Memgraph configuration",sidebar_label:"Memgraph configuration"},b={unversionedId:"reference-guide/configuration",id:"reference-guide/configuration",isDocsHomePage:!1,title:"Memgraph configuration",description:"The main Memgraph configuration file is available in /etc/memgraph/memgraph.conf.",source:"@site/docs/reference-guide/configuration.md",slug:"/reference-guide/configuration",permalink:"/memgraph/next/reference-guide/configuration",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/configuration.md",version:"current",sidebar_label:"Memgraph configuration",sidebar:"memgraph",previous:{title:"Reference guide overview",permalink:"/memgraph/next/reference-guide"},next:{title:"Indexing",permalink:"/memgraph/next/reference-guide/indexing"}},o=[{value:"Bolt",id:"bolt",children:[]},{value:"Query",id:"query",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Other",id:"other",children:[]},{value:"Additional configuration inclusion",id:"additional-configuration-inclusion",children:[]}],c={toc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The main Memgraph configuration file is available in ",Object(l.b)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),".\nYou can modify that file to suit your specific needs. Additional configuration can be specified by\nincluding another configuration file, in a file pointed to by the\n",Object(l.b)("inlineCode",{parentName:"p"},"MEMGRAPH_CONFIG")," environment variable or by passing arguments on the command\nline."),Object(l.b)("p",null,"Each configuration setting is in the form: ",Object(l.b)("inlineCode",{parentName:"p"},"--setting-name=value"),"."),Object(l.b)("h2",{id:"bolt"},"Bolt"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--bolt-address=0.0.0.0"),Object(l.b)("td",{parentName:"tr",align:null},"IP address on which the Bolt server should listen."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[string]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--bolt-cert-file="),Object(l.b)("td",{parentName:"tr",align:null},"Certificate file which should be used for the Bolt server."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[string]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--bolt-key-file="),Object(l.b)("td",{parentName:"tr",align:null},"Key file which should be used for the Bolt server."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[string]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--bolt-num-workers="),Object(l.b)("td",{parentName:"tr",align:null},"Number of workers used by the Bolt server. ",Object(l.b)("br",null),"By default, this will be the number of processing units available on the machine."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[int32]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--bolt-port=7687"),Object(l.b)("td",{parentName:"tr",align:null},"Port on which the Bolt server should listen."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[int32]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--bolt-server-name-for-init="),Object(l.b)("td",{parentName:"tr",align:null},"Server name which the database should send to the client in the Bolt INIT message."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[string]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--bolt-session-inactivity-timeout=1800"),Object(l.b)("td",{parentName:"tr",align:null},"Time in seconds after which inactive Bolt sessions will be closed."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[int32]"))))),Object(l.b)("h2",{id:"query"},"Query"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--query-cost-planner=true"),Object(l.b)("td",{parentName:"tr",align:null},"Use the cost-estimating query planner."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--query-execution-timeout-sec=180"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum allowed query execution time. ",Object(l.b)("br",null),"Queries exceeding this limit will be aborted. Value of 0 means no limit."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--query-max-plans=1000"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum number of generated plans for a query."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--query-modules-directory=/usr/lib/memgraph/query-modules"),Object(l.b)("td",{parentName:"tr",align:null},"Directory where modules with custom query procedures are stored. NOTE: Multiple comma-separated directories can be defined."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[string]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--query-plan-cache-ttl=60"),Object(l.b)("td",{parentName:"tr",align:null},"Time to live for cached query plans, in seconds."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[int32]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--query-vertex-count-to-expand-existing=10"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum count of indexed vertices which provoke indexed lookup and then expand to existing, ",Object(l.b)("br",null),"instead of a regular expand. Default is 10, to turn off use -1."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[int64]"))))),Object(l.b)("h2",{id:"storage"},"Storage"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--storage-gc-cycle-sec=30"),Object(l.b)("td",{parentName:"tr",align:null},"Storage garbage collector interval (in seconds)."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--storage-properties-on-edges=true"),Object(l.b)("td",{parentName:"tr",align:null},"Controls whether edges have properties."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--storage-recover-on-startup=true"),Object(l.b)("td",{parentName:"tr",align:null},"Controls whether the storage recovers persisted data on startup."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--storage-snapshot-interval-sec=300"),Object(l.b)("td",{parentName:"tr",align:null},"Storage snapshot creation interval (in seconds). Set to 0 to disable periodic snapshot creation."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--storage-snapshot-on-exit=true"),Object(l.b)("td",{parentName:"tr",align:null},"Controls whether the storage creates another snapshot on exit."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--storage-snapshot-retention-count=3"),Object(l.b)("td",{parentName:"tr",align:null},"The number of snapshots that should always be kept."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--storage-wal-enabled=true"),Object(l.b)("td",{parentName:"tr",align:null},"Controls whether the storage uses write-ahead-logging. To enable WAL periodic snapshots must be enabled."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--storage-wal-file-flush-every-n-tx=100000"),Object(l.b)("td",{parentName:"tr",align:null},"Issue a 'fsync' call after this amount of transactions are written to the WAL file. Set to 1 for fully synchronous operation."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--storage-wal-file-size-kib=20480"),Object(l.b)("td",{parentName:"tr",align:null},"Minimum file size of each WAL file."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[uint64]"))))),Object(l.b)("h2",{id:"other"},"Other"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--also-log-to-stderr=false"),Object(l.b)("td",{parentName:"tr",align:null},"log messages go to stderr in addition to logfiles"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--data-directory=/var/lib/memgraph"),Object(l.b)("td",{parentName:"tr",align:null},"Path to directory in which to save all permanent data."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[string]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--log-file=/var/log/memgraph/memgraph.log"),Object(l.b)("td",{parentName:"tr",align:null},"Path to where the log should be stored."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[string]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--log-level"),Object(l.b)("td",{parentName:"tr",align:null},"Minimum log level. Allowed values: TRACE, DEBUG, INFO, WARNING, ERROR, CRITICAL"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[string]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--memory-limit=0"),Object(l.b)("td",{parentName:"tr",align:null},"Total memory limit in MiB. Set to 0 to use the default values which are 100% of the phyisical memory if the swap is enabled and 90% of the physical memory otherwise."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--memory-warning-threshold=1024"),Object(l.b)("td",{parentName:"tr",align:null},"Memory warning threshold, in MB. If Memgraph detects there is less available RAM it will log a warning. ",Object(l.b)("br",null),"Set to 0 to disable."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--telemetry-enabled=true"),Object(l.b)("td",{parentName:"tr",align:null},"Set to true to enable telemetry. We collect information about the running system (CPU and memory information) ",Object(l.b)("br",null),"and information about the database runtime (vertex and edge counts and resource usage) to allow for easier improvement of the product."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"[bool]"))))),Object(l.b)("h2",{id:"additional-configuration-inclusion"},"Additional configuration inclusion"),Object(l.b)("p",null,"You can include additional configuration files from this file. Additional\nfiles are processed after this file. Settings that are set in the additional\nfiles will override previously set values. Additional configuration files are\nspecified with the ",Object(l.b)("inlineCode",{parentName:"p"},"--flag-file")," flag."),Object(l.b)("p",null,"Example:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"--flag-file=another.conf")))}d.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,s=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?r.a.createElement(s,b(b({ref:t},c),{},{components:n})):r.a.createElement(s,b({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(198)),l={id:"audit-log",title:"Audit log (Enterprise)",sidebar_label:"Audit log (Enterprise)"},o={unversionedId:"reference-guide/audit-log",id:"reference-guide/audit-log",isDocsHomePage:!1,title:"Audit log (Enterprise)",description:"Memgraph supports all query audit logging. When enabled, the audit log contains",source:"@site/docs/reference-guide/audit-log.md",slug:"/reference-guide/audit-log",permalink:"/docs/memgraph/reference-guide/audit-log",editUrl:"https://github.com/g-despot/docs/tree/main/docs/reference-guide/audit-log.md",version:"current",sidebar_label:"Audit log (Enterprise)",sidebar:"memgraph",previous:{title:"LDAP Security (Enterprise)",permalink:"/docs/memgraph/reference-guide/ldap-security"},next:{title:"Replication (Enterprise)",permalink:"/docs/memgraph/reference-guide/replication"}},c=[{value:"Format",id:"format",children:[]},{value:"Example",id:"example",children:[]},{value:"Parsing the log",id:"parsing-the-log",children:[]},{value:"Flags",id:"flags",children:[]}],d={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains\nrecords of all queries executed on the database.  Each executed query is one\nentry (one line) in the audit log. The audit log itself is a CSV file."),Object(i.a)("p",null,"All audit logs are written to\n",Object(i.a)("inlineCode",{parentName:"p"},"<MEMGRAPH_DURABILITY_DIRECTORY>/audit/audit.log"),".  The log is rotated using\n",Object(i.a)("inlineCode",{parentName:"p"},"logrotate"),", so entries in the ",Object(i.a)("inlineCode",{parentName:"p"},"audit.log")," file are always the newest entries.\nEntries in ",Object(i.a)("inlineCode",{parentName:"p"},"audit.log.1"),", ",Object(i.a)("inlineCode",{parentName:"p"},"audit.log.2.gz"),", etc.  are older entries. The\ndefault log rotation configuration can be found in ",Object(i.a)("inlineCode",{parentName:"p"},"/etc/logrotate.d/memgraph"),".\nBy default, the log is rotated every day and a full year of entries is\npreserved. You can modify the values to your own needs and preferences."),Object(i.a)("h2",{id:"format"},"Format"),Object(i.a)("p",null,"The audit log contains the following information formatted into a CSV file:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"<timestamp>,<address>,<username>,<query>,<params>\n")),Object(i.a)("p",null,"For each query, the supplied query parameters are also logged. The query is\nescaped and quoted so that commas in queries don't affect the correctness of\nthe CSV. The parameters are encoded as JSON objects and are then escaped and\nquoted."),Object(i.a)("h2",{id:"example"},"Example"),Object(i.a)("p",null,"This is an example of the audit log:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},'1551376833.225395,127.0.0.1,admin,"MATCH (n) DETACH DELETE n","{}"\n1551376833.257825,127.0.0.1,admin,"CREATE (n {name: $name})","{\\"name\\":\\"alice\\"}"\n1551376833.273546,127.0.0.1,admin,"MATCH (n), (m) CREATE (n)-[:e {when: $when}]->(m)","{\\"when\\":42}"\n1551376833.300955,127.0.0.1,admin,"MATCH (n), (m) SET n.value = m.value","{}"\n')),Object(i.a)("p",null,"We can see that all of the queries were executed from the loopback address and\nwere executed by the user ",Object(i.a)("inlineCode",{parentName:"p"},"admin"),".  The executed queries are:"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",{parentName:"tr",align:null},"Query"),Object(i.a)("th",{parentName:"tr",align:null},"Parameters"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},"MATCH (n) DETACH DELETE n"),Object(i.a)("td",{parentName:"tr",align:null},"{}")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},"CREATE (n {name: $name})"),Object(i.a)("td",{parentName:"tr",align:null},'{"name": "alice"}')),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},"MATCH (n), (m) CREATE (n)-","[:e {when: $when}]","->(m)"),Object(i.a)("td",{parentName:"tr",align:null},'{"when": 42}')),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},"MATCH (n), (m) SET n.value = m.value"),Object(i.a)("td",{parentName:"tr",align:null},"{}")))),Object(i.a)("h2",{id:"parsing-the-log"},"Parsing the log"),Object(i.a)("p",null,"If you wish to parse the log, the following Python snippet shows how to extract\ndata from the audit log:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-python"},"import csv\nimport json\n\nwith open(\"audit.log\") as f:\n    reader = csv.reader(f, delimiter=',', doublequote=False,\n                        escapechar='\\\\', lineterminator='\\n',\n                        quotechar='\"', quoting=csv.QUOTE_MINIMAL,\n                        skipinitialspace=False, strict=True)\n    for line in reader:\n        timestamp, address, username, query, params = line\n        params = json.loads(params)\n        # Rest of your code that processes the logs.\n")),Object(i.a)("h2",{id:"flags"},"Flags"),Object(i.a)("p",null,"This section contains the list of flags that are used to configure audit\nlogging in Memgraph."),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",{parentName:"tr",align:null},"Flag"),Object(i.a)("th",{parentName:"tr",align:null},"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},Object(i.a)("inlineCode",{parentName:"td"},"--audit-enabled")),Object(i.a)("td",{parentName:"tr",align:null},"Enables audit logging.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},Object(i.a)("inlineCode",{parentName:"td"},"--audit-buffer-size")),Object(i.a)("td",{parentName:"tr",align:null},"Controls the in-memory buffer size used for audit logs.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},Object(i.a)("inlineCode",{parentName:"td"},"--audit-buffer-flush-interval-ms")),Object(i.a)("td",{parentName:"tr",align:null},"Controls the time interval (in milliseconds) used for flushing the in-memory buffer to disk.")))))}u.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),u=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(a),m=n,g=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return a?r.a.createElement(g,o(o({ref:t},d),{},{components:a})):r.a.createElement(g,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{179:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return p}));var a=r(3),t=r(8),l=(r(0),r(251)),o={id:"load-call-query-modules",title:"Load and call custom query modules",sidebar_label:"Load and call custom query modules"},i={unversionedId:"database-functionalities/query-modules/load-call-query-modules",id:"version-1.3.0/database-functionalities/query-modules/load-call-query-modules",isDocsHomePage:!1,title:"Load and call custom query modules",description:"Memgraph supports extending the query language with user-written procedures.",source:"@site/memgraph_versioned_docs/version-1.3.0/database-functionalities/query-modules/load-call-query-modules.md",slug:"/database-functionalities/query-modules/load-call-query-modules",permalink:"/memgraph/database-functionalities/query-modules/load-call-query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/database-functionalities/query-modules/load-call-query-modules.md",version:"1.3.0",sidebar_label:"Load and call custom query modules",sidebar:"version-1.3.0/memgraph",previous:{title:"How to use built-in query modules",permalink:"/memgraph/database-functionalities/query-modules/built-in-query-modules"},next:{title:"Implement custom query modules",permalink:"/memgraph/database-functionalities/query-modules/implement-query-modules"}},u=[{value:"Loading query modules on startup",id:"loading-query-modules-on-startup",children:[]},{value:"Utility query module",id:"utility-query-module",children:[]},{value:"Syntax for calling procedures",id:"syntax-for-calling-procedures",children:[]},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",children:[]}],c={toc:u};function p(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup."),Object(l.b)("h2",{id:"loading-query-modules-on-startup"},"Loading query modules on startup"),Object(l.b)("p",null,"The Memgraph installation comes with the ",Object(l.b)("inlineCode",{parentName:"p"},"example.so")," and ",Object(l.b)("inlineCode",{parentName:"p"},"py_example.py")," query\nmodules which are located in ",Object(l.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory.\nAssuming the standard installation on Debian, you would run Memgraph with the\nfollowing command:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},"systemctl start memgraph\n")),Object(l.b)("p",null,"When using Docker, the equivalent would be the following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  memgraph\n")),Object(l.b)("p",null,"Memgraph will now attempt to load the query modules from all ",Object(l.b)("inlineCode",{parentName:"p"},"*.so")," and ",Object(l.b)("inlineCode",{parentName:"p"},"*.py"),"\nfiles it finds in the default (",Object(l.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),") directory.\nThe ",Object(l.b)("inlineCode",{parentName:"p"},"*.so")," modules are written using the C API and the ",Object(l.b)("inlineCode",{parentName:"p"},"*.py")," modules are\nwritten using the Python API. Each file corresponds to one query module. Names\nof these files will be mapped to query module names.  So in our case, we have\nan ",Object(l.b)("inlineCode",{parentName:"p"},"example.so")," which will be mapped to ",Object(l.b)("inlineCode",{parentName:"p"},"example")," module and a ",Object(l.b)("inlineCode",{parentName:"p"},"py_example.py"),"\nwhich will be mapped to ",Object(l.b)("inlineCode",{parentName:"p"},"py_example")," module in the query language."),Object(l.b)("p",null,"Each query module can define multiple procedures. Both of our examples define\na single procedure creatively named ",Object(l.b)("inlineCode",{parentName:"p"},"procedure"),"."),Object(l.b)("p",null,"If you want to change the directory in which Memgraph searches for query\nmodules, just change the ",Object(l.b)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file (",Object(l.b)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as\na command-line parameter (e.g. when using Docker)."),Object(l.b)("h2",{id:"utility-query-module"},"Utility query module"),Object(l.b)("p",null,"Query procedures that allow the users to gain more insight into other query\nmodules and their procedures are written under our utility ",Object(l.b)("inlineCode",{parentName:"p"},"mg")," query module.\nThis module offers three procedures with the following signatures:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mg.procedures() :: (name :: STRING, signature :: STRING)"),": Lists loaded\nprocedures and their signatures."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mg.load(module_name :: STRING) :: ()"),": Loads or reloads the given module."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mg.load_all() :: ()"),": Loads or reloads all modules.")),Object(l.b)("p",null,"For example, invoking ",Object(l.b)("inlineCode",{parentName:"p"},"mg.procedures()")," from openCypher like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.procedures() YIELD *;\n")),Object(l.b)("p",null,"might yield the following result:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},"+---------------------+-------------------------------------------------------------------+\n| name                | signature                                                         |\n+---------------------+-------------------------------------------------------------------+\n| ...                 | ...                                                               |\n| graph_analyzer.help | graph_analyzer.help() :: (name :: STRING, value :: STRING)        |\n| mg.load             | mg.load(module_name :: STRING) :: ()                              |\n| mg.load_all         | mg.load_all() :: ()                                               |\n| mg.procedures       | mg.procedures() :: (name :: STRING, signature :: STRING)          |\n| ...                 | ...                                                               |\n+---------------------+-------------------------------------------------------------------+\n")),Object(l.b)("p",null,"In this case, we can see that Memgraph has successfully loaded all the procedures implemented\nin query modules including the utility query procedures."),Object(l.b)("p",null,"To load a module (named e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"hello"),") that wasn't loaded on startup (perhaps\nbecause it was added to Memgraph's query modules directory afterwards), we\ncan simply invoke:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("hello");\n')),Object(l.b)("p",null,"If we wish to reload an existing module, say the ",Object(l.b)("inlineCode",{parentName:"p"},"graph_analyzer")," module above, we\nagain use the same procedure:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("graph_analyzer");\n')),Object(l.b)("p",null,"Lastly, if we wish to reload all existing modules and load any newly added ones\nwe can use:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),Object(l.b)("h2",{id:"syntax-for-calling-procedures"},"Syntax for calling procedures"),Object(l.b)("p",null,"OpenCypher has a special syntax for calling procedures in loaded query\nmodules. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},'CALL example.procedure("string-argument") YIELD args, result;\n')),Object(l.b)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",Object(l.b)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If we\nare not interested in any fields, the ",Object(l.b)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted. The\nprocedure will still run in such a case, but the record fields will not be\nstored in variables. In the above example, we assume that ",Object(l.b)("inlineCode",{parentName:"p"},"example.procedure"),"\nwill produce a record with 2 fields, ",Object(l.b)("inlineCode",{parentName:"p"},"args")," and ",Object(l.b)("inlineCode",{parentName:"p"},"result"),". Trying to ",Object(l.b)("inlineCode",{parentName:"p"},"YIELD"),"\nfields that are not part of the produced record will result in an error."),Object(l.b)("p",null,"Procedures may be called standalone as in the above example, or as a part of a\nlarger query. This is useful if we want the procedure to work on data the\nquery is producing. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL example.procedure(node) YIELD result RETURN *;\n")),Object(l.b)("p",null,"Unfortunately, when we use ",Object(l.b)("inlineCode",{parentName:"p"},"CALL")," in a larger query, we have to explicitly\n",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," from the query to get the results. Naturally, the ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," is not\nneeded if we perform updates after ",Object(l.b)("inlineCode",{parentName:"p"},"CALL"),". This follows the openCypher\nconvention that read-only queries need to end with a ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN"),", while queries\nwhich update something don't need to ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," anything."),Object(l.b)("p",null,"If a procedure returns a record with a field name that may clash with some\nvariable we already have in a query, that field name can be aliased into some\nother name. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (result) CALL example.procedure(42) YIELD result AS procedure_result RETURN *;\n")),Object(l.b)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),Object(l.b)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",Object(l.b)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to be able to yield its results, you can increase the memory limit using\nthe following syntax:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"CALL example.procedure(arg1, arg2, ...) MEMORY LIMIT 100 KB YIELD result;\nCALL example.procedure(arg1, arg2, ...) MEMORY LIMIT 100 MB YIELD result;\nCALL example.procedure(arg1, arg2, ...) MEMORY UNLIMITED YIELD result;\n")),Object(l.b)("p",null,"The limit can either be specified to a specific value (either in ",Object(l.b)("inlineCode",{parentName:"p"},"KB")," or in\n",Object(l.b)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."))}p.isMDXComponent=!0},251:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return b}));var a=r(0),t=r.n(a);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=t.a.createContext({}),p=function(e){var n=t.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return t.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},m=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return r?t.a.createElement(b,i(i({ref:n},c),{},{components:r})):t.a.createElement(b,i({ref:n},c))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
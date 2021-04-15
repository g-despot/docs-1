(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{228:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),a=(r(0),r(329)),i={id:"work-with-docker",title:"How to work with Docker?",sidebar_label:"Work with Docker"},l={unversionedId:"database-functionalities/work-with-docker",id:"database-functionalities/work-with-docker",isDocsHomePage:!1,title:"How to work with Docker?",description:"Set up a Development Environment with Docker",source:"@site/docs/database-functionalities/work-with-docker.md",slug:"/database-functionalities/work-with-docker",permalink:"/memgraph/next/database-functionalities/work-with-docker",editUrl:"https://github.com/memgraph/docs/tree/master/docs/database-functionalities/work-with-docker.md",version:"current",sidebar_label:"Work with Docker"},c=[{value:"Set up a Development Environment with Docker",id:"set-up-a-development-environment-with-docker",children:[{value:"Why Docker?",id:"why-docker",children:[]},{value:"Setting up Memgraph with Docker",id:"setting-up-memgraph-with-docker",children:[]},{value:"Importing custom data",id:"importing-custom-data",children:[]},{value:"Accessing custom query modules",id:"accessing-custom-query-modules",children:[]},{value:"Running query modules",id:"running-query-modules",children:[]},{value:"Where to next?",id:"where-to-next",children:[]}]}],s={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"set-up-a-development-environment-with-docker"},"Set up a Development Environment with Docker"),Object(a.b)("p",null,"This guide serves as an explanation of how to use Docker with Memgraph and setting up your development environment."),Object(a.b)("p",null,"Memgraph supports custom, user-written Cypher procedures. It is easy to extend built-in features by creating your own query modules. To access those query modules, we need to take a few extra steps while using Docker and this guide will show you how to work with them."),Object(a.b)("h3",{id:"why-docker"},"Why Docker?"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," is a service that uses OS-level virtualization to deliver software in packages that are called ",Object(a.b)("a",{parentName:"p",href:"https://www.docker.com/resources/what-container"},"containers"),". We at Memgraph chose Docker because of its many useful features:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Flexibility"),Object(a.b)("li",{parentName:"ul"},"Lightweight - efficient in terms of system resources"),Object(a.b)("li",{parentName:"ul"},"Portable - you can build locally or deploy to the cloud"),Object(a.b)("li",{parentName:"ul"},"Runs on all platforms - Windows, Linux and, macOS"),Object(a.b)("li",{parentName:"ul"},"Deploy in Kubernetes")),Object(a.b)("h3",{id:"setting-up-memgraph-with-docker"},"Setting up Memgraph with Docker"),Object(a.b)("p",null,"To start implementing and testing custom query modules in Memgraph, it is necessary to set up a Docker container first. "),Object(a.b)("p",null,"The Memgraph Docker image can be downloaded ",Object(a.b)("a",{parentName:"p",href:"https://memgraph.com/download"},"here"),". "),Object(a.b)("p",null,"After successfully ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"installing Docker"),", import the Memgraph Docker image with the following command:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker load -i /path/to/memgraph-<version>-docker.tar.gz")),Object(a.b)("p",null,"To start Memgraph, use the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  memgraph\n")),Object(a.b)("p",null,"At this point, Memgraph is ready for you to ",Object(a.b)("a",{parentName:"p",href:"/memgraph/next/getting-started/querying/querying"},"submit queries"),"."),Object(a.b)("p",null,"For an explanation of how to write custom query modules, follow our ",Object(a.b)("a",{parentName:"p",href:"/memgraph/next/database-functionalities/query-modules/implement-query-modules"},"how-to guide"),"."),Object(a.b)("h3",{id:"importing-custom-data"},"Importing custom data"),Object(a.b)("p",null,"If you wish to test and run your procedures on a custom dataset, first you need to populate the database. We will be using the CSV Import Tool which creates a snapshot that will be used by the database to recover its state on its next startup. Make sure that your Memgraph container is stopped and run the importer using the following command:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph")),Object(a.b)("p",null,"You can pass CSV files containing nodes and relationships with ",Object(a.b)("inlineCode",{parentName:"p"},"--nodes")," and ",Object(a.b)("inlineCode",{parentName:"p"},"--relationships")," flags respectively. Multiple files can be specified by repeating either of the flags. At least one node needs to be specified, but relationships are not required. For more information on how to structure your CSV file, please refer to our ",Object(a.b)("a",{parentName:"p",href:"/memgraph/next/database-functionalities/import-data#csv-import-tool"},"Import tool guide"),"."),Object(a.b)("p",null,"To import the snapshot, you will need to copy your files where Docker can see them by creating another container and filling it with your data: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker container create --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp nodes.csv mg_import_helper:/import-data\ndocker cp relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),Object(a.b)("p",null,"To run the importer, we need to slightly modify the first command by adding the flags for nodes and relationships:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"\ndocker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/nodes.csv \\\n  --relationships /import-data/relationships.csv\n")),Object(a.b)("p",null,"Next time you start Memgraph, your dataset will be ready for use!"),Object(a.b)("h3",{id:"accessing-custom-query-modules"},"Accessing custom query modules"),Object(a.b)("p",null,"Before running our custom procedures, we need to configure Memgraph to know where to fetch query modules. By default, Memgraph will search for query modules in the ",Object(a.b)("inlineCode",{parentName:"p"},"usr/lib/memgraph/query-modules")," directory. If you wish to change the directory in which Memgraph searches for query modules, you can do it in one of the following ways: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"change the ",Object(a.b)("inlineCode",{parentName:"li"},"--query-modules-directory")," flag in the main ",Object(a.b)("a",{parentName:"li",href:"/memgraph/next/reference-guide/configuration"},"configuration")," file located at ",Object(a.b)("inlineCode",{parentName:"li"},"/etc/memgraph/memgraph.conf")," or"),Object(a.b)("li",{parentName:"ul"},"supply it as a command-line parameter")),Object(a.b)("p",null,"When supplying the path for our query module, first we need to mount the volume containing it. ",Object(a.b)("strong",{parentName:"p"},"Mounting")," is a process by which the operating system makes files and directories on a storage device available for users to access via the computer's file system. In our case, we are allowing an isolated environment of the Docker container to access data located in our computer's file system. There are two types of mounts in Docker: ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"volume")," and ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/storage/bind-mounts/"},"bind mounting"),". The graphic below shows the differences between the two mounting techniques:"),Object(a.b)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/docker.png",alt:"Docker",style:{height:360}}),Object(a.b)("p",null,"In context of Memgraph, we will use volume mounting meaning we are going to put our files in a container and mount that container to the Docker area. Bind mounts are dependant on the file system of the host machine therefore if we move the file elsewhere, we need to re-mount. With volume binding, we have placed the files inside the Docker area and Memgraph will always have access to it no matter where they exist in our file system. "),Object(a.b)("p",null,"The following command should be used to successfully mount a volume containing your custom query module: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  -v $(pwd)/modules:/modules \\\n  --query-modules-directory=/modules\n")),Object(a.b)("p",null,"We've added two flags to the original command:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-v $(pwd)/modules:/modules ")," - flag for mounting the volume ",Object(a.b)("inlineCode",{parentName:"li"},"modules")," and "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--query-modules-directory=/modules")," - flag used to change the place where Memgraph searches for modules.")),Object(a.b)("p",null,"Now that we have access to our query modules, we can go on and run them."),Object(a.b)("h3",{id:"running-query-modules"},"Running query modules"),Object(a.b)("p",null,"There are three ways to execute queries and procedures in Memgraph:"),Object(a.b)("p",null,"NOTE: ",Object(a.b)("inlineCode",{parentName:"p"},"mg_client")," is a deprecated tool still coming within the Memgraph package. ",Object(a.b)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole")," will replace ",Object(a.b)("inlineCode",{parentName:"p"},"mg_client")," in the future. If possible, please use ",Object(a.b)("inlineCode",{parentName:"p"},"mgconsole")," instead."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"using the command-line tool, ",Object(a.b)("inlineCode",{parentName:"li"},"mg_client"),", which comes with Memgraph, (",Object(a.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/querying/querying"},"Querying"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/connecting-applications"},"programmatically")," by using the Bolt protocol,"),Object(a.b)("li",{parentName:"ul"},"from ",Object(a.b)("strong",{parentName:"li"},"Memgraph Lab"),", a visual user interface that can be downloaded ",Object(a.b)("a",{parentName:"li",href:"https://memgraph.com/download"},"here"),".")),Object(a.b)("p",null,"If you've decided to use the command-line tool, you will need to run the following command:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker run -it --entrypoint=mg_client memgraph --host HOST --use-ssl=False")," "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"HOST")," part of the command should be replaced with valid IP - most likely it being ",Object(a.b)("inlineCode",{parentName:"p"},"localhost"),".   If you are a macOS or Linux user and are having issues with connecting, please refer to the ",Object(a.b)("a",{parentName:"p",href:"/memgraph/next/getting-started/installation/docker-installation#note-for-docker-users"},"Note for Docker users"),"."),Object(a.b)("p",null,"NOTE: If ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," refuses to connect, try putting ",Object(a.b)("inlineCode",{parentName:"p"},"host.docker.internal")," instead. "),Object(a.b)("p",null,"After running the command, you should get a command prompt similar to this one:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Type :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nConnected to 'memgraph://127.0.0.1:7687'\nmemgraph>\n")),Object(a.b)("p",null,"Query modules are loaded on start, but you can also load them by executing the following procedure:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-openCyoher"},"CALL mg.load_all();\n")),Object(a.b)("p",null,"Each time you change a query module don't forget to reload it.\nThe syntax for calling the procedures is as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-openCyoher"},'CALL example.procedure("string-argument") YIELD *;\n')),Object(a.b)("p",null,"Each procedure returns either zero or more records, where each record contains named fields. The ",Object(a.b)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. Custom procedures may be called standalone or as part of a larger query. This is useful if we want the procedure to work on data the query is producing. "),Object(a.b)("p",null,"With this, your developing environment is ready and you are able to easily implement and run your own query modules. Check out our ",Object(a.b)("a",{parentName:"p",href:"/memgraph/next/reference-guide/query-modules"},"Reference Guide")," to see which Query Modules are included in Memgraph. "),Object(a.b)("h3",{id:"where-to-next"},"Where to next?"),Object(a.b)("p",null,"To learn more about Memgraph's functionalities, visit the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/memgraph/next/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/memgraph/next/tutorials/tutorials"},"Tutorials")),"."))}u.isMDXComponent=!0},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return r?o.a.createElement(b,l(l({ref:t},s),{},{components:r})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
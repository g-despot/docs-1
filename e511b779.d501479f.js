(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(194)),o={id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},l={unversionedId:"tutorials/social-network-analysis",id:"tutorials/social-network-analysis",isDocsHomePage:!1,title:"Social network analysis with NetworkX",description:"Introduction",source:"@site/docs/tutorials/social-network-analysis.md",slug:"/tutorials/social-network-analysis",permalink:"/memgraph/tutorials/social-network-analysis",editUrl:"https://github.com/memgraph/docs/tree/main/docs/tutorials/social-network-analysis.md",version:"current",sidebar_label:"Social network analysis with NetworkX",sidebar:"memgraph",previous:{title:"Movie recommendation system",permalink:"/memgraph/tutorials/movie-recommendation"},next:{title:"Understanding music (with query modules)",permalink:"/memgraph/tutorials/understanding-music-with-modules"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Importing the data",id:"importing-the-data",children:[]},{value:"Using existing NetworkX algorithms",id:"using-existing-networkx-algorithms",children:[{value:"Betweenness centrality",id:"betweenness-centrality",children:[]},{value:"Link prediction",id:"link-prediction",children:[]}]},{value:"Adding new NetworkX algorithms as query modules",id:"adding-new-networkx-algorithms-as-query-modules",children:[{value:"Community detection",id:"community-detection",children:[]}]},{value:"Further reading",id:"further-reading",children:[]}],d={toc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"introduction"},"Introduction"),Object(i.a)("p",null,"In this tutorial, we will show you how to perform simple network analysis with the NetworkX library and data stored in Memgraph DB. You will also acquire a basic understanding of ",Object(i.a)("strong",{parentName:"p"},"Query Modules"),", an easy method for extending the query language with user-written procedures."),Object(i.a)("h2",{id:"data-model"},"Data model"),Object(i.a)("p",null,"We are going to use the Karate Club graph, a network of friendships between 34 members of a karate club at a US university, as described by Wayne Zachary in 1977. It is a very popular data set in social network analysis and is very often referenced in such tutorials.\nThe nodes in the graph represent the members while the relationships between them are of type ",Object(i.a)("inlineCode",{parentName:"p"},"FRIENDS_WITH"),". You can differentiate the nodes by using their unique ",Object(i.a)("inlineCode",{parentName:"p"},"id")," property."),Object(i.a)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/karate_club.png",alt:"Karate club",style:{height:400}}),Object(i.a)("h2",{id:"importing-the-data"},"Importing the data"),Object(i.a)("p",null,"The simplest way of populating our database is by using the built-in ",Object(i.a)("a",{parentName:"p",href:"../database-functionalities/import-data"},"CSV Import Tool"),". The CSV files for this data set can be downloaded ",Object(i.a)("a",{parentName:"p",href:"https://github.com/g-despot/sng-tutorial"},"from here"),". "),Object(i.a)("p",null,"Use the following command to import the files:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"sudo -u memgraph mg_import_csv --nodes nodes.csv --relationships relationships.csv\n")),Object(i.a)("p",null,"If you are using Memgraph with Docker, there are a few more steps. First, we need to copy the CSV files where the Docker image can see them by executing the following commands:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"docker container create --name mg_import_helper -v mg_import:/import-data busybox\n\ndocker cp nodes.csv mg_import_helper:/import-data\n\ndocker cp relationships.csv mg_import_helper:/import-data\n\ndocker rm mg_import_helper\n")),Object(i.a)("p",null,"Now we can run the importer with the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"docker run -v mg_lib:/var/lib/memgraph \\\n    -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n    --entrypoint=mg_import_csv memgraph --nodes /import-data/nodes.csv \\\n    --relationships /import-data/relationships.csv\n")),Object(i.a)("p",null,"The data is imported and you can start Memgraph by executing the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"docker run -p 7687:7687 -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph memgraph\n")),Object(i.a)("p",null,"To learn more about the CSV Import Tool visit the how-to guide: ",Object(i.a)("a",{parentName:"p",href:"/memgraph/database-functionalities/import-data"},"Import data"),"."),Object(i.a)("h2",{id:"using-existing-networkx-algorithms"},"Using existing NetworkX algorithms"),Object(i.a)("p",null,"There are three ways to execute queries and procedures in Memgraph:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"using the command-line tool ",Object(i.a)("inlineCode",{parentName:"li"},"mg_client"),", which comes with Memgraph: ",Object(i.a)("strong",{parentName:"li"},Object(i.a)("a",{parentName:"strong",href:"/memgraph/getting-started/querying/querying"},"Querying the database"))),Object(i.a)("li",{parentName:"ul"},"programmatically, by using the Bolt protocol: ",Object(i.a)("strong",{parentName:"li"},Object(i.a)("a",{parentName:"strong",href:"../getting-started/connecting-applications"},"Building applications"))),Object(i.a)("li",{parentName:"ul"},"from ",Object(i.a)("strong",{parentName:"li"},"Memgraph Lab"),", a visual user interface which you can download ",Object(i.a)("strong",{parentName:"li"},Object(i.a)("a",{parentName:"strong",href:"https://memgraph.com/download"},"here")),".")),Object(i.a)("p",null,"In this tutorial, we are using results from the command-line tool because of their text format but, it's alright to use Memgraph Lab instead. You can open Memgraph Lab and in the tab ",Object(i.a)("strong",{parentName:"p"},"Query")," execute the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s)-[r]-(t) RETURN s,r,t;\n")),Object(i.a)("p",null,"This is going to return all the relationships inside our network. Now we have a better overview of what we are dealing with, so it\u2019s time to get some useful information about the network."),Object(i.a)("p",null,"To analyze the network we will use the built-in procedure ",Object(i.a)("inlineCode",{parentName:"p"},"analyze()")," from the ",Object(i.a)("inlineCode",{parentName:"p"},"graph_analyzer")," query module. This module utilizes the NetworkX library to retrieve graph information. Run the following query: "),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"CALL graph_analyzer.analyze() YIELD *;\n")),Object(i.a)("p",null,"You will get details about the graph like the number of nodes, edges, bridges... and many more. "),Object(i.a)("h3",{id:"betweenness-centrality"},"Betweenness centrality"),Object(i.a)("p",null,"Now let's try to find the betweenness centrality of a node, i.e. the number of times a node acts as a bridge along the shortest path between two other nodes. Run the following query:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"CALL nxalg.betweenness_centrality() YIELD *;\n")),Object(i.a)("p",null,"The procedure ",Object(i.a)("inlineCode",{parentName:"p"},"betweenness_centrality()")," is one of over 70 algorithms available in the ",Object(i.a)("inlineCode",{parentName:"p"},"nxalg")," module."),Object(i.a)("p",null,"The result should be:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'+--------------+--------------+\n| betweenness  | node         |\n+--------------+--------------+\n| 0            | ({id: "0"})  |\n| 0.000473485  | ({id: "1"})  |\n| 0.0083649    | ({id: "2"})  |\n| 0.00189394   | ({id: "3"})  |\n| 0            | ({id: "4"})  |\n| 0.000473485  | ({id: "5"})  |\n| ...          | ...          |\n')),Object(i.a)("h3",{id:"link-prediction"},"Link prediction"),Object(i.a)("p",null,"A very common problem in network analysis is link prediction. The algorithm predicts which new interactions among the network members are likely to occur in the near future. One way of predicting these links is by measuring the \u201cproximity\u201d of nodes in a network. This can be done by using the Jaccard coefficient.\nLet's try running the algorithm on a node with the ",Object(i.a)("inlineCode",{parentName:"p"},"id")," 13 and ordering the results descending by the value of the coefficient:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.jaccard_coefficient()\nYIELD *\nWITH  u, v, coef\nWHERE u.id='13'\nRETURN u, v, coef\nORDER BY coef DESC;\n")),Object(i.a)("p",null,"The results are:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'+--------------+--------------+--------------+\n| u            | v            | coef         |\n+--------------+--------------+--------------+\n| ({id: "13"}) | ({id: "19"}) | 0.6          |\n| ({id: "13"}) | ({id: "17"}) | 0.4          |\n| ({id: "13"}) | ({id: "21"}) | 0.4          |\n| ({id: "13"}) | ({id: "28"}) | 0.333333     |\n| ({id: "13"}) | ({id: "30"}) | 0.285714     |\n| ({id: "13"}) | ({id: "27"}) | 0.285714     |\n| ({id: "13"}) | ({id: "31"}) | 0.222222     |\n| ({id: "13"}) | ({id: "15"}) | 0.166667     |\n| ({id: "13"}) | ({id: "14"}) | 0.166667     |\n| ({id: "13"}) | ({id: "18"}) | 0.166667     |\n| ({id: "13"}) | ({id: "20"}) | 0.166667     |\n| ({id: "13"}) | ({id: "22"}) | 0.166667     |\n| ({id: "13"}) | ({id: "26"}) | 0.166667     |\n| ({id: "13"}) | ({id: "32"}) | 0.133333     |\n| ({id: "13"}) | ({id: "29"}) | 0.125        |\n| ({id: "13"}) | ({id: "23"}) | 0.111111     |\n| ({id: "13"}) | ({id: "25"}) | 0            |\n| ({id: "13"}) | ({id: "24"}) | 0            |\n| ({id: "13"}) | ({id: "16"}) | 0            |\n+--------------+--------------+--------------+\n')),Object(i.a)("h2",{id:"adding-new-networkx-algorithms-as-query-modules"},"Adding new NetworkX algorithms as query modules"),Object(i.a)("p",null,"Memgraph comes with over 70 NetworkX algorithms, but if the algorithm you require is missing, you can add it yourself as a Query Module."),Object(i.a)("p",null,"If you are using Docker to run Memgraph you need to create a volume and mount it to access the directory ",Object(i.a)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query-modules"),". This can be done by creating an empty directory ",Object(i.a)("inlineCode",{parentName:"p"},"~modules")," on your host machine and executing the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"docker volume create --driver local --opt type=none  --opt device=~modules --opt o=bind modules\n")),Object(i.a)("p",null,"Now, you can start Memgraph and mount the created volume:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"docker run -it --rm -v modules:/usr/lib/memgraph/query-modules -p 7687:7687 memgraph\n")),Object(i.a)("p",null,"Everything from the directory ",Object(i.a)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query-modules")," will be visible/editable in your mounted volume and vice versa."),Object(i.a)("h3",{id:"community-detection"},"Community detection"),Object(i.a)("p",null,"Detecting communities in a network is a very common problem. Therefore, we need community detection algorithms that can partition the network into multiple communities. Let's create our own module that accomplishes this task.\nCreate a file called ",Object(i.a)("inlineCode",{parentName:"p"},"communities.py")," in the ",Object(i.a)("inlineCode",{parentName:"p"},"~modules")," directory and copy the following code into it:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-python="},"import mgp\nimport networkx as nx\nfrom networkx.algorithms import community\nfrom mgp_networkx import MemgraphDiGraph\n\n\n@mgp.read_proc\ndef detect(\n    ctx: mgp.ProcCtx\n    ) -> mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]]):\n\n    networkxGraph = nx.DiGraph(MemgraphDiGraph(ctx=ctx))\n    communities_generator = community.girvan_newman(networkxGraph)\n\n    return mgp.Record(communities=[\n        list(s) for s in next(communities_generator)])\n")),Object(i.a)("p",null,"We just created a query module with the procedure ",Object(i.a)("inlineCode",{parentName:"p"},"detect()")," that utilizes the Girvan\u2013Newman method to find communities in a graph.\nBefore we can call it, the newly created query module has to be loaded:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),Object(i.a)("p",null,"And now it can be called: "),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"CALL communities.detect() \nYIELD communities\nUNWIND communities as community\nRETURN community\n")),Object(i.a)("p",null,"The resulting communities are:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| community                                                                                                                                                                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [({id: "0"}), ({id: "1"}), ({id: "3"}), ({id: "4"}), ({id: "5"}), ({id: "6"}), ({id: "7"}), ({id: "10"}), ({id: "11"}), ({id: "12"}), ({id: "13"}), ({id: "16"}), ({id: "17"}), ({id: "19"}), ({id: "21"})]                                                             |\n| [({id: "2"}), ({id: "8"}), ({id: "9"}), ({id: "14"}), ({id: "15"}), ({id: "18"}), ({id: "20"}), ({id: "22"}), ({id: "23"}), ({id: "24"}), ({id: "25"}), ({id: "26"}), ({id: "27"}), ({id: "28"}), ({id: "29"}), ({id: "30"}), ({id: "31"}), ({id: "32"}), ({id: "33"})] |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')),Object(i.a)("h2",{id:"further-reading"},"Further reading"),Object(i.a)("p",null,"If you want to find out more about query modules, take a look at our guide on how to create your own: ",Object(i.a)("a",{parentName:"p",href:"/memgraph/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"),"."),Object(i.a)("p",null,"You can also visit our ",Object(i.a)("a",{parentName:"p",href:"../reference-guide/networkx"},"NetworkX Reference guide")," to find out which NetworkX algorithms are already available in Memgraph."))}m.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),m=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,h=u["".concat(o,".").concat(p)]||u[p]||s[p]||i;return n?r.a.createElement(h,l(l({ref:t},d),{},{components:n})):r.a.createElement(h,l({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
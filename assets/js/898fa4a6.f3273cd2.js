(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(8),i=(t(0),t(251)),o={id:"merge",title:"MERGE clause",sidebar_label:"MERGE"},c={unversionedId:"clauses/merge",id:"clauses/merge",isDocsHomePage:!1,title:"MERGE clause",description:"The MERGE clause is used to ensure that a pattern you are looking for exists in the database. This means that if the pattern is not found, it will be created. In a way, this clause is like a combination of MATCH and CREATE.",source:"@site/cypher-manual/clauses/merge.md",slug:"/clauses/merge",permalink:"/cypher-manual/clauses/merge",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/merge.md",version:"current",sidebar_label:"MERGE",sidebar:"cypher_manual",previous:{title:"MATCH clause",permalink:"/cypher-manual/clauses/match"},next:{title:"OPTIONAL MATCH clause",permalink:"/cypher-manual/clauses/optional-match"}},p=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Merging nodes",id:"1-merging-nodes",children:[{value:"1.1 Merging nodes with labels",id:"11-merging-nodes-with-labels",children:[]},{value:"1.2 Merging nodes with properties",id:"12-merging-nodes-with-properties",children:[]},{value:"1.3 Merging nodes with labels and properties",id:"13-merging-nodes-with-labels-and-properties",children:[]},{value:"1.4 Merging nodes with existing node properties",id:"14-merging-nodes-with-existing-node-properties",children:[]}]},{value:"2. Merging relationships",id:"2-merging-relationships",children:[{value:"2.1 Merging relationships",id:"21-merging-relationships",children:[]},{value:"2.2 Merging on undirected relationships",id:"22-merging-on-undirected-relationships",children:[]}]},{value:"3. Merging with <code>ON CREATE</code> and <code>ON MATCH</code>",id:"3-merging-with-on-create-and-on-match",children:[{value:"3.1 Merging with <code>ON CREATE</code>",id:"31-merging-with-on-create",children:[]},{value:"3.2 Merging with <code>ON MATCH</code>",id:"32-merging-with-on-match",children:[]},{value:"3.3 Merging with <code>ON CREATE</code> and <code>ON MATCH</code>",id:"33-merging-with-on-create-and-on-match",children:[]}]},{value:"Data set Queries",id:"data-set-queries",children:[]}],l={toc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," clause is used to ensure that a pattern you are looking for exists in the database. This means that if the pattern is not found, it will be created. In a way, this clause is like a combination of ",Object(i.b)("inlineCode",{parentName:"p"},"MATCH")," and ",Object(i.b)("inlineCode",{parentName:"p"},"CREATE"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#1-merging-nodes"},"Merging nodes"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#11-merging-nodes-with-labels"},"Merging nodes with labels")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#12-merging-nodes-with-properties"},"Merging nodes with properties")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#13-merging-nodes-with-labels-and-properties"},"Merging nodes with labels and properties")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#14-merging-nodes-with-existing-node-properties"},"Merging nodes with existing node properties")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#2-merging-relationships"},"Merging relationships"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#21-merging-relationships"},"Merging relationships")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#22-merging-on-undirected-relationships"},"Merging on undirected relationships")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#3-merging-with-on-create-and-on-match"},"Merging with ON CREATE and ON MATCH"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#31-merging-with-on-create"},"Merging with ON CREATE")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#32-merging-with-on-match"},"Merging with ON MATCH")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#33-merging-with-on-create-and-on-match"},"Merging with ON CREATE and ON MATCH"))))),Object(i.b)("h2",{id:"data-set"},"Data Set"),Object(i.b)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",Object(i.b)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),Object(i.b)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),Object(i.b)("h2",{id:"1-merging-nodes"},"1. Merging nodes"),Object(i.b)("h3",{id:"11-merging-nodes-with-labels"},"1.1 Merging nodes with labels"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," is used on a node with a label that doesn't exist in the database, the node is created."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MERGE (city:City)\nRETURN city;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+---------+\n| city    |\n+---------+\n| (:City) |\n+---------+\n")),Object(i.b)("h3",{id:"12-merging-nodes-with-properties"},"1.2 Merging nodes with properties"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," is used on a node with properties that don't match any existing node, that node is created."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MERGE (city { name: 'London' })\nRETURN city;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'+--------------------+\n| city               |\n+--------------------+\n| ({name: "London"}) |\n+--------------------+\n')),Object(i.b)("h3",{id:"13-merging-nodes-with-labels-and-properties"},"1.3 Merging nodes with labels and properties"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," is used on a node with labels and properties that don't match any existing node, that node is created."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MERGE (city:City { name: 'London' })\nRETURN city;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'+--------------------------+\n| city                     |\n+--------------------------+\n| (:City {name: "London"}) |\n+--------------------------+\n')),Object(i.b)("h3",{id:"14-merging-nodes-with-existing-node-properties"},"1.4 Merging nodes with existing node properties"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," is used with properties on an existing node, a new node is created for each unique value of that property."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person)\nMERGE (h:Human { name: p.name })\nRETURN h.name;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+--------+\n| h.name |\n+--------+\n| John   |\n| Harry  |\n| Anna   |\n+--------+\n")),Object(i.b)("h2",{id:"2-merging-relationships"},"2. Merging relationships"),Object(i.b)("h3",{id:"21-merging-relationships"},"2.1 Merging relationships"),Object(i.b)("p",null,"Just as with nodes, ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," can be used to match or create relationships."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1:Person { name: 'John' }), (p2:Person { name: 'Anna' })\nMERGE (p1)-[r:RELATED]->(p2)\nRETURN r;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+-----------+\n| r         |\n+-----------+\n| [RELATED] |\n+-----------+\n")),Object(i.b)("p",null,"Multiple relationships can be matched or created with ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," in the same query."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1:Person { name: 'John' }), (p2:Person { name: 'Anna' })\nMERGE (p1)-[r1:RELATED_TO]->(p2)-[r2:RELATED_TO]->(p1)\nRETURN r1, r2;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+--------------+--------------+\n| r1           | r2           |\n+--------------+--------------+\n| [RELATED_TO] | [RELATED_TO] |\n+--------------+--------------+\n")),Object(i.b)("h3",{id:"22-merging-on-undirected-relationships"},"2.2 Merging on undirected relationships"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," is used on an undirected relationship, the direction will be chosen at random."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1:Person { name: 'John' }), (p2:Person { name: 'Anna' })\nMERGE path=((p1)-[r:WORKS_WITH]-(p2))\nRETURN path;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'+-----------------------------------------------------------------+\n| p                                                               |\n+-----------------------------------------------------------------+\n| (:Person {name: "John"})-[WORKS_WITH]->(:Person {name: "Anna"}) |\n+-----------------------------------------------------------------+\n')),Object(i.b)("p",null,"In this example, a path is returned to show the direction of the relationships."),Object(i.b)("h2",{id:"3-merging-with-on-create-and-on-match"},"3. Merging with ",Object(i.b)("inlineCode",{parentName:"h2"},"ON CREATE")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"ON MATCH")),Object(i.b)("h3",{id:"31-merging-with-on-create"},"3.1 Merging with ",Object(i.b)("inlineCode",{parentName:"h3"},"ON CREATE")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ON CREATE")," part of a ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," clause will only be executed if the node needs to be created."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MERGE (p:Person { name: 'Lucille' })\nON CREATE SET p.date_of_creation = timestamp()\nRETURN p.name, p.date_of_creation;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+--------------------+--------------------+\n| p.name             | p.date_of_creation |\n+--------------------+--------------------+\n| Lucille            | 1605080852685      |\n+--------------------+--------------------+\n")),Object(i.b)("h3",{id:"32-merging-with-on-match"},"3.2 Merging with ",Object(i.b)("inlineCode",{parentName:"h3"},"ON MATCH")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ON MATCH")," part of a ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," clause will only be executed if the node is found."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MERGE (p:Person { name: 'John' })\nON MATCH SET p.found = TRUE\nRETURN p.name, p.found;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+---------+---------+\n| p.name  | p.found |\n+---------+---------+\n| John    | true    |\n+---------+---------+\n")),Object(i.b)("h3",{id:"33-merging-with-on-create-and-on-match"},"3.3 Merging with ",Object(i.b)("inlineCode",{parentName:"h3"},"ON CREATE")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"ON MATCH")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"MERGE")," clause can be used with both the ",Object(i.b)("inlineCode",{parentName:"p"},"ON CREATE")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ON MATCH")," options."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MERGE (p:Person { name: 'Angela' })\nON CREATE SET p.notFound = TRUE\nON MATCH SET p.found = TRUE\nRETURN p.name, p.notFound, p.found;\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"+------------+------------+------------+\n| p.name     | p.notFound | p.found    |\n+------------+------------+------------+\n| Angela     | true       | Null       |\n+------------+------------+------------+\n")),Object(i.b)("h2",{id:"data-set-queries"},"Data set Queries"),Object(i.b)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}b.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(t),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
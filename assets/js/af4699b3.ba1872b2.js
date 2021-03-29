(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{198:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(8),l=(t(0),t(251)),i={id:"delete",title:"DELETE clause",sidebar_label:"DELETE"},c={unversionedId:"clauses/delete",id:"clauses/delete",isDocsHomePage:!1,title:"DELETE clause",description:"The DELETE clause is used to delete nodes and edges from the database.",source:"@site/cypher-manual/clauses/delete.md",slug:"/clauses/delete",permalink:"/cypher-manual/clauses/delete",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/delete.md",version:"current",sidebar_label:"DELETE",sidebar:"cypher_manual",previous:{title:"CREATE clause",permalink:"/cypher-manual/clauses/create"},next:{title:"MATCH clause",permalink:"/cypher-manual/clauses/match"}},o=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Deleting a node",id:"1-deleting-a-node",children:[]},{value:"2. Deleting a node and its relationships",id:"2-deleting-a-node-and-its-relationships",children:[]},{value:"3. Deleting a relationship",id:"3-deleting-a-relationship",children:[]},{value:"4. Deleting everything",id:"4-deleting-everything",children:[]},{value:"Data set Queries",id:"data-set-queries",children:[]}],p={toc:o};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"DELETE")," clause is used to delete nodes and edges from the database."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#1-deleting-a-node"},"Deleting a node")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#2-deleting-a-node-and-its-relationships"},"Deleting a node and its relationships")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#3-deleting-a-relationship"},"Deleting a relationship")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#4-deleting-everything"},"Deleting everything"))),Object(l.b)("h2",{id:"data-set"},"Data Set"),Object(l.b)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",Object(l.b)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),Object(l.b)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),Object(l.b)("h2",{id:"1-deleting-a-node"},"1. Deleting a node"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"DELETE")," clause can be used to delete a node."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom' })\nDELETE c;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Failed to remove node because of it's existing connections. Consider using DETACH DELETE.\n")),Object(l.b)("p",null,"This will however result in an error because ",Object(l.b)("inlineCode",{parentName:"p"},"DELETE")," can only be used on nodes that have no relationships."),Object(l.b)("h2",{id:"2-deleting-a-node-and-its-relationships"},"2. Deleting a node and its relationships"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"DELETE")," clause can be used to delete a node along with all of its relationships with the keyword ",Object(l.b)("inlineCode",{parentName:"p"},"DETACH"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country { name: 'United Kingdom' })\nDETACH DELETE n;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Empty set (0.001 sec)\n")),Object(l.b)("h2",{id:"3-deleting-a-relationship"},"3. Deleting a relationship"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"DELETE")," clause can be used to delete a relationship."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country { name: 'Germany' })-[r:LIVING_IN]-()\nDELETE r;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Empty set (0.003 sec)\n")),Object(l.b)("h2",{id:"4-deleting-everything"},"4. Deleting everything"),Object(l.b)("p",null,"To delete all nodes and relationships in a graph, use the following query."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nDETACH DELETE n;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Empty set (0.001 sec)\n")),Object(l.b)("h2",{id:"data-set-queries"},"Data set Queries"),Object(l.b)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}s.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||l;return t?r.a.createElement(m,c(c({ref:n},p),{},{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=b;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
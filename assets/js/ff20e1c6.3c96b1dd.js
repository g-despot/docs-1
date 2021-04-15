(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{323:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),c=(n(0),n(329)),o={id:"with",title:"WITH clause",sidebar_label:"WITH"},i={unversionedId:"clauses/with",id:"clauses/with",isDocsHomePage:!1,title:"WITH clause",description:"The WITH is used to chain together parts of a query, piping the results from one to be used as starting points or criteria in the next.",source:"@site/cypher-manual/clauses/with.md",slug:"/clauses/with",permalink:"/cypher-manual/clauses/with",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/with.md",version:"current",sidebar_label:"WITH",sidebar:"cypher_manual",previous:{title:"WHERE clause",permalink:"/cypher-manual/clauses/where"},next:{title:"Other features",permalink:"/cypher-manual/other-features"}},l=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Filter on aggregate functions",id:"1-filter-on-aggregate-functions",children:[]},{value:"2. Sorting results",id:"2-sorting-results",children:[]},{value:"3. Limited path searches",id:"3-limited-path-searches",children:[]},{value:"Data set Queries",id:"data-set-queries",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"WITH")," is used to chain together parts of a query, piping the results from one to be used as starting points or criteria in the next."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#1-filter-on-aggregate-functions"},"Filter on aggregate functions")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#2-sorting-results"},"Sorting results")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#3-limited-path-searches"},"Limited path searches"))),Object(c.b)("h2",{id:"data-set"},"Data Set"),Object(c.b)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",Object(c.b)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),Object(c.b)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),Object(c.b)("h2",{id:"1-filter-on-aggregate-functions"},"1. Filter on aggregate functions"),Object(c.b)("p",null,"Aggregated results have to pass through a ",Object(c.b)("inlineCode",{parentName:"p"},"WITH")," if you want to filter them."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person { name: 'John' })--(person)--\x3e()\nWITH person, count(*) AS foaf\nWHERE foaf > 1\nRETURN person.name;\n")),Object(c.b)("p",null,"Output:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"+-------------+\n| person.name |\n+-------------+\n| Harry       |\n| Anna        |\n+-------------+\n")),Object(c.b)("h2",{id:"2-sorting-results"},"2. Sorting results"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"WITH")," clause can be used to order results before using ",Object(c.b)("inlineCode",{parentName:"p"},"collect()")," on them."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nWITH n\nORDER BY n.name ASC LIMIT 3\nRETURN collect(n.name);\n")),Object(c.b)("p",null,"Output:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'+-------------------------------+\n| collect(n.name)               |\n+-------------------------------+\n| ["Anna", "France", "Germany"] |\n+-------------------------------+\n')),Object(c.b)("h2",{id:"3-limited-path-searches"},"3. Limited path searches"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"WITH")," clause can be used to match paths, limit to a certain number,\nand then match again using those paths as a base."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1 { name: 'John' })--(p2)\nWITH p2\nORDER BY p2.name ASC LIMIT 1\nMATCH (p2)--(p3)\nRETURN p3.name;\n")),Object(c.b)("p",null,"Output:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"+----------------+\n| p3.name        |\n+----------------+\n| John           |\n| Harry          |\n| Germany        |\n| United Kingdom |\n+----------------+\n")),Object(c.b)("h2",{id:"data-set-queries"},"Data set Queries"),Object(c.b)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}p.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
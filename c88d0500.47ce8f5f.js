(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{158:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return i})),a.d(n,"toc",(function(){return u})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(7),o=(a(0),a(179)),c={id:"union",title:"UNION clause",sidebar_label:"UNION"},i={unversionedId:"clauses/union",id:"clauses/union",isDocsHomePage:!1,title:"UNION clause",description:"The UNION clause is used to combine the result of multiple queries.",source:"@site/cypher-manual/clauses/union.md",slug:"/clauses/union",permalink:"/cypher-manual/clauses/union",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/union.md",version:"current",sidebar_label:"UNION",sidebar:"cypher_manual",previous:{title:"SET clause",permalink:"/cypher-manual/clauses/set"},next:{title:"UNWIND clause",permalink:"/cypher-manual/clauses/unwind"}},u=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Combine queries and retain duplicates",id:"1-combine-queries-and-retain-duplicates",children:[]},{value:"2. Combine queries and remove duplicates",id:"2-combine-queries-and-remove-duplicates",children:[]},{value:"Data set Queries",id:"data-set-queries",children:[]}],l={toc:u};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"UNION")," clause is used to combine the result of multiple queries."),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},Object(o.a)("a",{parentName:"li",href:"#1-combine-queries-and-retain-duplicates"},"Combine queries and retain duplicates")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("a",{parentName:"li",href:"#2-combine-queries-and-remove-duplicates"},"Combine queries and remove duplicates"))),Object(o.a)("h2",{id:"data-set"},"Data Set"),Object(o.a)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",Object(o.a)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),Object(o.a)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),Object(o.a)("h2",{id:"1-combine-queries-and-retain-duplicates"},"1. Combine queries and retain duplicates"),Object(o.a)("p",null,"To combine two or more queries and return their results without removing duplicates, use the ",Object(o.a)("inlineCode",{parentName:"p"},"UNION ALL")," clause.\nFirst, let's add a few existing nodes to the data set."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Person { name: 'John' });\nCREATE (:Person { name: 'Anna' });\n")),Object(o.a)("p",null,"A query with the ",Object(o.a)("inlineCode",{parentName:"p"},"UNION ALL")," clause could look like this:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country) \nRETURN c.name as columnName\nUNION ALL \nMATCH (p:Person)\nRETURN p.name AS columnName;\n")),Object(o.a)("p",null,"Output:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},"+----------------+\n| columnName     |\n+----------------+\n| Germany        |\n| France         |\n| United Kingdom |\n| John           |\n| Harry          |\n| Anna           |\n| John           |\n| Anna           |\n+----------------+\n")),Object(o.a)("h2",{id:"2-combine-queries-and-remove-duplicates"},"2. Combine queries and remove duplicates"),Object(o.a)("p",null,"To combine two or more queries and return their results without removing duplicates, use the ",Object(o.a)("inlineCode",{parentName:"p"},"UNION")," clause without ",Object(o.a)("inlineCode",{parentName:"p"},"ALL"),"."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country) \nRETURN c.name as columnName\nUNION \nMATCH (p:Person)\nRETURN p.name AS columnName;\n")),Object(o.a)("p",null,"Output:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},"+----------------+\n| columnName     |\n+----------------+\n| Germany        |\n| France         |\n| United Kingdom |\n| John           |\n| Harry          |\n| Anna           |\n+----------------+\n")),Object(o.a)("h2",{id:"data-set-queries"},"Data set Queries"),Object(o.a)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nCREATE (:Person { name: 'John' });\nCREATE (:Person { name: 'Anna' });\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}s.isMDXComponent=!0},179:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(a),d=t,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return a?r.a.createElement(b,i(i({ref:n},l),{},{components:a})):r.a.createElement(b,i({ref:n},l))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
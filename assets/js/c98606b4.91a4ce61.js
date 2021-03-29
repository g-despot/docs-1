(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{219:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),l=(t(0),t(251)),i={id:"return",title:"RETURN clause",sidebar_label:"RETURN"},c={unversionedId:"clauses/return",id:"clauses/return",isDocsHomePage:!1,title:"RETURN clause",description:"The RETURN clause defines which data should be included in the resulting set.",source:"@site/cypher-manual/clauses/return.md",slug:"/clauses/return",permalink:"/cypher-manual/clauses/return",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/return.md",version:"current",sidebar_label:"RETURN",sidebar:"cypher_manual",previous:{title:"REMOVE clause",permalink:"/cypher-manual/clauses/remove"},next:{title:"SET clause",permalink:"/cypher-manual/clauses/set"}},o=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Returning nodes",id:"1-returning-nodes",children:[]},{value:"2. Returning relationships",id:"2-returning-relationships",children:[]},{value:"3. Returning properties",id:"3-returning-properties",children:[]},{value:"4. Returning multiple elements",id:"4-returning-multiple-elements",children:[]},{value:"5. Returning all elements",id:"5-returning-all-elements",children:[]},{value:"6. Handling uncommon characters",id:"6-handling-uncommon-characters",children:[]},{value:"7. Returning elements with an alias",id:"7-returning-elements-with-an-alias",children:[]},{value:"8. Optional properties",id:"8-optional-properties",children:[]},{value:"9. Returning expressions",id:"9-returning-expressions",children:[]},{value:"10. Returning unique results",id:"10-returning-unique-results",children:[]},{value:"Data set Queries",id:"data-set-queries",children:[]}],u={toc:o};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," clause defines which data should be included in the resulting set. "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#1-returning-nodes"},"Returning nodes")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#2-returning-relationships"},"Returning relationships")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#3-returning-properties"},"Returning properties")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#4-returning-multiple-elements"},"Returning multiple elements")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#5-returning-all-elements"},"Returning all elements")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#6-handling-uncommon-characters"},"Handling uncommon characters")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#7-returning-elements-with-an-alias"},"Returning elements with an alias")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#8-optional-properties"},"Optional properties")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#9-returning-expressions"},"Returning expressions")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#10-returning-unique-results"},"Returning unique results"))),Object(l.b)("h2",{id:"data-set"},"Data Set"),Object(l.b)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",Object(l.b)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),Object(l.b)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),Object(l.b)("h2",{id:"1-returning-nodes"},"1. Returning nodes"),Object(l.b)("p",null,"The node variable needs to be added to the ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," statement."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'+-----------------------------------------------------------------------------------------------------+\n| c                                                                                                   |\n+-----------------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+-----------------------------------------------------------------------------------------------------+\n')),Object(l.b)("h2",{id:"2-returning-relationships"},"2. Returning relationships"),Object(l.b)("p",null,"The relationship variable needs to be added to the ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," statement."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})-[r]-(:Person { name: 'Harry'})\nRETURN type(r);\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+------------+\n| type(r)    |\n+------------+\n| WORKING_IN |\n| LIVING_IN  |\n+------------+\n")),Object(l.b)("h2",{id:"3-returning-properties"},"3. Returning properties"),Object(l.b)("p",null,"The property of a node or a relationship can be returned by using the dot separator."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.name;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+----------------+\n| c.name         |\n+----------------+\n| United Kingdom |\n+----------------+\n")),Object(l.b)("h2",{id:"4-returning-multiple-elements"},"4. Returning multiple elements"),Object(l.b)("p",null,"To return multiple elements separate them with a comma character."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.name, c.population, c.continent;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+----------------+----------------+----------------+\n| c.name         | c.population   | c.continent    |\n+----------------+----------------+----------------+\n| United Kingdom | 66000000       | Europe         |\n+----------------+----------------+----------------+\n")),Object(l.b)("h2",{id:"5-returning-all-elements"},"5. Returning all elements"),Object(l.b)("p",null,"To return all the elements from a query, use the ",Object(l.b)("inlineCode",{parentName:"p"},"*")," symbol."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Country { name: 'United Kingdom'})-[]-(p:Person)\nRETURN *;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'+---------------------------+\n| p                         |\n+---------------------------+\n| (:Person {name: "Harry"}) |\n| (:Person {name: "Harry"}) |\n| (:Person {name: "Anna"})  |\n+---------------------------+\n')),Object(l.b)("h2",{id:"6-handling-uncommon-characters"},"6. Handling uncommon characters"),Object(l.b)("p",null,"Uncommon characters are handled using placeholder variables enclosed with the symbol `","`","`.\nFor example, a query could look like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (`An uncommon variable!`)\nWHERE `An uncommon variable!`.name = 'A'\nRETURN `An uncommon variable!`.value;\n")),Object(l.b)("h2",{id:"7-returning-elements-with-an-alias"},"7. Returning elements with an alias"),Object(l.b)("p",null,"You can specify an alias for an element in the ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," statement using ",Object(l.b)("inlineCode",{parentName:"p"},"AS"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.name AS Name;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+----------------+\n| Name           |\n+----------------+\n| United Kingdom |\n+----------------+\n")),Object(l.b)("h2",{id:"8-optional-properties"},"8. Optional properties"),Object(l.b)("p",null,"If the property being returned does not exist, ",Object(l.b)("inlineCode",{parentName:"p"},"null")," will be returned."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.color;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+---------+\n| c.color |\n+---------+\n| Null    |\n+---------+\n")),Object(l.b)("h2",{id:"9-returning-expressions"},"9. Returning expressions"),Object(l.b)("p",null," Expressions can be included in the ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," statement."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.name = 'United Kingdom', \"Literal\";\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"+---------------------------+---------------------------+\n| c.name = 'United Kingdom' | \"Literal\"                 |\n+---------------------------+---------------------------+\n| true                      | Literal                   |\n+---------------------------+---------------------------+\n")),Object(l.b)("h2",{id:"10-returning-unique-results"},"10. Returning unique results"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," statement can be followed by the ",Object(l.b)("inlineCode",{parentName:"p"},"DISTINCT")," operator, which will remove duplicate results."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH ()-[:LIVING_IN]->(c)\nRETURN DISTINCT c;\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'+-----------------------------------------------------------------------------------------------------+\n| c                                                                                                   |\n+-----------------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000})         |\n| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+-----------------------------------------------------------------------------------------------------+\n')),Object(l.b)("h2",{id:"data-set-queries"},"Data set Queries"),Object(l.b)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}p.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,d=b["".concat(i,".").concat(m)]||b[m]||s[m]||l;return t?a.a.createElement(d,c(c({ref:n},u),{},{components:t})):a.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<l;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
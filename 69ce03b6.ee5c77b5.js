(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{130:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return o})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return d}));var t=n(3),r=n(7),l=(n(0),n(198)),i={id:"writing-new-data",title:"Writing new data",sidebar_label:"Writing new data"},o={unversionedId:"writing-new-data",id:"writing-new-data",isDocsHomePage:!1,title:"Writing new data",description:"For adding new data, you can use the following clauses.",source:"@site/cypher-manual/writing-new-data.md",slug:"/writing-new-data",permalink:"/cypher-manual/writing-new-data",editUrl:"https://github.com/memgraph/docs/tree/main/cypher-manual/writing-new-data.md",version:"current",sidebar_label:"Writing new data",sidebar:"cypher_manual",previous:{title:"Reading existing data",permalink:"/cypher-manual/reading-existing-data"},next:{title:"Reading and writing",permalink:"/cypher-manual/reading-and-writing"}},c=[{value:"CREATE",id:"create",children:[]},{value:"SET",id:"set",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"REMOVE",id:"remove",children:[]}],p={toc:c};function d(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"For adding new data, you can use the following clauses."),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"CREATE"),", for creating new nodes and edges."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"SET"),", for adding new or updating existing labels and properties."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"DELETE"),", for deleting nodes and edges."),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"REMOVE"),", for removing labels and properties.")),Object(l.a)("p",null,"You can still use the ",Object(l.a)("inlineCode",{parentName:"p"},"RETURN")," clause to produce results after writing, but it\nis not mandatory."),Object(l.a)("p",null,"Details on which kind of data can be stored in ",Object(l.a)("em",{parentName:"p"},"Memgraph")," can be found in\n",Object(l.a)("a",{parentName:"p",href:"../memgraph/concepts/storage"},"Data Storage")," chapter."),Object(l.a)("h2",{id:"create"},"CREATE"),Object(l.a)("p",null,"This clause is used to add new nodes and edges to the database. The creation\nis done by providing a pattern, similarly to ",Object(l.a)("inlineCode",{parentName:"p"},"MATCH")," clause."),Object(l.a)("p",null,"For example, to create 2 new nodes connected with a new edge, use this query."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"CREATE (node2)-[:edge_type]->(node2);\n")),Object(l.a)("p",null,"Labels and properties can be set during creation using the same syntax as in\n",Object(l.a)("inlineCode",{parentName:"p"},"MATCH")," patterns. For example, creating a node with a label and a\nproperty:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},'CREATE (node :Label {property: "my property value"});\n')),Object(l.a)("p",null,"Additional information on ",Object(l.a)("inlineCode",{parentName:"p"},"CREATE")," is\n",Object(l.a)("a",{parentName:"p",href:"/cypher-manual/clauses/create"},"here"),"."),Object(l.a)("h2",{id:"set"},"SET"),Object(l.a)("p",null,"The ",Object(l.a)("inlineCode",{parentName:"p"},"SET")," clause is used to update labels and properties of already existing\ndata."),Object(l.a)("p",null,"Example. Incrementing everyone's age by 1."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) SET n.age = n.age + 1;\n")),Object(l.a)("p",null,"Click\n",Object(l.a)("a",{parentName:"p",href:"/cypher-manual/clauses/set"},"here"),"\nfor a more detailed explanation on what can be done with ",Object(l.a)("inlineCode",{parentName:"p"},"SET"),"."),Object(l.a)("h2",{id:"delete"},"DELETE"),Object(l.a)("p",null,"This clause is used to delete nodes and edges from the database."),Object(l.a)("p",null,"Example. Removing all edges of a single type."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH ()-[edge :type]-() DELETE edge;\n")),Object(l.a)("p",null,"When testing the database, you want to often have a clean start by deleting\nevery node and edge in the database. It is reasonable that deleting each node\nshould delete all edges coming into or out of that node."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) DELETE node;\n")),Object(l.a)("p",null,"But, openCypher prevents accidental deletion of edges. Therefore, the above\nquery will report an error. Instead, you need to use the ",Object(l.a)("inlineCode",{parentName:"p"},"DETACH")," keyword,\nwhich will remove edges from a node you are deleting. The following should\nwork and ",Object(l.a)("em",{parentName:"p"},"delete everything")," in the database."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) DETACH DELETE node;\n")),Object(l.a)("p",null,"More examples are\n",Object(l.a)("a",{parentName:"p",href:"/cypher-manual/clauses/delete"},"here"),"."),Object(l.a)("h2",{id:"remove"},"REMOVE"),Object(l.a)("p",null,"The ",Object(l.a)("inlineCode",{parentName:"p"},"REMOVE")," clause is used to remove labels and properties from nodes and\nedges."),Object(l.a)("p",null,"Example."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :WrongLabel) REMOVE n :WrongLabel, n.property;\n")))}d.isMDXComponent=!0},198:function(e,a,n){"use strict";n.d(a,"a",(function(){return b}));var t=n(0),r=n.n(t);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var a=r.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=t,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||l;return n?r.a.createElement(m,o(o({ref:a},p),{},{components:n})):r.a.createElement(m,o({ref:a},p))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
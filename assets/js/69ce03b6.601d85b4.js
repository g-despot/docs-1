(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(8),l=(t(0),t(251)),i={id:"writing-new-data",title:"Writing new data",sidebar_label:"Writing new data"},o={unversionedId:"writing-new-data",id:"writing-new-data",isDocsHomePage:!1,title:"Writing new data",description:"For adding new data, you can use the following clauses.",source:"@site/cypher-manual/writing-new-data.md",slug:"/writing-new-data",permalink:"/cypher-manual/writing-new-data",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/writing-new-data.md",version:"current",sidebar_label:"Writing new data",sidebar:"cypher_manual",previous:{title:"Reading existing data",permalink:"/cypher-manual/reading-existing-data"},next:{title:"Reading and writing",permalink:"/cypher-manual/reading-and-writing"}},c=[{value:"CREATE",id:"create",children:[]},{value:"SET",id:"set",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"REMOVE",id:"remove",children:[]}],p={toc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"For adding new data, you can use the following clauses."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CREATE"),", for creating new nodes and edges."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SET"),", for adding new or updating existing labels and properties."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DELETE"),", for deleting nodes and edges."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"REMOVE"),", for removing labels and properties.")),Object(l.b)("p",null,"You can still use the ",Object(l.b)("inlineCode",{parentName:"p"},"RETURN")," clause to produce results after writing, but it\nis not mandatory."),Object(l.b)("p",null,"Details on which kind of data can be stored in ",Object(l.b)("em",{parentName:"p"},"Memgraph")," can be found in\n",Object(l.b)("a",{parentName:"p",href:"/memgraph/concepts/storage"},"Data Storage")," chapter."),Object(l.b)("h2",{id:"create"},"CREATE"),Object(l.b)("p",null,"This clause is used to add new nodes and edges to the database. The creation\nis done by providing a pattern, similarly to ",Object(l.b)("inlineCode",{parentName:"p"},"MATCH")," clause."),Object(l.b)("p",null,"For example, to create 2 new nodes connected with a new edge, use this query."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE (node2)-[:edge_type]->(node2);\n")),Object(l.b)("p",null,"Labels and properties can be set during creation using the same syntax as in\n",Object(l.b)("inlineCode",{parentName:"p"},"MATCH")," patterns. For example, creating a node with a label and a\nproperty:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},'CREATE (node :Label {property: "my property value"});\n')),Object(l.b)("p",null,"Additional information on ",Object(l.b)("inlineCode",{parentName:"p"},"CREATE")," is\n",Object(l.b)("a",{parentName:"p",href:"/cypher-manual/clauses/create"},"here"),"."),Object(l.b)("h2",{id:"set"},"SET"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"SET")," clause is used to update labels and properties of already existing\ndata."),Object(l.b)("p",null,"Example. Incrementing everyone's age by 1."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) SET n.age = n.age + 1;\n")),Object(l.b)("p",null,"Click\n",Object(l.b)("a",{parentName:"p",href:"/cypher-manual/clauses/set"},"here"),"\nfor a more detailed explanation on what can be done with ",Object(l.b)("inlineCode",{parentName:"p"},"SET"),"."),Object(l.b)("h2",{id:"delete"},"DELETE"),Object(l.b)("p",null,"This clause is used to delete nodes and edges from the database."),Object(l.b)("p",null,"Example. Removing all edges of a single type."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH ()-[edge :type]-() DELETE edge;\n")),Object(l.b)("p",null,"When testing the database, you want to often have a clean start by deleting\nevery node and edge in the database. It is reasonable that deleting each node\nshould delete all edges coming into or out of that node."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) DELETE node;\n")),Object(l.b)("p",null,"But, openCypher prevents accidental deletion of edges. Therefore, the above\nquery will report an error. Instead, you need to use the ",Object(l.b)("inlineCode",{parentName:"p"},"DETACH")," keyword,\nwhich will remove edges from a node you are deleting. The following should\nwork and ",Object(l.b)("em",{parentName:"p"},"delete everything")," in the database."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) DETACH DELETE node;\n")),Object(l.b)("p",null,"More examples are\n",Object(l.b)("a",{parentName:"p",href:"/cypher-manual/clauses/delete"},"here"),"."),Object(l.b)("h2",{id:"remove"},"REMOVE"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"REMOVE")," clause is used to remove labels and properties from nodes and\nedges."),Object(l.b)("p",null,"Example."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :WrongLabel) REMOVE n :WrongLabel, n.property;\n")))}d.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,m=b["".concat(i,".").concat(u)]||b[u]||s[u]||l;return t?r.a.createElement(m,o(o({ref:n},p),{},{components:t})):r.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
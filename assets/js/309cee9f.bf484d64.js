(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(251)),i={id:"uniqueness-constraint",title:"Uniqueness constraint",sidebar_label:"Uniqueness constraint"},s={unversionedId:"database-functionalities/constraints/uniqueness-constraint",id:"version-1.3.0/database-functionalities/constraints/uniqueness-constraint",isDocsHomePage:!1,title:"Uniqueness constraint",description:"Uniqueness constraint enforces that each label, property_set pair is unique.",source:"@site/memgraph_versioned_docs/version-1.3.0/database-functionalities/constraints/uniqueness-constraint.md",slug:"/database-functionalities/constraints/uniqueness-constraint",permalink:"/memgraph/database-functionalities/constraints/uniqueness-constraint",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/database-functionalities/constraints/uniqueness-constraint.md",version:"1.3.0",sidebar_label:"Uniqueness constraint",sidebar:"version-1.3.0/memgraph",previous:{title:"Existence constraint",permalink:"/memgraph/database-functionalities/constraints/existence-constraint"},next:{title:"How to use built-in query modules",permalink:"/memgraph/database-functionalities/query-modules/built-in-query-modules"}},c=[{value:"Where to next?",id:"where-to-next",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Uniqueness constraint enforces that each ",Object(o.b)("inlineCode",{parentName:"p"},"label, property_set")," pair is unique.\nThis constraint can be enforced using the following language construct:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:label) ASSERT n.property1, n.property2, ..., IS UNIQUE;\n")),Object(o.b)("p",null,"For example, suppose you are keeping track of basic employee info in your\ndatabase. Obviously, each employee should have a unique e-mail address. You can\nenforce this by issuing the following query:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\n")),Object(o.b)("p",null,"You can confirm that your constraint was successfully created by issuing the\nfollowing query:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"SHOW CONSTRAINT INFO;\n")),Object(o.b)("p",null,"You should get a result similar to this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n+-----------------+-----------------+-----------------+\n")),Object(o.b)("p",null,"Trying to modify the database in a way that violates the constraint will yield\nan error ",Object(o.b)("inlineCode",{parentName:"p"},"Unable to commit due to unique constraint violation on\n:Employee(email)"),"."),Object(o.b)("p",null,"Naturally, you can also specify multiple properties when creating uniqueness\nconstraints. For example, we might want to enforce that all employees have a\nunique ",Object(o.b)("inlineCode",{parentName:"p"},"(name, surname)")," pair (obviously, this would be a bad decision in real\nlife). This can be achieved by the following query:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),Object(o.b)("p",null,"At this point, ",Object(o.b)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields the following result:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n| unique          | Employee        | name, surname   |\n+-----------------+-----------------+-----------------+\n")),Object(o.b)("p",null,"Constraints can also be dropped using the ",Object(o.b)("inlineCode",{parentName:"p"},"DROP")," keyword. For example,\ndropping the previously created constraints can be done by the following\nquery:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"DROP CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\nDROP CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),Object(o.b)("p",null,"Now, ",Object(o.b)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields an empty set."),Object(o.b)("h3",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"To learn more about Memgraph's functionalities, visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/tutorials/tutorials"},"Tutorials")),"."))}u.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return t?a.a.createElement(d,s(s({ref:n},l),{},{components:t})):a.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
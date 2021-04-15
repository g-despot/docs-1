(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(329)),b={id:"functions",title:"Functions",sidebar_label:"Functions"},i={unversionedId:"functions",id:"functions",isDocsHomePage:!1,title:"Functions",description:"This section contains the list of supported functions.",source:"@site/cypher-manual/functions.md",slug:"/functions",permalink:"/cypher-manual/functions",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/functions.md",version:"current",sidebar_label:"Functions",sidebar:"cypher_manual",previous:{title:"Reading and writing",permalink:"/cypher-manual/reading-and-writing"},next:{title:"Cypher clauses overview",permalink:"/cypher-manual/clauses"}},c=[],d={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This section contains the list of supported functions."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"startNode")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the starting node of an edge.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"endNode")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the destination node of an edge.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"degree")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the number of edges (both incoming and outgoing) of a node.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"head")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the first element of a list.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"last")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the last element of a list.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"properties")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the properties of a node or an edge.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"size")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the number of elements in a list or a map. When given a string it returns the number of characters. When given a path it returns the number of expansions (edges) in that path.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"toBoolean")),Object(l.b)("td",{parentName:"tr",align:null},"Converts the argument to a boolean.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"toFloat")),Object(l.b)("td",{parentName:"tr",align:null},"Converts the argument to a floating point number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"toInteger")),Object(l.b)("td",{parentName:"tr",align:null},"Converts the argument to an integer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"type")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the type of an edge as a character string.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"keys")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a list keys of properties from an edge or a node. Each key is represented as a string of characters.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"labels")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a list of labels from a node. Each label is represented as a character string.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"nodes")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a list of nodes from a path.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"relationships")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a list of relationships (edges) from a path.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"range")),Object(l.b)("td",{parentName:"tr",align:null},"Constructs a list of value in given range.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"tail")),Object(l.b)("td",{parentName:"tr",align:null},"Returns all elements after the first of a given list.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"uniformSample")),Object(l.b)("td",{parentName:"tr",align:null},"Returns elements of given list randomly oversampled or undersampled to desired size, e.g. ",Object(l.b)("inlineCode",{parentName:"td"},"uniformSample([1, 2, 3], 5) -> [1, 2, 3, 2, 3]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"abs")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the absolute value of a number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"ceil")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the smallest integer greater than or equal to given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"floor")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the largest integer smaller than or equal to given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"round")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the number, rounded to the nearest integer. Tie-breaking is done using the ",Object(l.b)("em",{parentName:"td"},"commercial rounding"),",  where -1.5 produces -2 and 1.5 produces 2.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"exp")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates ",Object(l.b)("inlineCode",{parentName:"td"},"e^n")," where ",Object(l.b)("inlineCode",{parentName:"td"},"e")," is the base of the natural logarithm, and ",Object(l.b)("inlineCode",{parentName:"td"},"n")," is the given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"log")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the natural logarithm of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"log10")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the logarithm (base 10) of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"sqrt")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the square root of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"acos")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the arccosine of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"asin")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the arcsine of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"atan")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the arctangent of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"atan2")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the arctangent2 of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"cos")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the cosine of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"sin")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the sine of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"tan")),Object(l.b)("td",{parentName:"tr",align:null},"Calculates the tangent of a given number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"sign")),Object(l.b)("td",{parentName:"tr",align:null},"Applies the signum function to a given number and returns the result. The signum of positive numbers is 1, of negative -1 and for 0 returns 0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"e")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the base of the natural logarithm.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pi")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the constant ",Object(l.b)("em",{parentName:"td"},"pi"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"rand")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a random floating point number between 0 (inclusive) and 1 (exclusive).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"startsWith")),Object(l.b)("td",{parentName:"tr",align:null},"Check if the first argument starts with the second.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"endsWith")),Object(l.b)("td",{parentName:"tr",align:null},"Check if the first argument ends with the second.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"contains")),Object(l.b)("td",{parentName:"tr",align:null},"Check if the first argument has an element which is equal to the second argument.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"left")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a string containing the specified number of leftmost characters of the original string.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"lTrim")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the original string with leading whitespace removed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"replace")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a string in which all occurrences of a specified string in the original string have been replaced by another (specified) string.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"reverse")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a string in which the order of all characters in the original string have been reversed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"right")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a string containing the specified number of rightmost characters of the original string.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"rTrim")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the original string with trailing whitespace removed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"split")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a list of strings resulting from the splitting of the original string around matches of the given delimiter.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"substring")),Object(l.b)("td",{parentName:"tr",align:null},"Returns a substring of the original string, beginning with a 0-based index start and length.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"toLower")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the original string in lowercase.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"toString")),Object(l.b)("td",{parentName:"tr",align:null},"Converts an integer, float or boolean value to a string.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"toUpper")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the original string in uppercase.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"trim")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the original string with leading and trailing whitespace removed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"all")),Object(l.b)("td",{parentName:"tr",align:null},"Check if all elements of a list satisfy a predicate. The syntax is: ",Object(l.b)("inlineCode",{parentName:"td"},"all(variable IN list WHERE predicate)"),".",Object(l.b)("br",null)," NOTE: Whenever possible, use Memgraph's lambda functions when matching instead.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"single")),Object(l.b)("td",{parentName:"tr",align:null},"Check if only one element of a list satisfies a predicate. The syntax is: ",Object(l.b)("inlineCode",{parentName:"td"},"single(variable IN list WHERE predicate)"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"reduce")),Object(l.b)("td",{parentName:"tr",align:null},"Accumulate list elements into a single result by applying an expression. The syntax is: ",Object(l.b)("inlineCode",{parentName:"td"},"reduce(accumulator = initial_value, variable IN list \\| expression)"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"extract")),Object(l.b)("td",{parentName:"tr",align:null},"A list of values obtained by evaluating an expression for each element in list. The syntax is: ",Object(l.b)("inlineCode",{parentName:"td"},"extract(variable IN list \\| expression)"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"assert")),Object(l.b)("td",{parentName:"tr",align:null},"Raises an exception reported to the client if the given argument is not ",Object(l.b)("inlineCode",{parentName:"td"},"true"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"counter")),Object(l.b)("td",{parentName:"tr",align:null},"Generates integers that are guaranteed to be unique within a single query for a given counter name. The syntax is ",Object(l.b)("inlineCode",{parentName:"td"},'counter("counter_name", initial_value, [increment] = 1)'),". The increment parameter can be any integer besides zero.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"timestamp")),Object(l.b)("td",{parentName:"tr",align:null},"Returns the difference, measured in milliseconds, between the current time and midnight, January 1, 1970 UTC.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"id")),Object(l.b)("td",{parentName:"tr",align:null},"Returns identifier for a given node or edge. The identifier is generated during the initialization of node or edge and will be persisted through the durability mechanism.")))))}o.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),o=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=o(n),u=a,s=m["".concat(b,".").concat(u)]||m[u]||p[u]||l;return n?r.a.createElement(s,i(i({ref:t},d),{},{components:n})):r.a.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var d=2;d<l;d++)b[d]=n[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
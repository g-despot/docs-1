(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{240:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),r=t(8),i=(t(0),t(251)),o={id:"analyzing-ted-talks",title:"Analyzing TED Talks",sidebar_label:"Analyzing TED Talks"},l={unversionedId:"tutorials/analyzing-ted-talks",id:"version-1.3.0/tutorials/analyzing-ted-talks",isDocsHomePage:!1,title:"Analyzing TED Talks",description:"This article is a part of a series intended to show how to use Memgraph",source:"@site/memgraph_versioned_docs/version-1.3.0/tutorials/analyzing-ted-talks.md",slug:"/tutorials/analyzing-ted-talks",permalink:"/memgraph/tutorials/analyzing-ted-talks",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/tutorials/analyzing-ted-talks.md",version:"1.3.0",sidebar_label:"Analyzing TED Talks",sidebar:"version-1.3.0/memgraph",previous:{title:"Tutorials overview",permalink:"/memgraph/tutorials/tutorials"},next:{title:"Backpacking through Europe",permalink:"/memgraph/tutorials/backpacking-through-europe"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Data Model",id:"data-model",children:[]},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[]},{value:"Example queries using Cypher",id:"example-queries-using-cypher",children:[]}],p={toc:s};function c(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article is a part of a series intended to show how to use Memgraph\non real-world data to retrieve some interesting and useful\ninformation."),Object(i.b)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",Object(i.b)("a",{parentName:"p",href:"/memgraph/tutorials/tutorials"},"tutorial overview section"),"."),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.ted.com/"},"TED")," is a nonprofit organization devoted to spreading\nideas, usually in the form of short, powerful talks.\nToday, TED talks are influential videos from expert speakers on almost all\ntopics ","\u2014"," from science to business to global issues.\nHere we present a small dataset which consists of 97 talks, show how to model\nthis data as a graph and demonstrate a few example queries."),Object(i.b)("h2",{id:"data-model"},"Data Model"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each TED talk has a main speaker, so we\nidentify two types of nodes ","\u2014"," ",Object(i.b)("inlineCode",{parentName:"li"},"Talk")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Speaker"),". "),Object(i.b)("li",{parentName:"ul"},"We add an edge of type ",Object(i.b)("inlineCode",{parentName:"li"},"Gave")," pointing to a ",Object(i.b)("inlineCode",{parentName:"li"},"Talk")," from its main ",Object(i.b)("inlineCode",{parentName:"li"},"Speaker"),"."),Object(i.b)("li",{parentName:"ul"},"Each speaker has a name so we can add property ",Object(i.b)("inlineCode",{parentName:"li"},"name")," to ",Object(i.b)("inlineCode",{parentName:"li"},"Speaker")," node."),Object(i.b)("li",{parentName:"ul"},"We'll add properties ",Object(i.b)("inlineCode",{parentName:"li"},"name"),", ",Object(i.b)("inlineCode",{parentName:"li"},"title")," and ",Object(i.b)("inlineCode",{parentName:"li"},"description")," to node\n",Object(i.b)("inlineCode",{parentName:"li"},"Talk"),". "),Object(i.b)("li",{parentName:"ul"},"Each talk is given in a specific TED event, so we can\ncreate node ",Object(i.b)("inlineCode",{parentName:"li"},"Event")," with property ",Object(i.b)("inlineCode",{parentName:"li"},"name")," and relationship ",Object(i.b)("inlineCode",{parentName:"li"},"InEvent")," between\ntalk and event."),Object(i.b)("li",{parentName:"ul"},"Talks are tagged with keywords to facilitate searching, hence we\nadd node ",Object(i.b)("inlineCode",{parentName:"li"},"Tag")," with property ",Object(i.b)("inlineCode",{parentName:"li"},"name")," and relationship ",Object(i.b)("inlineCode",{parentName:"li"},"HasTag")," between talk and\ntag."),Object(i.b)("li",{parentName:"ul"},"Users give ratings to each talk by selecting up to three\npredefined string values. Therefore we add node ",Object(i.b)("inlineCode",{parentName:"li"},"Rating")," with these values as\nproperty ",Object(i.b)("inlineCode",{parentName:"li"},"name")," and relationship",Object(i.b)("inlineCode",{parentName:"li"},"HasRating")," with property ",Object(i.b)("inlineCode",{parentName:"li"},"user_count")," between\ntalk and rating nodes.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"TED",src:t(360).default})),Object(i.b)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),Object(i.b)("p",null,"You have two options for exploring this dataset.\nIf you just want to take a look at the dataset and try out a few queries, open\n",Object(i.b)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and continue with\nthe tutorial there. Note that you will not be able to execute ",Object(i.b)("inlineCode",{parentName:"p"},"write")," operations."),Object(i.b)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",Object(i.b)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and navigate\nto the ",Object(i.b)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",Object(i.b)("inlineCode",{parentName:"p"},"TED talks")," and continue with the tutorial."),Object(i.b)("h2",{id:"example-queries-using-cypher"},"Example queries using Cypher"),Object(i.b)("p",null,"In the queries below, we are using ",Object(i.b)("a",{parentName:"p",href:"/cypher-manual"},"Cypher"),"\nto query Memgraph via the console."),Object(i.b)("p",null,"1) Find all talks given by specific speaker:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Speaker {name: "Hans Rosling"})-[:Gave]->(m:Talk)\nRETURN m.title;\n')),Object(i.b)("p",null,"2) Find the top 20 speakers with most talks given:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Speaker)-[:Gave]->(m)\nRETURN n.name, COUNT(m) AS TalksGiven\nORDER BY TalksGiven DESC LIMIT 20;\n")),Object(i.b)("p",null,"3) Find talks related by tag to specific talk and count them:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Talk {name: "Michael Green: Why we should build wooden skyscrapers"})\n      -[:HasTag]->(t:Tag)<-[:HasTag]-(m:Talk)\nWITH * ORDER BY m.name\nRETURN t.name, COLLECT(m.name), COUNT(m) AS TalksCount\nORDER BY TalksCount DESC;\n')),Object(i.b)("p",null,"4) Find 20 most frequently used tags:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (t:Tag)<-[:HasTag]-(n:Talk)\nRETURN t.name AS Tag, COUNT(n) AS TalksCount\nORDER BY TalksCount DESC, Tag LIMIT 20;\n")),Object(i.b)("p",null,'5) Find 20 talks most rated as "Funny". If you want to query by other ratings,\npossible values are: Obnoxious, Jaw-dropping, OK, Persuasive, Beautiful,\nConfusing, Longwinded, Unconvincing, Fascinating, Ingenious, Courageous, Funny,\nInformative and Inspiring.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (r:Rating{name:"Funny"})<-[e:HasRating]-(m:Talk)\nRETURN m.name, e.user_count ORDER BY e.user_count DESC LIMIT 20;\n')),Object(i.b)("p",null,"6) Find inspiring talks and their speakers from the field of technology:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Talk)-[:HasTag]->(m:Tag {name: "technology"})\nMATCH (n)-[r:HasRating]->(p:Rating {name: "Inspiring"})\nMATCH (n)<-[:Gave]-(s:Speaker)\nWHERE r.user_count > 1000\nRETURN n.title, s.name, r.user_count ORDER BY r.user_count DESC;\n')),Object(i.b)("p",null,"7) Now let's see one real-world example ","\u2014"," how to make a real-time\nrecommendation. If you've just watched a talk from a certain\nspeaker (e.g. Hans Rosling) you might be interested in finding more talks from\nthe same speaker on a similar topic:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Speaker {name: "Hans Rosling"})-[:Gave]->(m:Talk)\nMATCH (t:Talk {title: "New insights on poverty"})-[:HasTag]->(tag:Tag)<-[:HasTag]-(m)\nWITH * ORDER BY tag.name\nRETURN m.title as Title, COLLECT(tag.name), COUNT(tag) as TagCount\nORDER BY TagCount DESC, Title;\n')),Object(i.b)("p",null,"The following few queries are focused on extracting information about\nTED events."),Object(i.b)("p",null,"8) Find how many talks were given per event:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Event)<-[:InEvent]-(t:Talk)\nRETURN n.name as Event, COUNT(t) AS TalksCount\nORDER BY TalksCount DESC, Event\nLIMIT 20;\n")),Object(i.b)("p",null,"9) Find the most popular tags in the specific event:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Event {name:"TED2006"})<-[:InEvent]-(t:Talk)-[:HasTag]->(tag:Tag)\nRETURN tag.name as Tag, COUNT(t) AS TalksCount\nORDER BY TalksCount DESC, Tag\nLIMIT 20;\n')),Object(i.b)("p",null,"10) Discover which speakers participated in more than 2 events:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Speaker)-[:Gave]->(t:Talk)-[:InEvent]->(e:Event)\nWITH n, COUNT(e) AS EventsCount WHERE EventsCount > 2\nRETURN n.name as Speaker, EventsCount\nORDER BY EventsCount DESC, Speaker;\n")),Object(i.b)("p",null,"11) For each speaker search for other speakers that participated in same\nevents:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Speaker)-[:Gave]->()-[:InEvent]->(e:Event)<-[:InEvent]-()<-[:Gave]-(m:Speaker)\nWHERE n.name != m.name\nWITH DISTINCT n, m ORDER BY m.name\nRETURN n.name AS Speaker, COLLECT(m.name) AS Others\nORDER BY Speaker;\n")))}c.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),c=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return t?r.a.createElement(d,l(l({ref:n},p),{},{components:t})):r.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},360:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/TED_metagraph-cfc7ffadb73736228f2e33e6b44133c2.png"}}]);
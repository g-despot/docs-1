(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{236:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(3),i=r(8),a=(r(0),r(251)),o={id:"movie-recommendation",title:"Movie recommendation system",sidebar_label:"Movie recommendation system"},s={unversionedId:"tutorials/movie-recommendation",id:"version-1.3.0/tutorials/movie-recommendation",isDocsHomePage:!1,title:"Movie recommendation system",description:"This article is a part of a series intended to show users how to use Memgraph",source:"@site/memgraph_versioned_docs/version-1.3.0/tutorials/movie-recommendation.md",slug:"/tutorials/movie-recommendation",permalink:"/memgraph/tutorials/movie-recommendation",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/tutorials/movie-recommendation.md",version:"1.3.0",sidebar_label:"Movie recommendation system",sidebar:"version-1.3.0/memgraph",previous:{title:"Marvel Comic Universe social network",permalink:"/memgraph/tutorials/marvel-universe"},next:{title:"Game of Thrones deaths",permalink:"/memgraph/tutorials/got-deaths"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Importing the dataset",id:"importing-the-dataset",children:[]},{value:"Example queries",id:"example-queries",children:[]}],c={toc:l};function m(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This article is a part of a series intended to show users how to use Memgraph\non real-world data and, by doing so, retrieve some interesting and useful\ninformation."),Object(a.b)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",Object(a.b)("a",{parentName:"p",href:"/memgraph/tutorials/tutorials"},"tutorial overview section"),"."),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"This example shows how to implement a simple recommendation system\nwith ",Object(a.b)("inlineCode",{parentName:"p"},"openCypher")," in Memgraph.\nFirst, we will show how to perform simple operations,\nand then we will implement a query for the movie recommendation."),Object(a.b)("h2",{id:"data-model"},"Data model"),Object(a.b)("p",null,"In this example, we will use reduced MovieLens dataset (less than 1000 movies).\nThere are three different types of data: ",Object(a.b)("inlineCode",{parentName:"p"},"Movie"),", ",Object(a.b)("inlineCode",{parentName:"p"},"User")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Genre"),".\nMovies have properties: ",Object(a.b)("inlineCode",{parentName:"p"},"id")," and ",Object(a.b)("inlineCode",{parentName:"p"},"title"),"\nUsers have properties: ",Object(a.b)("inlineCode",{parentName:"p"},"id"),", ",Object(a.b)("inlineCode",{parentName:"p"},"name"),"\nGenres have a property: ",Object(a.b)("inlineCode",{parentName:"p"},"name")),Object(a.b)("p",null,"Each movie can be connected with ",Object(a.b)("inlineCode",{parentName:"p"},":ofGenre")," edge to different genres.\nA user can rate some movie. Rating is modeled with ",Object(a.b)("inlineCode",{parentName:"p"},":Rating")," edge\nand this edge has property ",Object(a.b)("inlineCode",{parentName:"p"},"score")," ","\u2014"," float number between 0 and 5."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Movies",src:r(359).default})),Object(a.b)("h2",{id:"importing-the-dataset"},"Importing the dataset"),Object(a.b)("p",null,"To import the dataset, download the ",Object(a.b)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab"),"\ndesktop application and navigate to the ",Object(a.b)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there,\nchoose the dataset ",Object(a.b)("inlineCode",{parentName:"p"},"MovieLens: Movies, genres and users")," and continue with the tutorial."),Object(a.b)("h2",{id:"example-queries"},"Example queries"),Object(a.b)("p",null,"1) List first 10 movies sorted by title"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (m :Movie) RETURN m ORDER BY m.title LIMIT 10;\n")),Object(a.b)("p",null,"2) List last 15 users sorted by name"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u: User) RETURN u ORDER BY u.name DESC LIMIT 15;\n")),Object(a.b)("p",null,"3) List 10 movies that have ",Object(a.b)("em",{parentName:"p"},"Comedy")," and ",Object(a.b)("em",{parentName:"p"},"Action")," genres and sort them by title"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (m :Movie)-[:ofGenre]->(:Genre {name:"Action"}), (m)-[:ofGenre]->(:Genre {name:"Comedy"})\nRETURN m.title ORDER BY m.title LIMIT 10;\n')),Object(a.b)("p",null,"4) Uniqueness constraint for genre:"),Object(a.b)("p",null,"Let's create a new unique constraint:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (g:Genre) ASSERT g.name IS UNIQUE;\n")),Object(a.b)("p",null,"And now we can try to create new ",Object(a.b)("inlineCode",{parentName:"p"},"Genre"),' node with existing `name\': "Comedy":'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Genre {name: "Comedy"});\n')),Object(a.b)("p",null,'This query returns an error because genre "Comedy" already exists.'),Object(a.b)("p",null,"5) Average score for ",Object(a.b)("em",{parentName:"p"},"Star Wars")," movie:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (u :User)-[r :Rating]->(m :Movie {title:"Star Wars"}) RETURN AVG(r.score);\n')),Object(a.b)("p",null,"6) Average scores for first 10 movies:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u :User)-[r :Rating]->(m:Movie) RETURN m.title, AVG(r.score) AS score ORDER BY score DESC LIMIT 10;\n")),Object(a.b)("p",null,"7) Create a new user and rate some movies:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:User {id:1000, name:"Aladin"});\n')),Object(a.b)("p",null,"Check if new user is created:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (u:User{name:"Aladin"}) RETURN u;\n')),Object(a.b)("p",null,"Rate some movies:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (u:User{id:1000}), (m:Movie{title:"Trois couleurs : Rouge"})\nMERGE (u)-[:Rating{score:3.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"20,000 Leagues Under the Sea"})\nMERGE (u)-[:Rating{score:1.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Star Trek: Generations"})\nMERGE (u)-[:Rating{score:0.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Rebecca"})\nMERGE (u)-[:Rating{score:3.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"The 39 Steps"})\nMERGE (u)-[:Rating{score:4.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Faster, Pussycat! Kill! Kill!"})\nMERGE (u)-[:Rating{score:3.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Once Were Warriors"})\nMERGE (u)-[:Rating{score:3.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Sleepless in Seattle"})\nMERGE (u)-[:Rating{score:4.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Don Juan DeMarco"})\nMERGE (u)-[:Rating{score:4.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Jack & Sarah"})\nMERGE (u)-[:Rating{score:1.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Mr. Holland\'s Opus"})\nMERGE (u)-[:Rating{score:2.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"The Getaway"})\nMERGE (u)-[:Rating{score:3.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Color of Night"})\nMERGE (u)-[:Rating{score:4.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Reality Bites"})\nMERGE (u)-[:Rating{score:2.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Notorious"})\nMERGE (u)-[:Rating{score:3.5}]-(m);\n')),Object(a.b)("p",null,"8) Recommendation system:"),Object(a.b)("p",null,"The idea is to implement simple ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Collaborative_filtering"},"memory based collaborative filtering"),"."),Object(a.b)("p",null,"Let's recommend some movies for user Aladin:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User{id:1000})-[r:Rating]-(m:Movie)-[other_r:Rating]-(other:User)\nWITH other.id AS other_id,\nAVG(ABS(r.score-other_r.score)) AS similarity, COUNT(*) AS similar_user_count\nWHERE similar_user_count > 2\nWITH other_id ORDER BY similarity LIMIT 10\nWITH COLLECT(other_id) AS similar_user_set\nMATCH (some_movie: Movie)-[fellow_rate:Rating]-(fellow_user:User)\nWHERE fellow_user.id in similar_user_set\nWITH some_movie, AVG(fellow_rate.score) AS prediction_score\nRETURN some_movie.title AS Title, prediction_score ORDER BY prediction_score DESC;\n")),Object(a.b)("p",null,"How does this query work?"),Object(a.b)("p",null,"This query has two parts:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Finding similar users"),Object(a.b)("li",{parentName:"ul"},"Predicting the score for some movie (recommendation)")),Object(a.b)("p",null,"In the first part, we are looking for similar users.\nFirst, we need to define similar users:\nTwo users are considered similar if they tend to give\nsimilar scores to the same movies.\nFor the target user (Aladin) and some other user we are searching\nfor the same movies:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User{id:1000})-[r:Rating]-(m:Movie)-[other_r:Rating]-(other:User);\n")),Object(a.b)("p",null,"But this is not enough for finding similar users. We need to choose users\nwith the same movies and similar scores:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"WITH other.id AS other_id,\nAVG(ABS(r.score-other_r.score)) AS similarity, COUNT(*) AS similar_user_count\nWHERE similar_user_count > 2\nWITH other_id ORDER BY similarity LIMIT 10;\n")),Object(a.b)("p",null,"Here we calculate similarities as the average distance between\ntarget user score and some other user score on the same set of movies.\nThere are two parameters: similarUserCount limit (2)\nand similar user set size limit (10).\nSimilar user count limit is used for filtering users who have\nat least 2 movies in common with the target user.\nSimilar user set size is used to peek top 10 similar users (10 or less)."),Object(a.b)("p",null,"Now we have similar user set. We will use those users to\ncalculate the average score for all movies in the database."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (some_movie: Movie)-[fellow_rate:Rating]-(fellow_user:User)\nWHERE fellow_user.id in similar_user_set\nWITH some_movie, AVG(fellow_rate.score) AS prediction_score\nRETURN some_movie.title AS Title, prediction_score ORDER BY prediction_score DESC;\n")),Object(a.b)("p",null,"We encourage you to play with some parameters, like similar user count limit\nand similar user set size limit.\nYou can also try to use different similarity functions,\nfor example ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Euclidean_distance"},"Euclidean distance"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cypher"},"SQRT(REDUCE(a=0, x in COLLECT((r.score - other_r.score) * (r.score - other_r.score)) | a + x))\nAS similarity;\n")),Object(a.b)("p",null,"Here we use ",Object(a.b)("inlineCode",{parentName:"p"},"REDUCE")," function. Reduce function accumulate list elements\ninto a single result by applying an expression.\nIn our query, this function starts with 0 and sums up squared differences.\n",Object(a.b)("inlineCode",{parentName:"p"},"COLLECT")," function is used for putting squared differences into the list."))}m.isMDXComponent=!0},251:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,b=u["".concat(o,".").concat(d)]||u[d]||p[d]||a;return r?i.a.createElement(b,s(s({ref:t},c),{},{components:r})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},359:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/movie_metagraph-3c8255437b14fe249a17b70d212785b4.png"}}]);
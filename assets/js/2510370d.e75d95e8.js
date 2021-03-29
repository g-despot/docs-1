(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{109:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return m}));var n=t(3),r=t(8),o=(t(0),t(251)),l={id:"graphing-the-premier-league",title:"Graphing the Premier League",sidebar_label:"Graphing the Premier League"},s={unversionedId:"tutorials/graphing-the-premier-league",id:"tutorials/graphing-the-premier-league",isDocsHomePage:!1,title:"Graphing the Premier League",description:"This article is a part of a series intended to show users how to use Memgraph",source:"@site/docs/tutorials/graphing-the-premier-league.md",slug:"/tutorials/graphing-the-premier-league",permalink:"/memgraph/next/tutorials/graphing-the-premier-league",editUrl:"https://github.com/memgraph/docs/tree/master/docs/tutorials/graphing-the-premier-league.md",version:"current",sidebar_label:"Graphing the Premier League",sidebar:"memgraph",previous:{title:"Football transfers",permalink:"/memgraph/next/tutorials/football-transfers"},next:{title:"Marvel Comic Universe social network",permalink:"/memgraph/next/tutorials/marvel-universe"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[]},{value:"Example queries",id:"example-queries",children:[]}],c={toc:i};function m(e){var a=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,l,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article is a part of a series intended to show users how to use Memgraph\non real-world data and, by doing so, retrieve some interesting and useful\ninformation."),Object(o.b)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/tutorials/tutorials"},"tutorial overview section"),"."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Association_football"},"Football"),"\nis a team sport played between two teams of eleven\nplayers with a spherical ball. The game is played on a rectangular pitch with\na goal at each and. The object of the game is to score by moving the ball\nbeyond the goal line into the opposing goal. The game is played by more than\n250 million players in over 200 countries, making it the world's most\npopular sport."),Object(o.b)("p",null,"In this article, we will present a graph model of a reasonably sized dataset\nof football matches across world's most popular leagues."),Object(o.b)("h2",{id:"data-model"},"Data model"),Object(o.b)("p",null,"In essence, we are trying to model a set of football matches. All information\nabout a single match is going to be contained in three nodes and two edges.\nTwo of the nodes will represent the teams that have played the match, while the\nthird node will represent the game itself. Both edges are directed from the\nteam nodes to the game node and are labeled as ",Object(o.b)("inlineCode",{parentName:"p"},":Played"),"."),Object(o.b)("p",null,"Every bit of information regarding the data model is nicely condensed in\nthe following visual representation."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Football",src:t(318).default})),Object(o.b)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),Object(o.b)("p",null,"You have two options for exploring this dataset.\nIf you just want to take a look at the dataset and try out a few queries, open\n",Object(o.b)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and continue with\nthe tutorial there. Note that you will not be able to execute ",Object(o.b)("inlineCode",{parentName:"p"},"write")," operations."),Object(o.b)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",Object(o.b)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and navigate\nto the ",Object(o.b)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",Object(o.b)("inlineCode",{parentName:"p"},"Football Premier league games")," and continue with the tutorial."),Object(o.b)("h2",{id:"example-queries"},"Example queries"),Object(o.b)("p",null,"1) You might wonder, what leagues are supported?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Game)\nRETURN DISTINCT n.league AS League\nORDER BY League;\n")),Object(o.b)("p",null,"2) We have stored a certain number of seasons for each league. What is the\noldest/newest season we have included?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Game)\nRETURN DISTINCT n.league AS League, MIN(n.season) AS Oldest, MAX(n.season) AS Newest\nORDER BY League;\n")),Object(o.b)("p",null,"3) You have already seen one game between Chelsea and Arsenal, let's list all of\nthem in chronological order."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team {name: "Chelsea"})-[e:Played]->(w:Game)<-[f:Played]-(m:Team {name: "Arsenal"})\nRETURN w.date AS Date, e.side AS Chelsea, f.side AS Arsenal,\n       w.FT_home_score AS home_score, w.FT_away_score AS away_score\nORDER BY Date;\n')),Object(o.b)("p",null,"4) How about filtering games in which Chelsea won?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team {name: "Chelsea"})-[e:Played {outcome: "won"}]->\n      (w:Game)<-[f:Played]-(m:Team {name: "Arsenal"})\nRETURN w.date AS Date, e.side AS Chelsea, f.side AS Arsenal,\n       w.FT_home_score AS home_score, w.FT_away_score AS away_score\nORDER BY Date;\n')),Object(o.b)("p",null,"5) Home field advantage is a thing in football. Let's list the number of home\ndefeats for each Premier League team in the 2016/2017 season."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team)-[:Played {side: "home", outcome: "lost"}]->\n      (w:Game {league: "ENG-Premier League", season: 2016})\nRETURN n.name AS Team, count(w) AS home_defeats\nORDER BY home_defeats, Team;\n')),Object(o.b)("p",null,"6) At the end of the season the team with the most points wins the league. For\neach victory, a team is awarded 3 points and for each draw it is awarded\n1 point. Let's find out how many points did reigning champions (Chelsea) have\nat the end of 2016/2017 season."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team {name: "Chelsea"})-[:Played {outcome: "drew"}]->(w:Game {season: 2016})\nWITH n, COUNT(w) AS draw_points\nMATCH (n)-[:Played {outcome: "won"}]->(w:Game {season: 2016})\nRETURN draw_points + 3 * COUNT(w) AS total_points;\n')),Object(o.b)("p",null,"7) In fact, why not retrieve the whole table?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)-[:Played {outcome: "drew"}]->(w:Game {league: "ENG-Premier League", season: 2016})\nWITH n, COUNT(w) AS draw_points\nMATCH (n)-[:Played {outcome: "won"}]->(w:Game {league: "ENG-Premier League", season: 2016})\nRETURN n.name AS Team, draw_points + 3 * COUNT(w) AS total_points\nORDER BY total_points DESC;\n')),Object(o.b)("p",null,"8) People have always debated which of the major leagues is the most exciting.\nOne basic metric is the average number of goals per game. Let's see the results\nat the end of the 2016/2017 season. WARNING: This might shock you."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (w:Game {season: 2016})\nRETURN w.league, AVG(w.FT_home_score) + AVG(w.FT_away_score) AS avg_goals_per_game\nORDER BY avg_goals_per_game DESC;\n")),Object(o.b)("p",null,"9) Another metric might be the number of comebacks","\u2014","games where one side\nwas winning at half time but were overthrown by the other side by the end\nof the match. Let's count such occurrences during all supported seasons across\nall supported leagues."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (g:Game) WHERE\n(g.HT_result = "H" AND g.FT_result = "A") OR\n(g.HT_result = "A" AND g.FT_result = "H")\nRETURN g.league AS League, count(g) AS Comebacks\nORDER BY Comebacks DESC;\n')),Object(o.b)("p",null,"10) Exciting leagues also tend to be very unpredictable. On that note, let's\nlist all triplets of teams where, during the course of one season, team A won\nagainst team B, team B won against team C and team C won against team A."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (a)-[:Played {outcome: "won"}]->(p:Game {league: "ENG-Premier League", season: 2016})<--\n      (b)-[:Played {outcome: "won"}]->(q:Game {league: "ENG-Premier League", season: 2016})<--\n      (c)-[:Played {outcome: "won"}]->(r:Game {league: "ENG-Premier League", season: 2016})<--(a)\nWHERE p.date < q.date AND q.date < r.date\nRETURN a.name AS Team1, b.name AS Team2, c.name AS Team3;\n')))}m.isMDXComponent=!0},251:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),m=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=m(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},h=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(t),h=n,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return t?r.a.createElement(d,s(s({ref:a},c),{},{components:t})):r.a.createElement(d,s({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=h;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},318:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/football_metagraph-4c1e550b4c9166c480e469573395ea3a.png"}}]);
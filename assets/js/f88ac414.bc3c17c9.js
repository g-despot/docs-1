(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{244:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a(3),o=a(8),i=(a(0),a(251)),r={id:"got-deaths",title:"Game of Thrones deaths",sidebar_label:"Game of Thrones deaths"},l={unversionedId:"tutorials/got-deaths",id:"tutorials/got-deaths",isDocsHomePage:!1,title:"Game of Thrones deaths",description:"This article is part of a series intended to show how to use Memgraph",source:"@site/docs/tutorials/got-deaths.md",slug:"/tutorials/got-deaths",permalink:"/memgraph/next/tutorials/got-deaths",editUrl:"https://github.com/memgraph/docs/tree/master/docs/tutorials/got-deaths.md",version:"current",sidebar_label:"Game of Thrones deaths",sidebar:"memgraph",previous:{title:"Movie recommendation system",permalink:"/memgraph/next/tutorials/movie-recommendation"},next:{title:"Social network analysis with NetworkX",permalink:"/memgraph/next/tutorials/social-network-analysis"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[]},{value:"Example queries using Cypher",id:"example-queries-using-cypher",children:[]}],c={toc:s};function h(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article is part of a series intended to show how to use Memgraph\non real-world data to retrieve some interesting and useful\ninformation."),Object(i.b)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",Object(i.b)("a",{parentName:"p",href:"/memgraph/next/tutorials/tutorials"},"tutorial overview section"),"."),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"WARNING")," - this tutorial could contain Game of Thrones ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"spoilers")),".  "),Object(i.b)("p",null,"Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO.\nIt is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels,  the first of which is\nA Game of Thrones. The Game of Thrones world is full of interesting characters, locations, scenarios, unexpected deaths, and plot twists."),Object(i.b)("p",null,"Even though the COVID-19 pandemic hit the entire world in 2020 and is now starting to become one of the worst\nyears in recent history, 2019 was also a huge disappointment to all Game of Thrones fans. According to user reactions, a seven-year\nbuild-up resulted in a poorly written ending of the last season and ruined the ending of one of the most popular shows on the planet.",Object(i.b)("br",{parentName:"p"}),"\n","Nonetheless, if you want to know how many characters would have survived if Jon Snow had stayed dead, which House had the best Kill/Death Ratio,\nor who was the biggest traitor in the show, you came to the right place!"),Object(i.b)("h2",{id:"data-model"},"Data model"),Object(i.b)("p",null,"Although the Game of Thrones TV show is based on a series of books, our graph database contains only characters from the\npreviously mentioned TV shows as the books are still not finished. This tutorial would not be possible without data analyst David\nMurphy who shared his collection of on-screen deaths on ",Object(i.b)("a",{parentName:"p",href:"https://data.world/datasaurusrex/game-of-thones-deaths"},"this link"),". For more information, you can visit his ",Object(i.b)("a",{parentName:"p",href:"https://datasaurus-rex.com/gallery/gotviz-mkiii"},"blogpost"),' with interactive analysis\non the show deaths. We won\'t be working with kills and deaths that happened off-screen or were tied to the undead (wraiths).\nThe dataset we used was slightly modified, in which columns "Episode Name" and "IMDb Rating" were added.'),Object(i.b)("p",null,"The model consists of the following nodes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"Character")," node has a ",Object(i.b)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the character's name (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},'"Jon Snow"'),")"),Object(i.b)("li",{parentName:"ul"},"an ",Object(i.b)("inlineCode",{parentName:"li"},"Allegiance")," node has a ",Object(i.b)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the house name the character\nis loyal to (e.g.  ",Object(i.b)("inlineCode",{parentName:"li"},'"House Stark"'),")"),Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"Death")," node has an ",Object(i.b)("inlineCode",{parentName:"li"},"order")," attribute corresponding to the order in which the death happened\nin the show (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"602"),")"),Object(i.b)("li",{parentName:"ul"},"an ",Object(i.b)("inlineCode",{parentName:"li"},"Episode")," node has a ",Object(i.b)("inlineCode",{parentName:"li"},"number")," attribute corresponding to the number of episodes (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"10"),"),\n",Object(i.b)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the name of the episode (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},'"Mothers Mercy"'),") and ",Object(i.b)("inlineCode",{parentName:"li"},"imdb_rating"),'\nepisode corresponding to the IMDB rating of the episode (e.g. "9.1")'),Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"Season")," node has a ",Object(i.b)("inlineCode",{parentName:"li"},"number")," attribute corresponding to the number of the season (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"10"),")"),Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"Character")," node has a ",Object(i.b)("inlineCode",{parentName:"li"},"name")," attribute corresponding to the character's name (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},'"Castle Black"'),")")),Object(i.b)("p",null,"Nodes are connected with the following edges:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":KILLED")," - connect two Character nodes and they have 2 attributes,\n",Object(i.b)("inlineCode",{parentName:"li"},"method")," which says how was the character killed (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},'"Knife"'),") and ",Object(i.b)("inlineCode",{parentName:"li"},"count")," attribute representing a\nnumber of how many of these characters were killed (e.g. if ",Object(i.b)("inlineCode",{parentName:"li"},'"Jon Snow"')," killed ",Object(i.b)("inlineCode",{parentName:"li"},"10")," ",Object(i.b)("inlineCode",{parentName:"li"},'"Lannister soldiers"'),"\nthen on this edge ",Object(i.b)("inlineCode",{parentName:"li"},"count")," would be ",Object(i.b)("inlineCode",{parentName:"li"},"10"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":LOYAL_TO")," - connects ",Object(i.b)("inlineCode",{parentName:"li"},"Character")," node with ",Object(i.b)("inlineCode",{parentName:"li"},"Allegiance")," node representing an allegiance the character is\nloyal to"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":VICTIM_IN")," and ",Object(i.b)("inlineCode",{parentName:"li"},":KILLER_IN")," - connects ",Object(i.b)("inlineCode",{parentName:"li"},"Character")," node with ",Object(i.b)("inlineCode",{parentName:"li"},"Death")," node in which death happened "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":HAPPENED_IN")," - connects node ",Object(i.b)("inlineCode",{parentName:"li"},"Death")," with ",Object(i.b)("inlineCode",{parentName:"li"},"Episode"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Season")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Location")," nodes representing details\nof the death"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":PART_OF")," connects node ",Object(i.b)("inlineCode",{parentName:"li"},"Episode")," with ",Object(i.b)("inlineCode",{parentName:"li"},"Season")," node which episode is part of")),Object(i.b)("p",null,Object(i.b)("img",{alt:"GOT deaths",src:a(362).default})),Object(i.b)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),Object(i.b)("p",null,"You have two options for exploring this dataset.\nIf you just want to take a look at the dataset and try out a few queries, open\n",Object(i.b)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and continue with\nthe tutorial there. Note that you will not be able to execute ",Object(i.b)("inlineCode",{parentName:"p"},"write")," operations."),Object(i.b)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",Object(i.b)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and navigate\nto the ",Object(i.b)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",Object(i.b)("inlineCode",{parentName:"p"},"Game of Thrones deaths")," and continue with the tutorial."),Object(i.b)("h2",{id:"example-queries-using-cypher"},"Example queries using Cypher"),Object(i.b)("p",null,"In the queries below, we are using ",Object(i.b)("a",{parentName:"p",href:"/cypher-manual"},"Cypher"),"\nto query Memgraph via the console."),Object(i.b)("p",null,"Here are some queries you might find interesting:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"MINI-GAME")," - If you have watched the TV Show, try to guess each result before executing the query!\n1) Let's start with a couple of simple queries. List the locations where most deaths occurred.\nCan you guess which one is it?"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (l:Location)<-[:HAPPENED_IN]-(d:Death) \nRETURN l.name AS location_name, COUNT(d) AS death_count\nORDER BY death_count DESC\n")),Object(i.b)("p",null,"2) Now that we have the location with the most deaths, let's list the episodes with the most deaths\nas well."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (d:Death)-[:HAPPENED_IN]->(e:Episode)\nRETURN e.name AS episode_name, COUNT(d) AS kill_count\nORDER BY kill_count DESC\n")),Object(i.b)("p",null,"3) List the number of kills per season. If you have watched the show, you should be able to guess this one."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (d:Death)-[:HAPPENED_IN]->(s:Season) \nRETURN s.number AS season_number, COUNT(d) AS death_count\nORDER BY season_number ASC\n")),Object(i.b)("p",null,"4) The most poorly rated season by far was the last one, but can you guess the best one?\nLet's list the seasons by IMDB ratings. The problem we get with using the ",Object(i.b)("inlineCode",{parentName:"p"},"AVG()")," function is that it\ngives us too many decimals, therefore a useful solution is given in this example using ",Object(i.b)("inlineCode",{parentName:"p"},"ROUND()"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (e:Episode)-[:PART_OF]->(s:Season) \nRETURN s.number AS season_name, ROUND(100 * AVG(e.imdb_rating))/100 AS rating\nORDER BY rating DESC\n")),Object(i.b)("p",null,"5) There are many methods by which characters were killed such as sword or Dragonfire, but let's list victims\nof unique methods."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (:Character)-[k:KILLED]->(:Character)\nWITH k.method AS kill_method, COUNT(k.method) AS method_count\nWHERE method_count < 2\nMATCH (killer:Character)-[k:KILLED]->(victim:Character)\nWHERE k.method = kill_method\nRETURN kill_method, victim.name AS victim\n")),Object(i.b)("p",null,'6) Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men,\nProtector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt,\nthe Breaker of Chains or shortened to "Daenerys Targaryen" in our database is the biggest killer on\nthe show. Let\'s list all the episodes she killed in as well as characters she killed.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (daenerys:Character {name: 'Daenerys Targaryen'})-[:KILLED]->(victim:Character)\nMATCH (daenerys)-[:KILLER_IN]->(d:Death)<-[:VICTIM_IN]-(victim)\nMATCH (d)-[:HAPPENED_IN]-(e:Episode)\nRETURN DISTINCT(victim.name) AS victim, COUNT(d) AS kill_count, e.name AS episode_name\nORDER BY kill_count DESC\n")),Object(i.b)("p",null,"7) Houses or allegiances are one of the main aspects of Westeros. Some houses killed more characters\nthan others, but that doesn't matter in the end, what matters is efficiency. Let's list the allegiances with\nthe best Kill/Death Ratios or KDR for short. Here we came across one additional problem. If an allegiance had more\ndeaths than kills, the KDR would be 0. This can easily be fixed with the ",Object(i.b)("inlineCode",{parentName:"p"},"toFloat()")," function."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (:Character)-[death:KILLED]->(:Character)-[:LOYAL_TO]->(a:Allegiance)\nWITH a, sum(death.count) as deaths\nMATCH (:Character)<-[kill:KILLED]-(:Character)-[:LOYAL_TO]->(a)\nRETURN a.name AS allegiance_name, SUM(kill.count) AS kills, deaths, ROUND(100 *(TOFLOAT(SUM(kill.count))/deaths))/100 AS KDR\nORDER BY KDR DESC;\n")),Object(i.b)("p",null,"8) One of the best-rated episodes, Battle of the Bastards, showed us a fight between two houses: Stark and Bolton.\nLet's see which one had more casualties."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (c:Character)-[:LOYAL_TO]->(a:Allegiance)\nMATCH (c)-[:VICTIM_IN]-(d:Death)-[:HAPPENED_IN]-(:Episode {name: 'Battle of the Bastards'})\nRETURN a.name AS house_name, COUNT(d) AS death_count\nORDER BY death_count DESC\nLIMIT 2;\n")),Object(i.b)("p",null,"9) One of the biggest features of Memgraph is drawing the graphs of queries we execute. Let's visualize all the\nLoyalties with Characters. Execute the following query and head out to the ",Object(i.b)("inlineCode",{parentName:"p"},"GRAPH")," tab."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (character:Character)-[loyal_to:LOYAL_TO]-(allegiance)\nRETURN character, loyal_to, allegiance;\n")),Object(i.b)("p",null,"10) Remember that shocking last episode of the fifth season when they killed Jon Snow and we totally thought\nhe was gonna stay dead? Well, let's list all the characters that would survive if he actually stayed dead."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)\nMATCH (jon)-[:VICTIM_IN]->(jon_death:Death)\nMATCH (jon)-[:KILLER_IN]->(victim_death:Death)<-[:VICTIM_IN]-(victim)\nWHERE victim_death.order>jon_death.order\nRETURN DISTINCT(victim.name) AS victim, COUNT(victim_death) AS kill_count\nORDER BY kill_count DESC\n")),Object(i.b)("p",null,"11) If we want to see the above example in graph form, we have to add some modifications to\nthe query, such as saving paths to variables that could be then written in ",Object(i.b)("inlineCode",{parentName:"p"},"RETURN"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)\nMATCH (jon)-[:VICTIM_IN]->(jon_death:Death)\nMATCH (jon)-[killed:KILLER_IN]->(victim_death:Death)<-[died:VICTIM_IN]-(victim)\nWHERE victim_death.order > jon_death.order\nRETURN jon, killed, victim_death, died, victim;\n")),Object(i.b)("p",null,"12) Let's see how it looks like if we want to visualize all of Jon Snow kills with their locations."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)\nMATCH (jon)-[:KILLER_IN]->(death:Death)<-[victim_to_death:VICTIM_IN]-(victim)\nMATCH (death)-[death_to_location:HAPPENED_IN]->(location:Location)\nRETURN victim,victim_to_death,death,death_to_location,location\n")),Object(i.b)("p",null,"13) Who do you think was the biggest traitor in terms of killing in its own allegiance? Well, let's check it out!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (killer:Character)-[:KILLED]->(victim:Character)\nMATCH (killer)-[:LOYAL_TO]->(a:Allegiance)<-[:LOYAL_TO]-(victim)\nRETURN killer.name AS traitor, COUNT(victim) AS kill_count\nORDER BY kill_count DESC\n")),Object(i.b)("p",null,"14) To visualize the last example, we have to add paths between nodes in the result. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH (killer:Character)-[killed:KILLED]->(victim:Character)\nMATCH (killer)-[:LOYAL_TO]->(allegiance:Allegiance)<-[loyal_to:LOYAL_TO]-(victim)\nRETURN killer, killed, victim, loyal_to, allegiance;\n")),Object(i.b)("p",null,"15) Memgraph supports graph algorithms as well. Let's use Dijkstra's shortest path algorithm to show the most\ngruesome path of kills. An example kill path is: ",Object(i.b)("inlineCode",{parentName:"p"},"Jon Snow")," killed ",Object(i.b)("inlineCode",{parentName:"p"},"5")," ",Object(i.b)("inlineCode",{parentName:"p"},"Lannister Soldiers")," and they killed\n",Object(i.b)("inlineCode",{parentName:"p"},"10")," ",Object(i.b)("inlineCode",{parentName:"p"},"Stark soldiers")," with total ",Object(i.b)("inlineCode",{parentName:"p"},"kill_count")," of ",Object(i.b)("inlineCode",{parentName:"p"},"15"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-opencypher"},"MATCH p = (:Character)-[:KILLED * wShortest (e,v | e.count) kill_count]->(:Character)\nRETURN nodes(p) AS kill_list, kill_count\nORDER BY kill_count DESC\nLIMIT 1;\n")),Object(i.b)("p",null,"To learn more about these algorithms, we suggest you check out their Wikipedia\npages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"Breadth-first search")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"},"Dijkstra's algorithm"))))}h.isMDXComponent=!0},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=h(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(a),p=n,m=d["".concat(r,".").concat(p)]||d[p]||b[p]||i;return a?o.a.createElement(m,l(l({ref:t},c),{},{components:a})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},362:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/got-deaths-2cd1417aa600d6825dca0b133357f27b.png"}}]);
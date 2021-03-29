(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(3),o=n(8),r=(n(0),n(251)),i={id:"marvel-universe",title:"Marvel Comic Universe social network",sidebar_label:"Marvel Comic Universe social network"},s={unversionedId:"tutorials/marvel-universe",id:"version-1.3.0/tutorials/marvel-universe",isDocsHomePage:!1,title:"Marvel Comic Universe social network",description:"This article is a part of a series intended to show how to use Memgraph",source:"@site/memgraph_versioned_docs/version-1.3.0/tutorials/marvel-universe.md",slug:"/tutorials/marvel-universe",permalink:"/memgraph/tutorials/marvel-universe",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/tutorials/marvel-universe.md",version:"1.3.0",sidebar_label:"Marvel Comic Universe social network",sidebar:"version-1.3.0/memgraph",previous:{title:"Graphing the Premier League",permalink:"/memgraph/tutorials/graphing-the-premier-league"},next:{title:"Movie recommendation system",permalink:"/memgraph/tutorials/movie-recommendation"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[]},{value:"Example queries using Cypher",id:"example-queries-using-cypher",children:[]},{value:"Nifty things you could do",id:"nifty-things-you-could-do",children:[]}],c={toc:l};function h(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This article is a part of a series intended to show how to use Memgraph\non real-world data to retrieve some interesting and useful\ninformation."),Object(r.b)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",Object(r.b)("a",{parentName:"p",href:"/memgraph/tutorials/tutorials"},"tutorial overview section"),"."),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"Spandex. Muscles. Big egos. Bad hair. No, we're not talking about your high\nschool thrash metal band. We're talking about one of the largest fictional social\nnetworks that is the Marvel Comic Universe! Here we'll teach you how to navigate\nthis complex and confusing assembly of heroes and villains. If you've ever\nwanted to know who's Spider-Man's best super-buddy, or wanted to find all the\ncomic issues where Hulk, Wolverine, Thor, and Black Panther appear together, look\nno further and fire up that Memgraph copy of yours!"),Object(r.b)("h2",{id:"data-model"},"Data model"),Object(r.b)("p",null,"Although the MCU is chock-full of heroes, the real hero here is Russ Chappell,\nwho painstakingly gathered the MCU data for the ",Object(r.b)("a",{parentName:"p",href:"http://www.chronologyproject.com"},"Marvel Chronology Project"),'.\nIn addition, R. Alberich, J. Miro-Julia, and F. Rossello, three data scientists,\nscraped the Chronology Project database, processed the data and put it into a\nformat that can be easily imported into any data-processing framework available\ntoday. Their aim was to investigate whether this fictional "social network" has\na structure similar to a real-life social network. You can find their interesting\nfindings in the paper that was the culmination of their work, linked ',Object(r.b)("a",{parentName:"p",href:"https://arxiv.org/pdf/cond-mat/0202174.pdf"},"here"),".\nThe data they used, on the other hand, can be found ",Object(r.b)("a",{parentName:"p",href:"https://www.kaggle.com/csanhueza/the-marvel-universe-social-network"},"here"),".\nWe've used a slightly modified version of this data to create a graph database\nsnapshot ready for use."),Object(r.b)("p",null,"Now, the data we'll be using in our queries can be classified as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'nodes, labeled as "Hero", "Comic", or "ComicSeries"',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'a "Hero" node has a "name" attribute corresponding to both a hero\'s\nmoniker and her/his real name (e.g. "SPIDER-MAN/PETER PARKER")'),Object(r.b)("li",{parentName:"ul"},'a "Comic" node has a "name" attribute corresponding to the comic series name\nand the issue/volume number if it\'s included (e.g.  "Astonishing Tales Vol. 2 12")'),Object(r.b)("li",{parentName:"ul"},'a "ComicSeries" node has a "title" attribute corresponding to the title of\nthe series a given comic is a part of, e.g. the "Comic" node\n"AVENGERS VOL. 3 17" is part of the "AVENGERS VOL. 3" series.\nIn addition, each "ComicSeries" node has a "publishYear" attribute, which\nis a list of years in which the series was published.'))),Object(r.b)("li",{parentName:"ul"},'edges, of type "AppearedIn", "AppearedInSameComic", or "IsPartOfSeries"',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'edges connecting a "Hero" node to the "Comic" node it appears in are\nof type "AppearedIn"'),Object(r.b)("li",{parentName:"ul"},'edges connecting two "Hero" nodes that appeared in the same comic are\nof type "AppearedInSameComic"'),Object(r.b)("li",{parentName:"ul"},'edges connecting a "Comic" node and its corresponding "ComicSeries" node,\nrepresenting the inclusion relationship between a particular comic issue\nand the series it\'s part of, are of type "IsPartOfSeries"')))),Object(r.b)("p",null,"A visual scheme of our graph database is given below."),Object(r.b)("p",null,Object(r.b)("img",{alt:"MCU",src:n(361).default})),Object(r.b)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),Object(r.b)("p",null,"You have two options for exploring this dataset.\nIf you just want to take a look at the dataset and try out a few queries, open\n",Object(r.b)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and continue with\nthe tutorial there. Note that you will not be able to execute ",Object(r.b)("inlineCode",{parentName:"p"},"write")," operations."),Object(r.b)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",Object(r.b)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and navigate\nto the ",Object(r.b)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",Object(r.b)("inlineCode",{parentName:"p"},"Marvel Comic Universe social network")," and continue with the tutorial."),Object(r.b)("h2",{id:"example-queries-using-cypher"},"Example queries using Cypher"),Object(r.b)("p",null,"In the queries below, we are, as usual, using ",Object(r.b)("a",{parentName:"p",href:"/cypher-manual"},"Cypher"),"\nto query Memgraph via the console."),Object(r.b)("p",null,"Here are some queries you might find interesting:"),Object(r.b)("p",null,"1) List all the comic series present in the database, along with the number of comics it contains:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s:ComicSeries)-[:IsPartOfSeries]-(c:Comic)\nWITH s.title as Series,\nc as Comic\nreturn Series, count(Comic) as ComicCount\nORDER BY Series;\n")),Object(r.b)("p",null,'2) List all heroes that have "SPIDER" in their name:'),Object(r.b)("p",null,"If you take a peek at the Hero nodes, you'll find that their names, while\naccurate in most cases, can be a bit mangled. We didn't have time to check and\nupdate all the names that were already present. We swear! Super-busy! But, no\nworries, we'll show you how to get a list of potential heroes you might be looking\nfor. One of the most flexible ways is to use regex matching (represented by the\nregex-matching operator \"=~\")."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (h:Hero) WHERE\nh.name =~ ".*SPIDER.+"\nRETURN h.name as PotentialSpiderDude\nORDER BY PotentialSpiderDude;\n')),Object(r.b)("p",null,"We recommend you search for your heroes of interest this way, which might save you\nsome time!"),Object(r.b)("p",null,"3) List all the comic issues where Spider-Man (Peter Parker) and Venom (Eddie Brock) appear together:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:Hero {name: "SPIDER-MAN/PETER PARKER"})-[:AppearedIn]->(c:Comic)<-[:AppearedIn]-(:Hero {name: "VENOM/EDDIE BROCK"})\nRETURN c.name AS SpideyAndVenomComic\nORDER BY SpideyAndVenomComic;\n')),Object(r.b)("p",null,"4) List all the comic series in which Spider-Man/Peter Parker appears:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:Hero {name: "SPIDER-MAN/PETER PARKER"})-[:AppearedIn]->(c:Comic)-[:IsPartOfSeries]-(s:ComicSeries)\nRETURN DISTINCT s.title as SpideySeries\nORDER BY SpideySeries;\n')),Object(r.b)("p",null,"5) List 10 heroes with whom Spider-Man (Peter Parker) appeared most frequently together:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:Hero {name: "SPIDER-MAN/PETER PARKER"})-[:AppearedIn]->(c:Comic)<-[:AppearedIn]-(h:Hero)\nWITH\ndistinct(h) AS SpideyFriend,\ncount(h) AS FriendCount\nRETURN SpideyFriend, FriendCount\nORDER BY FriendCount DESC\nLIMIT 10;\n')),Object(r.b)("p",null,"6) Find if there's a connection between Peter Parker/Spider-Man and Beef:"),Object(r.b)("p",null,'"Who the hell is Beef?", you might ask. Well, let\'s just run a\nbreadth-first-search starting from good ol\' Spider-Man, with the constraint that we\nstay within the "radius" of maximum 10 hops from him, and see whether there\'s a\nway Spidey can reach Beef. According to the six degrees of separation\nphilosophy, we should be able to find him on some path of maximally six hops\naway, but we relax that strategy a bit just to be sure.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH p=(:Hero {name: "SPIDER-MAN/PETER PARKER"})-[*bfs 1..10]-(b:Hero {name: "BEEF"})\nreturn p;\n')),Object(r.b)("p",null,"7) List the 10 most popular heroes and comic series in the MCU:"),Object(r.b)("p",null,'Quickly, name the five most popular heroes in the MCU! Alright, how did your\nbrain decide what to give as the answer? We\'re assuming that you have no clue,\nbut it vaguely has to do with the number and quality of connections each of\nthose heroes have in your brain. However, how to explain the concept of "popular"\nto our database engine?'),Object(r.b)("p",null,'Well, our philosophy is as follows - a popular hero is the one who\'s "known" by\nmore other heroes, or in terms of our MCU graph, a hero that the other heroes have\nmore connections (edges) to than some other hero is deemed "more popular". We\'ll\napply analogous reasoning to define the "most popular" comic book series as well.\nThis philosophy is the one underlying Google\'s search engine, and the algorithm\nembodying it is PageRank, so it would be convenient if we could make use of it.'),Object(r.b)("p",null,"However, the query engine doesn't support PageRank out-of-the-box, so we have to\ncome up with a way to plug in PageRank to our database. That's precisely the\npurpose of ",Object(r.b)("a",{parentName:"p",href:"/memgraph/reference-guide/query-modules"},"query modules"),"!"),Object(r.b)("p",null,"Long story short, the query module system enables us to write C or Python modules\nthat can access the data stored in our graph database, do some processing, and\nreturn the results of this processing to the query engine, so we can perform\nfurther queries on them. In this particular case, the PageRank algorithm is\nimplemented as a Python module, and can be found in the query module directory\n",Object(r.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query-modules/"),', along with its description and the examples\nof usage. What you as a user must know is that the pagerank procedure automatically\ntakes the MCU graph as an argument, and returns a record of pairs of nodes and the\ncorresponding rank values (rank is a number representing the "popularity" of a given node).'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank.pagerank() YIELD node, rank\nWITH\nnode, rank\nWHERE node:Hero\nRETURN node.name AS MostPopularHeroes\nORDER BY rank DESC\nLIMIT 10;\n")),Object(r.b)("p",null,"How do the results of this query match with your own list? Not bad, right?"),Object(r.b)("p",null,"Now, let's figure out the most popular comic series:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank.pagerank() YIELD node, rank\nWITH\nnode, rank\nWHERE node:ComicSeries\nRETURN node.title AS MostPopularComicSeries\nORDER BY rank DESC\nLIMIT 10;\n")),Object(r.b)("p",null,"And that, folks, is all there is to it, so go and try out some graph magic of your own!"),Object(r.b)("p",null,"If you're interested in the PageRank algorithm, we recommend you start ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PageRank"},"here"),"."),Object(r.b)("h2",{id:"nifty-things-you-could-do"},"Nifty things you could do"),Object(r.b)("p",null,"While the thing we've shown you how to do might be fun for a while, there are\nloads of cool things you could do to improve the fun-factor. Here's a very short\nlist of things we think you could pull off:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'we have loads of Hero nodes, so even the Hobgoblin or Magneto are deemed\n"heroes", but if you were the mayor of the Marvel Comic Universe Town, you\nwouldn\'t give those guys medals of honor, would you? It would be pretty cool\nif we could classify the MCU entities into "Hero" and "Villain" categories.\nThen you could ask the query engine to give you a list of Spidey\'s\narch-nemeses in addition to Spidey\'s best hero buddies.'),Object(r.b)("li",{parentName:"ul"},'similar to the previous idea, it would be insanely cool if someone would add\nmore attributes to the heroes like "Superpower", "Level", "Affiliation",\n"Signature moves" etc. If you had that, you could perhaps make a simple\nPokemon-like game where you\'d randomly pick a team of villains and choose a team\nof heroes to fight them.'),Object(r.b)("li",{parentName:"ul"},"you could write your own query module that could run more sophisticated\nanalyses on the social network like closeness centrality, Louvain modularity\netc.")),Object(r.b)("p",null,"Now go and use your graph database superpowers for the greater good! Although the\ncomic universe is full of heroes, there's always room for one more!"))}h.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=h(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},361:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mcu_metagraph-ba0f79c25baef96d54156de232957952.png"}}]);
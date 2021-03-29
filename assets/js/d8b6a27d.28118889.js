(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(251)),i={id:"rust",title:"Rust quick start",sidebar_label:"Rust"},c={unversionedId:"getting-started/connecting-applications/rust",id:"getting-started/connecting-applications/rust",isDocsHomePage:!1,title:"Rust quick start",description:"At the end of this guide, you will have created a simple Rust Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/docs/getting-started/connecting-applications/rust.md",slug:"/getting-started/connecting-applications/rust",permalink:"/memgraph/next/getting-started/connecting-applications/rust",editUrl:"https://github.com/memgraph/docs/tree/master/docs/getting-started/connecting-applications/rust.md",version:"current",sidebar_label:"Rust",sidebar:"memgraph",previous:{title:"Python quick start",permalink:"/memgraph/next/getting-started/connecting-applications/python"},next:{title:"C# quick start",permalink:"/memgraph/next/getting-started/connecting-applications/c-sharp"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic setup",id:"basic-setup",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At the end of this guide, you will have created a simple Rust ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"To follow this guide, you will need:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to setup Memgraph, take a look at the ",Object(o.b)("a",{parentName:"li",href:"/memgraph/next/getting-started/installation"},"Installation guide"),"."),Object(o.b)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Docker")," installed and running. Instructions on how to setup Docker can be found on the ",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",{parentName:"li",href:"https://github.com/memgraph/rsmgclient"},Object(o.b)("strong",{parentName:"a"},"rsmgclient driver")),". A Memgraph database adapter for the Rust programming language. ",Object(o.b)("strong",{parentName:"li"},"(if you are not using Docker)"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"NOTE:")," We recommend using Docker because it simplifies installing the driver dependencies. If you don't wish to use Docker, you will need to install the ",Object(o.b)("strong",{parentName:"p"},"rsmgclient driver")," locally."))),Object(o.b)("h2",{id:"basic-setup"},"Basic setup"),Object(o.b)("p",null,"We'll be using a ",Object(o.b)("strong",{parentName:"p"},"Dockerized Rust program")," to demonstrate how to connect to a running Memgraph database instance.\nIf you don't wish to use Docker, the steps might be slightly different, but the code is most likley the same or very similar.",Object(o.b)("br",null),"  "),Object(o.b)("p",null,"Let's jump in and connect a simple program to Memgraph."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.")," Create a new Rust project with the name ",Object(o.b)("strong",{parentName:"p"},"memgraph_rust")," by running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo new memgraph_rust --bin\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.")," Add the following line to the ",Object(o.b)("inlineCode",{parentName:"p"},"Cargo.toml")," file under the line ",Object(o.b)("inlineCode",{parentName:"p"},"[dependencies]"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'rsmgclient = "0.1.1"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.")," To create the actual program, add the following code to the ",Object(o.b)("inlineCode",{parentName:"p"},"src/main.rs")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Rust"},'use rsmgclient::{ConnectParams, Connection, SSLMode};\n\n\nfn main(){\n    // Parameters for connecting to database.\n    let connect_params = ConnectParams {\n        host: Some(String::from("172.17.0.2")),\n        sslmode: SSLMode::Disable,\n        ..Default::default()\n    };\n\n    // Make a connection to the database.\n    let mut connection = match Connection::connect(&connect_params) {\n        Ok(c) => c,\n        Err(err) => panic!("{}", err)\n    };\n\n    // Execute a query.\n    let query = "CREATE (u:User {name: \'Alice\'})-[:Likes]->(m:Software {name: \'Memgraph\'}) RETURN u, m";\n    match connection.execute(query, None) {\n        Ok(columns) => println!("Columns: {}", columns.join(", ")),\n        Err(err) => panic!("{}", err)\n    };\n\n    // Fetch all query results.\n    match connection.fetchall() {\n        Ok(records) => {\n            for value in &records[0].values {\n                println!("{}", value);\n            }\n        },\n        Err(err) => panic!("{}", err)\n    };\n\n\n    // Commit any pending transaction to the database.\n    match connection.commit() {\n        Ok(()) => {},\n        Err(err) => panic!("{}", err)\n    };\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"4.")," Create a new file in the project root directory ",Object(o.b)("inlineCode",{parentName:"p"},"/memgraph_rust")," and name it  ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),". Add the following code to it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Dockerfile"},'# Set base image (host OS)\nFROM rust:1.42\n\n# Install CMake\nRUN apt-get update && \\\n  apt-get --yes install cmake\n\n# Install mgclient\nRUN apt-get install -y git cmake make gcc g++ libssl-dev && \\\n  git clone https://github.com/memgraph/mgclient.git /mgclient && \\\n  cd mgclient && \\\n  git checkout 5ae69ea4774e9b525a2be0c9fc25fb83490f13bb && \\\n  mkdir build && \\\n  cd build && \\\n  cmake .. && \\\n  make && \\\n  make install\n\n# Set the working directory in the container\nWORKDIR /code\n\n# Copy the dependencies file to the working directory\nCOPY Cargo.toml .\n\n# Copy the content of the local src directory to the working directory\nRUN mkdir src\nCOPY src/ ./src\n\n# Generate binary using the Rust compiler\nRUN cargo build\n\n# Command to run on container start\nCMD [ "cargo", "run" ]\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"5.")," Don't forget to change the host address in your code.",Object(o.b)("br",null),Object(o.b)("br",{parentName:"p"}),"\n","Find the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"CONTAINER ID"))," with ",Object(o.b)("inlineCode",{parentName:"p"},"docker ps")," and use it in the following command to retrieve the address:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER ID\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"6.")," To run the application, first, you need to create a Docker image with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker build -t memgraph_rust .\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"7.")," Now, you can start the application with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker run memgraph_rust\n")),Object(o.b)("p",null,"You should see an output similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Columns: u, m\n(:User {'name': 'Alice'})\n(:Software {'name': 'Memgraph'})\n")),Object(o.b)("h2",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/tutorials/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."),Object(o.b)("h2",{id:"getting-help"},"Getting help"),Object(o.b)("p",null,"Visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
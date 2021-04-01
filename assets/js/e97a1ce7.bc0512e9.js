(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{236:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(8),o=(t(0),t(252)),l={id:"manage-users-using-ldap",title:"Authentication and authorization (Enterprise)",sidebar_label:"Authentication and authorization (Enterprise)"},i={unversionedId:"database-functionalities/manage-users-using-ldap",id:"database-functionalities/manage-users-using-ldap",isDocsHomePage:!1,title:"Authentication and authorization (Enterprise)",description:"In large organizations it is often difficult to manage permissions that staff",source:"@site/docs/database-functionalities/manage-users-using-ldap.md",slug:"/database-functionalities/manage-users-using-ldap",permalink:"/memgraph/next/database-functionalities/manage-users-using-ldap",editUrl:"https://github.com/memgraph/docs/tree/master/docs/database-functionalities/manage-users-using-ldap.md",version:"current",sidebar_label:"Authentication and authorization (Enterprise)",sidebar:"memgraph",previous:{title:"User privileges (Enterprise)",permalink:"/memgraph/next/database-functionalities/manage-user-privileges"},next:{title:"Reference guide overview",permalink:"/memgraph/next/reference-guide"}},c=[{value:"Authentication",id:"authentication",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Where to next?",id:"where-to-next",children:[]}],s={toc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In large organizations it is often difficult to manage permissions that staff\nmembers have in the organization.  Organizations typically use an LDAP server\nto hold and manage the permissions.  Because LDAP servers are already set-up in\nmost large organizations, it is convenient for the organization to allow all\nstaff members to have access to the database using the already available\ncentralized user management system."),Object(o.b)("p",null,"For this guide let's assume that we have an LDAP server that is serving the\nfollowing data:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"# Users root entry\ndn: ou=people,dc=memgraph,dc=com\nobjectclass: organizationalUnit\nobjectclass: top\nou: people\n\n# User dba\ndn: cn=dba,ou=people,dc=memgraph,dc=com\ncn: dba\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: dba\n\n# User alice\ndn: cn=alice,ou=people,dc=memgraph,dc=com\ncn: alice\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: alice\n\n# User bob\ndn: cn=bob,ou=people,dc=memgraph,dc=com\ncn: bob\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: bob\n\n# User carol\ndn: cn=carol,ou=people,dc=memgraph,dc=com\ncn: carol\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: carol\n\n# User dave\ndn: cn=dave,ou=people,dc=memgraph,dc=com\ncn: dave\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: dave\n\n# Roles root entry\ndn: ou=roles,dc=memgraph,dc=com\nobjectclass: organizationalUnit\nobjectclass: top\nou: roles\n\n# Role moderator\ndn: cn=moderator,ou=roles,dc=memgraph,dc=com\ncn: moderator\nmember: cn=alice,ou=people,dc=memgraph,dc=com\nobjectclass: groupOfNames\nobjectclass: top\n\n# Role admin\ndn: cn=admin,ou=roles,dc=memgraph,dc=com\ncn: admin\nmember: cn=carol,ou=people,dc=memgraph,dc=com\nmember: cn=dave,ou=people,dc=memgraph,dc=com\nobjectclass: groupOfNames\nobjectclass: top\n")),Object(o.b)("p",null,"To summarize, in this dataset we have the following data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ou=people,dc=memgraph,dc=com")," - entry that holds all users",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cn=dba,ou=people,dc=memgraph,dc=com")," - user ",Object(o.b)("inlineCode",{parentName:"li"},"dba")," that will be used as the database administrator"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cn=alice,ou=people,dc=memgraph,dc=com")," - regular user ",Object(o.b)("inlineCode",{parentName:"li"},"alice")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cn=bob,ou=people,dc=memgraph,dc=com")," - regular user ",Object(o.b)("inlineCode",{parentName:"li"},"bob")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cn=carol,ou=people,dc=memgraph,dc=com")," - regular user ",Object(o.b)("inlineCode",{parentName:"li"},"carol")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cn=dave,ou=people,dc=memgraph,dc=com")," - regular user ",Object(o.b)("inlineCode",{parentName:"li"},"dave")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ou=roles,dc=memgraph,dc=com")," - entry that holds all roles",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cn=moderator,ou=roles,dc=memgraph,dc=com")," - role ",Object(o.b)("inlineCode",{parentName:"li"},"moderator")," that has ",Object(o.b)("inlineCode",{parentName:"li"},"alice")," as its member"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cn=admin,ou=roles,dc=memgraph,dc=com")," - role ",Object(o.b)("inlineCode",{parentName:"li"},"admin")," that has ",Object(o.b)("inlineCode",{parentName:"li"},"carol")," and ",Object(o.b)("inlineCode",{parentName:"li"},"dave")," as its members")))),Object(o.b)("p",null,"For detailed information about the LDAP integration you should first see the\nreference guide:\n",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/reference-guide/ldap-security"},"LDAP security"),"."),Object(o.b)("h2",{id:"authentication"},"Authentication"),Object(o.b)("p",null,"Before enabling LDAP authentication, Memgraph should be prepared for the\nintegration. Here we assume that you have an already running Memgraph instance\nthat doesn't have any users in its local authentication storage. For more\ndetails on how the native authentication storage works in Memgraph you should\nsee: ",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/database-functionalities/manage-user-privileges"},"User privileges"),"."),Object(o.b)("p",null,"First you should create the user that should be the database administrator.  It\nis important to have in mind that the username that you create ",Object(o.b)("em",{parentName:"p"},"must")," exist in\nthe LDAP directory.  For the described LDAP directory we will connect to the\ndatabase and issue the following queries all in the same connection:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER dba;\nGRANT ALL PRIVILEGES TO dba;\n")),Object(o.b)("p",null,"After the user is created and all privileges are granted, it is safe to\ndisconnect from the database and proceed with LDAP integration."),Object(o.b)("p",null,"To enable LDAP integration you should specify the following flag to Memgraph:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"--auth-module-executable=/usr/lib/memgraph/auth_module/ldap.py\n")),Object(o.b)("p",null,"You should also have the following LDAP module configuration in\n",Object(o.b)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'server:\n  host: "<LDAP_SERVER_HOSTNAME>"\n  port: <LDAP_SERVER_PORT>\n  encryption: "disabled"\n  cert_file: ""\n  key_file: ""\n  ca_file: ""\n  validate_cert: false\n\nusers:\n  prefix: "cn="\n  suffix: ",ou=people,dc=memgraph,dc=com"\n\nroles:\n  root_dn: ""\n  root_objectclass: ""\n  user_attribute: ""\n  role_attribute: ""\n')),Object(o.b)("p",null,"You should adjust the security settings according to your LDAP server security\nsettings."),Object(o.b)("p",null,"After setting these configuration options you should restart your Memgraph\ninstance."),Object(o.b)("p",null,"Now you can verify that you can still log in to the database using username\n",Object(o.b)("inlineCode",{parentName:"p"},"dba")," and password ",Object(o.b)("inlineCode",{parentName:"p"},"dba"),"."),Object(o.b)("p",null,"Issuing ",Object(o.b)("inlineCode",{parentName:"p"},"SHOW USERS;")," should list that currently only user ",Object(o.b)("inlineCode",{parentName:"p"},"dba")," exists.  This\nis normal. It means that LDAP authentication is successfully enabled (because\nyou were able to log in) and no other users have yet logged in."),Object(o.b)("p",null,"You should now be able to log in using username ",Object(o.b)("inlineCode",{parentName:"p"},"alice")," and password ",Object(o.b)("inlineCode",{parentName:"p"},"alice"),".\nBecause Alice has never before logged in to the database a new user will be\ncreated for Alice and she won't have any privileges (yet)."),Object(o.b)("p",null,"Using user ",Object(o.b)("inlineCode",{parentName:"p"},"dba")," we modify Alice's privileges to include the ",Object(o.b)("inlineCode",{parentName:"p"},"MATCH")," privilege."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"GRANT MATCH TO alice;\n")),Object(o.b)("p",null,"After Alice logs in again into the database (to refresh her privileges) she\nwill be able to execute the following query:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN n;\n")),Object(o.b)("p",null,"Issuing ",Object(o.b)("inlineCode",{parentName:"p"},"SHOW USERS;")," as ",Object(o.b)("inlineCode",{parentName:"p"},"dba")," should now yield both ",Object(o.b)("inlineCode",{parentName:"p"},"dba")," and ",Object(o.b)("inlineCode",{parentName:"p"},"alice"),"."),Object(o.b)("p",null,"Users Bob, Carol and Dave will also be able to log in to the database using\ntheir LDAP password.  As with Alice, their users will be created and won't have\nany privileges."),Object(o.b)("p",null,"If automatic user account creation is disabled using the database flag:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"--auth-ldap-create-user=false\n")),Object(o.b)("p",null,"The database administrator (user ",Object(o.b)("inlineCode",{parentName:"p"},"dba"),") will first have to explicitly create\nthe users that he wishes to allow to connect to the database:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER alice;\nCREATE USER bob;\n")),Object(o.b)("p",null,"In this scenario only Alice and Bob will be allowed to log in to the database\nbecause they already have existing user accounts, but users Carol and Dave\nwon't be able to log in."),Object(o.b)("h2",{id:"authorization"},"Authorization"),Object(o.b)("p",null,"In the previous example users could only authenticate using LDAP. In this\nexample we will explain how to set-up the LDAP auth module to deduce the user's\nrole using LDAP search queries."),Object(o.b)("p",null,"First, you should enable and verify that user authentication works. To enable\nrole mapping for the described LDAP schema, we will modify the LDAP auth module\nconfiguration file, specifically the section ",Object(o.b)("inlineCode",{parentName:"p"},"roles"),", to have the following\ncontent:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'roles:\n  root_dn: "ou=roles,dc=memgraph,dc=com"\n  root_objectclass: "groupOfNames"\n  user_attribute: "member"\n  role_attribute: "cn"\n')),Object(o.b)("p",null,"This configuration tells the LDAP module that all role mapping entries are\nchildren of the ",Object(o.b)("inlineCode",{parentName:"p"},"ou=roles,dc=memgraph,dc=com")," entry, that the children have\nuser DNs specified in their ",Object(o.b)("inlineCode",{parentName:"p"},"member")," attribute and that the ",Object(o.b)("inlineCode",{parentName:"p"},"cn")," attribute\nshould be used to determine the role name."),Object(o.b)("p",null,"When a user logs in to the database, the LDAP auth module will go through all\nrole mapping entries and will try to find out which role mapping entry has the\nuser as its member."),Object(o.b)("p",null,"So now when Alice logs in, the LDAP auth module will go through the following\nentries: ",Object(o.b)("inlineCode",{parentName:"p"},"cn=admin,ou=roles,dc=memgraph,dc=com")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"cn=moderator,ou=roles,dc=memgraph,dc=com"),".  Because Alice is a member of the\n",Object(o.b)("inlineCode",{parentName:"p"},"moderator")," role mapping, the LDAP auth module will assign role moderator to\nAlice."),Object(o.b)("p",null,"Now as the user ",Object(o.b)("inlineCode",{parentName:"p"},"dba")," we can issue ",Object(o.b)("inlineCode",{parentName:"p"},"SHOW ROLE FOR alice;")," and we will see that\nindeed Alice now has the role ",Object(o.b)("inlineCode",{parentName:"p"},"moderator"),"."),Object(o.b)("p",null,"Permissions for users and roles are still managed through Memgraph, they can't\nbe managed through the LDAP server."),Object(o.b)("p",null,"If automatic role creation is disabled using the flag:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"--auth-ldap-create-role=false\n")),Object(o.b)("p",null,"The database administrator (user ",Object(o.b)("inlineCode",{parentName:"p"},"dba"),") will first have to explicitly create\nthe role for users that he wishes to allow to connect to the database:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE ROLE moderator;\n")),Object(o.b)("p",null,"In this scenario only Alice and Bob will be allowed to log in. Alice will be\nallowed to log in because her role (moderator) already exists. Bob will be\nallowed to log in because he doesn't have any role. Carol and Dave won't be\nallowed to log in because their role (administrator) doesn't exist."),Object(o.b)("p",null,"If both automatic role creation and automatic user creation are disabled, then\nboth the user and the role must exist for a user to successfully log in to the\ndatabase."),Object(o.b)("h2",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"To learn more about Memgraph's functionalities, visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"../reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/tutorials/tutorials"},"Tutorials")),"."))}b.isMDXComponent=!0},252:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return t?r.a.createElement(m,i(i({ref:n},s),{},{components:t})):r.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
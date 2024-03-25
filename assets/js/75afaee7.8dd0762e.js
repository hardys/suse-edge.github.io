"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[284],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>h});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?t.createElement(h,i(i({ref:n},d),{},{components:r})):t.createElement(h,i({ref:n},d))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1164:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,title:"SLE Micro vs SLE Micro for Rancher"},i=void 0,s={unversionedId:"misc/slemicro-vs-slemicro-rancher",id:"misc/slemicro-vs-slemicro-rancher",title:"SLE Micro vs SLE Micro for Rancher",description:"SLE Micro",source:"@site/docs/misc/slemicro-vs-slemicro-rancher.md",sourceDirName:"misc",slug:"/misc/slemicro-vs-slemicro-rancher",permalink:"/docs/misc/slemicro-vs-slemicro-rancher",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/misc/slemicro-vs-slemicro-rancher.md",tags:[],version:"current",lastUpdatedBy:"Klaus K\xe4mpf",lastUpdatedAt:1685350793,formattedLastUpdatedAt:"May 29, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SLE Micro vs SLE Micro for Rancher"},sidebar:"docs",previous:{title:"NATS on K3s",permalink:"/docs/quickstart/nats"},next:{title:"Rancher portfolio disambiguation",permalink:"/docs/misc/rancher-disambiguation"}},c={},l=[{value:"SLE Micro",id:"sle-micro",level:2},{value:"SLE Micro for Rancher",id:"sle-micro-for-rancher",level:2}],d={toc:l},u="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sle-micro"},"SLE Micro"),(0,o.kt)("p",null,"SLE Micro is a minimal, general-purpose operating system that is also\nwell suited for use in\ncontainerized environments. It is based on the concept of a transactional server,\nwhere the entire operating system is treated as a single, immutable unit. This\nmeans that any changes to the system are made through atomic transactions, which\ncan be rolled back if necessary. This approach provides increased security,\nreliability, and consistency, making it ideal for use in production environments. "),(0,o.kt)("p",null,"It includes only the essential components required to run container workloads and\nhas a small footprint, making it ideal for running in resource-constrained\nenvironments such as edge devices or IoT devices."),(0,o.kt)("p",null,"SLE Micro can be used as a single-node container host, Kubernetes cluster node,\nsingle-node KVM virtualization host or in public cloud."),(0,o.kt)("p",null,"One of the main benefits of using SLE Micro is its open standards design, which\nallows users to explore commodity hardware from several vendors and build an\nopen source-based software platform. This enables significant cost savings on\nboth software and hardware while keeping full control of the technology stack\nstrategy and roadmap."),(0,o.kt)("p",null,"One example for the usage would be Telecom where SLE Micro is helping them\nunlock the cost-savings potential of open-source design for both software and\nhardware. With the open standards design, they can explore commodity hardware\nfrom several vendors and build an open source-based software platform using\nopen standards such as Kubernetes with open source tools of their choice.\nUltimately, they expect significant savings on software and hardware, while\nkeeping full control of their technology stack strategy and roadmap. "),(0,o.kt)("p",null,"For more info and steps on how to use SLE micro you can check the\n",(0,o.kt)("a",{parentName:"p",href:"https://documentation.suse.com/sle-micro/5.3/html/SLE-Micro-all/book-deployment-slemicro.html"},"following")),(0,o.kt)("h2",{id:"sle-micro-for-rancher"},"SLE Micro for Rancher"),(0,o.kt)("p",null,"SLE Micro for Rancher is a single-purpose variant of SLE Micro. It is specifically designed\nto run Kubernetes and its containerized workloads in a Rancher environment. "),(0,o.kt)("p",null,"It is built around the ",(0,o.kt)("a",{parentName:"p",href:"https://elemental.docs.rancher.com"},"Elemental platform"),", which provides\nthe features and tools for declarative deployment and\nmanagement of the operating system."),(0,o.kt)("p",null,"There are a couple of fundamental differences between SLE Micro for\nRancher and SLE Micro."),(0,o.kt)("p",null,"SLE Micro ",(0,o.kt)("strong",{parentName:"p"},"for Rancher")," is"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"declarative"),(0,o.kt)("li",{parentName:"ul"},"image based"),(0,o.kt)("li",{parentName:"ul"},"cloud native.")),(0,o.kt)("p",null,"Making it an ideal match to Kubernetes and Rancher."),(0,o.kt)("p",null,"SLE Micro is more traditional being"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"imperative"),(0,o.kt)("li",{parentName:"ul"},"package based"),(0,o.kt)("li",{parentName:"ul"},"transactional")),(0,o.kt)("p",null,"Being package-based, SLE Micro still needs package repositories for\ndeployment and updates and additionally a registry for container\nworkloads."),(0,o.kt)("p",null,"SLE Micro for Rancher fits ideally into an existing cloud-native\ninfrastructure as deployments and updates are served via a container\nregistry."),(0,o.kt)("p",null,"It is completely manageable from within Rancher, everything in the SLE\nMicro for Rancher stack is represented as a Kubernetes resource"),(0,o.kt)("p",null,"This all makes SLE Micro for Rancher ideally suited for running Kubernetes\nclusters on the edge."))}p.isMDXComponent=!0}}]);
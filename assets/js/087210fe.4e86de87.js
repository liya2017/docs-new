"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},h),{},{components:n})):a.createElement(f,i({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"tx-confirmation",title:"The Back-of-Envelope Calculation of the Transaction Confirmation Number"},l=void 0,c={unversionedId:"essays/tx-confirmation",id:"essays/tx-confirmation",title:"The Back-of-Envelope Calculation of the Transaction Confirmation Number",description:"Think of the chain quality attack as a gambler's ruin problem. The attacker has an infinite number of coins, but the honest miners have $\\sigma$, which is the transaction confirmation number. In each round, one player wins a coin, and the other loses a coin. The honest miner loses if there is no coin in his hands. The attacker never gives up\u2014note that this assumption requires that the attacker controls less than a third of the total mining power.",source:"@site/docs/essays/tx-confirmation.md",sourceDirName:"essays",slug:"/essays/tx-confirmation",permalink:"/docs/essays/tx-confirmation",draft:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop/website/docs/essays/tx-confirmation.md",tags:[],version:"current",frontMatter:{id:"tx-confirmation",title:"The Back-of-Envelope Calculation of the Transaction Confirmation Number"},sidebar:"defaultSidebar",previous:{title:"CKB VM Verification Rules",permalink:"/docs/essays/rules"},next:{title:"Transaction Pool",permalink:"/docs/essays/tx-pool"}},h={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Think of the chain quality attack as a gambler's ruin problem. The attacker has an infinite number of coins, but the honest miners have $\\sigma$, which is the transaction confirmation number. In each round, one player wins a coin, and the other loses a coin. The honest miner loses if there is no coin in his hands. The attacker never gives up\u2014note that this assumption requires that the attacker controls less than a third of the total mining power."),(0,o.kt)("p",null,"Now analysis of the gambler's ruin tells us the probability that the attacker wins the game is"),(0,o.kt)("p",null,"$$\n{\\rm P(attacker\\ wins)}=(\\frac{p}{1-p})^\\sigma,\n$$"),(0,o.kt)("p",null,"where $p$ is the probability that the attacker wins a coin. If we consider the attacker as a selfish miner with perfect network propagation advantage, we have"),(0,o.kt)("p",null,"$$\np=\\frac{\\alpha+o}{1-\\alpha-o} ,\n$$"),(0,o.kt)("p",null,"where $\\alpha$ is the attacker's mining power share, $o$ is the proportion of orphaned blocks among all the blocks. See ",(0,o.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2014/765.pdf"},"this paper")," for the rationale behind the above equation. Note that this orphan rate definition is slightly different from the orphan rate in the NC-Max paper. Now we have"),(0,o.kt)("p",null,"$$\n{\\rm P(attacker\\ wins)}=(\\frac{\\alpha+o}{1-2\\alpha-2o})^\\sigma\n$$"),(0,o.kt)("p",null,"If we assume $o=0$ and $\\sigma=6$ in Bitcoin, $\\alpha=0.25$ , to get the same probability that the attacker wins the game, we need to have"),(0,o.kt)("p",null,"$$\n(\\frac{0.25}{0.5})^6=(\\frac{0.25+o}{0.5-2o})^\\sigma ,\n$$"),(0,o.kt)("p",null,"so"),(0,o.kt)("p",null,"$$\n\\sigma=\\log_{\\frac{0.25+o}{0.5-2o}}0.015625 .\n$$"),(0,o.kt)("p",null,"In Nervos CKB, when $o=5\\%$, $\\sigma=14.4$; when $o=2.5\\%$, $\\sigma=8.4$."),(0,o.kt)("p",null,"If we assume, similar to Bitcoin, $o=0$, $\\sigma=6$, and $\\alpha=0.3$, to achieve the same level of security in Nervos CKB, when $o=2.5\\%$,  we have $\\sigma=23.29$."),(0,o.kt)("p",null,"If we assume, similar to Ethereum, $o=6\\%$, $\\sigma=12$, and $\\alpha=0.25$, to achieve the same level of security in Nervos CKB, when $o=0.025\\%$, we have $\\sigma=4.96$."),(0,o.kt)("p",null,"In reality, $o$ can be estimated as $0=u{200}/(200+u{200})$, where $u_{200}$ is the number of uncle blocks embedded in the last 200 main chain blocks. By definition $\\sigma$ cannot be smaller than 6; when $\\sigma>30$, use 30 as an upper bound."))}m.isMDXComponent=!0}}]);
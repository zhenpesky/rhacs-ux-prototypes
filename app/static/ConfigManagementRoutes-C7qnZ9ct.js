import{di as C,G as D,fr as b,t as e,fU as Cn,al as q,b9 as hs,fV as fs,fD as B,fW as hn,bd as Re,fO as ls,fB as fn,fw as gn,fX as yn,an as ht,cw as xn,F as be,fY as ct,as as Nn,fI as bn,au as gs,fZ as ft,f_ as gt,f$ as jn,g0 as Sn,fp as te,fQ as yt,cB as xt,aw as En,ax as Tn,du as Nt,g1 as Rn,dv as ee,fJ as bt,g2 as jt,cJ as vn,g3 as St,g4 as Pn,g5 as An,e3 as $n,eN as wn,g6 as In,g7 as We,g8 as ys,fN as On,g9 as Et,ga as Tt,fP as xs,e_ as Ln,cm as Un,cn as _}from"./index-BO6gNZz7.js";import{r as O,R as is,g as L,u as Rt}from"./apollo-BxVF6eGb.js";import{s as G,w as De}from"./URLSearchInputWithAutocomplete-DH6GY-01.js";import{E as vt,D as Pt,e as ne,m as cs,T as qn,B as Dn,a as kn,L as us,c as ds,P as Qe,d as Te,i as Ve,n as He,b as me,p as pe,r as Ge,s as Le,f as Ue,g as Be,h as Mn,j as Fn,k as At,C as V,M as je,l as _n,o as ut,q as $t,t as Yn,u as Vn,v as ms,w as wt,S as It,G as Hn}from"./GroupedTabs-Dqpn3q_p.js";import{u as k,U as j,f as H,W as Y,S as Ot,b as Gn,G as Bn,a as Qn,X as Wn,c as Kn,M as zn,L as Jn,Y as Xn,i as ae,o as Lt,e as Ns,T as I,p as he,q as fe,r as ge,s as ye,n as Zn,P as Ut,t as ea}from"./URLSearchInput-BRh5M4Kv.js";import{q as $,T as Je,d as y,a as A,n as M,D as sa,b as ta,I as na,c as aa,P as ra,K as oa,S as la,e as ia,f as ca}from"./queryService-CMJd5xvH.js";import{s as Pe,a as dt,p as ua}from"./policy.proto-UGifO4do.js";import{d as z,u as da,a as ma,S as pa,C as Ca,f as ha,e as fa}from"./ControlDetails-Cp3lupSU.js";import{g as ga}from"./mathUtils-DiJFKe7q.js";import{s as Ce}from"./standards-CVFMmudo.js";import{N as X,P as bs,b as js,c as qt,d as Ss,e as Es,f as Dt,h as kt,C as ya,g as xa}from"./search-Dka3X-r0.js";import{r as Xe}from"./object-resolve-path-esx_DSkd.js";import{s as ps,a as Na,b as Mt,c as ba}from"./sorters-DROgS-i8.js";import{P as ja}from"./PolicyDisabledIconText-Dgjtt4fF.js";import{P as Ze,f as Ts}from"./policies.utils-C-Hy7UZX.js";import{c as Sa}from"./controls-CFAE8uc8.js";import{A as Ea}from"./_baseGt-B-bFMzU9.js";import"./react-pF2EnNv3.js";import"./lodash-JMWJiBov.js";import"./searchOptionsToQuery-Q3UHmnOv.js";import"./react-onclickoutside.es-pt8GsG-o.js";import"./react-popper-DmHPL6qR.js";import"./popper-U5NbITwx.js";import"./d3-D72bN1z7.js";import"./Progress-Mx3-qe1L.js";import"./times-circle-icon-MSsxvJDA.js";import"./omit-DYZlM1R1.js";import"./_flatRest-BTdgq3XF.js";import"./TableCellValue-CmK_V-83.js";import"./set-1Zt9niQE.js";import"./_baseSet-D3huXphm.js";function Cs(){return Cs=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(s[o]=r[o])}return s},Cs.apply(this,arguments)}function Ta(s,t){if(s==null)return{};var r=Ra(s,t),o,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(s);for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(r[o]=s[o])}return r}function Ra(s,t){if(s==null)return{};var r={},o=Object.keys(s),n,a;for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&(r[n]=s[n]);return r}var Rs=O.forwardRef(function(s,t){var r=s.color,o=r===void 0?"currentColor":r,n=s.size,a=n===void 0?24:n,i=Ta(s,["color","size"]);return is.createElement("svg",Cs({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),is.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),is.createElement("polyline",{points:"12 5 19 12 12 19"}))});Rs.propTypes={color:C.string,size:C.oneOfType([C.string,C.number])};Rs.displayName="ArrowRight";const va=L`
    query numPolicies($query: String) {
        policyCount(query: $query)
    }
`,Pa=()=>{const s=k(),t=D(),r=j.getURL(s,t).base(b.POLICY).url();return e.jsx(H,{query:va,variables:{query:$.objectToWhereClause({"Lifecycle Stage":"DEPLOY"})},children:({loading:o,data:n})=>{const a=(n==null?void 0:n.policyCount)||0;return e.jsx(vt,{count:a,entityType:b.POLICY,url:r,loading:o,position:"first",short:!0})}})},Aa=L`
    query numCISControls {
        executedControlCount(query: "Standard: CIS")
    }
`,$a=()=>{const{loading:s,error:t,data:r}=Rt(Aa);t&&Cn(t);const o=k(),n=D(),a=j.getURL(o,n).base(b.CONTROL).url(),i=(r==null?void 0:r.executedControlCount)||0;return e.jsx(vt,{count:i,entityType:b.CONTROL,url:a,loading:s,position:"middle",short:!0})},wa=s=>q(ne[s]),Ia=(s,t)=>t.map(r=>({label:wa(r),link:s.base(r).url()})),Oa=()=>{const s=[b.CLUSTER,b.NAMESPACE,b.NODE,b.DEPLOYMENT,b.IMAGE,b.SECRET],t=k(),r=D(),o=j.getURL(t,r),n=Ia(o,s);return e.jsx(Pt,{text:"Application & Infrastructure",options:n})},La=s=>q(ne[s]),Ua=(s,t)=>t.map(r=>({label:La(r),link:s.base(r).url()})),qa=()=>{const s=[b.SUBJECT,b.SERVICE_ACCOUNT,b.ROLE],t=k(),r=D(),o=j.getURL(t,r),n=Ua(o,s);return e.jsx(Pt,{text:"Role-Based Access Control",options:n})},Da=()=>{const{hasReadAccess:s}=hs(),t=s("WorkflowAdministration"),r=s("Compliance");return e.jsx("div",{className:"flex flex-1 justify-end",children:e.jsxs("div",{className:"flex",children:[t&&e.jsx(Pa,{}),r&&e.jsx($a,{}),e.jsx("div",{className:"flex w-32 mr-2",children:e.jsx(Oa,{})}),e.jsx("div",{className:"flex w-32 mr-3",children:e.jsx(qa,{})})]})})},vs={READY:7},ka=ua.map(s=>({title:hn[s],color:fs[s]})),Ft="var(--base-400)",Oe={PASS:"Pass",FAIL:"Fail"},Ma=L`
    query policyViolationsBySeverity($query: String) {
        policies(query: $query) {
            id
            name
            categories
            severity
            disabled
            description
            lifecycleStages
            policyStatus
        }
    }
`;function Fa(s,t){const r=cs(t[s].filter(n=>!n.passing).map(n=>dt[n.severity])),o=Object.entries(dt).find(n=>n[1]===r);return o?fs[o[0]]:Ft}const _a=()=>{const s=k(),t=D(),r=O.useContext(G),o=l=>!l||!l.policies||!l.policies.length?[]:l.policies;function n(l){const c=l.reduce((u,m)=>{const{categories:d,severity:p,name:h}=m,f=m.policyStatus.toLowerCase()===Oe.PASS.toLowerCase(),g={...u};return d.forEach((x,N)=>{g[x]||(g[x]=[]);const S=f?Ft:fs[p],v=f?null:{[r]:{[z.POLICY_STATUS.CATEGORY]:Oe.FAIL}},T=j.getURL(s,t).base(b.POLICY,m.id).push(b.DEPLOYMENT).query(v).url(),P=N>0?`${N}. ${h}`:h;g[x].push({severity:p,passing:f,color:S,value:0,labelColor:S,name:`${f?"":"View deployments violating"} "${P}"`,link:T})}),g},{});return Object.entries(c).map(u=>{const m=u[0],d=u[1],p=d.filter(x=>x.passing).length,h=`${d.length-p}/${d.length} policies violated`,f=ga(p,d.length),g=Fa(m,c);return{name:m,children:d,value:f,labelValue:h,color:g}})}function a(l){return l.filter(u=>u.policyStatus.toLowerCase()==="fail").length}function i(l){const c=l.filter(N=>N.policyStatus==="fail");function u(N){return c.filter(S=>S.severity===N).length}const m=u(Pe.CRITICAL_SEVERITY),d=u(Pe.HIGH_SEVERITY),p=u(Pe.MEDIUM_SEVERITY),h=u(Pe.LOW_SEVERITY),f=l.filter(N=>!N.disabled).length-c.length,g=[],x=j.getURL(s,t).base(b.POLICY);return m&&g.push({text:`${m} rated as critical`,link:x.query({[r]:{Severity:Pe.CRITICAL_SEVERITY,[z.POLICY_STATUS.CATEGORY]:Oe.FAIL}}).url()}),x.query(null),d&&g.push({text:`${d} rated as high`,link:x.query({[r]:{Severity:Pe.HIGH_SEVERITY,Disabled:"False",[z.POLICY_STATUS.CATEGORY]:Oe.FAIL}}).url()}),x.query(null),p&&g.push({text:`${p} rated as medium`,link:x.query({[r]:{Severity:Pe.MEDIUM_SEVERITY,Disabled:"False",[z.POLICY_STATUS.CATEGORY]:Oe.FAIL}}).url()}),x.query(null),h&&g.push({text:`${h} rated as low`,link:x.query({[r]:{Severity:Pe.LOW_SEVERITY,Disabled:"False",[z.POLICY_STATUS.CATEGORY]:Oe.FAIL}}).url()}),x.query(null),f&&g.push({text:`${f} policies without violations`,link:x.query({[r]:{Disabled:"False",[z.POLICY_STATUS.CATEGORY]:Oe.PASS}}).url()}),g}return e.jsx(H,{query:Ma,fetchPolicy:"network-only",variables:{query:"LifeCycle Stage:DEPLOY"},children:({loading:l,data:c,networkStatus:u})=>{let m=e.jsx(B,{}),d=null;if(!l&&c&&u===vs.READY){const p=o(c),h=n(p),f=a(p),g=i(p),x=j.getURL(s,t).base(b.POLICY).url();d=e.jsx(Re,{to:x,className:"no-underline btn-sm btn-base",children:"View all"}),h.length?m=e.jsx(Ot,{data:h,rootData:g,legendData:ka,totalValue:f,units:"value"}):m=e.jsx("div",{className:"flex flex-1 items-center justify-center p-4 leading-loose",children:"No data available."})}return e.jsx(Y,{className:"s-2",header:"Policy violations by severity",headerComponents:d,children:m})}})},J={PASS:"Pass",FAIL:"Fail","N/A":"N/A"},_t=gn,Yt=yn,Vt="var(--base-400)",Ya=[{title:"Passing",color:_t},{title:"Failing",color:Yt},{title:"N/A",color:Vt}],Ht=L`
    query complianceByControls(
        $groupBy: [ComplianceAggregation_Scope!]
        $unit: ComplianceAggregation_Scope!
        $where: String
    ) {
        aggregatedResults(groupBy: $groupBy, unit: $unit, where: $where) {
            results {
                aggregationKeys {
                    id
                    scope
                }
                numFailing
                numPassing
                numSkipped
                keys {
                    ... on ComplianceControlGroup {
                        id
                        name
                        description
                    }
                    ... on ComplianceControl {
                        id
                        name
                        description
                    }
                }
            }
        }
    }
`,Ke=(s,t)=>s===0&&t===0?0:Math.floor(s/(s+t)*100),Va=s=>s.aggregatedResults.results.reduce((r,o)=>{const{numPassing:n,numFailing:a}=o,[i,l]=o.keys;return r[i.id]?r[i.id].controls=[...r[i.id].controls,{control:l,numPassing:n,numFailing:a}]:r[i.id]={category:i,controls:[{control:l,numPassing:n,numFailing:a}]},r},{}),mt=(s,t)=>!s&&!t?Vt:t?Yt:_t,Ha=(s,t,r,o)=>Object.keys(s).map(i=>{const{category:l,controls:c}=s[i],{totalPassing:u,totalFailing:m}=c.reduce((p,h)=>(p.totalPassing+=h.numPassing,p.totalFailing+=h.numFailing,p),{totalPassing:0,totalFailing:0}),d=Ke(u,m);return{name:`${l.name}. ${l.description}`,color:mt(u,m),value:d,children:c.map(({control:p,numPassing:h,numFailing:f})=>{const g=Ke(h,f),x=t.base(b.CONTROL).push(p.id).query({[r]:{standard:Ce[o],"Compliance State":void 0}}).url();return{name:`${p.name} - ${p.description}`,color:mt(h,f),value:g,link:x}})}}),Ga=s=>s.aggregatedResults.results.reduce((r,o)=>{const{numPassing:n,numFailing:a}=o;return Ke(n,a)===100?r.controlsPassing+=1:!n&&!a?r.controlsNA+=1:r.controlsFailing+=1,r},{controlsPassing:0,controlsFailing:0,controlsNA:0}),Ba=(s,t,r,o,n,a)=>{const i=o.base(b.CONTROL).query({[a]:{standard:Ce[n],"Compliance State":J.PASS}}).url(),l=o.base(b.CONTROL).query({[a]:{standard:Ce[n],"Compliance State":J.FAIL}}).url(),c=o.base(b.CONTROL).query({[a]:{standard:Ce[n],"Compliance State":J["N/A"]}}).url();return[{text:`${s} Controls Passing`,link:i},{text:`${t} Controls Failing`,link:l},{text:`${r} Controls N/A`,link:c}]},Qa=(s,t,r,o)=>{const n=Va(s),{controlsPassing:a,controlsFailing:i,controlsNA:l}=Ga(s),c=Ba(a,i,l,t,r,o);return{sunburstData:Ha(n,t,o,r),sunburstRootData:c,totalPassing:Ke(a,i)}},Wa=({standardType:s,searchParam:t,urlBuilder:r})=>{const o=r.base(b.CONTROL).query({[t]:{standard:Ce[s],groupBy:b.CATEGORY}}).url();return e.jsx(Re,{to:o,className:"no-underline btn-sm btn-base",children:"View standard"})},Ka=[Ht],Ps=({className:s,standardOptions:t})=>{const{hasReadWriteAccess:r}=hs(),o=r("Compliance"),{runs:n,error:a,restartPolling:i,inProgressScanDetected:l,isCurrentScanIncomplete:c}=da(Ka),u=O.useContext(G),m=t.map(N=>({label:Ce[N],jsonpath:Ce[N],value:Ce[N],standard:N})),[d,p]=O.useState(m[0]),h=D(),f=k();function g(N){const S=m.find(v=>v.value===N);p(S)}const x={groupBy:[ls.CATEGORY,ls.CONTROL],unit:ls.CONTROL,where:$.objectToWhereClause({Standard:d.value})};return e.jsx(ma,{query:Ht,variables:x,children:({data:N,networkStatus:S})=>{const v=e.jsx(qn,{value:d.value,onChange:g,options:m}),T=e.jsxs("div",{className:"flex",children:[o&&e.jsx(pa,{className:"btn-sm btn-base mr-2",text:"Scan",textClass:"hidden lg:block",textCondensed:`Scan ${fn[d.standard]}`,clusterId:"*",standardId:d.standard,loaderSize:10,onScanTriggered:i,scanInProgress:c},d.standard),e.jsx(Wa,{urlBuilder:j.getURL(f,h),standardType:d.standard,searchParam:u})]});let P=e.jsx(B,{});if(N&&S===vs.READY)if(N.aggregatedResults.results.length){const{sunburstData:R,sunburstRootData:E,totalPassing:w}=Qa(N,j.getURL(f,h),d.standard,u);P=e.jsx(Ot,{data:R,rootData:E,legendData:Ya,totalValue:w},d.value)}else P=e.jsx(X,{message:"No data available. Please run a scan."});return c&&(P=e.jsxs("div",{className:"flex-1",children:[a&&e.jsx(ht,{variant:"danger",title:"There was an error fetching compliance scan status, data below may be out of date",component:"p",children:xn(a)}),l&&!a&&e.jsx(Ca,{runs:n,isFullHeight:!0})]})),e.jsx(Y,{className:`s-2 ${s}`,id:"compliance-by-controls",titleComponents:v,headerComponents:T,children:P})}})};Ps.propTypes={className:C.string,standardOptions:C.arrayOf(C.shape).isRequired};Ps.defaultProps={className:""};const Gt=({data:s})=>{const t=be();function r(){const u=s.length<5?1:5,m=s.map(h=>h.x),d=Math.round(cs(m)/u)*u,p=[];for(let h=0;h<=d+u;h+=u)p.push(h);return p}const o=r();function n(u){return Math.round(u)}function a(){return s.map((u,m)=>({link:u.link,x:null,y:u.y,yOffset:-25,xOffset:10,label:` ${m+1}. ${u.y}`}))}function i(u){u.link&&t(u.link)}const l=a(),c=[...s];return e.jsx("div",{className:"relative chart-container w-full horizontal-bar-responsive",children:e.jsxs(Gn,{height:350,yType:"category",yRange:s.map((u,m)=>(m+1)*41).concat([0]),margin:{top:33.3,left:7},stackBy:"x",xDomain:[0,cs(o)],children:[e.jsx(Bn,{children:e.jsx(Dn,{})}),e.jsx(Qn,{tickValues:o}),e.jsx(Wn,{orientation:"top",tickSize:0,tickValues:o,tickFormat:n}),e.jsx(Kn,{data:s,style:{height:3,rx:"2px",cursor:"pointer"},color:"url(#horizontalGradient)",onValueClick:i,stack:!0}),e.jsx(zn,{data:c,marginTop:"17",color:"#BDF3FF",onValueClick:i}),e.jsx(Jn,{data:l,labelAnchorX:"start-alignment",labelAnchorY:"baseline",onValueClick:i,style:{fill:"var(--pf-t--global--text--color--link--default)",cursor:"pointer",transform:"translate(15px,35px)"}}),e.jsx(Xn,{tickSize:0,top:26,className:"text-xs"})]})})};Gt.propTypes={data:C.arrayOf(C.shape({})).isRequired};const za=L`
    query usersWithClusterAdminRoles($query: String) {
        clusters {
            id
            subjects(query: $query) {
                id
                name
                clusterAdmin
            }
        }
    }
`,Ja=()=>{const s=k(),t=D();function r(o){if(!o||!o.clusters)return[];const n=o.clusters.reduce((a,i)=>{if(!i.subjects)return a;const l={...a};return i.subjects.filter(c=>c.clusterAdmin).forEach(c=>{const{name:u,id:m}=c;a[u]||(l[u]={id:m,count:0}),l[u]={...l[u],count:l[u].count+=1}}),l},{});return Object.entries(n).map(a=>{var l;const i=j.getURL(s,t).base(b.SUBJECT).push((l=a[1])==null?void 0:l.id).url();return{y:a[0],x:a[1].count,hint:{title:a[0],body:a[1].count},link:i}}).sort((a,i)=>i.x-a.x).slice(0,6)}return e.jsx(H,{query:za,variables:{query:"Cluster Role:true"},children:({loading:o,data:n,networkStatus:a})=>{let i=e.jsx(B,{}),l;if(!o&&n&&a===vs.READY){const c=r(n),u=j.getURL(s,t).base(b.SUBJECT).url();l=e.jsx(Re,{to:u,className:"no-underline btn-sm btn-base",children:"View all"}),i=e.jsx(Gt,{data:c})}return e.jsx(Y,{className:"s-2 overflow-hidden",header:"Users with most cluster admin roles",headerComponents:l,children:i})}})},Xa=L`
    query secrets {
        secrets {
            id
            name
            clusterName
            namespace
            files {
                name
                type
                metadata {
                    __typename
                    ... on Cert {
                        endDate
                        startDate
                    }
                    ... on ImagePullSecret {
                        registries {
                            name
                            username
                        }
                    }
                }
            }
            deploymentCount
        }
    }
`,Za=s=>{let t="no";return s.forEach(r=>{if(r.metadata){const{startDate:o,endDate:n}=r.metadata;if(!o&&!n)return;const a=new Date().toISOString(),i=ct.isAfter(o,a),l=ct.isAfter(a,n);i?t="upcoming":l?t="expired":t="valid"}}),`has ${t} certs`},er=()=>{const s=k(),t=D();function r(o){return!o||!o.secrets?[]:o.secrets.filter(n=>n.deploymentCount).sort((n,a)=>a.deploymentCount-n.deploymentCount).slice(0,10)}return e.jsx(H,{query:Xa,children:({loading:o,data:n})=>{let a=e.jsx(B,{});const i=j.getURL(s,t).base(b.SECRET).url(),l=e.jsx(Re,{to:i,className:"no-underline btn-sm btn-base",children:"View all"});if(!o&&n){const c=r(n);a=e.jsx("ul",{className:"w-full columns-2 columns-gap-0",style:{columnRule:"1px solid var(--base-300)"},children:c.map((u,m)=>{const d=j.getURL(s,t).base(b.SECRET).push(u.id).url();return e.jsxs("li",{className:`inline-block flex flex-row border-base-300 w-full ${m!==4||m!==9?"border-b":""}`,children:[e.jsx("div",{className:"self-center text-2xl pl-4 pr-4",children:m+1}),e.jsxs("div",{className:"flex flex-col truncate pr-4 pb-4 pt-4",children:[e.jsxs("span",{className:"text-sm",children:[u.clusterName,"/",u.namespace]}),e.jsx(Re,{to:d,children:u.name}),u.deploymentCount>0&&e.jsxs("span",{className:"truncate text-sm",children:[`${u.deploymentCount} ${q("deployment",u.deploymentCount)}, `,Za(u.files)]})]})]},u.id)})})}return e.jsx(Y,{className:"s-2 overflow-hidden",header:"Secrets most used across deployments",headerComponents:l,children:a})}})},sr=()=>{const{hasReadAccess:s}=hs(),t=s("Alert")&&s("WorkflowAdministration"),r=s("Compliance"),o=s("Cluster")&&s("K8sRoleBinding")&&s("K8sSubject"),n=s("Deployment")&&s("Secret");return e.jsxs(kn,{headerText:Nn[gs.CONFIG_MANAGEMENT],headerComponents:e.jsx(Da,{}),children:[t&&e.jsx(_a,{}),r&&e.jsx(Ps,{standardOptions:[bn.CIS_Kubernetes_v1_5]}),o&&e.jsx(Ja,{}),n&&e.jsx(er,{})]})},_e=O.createContext(),Bt={sortParam:gt.page,pageParam:ft.page},Qt={sortParam:gt.sidePanel,pageParam:ft.sidePanel},Wt=(s,t,r)=>{const o=O.useCallback(n=>{const{target:a}=n;s.current&&a instanceof HTMLElement&&!s.current.contains(a)&&t()},[t,s]);O.useEffect(()=>(r&&document.addEventListener("mousedown",o),()=>{r&&document.removeEventListener("mousedown",o)}),[r,o])};function xe(s,t){return`${jn}/${Sn[s]}/${t}`}const tr=!0,Ne=({headerText:s,query:t,variables:r,entityType:o,tableColumns:n,createTableRows:a,selectedRowId:i,idAttribute:l,defaultSorted:c,defaultSearchOptions:u,data:m,totalResults:d,autoFocusSearchInput:p,noDataText:h})=>{const f=k(),g=D(),x=be(),N=O.useContext(De),S=O.useContext(_e),v=N.paging[S.pageParam],P=N.sort[S.sortParam]||c,[R,E]=O.useState({});function w(K){const Q=Xe(K,l),Z=j.getURL(f,g).push(Q).url();x(Z)}const U=[yt[o]],W=`Filter ${q(ne[o])}`;function Se(K,Q,Z){const Ee=`${Z} ${q(s||ne[o],Z)}`;return e.jsxs(bs,{testid:"panel",children:[e.jsxs(js,{children:[e.jsx(qt,{testid:"panel-header",text:Ee}),e.jsx(Ss,{children:K})]}),e.jsx(Es,{children:e.jsx(Je,{rows:Q,columns:n,onRowClick:w,idAttribute:l,selectedRowId:i,noDataText:h,page:v,sorted:P,onSortedChange:le,manual:tr,disableSortRemove:!0})})]})}function ve(K){x(N.setPage(K).toUrl())}function le(K,Q){const Z=K.map(Ye=>{const it=R[Ye.id]||Q.sortField;E({[Ye.id]:it,...R});const{desc:pn}=Ye;return{id:it,desc:pn}}),Ee=N.setSort(Z).toUrl();x(Ee)}function Me(K){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-1 justify-start",children:e.jsx(H,{query:Dt,action:"list",variables:{categories:U},children:({data:Q})=>{const Z=Q&&Q.searchOptions?[...Q.searchOptions,...u]:[];return e.jsx(Lt,{placeholder:W,className:"w-full",categoryOptions:Z,categories:U,autoFocus:p})}})}),e.jsx(Ns,{page:v,dataLength:K,setPage:ve,pageSize:us})]})}if(m){const K=Me(d);return Se(K,m,d)}const Fe={...r,pagination:$.getPagination(P,v,us)};return e.jsx("section",{className:"h-full w-full",children:e.jsx(H,{query:t,variables:Fe,children:({loading:K,data:Q})=>{if(ae(K,m))return e.jsx(B,{});if(!Q)return e.jsx(te,{resourceType:o,useCase:gs.CONFIG_MANAGEMENT});const Z=a(Q)??[],Ee=(Q==null?void 0:Q.count)||0,Ye=Me(Ee);return Se(Ye,Z,Ee)}})})};Ne.propTypes={query:C.shape().isRequired,variables:C.shape(),entityType:C.string.isRequired,tableColumns:C.arrayOf(C.shape({})).isRequired,createTableRows:C.func.isRequired,selectedRowId:C.string,idAttribute:C.string.isRequired,headerText:C.string,defaultSorted:C.arrayOf(C.shape({})),defaultSearchOptions:C.arrayOf(C.string),data:C.arrayOf(C.shape({})),totalResults:C.number,autoFocusSearchInput:C.bool,noDataText:C.string};Ne.defaultProps={variables:{},headerText:"",selectedRowId:null,defaultSorted:[],defaultSearchOptions:[],data:null,totalResults:null,autoFocusSearchInput:!0,noDataText:"No results found. Please refine your search."};function qe({text:s}){const t=e.jsx(En,{children:e.jsx(Tn,{color:"var(--pf-t--global--icon--color--status--warning--default)"})});return e.jsx(xt,{icon:t,text:s})}const Ae=(s,t)=>{if(!t||!s)return s;const r=Nt(t);return s.filter(o=>{let n=!1;if(o.policyStatus&&o.policyStatus.failingPolicies){const{length:a}=o.policyStatus.failingPolicies;a||(n=!0)}else o.policyStatus==="pass"&&(n=!0);return r===z.POLICY_STATUS.VALUES.PASS?n:r===z.POLICY_STATUS.VALUES.FAIL?!n:!0})},nr=L`
    query clusters($query: String, $pagination: Pagination) {
        results: clusters(query: $query, pagination: $pagination) {
            id
            name
            serviceAccountCount
            k8sRoleCount
            subjectCount
            status {
                orchestratorMetadata {
                    version
                }
            }
            complianceControlCount(query: "Standard:CIS") {
                passingCount
                failingCount
                unknownCount
            }
            policyStatus {
                status
                failingPolicies {
                    id
                    name
                }
            }
        }
        count: clusterCount(query: $query)
    }
`,Kt=[{id:ds.CLUSTER,desc:!1}],ar=(s,t)=>[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Cluster",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:o})=>{const n=xe("CLUSTER",o.id);return e.jsx(I,{url:n,children:o.name})},accessor:"name",id:ds.CLUSTER,sortField:ds.CLUSTER},{Header:"K8S Version",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,accessor:"status.orchestratorMetadata.version",sortable:!1},{Header:"Policy Status",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:o})=>{const{policyStatus:{status:n}}=o;return e.jsx(Qe,{isPass:n==="pass"})},id:"status",accessor:o=>o.policyStatus.status,sortable:!1},{Header:"CIS Controls",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,accessor:"complianceControlCount",Cell:({original:o})=>{const{complianceControlCount:n}=o,{passingCount:a,failingCount:i,unknownCount:l}=n,c=a+i+l;if(!c)return e.jsx(qe,{text:"No Controls"});const u=j.getURL(s,t).push(o.id).push("CONTROL").url(),m=`${c} ${q("Controls",c)}`;return e.jsx(I,{url:u,children:m})},sortable:!1},{Header:"Users & Groups",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:o})=>{const{subjectCount:n}=o;if(!n)return e.jsx(qe,{text:"No Users & Groups"});const a=j.getURL(s,t).push(o.id).push("SUBJECT").url(),i=`${n} ${q("Users & Groups",n)}`;return e.jsx(I,{url:a,children:i})},id:"subjectCount",accessor:o=>o.subjectCount,sortable:!1},{Header:"Service Accounts",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:o})=>{const{serviceAccountCount:n}=o;if(!n)return e.jsx(qe,{text:"No Service Accounts"});const a=j.getURL(s,t).push(o.id).push("SERVICE_ACCOUNT").url(),i=`${n} ${q("Service Accounts",n)}`;return e.jsx(I,{url:a,children:i})},id:"serviceAccountCount",accessor:o=>o.serviceAccountCount,sortable:!1},{Header:"Roles",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:o})=>{const{k8sRoleCount:n}=o;if(!n)return e.jsx(qe,{text:"No Roles"});const a=j.getURL(s,t).push(o.id).push("ROLE").url(),i=`${n} ${q("Roles",n)}`;return e.jsx(I,{url:a,children:i})},id:"k8sRoleCount",accessor:o=>o.k8sRoleCount,sortable:!1}],rr=s=>s.results,As=({className:s,selectedRowId:t,onRowClick:r,query:o,data:n})=>{const a=D(),i=k(),l=!t,c=ar(i,a),{[z.POLICY_STATUS.CATEGORY]:u,...m}=o??{},d={...m},p=$.objectToWhereClause(d),h=p?{query:p}:null;function f(g){const x=rr(g);return Ae(x,u)}return e.jsx(Ne,{className:s,query:nr,variables:h,entityType:"CLUSTER",tableColumns:c,createTableRows:f,onRowClick:r,selectedRowId:t,idAttribute:"id",defaultSorted:Kt,defaultSearchOptions:[z.POLICY_STATUS.CATEGORY],data:Ae(n,u),autoFocusSearchInput:l})};As.propTypes=he;As.defaultProps=fe;function or({isTextOnly:s}){const t=e.jsx(Rn,{});return e.jsx(xt,{icon:t,text:"N/A",isTextOnly:s})}const es=({headerText:s,query:t,variables:r,entityType:o,tableColumns:n,createTableRows:a,selectedRowId:i,idAttribute:l,defaultSorted:c,defaultSearchOptions:u,data:m,autoFocusSearchInput:d,noDataText:p})=>{const h=k(),f=D(),g=be(),[x,N]=O.useState(0);function S(E){const w=Xe(E,l),U=j.getURL(h,f).push(w).url();g(U)}const v=[yt[o]],T=`Filter ${q(ne[o])}`;function P(E,w){const U=`${w.length} ${q(s||ne[o],w.length)}`;return e.jsxs(bs,{testid:"panel",children:[e.jsxs(js,{children:[e.jsx(qt,{testid:"panel-header",text:U}),e.jsx(Ss,{children:E})]}),e.jsx(Es,{children:e.jsx(Je,{rows:w,columns:n,onRowClick:S,idAttribute:l,selectedRowId:i,noDataText:p,page:x,defaultSorted:c})})]})}function R(E){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-1 justify-start",children:e.jsx(H,{query:Dt,action:"list",variables:{categories:v},children:({data:w})=>{const U=w&&w.searchOptions?[...w.searchOptions,...u]:[];return e.jsx(Lt,{placeholder:T,className:"w-full",categoryOptions:U,categories:v,autoFocus:d})}})}),e.jsx(Ns,{page:x,dataLength:E,setPage:N,pageSize:sa})]})}if(m){const E=R(m.length);return P(E,m)}return e.jsx("section",{className:"h-full w-full",children:e.jsx(H,{query:t,variables:r,children:({loading:E,data:w})=>{if(ae(E,m))return e.jsx(B,{});if(!w)return e.jsx(te,{resourceType:o,useCase:gs.CONFIG_MANAGEMENT});const U=a(w)??[],W=R(U.length);return P(W,U)}})})};es.propTypes={query:C.shape().isRequired,variables:C.shape(),entityType:C.string.isRequired,tableColumns:C.arrayOf(C.shape({})).isRequired,createTableRows:C.func.isRequired,selectedRowId:C.string,idAttribute:C.string.isRequired,headerText:C.string,defaultSorted:C.arrayOf(C.shape({})),defaultSearchOptions:C.arrayOf(C.string),data:C.arrayOf(C.shape({})),autoFocusSearchInput:C.bool,noDataText:C.string};es.defaultProps={variables:{},headerText:"",selectedRowId:null,defaultSorted:[],defaultSearchOptions:[],data:null,autoFocusSearchInput:!0,noDataText:"No results found. Please refine your search."};const lr=[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Standard",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"standard"},{Header:"Control",headerClassName:`w-1/2 ${A}`,className:`w-1/2 ${y}`,Cell:({original:s})=>{const t=xe("CONTROL",s.id);return e.jsx(I,{url:t,children:s.control})},accessor:"control",sortMethod:ps},{Header:"Control Status",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y} capitalize`,Cell:({original:s})=>s.status===J["N/A"]?e.jsx(or,{}):e.jsx(Qe,{isPass:s.status==="Pass"}),accessor:"status",sortMethod:Na}],pt=(s,t)=>{if(!t||!s)return s;const r=Nt(t);return s.filter(n=>r===J.PASS?n.status===J.PASS:r===J.FAIL?n.status===J.FAIL:n.status===J["N/A"])},ir=s=>{if(!s||!s.results||!s.results.results.length)return[];let t=0,r=0;s.results.results[0].aggregationKeys.forEach(({scope:n},a)=>{n==="STANDARD"&&(t=a),n==="CONTROL"&&(r=a)});const o={};return s.results.results.forEach(({keys:n,numFailing:a,numPassing:i})=>{if(!n[r])return;const l=n[r].id;if(o[l]){const{status:c}=o[l];(c===J.FAIL||a)&&(o[l].status=J.FAIL)}else{let c="";i||(c=J.FAIL),a||(c=J.PASS),!i&&!a&&(c=J["N/A"]),o[l]={id:l,standard:Ce[n[t].id],control:`${n[r].name} - ${n[r].description}`,status:c}}}),Object.values(o)},$s=({className:s,selectedRowId:t,onRowClick:r,query:o,data:n})=>{const a=O.useContext(G),i=!t,{[z.COMPLIANCE.STATE]:l,...c}=$.getQueryBasedOnSearchContext(o,a),u={...c};u.Standard||(u.Standard="CIS");const d={where:$.objectToWhereClause(u),groupBy:["STANDARD","CONTROL"]};function p(h){const f=ir(h);return pt(f,l)}return e.jsx(es,{className:s,query:ha,variables:d,headerText:"CIS Controls",noDataText:"No control results available. Please run a scan.",entityType:"CONTROL",tableColumns:lr,createTableRows:p,onRowClick:r,selectedRowId:t,idAttribute:"id",defaultSorted:[{id:"status",desc:!1},{id:"standard",desc:!1},{id:"control",desc:!1}],defaultSearchOptions:[z.COMPLIANCE.STATE],data:pt(n,l),autoFocusSearchInput:i})};$s.propTypes=he;$s.defaultProps=fe;const zt=[{id:Te.DEPLOYMENT,desc:!1}],cr=(s,t,r)=>[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Deployment",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const a=xe("DEPLOYMENT",n.id);return e.jsx(I,{url:a,children:n.name})},accessor:"name",id:Te.DEPLOYMENT,sortField:Te.DEPLOYMENT},r&&r.CLUSTER?null:{Header:"Cluster",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"clusterName",Cell:({original:n})=>{const{clusterName:a,clusterId:i,id:l}=n,c=j.getURL(s,t).push(l).push("CLUSTER",i).url();return e.jsx(I,{url:c,children:a})},id:Te.CLUSTER,sortField:Te.CLUSTER},r&&r.NAMESPACE?null:{Header:"Namespace",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"namespace",Cell:({original:n})=>{const{namespace:a,namespaceId:i,id:l}=n,c=j.getURL(s,t).push(l).push("NAMESPACE",i).url();return e.jsx(I,{url:c,children:a})},id:Te.NAMESPACE,sortField:Te.NAMESPACE},{Header:"Policy Status",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{policyStatus:a}=n;return e.jsx(Qe,{isPass:a==="pass"})},id:"policyStatus",accessor:"policyStatus",sortable:!1},{Header:"Images",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{imageCount:a,id:i}=n;if(a===0)return"No images";const l=j.getURL(s,t).push(i).push("IMAGE").url(),c=`${a} ${q("image",a)}`;return e.jsx(I,{url:l,children:c})},accessor:"imageCount",sortable:!1},{Header:"Secrets",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{secretCount:a,id:i}=n;if(a===0)return"No secrets";const l=j.getURL(s,t).push(i).push("SECRET").url(),c=`${a} ${q("secret",a)}`;return e.jsx(I,{url:l,children:c})},accessor:"secretCount",sortable:!1},r&&r.SERVICE_ACCOUNT?null:{Header:"Service Account",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"serviceAccount",Cell:({original:n})=>{const{serviceAccount:a,serviceAccountID:i,id:l}=n,c=j.getURL(s,t).push(l).push("SERVICE_ACCOUNT",i).url();return e.jsx(I,{url:c,children:a})},id:Te.SERVICE_ACCOUNT,sortField:Te.SERVICE_ACCOUNT}].filter(n=>n),ur=s=>s.results,ws=({className:s,selectedRowId:t,onRowClick:r,query:o,data:n,totalResults:a,entityContext:i})=>{const l=D(),c=k(),u=O.useContext(G),m=!t,d=cr(c,l,i),{[z.POLICY_STATUS.CATEGORY]:p,...h}=$.getQueryBasedOnSearchContext(o,u),f=$.objectToWhereClause({...h}),g=f?{query:f}:null;function x(N){const S=ur(N);return Ae(S,p)}return e.jsx(Ne,{className:s,query:ta,variables:g,entityType:"DEPLOYMENT",tableColumns:d,createTableRows:x,onRowClick:r,selectedRowId:t,idAttribute:"id",defaultSorted:zt,defaultSearchOptions:[z.POLICY_STATUS.CATEGORY],data:Ae(n,p),totalResults:a,autoFocusSearchInput:m})};ws.propTypes=he;ws.defaultProps=fe;const Jt=[{id:Ve.NAME,desc:!1}],dr=(s,t,r)=>[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Image",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const a=xe("IMAGE",n.id);return e.jsx(I,{url:a,children:n.name.fullName})},accessor:"name.fullName",id:Ve.NAME,sortField:Ve.NAME},{Header:"Created",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{metadata:a}=n;return a?ee(a.v1.created):"-"},id:Ve.CREATED_TIME,sortField:Ve.CREATED_TIME},r&&r.DEPLOYMENT?null:{Header:"Deployments",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{deployments:a,id:i}=n,l=a.length,c=`${l} ${q("deployment",l)}`;if(l===0)return c;const u=j.getURL(s,t).push(i).push("DEPLOYMENT").url();return e.jsx(I,{url:u,children:c})},accessor:"deployments",sortable:!1}].filter(n=>n),mr=s=>s.images,Is=({className:s,selectedRowId:t,onRowClick:r,query:o,data:n,totalResults:a,entityContext:i})=>{const l=D(),c=k(),u=!t,m=$.objectToWhereClause(o),d=m?{query:m}:null,p=dr(c,l,i);return e.jsx(Ne,{className:s,query:na,variables:d,entityType:"IMAGE",tableColumns:p,createTableRows:mr,onRowClick:r,selectedRowId:t,idAttribute:"id",defaultSorted:Jt,data:n,totalResults:a,autoFocusSearchInput:u})};Is.propTypes=he;Is.defaultProps=fe;const Xt=[{id:He.NAMESPACE,desc:!1}],pr=(s,t,r)=>[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"metadata.id"},{Header:"Namespace",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const a=xe("NAMESPACE",n.metadata.id);return e.jsx(I,{url:a,children:n.metadata.name})},accessor:"metadata.name",id:He.NAMESPACE,sortField:He.NAMESPACE},r&&r.CLUSTER?null:{Header:"Cluster",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"metadata.clusterName",Cell:({original:n})=>{const{metadata:a}=n;if(!a)return"-";const{clusterName:i,clusterId:l,id:c}=a,u=j.getURL(s,t).push(c).push("CLUSTER",l).url();return e.jsx(I,{url:u,children:i})},id:He.CLUSTER,sortField:He.CLUSTER},{Header:"Policy Status",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{policyStatus:{status:a}}=n;return e.jsx(Qe,{isPass:a==="pass"})},id:"status",accessor:n=>n.policyStatus.status,sortable:!1},{Header:"Secrets",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{numSecrets:a,metadata:i}=n;if(!i||a===0)return"No Secrets";const{id:l}=i,c=j.getURL(s,t).push(l).push("SECRET").url(),u=`${a} ${q("Secrets",a)}`;return e.jsx(I,{url:c,children:u})},id:"numSecrets",accessor:n=>n.numSecrets,sortable:!1},{Header:"Users & Groups",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{subjectsCount:a,metadata:i}=n;if(!a||a===0)return"No Users & Groups";const{id:l}=i,c=j.getURL(s,t).push(l).push("SUBJECT").url(),u=`${a} ${q("Users & Groups",a)}`;return e.jsx(I,{url:c,children:u})},accessor:"subjectCount",sortable:!1},{Header:"Service Accounts",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{serviceAccountCount:a,metadata:i}=n;if(!a||a===0)return"No Service Accounts";const{id:l}=i,c=j.getURL(s,t).push(l).push("SERVICE_ACCOUNT").url(),u=`${a} ${q("Service Accounts",a)}`;return e.jsx(I,{url:c,children:u})},accessor:"serviceAccountCount",sortable:!1},{Header:"Roles",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{k8sRoleCount:a,metadata:i}=n;if(!a||a===0)return"No Roles";const{id:l}=i,c=j.getURL(s,t).push(l).push("ROLE").url(),u=`${a} ${q("Roles",a)}`;return e.jsx(I,{url:c,children:u})},accessor:"k8sRoleCount",sortable:!1}].filter(n=>n),Cr=s=>s.results,Os=({className:s,selectedRowId:t,onRowClick:r,query:o,data:n,totalResults:a,entityContext:i})=>{const l=D(),c=k(),u=O.useContext(G),m=!t,d=pr(c,l,i),{[z.POLICY_STATUS.CATEGORY]:p,...h}=$.getQueryBasedOnSearchContext(o,u),f=$.objectToWhereClause({...h}),g=f?{query:f}:null;function x(N){const S=Cr(N);return Ae(S,p)}return e.jsx(Ne,{className:s,query:aa,variables:g,entityType:"NAMESPACE",tableColumns:d,createTableRows:x,onRowClick:r,selectedRowId:t,idAttribute:"metadata.id",defaultSorted:Xt,defaultSearchOptions:[z.POLICY_STATUS.CATEGORY],data:Ae(n,p),totalResults:a,autoFocusSearchInput:m})};Os.propTypes=he;Os.defaultProps=fe;const hr=L`
    query nodes($query: String, $pagination: Pagination) {
        results: nodes(query: $query, pagination: $pagination) {
            id
            name
            clusterName
            clusterId
            osImage
            containerRuntimeVersion
            joinedAt
            nodeComplianceControlCount(query: "Standard:CIS") {
                failingCount
                passingCount
                unknownCount
            }
        }
        count: nodeCount(query: $query)
    }
`,Zt=[{id:me.NODE,desc:!1}],fr=(s,t,r)=>[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Node",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const a=xe("NODE",n.id);return e.jsx(I,{url:a,children:n.name})},accessor:"name",id:me.NODE,sortField:me.NODE},{Header:"Operating System",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"osImage",id:me.OPERATING_SYSTEM,sortField:me.OPERATING_SYSTEM},{Header:"Container Runtime",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"containerRuntimeVersion",id:me.CONTAINER_RUNTIME,sortField:me.CONTAINER_RUNTIME},{Header:"Node Join Time",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{joinedAt:a}=n;return a?ee(a):null},accessor:"joinedAt",id:me.NODE_JOIN_TIME,sortField:me.NODE_JOIN_TIME},r&&r.CLUSTER?null:{Header:"Cluster",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"clusterName",Cell:({original:n})=>{const{clusterName:a,clusterId:i,id:l}=n,c=j.getURL(s,t).push(l).push("CLUSTER",i).url();return e.jsx(I,{url:c,children:a})},id:me.CLUSTER,sortField:me.CLUSTER},r&&r.CONTROL?null:{Header:"CIS Controls",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,accessor:"nodeComplianceControlCount",Cell:({original:n})=>{const{nodeComplianceControlCount:a}=n,{passingCount:i,failingCount:l,unknownCount:c}=a,u=i+l+c;if(!u)return e.jsx(qe,{text:"No Controls"});const m=j.getURL(s,t).push(n.id).push("CONTROL").url(),d=`${u} ${q("Controls",u)}`;return e.jsx(I,{url:m,children:d})},sortable:!1}].filter(n=>n),gr=s=>s.results,ss=({className:s,selectedRowId:t,onRowClick:r,query:o,data:n,totalResults:a,entityContext:i})=>{const l=k(),c=D(),u=!t,m=fr(l,c,i),d=$.objectToWhereClause(o),p=d?{query:d}:null;return e.jsx(Ne,{className:s,query:hr,variables:p,entityType:"NODE",tableColumns:m,createTableRows:gr,onRowClick:r,selectedRowId:t,idAttribute:"id",defaultSorted:Zt,data:n,totalResults:a,autoFocusSearchInput:u})};ss.propTypes=he;ss.defaultProps=fe;const yr=[{id:pe.POLICY,desc:!1}],xr=[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Policy",headerClassName:`w-1/4 ${A}`,className:`w-1/4 ${y}`,Cell:({original:s})=>{const t=xe("POLICY",s.id);return e.jsx(I,{url:t,children:s.name})},accessor:"name",id:pe.POLICY,sortField:pe.POLICY},{Header:"Enforced",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:s})=>{const{enforcementActions:t}=s;return t.length===0||t.includes("UNSET_ENFORCEMENT")?"No":"Yes"},accessor:"enforcementActions",id:pe.ENFORCEMENT,sortField:pe.ENFORCEMENT},{Header:"Policy Status",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:s})=>{const{disabled:t,policyStatus:r}=s;return t?e.jsx(ja,{isDisabled:t}):e.jsx(Qe,{isPass:r==="pass"})},accessor:"policyStatus",sortable:!1},{Header:"Severity",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:s})=>{const{severity:t}=s;return e.jsx(Ze,{severity:t})},accessor:"severity",sortMethod:Mt,id:pe.SEVERITY,sortField:pe.SEVERITY},{Header:"Categories",headerClassName:`w-1/4 ${A}`,className:`w-1/4 ${y}`,Cell:({original:s})=>{const{categories:t}=s;return t.join(", ")},accessor:"categories",id:pe.CATEGORY,sortField:pe.CATEGORY},{Header:"Lifecycle Stage",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:s})=>{const{lifecycleStages:t}=s;return Ts(t)},accessor:"lifecycleStages",id:pe.LIFECYCLE_STAGE,sortField:pe.LIFECYCLE_STAGE}],Nr=s=>s.policies,Ls=({className:s,onRowClick:t,query:r,selectedRowId:o,data:n})=>{const a=!o,{[z.POLICY_STATUS.CATEGORY]:i,...l}=r??{},c=$.objectToWhereClause({"Lifecycle Stage":"DEPLOY",...l}),u=c?{query:c}:null;function m(d){const p=Nr(d);return Ae(p,i)}return e.jsx(es,{className:s,query:ra,variables:u,entityType:"POLICY",tableColumns:xr,createTableRows:m,selectedRowId:o,onRowClick:t,idAttribute:"id",defaultSorted:[{id:"policyStatus",desc:!1},{id:"severity",desc:!1}],defaultSearchOptions:[z.POLICY_STATUS.CATEGORY],data:Ae(n,i),autoFocusSearchInput:a})};Ls.propTypes=he;Ls.defaultProps=fe;const en=[{id:Ge.ROLE,desc:!1}],br=(s,t,r)=>[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Role",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const a=xe("ROLE",n.id);return e.jsx(I,{url:a,children:n.name})},accessor:"name",id:Ge.ROLE,sortField:Ge.ROLE},{Header:"Type",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,accessor:"type",sortable:!1},{Header:"Permissions",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{verbs:a}=n;return a.length?e.jsx("div",{className:"capitalize",children:a.join(", ")}):"No Permissions"},accessor:"verbs",sortable:!1},{Header:"Created",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{createdAt:a}=n;return ee(a)},accessor:"createdAt",sortable:!1},r&&r.CLUSTER?null:{Header:"Cluster",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"clusterName",Cell:({original:n})=>{const{clusterName:a,clusterId:i,id:l}=n,c=j.getURL(s,t).push(l).push("CLUSTER",i).url();return e.jsx(I,{url:c,children:a})},id:Ge.CLUSTER,sortField:Ge.CLUSTER},{Header:"Namespace Scope",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{roleNamespace:a,id:i}=n;if(!a)return"Cluster-wide";const{metadata:{name:l,id:c}}=a,u=j.getURL(s,t).push(i).push("NAMESPACE",c).url();return e.jsx(I,{url:u,children:l})},accessor:"roleNamespace.metadata.name",sortable:!1},{Header:"Users & Groups",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{serviceAccounts:a,subjects:i}=n,{length:l}=a,{length:c}=i;if(!c)return!l||l===1&&a[0].message?e.jsx(qe,{text:"No Users & Groups"}):"No Users & Groups";const u=j.getURL(s,t).push(n.id).push("SUBJECT").url(),m=`${c} ${q("Users & Groups",c)}`;if(c>1)return e.jsx(I,{url:u,children:m});const d=i[0];return e.jsx(I,{url:u,children:d.name})},id:"subjects",accessor:n=>n.subjects,sortable:!1},{Header:"Service Accounts",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{serviceAccounts:a,subjects:i,id:l}=n,{length:c}=a,{length:u}=i;if((!c||c===1&&a[0].message)&&!u)return e.jsx(qe,{text:"No Service Accounts"});if(!c)return"No Service Accounts";const m=j.getURL(s,t).push(l).push("SERVICE_ACCOUNT").url(),d=`${c} ${q("Service Accounts",c)}`;if(c>1)return e.jsx(I,{url:m,children:d});const p=a[0];return e.jsx(I,{url:m,children:p.name})},accessor:"serviceAccounts",sortable:!1}].filter(n=>n),jr=s=>s.results,Us=({className:s,selectedRowId:t,onRowClick:r,query:o,data:n,totalResults:a,entityContext:i})=>{const l=D(),c=k(),u=!t,m=br(c,l,i),d=$.objectToWhereClause(o),p=d?{query:d}:null;return e.jsx(Ne,{className:s,query:oa,variables:p,entityType:"ROLE",tableColumns:m,createTableRows:jr,onRowClick:r,selectedRowId:t,idAttribute:"id",defaultSorted:en,data:n,totalResults:a,autoFocusSearchInput:u})};Us.propTypes=he;Us.defaultProps=fe;const Sr={UNDETERMINED:"Undetermined",PUBLIC_CERTIFICATE:"Public Certificate",CERTIFICATE_REQUEST:"Certificate Request",PRIVACY_ENHANCED_MESSAGE:"Privacy Enhanced Message",OPENSSH_PRIVATE_KEY:"OpenSSH Private Key",PGP_PRIVATE_KEY:"PGP Private Key",EC_PRIVATE_KEY:"EC Private Key",RSA_PRIVATE_KEY:"RSA Private Key",DSA_PRIVATE_KEY:"DSA Private Key",CERT_PRIVATE_KEY:"Certificate Private Key",ENCRYPTED_PRIVATE_KEY:"Encrypted Private Key",IMAGE_PULL_SECRET:"Image Pull Secret"},sn=[{id:Le.SECRET,desc:!1}],Er=(s,t,r)=>[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Secret",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const a=xe("SECRET",n.id);return e.jsx(I,{url:a,children:n.name})},accessor:"name",id:Le.SECRET,sortField:Le.SECRET},{Header:"Created",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{createdAt:a}=n;return ee(a)},accessor:"createdAt",id:Le.CREATED,sortField:Le.CREATED},{Header:"Types",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,accessor:"files",Cell:({original:n})=>{const{files:a}=n;return a.length?e.jsx("span",{children:bt(a.map(i=>Sr[i.type])).join(", ")}):"No Types"},sortable:!1},r&&r.CLUSTER?null:{Header:"Cluster",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"clusterName",Cell:({original:n})=>{const{clusterName:a,clusterId:i,id:l}=n,c=j.getURL(s,t).push(l).push("CLUSTER",i).url();return e.jsx(I,{url:c,children:a})},id:Le.CLUSTER,sortField:Le.CLUSTER},{Header:"Deployments",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,accessor:"deployments",Cell:({original:n})=>{const{deploymentCount:a,id:i}=n;if(!a)return"No Deployments";const l=j.getURL(s,t).push(i).push("DEPLOYMENT").url(),c=`${a} ${q("Deployment",a)}`;return e.jsx(I,{url:l,children:c})},sortable:!1}].filter(n=>n),Tr=s=>s.secrets,qs=({className:s,selectedRowId:t,onRowClick:r,query:o,data:n,totalResults:a,entityContext:i})=>{const l=D(),c=k(),u=!t,m=Er(c,l,i),d=$.objectToWhereClause(o),p=d?{query:d}:null;return e.jsx(Ne,{className:s,query:la,variables:p,entityType:"SECRET",tableColumns:m,createTableRows:Tr,onRowClick:r,selectedRowId:t,idAttribute:"id",defaultSorted:sn,data:n,totalResults:a,autoFocusSearchInput:u})};qs.propTypes=he;qs.defaultProps=fe;const tn=[{id:Ue.SERVCE_ACCOUNT,desc:!1}],Rr=(s,t,r)=>[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Service Accounts",headerClassName:`w-1/10 ${A}`,className:`w-1/10 ${y}`,Cell:({original:n})=>{const a=xe("SERVICE_ACCOUNT",n.id);return e.jsx(I,{url:a,children:n.name})},accessor:"name",id:Ue.SERVCE_ACCOUNT,sortField:Ue.SERVCE_ACCOUNT},{Header:"Cluster Admin Role",headerClassName:`w-1/10 ${M}`,className:`w-1/10 ${y}`,Cell:({original:n})=>{const{clusterAdmin:a}=n;return a?"Enabled":"Disabled"},accessor:"clusterAdmin",sortable:!1},r&&r.CLUSTER?null:{Header:"Cluster",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,accessor:"clusterName",Cell:({original:n})=>{const{clusterName:a,clusterId:i,id:l}=n,c=j.getURL(s,t).push(l).push("CLUSTER",i).url();return e.jsx(I,{url:c,children:a})},id:Ue.CLUSTER,sortField:Ue.CLUSTER},r&&r.NAMESPACE?null:{Header:"Namespace",headerClassName:`w-1/10 ${A}`,className:`w-1/10 ${y}`,accessor:"namespace",Cell:({original:n})=>{const{id:a,saNamespace:{metadata:i}}=n;if(!i)return"No Matches";const{name:l,id:c}=i,u=j.getURL(s,t).push(a).push("NAMESPACE",c).url();return e.jsx(I,{url:u,children:l})},id:Ue.NAMESPACE,sortField:Ue.NAMESPACE},{Header:"Roles",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{id:a,k8sRoles:i}=n,{length:l}=i;if(!l)return"No Roles";const c=j.getURL(s,t).push(a).push("ROLE").url();if(l>1){const u=`${l} ${q("Roles",l)}`;return e.jsx(I,{url:c,children:u})}return n.k8sRoles[0].name},accessor:"k8sRoles",sortMethod:ba,sortable:!1},{Header:"Deployments",headerClassName:`w-1/8 ${M}`,className:`w-1/8 ${y}`,Cell:({original:n})=>{const{id:a,deploymentCount:i}=n;if(!i)return"No Deployments";const l=j.getURL(s,t).push(a).push("DEPLOYMENT").url(),c=`${i} ${q("Deployment",i)}`;return e.jsx(I,{url:l,children:c})},accessor:"deploymentCount",sortable:!1}].filter(n=>n),vr=s=>s.results,Ds=({className:s,selectedRowId:t,onRowClick:r,query:o,data:n,totalResults:a,entityContext:i})=>{const l=D(),c=k(),u=!t,m=Rr(c,l,i),d=$.objectToWhereClause(o),p=d?{query:d}:null;return e.jsx(Ne,{className:s,query:ia,variables:p,entityType:"SERVICE_ACCOUNT",tableColumns:m,createTableRows:vr,onRowClick:r,selectedRowId:t,idAttribute:"id",defaultSorted:tn,data:n,totalResults:a,autoFocusSearchInput:u})};Ds.propTypes=he;Ds.defaultProps=fe;const nn=[{id:Be.SUBJECT,desc:!1}],Pr=(s,t)=>[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Users & Groups",headerClassName:`w-1/10 ${A}`,className:`w-1/10 ${y}`,Cell:({original:o})=>{const n=xe("SUBJECT",o.id);return e.jsx(I,{url:n,children:o.name})},accessor:"name",id:Be.SUBJECT,sortField:Be.SUBJECT},{Header:"Cluster",headerClassName:`w-1/10 ${A}`,className:`w-1/10 ${y}`,accessor:"clusterName"},{Header:"Type",headerClassName:`w-1/10 ${A}`,className:`w-1/10 ${y}`,accessor:"type",id:Be.SUBJECT_KIND,sortField:Be.SUBJECT_KIND},{Header:"Cluster Admin Role",headerClassName:`w-1/10 ${M}`,className:`w-1/10 ${y}`,Cell:({original:o})=>{const{clusterAdmin:n}=o;return n?"Enabled":"Disabled"},accessor:"clusterAdmin",sortable:!1},{Header:"Roles",headerClassName:`w-1/10 ${M}`,className:`w-1/10 ${y}`,Cell:({original:o})=>{const{id:n,k8sRoles:a}=o,{length:i}=a;if(!i)return"No Roles";const l=j.getURL(s,t).push(n).push("ROLE").url(),c=i===1?a[0].name:`${i} ${q("Role",i)}`;return e.jsx(I,{url:l,children:c})},accessor:"k8sRoles",sortable:!1}],Ar=s=>(s==null?void 0:s.results)??[],ks=({selectedRowId:s,onRowClick:t,query:r,className:o,data:n,totalResults:a})=>{const i=D(),l=k(),c=!s,u=Pr(l,i),m=$.objectToWhereClause(r),d=m?{query:m}:null;return e.jsx(Ne,{className:o,query:ca,variables:d,entityType:"SUBJECT",tableColumns:u,createTableRows:Ar,selectedRowId:s,onRowClick:t,idAttribute:"id",defaultSorted:nn,data:n,totalResults:a,autoFocusSearchInput:c})};ks.propTypes=he;ks.defaultProps=fe;const $r={CLUSTER:As,CONTROL:$s,DEPLOYMENT:ws,IMAGE:Is,NAMESPACE:Os,NODE:ss,POLICY:Ls,ROLE:Us,SECRET:qs,SERVICE_ACCOUNT:Ds,SUBJECT:ks},re=({entityListType:s,entityId:t,...r})=>{const o=$r[s];return o?e.jsx(o,{selectedRowId:t,...r}):e.jsx(te,{resourceType:s,useCase:"configmanagement"})};re.propTypes={entityListType:C.string.isRequired,entityId:C.string};re.defaultProps={entityId:null};const wr={CLUSTER:Kt,CONTROL:[],DEPLOYMENT:zt,IMAGE:Jt,NAMESPACE:Xt,NODE:Zt,POLICY:yr,ROLE:en,SECRET:sn,SERVICE_ACCOUNT:tn,SUBJECT:nn};function Ir(s){return wr[s]??[]}function $e(s){const t=Mn[s];return!t||s==="CONTROL"||s==="POLICY"?"":`count: ${t}(query: $query)`}const F=({name:s,value:t,entityType:r,...o})=>{const n=be(),a=D(),i=k(),l=O.useContext(De);function c(){let p;jt.includes(l==null?void 0:l.useCase)?p=l.pushList(r).toUrl():p=j.getURL(i,a).push(r).url(),n(p)}const u=e.jsx("div",{className:"text-6xl",children:t}),m=e.jsx("button",{type:"button",disabled:t===0,className:"h-full w-full",onClick:c,"data-testid":"related-entity-list-count-value",children:u}),d=e.jsx("div",{"data-testid":"related-entity-list-count-title",children:s});return e.jsx(Y,{id:"related-entity-list-count",bodyClassName:"flex items-center justify-center",titleComponents:d,...o,children:m})};F.propTypes={name:C.string.isRequired,value:C.number,entityType:C.string.isRequired};F.defaultProps={value:0};const Ct=s=>{let t=null;return s==="COMPLIANCE_STATE_FAILURE"?t=J.FAIL:s==="COMPLIANCE_STATE_SUCCESS"?t=J.PASS:t=J["N/A"],t};function an(s){const t={};return s.forEach(({control:r,value:o})=>{if(t[r.id]&&t[r.id].status!==J.FAIL)t[r.id].status=Ct(o.overallState);else if(!t[r.id]){const n={...r};n.standard=Ce[r.standardId],n.control=`${r.name} - ${r.description}`,n.status=Ct(o.overallState),t[r.id]=n}}),Object.values(t)}const we=({header:s,entityType:t,...r})=>{const[o,n]=O.useState(0),{columns:a,rows:i,selectedRowId:l,idAttribute:c,noDataText:u,setTableRef:m,trClassName:d,showThead:p,SubComponent:h,hasNestedTable:f,defaultSorted:g,...x}={...r},N=be(),S=D(),v=k(),T=e.jsx(Ns,{page:o,dataLength:i.length,setPage:n});function P(R){const E=Xe(R,c),w=j.getURL(v,S).push(t,E).url();N(w)}return e.jsx(Y,{header:s,headerComponents:T,...x,className:"w-full",children:e.jsx(Je,{columns:a,rows:i,onRowClick:h||f?null:P,selectedRowId:l,idAttribute:c,noDataText:u,setTableRef:m,trClassName:d,showThead:p,SubComponent:h,page:o,defaultSorted:g})})};we.propTypes={header:C.oneOfType([C.element,C.string]).isRequired,entityType:C.string};we.defaultProps={entityType:""};const Or=L`
    query nodesWithFailingControls($query: String) {
        executedControls(query: $query) {
            complianceControl {
                id
                name
                complianceControlFailingNodes {
                    id
                    name
                    clusterName
                }
                complianceControlPassingNodes {
                    id
                    name
                    clusterName
                }
            }
            controlStatus
        }
    }
`,Lr=s=>{const t=Object.keys(s).reduce((r,o)=>{const n=s[o];return r[`${o} Id`]=n,r},{});return $.objectToWhereClause(t)},Ur=s=>{const t=s.reduce((r,o)=>[...r,...o.complianceControl.complianceControlFailingNodes],[]);return St(t,"id").map(r=>({...r,passing:!1}))},qr=s=>{const t=s.reduce((r,o)=>[...r,...o.complianceControl.complianceControlPassingNodes],[]);return St(t,"id").map(r=>({...r,passing:!0}))},Ms=s=>{const{entityType:t,entityContext:r}=s,{loading:o,error:n,data:a}=Rt(Or,{variables:{query:Lr(r)},fetchPolicy:"no-cache"});if(o)return e.jsx("div",{className:"flex flex-1 items-center justify-center p-6",children:e.jsx(B,{})});if(n&&vn.captureException(n),!a)return null;const{executedControls:i=[]}=a;if(i.length===0)return e.jsx(X,{message:`No nodes failing ${t===b.CONTROL?"this control":"any controls"}`,className:"p-6",icon:"info"});const l=Ur(i),c=qr(i),u=l.length,m=c.length;if(m&&!u)return e.jsx(X,{message:`No nodes failing ${t===b.CONTROL?"this control":"any controls"}`,className:"p-3 shadow",icon:"info"});if(!m&&!u)return e.jsx(X,{message:`Findings ${r[b.CONTROL]?"for this control":"across controls"} could not be assessed`,className:"p-3 shadow",icon:"warn"});const d=`${u} ${u===1?"node is":"nodes are"} ${t===b.CONTROL?"failing this control":"failing controls"}`;return e.jsx(we,{entityType:b.NODE,header:d,rows:l,noDataText:"No Nodes",className:"bg-base-100 w-full",columns:Fn[b.NODE],idAttribute:"id",defaultSorted:[{id:"name",desc:!1}]})};Ms.propTypes={entityType:C.string.isRequired,entityContext:C.shape({}).isRequired};const Dr=L`
    query violations($query: String) {
        violations(query: $query) {
            time
            deployment {
                id
                name
                clusterName
                namespace
            }
            policy {
                id
                name
                severity
                categories
            }
        }
    }
`,ke=({header:s,isCollapsible:t,children:r,isCollapsibleOpen:o,hasTitleBorder:n})=>{const[a,i]=O.useState(o);function l(){t&&i(u=>!u)}const c={opened:e.jsx(ya,{className:`bg-base-200 border border-base-400 mr-4 rounded-full ${t?"":"invisible"}`,size:"14"}),closed:e.jsx(kt,{className:`bg-base-200 border border-base-400 mr-4 rounded-full ${t?"":"invisible"}`,size:"14"})};return e.jsxs("div",{className:`${n?"border-b":""} border-base-300 w-full`,children:[e.jsx("button",{type:"button",className:`flex flex-1 w-full ${t?"cursor-pointer hover:bg-primary-100":"cursor-auto"}`,onClick:l,children:e.jsxs("div",{className:`flex w-full p-3 ${a?"border-b border-base-300":""}`,children:[c[a?"opened":"closed"],s]})}),e.jsx(Pn,{isOpen:a,children:r})]})};ke.propTypes={header:C.node.isRequired,isCollapsible:C.bool,children:C.node.isRequired,isCollapsibleOpen:C.bool,hasTitleBorder:C.bool};ke.defaultProps={isCollapsible:!0,isCollapsibleOpen:!0,hasTitleBorder:!0};const kr=s=>{const{violations:t}=s;if(!t||!t.length)return[];const r=t.reduce((o,n)=>{const{deployment:a,time:i,policy:l}=n,c=o[l.id]?o[l.id].deployments:[];return o[l.id]={...l,deployments:[...c,{time:i,...a}]},o},{});return Object.values(r)},Fs=({original:s,entityContext:t})=>{const{deployments:r}=s,o=At[b.DEPLOYMENT](t),n=be(),a=D(),i=k();function l(c){const u=Xe(c,"id"),m=j.getURL(i,a).push(b.DEPLOYMENT,u).url();n(m)}return e.jsx(Je,{rows:r,columns:o,onRowClick:l,idAttribute:"id",noDataText:"No results found. Please refine your search."})};Fs.propTypes={original:C.shape({deployments:C.arrayOf(C.shape({}))}).isRequired,entityContext:C.shape({})};Fs.defaultProps={entityContext:{}};const ts=({query:s,message:t,entityContext:r})=>e.jsx(H,{query:Dr,variables:{query:s},children:({loading:o,data:n})=>{if(o)return e.jsx(B,{});if(!n)return null;const a=kr(n),i=bt(n.violations.map(u=>u.deployment)).length;if(i===0)return e.jsx(X,{message:t,className:"p-3 shadow",icon:"info"});const l=`${i} deployments failed across ${a.length} policies`,c=[{Header:"Policy",headerClassName:A,className:y,accessor:"name",Cell:({original:u})=>{const{severity:m,categories:d,name:p}=u,h=e.jsxs("div",{className:"flex flex-1",children:[e.jsx("div",{className:"flex flex-1",children:p}),e.jsxs("div",{children:[e.jsxs("span",{children:["Severity: ",e.jsx(Ze,{severity:m})]}),e.jsx("span",{className:"pl-2 pr-2",children:"|"}),e.jsxs("span",{children:["Categories: ",d.join(",")]})]})]});return e.jsx(ke,{header:h,isCollapsibleOpen:!1,className:"z-20",hasTitleBorder:!1,children:e.jsx(Fs,{original:u,entityContext:r})},p)}}];return e.jsx(we,{header:l,rows:a,noDataText:"No deployments failing across policies",className:"w-full",columns:c,idAttribute:"id",id:"deployments-with-failed-policies",hasNestedTable:!0})}});ts.propTypes={query:C.string,message:C.string,entityContext:C.shape({})};ts.defaultProps={query:"",message:"",entityContext:{}};function Mr(s){return s===b.SERVICE_ACCOUNT?"serviceAccounts":s===b.ROLE?"k8sRoles":q(s.toLowerCase())}function Ie(s,t){if(!s||!t)return[];const r=Mr(t);return s[r]??[]}const _s=({id:s,entityListType:t,entityId1:r,query:o,entityContext:n,pagination:a})=>{const i=O.useContext(G),l={...o[i]};t==="POLICY"&&(l["Lifecycle Stage"]="DEPLOY"),!l.Standard&&t==="CONTROL"&&(l.Standard="CIS");const c={id:s,query:$.objectToWhereClause(l),pagination:a},u=L`
        query getCluster($id: ID!) {
            cluster(id: $id) {
                id
                name
                admissionController
                centralApiEndpoint
                imageCount
                nodeCount
                deploymentCount
                namespaceCount
                subjectCount
                k8sRoleCount
                secretCount
                policyCount(query: "Lifecycle Stage:DEPLOY")
                serviceAccountCount
                complianceControlCount(query: "Standard:CIS") {
                    passingCount
                    failingCount
                    unknownCount
                }
                status {
                    orchestratorMetadata {
                        version
                        buildDate
                    }
                }
            }
        }
    `;function m(){if(!t)return u;const{listFieldName:d,fragmentName:p,fragment:h}=$.getFragmentInfo("CLUSTER",t,"configmanagement"),f=$e(t);return L`
            query getCluster_${t}(${t==="CONTROL"?"$id: ID!, $query: String":"$id: ID!, $query: String, $pagination: Pagination"}) {
                cluster(id: $id) {
                    id
                    ${d}(${t==="CONTROL"?"query: $query":"query: $query, pagination: $pagination"}) { ...${p} }
                    ${f}
                }
            }
            ${h}
        `}return e.jsx(H,{query:m(),variables:c,fetchPolicy:"network-only",children:({loading:d,data:p})=>{var K;if(ae(d,p))return e.jsx(B,{});const{cluster:h}=p;if(!h)return e.jsx(te,{resourceType:"CLUSTER",useCase:"configmanagement"});const{complianceResults:f=[]}=h;if(t){let Q=Ie(h,t);return t==="CONTROL"?Q=an(f):t==="SUBJECT"&&(Q=Q.map(Z=>{var Ee;return{...Z,subjectWithClusterID:((Ee=Z==null?void 0:Z.subject)==null?void 0:Ee.subjectWithClusterID)??[]}})),e.jsx(re,{entityListType:t,entityId:r,data:Q,totalResults:(K=p==null?void 0:p.cluster)==null?void 0:K.count,entityContext:{...n,CLUSTER:s},query:o})}if(!h.status)return null;const{name:g,nodeCount:x,deploymentCount:N,namespaceCount:S,subjectCount:v,serviceAccountCount:T,k8sRoleCount:P,secretCount:R,imageCount:E,complianceControlCount:w,status:{orchestratorMetadata:U=null}}=h,{version:W="N/A"}=U??{},Se=[{key:"K8s version",value:W}],{passingCount:ve,failingCount:le,unknownCount:Me}=w,Fe=ve+le+Me;return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Cluster Summary",children:e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx(je,{className:"mx-4 min-w-48 bg-base-100 min-h-48 mb-4",keyValuePairs:Se}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Nodes",value:x,entityType:"NODE"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Namespaces",value:S,entityType:"NAMESPACE"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Deployments",value:N,entityType:"DEPLOYMENT"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Secrets",value:R,entityType:"SECRET"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Images",value:E,entityType:"IMAGE"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Users & Groups",value:v,entityType:"SUBJECT"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Service Accounts",value:T,entityType:"SERVICE_ACCOUNT"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Roles",value:P,entityType:"ROLE"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"CIS Controls",value:Fe,entityType:"CONTROL"})]})}),e.jsx(V,{title:"Cluster Findings",children:e.jsx("div",{className:"flex relative rounded mb-4 ml-4 mr-4",children:e.jsxs(_n,{children:[e.jsx(ut,{title:"Policies",children:e.jsx(ts,{query:$.objectToWhereClause({Cluster:g}),message:"No deployments violating policies in this cluster",entityContext:{...n,CLUSTER:s}})}),e.jsx(ut,{title:"CIS Controls",children:e.jsx(Ms,{entityType:"CLUSTER",entityContext:{...n,CLUSTER:s}})})]})})})]})}})};_s.propTypes=ge;_s.defaultProps=ye;const Fr=L`
    query getControl($id: ID!, $where: String) {
        results: complianceControl(id: $id) {
            interpretationText
            description
            id
            name
            standardId
            complianceControlNodes {
                name
                clusterName
                id
                clusterId
                osImage
                containerRuntimeVersion
                joinedAt
                nodeComplianceControlCount(query: $where) {
                    failingCount
                    passingCount
                    unknownCount
                }
            }
        }
    }
`,Ys=({id:s,entityListType:t,query:r,entityContext:o})=>{const n=D(),a=k(),i=O.useContext(G),l={id:s,where:$.objectToWhereClause({...r[i],"Control Id":s})};return e.jsx(H,{query:Fr,variables:l,fetchPolicy:"network-only",children:({loading:c,data:u})=>{if(ae(c,u))return e.jsx(B,{});if(!u||!u.results)return e.jsx(te,{resourceType:"CONTROL",useCase:"configmanagement"});const{results:m}=u,{complianceControlNodes:d}=m;if(t)return e.jsx(ss,{match:a,location:n,data:d,totalResults:d==null?void 0:d.length,entityContext:{...o,CONTROL:s}});const{standardId:p="",name:h="",description:f="",interpretationText:g=""}=m;return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Control Summary",children:e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx(fa,{standardId:p,control:h,description:f,className:"mx-4 min-w-48 min-h-48 mb-4"}),!!g.length&&e.jsx(Y,{className:"mx-4 min-w-48 min-h-48 mb-4 w-1/3 overflow-auto",header:"Control guidance",children:e.jsx("div",{className:"p-4 leading-loose whitespace-pre-wrap overflow-auto",children:g})}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Nodes",value:d.length,entityType:"NODE"})]})}),!(o&&o.NODE)&&e.jsx(V,{title:"Control Findings",children:e.jsx("div",{className:"flex shadow relative rounded bg-base-100 mb-4 ml-4 mr-4",children:e.jsx(Ms,{entityType:"CONTROL",entityContext:{...o,CONTROL:s}})})})]})}})};Ys.propTypes=ge;Ys.defaultProps=ye;const _r="data:image/svg+xml,%3csvg%20width='74'%20height='66'%20viewBox='0%200%2074%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.76174%2035.8473L16.9172%2062.1449C17.9352%2063.9114%2019.819%2065%2021.8578%2065H52.1508C54.1897%2065%2056.0734%2063.9114%2057.0914%2062.1449L72.2469%2035.8473C73.2625%2034.085%2073.2625%2031.915%2072.2469%2030.1527L57.0914%203.85508C56.0734%202.08856%2054.1897%201%2052.1508%201L21.8578%201C19.819%201%2017.9352%202.08856%2016.9172%203.85508L1.76174%2030.1527C0.746086%2031.915%200.746086%2034.085%201.76174%2035.8473Z'%20fill='url(%23paint0_linear)'%20stroke='white'%20stroke-width='0.7128'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='3.62773'%20y1='11.8951'%20x2='67.9634'%20y2='58.7076'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E9F0FF'/%3e%3cstop%20offset='1'%20stop-color='%23C9DAFF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",oe=({name:s,entityType:t,entityId:r,value:o,...n})=>{const a=be(),i=D(),l=k(),c=O.useContext(De);function u(){if(!r)return;let h;jt.includes(c==null?void 0:c.useCase)?h=c.pushRelatedEntity(t,r).toUrl():h=j.getURL(l,i).push(t,r).url(),a(h)}const m=e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsxs("div",{className:"relative flex items-center justify-center mb-4",children:[e.jsx("img",{src:_r,alt:"hexagonal"}),e.jsx($t,{className:"z-1 absolute",entityType:t})]}),e.jsx("div",{children:o})]}),d=u?e.jsx("button",{"data-testid":"related-entity-value",type:"button",className:"h-full w-full",onClick:u,children:m}):m,p=e.jsx("div",{"data-testid":"related-entity-title",children:s});return e.jsx(Y,{id:"related-entity",bodyClassName:"flex items-center justify-center",titleComponents:p,...n,children:d})};oe.propTypes={name:C.string,entityType:C.string.isRequired,entityId:C.string,value:C.string,link:C.string};oe.defaultProps={link:null,value:"",entityId:null,name:null};const Yr=s=>!s.violations||!s.violations.length?null:s.violations[0],rn=({data:s,message:t})=>{const r=Yr(s);let o=null;return r?o=e.jsxs("div",{className:"mx-4 grid-dense grid-auto-fit grid grid-gap-4 xl:grid-gap-6 mb-4 xxxl:grid-gap-8 grid-columns-1 md:grid-columns-2 lg:grid-columns-3 w-full",children:[e.jsx(Y,{header:"Time of Violation",className:"s-1",bodyClassName:"flex flex-col p-4 leading-normal",children:ee(r.time)}),e.jsx(Y,{header:"Enforcement",className:"s-1",bodyClassName:"flex flex-col p-4 leading-normal",children:r.policy.enforcementActions.join(", ")||"No Enforcement"}),e.jsx(Y,{header:"Category",className:"s-full lg:s-1",bodyClassName:"flex flex-col p-4 leading-normal",children:r.policy.categories.join(", ")}),e.jsx(Y,{header:"Violation",className:"s-full flex-1",bodyClassName:"flex flex-col p-4 leading-normal",children:e.jsx("ul",{className:"leading-loose",children:r.violations.map(n=>e.jsx("li",{className:"border-b border-base-300 py-2",children:n.message},n.message))})})]}):o=e.jsx(X,{message:t,className:"p-3 shadow mb-4 mx-4 bg-base-100 rounded",icon:"info"}),e.jsx("div",{className:"flex w-full bg-transparent",children:o})};rn.propTypes={data:C.shape({}).isRequired,message:C.string.isRequired};const Vr=L`
    query violationsInDeployment($query: String) {
        violations(query: $query) {
            id
            time
            policy {
                id
                enforcementActions
                categories
            }
            violations {
                message
            }
        }
    }
`,Vs=({deploymentID:s,policyID:t,message:r})=>{const o={query:$.objectToWhereClause({"Deployment ID":s,"Policy ID":t})};return e.jsx(H,{query:Vr,variables:o,children:({loading:n,data:a})=>n?e.jsx(B,{}):a?e.jsx(rn,{data:a,message:r}):null})};Vs.propTypes={deploymentID:C.string.isRequired,policyID:C.string,message:C.string.isRequired};const Hr=L`
    query failedPolicies($query: String) {
        violations(query: $query) {
            id
            policy {
                id
                name
                severity
                enforcementActions
                categories
                lifecycleStages
            }
            time
        }
    }
`,Gr=s=>{const t=[];return s.violations.reduce((o,n)=>{const a={time:n.time,...n.policy};return[...o,a]},t)};function Br({deploymentID:s}){return s?e.jsx(H,{query:Hr,variables:{query:$.objectToWhereClause({"Deployment ID":s,"Lifecycle Stage":"DEPLOY"})},children:({loading:t,data:r})=>{if(t)return e.jsx(B,{});if(!r)return null;const o=Gr(r);if(o.length===0)return e.jsx(X,{message:"No policies failed across this deployment",className:"p-3 shadow",icon:"info"});const n=`${o.length} policies failed across this deployment`,a=[{Header:"Id",headerClassName:"hidden",className:"hidden",accessor:"id"},{Header:"Policy",headerClassName:`w-1/5 ${A}`,className:`w-1/5 ${y}`,accessor:"name"},{Header:"Enforcing",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:i})=>{const{enforcementActions:l}=i;return(l??[]).length>0?"Yes":"No"},accessor:"enforcementActions"},{Header:"Severity",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:i})=>{const{severity:l}=i;return e.jsx(Ze,{severity:l})},accessor:"severity",sortMethod:Mt},{Header:"Categories",headerClassName:`w-1/5 ${A}`,className:`w-1/5 ${y}`,Cell:({original:i})=>{const{categories:l}=i;return l.join(", ")},accessor:"categories"},{Header:"Lifecycle Stage",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:i})=>{const{lifecycleStages:l}=i;return Ts(l)},accessor:"lifecycleStages"},{Header:"Violation Time",headerClassName:`w-1/8 ${A}`,className:`w-1/8 ${y}`,Cell:({original:i})=>ee(i.time),accessor:"time"}];return e.jsx(we,{entityType:b.POLICY,header:n,rows:o,columns:a,className:"bg-base-100 w-full",idAttribute:"id",noDataText:"No failed policies."})}}):e.jsx(An,{error:new Error("Unable to show failed policies for this deployment."),message:"A required ID for this deployment was not provided!"})}function Qr({entityContext:s={},deploymentID:t}){return s[b.POLICY]?e.jsx(Vs,{deploymentID:t,policyID:s[b.POLICY],message:"No policies failed across this deployment"}):e.jsx("div",{className:"mx-4 w-full",children:e.jsx(Br,{deploymentID:t})})}const Hs=({id:s,entityContext:t,entityListType:r,query:o,pagination:n})=>{const a=O.useContext(G),i={id:s,query:$.objectToWhereClause(o[a]),pagination:n},l=L`
        query getDeployment($id: ID!, $query: String) {
            deployment(id: $id) {
                id
                annotations {
                    key
                    value
                }
                ${t.CLUSTER?"":"cluster { id name}"}
                hostNetwork: id
                imagePullSecrets
                inactive
                labels {
                    key
                    value
                }
                name
                ${t.NAMESPACE?"":"namespace namespaceId"}
                ports {
                    containerPort
                    exposedPort
                    exposure
                    exposureInfos {
                        externalHostnames
                        externalIps
                        level
                        nodePort
                        serviceClusterIp
                        serviceId
                        serviceName
                        servicePort
                    }
                    name
                    protocol
                }
                priority
                replicas
                ${t.SERVICE_ACCOUNT?"":"serviceAccount serviceAccountID"}
                failingPolicyCount(query: $query)

                tolerations {
                    key
                    operator
                    taintEffect
                    value
                }
                type
                created
                secretCount
                imageCount
            }
        }
    `;function c(){if(!r)return l;const{listFieldName:u,fragmentName:m,fragment:d}=$.getFragmentInfo("DEPLOYMENT",r,"configmanagement"),p=$e(r);return L`
            query getDeployment_${r}($id: ID!, $query: String, $pagination: Pagination) {
                deployment(id: $id) {
                    id
                    ${u}(query: $query, pagination: $pagination) { ...${m} }
                    ${p}
                }
            }
            ${d}
        `}return e.jsx(H,{query:c(),variables:i,fetchPolicy:"network-only",children:({loading:u,data:m})=>{var U;if(ae(u,m))return e.jsx(B,{});if(!m||!m.deployment)return e.jsx(te,{resourceType:"DEPLOYMENT",useCase:"configmanagement"});const{deployment:d}=m;if(r){const W=r==="POLICY"?d.failingPolicies:Ie(d,r);return e.jsx(re,{entityListType:r,data:W,totalResults:(U=m==null?void 0:m.deployment)==null?void 0:U.count,query:o,entityContext:{...t,DEPLOYMENT:s}})}const{cluster:p,created:h,type:f,replicas:g,labels:x=[],annotations:N=[],namespace:S,namespaceId:v,serviceAccount:T,serviceAccountID:P,imageCount:R,secretCount:E}=d,w=[{key:"Created",value:h?ee(h):"N/A"},{key:"Deployment Type",value:f},{key:"Replicas",value:g}];return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Deployment Summary",children:e.jsxs("div",{className:"flex mb-4 flex-wrap",children:[e.jsx(je,{className:"mx-4 bg-base-100 min-h-48 mb-4",keyValuePairs:w,labels:x,annotations:N}),p&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",entityType:"CLUSTER",entityId:p.id,name:"Cluster",value:p.name}),S&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",entityType:"NAMESPACE",entityId:v,name:"Namespace",value:S}),T&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",entityType:"SERVICE_ACCOUNT",name:"Service Account",value:T,entityId:P}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Images",value:R,entityType:"IMAGE"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Secrets",value:E,entityType:"SECRET"})]})}),e.jsx(V,{title:"Deployment Findings",children:e.jsx("div",{className:"flex mb-4",children:e.jsx(Qr,{entityContext:t,deploymentID:s})})})]})}})};Hs.propTypes=ge;Hs.defaultProps=ye;const Gs=({id:s,entityListType:t,entityId1:r,query:o,entityContext:n,pagination:a})=>{const i=O.useContext(G),c={id:decodeURIComponent(s),query:$.objectToWhereClause({...o[i],"Lifecycle Stage":"DEPLOY"}),pagination:a},u=L`
        query getImage($id: ID!${t?", $query: String":""}) {
            image(id: $id) {
                id
                lastUpdated
                ${n.DEPLOYMENT?"":"deploymentCount"}
                metadata {
                    layerShas
                    v1 {
                        created
                        layers {
                            instruction
                            created
                            value
                        }
                    }
                    v2 {
                        digest
                    }
                }
                name {
                    fullName
                    registry
                    remote
                    tag
                }
                scan {
                    imageComponents {
                        name
                        layerIndex
                        version
                        imageVulnerabilities {
                            cve
                            cvss
                            link
                            summary
                        }
                    }
                }
            }
        }
    `;function m(){if(!t)return u;const{listFieldName:d,fragmentName:p,fragment:h}=$.getFragmentInfo("IMAGE",t,"configmanagement"),f=$e(t);return L`
            query getImage_${t}($id: ID!, $query: String, $pagination: Pagination) {
                image(id: $id) {
                    id
                    ${d}(query: $query, pagination: $pagination) { ...${p} }
                    ${f}
                }
            }
            ${h}
        `}return e.jsx(H,{query:m(),variables:c,fetchPolicy:"network-only",children:({loading:d,data:p})=>{var P;if(ae(d,p))return e.jsx(B,{});const{image:h}=p;if(!h)return e.jsx(te,{resourceType:"IMAGE",useCase:"configmanagement"});if(t)return e.jsx(re,{entityListType:t,entityId:r,data:Ie(h,t),totalResults:(P=p==null?void 0:p.image)==null?void 0:P.count,entityContext:{...n,IMAGE:s},query:o});const{lastUpdated:f,metadata:g,scan:x,deploymentCount:N}=h,S=[{key:"Last Scanned",value:f?ee(f):"N/A"}];function v(R){const E=R.original;return!E.components||E.components.length===0?null:e.jsx(Vn,{scan:E,containsFixableCVEs:!1,className:"cve-table my-3 ml-4 px-2 border-0 border-l-4 border-base-300"})}const T=g?$n(g.v1.layers):[];return x&&(T.forEach((R,E)=>{T[E].components=[]}),x.imageComponents.forEach(R=>{if(R.layerIndex!==void 0&&T[R.layerIndex]){const E={...R,vulns:R.imageVulnerabilities??[]};T[R.layerIndex].components.push(E)}}),T.forEach((R,E)=>{T[E].cvesCount=R.components.reduce((w,U)=>w+U.vulns.length,0)})),e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Image Summary",children:e.jsxs("div",{className:"flex mb-4 flex-wrap",children:[e.jsx(je,{className:"mx-4 bg-base-100 min-h-48 mb-4",keyValuePairs:S}),N&&e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Deployments",value:N,entityType:"DEPLOYMENT"})]})}),e.jsx(V,{title:"Dockerfile",children:e.jsxs("div",{className:"flex shadow relative rounded bg-base-100 mb-4 ml-4 mr-4",children:[T.length===0&&e.jsx(X,{message:"No layers available in this image",className:"p-6"}),T.length>0&&e.jsx(we,{header:`${T.length} layers across this image`,rows:T,noDataText:"No Layers",className:"bg-base-100",columns:Yn.IMAGE,SubComponent:v,idAttribute:"id"})]})})]})}})};Gs.propTypes=ge;Gs.defaultProps=ye;const Bs=({id:s,entityListType:t,entityId1:r,query:o,entityContext:n,pagination:a})=>{const i=O.useContext(G),l={id:s,query:$.objectToWhereClause({...o[i],"Lifecycle Stage":"DEPLOY"}),pagination:a},c=L`
        query getNamespace($id: ID!, $query: String) {
            namespace(id: $id) {
                metadata {
                    name
                    id
                    labels {
                        key
                        value
                    }
                    creationTime
                }
                cluster {
                    id
                    name
                }
                imageCount
                deploymentCount
                subjectCount
                k8sRoleCount
                serviceAccountCount
                secretCount
                policyCount(query: $query)
            }
        }
    `;function u(){if(!t)return c;const{listFieldName:m,fragmentName:d,fragment:p}=$.getFragmentInfo("NAMESPACE",t,"configmanagement"),h=$e(t);return L`
            query getNamespace_${t}($id: ID!, $query: String, $pagination: Pagination) {
                namespace(id: $id) {
                    metadata {
                        id
                    }
                    ${m}(query: $query, pagination: $pagination) { ...${d} }
                    ${h}
                }
            }
            ${p}
        `}return e.jsx(H,{query:u(),variables:l,fetchPolicy:"network-only",children:({loading:m,data:d})=>{var w;if(ae(m,d))return e.jsx(B,{});const{namespace:p}=d;if(!p)return e.jsx(te,{resourceType:"NAMESPACE",useCase:"configmanagement"});if(t)return e.jsx(re,{entityListType:t,entityId:r,data:Ie(p,t),totalResults:(w=d==null?void 0:d.namespace)==null?void 0:w.count,entityContext:{...n,NAMESPACE:s}});const{metadata:h={},cluster:f={},deploymentCount:g,secretCount:x,imageCount:N,serviceAccountCount:S,k8sRoleCount:v}=p,{name:T,creationTime:P,labels:R=[]}=h,E=[{key:"Created",value:P?ee(P):"N/A"}];return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Namespace Summary",children:e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx(je,{className:"mx-4 bg-base-100 min-h-48 mb-4",keyValuePairs:E,labels:R}),f&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",entityType:"CLUSTER",name:"Cluster",value:f.name,entityId:f.id}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Deployments",value:g,entityType:"DEPLOYMENT"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Secrets",value:x,entityType:"SECRET"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Images",value:N,entityType:"IMAGE"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Service Accounts",value:S,entityType:"SERVICE_ACCOUNT"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Roles",value:v,entityType:"ROLE"})]})}),e.jsx(V,{title:"Namespace Findings",children:e.jsx("div",{className:"flex relative rounded mb-4 ml-4 mr-4",children:e.jsx(ts,{query:$.objectToWhereClause({Cluster:f.name,Namespace:T}),message:"No deployments violating policies in this namespace",entityContext:{...n,NAMESPACE:s}})})})]})}})};Bs.propTypes=ge;Bs.defaultProps=ye;const Qs=({id:s,entityListType:t,entityId1:r,query:o,entityContext:n,pagination:a})=>{const i=O.useContext(G),l={...o[i]};l.Standard||(l.Standard="CIS");const c={id:s,query:$.getEntityWhereClause(l),pagination:a},u=L`
        query getNode($id: ID!, $query: String) {
            node(id: $id) {
                id
                name
                clusterId
                clusterName
                containerRuntimeVersion
                externalIpAddresses
                internalIpAddresses
                joinedAt
                kernelVersion
                kubeletVersion
                osImage
                labels {
                    key
                    value
                }
                annotations {
                    key
                    value
                }
                complianceResults(query: $query) {
                    ...controlFields
                }
            }
        }
        ${Sa}
    `;return e.jsx(H,{query:u,variables:c,fetchPolicy:"network-only",children:({loading:m,data:d})=>{if(ae(m,d))return e.jsx(B,{});if(!d||!d.node)return e.jsx(te,{resourceType:"NODE",useCase:"configmanagement"});const{node:p}=d,{kernelVersion:h,kubeletVersion:f,osImage:g,labels:x=[],containerRuntimeVersion:N,joinedAt:S,clusterName:v,clusterId:T,annotations:P,complianceResults:R=[]}=p,E=[{key:"Kubelet Version",value:f},{key:"Kernel Version",value:h},{key:"Node OS",value:g},{key:"Runtime",value:N},{key:"Join time",value:S?ee(S):"N/A"}];if(t)return e.jsx(re,{entityListType:t,entityId:r,data:an(R),query:o,entityContext:{...n,NODE:s}});const w=R.filter(W=>W.value.overallState==="COMPLIANCE_STATE_FAILURE").map(W=>({...W,standard:Ce[W.control.standardId],controlName:`${W.control.name} - ${W.control.description}`})),U=[{accessor:"id",Header:"id",headerClassName:"hidden",className:"hidden"},{accessor:"standard",sortMethod:ps,Header:"Standard",headerClassName:`w-1/5 ${A}`,className:`w-1/5 ${y}`},{accessor:"controlName",sortMethod:ps,Header:"Control",headerClassName:`w-1/2 ${A}`,className:`w-1/2 ${y}`}];return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Node Summary",children:e.jsxs("div",{className:"flex mb-4 flex-wrap",children:[e.jsx(je,{className:"mx-4 bg-base-100 min-h-48 mb-4",keyValuePairs:E,labels:x,annotations:P}),!n.CLUSTER&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Cluster",entityType:"CLUSTER",value:v,entityId:T}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"CIS Controls",value:R.length,entityType:"CONTROL"})]})}),!(n&&n.CONTROL)&&e.jsx(V,{title:"Node Findings",children:e.jsxs("div",{className:"flex shadow relative rounded bg-base-100 mb-4 ml-4 mr-4",children:[w.length===0&&e.jsx(X,{message:"No nodes failing controls on this node",className:"p-3 shadow",icon:"info"}),w.length>0&&e.jsx(we,{entityType:"CONTROL",header:`${w.length} controls failed across this node`,rows:w,noDataText:"No Controls",className:"bg-base-100",columns:U,idAttribute:"control.id",defaultSorted:[{id:"standard",desc:!1},{id:"controlName",desc:!1}]})]})})]})}})};Qs.propTypes=ge;Qs.defaultProps=ye;const Ws=({className:s,alerts:t,entityContext:r})=>{if(!t||!t.length)return e.jsx(X,{message:"No deployments violating this policy",className:"p-3 shadow",icon:"info"});const o=t,n=At[b.DEPLOYMENT](r);return e.jsx(we,{header:`${o.length} ${q("Deployment",o.length)} with Violation(s)`,entityType:b.DEPLOYMENT,columns:n,rows:o,idAttribute:"id",noDataText:"No Deployments with Violation(s)",className:s,defaultSorted:[{id:"name",desc:!1}]})};Ws.propTypes={className:C.string,alerts:C.arrayOf(C.shape({})),entityContext:C.shape({})};Ws.defaultProps={className:"",alerts:[],entityContext:{}};const Ks=({entityContext:s={},policyId:t,alerts:r})=>s[b.DEPLOYMENT]?e.jsx(Vs,{deploymentID:s[b.DEPLOYMENT],policyID:t,message:"No deployments have failed across this policy"}):e.jsx("div",{className:"mx-4 w-full",children:e.jsx(Ws,{className:"bg-base-100",alerts:r,entityContext:s})});Ks.propTypes={entityContext:C.shape({}),policyId:C.string.isRequired,alerts:C.arrayOf(C.shape({})).isRequired};Ks.defaultProps={entityContext:{}};const zs=({id:s,entityListType:t,entityId1:r,query:o,entityContext:n,pagination:a})=>{const l=wn()("policy-management"),c=O.useContext(G),u={id:s,query:$.objectToWhereClause({...o[c],"Policy Id":s,"Lifecycle Stage":"DEPLOY"}),pagination:a},m=L`
        query getPolicy($id: ID!) {
            policy(id: $id) {
                id
                description
                lifecycleStages
                categories
                disabled
                enforcementActions
                rationale
                remediation
                severity
                exclusions {
                    name
                }
                deploymentCount
                alerts {
                    id
                    deployment {
                        id
                        name
                        clusterName
                        namespace
                    }
                    enforcement {
                        action
                        message
                    }
                    policy {
                        id
                        severity
                    }
                    time
                }
            }
        }
    `;function d(){if(!t)return m;const{listFieldName:p,fragmentName:h,fragment:f}=$.getFragmentInfo("POLICY",t,"configmanagement"),g=$e(t);return L`
            query getPolicy_${t}($id: ID!, $query: String, $pagination: Pagination) {
                policy(id: $id) {
                    id
                    ${p}(query: $query, pagination: $pagination){ ...${h} }
                    ${g}
                }
            }
            ${f}
        `}return e.jsx(H,{query:d(),variables:u,fetchPolicy:"network-only",children:({loading:p,data:h})=>{var le;if(ae(p,h))return e.jsx(B,{});const{policy:f}=h;if(!f)return e.jsx(te,{resourceType:"POLICY",useCase:"configmanagement"});if(t)return e.jsx(re,{entityListType:t,entityId:r,data:Ie(f,t),totalResults:(le=h==null?void 0:h.policy)==null?void 0:le.count,query:o,entityContext:{...n,POLICY:s}});const{lifecycleStages:g=[],categories:x=[],severity:N="",description:S="",rationale:v,remediation:T,disabled:P,enforcementActions:R,exclusions:E=[],alerts:w=[],deploymentCount:U}=f,W=[{key:"Lifecycle Stage",value:Ts(g)},{key:"Severity",value:e.jsx(Ze,{severity:N})},{key:"Enforced",value:R?"Yes":"No"},{key:"Enabled",value:P?"No":"Yes"}],Se=w.reduce((Me,Fe)=>{const K={time:Fe.time,...Fe.deployment};return[...Me,K]},[]),ve=l?e.jsx(Re,{className:"no-underline text-base-600 mx-4 btn btn-base",to:`${In}/${s}`,children:"View policy"}):null;return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Policy Summary",headerComponents:ve,children:e.jsxs("div",{className:"grid grid-gap-6 grid-columns-4 mx-4 grid-dense mb-4",children:[e.jsx(je,{className:"sx-2 bg-base-100 min-h-48 h-full",keyValuePairs:W,exclusions:E}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 h-full mb-4",name:"Deployments",value:U,entityType:"DEPLOYMENT"}),e.jsx(Y,{className:"sx-1 min-h-48 h-full",bodyClassName:"leading-normal p-4",header:"Categories",children:x.join(", ")}),e.jsx(Y,{className:"sx-1 min-h-48 h-full",bodyClassName:"leading-normal p-4",header:"Description",children:S}),e.jsxs(Y,{className:"sx-2 min-h-48 h-full",bodyClassName:"leading-normal",header:"Remediation",children:[e.jsx("div",{className:"p-4 border-r border-base-300",children:T}),e.jsxs("div",{className:"p-4",children:[e.jsx("span",{className:"font-700",children:"Rationale: "}),e.jsx("span",{children:v})]})]})]})}),e.jsx(V,{title:"Policy Findings",dataTestId:"policy-findings-section",children:e.jsx("div",{className:"flex mb-4",children:e.jsx(Ks,{entityContext:n,policyId:s,alerts:Se})})})]})}})};zs.propTypes=ge;zs.defaultProps=ye;const Js=({permissions:s})=>s.map(t=>e.jsxs("div",{className:"flex border-b border-base-300",children:[e.jsxs("div",{className:"w-43 border-r border-base-300 px-2 py-3 text-sm flex",children:[t.key==="*"?"* (All verbs)":e.jsx("span",{className:"capitalize",children:t.key}),":"]}),e.jsx("div",{className:"w-full px-2 py-3 text-sm leading-normal",children:t.values.includes("*")?"* (All resources)":t.values.join(", ")})]},t.key)),Xs=({rules:s,...t})=>{let r=e.jsx(X,{message:"No Permissions",className:"p-6"}),o="Permissions across this cluster";if(s&&s.length){const n=s.reduce((i,l)=>(l.verbs.forEach(c=>{i[c]=[...i[c]??[],...l.resources,...l.nonResourceUrls]}),i),{}),a=Object.keys(n).map(i=>{const l=n[i];return{key:i,values:l}});a.length>0&&(o=`${a.length} Permissions across this cluster`,r=e.jsx(Js,{permissions:a}))}return e.jsx(Y,{header:o,...t,children:e.jsx("div",{className:"w-full",children:r})})};Xs.propTypes={rules:C.arrayOf(C.shape({}))};Xs.defaultProps={rules:null};const Zs=({rules:s,...t})=>{let r=e.jsx(X,{message:"No rules",className:"p-6"}),o="0 Rules";if(s&&s.length>0){o=`${s.length>0?s.length:""} Rules`;const n=s.map((i,l)=>e.jsxs("li",{className:"flex items-center",children:[e.jsx("div",{className:"min-w-48 text-sm bg-base-200 border border-base-400 my-3 p-3 rounded w-full leading-normal",children:i.verbs.includes("*")?"* (All verbs)":i.verbs.join(", ")}),e.jsx(Rs,{className:"h-4 w-4 text-base-500 mx-4"})]},l)),a=s.map((i,l)=>{const{nonResourceUrls:c,resources:u}=i,m=[...u,...c];return e.jsx("li",{className:"flex items-center",children:e.jsx("div",{className:"text-sm bg-base-200 border border-base-400 my-3 p-3 rounded leading-normal",children:m.includes("*")?"* (All resources)":m.join(", ")})},l)});r=e.jsxs("div",{className:"flex",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-700 border-b border-base-300 text-sm justify-left flex p-2 px-3",children:"Verbs"}),e.jsx("ul",{className:"p-3",children:n})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"font-700 border-b border-base-300 text-sm justify-left flex p-2 px-3",children:"Resources and Non-resource URLs"}),e.jsx("ul",{className:"p-3",children:a})]})]})}return e.jsx(Y,{header:o,...t,children:r})};Zs.propTypes={rules:C.arrayOf(C.shape({}))};Zs.defaultProps={rules:null};const et=({id:s,entityListType:t,entityId1:r,query:o,entityContext:n,pagination:a})=>{const i=O.useContext(G),l={id:s,query:$.objectToWhereClause(o[i]),pagination:a},c=L`
        query getRole($id: ID!${t?", $query: String":""}) {
            k8sRole(id: $id) {
                id
                name
                type
                verbs
                createdAt
                ${n.NAMESPACE?"":`roleNamespace {
                    metadata {
                        id
                        name
                    }
                }`}
                serviceAccountCount
                subjectCount
                rules {
                    apiGroups
                    nonResourceUrls
                    resourceNames
                    resources
                    verbs
                }
                ${n.CLUSTER?"":"clusterId clusterName"}
            }
        }
    `;function u(){if(!t)return c;const{listFieldName:m,fragmentName:d,fragment:p}=$.getFragmentInfo("ROLE",t,"configmanagement"),h=$e(t);return L`
            query getRole_${t}($id: ID!, $query: String, $pagination: Pagination) {
                    k8sRole(id: $id) {
                        id
                        ${m}(query: $query, pagination: $pagination) { ...${d} }
                        ${h}
                    }

            }
            ${p}
        `}return e.jsx(H,{query:u(),variables:l,fetchPolicy:"network-only",children:({loading:m,data:d})=>{if(ae(m,d))return e.jsx(B,{});const{k8sRole:p}=d;if(t)return e.jsx(re,{entityListType:t,entityId:r,data:Ie(p,t),totalResults:p.count,entityContext:{...n,ROLE:s},query:o});const{type:h,createdAt:f,roleNamespace:g,serviceAccountCount:x,subjectCount:N,labels:S=[],annotations:v=[],rules:T,clusterName:P,clusterId:R}=p;let E,w;g&&(E=g.metadata.name,w=g.metadata.id);const U=[{key:"Role Type",value:h},{key:"Created",value:f?ee(f):"N/A"}];return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Role Summary",children:e.jsxs("div",{className:"flex mb-4 flex-wrap",children:[e.jsx(je,{className:"mx-4 bg-base-100 min-h-48 mb-4",keyValuePairs:U,labels:S,annotations:v}),P&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",entityType:"CLUSTER",name:"Cluster",value:P,entityId:R}),g&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",entityType:"NAMESPACE",name:"Namespace Scope",value:E,entityId:w}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Users & Groups",value:N,entityType:"SUBJECT"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Service Accounts",value:x,entityType:"SERVICE_ACCOUNT"})]})}),e.jsx(V,{title:"Role Permissions And Rules",children:e.jsxs("div",{className:"flex mb-4",children:[e.jsx(Xs,{rules:T,className:"mx-4 bg-base-100"}),e.jsx(Zs,{rules:T,className:"mx-4 bg-base-100"})]})})]})}})};et.propTypes=ge;et.defaultProps=ye;const st=({metadata:s})=>{if(!s)return null;const{startDate:t,endDate:r,issuer:o,sans:n,subject:a}=s,{commonName:i="N/A",names:l,organizationUnit:c="N/A"}=o??{},{commonName:u="N/A",names:m}=a??{};return e.jsxs("div",{className:"flex flex-row",children:[e.jsxs(Y,{header:"Timeframe",className:"m-4",bodyClassName:"flex flex-col p-4 leading-normal",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-700 mr-4",children:"Start Date:"}),e.jsx("span",{children:t?ee(t):"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-700 mr-4",children:"End Date:"}),e.jsx("span",{children:r?ee(r):"N/A"})]})]}),e.jsxs(Y,{header:"Issuer",className:"m-4",bodyClassName:"flex flex-col p-4 leading-normal",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-700 mr-4",children:"Common Name:"}),e.jsx("span",{children:i})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-700 mr-4",children:"Name(s):"}),e.jsx("span",{children:Array.isArray(l)&&l.length!==0?l.join(", "):"None"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-700 mr-4",children:"Organization Unit:"}),e.jsx("span",{children:c})]})]}),e.jsxs(Y,{header:"Subject",className:"m-4",bodyClassName:"flex flex-col p-4 leading-normal",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-700 mr-4",children:"Common Name:"}),e.jsx("span",{children:u})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-700 mr-4",children:"Name(s):"}),e.jsx("span",{children:Array.isArray(m)&&m.length!==0?m.join(", "):"None"})]})]}),Array.isArray(n)&&n.length!==0&&e.jsx(Y,{header:"SANS",className:"m-4",bodyClassName:"flex flex-col p-4 leading-normal",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-700 mr-4",children:"SANS:"}),e.jsx("span",{children:n.join(", ")})]})})]})};st.propTypes={metadata:C.shape()};st.defaultProps={metadata:null};const on=({files:s})=>{const t=s.filter(a=>!a.metadata||a.metadata&&a.metadata.__typename!=="ImagePullSecret"),r=t.length,o=`${r} ${q("value",r)}`,n=t.map(a=>{const{name:i,type:l,metadata:c}=a,{algorithm:u}=c??{},m=e.jsxs("div",{className:"flex flex-1 w-full",children:[e.jsx("div",{className:"flex flex-1",children:i}),l&&e.jsx("div",{className:"border-l border-base-400 px-2 capitalize",children:l.replace(/_/g," ").toLowerCase()}),u&&e.jsx("div",{className:"border-l border-base-400 px-2",children:u})]});return e.jsx(ke,{header:m,isCollapsible:!!c,children:e.jsx(st,{metadata:c})},i)});return e.jsx(Y,{header:o,bodyClassName:"flex flex-col",children:n})};on.propTypes={files:C.arrayOf(C.shape).isRequired};const tt=({id:s,entityListType:t,entityId1:r,query:o,entityContext:n,pagination:a})=>{const i=O.useContext(G),l={id:s,query:$.objectToWhereClause({...o[i]}),pagination:a},c=L`
        query getSecret($id: ID!) {
            secret(id: $id) {
                id
                name
                createdAt
                files {
                    name
                    type
                    metadata {
                        __typename
                        ... on Cert {
                            endDate
                            startDate
                            algorithm
                            issuer {
                                commonName
                                names
                            }
                            subject {
                                commonName
                                names
                            }
                            sans
                        }
                        ... on ImagePullSecret {
                            registries {
                                name
                                username
                            }
                        }
                    }
                }
                namespace
                deploymentCount
                labels {
                    key
                    value
                }
                annotations {
                    key
                    value
                }
                ${n.CLUSTER?"":"clusterId clusterName"}
            }
        }
    `;function u(){if(!t)return c;const{listFieldName:m,fragmentName:d,fragment:p}=$.getFragmentInfo("SECRET",t,"configmanagement"),h=$e(t);return L`
            query getSecret_${t}($id: ID!, $query: String, $pagination: Pagination) {
                secret(id: $id) {
                    id
                    ${m}(query: $query, pagination: $pagination) { ...${d} }
                    ${h}
                }
            }
            ${p}
        `}return e.jsx(H,{query:u(),variables:l,fetchPolicy:"network-only",children:({loading:m,data:d})=>{var P;if(ae(m,d))return e.jsx(B,{});if(!d||!d.secret)return e.jsx(te,{resourceType:"SECRET",useCase:"configmanagement"});const{secret:p}=d;if(t)return e.jsx(re,{entityListType:t,entityId:r,data:Ie(p,t),totalResults:(P=d==null?void 0:d.secret)==null?void 0:P.count,query:o});const{createdAt:h,labels:f=[],annotations:g=[],deploymentCount:x,clusterName:N,clusterId:S,files:v=[]}=p,T=[{key:"Created",value:h?ee(h):"N/A"}];return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Secret Summary",children:e.jsxs("div",{className:"flex mb-4 flex-wrap",children:[e.jsx(je,{className:"mx-4 bg-base-100 min-h-48 mb-4",keyValuePairs:T,labels:f,annotations:g}),N&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",entityType:"CLUSTER",name:"Cluster",value:N,entityId:S}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Deployments",value:x,entityType:"DEPLOYMENT"})]})}),e.jsx(V,{title:"Secret Values",children:e.jsx("div",{className:"flex mb-4 ml-4 mr-4",children:e.jsx(on,{files:v})})})]})}})};tt.propTypes=ge;tt.defaultProps=ye;const ln=s=>{const t=s.filter(n=>n.scope==="Cluster");let r=null;const o=t.reduce((n,a)=>[...n,...a.permissions],[]);return r=e.jsx(Js,{permissions:o}),o.length===0&&(r=e.jsx(X,{message:"No permissions available",className:"p-3 shadow"})),r},Wr=s=>s.map(({clusterId:t,clusterName:r,scopedPermissions:o})=>{const n=r,a=ln(o);return e.jsx(ke,{header:n,children:a},t)}),ns=({scopedPermissionsByCluster:s,...t})=>{let r=null;if(!s||!s.length)r=e.jsx(X,{message:"No permissions available",className:"p-3 shadow"});else if(s.length>1)r=Wr(s);else{const{scopedPermissions:n}=s[0];r=ln(n)}const o=s.length>1?"Cluster Permissions across all clusters":`Cluster Permissions in "${s[0]&&s[0].clusterName}" cluster`;return e.jsx(Y,{header:o,...t,children:e.jsx("div",{className:"w-full",children:r})})};ns.propTypes={scopedPermissionsByCluster:C.arrayOf(C.shape({clusterId:C.string.isRequired,clusterName:C.string.isRequired,scopedPermissions:C.arrayOf(C.shape({}))}))};ns.defaultProps={scopedPermissionsByCluster:[]};const cn=({permissions:s})=>{const t=s.reduce((o,n)=>(o[n.key]=(o[n.key]||0)+n.values.length,o),{}),r=Object.keys(t).map(o=>{const n=t[o];return e.jsxs("li",{className:"flex mr-2",children:[o," (",n,")"]},o)});return e.jsx("ul",{className:"flex text-sm capitalize",children:r})};cn.propTypes={permissions:C.arrayOf(C.shape({key:C.string,values:C.arrayOf(C.string)})).isRequired};const un=s=>s.scope!=="Cluster",dn=s=>{const r=s.filter(un).map(({scope:n,permissions:a})=>{const i=e.jsxs("div",{className:"flex flex-1",children:[e.jsx("div",{className:"flex flex-1",children:n}),e.jsx("div",{children:e.jsx(cn,{permissions:a})})]});return e.jsx(ke,{header:i,children:e.jsx(Js,{permissions:a})},n)});return r.length?r:null},Kr=s=>s.filter(({scopedPermissions:t})=>t.filter(un).length).map(({clusterId:t,clusterName:r,scopedPermissions:o})=>{const n=r,a=dn(o);return a?e.jsx(ke,{header:n,children:e.jsx("div",{className:"pl-4",children:a})},t):null}),as=({scopedPermissionsByCluster:s,...t})=>{let r=null;if(!s||!s.length)r=e.jsx(X,{message:"No permissions available",className:"p-3 shadow"});else if(s.length>1)r=Kr(s);else{const{scopedPermissions:n}=s[0];r=dn(n)}(!r||!r.length)&&(r=e.jsx(X,{message:"No permissions available",className:"p-3 shadow"}));const o=s.length>1?"Namespace Permissions across all clusters":`Namespace Permissions in "${s[0]&&s[0].clusterName}" cluster`;return e.jsx(Y,{header:o,...t,children:e.jsx("div",{className:"w-full",children:r})})};as.propTypes={scopedPermissionsByCluster:C.arrayOf(C.shape({clusterId:C.string.isRequired,clusterName:C.string.isRequired,scopedPermissions:C.arrayOf(C.shape({}))}))};as.defaultProps={scopedPermissionsByCluster:[]};const nt=({id:s,entityListType:t,entityId1:r,query:o,entityContext:n,pagination:a})=>{const i=O.useContext(G),l={id:s,query:$.objectToWhereClause({...o[i],"Lifecycle Stage":"DEPLOY"}),pagination:a},c=L`
        query getServiceAccount($id: ID!) {
            serviceAccount(id: $id) {
                id
                name
                saNamespace {
                    metadata {
                        id
                        name
                    }
                }
                clusterId
                clusterName
                deploymentCount
                k8sRoleCount
                automountToken
                createdAt
                labels {
                    key
                    value
                }
                annotations {
                    key
                    value
                }
                secrets: imagePullSecretObjects {
                    id
                    name
                }
                scopedPermissions {
                    scope
                    permissions {
                        key
                        values
                    }
                }
            }
        }
    `;function u(){if(!t)return c;const{listFieldName:m,fragmentName:d,fragment:p}=$.getFragmentInfo("SERVICE_ACCOUNT",t,"configmanagement"),h=$e(t);return L`
            query getServiceAccount_${t}($id: ID!, $query: String, $pagination: Pagination) {
                serviceAccount(id: $id) {
                    id
                    ${m}(query: $query, pagination: $pagination) { ...${d} }
                    ${h}
                }
            }
            ${p}
        `}return e.jsx(H,{query:u(),variables:l,fetchPolicy:"network-only",children:({loading:m,data:d})=>{var ve;if(ae(m,d))return e.jsx(B,{});const{serviceAccount:p}=d;if(!p)return e.jsx(te,{resourceType:"SERVICE_ACCOUNT",useCase:"configmanagement"});if(t){const le=t==="ROLE"?p.k8sRoles:Ie(p,t);return e.jsx(re,{entityListType:t,entityId:r,entityContext:{...n,SERVICE_ACCOUNT:s},data:le,totalResults:(ve=d==null?void 0:d.serviceAccount)==null?void 0:ve.count,query:o})}const{automountToken:h=!1,createdAt:f,labels:g=[],secrets:x=[],deploymentCount:N,k8sRoleCount:S,saNamespace:v,scopedPermissions:T=[],annotations:P,clusterName:R="",clusterId:E=""}=p;let w="",U;if(v){const{metadata:le}=v;w=le.name,U=le.id}const W=[{key:"Automounted",value:h.toString()},{key:"Created",value:f?ee(f):"N/A"}],Se=[{clusterId:E,clusterName:R,scopedPermissions:T}];return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Service Account Summary",children:e.jsxs("div",{className:"flex mb-4 flex-wrap",children:[e.jsx(je,{className:"mx-4 bg-base-100 min-h-48 mb-4",keyValuePairs:W,labels:g,annotations:P,secrets:x}),!(n&&n.CLUSTER)&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",entityType:"CLUSTER",name:"Cluster",value:R,entityId:E}),!(n&&n.NAMESPACE)&&e.jsx(oe,{className:"mx-4 min-w-48 min-h-48 mb-4",entityType:"NAMESPACE",name:"Namespace",value:w,entityId:U}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Deployments",value:N,entityType:"DEPLOYMENT"}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Roles",value:S,entityType:"ROLE"})]})}),e.jsx(V,{title:"Service Account Permissions",children:e.jsxs("div",{className:"flex mb-4",children:[e.jsx(ns,{scopedPermissionsByCluster:Se,className:"mx-4 bg-base-100 w-full"}),e.jsx(as,{scopedPermissionsByCluster:Se,className:"flex-grow mx-4 bg-base-100 w-full"})]})})]})}})};nt.propTypes=ge;nt.defaultProps=ye;const at=({id:s,entityListType:t,entityId1:r,query:o,entityContext:n,pagination:a})=>{const i=O.useContext(G),l={id:decodeURIComponent(s),query:$.objectToWhereClause(o[i]),pagination:a},c=L`
        query getSubject($id: ID) {
            subject(id: $id) {
                id
                name
                kind
                namespace
                type
                scopedPermissions {
                    scope
                    permissions {
                        key
                        values
                    }
                }
                clusterName
                clusterId
                clusterAdmin
                k8sRoleCount
            }
        }
    `;function u(){if(!t)return c;const{fragment:m}=$.getFragmentInfo("SUBJECT",t,"configmanagement");return L`
            query getSubject_${t}($id: ID, $query: String, $pagination: Pagination) {
                subject(id: $id) {
                    id
                    name
                    kind
                    namespace
                    type
                    scopedPermissions {
                        scope
                        permissions {
                            key
                            values
                        }
                    }
                    k8sRoles(query: $query, pagination: $pagination) {
                       ...k8RoleFields
                    }
                    clusterAdmin
                    k8sRoleCount
                }
            }
            ${m}
        `}return e.jsx(H,{query:u(),variables:l,fetchPolicy:"network-only",children:({loading:m,data:d})=>{if(ae(m,d))return e.jsx(B,{});const p=d.subject,{clusterId:h,clusterName:f,scopedPermissions:g,type:x,clusterAdmin:N,k8sRoles:S,k8sRoleCount:v}=p;if(t){let R,E;switch(t){case"ROLE":R=S,E=v;break;default:R=[],E=0}return e.jsx(re,{entityListType:t,entityId:r,data:R,totalResults:E,query:o,entityContext:{...n,SUBJECT:s}})}const T=[{clusterId:h,clusterName:f,scopedPermissions:g}],P=[{key:"Role type",value:x},{key:"Cluster Admin Role",value:N?"Enabled":"Disabled"}];return e.jsxs("div",{className:"w-full",children:[e.jsx(V,{title:"Subject Summary",children:e.jsxs("div",{className:"flex mb-4 flex-wrap",children:[e.jsx(je,{className:"mx-4 bg-base-100 min-h-48 mb-4",keyValuePairs:P}),e.jsx(F,{className:"mx-4 min-w-48 min-h-48 mb-4",name:"Roles",value:v,entityType:"ROLE"})]})}),e.jsx(V,{title:"Subject Permissions",children:e.jsxs("div",{className:"flex mb-4",children:[e.jsx(ns,{scopedPermissionsByCluster:T,className:"mx-4 bg-base-100"}),e.jsx(as,{scopedPermissionsByCluster:T,className:"flex-grow mx-4 bg-base-100"})]})})]})}})};at.propTypes=ge;at.defaultProps=ye;const zr={CLUSTER:_s,CONTROL:Ys,DEPLOYMENT:Hs,IMAGE:Gs,NAMESPACE:Bs,NODE:Qs,POLICY:zs,ROLE:et,SECRET:tt,SERVICE_ACCOUNT:nt,SUBJECT:at},rs=({entityType:s,entityId:t,entityListType:r,...o})=>{const n=O.useContext(De),a=O.useContext(_e),i=n.paging[a.pageParam],l=n.sort[a.sortParam],c=Ir(r),u=l||c,m=$.getPagination(u,i,us),d=zr[s];return d?e.jsx("div",{className:`flex w-full h-full ${r?"bg-base-100":"bg-base-200"}`,children:e.jsx(d,{id:t,entityListType:r,pagination:m,...o})}):e.jsx(te,{resourceType:s,useCase:"configmanagement"})};rs.propTypes={entityType:C.string.isRequired,entityListType:C.string,entityId:C.string.isRequired,query:C.shape({})};rs.defaultProps={query:null,entityListType:void 0};const rt=({entityType1:s,entityListType2:t,entityId2:r})=>{const o=D(),n=k();if(t||r){const a=j.getURL(n,o).pop().url();return e.jsx(Re,{className:"flex items-center justify-center text-base-600 border-r border-base-300 px-4 mr-4 h-full hover:bg-primary-200 w-16",to:a,"aria-label":"Go to preceding breadcrumb",children:e.jsx(Ea,{className:"h-6 w-6 text-600"})})}return e.jsx($t,{className:"flex items-center justify-center border-r border-base-300 px-4 mr-4 h-full w-16",entityType:s})};rt.propTypes={entityType1:C.string,entityListType2:C.string,entityId2:C.string};rt.defaultProps={entityType1:null,entityListType2:null,entityId2:null};const Jr=e.jsx(kt,{className:"bg-base-200 border border-base-400 mx-4 rounded-full",size:"14"}),Xr=({entityName:s,relatedEntityName:t,entityType1:r,entityId1:o,entityListType2:n,entityId2:a,entityType2:i})=>{const l=[];return r&&o&&l.push({name:s,type:ne[r]}),n&&l.push({name:q(ne[n]),type:"entity list"}),a&&l.push({name:t,type:ne[i]||ne[n]}),l},Zr=(s,t,r,o)=>{const n=o-1-r;if(!n||n<0)return null;const a=j.getURL(s,t);for(let i=0;i<n;i+=1)a.pop();return a.url()},eo=s=>{switch(s){case 1:return"max-w-full";case 2:return"max-w-1/2";case 3:return"max-w-1/3";case 4:return"max-w-1/4";case 5:return"max-w-1/5";case 6:return"max-w-1/6";case 7:return"max-w-1/7";case 8:return"max-w-1/8";case 9:return"max-w-1/9";case 10:return"max-w-1/10";default:return""}},ze=s=>{const t=D(),r=k(),{className:o,...n}=s,{entityType1:a,entityId1:i,entityListType2:l,entityId2:c}=n;if(!i)return null;const u=Xr(n),m=eo(u.length),d=u.map((p,h,{length:f})=>{const g=h!==f-1?Jr:null,x=Zr(r,t,h,f),N=p.type==="entity list"?We(p.name):p.name,S=x?e.jsx(Re,{className:"text-primary-700 underline truncate font-700",title:p.name,to:x,children:N}):e.jsx("span",{className:"w-full truncate",title:p.name,children:e.jsx("span",{className:"truncate font-700",children:N})});if(!p)return null;const v=We(p.type);return e.jsxs("div",{className:`flex ${m} truncate`,children:[e.jsxs("span",{className:"flex flex-col max-w-full","data-testid":"breadcrumb-link-text",children:[S,e.jsx("span",{children:v})]}),e.jsx("span",{className:"flex items-center",children:g})]},`${p.name}--${p.type}`)});return e.jsxs("span",{style:{flex:"10 1"},className:`flex items-center ${o}`,children:[e.jsx(rt,{entityType1:a,entityListType2:l,entityId2:c}),d]})};ze.propTypes={className:C.string};ze.defaultProps={className:""};const ot=s=>{const{className:t,...r}=s,{entityType1:o,entityId1:n,entityType2:a,entityListType2:i,entityId2:l}=r,c=i||a,{loading:u,entityName:m}=ms(o,n),{loading:d,entityName:p}=ms(c,l);return!u&&!m?null:l?!d&&!p?null:e.jsx(ze,{...s,entityName:m,relatedEntityName:p}):e.jsx(ze,{...s,entityName:m})};ot.propTypes={className:C.string,entityType1:C.string,entityId1:C.string,entityType2:C.string,entityListType2:C.string,entityId2:C.string};ot.defaultProps={className:"",entityType1:null,entityId1:null,entityType2:null,entityListType2:null,entityId2:null};const os=({contextEntityType:s,contextEntityId:t,entityListType1:r,entityType1:o,entityId1:n,entityType2:a,entityListType2:i,entityId2:l,query:c})=>{const u=k(),m=D(),d=be(),p=ys(m),h=O.useContext(G),f=!n||i&&!l;function g(){return l||n}function x(){return a||l&&i||o||r||s}function N(){return f?i:null}function S(){return c[h]}function v(){d(j.getURL(u,m).clearSidePanelParams().url())}const T=g(),P=x(),R=N(),E=j.getURL(u,m).base(P,T).push(R).query().query(S()).url(),w=e.jsx("div",{className:"flex items-center h-full",children:e.jsx(Re,{to:E,"aria-label":"link",className:"border-base-400 border-l h-full p-4",children:e.jsx(On,{})})}),U={};return s&&(U[s]=t),l&&(U[o||r]=n),e.jsx(De.Provider,{value:p,children:e.jsxs(bs,{testid:"side-panel",children:[e.jsxs(js,{children:[e.jsx(ot,{className:"leading-normal text-base-600 truncate",entityType1:o||r,entityId1:n,entityType2:a,entityListType2:i,entityId2:l}),e.jsxs(Ss,{children:[w,e.jsx(Zn,{onClose:v,className:"border-base-400 border-l"})]})]}),e.jsx(Es,{children:e.jsx(rs,{entityContext:U,entityType:P,entityId:T,entityListType:R,query:c})})]})})};os.propTypes={contextEntityType:C.string,contextEntityId:C.string,entityType1:C.string,entityListType1:C.string,entityId1:C.string,entityType2:C.string,entityListType2:C.string,entityId2:C.string,query:C.shape().isRequired};os.defaultProps={contextEntityType:null,contextEntityId:null,entityType1:null,entityListType1:null,entityId1:null,entityType2:null,entityListType2:null,entityId2:null};const ie=()=>{const s=O.useRef(null),t=D(),r=be(),o=k(),n=ys(t),{useCase:a,search:i,sort:l,paging:c}=n,u=new Et(a,n.getPageStack(),i,l,c),m=j.getParams(o,t),{pageEntityListType:d,entityId1:p,entityType2:h,entityListType2:f,entityId2:g,query:x}=m,N=O.useContext(G),S=O.useCallback(()=>{r(j.getURL(o,t).clearSidePanelParams().url())},[r,o,t]);Wt(s,S,!!p);function v(P){const R=j.getURL(o,t).push(P);r(R.url())}const T=We(q(ne[d]));return e.jsxs(De.Provider,{value:u,children:[e.jsx(Ut,{header:T,subHeader:"Entity list",classes:"pr-0 ignore-react-onclickoutside",children:e.jsx("div",{className:"flex flex-1 justify-end items-center h-full pl-2",children:e.jsx(wt,{text:"All Entities",options:Tt()})})}),e.jsxs(xa,{children:[e.jsx(_e.Provider,{value:Bt,children:e.jsx(re,{entityListType:d,entityId:p,onRowClick:v,query:x[N]})}),e.jsx(G.Provider,{value:xs.sidePanel,children:e.jsx(_e.Provider,{value:Qt,children:e.jsx(It,{isOpen:!!p,children:e.jsx("div",{ref:s,children:e.jsx(os,{entityType1:d,entityId1:p,entityType2:h,entityListType2:f,entityId2:g,query:x})})})})})]})]})},mn=({entityType:s,entityId:t})=>{const r=decodeURIComponent(t),{entityName:o}=ms(s,r),n=o||"-",a=We(ne[s]);return e.jsx(Ut,{header:n,subHeader:a,classes:"z-1 pr-0 ignore-react-onclickoutside",children:e.jsx("div",{className:"flex flex-1 justify-end items-center h-full pl-2",children:e.jsx(wt,{text:"All Entities",options:Tt()})})})};mn.propTypes={entityType:C.string.isRequired,entityId:C.string.isRequired};const se={OVERVIEW:"Overview",POLICIES:"Policies & CIS Controls",VIOLATIONS_AND_FINDINGS:"Violations & Findings",APPLICATION_RESOURCES:"Application & Infrastructure Resources",RBAC_CONFIG:"Role-Based Access Control"},so={[b.ROLE]:se.RBAC_CONFIG,[b.SUBJECT]:se.RBAC_CONFIG,[b.SERVICE_ACCOUNT]:se.RBAC_CONFIG,[b.DEPLOYMENT]:se.APPLICATION_RESOURCES,[b.SECRET]:se.APPLICATION_RESOURCES,[b.NODE]:se.APPLICATION_RESOURCES,[b.CLUSTER]:se.APPLICATION_RESOURCES,[b.NAMESPACE]:se.APPLICATION_RESOURCES,[b.IMAGE]:se.APPLICATION_RESOURCES,[b.COMPONENT]:se.APPLICATION_RESOURCES,[b.POLICY]:se.POLICIES,[b.CONTROL]:se.POLICIES},lt=({entityType:s,entityListType:t,pageEntityId:r})=>{const o=k(),n=D();function a(d){const p=s===b.DEPLOYMENT&&d===b.POLICY?"failing ":"";return{group:so[d],value:d,text:`${p}${q(ne[d])}`,to:j.getURL(o,n).base(s,r).push(d).url()}}const i=ea[s];if(!i)return null;const l=i.map(d=>a(d)),c=Object.values(se),u=j.getURL(o,n).base(s,r).url(),m=[{group:se.OVERVIEW,value:"",text:"Overview",to:u},...l];return e.jsx(Hn,{groups:c,tabs:m,activeTab:t||""})};lt.propTypes={entityType:C.string.isRequired,entityListType:C.string,pageEntityId:C.string.isRequired};lt.defaultProps={entityListType:null};const ce=()=>{const s=O.useRef(null),t=D(),r=be(),o=k(),n=ys(t),{useCase:a,search:i,sort:l,paging:c}=n,u=new Et(a,n.getPageStack(),i,l,c),m=j.getParams(o,t),{pageEntityType:d,pageEntityId:p,entityListType1:h,entityType1:f,entityId1:g,entityType2:x,entityListType2:N,entityId2:S,query:v}=m,[T,P]=O.useState(!1);O.useEffect(()=>P(!1),[p]);const R=O.useCallback(()=>{r(j.getURL(o,t).clearSidePanelParams().url())},[r,o,t]);Wt(s,R,!!g),T||setTimeout(()=>P(!0),50);const E=T?{opacity:1,transition:".15s opacity ease-in",transitionDelay:".25s"}:{opacity:0};return e.jsx(De.Provider,{value:u,children:e.jsxs("div",{className:"flex flex-1 flex-col",style:E,children:[e.jsx(mn,{entityType:d,entityId:p}),e.jsx(lt,{pageEntityId:p,entityType:d,entityListType:h,disabled:!!g}),e.jsxs("div",{className:"flex flex-1 w-full h-full relative z-0 overflow-hidden",children:[e.jsx(_e.Provider,{value:Bt,children:e.jsx("div",{className:"h-full w-full overflow-auto",children:e.jsx(rs,{entityType:d,entityId:p,entityListType:h,entityId1:g,query:v})})}),e.jsx(G.Provider,{value:xs.sidePanel,children:e.jsx(_e.Provider,{value:Qt,children:e.jsx(It,{isOpen:!!g,children:e.jsx("div",{ref:s,children:e.jsx(os,{contextEntityId:p,contextEntityType:d,entityListType1:h,entityType1:f,entityId1:g,entityType2:x,entityListType2:N,entityId2:S,query:v})})})})})]})]})})},ue=":entityId1?/:entityType2?/:entityId2?",de=":pageEntityId?/:entityType1?/:entityId1?/:entityType2?/:entityId2?",to=()=>e.jsxs(G.Provider,{value:xs.page,children:[e.jsx(ht,{title:"Configuration Management is deprecated and will be removed in a future release",component:"p",variant:"info",isInline:!0,children:"Security configuration data will integrate directly into risk and policy management workflows to enhance visibility without relying on a standalone dashboard."}),e.jsxs(Un,{children:[e.jsx(_,{index:!0,element:e.jsx(sr,{})}),e.jsx(_,{path:`namespace/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`cluster/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`node/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`deployment/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`image/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`secret/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`policy/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`control/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`serviceaccount/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`subject/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`role/${de}`,element:e.jsx(ce,{})}),e.jsx(_,{path:`namespaces/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`clusters/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`nodes/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`deployments/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`images/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`secrets/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`policies/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`controls/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`serviceaccounts/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`subjects/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:`roles/${ue}`,element:e.jsx(ie,{})}),e.jsx(_,{path:"*",element:e.jsx(te,{useCase:"configmanagement"})})]})]}),Uo=O.memo(to,Ln);export{Uo as default};

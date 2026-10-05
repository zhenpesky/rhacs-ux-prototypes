import{gy as Lt,mn as Ot,dO as Je,b9 as et,t as e,K as wt,L as Dt,O as tt,R as Rt,cp as de,mo as U,mp as le,mq as Le,mr as Pt,dS as ce,f0 as Oe,ms as nt,mt as st,aK as X,aL as Y,a9 as F,mu as ot,mv as At,aM as m,mw as Ge,mx as Ve,m8 as It,m9 as qt,dC as ue,mb as $t,mc as _t,aN as J,aB as d,my as kt,bd as xe,mz as pe,me as at,mf as we,d9 as rt,bg as Bt,cC as De,ar as Re,mA as Mt,mB as ee,mC as me,mD as he,mE as it,e8 as B,bT as Pe,df as dt,mF as Ut,cG as Ae,cF as Ie,m1 as qe,cH as $e,k2 as zt,mG as _e,mH as be,dT as ke,mI as Qt,bU as Gt,F as Kt,dP as Wt,mJ as Ht,lU as Zt,lV as Xt,lW as Yt,m3 as Be,lT as Me,mK as Ue,mL as Jt,at as ge,ag as v,aG as M,ah as ye,aH as en,an as tn,bZ as nn,b_ as sn,mM as on,a$ as an,bY as rn,mN as dn,mO as ln,mP as cn,cT as un,mQ as xn,jS as pn,mR as ze,fC as mn,mS as z,mT as je,mU as Ce,mV as lt,mW as ct,mX as hn,mY as ut,be as te,aV as gn,aX as yn,aY as jn,bQ as Cn,bt as Ke,bn as xt,mZ as pt,bj as mt,bk as ht,m_ as gt,bl as yt,es as Qe,m$ as fn,bm as Z,n0 as vn,n1 as Sn,n2 as jt,n3 as Ct,n4 as re,n5 as ft,ej as vt,gg as ie,n6 as St,cE as bt,n7 as bn,er as En,b2 as oe,dv as Ne,n8 as Vn,n9 as Nn,na as Tn,nb as Fn,bp as Te,c1 as Et,cw as Vt,e5 as Nt,bq as Ln,cs as On,ct as $,cu as _,cv as k,nc as Ee,ai as wn,aj as We,nd as Dn,cm as Rn,cn as ae,fp as Pn}from"./index-DmuVcxq0.js";import{r as Fe,u as L,g as V,f as An}from"./apollo-BxVF6eGb.js";import{u as In,a as qn,S as $n,b as _n}from"./useHasLegacySnoozeAbility-8a1b-qWB.js";import{r as kn}from"./NodeReportsService-CZ5VOMh3.js";import{E as He}from"./ExpandableLabelSection-rhNfR9Z_.js";import"./react-pF2EnNv3.js";import"./lodash-JMWJiBov.js";import"./timeWindows-jJwZwJb_.js";import"./VulnerabilitiesService-BSo9DDbM.js";function Bn(n){const t=Lt(n);return`${Ot}?action=createFromFilters&${t}`}const Mn=[{text:"Export report as CSV",description:"Export a view-based CSV report from this view using the filters you’ve applied."},{text:"Create scheduled report",description:"Create a scheduled report from this view using the filters you’ve applied.",writeAccessRequirement:"WorkflowAdministration"}];function Un({onSelectExportReportAsCSV:n,onSelectCreateScheduledReport:t}){const[o,a]=Fe.useState(!1),{isFeatureFlagEnabled:r}=Je(),{hasReadWriteAccess:i}=et(),u=()=>{a(s=>!s)},c=(s,h)=>{switch(h){case"Export report as CSV":n();break;case"Create scheduled report":t();break}a(!1)};return e.jsx(e.Fragment,{children:e.jsx(wt,{isOpen:o,onSelect:c,onOpenChange:s=>a(s),toggle:s=>e.jsx(Rt,{ref:s,onClick:u,isExpanded:o,children:"Create report"}),shouldFocusToggleOnSelect:!0,popperProps:{position:"right",appendTo:()=>document.body},children:e.jsx(Dt,{children:Mn.map(s=>{const{description:h,text:l}=s,j=!("featureFlagDependency"in s)||!s.featureFlagDependency||r(s.featureFlagDependency),p=!("writeAccessRequirement"in s)||!s.writeAccessRequirement||i(s.writeAccessRequirement);return j&&p?e.jsx(tt,{value:l,description:h,children:l},l):null})})})})}const zn=V`
    query getNodeCVEs($query: String, $pagination: Pagination) {
        nodeCVEs(query: $query, pagination: $pagination) {
            cve
            affectedNodeCountBySeverity {
                critical {
                    total
                }
                important {
                    total
                }
                moderate {
                    total
                }
                low {
                    total
                }
                unknown {
                    total
                }
            }
            topCVSS
            affectedNodeCount
            firstDiscoveredInSystem
            distroTuples {
                summary
                operatingSystem
                cvss
                scoreVersion
            }
        }
    }
`;function Qn({querySearchFilter:n,...t}){return L(zn,{variables:{query:U(n),pagination:de(t)}})}const Gn=V`
    query getTotalNodeCount {
        nodeCount
    }
`;function Kn(){var t;return((t=L(Gn).data)==null?void 0:t.nodeCount)??0}const Wn=[le,Le,Pt],Ze={field:Le,direction:"desc",aggregateBy:{aggregateFunc:"max",distinct:"false"}};function Hn({querySearchFilter:n,isFiltered:t,pagination:o,selectedCves:a,createRowActions:r,canSelectRows:i,sortOption:u,getSortParams:c,onClearFilters:s}){var w;const{page:h,perPage:l}=o,{data:j,previousData:p,loading:C,error:b}=Qn({querySearchFilter:n,page:h,perPage:l,sortOption:u}),f=Kn(),x=j??p,S=ce({isLoading:C,data:x==null?void 0:x.nodeCVEs,error:b,searchFilter:n}),T=Oe(),E=i?8:6,O=(w=n.Severity)==null?void 0:w.map(N=>nt[N]).filter(st);return e.jsxs(X,{borders:S.type==="COMPLETE",variant:"compact","aria-live":"polite","aria-busy":C?"true":"false",children:[e.jsx(Y,{noWrap:!0,children:e.jsxs(F,{children:[e.jsx(ot,{}),i&&e.jsx(At,{selectedCves:a}),e.jsx(m,{sort:c(le),children:"CVE"}),e.jsxs(Ge,{tooltip:"The number of nodes affected by this CVE, grouped by the severity of the CVE on each node",children:["Nodes by severity",t&&e.jsx(Ve,{})]}),e.jsx(m,{sort:c(Le,It),children:"Top CVSS"}),e.jsxs(Ge,{tooltip:"Ratio of the number of nodes affected by this CVE to the total number of nodes",sort:c("Node ID",qt),children:["Affected nodes",t&&e.jsx(Ve,{})]}),e.jsx(m,{children:"First discovered"}),i&&e.jsx(m,{screenReaderText:"Row actions"})]})}),e.jsx(ue,{tableState:S,colSpan:E,emptyProps:{message:"No CVEs have been detected for nodes across your secured clusters"},filteredEmptyProps:{onClearFilters:s},renderer:({data:N})=>N.map((D,y)=>{const{cve:g,affectedNodeCountBySeverity:{critical:q,important:Q,moderate:R,low:G,unknown:fe},distroTuples:P,topCVSS:K,affectedNodeCount:ve,firstDiscoveredInSystem:W}=D,I=T.has(g),ne=$t(P),se=ne.length>0?ne[0].summary:"",H=_t(K,P);return e.jsxs(J,{isExpanded:I,children:[e.jsxs(F,{children:[e.jsx(d,{expand:{rowIndex:y,isExpanded:I,onToggle:()=>T.toggle(g)}}),i&&e.jsx(kt,{selectedCves:a,rowIndex:y,item:{cve:g}}),e.jsx(d,{dataLabel:"CVE",modifier:"nowrap",children:e.jsx(xe,{to:pe("CVE",g),children:g})}),e.jsx(d,{dataLabel:"Nodes by severity",children:e.jsx(at,{criticalCount:q.total,importantCount:Q.total,moderateCount:R.total,lowCount:G.total,unknownCount:fe.total,filteredSeverities:O,entity:"node"})}),e.jsx(d,{dataLabel:"Top CVSS",children:e.jsx(we,{cvss:K,scoreVersion:H.length>0?H.join("/"):void 0})}),e.jsxs(d,{dataLabel:"Affected nodes",children:[ve," / ",f," affected nodes"]}),e.jsx(d,{dataLabel:"First discovered",children:e.jsx(rt,{date:W})}),i&&e.jsx(d,{isActionCell:!0,children:e.jsx(Bt,{items:r({cve:g})})})]}),e.jsxs(F,{isExpanded:I,children:[e.jsx(d,{}),e.jsx(d,{colSpan:E-1,children:e.jsx(De,{children:se?e.jsx(Re,{component:"p",children:se}):e.jsx(Mt,{})})})]})]},g)})})]})}const Zn=V`
    query getNodes($query: String, $pagination: Pagination) {
        nodes(query: $query, pagination: $pagination) {
            id
            name
            nodeCVECountBySeverity {
                critical {
                    total
                }
                important {
                    total
                }
                moderate {
                    total
                }
                low {
                    total
                }
                unknown {
                    total
                }
            }
            cluster {
                name
            }
            osImage
            scanTime
        }
    }
`;function Xn({querySearchFilter:n,...t}){return L(Zn,{variables:{query:U(n),pagination:de(t)}})}const Yn=[ee,me,he,it],Xe={field:ee,direction:"asc"};function Jn({querySearchFilter:n,isFiltered:t,pagination:o,sortOption:a,getSortParams:r,onClearFilters:i}){var f;const{page:u,perPage:c}=o,{data:s,previousData:h,loading:l,error:j}=Xn({querySearchFilter:n,page:u,perPage:c,sortOption:a}),p=s??h,C=ce({isLoading:l,data:p==null?void 0:p.nodes,error:j,searchFilter:n}),b=(f=n.Severity)==null?void 0:f.map(x=>nt[x]).filter(st);return e.jsxs(X,{borders:C.type==="COMPLETE",variant:"compact","aria-live":"polite","aria-busy":l?"true":"false",children:[e.jsx(Y,{noWrap:!0,children:e.jsxs(F,{children:[e.jsx(m,{sort:r(ee),children:"Node"}),e.jsxs(m,{children:["CVEs by severity",t&&e.jsx(Ve,{})]}),e.jsx(m,{sort:r(me),children:"Cluster"}),e.jsx(m,{sort:r(he),children:"Operating system"}),e.jsx(m,{sort:r(it),children:"Scan time"})]})}),e.jsx(ue,{tableState:C,colSpan:5,emptyProps:{message:"No CVEs have been reported for your scanned nodes"},filteredEmptyProps:{onClearFilters:i},renderer:({data:x})=>e.jsx(J,{children:x.map(S=>{const{id:T,name:E,nodeCVECountBySeverity:O,cluster:w,osImage:N,scanTime:D}=S,{critical:y,important:g,moderate:q,low:Q,unknown:R}=O;return e.jsxs(F,{children:[e.jsx(d,{dataLabel:"Node",modifier:"nowrap",children:e.jsx(xe,{to:pe("Node",T),children:e.jsx(B,{position:"middle",content:E})})}),e.jsx(d,{dataLabel:"CVEs by severity",children:e.jsx(at,{criticalCount:y.total,importantCount:g.total,moderateCount:q.total,lowCount:Q.total,unknownCount:R.total,filteredSeverities:b,entity:"node"})}),e.jsx(d,{dataLabel:"Cluster",modifier:"nowrap",children:e.jsx(B,{position:"middle",content:w.name})}),e.jsx(d,{dataLabel:"Operating system",modifier:"nowrap",children:e.jsx(B,{position:"middle",content:N})}),e.jsx(d,{dataLabel:"Scan time",children:e.jsx(rt,{date:D})})]},T)})})})]})}const es=V`
    query getNodeCVEEntityCounts($query: String) {
        nodeCVECount(query: $query)
        nodeCount(query: $query)
    }
`;function ts(n){return L(es,{variables:{query:U(n)}})}function ns(){var H;const n=An(),{analyticsTrack:t}=Pe(),o=Me(t),{isFeatureFlagEnabled:a}=Je(),r=a("ROX_SCANNER_V4")&&a("ROX_NODE_INDEX_ENABLED")&&a("ROX_LEGACY_SCANNER"),[i]=dt("entityTab",Ut),{searchFilter:u,setSearchFilter:c}=Ae(),s=Ie(qe),{sortOption:h,getSortParams:l,setSortOption:j}=$e({sortFields:i==="CVE"?Wn:Yn,defaultSortOption:i==="CVE"?Ze:Xe,onSort:()=>s.setPage(1)});zt({destination:"node-cves",searchFilter:u,setSearchFilter:c,reapplyWhen:[i],onScopeApplied:()=>s.setPage(1)});const p=_e({[be.searchTerm]:be.inputProps.options[0].value,...u}),C=ke(p),b=((H=p["CVE Snoozed"])==null?void 0:H[0])==="true",f=In(),x=Qt(),{snoozeModalOptions:S,setSnoozeModalOptions:T,snoozeActionCreator:E}=qn(),{version:O}=Gt(),[w,N]=Fe.useState(!1),D=Kt(),y=U(p);function g(A){s.setPage(1),j(A==="CVE"?Ze:Xe),t({event:cn,properties:{type:A,page:"Overview"}})}Fe.useEffect(()=>{g(i)},[]);function q(){c({}),s.setPage(1)}function Q(A){c(un(u,A)),s.setPage(1)}const{data:R}=ts(p),G={CVE:(R==null?void 0:R.nodeCVECount)??0,Node:(R==null?void 0:R.nodeCount)??0},fe=Wt(a,Ht),P=Zt(),K=P==="v1"||P==="v2",ve=Xt({enabled:K&&P==="v1",searchFilter:u,setSearchFilter:c,paginationSetPage:()=>s.setPage(1),storageScope:"node-cves",filterKind:"workload"}),W=Yt({enabled:K&&P==="v2",searchFilter:u,setSearchFilter:c,paginationSetPage:()=>s.setPage(1),storageScope:"node-cves",filterKind:"workload"}),I=P==="v2"?W:ve,ne=e.jsx(Be,{searchFilter:u,searchFilterConfig:fe,defaultSearchFilterEntity:"Node",onFilterChange:(A,Se)=>{c(A),s.setPage(1),o(Ue,Se)},prefixToolbarItems:I.prefixToolbarItem??void 0,appliedFilterSuffix:I.appliedFilterSuffix??void 0,children:e.jsx(Un,{onSelectExportReportAsCSV:()=>{N(!0)},onSelectCreateScheduledReport:()=>{D(Bn(p))}})}),se=e.jsx(xn,{entityTabs:["CVE","Node"],entityCounts:G,onChange:g});return e.jsxs(e.Fragment,{children:[S&&e.jsx($n,{...S,onSuccess:(A,Se)=>{A==="SNOOZE"&&t({event:Jt,properties:{type:"NODE",duration:Se}}),n.cache.evict({fieldName:"nodeCVEs"}),n.cache.evict({fieldName:"nodeCVECount"}),n.cache.gc(),x.clear()},onClose:()=>T(null)}),e.jsx(ge,{title:"Node CVEs Overview"}),e.jsx(v,{children:e.jsx(M,{alignItems:{default:"alignItemsCenter"},grow:{default:"grow"},children:e.jsxs(M,{direction:{default:"column"},grow:{default:"grow"},children:[e.jsx(ye,{headingLevel:"h1",children:"Node CVEs"}),e.jsx(en,{children:"Prioritize and manage scanned CVEs across nodes"})]})})}),r&&e.jsx(v,{children:e.jsx(tn,{isInline:!0,variant:"info",title:"Results may include Node CVEs obtained from Scanner V4",component:"p",children:e.jsx(nn,{children:e.jsx("a",{href:sn(O,"operating/managing-vulnerabilities#understanding-node-cves-scanner-v4_scan-rhcos-node-host"),target:"_blank",rel:"noopener noreferrer",children:"Read more about the differences between the node scanning results obtained with the StackRox Scanner and Scanner V4."})})})}),e.jsx(v,{type:"tabs",children:e.jsx(_n,{attribute:be,onSelectTab:Q,searchFilter:u,tabContentId:"node-cves"})}),P==="v2"&&W.wysiwygAlert&&e.jsx(v,{children:W.wysiwygAlert}),e.jsxs(v,{id:"node-cves",isCenterAligned:!0,children:[e.jsx(on,{filterToolbar:ne,entityToggleGroup:se,pagination:s,tableRowCount:i==="CVE"?G.CVE:G.Node,isFiltered:C,children:f&&e.jsx(an,{align:{default:"alignEnd"},children:e.jsx(rn,{toggleText:"Bulk actions",isDisabled:x.size===0,children:e.jsx(tt,{onClick:()=>T({action:b?"UNSNOOZE":"SNOOZE",cveType:"NODE_CVE",cves:Array.from(x.values())}),children:b?"Unsnooze CVEs":"Snooze CVEs"},"bulk-snooze-cve")})})}),i==="CVE"&&e.jsx(Hn,{querySearchFilter:p,isFiltered:C,pagination:s,selectedCves:x,canSelectRows:f,createRowActions:E("NODE_CVE",b?"UNSNOOZE":"SNOOZE"),sortOption:h,getSortParams:l,onClearFilters:q}),i==="Node"&&e.jsx(Jn,{querySearchFilter:p,isFiltered:C,pagination:s,sortOption:h,getSortParams:l,onClearFilters:q})]}),e.jsx(dn,{isOpen:w,setIsOpen:N,query:y,areaOfConcern:"Nodes",runViewBasedReport:kn,vulnerabilityViewBasedJobsPath:ln}),I.modalsFragment]})}function ss(n,t){const o=mn(n,a=>{var r,i;switch(t.field){case"Component":return(r=a.name)==null?void 0:r.toLowerCase();case"Type":return(i=a.source)==null?void 0:i.toLowerCase();default:return""}});return t.reversed&&o.reverse(),o}const Tt=V`
    fragment NodeComponentFragment on NodeComponent {
        name
        source
        version
        nodeVulnerabilities(query: $query) {
            severity
            isFixable
            fixedByVersion
        }
    }
`,os=["Component","Type"],as={field:"Component",direction:"asc"};function Ft({data:n}){const{sortOption:t,getSortParams:o}=pn({sortFields:os,defaultSortOption:as}),a=ss(n,t);return n.length===0?null:e.jsxs(X,{children:[e.jsx(Y,{noWrap:!0,children:e.jsxs(F,{children:[e.jsx(m,{sort:o("Component"),children:"Component"}),e.jsx(m,{children:"Version"}),e.jsx(m,{children:"CVE fixed in"}),e.jsx(m,{sort:o("Type"),children:"Type"})]})}),e.jsx(J,{children:a.map(({name:r,source:i,version:u,nodeVulnerabilities:c})=>{var h;const s=(h=c==null?void 0:c[0])==null?void 0:h.fixedByVersion;return e.jsxs(F,{children:[e.jsx(d,{dataLabel:"Component",children:r}),e.jsx(d,{dataLabel:"Version",children:u}),e.jsx(d,{dataLabel:"CVE fixed in",children:s||e.jsx(ze,{isFixable:!1})}),e.jsx(d,{dataLabel:"Type",children:i})]},r)})})]})}const rs=[ee,z,je,Ce,me,he],is={field:z,direction:"desc"},ds=V`
    ${Tt}
    fragment AffectedNode on Node {
        id
        name
        osImage
        cluster {
            name
        }
        nodeComponents(query: $query) {
            ...NodeComponentFragment
            nodeVulnerabilities(query: $query) {
                vulnerabilityId: id
                cve
                severity
                fixedByVersion
                cvss
                scoreVersion
            }
        }
    }
`;function ls({tableState:n,getSortParams:t,onClearFilters:o}){const r=Oe();return e.jsxs(X,{borders:n.type==="COMPLETE",variant:"compact","aria-live":"polite","aria-busy":n.type==="LOADING"?"true":"false",children:[e.jsx(Y,{noWrap:!0,children:e.jsxs(F,{children:[e.jsx(m,{screenReaderText:"Row expansion"}),e.jsx(m,{sort:t(ee),children:"Node"}),e.jsx(m,{sort:t(z),children:"Top CVE severity"}),e.jsx(m,{sort:t(je),children:"CVE status"}),e.jsx(m,{sort:t(Ce),children:"Top CVSS"}),e.jsx(m,{sort:t(me),children:"Cluster"}),e.jsx(m,{sort:t(he),children:"Operating system"}),e.jsx(m,{children:"Affected components"})]})}),e.jsx(ue,{tableState:n,colSpan:8,emptyProps:{message:"There are no nodes that are affected by this CVE"},filteredEmptyProps:{onClearFilters:o},renderer:({data:i})=>i.map((u,c)=>{const{id:s,name:h,nodeComponents:l}=u,j=r.has(s),p=l.flatMap(S=>S.nodeVulnerabilities),C=lt(p),b=ct(p),{cvss:f,scoreVersion:x}=hn(p);return e.jsxs(J,{isExpanded:j,children:[e.jsxs(F,{children:[e.jsx(d,{expand:{rowIndex:c,isExpanded:j,onToggle:()=>r.toggle(s)}}),e.jsx(d,{dataLabel:"Node",children:e.jsx(xe,{to:pe("Node",s),children:e.jsx(B,{position:"middle",content:h})})}),e.jsx(d,{dataLabel:"Top CVE severity",modifier:"nowrap",children:e.jsx(ut,{severity:C})}),e.jsx(d,{dataLabel:"CVE status",modifier:"nowrap",children:e.jsx(ze,{isFixable:b})}),e.jsx(d,{dataLabel:"Top CVSS",modifier:"nowrap",children:e.jsx(we,{cvss:f,scoreVersion:x})}),e.jsx(d,{dataLabel:"Cluster",children:e.jsx(B,{position:"middle",content:u.cluster.name})}),e.jsx(d,{dataLabel:"Operating system",children:e.jsx(B,{position:"middle",content:u.osImage})}),e.jsx(d,{dataLabel:"Affected components",children:l.length===1?l[0].name:te(l.length,"component")})]}),e.jsxs(F,{isExpanded:j,children:[e.jsx(d,{}),e.jsx(d,{colSpan:7,children:e.jsx(De,{children:e.jsx(Ft,{data:l})})})]})]},s)})})]})}function cs({affectedNodeCount:n,totalNodeCount:t,operatingSystemCount:o}){return e.jsxs(gn,{isCompact:!0,isFullHeight:!0,children:[e.jsx(yn,{children:"Affected nodes"}),e.jsx(jn,{children:e.jsxs(Cn,{children:[e.jsxs(Ke,{span:12,className:"pf-v6-u-pt-sm",children:[n," / ",t," affected nodes"]}),e.jsxs(Ke,{span:12,className:"pf-v6-u-pt-sm",children:[te(o,"operating system")," affected"]})]})})]})}const us=V`
    ${ds}
    query getAffectedNodes($query: String, $pagination: Pagination) {
        nodes(query: $query, pagination: $pagination) {
            ...AffectedNode
        }
    }
`;function xs({query:n,...t}){var a,r;const o=L(us,{variables:{query:n,pagination:de(t)}});return{affectedNodesRequest:o,nodeData:((a=o.data)==null?void 0:a.nodes)??((r=o.previousData)==null?void 0:r.nodes)}}const ps=V`
    query getNodeCVEMetadata($cve: String!) {
        nodeCVE(cve: $cve) {
            cve
            distroTuples {
                summary
                link
                operatingSystem
            }
            firstDiscoveredInSystem
        }
    }
`;function ms(n){const t=L(ps,{variables:{cve:n}}),{data:o,previousData:a}=t,r=(o==null?void 0:o.nodeCVE)??(a==null?void 0:a.nodeCVE);return{metadataRequest:t,cveData:r}}const hs=V`
    query getNodeCVESummaryData($cve: String!, $query: String!) {
        totalNodeCount: nodeCount
        nodeCount(query: $query)
        nodeCVE(cve: $cve, subfieldScopeQuery: $query) {
            distroTuples {
                operatingSystem
            }
            affectedNodeCountBySeverity {
                critical {
                    total
                }
                important {
                    total
                }
                moderate {
                    total
                }
                low {
                    total
                }
                unknown {
                    total
                }
            }
        }
    }
`;function gs(n,t){const o=L(hs,{variables:{cve:n,query:t}}),{data:a,previousData:r}=o,i=(a==null?void 0:a.nodeCount)??(r==null?void 0:r.nodeCount)??0;return{summaryDataRequest:o,nodeCount:i}}const ys=gt("Node",{entityTab:"CVE"}),js=[vn,Sn,jt],Ye={affectedNodeCountBySeverity:{critical:{total:0},important:{total:0},moderate:{total:0},low:{total:0},unknown:{total:0}},distroTuples:[]};function Cs(){const{analyticsTrack:n}=Pe(),t=Me(n),{searchFilter:o,setSearchFilter:a}=Ae(),r=_e(o),{cveId:i}=xt(),u=`^${i}$`,c=U({...r,CVE:[u]}),{page:s,perPage:h,setPage:l,setPerPage:j}=Ie(qe),{sortOption:p,getSortParams:C}=$e({sortFields:rs,defaultSortOption:is,onSort:()=>l(1)}),b=ke(r),f=pt(r),{metadataRequest:x,cveData:S}=ms(i),{summaryDataRequest:T,nodeCount:E}=gs(i,c),{affectedNodesRequest:O,nodeData:w}=xs({query:c,page:s,perPage:h,sortOption:p}),N=S==null?void 0:S.cve,D=ce({isLoading:O.loading,error:O.error,data:w,searchFilter:r});return e.jsxs(e.Fragment,{children:[e.jsx(ge,{title:`Node CVEs - NodeCVE ${N}`}),e.jsx(v,{type:"breadcrumb",children:e.jsxs(mt,{children:[e.jsx(ht,{to:ys,children:"Node CVEs"}),e.jsx(yt,{isActive:!0,children:N??e.jsx(Qe,{screenreaderText:"Loading CVE name",width:"200px"})})]})}),e.jsx(v,{children:e.jsx(fn,{data:S})}),e.jsx(Z,{component:"div"}),e.jsxs(v,{hasBodyWrapper:!1,children:[e.jsx(Be,{searchFilter:o,searchFilterConfig:js,defaultSearchFilterEntity:"Node",onFilterChange:(y,g)=>{a(y),l(1,"replace"),t(Ue,g)}}),e.jsxs(Ct,{error:x.error,isLoading:x.loading,children:[e.jsx(re,{data:T.data,loadingText:"Loading affected nodes summary",renderer:({data:y})=>e.jsx(cs,{affectedNodeCount:E,totalNodeCount:y.totalNodeCount,operatingSystemCount:(y.nodeCVE??Ye).distroTuples.length})}),e.jsx(re,{data:T.data,loadingText:"Loading affected nodes by CVE severity summary",renderer:({data:y})=>e.jsx(ft,{title:"Nodes by severity",severityCounts:(y.nodeCVE??Ye).affectedNodeCountBySeverity,hiddenSeverities:f})})]}),e.jsx(Z,{component:"div"}),e.jsxs(vt,{hasGutter:!0,className:"pf-v6-u-align-items-baseline",children:[e.jsx(ie,{isFilled:!0,children:e.jsxs(M,{alignItems:{default:"alignItemsCenter"},children:[e.jsxs(ye,{headingLevel:"h2",children:[te(E,"node")," affected"]}),b&&e.jsx(St,{})]})}),e.jsx(ie,{children:e.jsx(bt,{itemCount:E,perPage:h,page:s,onSetPage:(y,g)=>l(g),onPerPageSelect:(y,g)=>{j(g)}})})]}),e.jsx(ls,{tableState:D,getSortParams:C,onClearFilters:()=>{a({}),l(1)}})]})]})}const fs=V`
    fragment NodeMetadata on Node {
        id
        name
        osImage
        kubeletVersion
        kernelVersion
        scanTime
    }
`;function vs({data:n}){if(!n)return e.jsx(bn,{nameScreenreaderText:"Loading Node name",metadataScreenreaderText:"Loading Node metadata"});const t=n.scanTime?4:3;return e.jsxs(M,{direction:{default:"column"},alignItems:{default:"alignItemsFlexStart"},children:[e.jsx(ye,{headingLevel:"h1",children:n.name}),e.jsxs(En,{numLabels:t,children:[e.jsxs(oe,{children:["OS: ",n.osImage]}),e.jsxs(oe,{children:["Kubelet: ",n.kubeletVersion]}),e.jsxs(oe,{children:["Kernel version: ",n.kernelVersion]}),n.scanTime&&e.jsxs(oe,{children:["Scan time: ",Ne(n.scanTime)]})]})]})}const Ss=[le,z,je,Ce],bs={field:z,direction:"desc"},Es=V`
    ${Tt}
    fragment NodeVulnerabilityFragment on NodeVulnerability {
        cve
        summary
        cvss
        scoreVersion
        nodeComponents(query: $query) {
            ...NodeComponentFragment
        }
    }
`;function Vs({tableState:n,getSortParams:t,onClearFilters:o}){const r=Oe();return e.jsxs(X,{borders:n.type==="COMPLETE",variant:"compact","aria-live":"polite","aria-busy":n.type==="LOADING"?"true":"false",children:[e.jsx(Y,{noWrap:!0,children:e.jsxs(F,{children:[e.jsx(ot,{}),e.jsx(m,{sort:t(le),children:"CVE"}),e.jsx(m,{sort:t(z),children:"Top CVE severity"}),e.jsx(m,{sort:t(je),children:"CVE status"}),e.jsx(m,{sort:t(Ce),children:"Top CVSS"}),e.jsx(m,{children:"Affected components"})]})}),e.jsx(ue,{tableState:n,colSpan:6,emptyProps:{message:"No CVEs were detected for this node"},filteredEmptyProps:{onClearFilters:o},renderer:({data:i})=>i.map((u,c)=>{const{cve:s,cvss:h,scoreVersion:l,nodeComponents:j}=u,p=j.flatMap(x=>x.nodeVulnerabilities),C=lt(p),b=ct(p),f=r.has(s);return e.jsxs(J,{isExpanded:f,children:[e.jsxs(F,{children:[e.jsx(d,{expand:{rowIndex:c,isExpanded:f,onToggle:()=>r.toggle(s)}}),e.jsx(d,{dataLabel:"CVE",modifier:"nowrap",children:e.jsx(xe,{to:pe("CVE",s),children:s})}),e.jsx(d,{dataLabel:"Top CVE severity",children:e.jsx(ut,{severity:C})}),e.jsx(d,{dataLabel:"CVE status",children:e.jsx(ze,{isFixable:b})}),e.jsx(d,{dataLabel:"Top CVSS",children:e.jsx(we,{cvss:h,scoreVersion:l})}),e.jsx(d,{dataLabel:"Affected components",children:j.length===1?j[0].name:te(j.length,"component")})]}),e.jsxs(F,{isExpanded:f,children:[e.jsx(d,{}),e.jsx(d,{colSpan:5,children:e.jsx(De,{children:e.jsx(Ft,{data:j})})})]})]},s)})})]})}const Ns=V`
    ${Es}
    query getNodeVulnerabilities($id: ID!, $query: String!, $pagination: Pagination) {
        node(id: $id) {
            id
            nodeVulnerabilityCount(query: $query)
            nodeVulnerabilities(query: $query, pagination: $pagination) {
                ...NodeVulnerabilityFragment
            }
        }
    }
`;function Ts({nodeId:n,query:t,...o}){return L(Ns,{variables:{id:n,query:t,pagination:de(o)}})}const Fs=V`
    ${Vn}
    query getNodeVulnSummary($id: ID!, $query: String!) {
        node(id: $id) {
            id
            nodeCVECountBySeverity(query: $query) {
                ...ResourceCountsByCVESeverityAndStatus
            }
        }
    }
`;function Ls(n,t){return L(Fs,{variables:{id:n,query:t}})}const Os=[Tn,jt];function ws({nodeId:n}){var N,D;const{analyticsTrack:t}=Pe(),o=Me(t),{searchFilter:a,setSearchFilter:r}=Ae(),i=_e(a),u=U(i),c=ke(i),{page:s,perPage:h,setPage:l,setPerPage:j}=Ie(qe),{sortOption:p,getSortParams:C}=$e({sortFields:Ss,defaultSortOption:bs,onSort:()=>l(1,"replace")}),b=pt(i),f=Nn(i),{data:x,loading:S,error:T}=Ts({nodeId:n,query:u,page:s,perPage:h,sortOption:p}),E=Ls(n,u),O=((N=x==null?void 0:x.node)==null?void 0:N.nodeVulnerabilityCount)??0,w=ce({isLoading:S,error:T,data:(D=x==null?void 0:x.node)==null?void 0:D.nodeVulnerabilities,searchFilter:i});return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(Re,{component:"p",children:"Review and triage vulnerability data scanned on this node"})}),e.jsx(Z,{component:"div"}),e.jsxs(v,{hasBodyWrapper:!1,isFilled:!0,children:[e.jsx(Be,{searchFilter:a,searchFilterConfig:Os,defaultSearchFilterEntity:"CVE",onFilterChange:(y,g)=>{r(y),l(1,"replace"),o(Ue,g)}}),e.jsxs(Ct,{isLoading:E.loading,error:E.error,children:[e.jsx(re,{loadingText:"Loading node CVEs by severity summary",data:E.data,renderer:({data:y})=>e.jsx(ft,{title:"CVEs by severity",severityCounts:y.node.nodeCVECountBySeverity,hiddenSeverities:b})}),e.jsx(re,{loadingText:"Loading node CVEs by status summary",data:E.data,renderer:({data:y})=>e.jsx(Fn,{cveStatusCounts:y.node.nodeCVECountBySeverity,hiddenStatuses:f})})]}),e.jsx(Z,{component:"div"}),e.jsxs(vt,{hasGutter:!0,className:"pf-v6-u-align-items-baseline",children:[e.jsx(ie,{isFilled:!0,children:e.jsxs(M,{alignItems:{default:"alignItemsCenter"},children:[e.jsx(ye,{headingLevel:"h2",children:x&&x.node?`${te(x.node.nodeVulnerabilityCount,"result")} found`:e.jsx(Qe,{screenreaderText:"Loading node vulnerability count"})}),c&&e.jsx(St,{})]})}),e.jsx(ie,{children:e.jsx(bt,{itemCount:O,perPage:h,page:s,onSetPage:(y,g)=>l(g),onPerPageSelect:(y,g)=>{j(g)}})})]}),e.jsx(Vs,{tableState:w,getSortParams:C,onClearFilters:()=>{r({}),l(1)}})]})]})}const Ds=V`
    query getNodeExtendedDetails($id: ID!) {
        node(id: $id) {
            id
            cluster {
                name
            }
            containerRuntimeVersion
            joinedAt
            scanTime
            kernelVersion
            kubeletVersion
            labels {
                key
                value
            }
            annotations {
                key
                value
            }
        }
    }
`;function Rs(n){return L(Ds,{variables:{id:n}})}function Ps({nodeId:n}){const{data:t,loading:o,error:a}=Rs(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{component:"div",children:e.jsx(Re,{component:"p",children:"View details about this node"})}),e.jsx(Z,{component:"div"}),e.jsx(v,{isFilled:!0,children:a?e.jsx(Te,{children:e.jsx(Et,{title:"There was an error loading the node details",headingLevel:"h2",icon:Nt,status:"danger",children:Vt(a)})}):o?e.jsx(Te,{children:e.jsx(Ln,{size:"xl"})}):t&&e.jsxs(M,{direction:{default:"column"},spaceItems:{default:"spaceItemsXl"},children:[e.jsxs(On,{columnModifier:{default:"1Col",lg:"2Col"},children:[e.jsxs($,{children:[e.jsx(_,{children:"Cluster"}),e.jsx(k,{children:t.node.cluster.name})]}),t.node.containerRuntimeVersion&&e.jsxs($,{children:[e.jsx(_,{children:"Container runtime"}),e.jsx(k,{children:t.node.containerRuntimeVersion})]}),t.node.joinedAt&&e.jsxs($,{children:[e.jsx(_,{children:"Join time"}),e.jsx(k,{children:Ne(t.node.joinedAt)})]}),t.node.scanTime&&e.jsxs($,{children:[e.jsx(_,{children:"Scan time"}),e.jsx(k,{children:Ne(t.node.scanTime)})]}),t.node.kernelVersion&&e.jsxs($,{children:[e.jsx(_,{children:"Kernel version"}),e.jsx(k,{children:t.node.kernelVersion})]}),t.node.kubeletVersion&&e.jsxs($,{children:[e.jsx(_,{children:"Kubelet"}),e.jsx(k,{children:t.node.kubeletVersion})]})]}),e.jsx(He,{toggleText:"Labels",labels:t.node.labels}),e.jsx(He,{toggleText:"Annotations",labels:t.node.annotations})]})})]})}const As=gt("Node",{entityTab:"Node"}),Is=V`
    ${fs}
    query getNodeMetadata($id: ID!) {
        node(id: $id) {
            ...NodeMetadata
        }
    }
`;function qs(){var s;const{nodeId:n}=xt(),{data:t,error:o}=L(Is,{variables:{id:n}}),[a,r]=dt("detailsTab",Ee),i=Ee[0],u=Ee[1],c=((s=t==null?void 0:t.node)==null?void 0:s.name)??"-";return e.jsxs(e.Fragment,{children:[e.jsx(ge,{title:`Node CVEs - Node ${c}`}),e.jsx(v,{type:"breadcrumb",children:e.jsxs(mt,{children:[e.jsx(ht,{to:As,children:"Nodes"}),e.jsx(yt,{isActive:!0,children:c??e.jsx(Qe,{screenreaderText:"Loading Node name",width:"200px"})})]})}),o?e.jsx(v,{children:e.jsx(Te,{children:e.jsx(Et,{title:Vt(o),headingLevel:"h2",icon:Nt,status:"danger"})})}):e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(vs,{data:t==null?void 0:t.node})}),e.jsx(v,{type:"tabs",children:e.jsxs(wn,{activeKey:a,onSelect:(h,l)=>{r(l)},usePageInsets:!0,mountOnEnter:!0,unmountOnExit:!0,children:[e.jsx(We,{eventKey:i,title:i,children:e.jsx(ws,{nodeId:n})}),e.jsx(We,{eventKey:u,title:u,children:e.jsx(Ps,{nodeId:n})})]})})]})]})}function Ks(){const{hasReadAccess:n}=et(),t=n("Integration");return e.jsxs(e.Fragment,{children:[t&&e.jsx(Dn,{}),e.jsxs(Rn,{children:[e.jsx(ae,{index:!0,element:e.jsx(ns,{})}),e.jsx(ae,{path:"cves/:cveId",element:e.jsx(Cs,{})}),e.jsx(ae,{path:"nodes/:nodeId",element:e.jsx(qs,{})}),e.jsx(ae,{path:"*",element:e.jsxs(v,{hasBodyWrapper:!1,children:[e.jsx(ge,{title:"Node CVEs - Not Found"}),e.jsx(Pn,{})]})})]})]})}export{Ks as default};

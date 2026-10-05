import{mC as N,nk as Me,nl as X,nm as J,cp as ee,mo as te,dS as se,t as e,aK as re,aL as ae,a9 as q,aM as y,mx as ke,dC as ne,aN as ie,aB as p,bd as le,nn as oe,be as R,no as Ee,mp as ce,np as ue,mU as w,f0 as Ue,mu as Ke,mv as gt,mw as bt,my as vt,mR as Se,nq as ze,mf as Qe,bg as Et,cC as Ge,ar as A,mA as We,bT as Te,df as He,nr as St,cG as Fe,cF as Ve,m1 as Pe,cH as Le,k2 as Tt,mG as Ie,mH as fe,dT as $e,mI as Ft,lU as Vt,lV as Pt,lW as Lt,m3 as qe,n0 as Ze,ns as Ye,lT as De,nt as Oe,mL as It,at as de,ag as j,aG as D,ah as K,aH as Xe,mM as $t,a$ as qt,bY as Dt,O as Ot,nu as _t,cT as At,mQ as Rt,mW as Nt,e8 as wt,aV as pe,aX as xe,aY as me,bQ as ge,bt as U,bn as Je,bj as et,bk as tt,m_ as st,bl as rt,es as _e,er as at,b2 as be,dv as Ae,bZ as Bt,n7 as nt,bm as z,n3 as it,n4 as Z,ej as lt,gg as Y,n6 as ot,cE as ct,bp as ve,c1 as ut,cw as dt,e5 as pt,bq as Mt,cs as kt,ct as Q,cu as G,cv as W,nv as xt,eq as Ut,g1 as Kt,eo as zt,n9 as Qt,nc as je,ai as Gt,aj as Re,b9 as Wt,nd as Ht,cm as Zt,cn as H,fp as Yt}from"./index-BNcr0frs.js";import{u as I,g as f,f as Xt,r as Jt}from"./apollo-BxVF6eGb.js";import{u as es,a as ts,S as ss,b as rs}from"./useHasLegacySnoozeAbility-DwgcQESi.js";import{E as as}from"./ExpandableLabelSection-C9zXc32Z.js";import"./react-pF2EnNv3.js";import"./lodash-JMWJiBov.js";import"./timeWindows-jJwZwJb_.js";import"./VulnerabilitiesService-sEPLShjn.js";const ns=f`
    query getPlatformClusters($query: String, $pagination: Pagination) {
        clusters(query: $query, pagination: $pagination) {
            id
            name
            clusterVulnerabilityCount(query: $query)
            type
            status {
                orchestratorMetadata {
                    version
                }
            }
        }
    }
`,is=[N,Me,X,J],Ne={field:N,direction:"asc"};function ls({querySearchFilter:s,isFiltered:t,pagination:a,sortOption:n,getSortParams:r,onClearFilters:i}){const{page:l,perPage:o}=a,{data:u,previousData:x,error:d,loading:v}=I(ns,{variables:{query:te(s),pagination:ee({page:l,perPage:o,sortOption:n})}}),g=u??x,T=se({isLoading:v,data:g==null?void 0:g.clusters,error:d,searchFilter:s});return e.jsxs(re,{borders:T.type==="COMPLETE",variant:"compact","aria-live":"polite","aria-busy":v?"true":"false",children:[e.jsx(ae,{noWrap:!0,children:e.jsxs(q,{children:[e.jsx(y,{sort:r(N),children:"Cluster"}),e.jsxs(y,{sort:r(Me),children:["CVEs",t&&e.jsx(ke,{})]}),e.jsx(y,{sort:r(X),children:"Platform type"}),e.jsx(y,{sort:r(J),children:"Kubernetes version"})]})}),e.jsx(ne,{tableState:T,colSpan:4,emptyProps:{message:"No secured clusters have been detected"},filteredEmptyProps:{onClearFilters:i},renderer:({data:F})=>F.map(({id:L,name:E,clusterVulnerabilityCount:S,type:c,status:b})=>{var V;return e.jsx(ie,{children:e.jsxs(q,{children:[e.jsx(p,{dataLabel:"Cluster",modifier:"nowrap",children:e.jsx(le,{to:oe("Cluster",L),children:E})}),e.jsx(p,{dataLabel:"CVEs",children:R(S,"CVE")}),e.jsx(p,{dataLabel:"Platform type",children:Ee(c)}),e.jsx(p,{dataLabel:"Kubernetes version",children:((V=b==null?void 0:b.orchestratorMetadata)==null?void 0:V.version)??"Unavailable"})]})},L)})})]})}const os=f`
    query getPlatformCves($query: String, $pagination: Pagination) {
        platformCVEs(query: $query, pagination: $pagination) {
            id
            cve
            isFixable
            cveType
            cvss
            clusterVulnerability {
                scoreVersion
                summary
            }
            clusterCountByType {
                generic
                kubernetes
                openshift
                openshift4
            }
        }
    }
`;function cs({querySearchFilter:s,...t}){return I(os,{variables:{query:te(s),pagination:ee(t)}})}const us=f`
    query getTotalClusterCount {
        clusterCount
    }
`,ds=[ce,ue,w],we={field:w,direction:"desc"};function ps({querySearchFilter:s,isFiltered:t,pagination:a,selectedCves:n,canSelectRows:r,createRowActions:i,sortOption:l,getSortParams:o,onClearFilters:u}){var V;const{page:x,perPage:d}=a,{data:v,previousData:g,error:T,loading:m}=cs({querySearchFilter:s,page:x,perPage:d,sortOption:l}),L=((V=I(us).data)==null?void 0:V.clusterCount)??0,E=v??g,S=se({isLoading:m,data:E==null?void 0:E.platformCVEs,error:T,searchFilter:s}),c=Ue(),b=r?8:6;return e.jsxs(re,{borders:S.type==="COMPLETE",variant:"compact","aria-live":"polite","aria-busy":m?"true":"false",children:[e.jsx(ae,{noWrap:!0,children:e.jsxs(q,{children:[e.jsx(Ke,{}),r&&e.jsx(gt,{selectedCves:n}),e.jsx(y,{sort:o(ce),children:"CVE"}),e.jsx(y,{children:"CVE status"}),e.jsx(y,{sort:o(ue),children:"CVE type"}),e.jsx(y,{sort:o(w),children:"CVSS"}),e.jsxs(bt,{tooltip:"Ratio of the number of clusters affected by this CVE to the total number of secured clusters",sort:void 0,children:["Affected clusters",t&&e.jsx(ke,{})]}),r&&e.jsx(y,{screenReaderText:"Row actions"})]})}),e.jsx(ne,{tableState:S,colSpan:b,emptyProps:{message:"No CVEs have been detected for your secured clusters"},filteredEmptyProps:{onClearFilters:u},renderer:({data:_})=>_.map((h,C)=>{const{id:P,cve:O,isFixable:B,cveType:Ce,cvss:he,clusterVulnerability:{summary:M,scoreVersion:$},clusterCountByType:k}=h,ye=c.has(O),{generic:Ct,kubernetes:ht,openshift:yt,openshift4:ft}=k,jt=Ct+ht+yt+ft;return e.jsxs(ie,{isExpanded:ye,children:[e.jsxs(q,{children:[e.jsx(p,{expand:{rowIndex:C,isExpanded:ye,onToggle:()=>c.toggle(O)}}),r&&e.jsx(vt,{selectedCves:n,rowIndex:C,item:{cve:O}}),e.jsx(p,{dataLabel:"CVE",modifier:"nowrap",children:e.jsx(le,{to:oe("CVE",P),children:O})}),e.jsx(p,{dataLabel:"CVE status",children:e.jsx(Se,{isFixable:B})}),e.jsx(p,{dataLabel:"CVE type",children:ze(Ce)}),e.jsx(p,{dataLabel:"CVSS",children:e.jsx(Qe,{cvss:he,scoreVersion:$})}),e.jsxs(p,{dataLabel:"Affected clusters",children:[jt," / ",L," affected clusters"]}),r&&e.jsx(p,{isActionCell:!0,children:e.jsx(Et,{items:i({cve:O})})})]}),e.jsxs(q,{isExpanded:ye,children:[e.jsx(p,{}),e.jsx(p,{colSpan:b-1,children:e.jsx(Ge,{children:M?e.jsx(A,{component:"p",children:M}):e.jsx(We,{})})})]})]},P)})})]})}const xs=f`
    query getPlatformCVEEntityCounts($query: String) {
        platformCVECount(query: $query)
        clusterCount(query: $query)
    }
`;function ms(s){return I(xs,{variables:{query:te(s)}})}const Cs=[Ze,Ye];function hs(){var M;const s=Xt(),{analyticsTrack:t}=Te(),a=De(t),[n]=He("entityTab",St),{searchFilter:r,setSearchFilter:i}=Fe(),l=Ve(Pe),{sortOption:o,getSortParams:u,setSortOption:x}=Le({sortFields:n==="CVE"?ds:is,defaultSortOption:n==="CVE"?we:Ne,onSort:()=>l.setPage(1)});Tt({destination:"platform-cves",searchFilter:r,setSearchFilter:i,reapplyWhen:[n],onScopeApplied:()=>l.setPage(1)});const d=Ie({[fe.searchTerm]:fe.inputProps.options[0].value,...r}),v=$e(d),g=((M=d["CVE Snoozed"])==null?void 0:M[0])==="true",T=es(),m=Ft(),{snoozeModalOptions:F,setSnoozeModalOptions:L,snoozeActionCreator:E}=ts();function S($){l.setPage(1),x($==="CVE"?we:Ne),t({event:_t,properties:{type:$,page:"Overview"}})}Jt.useEffect(()=>{S(n)},[]);const{data:c}=ms(d),b={CVE:(c==null?void 0:c.platformCVECount)??0,Cluster:(c==null?void 0:c.clusterCount)??0};function V(){i({}),l.setPage(1)}function _($){i(At(r,$)),l.setPage(1)}const h=Vt(),C=h==="v1"||h==="v2",P=Pt({enabled:C&&h==="v1",searchFilter:r,setSearchFilter:i,paginationSetPage:()=>l.setPage(1),storageScope:"platform-cves",filterKind:"workload"}),O=Lt({enabled:C&&h==="v2",searchFilter:r,setSearchFilter:i,paginationSetPage:()=>l.setPage(1),storageScope:"platform-cves",filterKind:"workload"}),B=h==="v2"?O:P,Ce=e.jsx(qe,{searchFilter:r,searchFilterConfig:Cs,defaultSearchFilterEntity:"CVE",cveStatusFilterField:"Cluster CVE Fixable",onFilterChange:($,k)=>{i($),a(Oe,k)},includeCveSeverityFilters:!1,prefixToolbarItems:B.prefixToolbarItem??void 0,appliedFilterSuffix:B.appliedFilterSuffix??void 0}),he=e.jsx(Rt,{entityTabs:["CVE","Cluster"],entityCounts:b,onChange:S});return e.jsxs(e.Fragment,{children:[F&&e.jsx(ss,{...F,onSuccess:($,k)=>{$==="SNOOZE"&&t({event:It,properties:{type:"PLATFORM",duration:k}}),s.cache.evict({fieldName:"platformCVEs"}),s.cache.evict({fieldName:"platformCVECount"}),s.cache.gc(),m.clear()},onClose:()=>L(null)}),e.jsx(de,{title:"Kubernetes Components Overview"}),e.jsx(j,{children:e.jsx(D,{alignItems:{default:"alignItemsCenter"},grow:{default:"grow"},children:e.jsxs(D,{direction:{default:"column"},grow:{default:"grow"},children:[e.jsx(K,{headingLevel:"h1",children:"Kubernetes components"}),e.jsx(Xe,{children:"Prioritize and manage scanned CVEs across clusters"})]})})}),e.jsx(j,{type:"tabs",children:e.jsx(rs,{attribute:fe,onSelectTab:_,searchFilter:r,tabContentId:"TODO"})}),h==="v2"&&O.wysiwygAlert&&e.jsx(j,{children:O.wysiwygAlert}),e.jsxs(j,{isFilled:!0,children:[e.jsx($t,{filterToolbar:Ce,entityToggleGroup:he,pagination:l,tableRowCount:n==="CVE"?b.CVE:b.Cluster,isFiltered:v,children:T&&e.jsx(qt,{align:{default:"alignEnd"},children:e.jsx(Dt,{toggleText:"Bulk actions",isDisabled:m.size===0,children:e.jsx(Ot,{onClick:()=>L({action:g?"UNSNOOZE":"SNOOZE",cveType:"CLUSTER_CVE",cves:Array.from(m.values())}),children:g?"Unsnooze CVEs":"Snooze CVEs"},"bulk-snooze-cve")})})}),n==="CVE"&&e.jsx(ps,{querySearchFilter:d,isFiltered:v,pagination:l,selectedCves:m,canSelectRows:T,createRowActions:E("CLUSTER_CVE",g?"UNSNOOZE":"SNOOZE"),sortOption:o,getSortParams:u,onClearFilters:V}),n==="Cluster"&&e.jsx(ls,{querySearchFilter:d,isFiltered:v,pagination:l,sortOption:o,getSortParams:u,onClearFilters:V})]}),B.modalsFragment]})}const ys=[N,X,J],fs={field:N,direction:"asc"},js=f`
    fragment AffectedClusterFragment on Cluster {
        id
        name
        type
        clusterVulnerabilities(query: $query) {
            fixedByVersion
        }
        status {
            orchestratorMetadata {
                version
            }
        }
    }
`;function gs({tableState:s,getSortParams:t,onClearFilters:a}){return e.jsxs(re,{borders:s.type==="COMPLETE",variant:"compact","aria-live":"polite","aria-busy":s.type==="LOADING"?"true":"false",children:[e.jsx(ae,{noWrap:!0,children:e.jsxs(q,{children:[e.jsx(y,{sort:t(N),children:"Cluster"}),e.jsx(y,{sort:t(X),children:"Cluster type"}),e.jsx(y,{children:"CVE status"}),e.jsx(y,{sort:t(J),children:"Kubernetes version"})]})}),e.jsx(ne,{tableState:s,colSpan:3,emptyProps:{message:"No clusters have been reported for this CVE"},filteredEmptyProps:{onClearFilters:a},renderer:({data:n})=>e.jsx(ie,{children:n.map(({id:r,name:i,type:l,clusterVulnerabilities:o,status:u})=>{var d;const x=Nt(o);return e.jsxs(q,{children:[e.jsx(p,{dataLabel:"Cluster",children:e.jsx(le,{to:oe("Cluster",r),children:e.jsx(wt,{position:"middle",content:i})})}),e.jsx(p,{dataLabel:"Cluster type",modifier:"nowrap",children:Ee(l)}),e.jsx(p,{dataLabel:"CVE status",children:e.jsx(Se,{isFixable:x})}),e.jsx(p,{dataLabel:"Kubernetes version",modifier:"nowrap",children:((d=u==null?void 0:u.orchestratorMetadata)==null?void 0:d.version)??"Unavailable"})]},r)})})})]})}const bs=f`
    ${js}
    query getAffectedClusters($query: String, $pagination: Pagination) {
        clusterCount(query: $query)
        clusters(query: $query, pagination: $pagination) {
            ...AffectedClusterFragment
        }
    }
`;function vs({query:s,...t}){var n,r,i;const a=I(bs,{variables:{query:s,pagination:ee(t)}});return{affectedClustersRequest:a,clusterCount:((n=a.data)==null?void 0:n.clusterCount)??0,clusterData:((r=a.data)==null?void 0:r.clusters)??((i=a.previousData)==null?void 0:i.clusters)}}const mt=f`
    fragment ClustersByType on PlatformCVECore {
        clusterCountByType {
            generic
            kubernetes
            openshift
            openshift4
        }
    }
`;function Es({clusterCounts:s}){const{generic:t=0,kubernetes:a=0,openshift:n=0,openshift4:r=0}=s??{},i=t+a+n+r;return e.jsxs(pe,{isCompact:!0,isFullHeight:!0,children:[e.jsx(xe,{children:"Clusters by type"}),e.jsx(me,{children:i>0?e.jsxs(ge,{children:[t>0&&e.jsxs(U,{span:12,className:"pf-v6-u-pt-xs",children:[t," Generic"]}),a>0&&e.jsxs(U,{span:12,className:"pf-v6-u-pt-xs",children:[a," Kubernetes"]}),n+r>0&&e.jsxs(U,{span:12,className:"pf-v6-u-pt-xs",children:[n+r," OpenShift"]})]}):e.jsx(ge,{children:e.jsx(U,{span:12,className:"pf-v6-u-pt-xs",children:"No affected clusters found"})})})]})}const Ss=f`
    ${mt}
    query getPlatformCVEMetadata($cveID: String!) {
        platformCVE(cveID: $cveID) {
            cve
            clusterVulnerability {
                link
                summary
            }
            firstDiscoveredTime
            ...ClustersByType
        }
    }
`;function Ts(s){return I(Ss,{variables:{cveID:s}})}function Fs({affectedClusterCount:s,totalClusterCount:t}){return e.jsxs(pe,{isCompact:!0,isFullHeight:!0,children:[e.jsx(xe,{children:"Affected clusters"}),e.jsx(me,{children:e.jsx(ge,{children:e.jsxs(U,{span:12,className:"pf-v6-u-pt-sm",children:[s," / ",t," affected clusters"]})})})]})}const Vs=f`
    ${mt}
    query getPlatformCVEMetadata($cveID: String!, $query: String!) {
        totalClusterCount: clusterCount
        clusterCount(query: $query)
        platformCVE(cveID: $cveID, subfieldScopeQuery: $query) {
            ...ClustersByType
        }
    }
`;function Ps({cveId:s,query:t}){return I(Vs,{variables:{cveID:s,query:t}})}const Ls=st("Platform",{entityTab:"CVE"}),Is=[Ze];function $s(){var h;const{analyticsTrack:s}=Te(),t=De(s),{searchFilter:a,setSearchFilter:n}=Fe(),r=Ie(a),i=Je(),l=decodeURIComponent(i.cveId),o=te({...r,"CVE ID":[l]}),{page:u,perPage:x,setPage:d,setPerPage:v}=Ve(Pe),{sortOption:g,getSortParams:T}=Le({sortFields:ys,defaultSortOption:fs,onSort:()=>d(1)}),{affectedClustersRequest:m,clusterData:F,clusterCount:L}=vs({query:o,page:u,perPage:x,sortOption:g}),E=Ts(l),S=Ps({cveId:l,query:o}),c=(h=E.data)==null?void 0:h.platformCVE,b=c==null?void 0:c.cve,V=$e(r),_=se({isLoading:m.loading,error:m.error,data:F,searchFilter:r});return e.jsxs(e.Fragment,{children:[e.jsx(de,{title:`Kubernetes components - Vulnerability ${b}`}),e.jsx(j,{type:"breadcrumb",children:e.jsxs(et,{children:[e.jsx(tt,{to:Ls,children:"Kubernetes components"}),e.jsx(rt,{isActive:!0,children:b??e.jsx(_e,{screenreaderText:"Loading CVE name",width:"200px"})})]})}),e.jsx(j,{children:c?e.jsxs(D,{direction:{default:"column"},alignItems:{default:"alignItemsFlexStart"},spaceItems:{default:"spaceItemsSm"},children:[e.jsx(K,{headingLevel:"h1",children:c.cve}),c.firstDiscoveredTime&&e.jsx(at,{numLabels:1,children:e.jsxs(be,{children:["First discovered in system:"," ",Ae(c.firstDiscoveredTime)]})}),e.jsx(A,{component:"p",children:c.clusterVulnerability.summary}),e.jsx(Bt,{children:e.jsx("a",{href:c.clusterVulnerability.link,target:"_blank",rel:"noopener noreferrer",children:c.clusterVulnerability.link})})]}):e.jsx(nt,{nameScreenreaderText:"Loading CVE name",metadataScreenreaderText:"Loading CVE metadata"})}),e.jsx(z,{component:"div"}),e.jsxs(j,{hasBodyWrapper:!1,isFilled:!0,children:[e.jsx(qe,{searchFilter:a,searchFilterConfig:Is,cveStatusFilterField:"Cluster CVE Fixable",onFilterChange:(C,P)=>{n(C),t(Oe,P)},includeCveSeverityFilters:!1}),e.jsxs(it,{error:S.error,isLoading:S.loading,children:[e.jsx(Z,{data:S.data,loadingText:"Loading affected nodes summary",renderer:({data:C})=>e.jsx(Fs,{affectedClusterCount:C.clusterCount,totalClusterCount:C.totalClusterCount})}),e.jsx(Z,{data:S.data,loadingText:"Loading affected nodes by CVE severity summary",renderer:({data:C})=>{var P;return e.jsx(Es,{clusterCounts:(P=C.platformCVE)==null?void 0:P.clusterCountByType})}})]}),e.jsx(z,{component:"div"}),e.jsxs(lt,{hasGutter:!0,className:"pf-v6-u-align-items-baseline",children:[e.jsx(Y,{isFilled:!0,children:e.jsxs(D,{alignItems:{default:"alignItemsCenter"},children:[e.jsxs(K,{headingLevel:"h2",children:[R(L,"cluster")," affected"]}),V&&e.jsx(ot,{})]})}),e.jsx(Y,{children:e.jsx(ct,{itemCount:L,perPage:x,page:u,onSetPage:(C,P)=>d(P),onPerPageSelect:(C,P)=>{v(P)}})})]}),e.jsx(gs,{tableState:_,getSortParams:T,onClearFilters:()=>{n({}),d(1)}})]})]})}const qs=f`
    fragment ClusterMetadata on Cluster {
        id
        name
        status {
            orchestratorMetadata {
                buildDate
                version
            }
        }
    }
`;function Ds({data:s}){var r,i,l,o;if(!s)return e.jsx(nt,{nameScreenreaderText:"Loading Cluster name",metadataScreenreaderText:"Loading Cluster metadata"});const t=(i=(r=s.status)==null?void 0:r.orchestratorMetadata)==null?void 0:i.buildDate,a=(o=(l=s.status)==null?void 0:l.orchestratorMetadata)==null?void 0:o.version,n=0+(t?1:0)+(a?1:0);return e.jsxs(D,{direction:{default:"column"},alignItems:{default:"alignItemsFlexStart"},children:[e.jsx(K,{headingLevel:"h1",className:"pf-v6-u-mb-sm",children:s.name}),n>0&&e.jsxs(at,{numLabels:n,children:[a&&e.jsxs(be,{children:["K8s version: ",a]}),t&&e.jsxs(be,{children:["Build date: ",Ae(t)]})]})]})}const Os=f`
    query getClusterExtendedDetails($id: ID!) {
        cluster(id: $id) {
            id
            status {
                providerMetadata {
                    aws {
                        __typename
                    }
                    azure {
                        __typename
                    }
                    google {
                        __typename
                    }
                    region
                }
                orchestratorMetadata {
                    version
                    buildDate
                }
            }
            type
            labels {
                key
                value
            }
        }
    }
`;function _s(s){return I(Os,{variables:{id:s}})}function Be(s){if(!s)return null;const{region:t}=s;return s.aws?`AWS ${t}`:s.azure?`Azure ${t}`:s.google?`GCP ${t}`:null}function As({clusterId:s}){var r,i,l,o,u,x;const{data:t,loading:a,error:n}=_s(s);return e.jsxs(e.Fragment,{children:[e.jsx(j,{component:"div",children:e.jsx(A,{component:"p",children:"View details about this cluster"})}),e.jsx(z,{component:"div"}),e.jsx(j,{isFilled:!0,children:n?e.jsx(ve,{children:e.jsx(ut,{title:"There was an error loading the cluster details",headingLevel:"h2",icon:pt,status:"danger",children:dt(n)})}):a?e.jsx(ve,{children:e.jsx(Mt,{size:"xl"})}):t&&e.jsxs(D,{direction:{default:"column"},spaceItems:{default:"spaceItemsXl"},children:[e.jsxs(kt,{columnModifier:{default:"1Col"},children:[e.jsxs(Q,{children:[e.jsx(G,{children:"Cluster type"}),e.jsx(W,{children:Ee(t.cluster.type)})]}),Be((r=t.cluster.status)==null?void 0:r.providerMetadata)&&e.jsxs(Q,{children:[e.jsx(G,{children:"Cloud provider"}),e.jsx(W,{children:Be((i=t.cluster.status)==null?void 0:i.providerMetadata)})]}),((o=(l=t.cluster.status)==null?void 0:l.orchestratorMetadata)==null?void 0:o.buildDate)&&e.jsxs(Q,{children:[e.jsx(G,{children:"Build date"}),e.jsx(W,{children:Ae(t.cluster.status.orchestratorMetadata.buildDate)})]}),((x=(u=t.cluster.status)==null?void 0:u.orchestratorMetadata)==null?void 0:x.version)&&e.jsxs(Q,{children:[e.jsx(G,{children:"K8s version"}),e.jsx(W,{children:t.cluster.status.orchestratorMetadata.version})]})]}),e.jsx(as,{toggleText:"Labels",labels:t.cluster.labels})]})})]})}const Rs=[ce,xt,ue,w],Ns={field:w,direction:"desc"},ws=f`
    fragment ClusterVulnerabilityFragment on ClusterVulnerability {
        id
        cve
        isFixable
        cvss
        scoreVersion
        vulnerabilityType
        summary
    }
`;function Bs({tableState:s,getSortParams:t,onClearFilters:a}){const r=Ue();return e.jsxs(re,{borders:s.type==="COMPLETE",variant:"compact","aria-live":"polite","aria-busy":s.type==="LOADING"?"true":"false",children:[e.jsx(ae,{noWrap:!0,children:e.jsxs(q,{children:[e.jsx(Ke,{}),e.jsx(y,{sort:t(ce),children:"CVE"}),e.jsx(y,{sort:t(xt),children:"CVE status"}),e.jsx(y,{sort:t(ue),children:"CVE type"}),e.jsx(y,{sort:t(w),children:"CVSS"})]})}),e.jsx(ne,{tableState:s,colSpan:5,emptyProps:{message:"No CVEs were detected for this cluster"},filteredEmptyProps:{onClearFilters:a},renderer:({data:i})=>i.map((l,o)=>{const{id:u,cve:x,isFixable:d,vulnerabilityType:v,cvss:g,scoreVersion:T,summary:m}=l,F=r.has(x);return e.jsxs(ie,{isExpanded:F,children:[e.jsxs(q,{children:[e.jsx(p,{expand:{rowIndex:o,isExpanded:F,onToggle:()=>r.toggle(x)}}),e.jsx(p,{dataLabel:"CVE",modifier:"nowrap",children:e.jsx(le,{to:oe("CVE",u),children:x})}),e.jsx(p,{dataLabel:"CVE status",children:e.jsx(Se,{isFixable:d})}),e.jsx(p,{dataLabel:"CVE type",children:ze(v)}),e.jsx(p,{dataLabel:"CVSS",children:e.jsx(Qe,{cvss:g,scoreVersion:T})})]}),e.jsxs(q,{isExpanded:F,children:[e.jsx(p,{}),e.jsx(p,{colSpan:4,children:e.jsx(Ge,{children:m?e.jsx(A,{component:"p",children:m}):e.jsx(We,{})})})]})]},x)})})]})}const Ms=f`
    ${ws}
    query getClusterVulnerabilities($id: ID!, $query: String!, $pagination: Pagination) {
        cluster(id: $id) {
            id
            clusterVulnerabilityCount(query: $query)
            clusterVulnerabilities(query: $query, pagination: $pagination) {
                ...ClusterVulnerabilityFragment
            }
        }
    }
`;function ks({clusterId:s,query:t,...a}){return I(Ms,{variables:{id:s,query:t,pagination:ee(a)}})}const Us="var(--pf-t--global--text--color--disabled)",Ks=[{status:"Fixable",Icon:Ut,text:({fixable:s})=>`${R(s,"vulnerability","vulnerabilities")} with available fixes`},{status:"Not fixable",Icon:Kt,text:({total:s,fixable:t})=>`${R(s-t,"vulnerability","vulnerabilities")} without fixes`}],zs={Fixable:"Fixable hidden","Not fixable":"Not fixable hidden"},Qs=f`
    fragment PlatformCveCountByStatusFragment on PlatformCVECountByFixability {
        total
        fixable
    }
`;function Gs({data:s,hiddenStatuses:t}){return e.jsxs(pe,{isCompact:!0,isFullHeight:!0,children:[e.jsx(xe,{children:"CVEs by status"}),e.jsx(me,{children:e.jsx(D,{direction:{default:"column"},children:Ks.map(({status:a,Icon:n,text:r})=>{const i=t.has(a);return e.jsxs(D,{spaceItems:{default:"spaceItemsSm"},alignItems:{default:"alignItemsCenter"},children:[e.jsx(n,{}),e.jsx(A,{component:"p",style:{color:i?Us:"inherit"},children:i?zs[a]:r(s)})]},a)})})})]})}const Ws=[{type:"OpenShift CVE",field:"openshift"},{type:"Kubernetes CVE",field:"kubernetes"},{type:"Istio CVE",field:"istio"}],Hs=f`
    fragment PlatformCveCountByTypeFragment on PlatformCVECountByType {
        kubernetes
        openshift
        istio
    }
`;function Zs({data:s}){return e.jsxs(pe,{isCompact:!0,isFullHeight:!0,children:[e.jsx(xe,{children:"CVEs by type"}),e.jsx(me,{children:e.jsx(D,{direction:{default:"column"},children:Ws.map(({type:t,field:a})=>e.jsx(Xe,{span:12,children:e.jsx(A,{component:"p",children:R(s[a],t)})},t))})})]})}const Ys=f`
    ${Qs}
    ${Hs}
    query getClusterVulnSummary($id: ID!, $query: String) {
        cluster(id: $id) {
            id
            platformCVECountByFixability(query: $query) {
                ...PlatformCveCountByStatusFragment
            }
            platformCVECountByType(query: $query) {
                ...PlatformCveCountByTypeFragment
            }
        }
    }
`;function Xs(s,t){return I(Ys,{variables:{id:s,query:t}})}const Js=[Ye];function er({clusterId:s}){var V,_;const{analyticsTrack:t}=Te(),a=De(t),{searchFilter:n,setSearchFilter:r}=Fe(),i=Ie(n),l=zt(i),o=$e(i),{page:u,perPage:x,setPage:d,setPerPage:v}=Ve(Pe),{sortOption:g,getSortParams:T}=Le({sortFields:Rs,defaultSortOption:Ns,onSort:()=>d(1)}),{data:m,loading:F,error:L}=ks({clusterId:s,query:l,page:u,perPage:x,sortOption:g}),E=Xs(s,l),S=Qt(i),c=((V=m==null?void 0:m.cluster)==null?void 0:V.clusterVulnerabilityCount)??0,b=se({isLoading:F,error:L,data:(_=m==null?void 0:m.cluster)==null?void 0:_.clusterVulnerabilities,searchFilter:i});return e.jsxs(e.Fragment,{children:[e.jsx(j,{component:"div",children:e.jsx(A,{component:"p",children:"Review and triage vulnerability data scanned on this cluster"})}),e.jsx(z,{component:"div"}),e.jsxs(j,{hasBodyWrapper:!1,isFilled:!0,children:[e.jsx(qe,{className:"pf-v6-u-pb-0 pf-v6-u-px-sm",searchFilter:n,searchFilterConfig:Js,cveStatusFilterField:"Cluster CVE Fixable",onFilterChange:(h,C)=>{r(h),a(Oe,C)},includeCveSeverityFilters:!1}),e.jsxs(it,{isLoading:E.loading,error:E.error,children:[e.jsx(Z,{loadingText:"Loading platform CVEs by status summary",data:E.data,renderer:({data:h})=>e.jsx(Gs,{data:h.cluster.platformCVECountByFixability,hiddenStatuses:S})}),e.jsx(Z,{loadingText:"Loading platform CVEs by type summary",data:E.data,renderer:({data:h})=>e.jsx(Zs,{data:h.cluster.platformCVECountByType})})]}),e.jsx(z,{component:"div"}),e.jsxs(lt,{hasGutter:!0,className:"pf-v6-u-align-items-baseline",children:[e.jsx(Y,{isFilled:!0,children:e.jsxs(D,{alignItems:{default:"alignItemsCenter"},children:[e.jsx(K,{headingLevel:"h2",className:"pf-v6-u-w-50",children:m?`${R(c,"result")} found`:e.jsx(_e,{screenreaderText:"Loading cluster vulnerability count"})}),o&&e.jsx(ot,{})]})}),e.jsx(Y,{children:e.jsx(ct,{itemCount:c,perPage:x,page:u,onSetPage:(h,C)=>d(C),onPerPageSelect:(h,C)=>{v(C)}})})]}),e.jsx(Bs,{tableState:b,getSortParams:T,onClearFilters:()=>{r({}),d(1)}})]})]})}const tr=st("Platform",{entityTab:"Cluster"}),sr=f`
    ${qs}
    query getClusterMetadata($id: ID!) {
        cluster(id: $id) {
            ...ClusterMetadata
        }
    }
`;function rr(){var u;const{clusterId:s}=Je(),{data:t,error:a}=I(sr,{variables:{id:s}}),[n,r]=He("detailsTab",je),i=je[0],l=je[1],o=((u=t==null?void 0:t.cluster)==null?void 0:u.name)??"";return e.jsxs(e.Fragment,{children:[e.jsx(de,{title:`Platform CVEs - Cluster ${o}`}),e.jsx(j,{type:"breadcrumb",children:e.jsxs(et,{children:[e.jsx(tt,{to:tr,children:"Clusters"}),e.jsx(rt,{isActive:!0,children:o??e.jsx(_e,{screenreaderText:"Loading cluster name",width:"200px"})})]})}),a?e.jsx(j,{hasBodyWrapper:!1,children:e.jsx(ve,{children:e.jsx(ut,{title:dt(a),headingLevel:"h2",icon:pt,status:"danger"})})}):e.jsxs(e.Fragment,{children:[e.jsx(j,{hasBodyWrapper:!1,children:e.jsx(Ds,{data:t==null?void 0:t.cluster})}),e.jsx(j,{type:"tabs",children:e.jsxs(Gt,{activeKey:n,onSelect:(x,d)=>{r(d)},usePageInsets:!0,mountOnEnter:!0,unmountOnExit:!0,children:[e.jsx(Re,{eventKey:i,title:i,children:e.jsx(er,{clusterId:s})}),e.jsx(Re,{eventKey:l,title:l,children:e.jsx(As,{clusterId:s})})]})})]})]})}function pr(){const{hasReadAccess:s}=Wt(),t=s("Integration");return e.jsxs(e.Fragment,{children:[t&&e.jsx(Ht,{}),e.jsxs(Zt,{children:[e.jsx(H,{index:!0,element:e.jsx(hs,{})}),e.jsx(H,{path:"cves/:cveId",element:e.jsx($s,{})}),e.jsx(H,{path:"clusters/:clusterId",element:e.jsx(rr,{})}),e.jsx(H,{path:"*",element:e.jsxs(j,{hasBodyWrapper:!1,children:[e.jsx(de,{title:"Platform CVEs - Not Found"}),e.jsx(Yt,{})]})})]})]})}export{pr as default};

var v=Object.defineProperty;var P=(e,n,t)=>n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var m=(e,n,t)=>P(e,typeof n!="symbol"?n+"":n,t);import{di as a,gb as c,e0 as w,e1 as T,t as i,bq as O,aV as $,aX as _,aY as E}from"./index-DvyM0vsR.js";import{r as x,R as g,k as A,g as d,f as D,u as k}from"./apollo-BxVF6eGb.js";import{B as L}from"./search-Db_6-UMK.js";import{P as B}from"./Progress-blnVe1oP.js";import{f as q,W as z}from"./URLSearchInput-2eM6ZJhV.js";import{s as F}from"./standards-BP0axI65.js";function S(){return S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},S.apply(this,arguments)}function M(e,n){if(e==null)return{};var t=Q(e,n),s,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}function Q(e,n){if(e==null)return{};var t={},s=Object.keys(e),r,o;for(o=0;o<s.length;o++)r=s[o],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}var I=x.forwardRef(function(e,n){var t=e.color,s=t===void 0?"currentColor":t,r=e.size,o=r===void 0?24:r,u=M(e,["color","size"]);return g.createElement("svg",S({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),g.createElement("polyline",{points:"1 4 1 10 7 10"}),g.createElement("polyline",{points:"23 20 23 14 17 14"}),g.createElement("path",{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}))});I.propTypes={color:a.string,size:a.oneOfType([a.string,a.number])};I.displayName="RefreshCcw";function N(e){var n=A(e.mutation,e),t=n[0],s=n[1];return e.children?e.children(t,s):null}N.propTypes={mutation:c.object.isRequired,variables:c.object,optimisticResponse:c.oneOfType([c.object,c.func]),refetchQueries:c.oneOfType([c.arrayOf(c.oneOfType([c.string,c.object])),c.func]),awaitRefetchQueries:c.bool,update:c.func,children:c.func.isRequired,onCompleted:c.func,onError:c.func,fetchPolicy:c.string};const te=d`
    query controls($groupBy: [ComplianceAggregation_Scope!], $where: String) {
        results: aggregatedResults(groupBy: $groupBy, unit: CHECK, where: $where) {
            results {
                aggregationKeys {
                    scope
                }
                keys {
                    ... on ComplianceStandardMetadata {
                        id
                        name
                    }
                    ... on ComplianceControlGroup {
                        id
                        name
                        description
                    }
                    ... on ComplianceControl {
                        id
                        name
                        description
                        standardId
                    }
                    ... on ComplianceDomain_Cluster {
                        id
                        name
                    }
                    ... on ComplianceDomain_Node {
                        id
                        name
                        clusterName
                    }
                    ... on Namespace {
                        metadata {
                            id
                            name
                            clusterName
                        }
                    }
                    __typename
                }
                numPassing
                numFailing
                numSkipped
            }
        }
    }
`,ne=d`
    query controls($groupBy: [ComplianceAggregation_Scope!], $where: String) {
        results: aggregatedResults(groupBy: $groupBy, unit: CHECK, where: $where) {
            results {
                aggregationKeys {
                    scope
                }
                keys {
                    ... on ComplianceStandardMetadata {
                        id
                    }
                    ... on ComplianceControlGroup {
                        id
                        name
                        description
                    }
                    ... on ComplianceControl {
                        id
                        name
                        description
                        standardId
                    }
                    ... on ComplianceDomain_Cluster {
                        id
                        name
                    }
                    ... on Namespace {
                        metadata {
                            id
                            name
                            clusterName
                        }
                    }
                    __typename
                }
                numPassing
                numFailing
                numSkipped
            }
        }
    }
`,se=e=>d`
    query complianceStandards_${e.replace(/\W/g,"_")}($groupBy: [ComplianceAggregation_Scope!], $where: String) {
        complianceStandards {
            id
            name
            controls {
                standardId
                groupId
                id
                name
                description
            }
            groups {
                standardId
                id
                name
                description
            }
        }
        results: aggregatedResults(groupBy: $groupBy, unit: CONTROL, where: $where) {
            results {
                aggregationKeys {
                    id
                    scope
                }
                numFailing
                numPassing
                numSkipped
                unit
            }
        }
        checks: aggregatedResults(groupBy: $groupBy, unit: CHECK, where: $where) {
            results {
                aggregationKeys {
                    id
                    scope
                }
                numFailing
                numPassing
                numSkipped
                unit
            }
        }
    }
`,K=d`
    mutation triggerScan($clusterId: ID!, $standardId: ID!) {
        complianceTriggerRuns(clusterId: $clusterId, standardId: $standardId) {
            id
            standardId
            clusterId
            state
            errorMessage
        }
    }
`,re=d`
    query getComplianceStandards {
        results: complianceStandards {
            id
            name
            scopes
        }
    }
`;class y extends x.Component{constructor(){super(...arguments);m(this,"onClick",t=>()=>{const{clusterId:s,standardId:r}=this.props;t({variables:{clusterId:s,standardId:r}}).then(()=>{this.props.onScanTriggered()}).catch(o=>{this.props.addToast(o.message),setTimeout(this.props.removeToast,2e3)})})}render(){const{className:t,text:s,textCondensed:r,textClass:o,loaderSize:u,scanInProgress:l}=this.props;return i.jsx(N,{mutation:K,children:(f,{loading:p})=>i.jsx(L,{dataTestId:"scan-button",className:t,text:s,textCondensed:r,textClass:o,icon:l?i.jsx(O,{size:"md",className:"mx-1 lg:ml-1 lg:mr-3"}):i.jsx(I,{size:"14",className:"bg-base-100 mx-1 lg:ml-1 lg:mr-3"}),onClick:this.onClick(f),isLoading:p,disabled:p,loaderSize:u})})}}m(y,"propTypes",{className:a.string,text:a.string.isRequired,textCondensed:a.string,textClass:a.string,clusterId:a.string,standardId:a.string,loaderSize:a.number,addToast:a.func.isRequired,removeToast:a.func.isRequired,onScanTriggered:a.func,scanInProgress:a.bool}),m(y,"defaultProps",{className:"btn btn-base h-10",clusterId:"*",textClass:null,textCondensed:null,standardId:"*",loaderSize:20,onScanTriggered:()=>{}});const H={addToast:T.addNotification,removeToast:T.removeOldestNotification},ae=w(null,H)(y);function oe({runs:e,...n}){const t=e.filter(o=>o.state!=="FINISHED").length,s=e.length-t,r=t===0?"Compliance scanning complete":"Compliance scanning in progress";return i.jsxs($,{...n,children:[i.jsx(_,{id:"compliance-scan-progress-title",children:r}),i.jsx(E,{children:i.jsx(B,{"aria-labelledby":"compliance-scan-progress-title",size:"sm",variant:t===0?"success":void 0,value:s,min:0,max:e.length,measureLocation:"outside",label:`${s} of ${e.length} runs`,valueText:`${s} of ${e.length} runs`})})]})}function C(e){return e.some(n=>n.state!=="FINISHED")}const W=d`
    query runStatuses($latest: Boolean) {
        complianceRunStatuses(latest: $latest) {
            runs {
                state
            }
        }
    }
`,R=1e4,G={latest:!0};function ie(e){const[n,t]=x.useState(!1),s=D(),{startPolling:r,stopPolling:o,error:u,data:l,refetch:f}=k(W,{variables:G,pollInterval:R,onCompleted:p,onError:j,errorPolicy:"all",notifyOnNetworkStatusChange:!0});function p(h){return C(h.complianceRunStatuses.runs)?t(!0):o(),s.refetchQueries({include:e})}function j(){o()}return{error:u,runs:(l==null?void 0:l.complianceRunStatuses.runs)??[],restartPolling:()=>f().then(({data:h})=>{C(h.complianceRunStatuses.runs)&&(t(!0),r(R))}),inProgressScanDetected:n,isCurrentScanIncomplete:C((l==null?void 0:l.complianceRunStatuses.runs)??[])}}const ce=({children:e,...n})=>i.jsx(q,{fetchPolicy:"cache-first",...n,children:t=>e(t)}),le={COMPLIANCE:{STATE:"Compliance State"},POLICY_STATUS:{CATEGORY:"Policy Status",VALUES:{PASS:"Pass",FAIL:"Fail"}}},b=({standardId:e,standardName:n,control:t,description:s,className:r})=>i.jsxs(z,{header:"Control details",bodyClassName:"flex-col",className:r,id:"control-details",children:[i.jsxs("div",{className:"flex flex-col justify-center p-4",children:[i.jsxs("div",{className:"pb-2",children:[i.jsx("span",{className:"font-700 pr-1",children:"Standard:"}),i.jsx("span",{"data-testid":"standard-name",children:F[e]||n})]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-700 pr-1",children:"Control:"}),i.jsx("span",{"data-testid":"control-name",children:t})]})]}),i.jsx("div",{className:"px-4 pb-4 leading-loose whitespace-pre-wrap",children:s})]});b.propTypes={standardId:a.string.isRequired,control:a.string.isRequired,description:a.string.isRequired,className:a.string,standardName:a.string};b.defaultProps={className:"",standardName:""};export{oe as C,te as L,ae as S,ce as a,se as b,re as c,le as d,b as e,ne as f,ie as u};

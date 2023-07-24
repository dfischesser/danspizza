import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <script type="text/javascript">
          !function(v,y,T){var S=v.location,k="script",D="instrumentationKey",C="ingestionendpoint",I="disableExceptionTracking",E="ai.device.",b="toLowerCase",w=(D[b](),"crossOrigin"),N="POST",e="appInsightsSDK",t=T.name||"appInsights",n=((T.name||v[e])&&(v[e]=t),v[t]||function(l){var u=!1,d=!1,g={initialize:!0,queue:[],sv:"6",version:2,config:l};function m(e,t){var n={ },a="Browser";return n[E+"id"]=a[b](),n[E+"type"]=a,n["ai.operation.name"]=S&&S.pathname||"_unknown_",n["ai.internal.sdkVersion"]="javascript:snippet_"+(g.sv||g.version),{time:(a=new Date).getUTCFullYear()+"-"+i(1+a.getUTCMonth())+"-"+i(a.getUTCDate())+"T"+i(a.getUTCHours())+":"+i(a.getUTCMinutes())+":"+i(a.getUTCSeconds())+"."+(a.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z",iKey:e,name:"Microsoft.ApplicationInsights."+e.replace(/-/g,"")+"."+t,sampleRate:100,tags:n,data:{baseData:{ver:2}}};function i(e){e = "" + e;return 1===e.length?"0"+e:e}}var e,n,f=l.url||T.src;function a(e){var t,n,a,i,o,s,r,c,p;u=!0,g.queue=[],d||(d=!0,i=f,r=(c=function(){var e,t={ },n=l.connectionString;if(n)for(var a=n.split(";"),i=0;i<a.length;i++){var o=a[i].split("=");2===o.length&&(t[o[0][b]()]=o[1])}return t[C]||(t[C]="https://"+((e=(n=t.endpointsuffix)?t.location:null)?e+".":"")+"dc."+(n||"services.visualstudio.com")),t}()).instrumentationkey||l[D]||"",c=(c=c[C])?c+"/v2/track":l.endpointUrl,(p=[]).push((t="SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details)",n=i,o=c,(s=(a=m(r,"Exception")).data).baseType="ExceptionData",s.baseData.exceptions=[{typeName:"SDKLoadFailed",message:t.replace(/\./g,"-"),hasFullStack:!1,stack:t+"\nSnippet failed to load ["+n+"] -- Telemetry is disabled\nHelp Link: https://go.microsoft.com/fwlink/?linkid=2128109\nHost: "+(S&&S.pathname||"_unknown_")+"\nEndpoint: "+o,parsedStack:[]}],a)),p.push((s=i,t=c,(o=(n=m(r,"Message")).data).baseType="MessageData",(a=o.baseData).message='AI (Internal): 99 message:"'+("SDK LOAD Failure: Failed to load Application Insights SDK script (See stack for details) ("+s+")").replace(/\"/g,"")+'"',a.properties={endpoint:t},n)),i=p,r=c,JSON&&((o=v.fetch)&&!T.useXhr?o(r,{method:N,body:JSON.stringify(i),mode:"cors"}):XMLHttpRequest&&((s=new XMLHttpRequest).open(N,r),s.setRequestHeader("Content-type","application/json"),s.send(JSON.stringify(i)))))}function i(e,t){d || setTimeout(function () { !t && g.core || a() }, 500)}f&&((n=y.createElement(k)).src=f,!(o=T[w])&&""!==o||"undefined"==n[w]||(n[w]=o),n.onload=i,n.onerror=a,n.onreadystatechange=function(e,t){"loaded" !== n.readyState && "complete" !== n.readyState || i(0, t)},e=n,T.ld<0?y.getElementsByTagName("head")[0].appendChild(e):setTimeout(function(){y.getElementsByTagName(k)[0].parentNode.appendChild(e)},T.ld||0));try{g.cookie = y.cookie}catch(h){ }function t(e){for(;e.length;)!function(t){g[t] = function () { var e = arguments; u || g.queue.push(function () { g[t].apply(g, e) }) }}(e.pop())}var s,r,o="track",c="TrackPage",p="TrackEvent",o=(t([o+"Event",o+"PageView",o+"Exception",o+"Trace",o+"DependencyData",o+"Metric",o+"PageViewPerformance","start"+c,"stop"+c,"start"+p,"stop"+p,"addTelemetryInitializer","setAuthenticatedUserContext","clearAuthenticatedUserContext","flush"]),g.SeverityLevel={Verbose:0,Information:1,Warning:2,Error:3,Critical:4},(l.extensionConfig||{ }).ApplicationInsightsAnalytics||{ });return!0!==l[I]&&!0!==o[I]&&(t(["_"+(s="onerror")]),r=v[s],v[s]=function(e,t,n,a,i){var o=r&&r(e,t,n,a,i);return!0!==o&&g["_"+s]({message:e,url:t,lineNumber:n,columnNumber:a,error:i,evt:v.event}),o},l.autoExceptionInstrumented=!0),g}(T.cfg));function a(){T.onInit && T.onInit(n)}(v[t]=n).queue&&0===n.queue.length?(n.queue.push(a),n.trackPageView({ })):a()}(window,document,{
            src: "https://js.monitor.azure.com/scripts/b/ai.2.min.js",
          // name: "appInsights",
          // ld: 0,
          // useXhr: 1,
          crossOrigin: "anonymous",
          // onInit: null,
          cfg: { // Application Insights Configuration
            connectionString: "InstrumentationKey=a30a70a3-608d-416a-9f96-872ec43a621a;IngestionEndpoint=https://centralus-2.in.applicationinsights.azure.com/;LiveEndpoint=https://centralus.livediagnostics.monitor.azure.com/"
        }});
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
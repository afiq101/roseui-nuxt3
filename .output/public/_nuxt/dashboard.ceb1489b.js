import{_ as L}from"./Breadcrumb.5e106003.js";import{p as m,s as v,i as R,o as M,b as k,j as t,e,w as s,u as a,k as w,F as A,r as F,t as _,y as O,x as I,U as N}from"./entry.5f4d3365.js";import{_ as $}from"./RsCard.a461e6bf.js";const E={class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6"},K={class:"summary-1 pt-5 pb-3 px-5 flex items-center gap-4"},U={class:"p-5 flex justify-center items-center bg-primary-100 rounded-2xl"},Y=e("div",{class:"flex-1 truncate"},[e("span",{class:"block font-semibold text-xl leading-tight"}," RM 100,000"),e("span",{class:"text-base font-semibold text-secondary"},"Total Revenues")],-1),q={class:"summary-2 pt-5 pb-3 px-5 flex items-center gap-4"},W={class:"p-5 flex justify-center items-center bg-indigo-100 rounded-2xl"},G=e("div",{class:"flex-1 truncate"},[e("span",{class:"block font-semibold text-xl leading-tight"}," 512"),e("span",{class:"text-base font-semibold text-secondary"},"Total Users")],-1),H={class:"summary-3 pt-5 pb-3 px-5 flex items-center gap-4"},J={class:"p-5 flex justify-center items-center bg-orange-100 rounded-2xl"},Q=e("div",{class:"flex-1 truncate"},[e("span",{class:"block font-semibold text-xl leading-tight"}," 20"),e("span",{class:"text-base font-semibold text-secondary"},"Total Products")],-1),X={class:"summary-4 pt-5 pb-3 px-5 flex items-center gap-4"},Z={class:"p-5 flex justify-center items-center bg-blue-100 rounded-2xl"},ee=e("div",{class:"flex-1 truncate"},[e("span",{class:"block font-semibold text-xl leading-tight"}," 2,452"),e("span",{class:"text-base font-semibold text-secondary"},"Total Viewers")],-1),te={class:"flex flex-col md:flex-row gap-x-6"},se={class:"w-12/2 md:w-8/12 flex flex-col"},ae={class:"flex items-center gap-x-4"},oe=["src"],le={class:"flex-1"},ne={class:"flex flex-col"},ie={class:"text-gray-900 dark:text-white font-semibold text-lg"},re={class:"text-gray-600 dark:text-gray-50 text-sm"},ce={class:"flex items-center p-4 rounded-full bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-900 shadow-md"},de={class:"w-12/2 md:w-4/12 flex flex-col"},ue=e("hr",{class:"my-4"},null,-1),me=e("p",{class:"text-xl py-5 font-medium"},"Products",-1),pe=["src"],he={class:"flex-1 flex items-center"},xe={class:"font-semibold text-lg leading-tight"},_e=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",-1),ve={__name:"dashboard",setup(fe){const f=m([]),g=m([]),y=m([]),b=m([]);var P=[47,45,54,38,56,24,65],C=[61,35,66,41,59,25,32],B=[25,18,36,41,43,35,14],D=[8,16,22,41,43,35,14];const T=[{name:"Ali",age:"25",city:"Kuala Lumpur",country:"Malaysia",totalPurchase:1524,purchase:23},{name:"Kamal",age:"45",city:"Pulau Pinang",country:"Malaysia",totalPurchase:643,purchase:14},{name:"Auni",age:"21",city:"Kelantan",country:"Malaysia",totalPurchase:543,purchase:12},{name:"Iqmal",age:"19",city:"Negeri Sembilan",country:"Malaysia",totalPurchase:258,purchase:6}],h=function(n){for(var i=n.slice(),r=i.length,l,o;r!==0;)o=Math.floor(Math.random()*r),r-=1,l=i[r],i[r]=i[o],i[o]=l;return i};f.value.push({name:"Revenues",data:h(P)}),g.value.push({name:"Users",data:h(C)}),y.value.push({name:"Products",data:h(B)}),b.value.push({name:"Viewers",data:h(D)});const x=v(()=>({chart:{type:"area",sparkline:{enabled:!0}},stroke:{curve:"smooth"},fill:{opacity:1},labels:[...Array(7).keys()].map(n=>`2022-06-0${n+1}`),xaxis:{type:"datetime"}})),z=m([44,55,67,83]),V=v(()=>({chart:{height:350,type:"radialBar"},plotOptions:{radialBar:{dataLabels:{style:{colors:"#9CA3AF"},name:{offsetY:30,fontSize:"18px"},value:{offsetY:-15,fontSize:"30px"},total:{show:!0,label:"Total",formatter:function(n){return 249}}}}},labels:["Product A","Product B","Product C","Product D"],stroke:{lineCap:"round"}})),j=m([{name:"Bill A",data:[...Array(12).keys()].map(n=>Math.round(Math.random()*100))},{name:"Bill B",data:[...Array(12).keys()].map(n=>Math.round(Math.random()*100))}]),S=v(()=>({chart:{height:350,type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:["#6366F1","#F97316"],yaxis:{labels:{style:{colors:"#9CA3AF",fontSize:"12px"}}},xaxis:{type:"datetime",categories:["2022-01-01","2022-02-01","2022-03-01","2022-04-01","2022-05-01","2022-06-01","2022-07-01","2022-08-01","2022-09-01","2022-10-01","2022-11-01","2022-12-01"],labels:{style:{colors:"#9CA3AF",fontSize:"14px",fontWeight:400},datetimeFormatter:{month:"MMM"}}},legend:{position:"top",horizontalAlign:"left",labels:{colors:"#9CA3AF",useSeriesColors:!1}},tooltip:{x:{format:"MMMM"}}}));return(n,i)=>{const r=L,l=I,o=R("VueApexCharts"),d=N,c=$;return M(),k("div",null,[t(r),e("div",E,[t(c,null,{default:s(()=>[e("div",K,[e("div",U,[t(l,{class:"text-primary-500",name:"ic:outline-attach-money"})]),Y]),t(d,null,{default:s(()=>[t(o,{width:"100%",height:"53",options:{...a(x),colors:["#F43F5E"],yaxis:{min:0,max:Math.max(...a(f)[0].data)+10}},series:a(f)},null,8,["options","series"])]),_:1})]),_:1}),t(c,null,{default:s(()=>[e("div",q,[e("div",W,[t(l,{class:"text-indigo-500",name:"ic:outline-account-circle"})]),G]),t(d,null,{default:s(()=>[t(o,{width:"100%",height:"53",options:{...a(x),colors:["#6366F1"],yaxis:{min:0,max:Math.max(...a(g)[0].data)+10}},series:a(g)},null,8,["options","series"])]),_:1})]),_:1}),t(c,null,{default:s(()=>[e("div",H,[e("div",J,[t(l,{class:"text-orange-500",name:"ic:outline-shopping-bag"})]),Q]),t(d,null,{default:s(()=>[t(o,{width:"100%",height:"53",options:{...a(x),colors:["#F97316"],yaxis:{min:0,max:Math.max(...a(y)[0].data)+10}},series:a(y)},null,8,["options","series"])]),_:1})]),_:1}),t(c,null,{default:s(()=>[e("div",X,[e("div",Z,[t(l,{class:"text-blue-500",name:"ic:outline-remove-red-eye"})]),ee]),t(d,null,{default:s(()=>[t(o,{width:"100%",height:"53",options:{...a(x),colors:["#3B82F6"],yaxis:{min:0,max:Math.max(...a(b)[0].data)+10}},series:a(b)},null,8,["options","series"])]),_:1})]),_:1})]),e("div",te,[e("div",se,[t(c,{class:"flex-1"},{header:s(()=>[w(" Transaction ")]),body:s(()=>[t(d,null,{default:s(()=>[t(o,{width:"100%",height:"300",name:"area",options:a(S),series:a(j)},null,8,["options","series"])]),_:1})]),_:1}),t(c,{class:"flex-1"},{header:s(()=>[w(" Referral")]),body:s(()=>[(M(),k(A,null,F(T,(u,p)=>e("div",{key:p,class:"flex justify-between items-center rounded-lg bg-gray-100 dark:bg-slate-700 p-5 first:mt-0 mt-3"},[e("div",ae,[e("img",{src:`https://avatars.dicebear.com/api/adventurer-neutral/${u.name}.svg`,class:"h-10 w-10 rounded-lg"},null,8,oe),e("div",le,[e("div",ne,[e("span",ie,_(u.name),1),e("span",re," RM"+_(parseFloat(u.totalPurchase).toFixed(2))+" | "+_(u.purchase)+" sold ",1)])])]),e("div",null,[e("button",ce,[t(l,{size:"20px",name:"ic:baseline-mail-outline"})])])])),64))]),_:1})]),e("div",de,[t(c,{class:"flex-1"},{header:s(()=>[w(" Monthly Target ")]),body:s(()=>[t(d,null,{default:s(()=>[t(o,{width:"100%",height:"300",name:"radialBar",options:a(V),series:a(z)},null,8,["options","series"])]),_:1}),ue,me,(M(),k(A,null,F(["A","B","C","D","E"],(u,p)=>e("div",{class:O(["flex item-center gap-x-4",{"mt-0":p===0,"mt-3":p!==0}]),key:p},[e("img",{src:`https://picsum.photos/id/${Math.round(Math.random()*100)}/200/300`,class:"h-20 w-20 object-cover rounded-lg"},null,8,pe),e("div",he,[e("div",null,[e("span",xe,"Product "+_(u),1),_e])])],2)),64))]),_:1})])])])}}};export{ve as default};
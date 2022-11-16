import{_ as Z}from"./Breadcrumb.5e106003.js";import{K as ee,L as te,p as d,s as P,B as K,C as se,i as ae,o as n,b as f,j as o,e,t as u,u as l,M as W,w as h,y as M,F as v,r as g,N as le,k as L,c as A,f as E,v as oe,x as ne}from"./entry.5f4d3365.js";import{_ as re}from"./RsButton.8c0cab6e.js";import{_ as ie}from"./RsCard.a461e6bf.js";import z from"./data.b5ed65c2.js";import ce from"./category.34740ef9.js";const de={class:"product-header mb-2 flex justify-between items-center"},ue={class:"ml-1 font-medium text-gray-500"},me={class:"filter-top-wrapper flex pb-4"},pe={class:"category-wrapper flex gap-x-4 pl-4"},fe=["onClick"],he={class:"flex items-center bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-700 w-10 h-10 rounded-lg mr-2"},_e=["src"],ve=e("div",{class:"filter-title mb-4"},[e("h3",{class:"flex items-center text-lg font-semibold"},"Search Filter")],-1),ge=e("span",{class:"font-semibold"},"Categories",-1),be=e("hr",{class:"mb-4"},null,-1),xe=e("span",{class:"font-semibold"},"Price Range",-1),ye={class:"flex items-center justify-center mt-4 gap-x-5"},we=e("div",null,"-",-1),ke=e("hr",{class:"my-4"},null,-1),Ce=e("span",{class:"font-semibold"},"Brand",-1),Ae=e("hr",{class:"my-4"},null,-1),Fe={class:"product-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5"},Se={class:"product-image relative h-50 rounded-lg"},Pe=["src","alt"],Me={key:0,class:"product-discount text-sm bg-primary-500 text-white absolute top-3 -right-2 px-2 py-1 rounded-md"},ze={class:"product-content-wrapper flex flex-col px-4 mb-4"},Ve={class:"product-title mt-4 h-12"},Be={class:"block text-base font-semibold line-clamp-1"},Le={class:"text-secondary line-clamp-1 text-sm"},$e={class:"product-content flex flex-col"},je={class:"product-rating flex items-center my-2"},De={class:"product-rating-sold ml-1"},Ne={class:"text-xs"},Ke={class:"product-price flex justify-between"},We={class:"truncate"},Ee={class:"text-sm text-primary-500"},He={class:"text-lg"},Ie={key:0,class:"text-sm line-through text-secondary mt-1"},Re={class:"action-button flex items-center gap-x-5"},Te={class:"icon-wrapper"},Ue={class:"pagination flex justify-center items-center pb-4 gap-x-1"},et={__name:"products",setup(qe){const H=ee().mobileWidth,{width:I}=te(),R=d(I),b=d(z),F=d(z.length),x=d(""),S=d(""),$=d(ce),r=d(!0),V=d("Featured"),c=d(1),y=d(6),T=d(3);async function U(a){await oe({path:"/apps/ecommerce/product-detail",query:{sku:a}})}const j=P(()=>{let a=[],s=0;return a=b.value.filter(m=>m.name.toLowerCase().includes(x.value.toLowerCase())).filter((m,p)=>{let i=(c.value-1)*y.value,_=c.value*y.value;if(s++,p>=i&&p<_)return!0}),F.value=s,a});K(S,a=>{a?(b.value=z,b.value=b.value.filter(s=>s.category===a)):b.value=z});const B=a=>parseFloat(a).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),q=a=>{if(a<1e3)return a;if(a>=1e3)return+(a/1e3).toFixed(1)+"K"},G=a=>{a.stopPropagation();const s=a.path[1];window.getComputedStyle(s).fill=="rgb(169, 169, 169)"||window.getComputedStyle(s).stroke=="rgb(169, 169, 169)"?(s.style.fill="#FF5A5F",s.style.stroke="#FF5A5F"):(s.style.fill="#A9A9A9",s.style.stroke="#A9A9A9")},D=P(()=>R.value>=H);K(D,a=>{a?r.value=!0:r.value=!1}),se(()=>{D.value||(r.value=!1)});const J=P(()=>Math.ceil(F.value/y.value)),O=a=>{c.value=a},Q=()=>{c.value*y.value<F.value&&c.value++},X=()=>{c.value>1&&c.value--},Y=P(()=>{let a=Math.ceil(F.value/y.value);const s=Math.min(T.value,a);let m=c.value-Math.floor(s/2);return m=Math.max(m,1),m=Math.min(m,a-s+1),[...Array(s)].map((p,i)=>i+m)});return(a,s)=>{const m=Z,p=ae("FormKit"),i=ne,_=re,N=ie;return n(),f("div",null,[o(m),e("div",de,[e("p",ue,u(l(j).length)+" results found ",1),o(p,{type:"select",modelValue:l(V),"onUpdate:modelValue":s[0]||(s[0]=t=>W(V)?V.value=t:null),options:["Featured","Highest Price","Lowest Price"],"outer-class":"mb-0"},null,8,["modelValue"])]),o(p,{modelValue:l(x),"onUpdate:modelValue":s[1]||(s[1]=t=>W(x)?x.value=t:null),placeholder:"Search for a products...",type:"search","inner-class":"border-0 rounded-md shadow-md shadow-slate-200 dark:shadow-slate-900"},null,8,["modelValue"]),e("div",me,[e("button",{class:"flex items-center rounded-lg py-2 px-4 bg-white dark:bg-slate-800 dark:text-gray-300 hover:bg-slate-200 shadow-md shadow-slate-200 dark:shadow-slate-900",onClick:s[2]||(s[2]=t=>l(r)?r.value=!1:r.value=!0)},[o(i,{size:"1.25rem",name:"ic:outline-filter-alt"})]),o(l(le),{style:{width:"100%"}},{default:h(()=>[e("div",pe,[(n(!0),f(v,null,g(l($),(t,w)=>(n(),f("button",{class:M(["flex items-center rounded-lg py-2 px-3 bg-white dark:bg-slate-800 dark:text-gray-300 hover:bg-slate-200 font-semibold text-sm shadow-md shadow-slate-200 dark:shadow-slate-900",{"bg-gray-200":l(S)===t.name}]),onClick:k=>S.value=t.name,key:w},[e("div",he,[e("img",{class:"h-full w-full object-scale-down",src:t.image},null,8,_e)]),e("span",null,u(t.name),1)],10,fe))),128))])]),_:1})]),e("div",{class:M(["filter-wrapper fixed md:relative top-0 right-0 float-none md:float-left w-64 mr-0 md:mr-6 z-50 md:z-0",{"filter-wrapper-show":l(r),"filter-wrapper-hide":!l(r)}])},[e("div",{class:M(["filter-overlay visible md:invisible",{show:l(r),hide:!l(r)}]),onClick:s[3]||(s[3]=t=>r.value=!1)},null,2),o(N,{class:"p-4 rounded-none md:rounded-lg max-h-screen md:max-h-fit overflow-auto"},{default:h(()=>[ve,ge,o(p,{type:"radio",options:[...l($).map(t=>t.name)],classes:{fieldset:"border-none !p-0 mt-4"}},null,8,["options"]),be,xe,e("div",ye,[o(p,{type:"number",placeholder:"Min","outer-class":"mb-0"}),we,o(p,{type:"number",placeholder:"Max","outer-class":"mb-0"})]),ke,Ce,o(p,{type:"radio",options:["Asus","Samsung","MSI","Apple","Playstation 5"],classes:{fieldset:"border-none !p-0 mt-4"}}),Ae,o(_,{class:"w-full",onClick:s[4]||(s[4]=t=>(S.value="",x.value=""))},{default:h(()=>[L("Clear Filter")]),_:1})]),_:1})],2),e("div",{class:M(["container-wrapper ml-0 xl:ml-70",{"xl:ml-0":!l(r)}])},[e("div",Fe,[(n(!0),f(v,null,g(l(j),(t,w)=>(n(),A(N,{class:"cursor-pointer hover:scale-105 transition-all",key:w,onClick:k=>U(t.sku)},{default:h(()=>[e("div",Se,[e("img",{class:"object-scale-down w-full h-full",src:t.images.length>0?t.images[0]:"",alt:t.name},null,8,Pe),t.discount&&t.discount!=0?(n(),f("span",Me,u(t.discount)+"% off ",1)):E("",!0)]),e("div",ze,[e("div",Ve,[e("span",Be,u(t.name),1),e("span",Le,u(t.description),1)]),e("div",$e,[e("div",je,[(n(!0),f(v,null,g(Math.floor(t.rating),(k,C)=>(n(),A(i,{name:"ic:baseline-star",class:"text-amber-400",key:C}))),128)),(n(!0),f(v,null,g(t.rating%1!=0?1:0,(k,C)=>(n(),A(i,{name:"ic:baseline-star-half",class:"text-amber-400",key:C}))),128)),(n(!0),f(v,null,g(5-Math.ceil(t.rating),(k,C)=>(n(),A(i,{name:"ic:baseline-star-border",class:"text-amber-400",key:C}))),128)),e("div",De,[e("span",Ne," ("+u(q(t.sold))+") ",1)])]),e("div",Ke,[e("div",We,[e("div",Ee,[L(u(t.currency),1),e("span",He,u(t.discountedPrice?B(t.discountedPrice):B(t.price)),1)]),t.discountedPrice?(n(),f("span",Ie,u(t.currency)+u(B(t.price)),1)):E("",!0)]),e("div",Re,[e("div",Te,[o(i,{size:"1.4rem",fill:"#A9A9A9",stroke:"#A9A9A9",name:"ph:shopping-cart-fill"})]),e("div",{class:"icon-wrapper",onClick:G},[o(i,{size:"1.4rem",fill:"#A9A9A9",stroke:"#A9A9A9",name:"ph:heart-fill"})])])])])])]),_:2},1032,["onClick"]))),128))]),e("div",Ue,[o(_,{variant:"primary-outline",class:"rounded-full !p-1 w-8 h-8",onClick:X,disabled:l(c)==1},{default:h(()=>[o(i,{name:"ic:round-chevron-left",size:"1rem"})]),_:1},8,["disabled"]),(n(!0),f(v,null,g(l(Y),(t,w)=>(n(),A(_,{variant:l(c)==t?"primary":"primary-outline",class:"rounded-full !p-1 w-8 h-8",key:w,onClick:k=>O(t)},{default:h(()=>[L(u(t),1)]),_:2},1032,["variant","onClick"]))),128)),o(_,{variant:"primary-outline",class:"rounded-full !p-1 w-8 h-8",onClick:Q,disabled:l(c)==l(J)},{default:h(()=>[o(i,{name:"ic:round-chevron-right",size:"1rem"})]),_:1},8,["disabled"])])],2)])}}};export{et as default};

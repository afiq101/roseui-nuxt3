import{i as l,o as r,b as _,e,j as t,w as s,k as o,l as d}from"./entry.5f4d3365.js";import{_ as i}from"./RsCard.a461e6bf.js";const m={class:"flex-none md:flex justify-center text-center items-center h-screen"},p={class:"w-full md:w-3/4 lg:w-1/2 xl:w-2/6"},u=e("h3",{class:"mb-4"},"Forgot Password",-1),h=e("p",{class:"text-slate-500 mb-6"}," Please input the correct email to reset the password. ",-1),x={class:"grid grid-cols-1"},f={class:"mt-3 text-center text-slate-500"},k={__name:"forgot-password-v2",setup(w){return(v,g)=>{const a=l("FormKit"),n=d,c=i;return r(),_("div",m,[e("div",p,[t(c,{class:"h-screen md:h-auto px-10 md:px-16 py-12 md:py-20 mb-0"},{default:s(()=>[u,h,e("div",x,[t(a,{label:"Email",type:"email","outer-class":"text-left"}),t(n,{to:"/auth/reset-password-v2"},{default:s(()=>[o(" > "),t(a,{type:"button","input-class":"w-full"},{default:s(()=>[o("Validate Email")]),_:1})]),_:1})]),e("p",f,[o(" Already have an account? "),t(n,{to:"/auth/login-v2",class:"text-primary-400 hover:underline"},{default:s(()=>[o("Login")]),_:1})])]),_:1})])])}}};export{k as default};
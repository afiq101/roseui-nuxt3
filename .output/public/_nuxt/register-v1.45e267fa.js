import{i as c,o as n,b as i,e,j as t,w as l,k as o,l as r}from"./entry.5f4d3365.js";import{_ as d}from"./login.c5a26381.js";const _={class:"flex-none lg:flex justify-center h-screen"},m={class:"flex-auto w-full md:w-full lg:w-5/12 bg-white dark:bg-slate-800"},u={class:"flex h-screen items-start md:items-center justify-start md:justify-center"},p={class:"w-full md:w-8/12 lg:w-full px-10 md:px-16 py-12 md:py-20"},f=e("div",{class:"text-center"},null,-1),h=e("h3",{class:"mb-5"},"Sign Up",-1),x=e("p",{class:"text-slate-500 mb-5"}," Please fill in the form to create an account. ",-1),w={class:"grid grid-cols-1"},b=e("a",{class:"text-primary-400 hover:underline ml-1"},"Term and Services",-1),g={class:"mt-3 text-center text-slate-500"},v=e("div",{class:"absolute bottom-5 left-5 text-xs text-slate-400"}," \xA9 Rose UI 2022 ",-1),y=e("div",{class:"flex-auto w-full lg:w-7/12 m-auto hidden md:block"},[e("div",{class:"flex justify-center items-center"},[e("img",{class:"w-96",src:d})])],-1),S={__name:"register-v1",setup(k){return(j,N)=>{const s=c("FormKit"),a=r;return n(),i("div",_,[e("div",m,[e("div",u,[e("div",p,[f,h,x,e("div",w,[t(s,{label:"Username",type:"text"}),t(s,{label:"Email",type:"email"}),t(s,{label:"Password",type:"password"}),t(s,{label:"Re-enter Password",type:"password"}),t(s,{type:"checkbox",label:"agreement"},{label:l(()=>[o("I agree to the "),b]),_:1}),t(a,{to:"/"},{default:l(()=>[t(s,{type:"button","input-class":"w-full"},{default:l(()=>[o("Sign up")]),_:1})]),_:1})]),e("p",g,[o(" Already have an account? "),t(a,{to:"/auth/login-v1",class:"text-primary-400 hover:underline"},{default:l(()=>[o("Login")]),_:1})])])]),v]),y])}}};export{S as default};

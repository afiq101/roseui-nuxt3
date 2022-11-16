import{_ as V}from"./Breadcrumb.5e106003.js";import{p as d,C as $,o as m,c as v,w as e,u as l,b as f,y as R,m as N,e as a,j as t,f as T,ah as b,x as j,i as H,D as U,k as s,E as k,Y as A,M as z,U as E}from"./entry.5f4d3365.js";import{_ as F}from"./RsCard.a461e6bf.js";import{_ as K}from"./RsButton.8c0cab6e.js";const M={__name:"RsAlert",props:{variant:{type:String,default:"primary"},dismissible:{type:Boolean,default:!1},show:{type:Boolean,default:!0},autoDismiss:{type:Boolean,default:!1},timer:{type:Number,default:1e3}},setup(i){const n=i,r=d(n.show),p=()=>{setTimeout(()=>{r.value=!1},n.timer)};return $(()=>{n.autoDismiss&&p()}),(c,_)=>{const g=j;return m(),v(b,{name:"fade-up"},{default:e(()=>[l(r)?(m(),f("div",{key:0,class:R(["visible flex items-center justify-between w-100 py-2 px-3 rounded-lg",{"bg-blue-100  text-blue-500  ":i.variant==="info","bg-primary-100  text-primary-500 ":i.variant==="primary","bg-green-100  text-green-500  ":i.variant==="success","bg-orange-100  text-orange-500  ":i.variant==="warning","bg-red-100  text-red-500  ":i.variant==="danger"}])},[N(c.$slots,"default"),a("button",{onClick:_[0]||(_[0]=o=>r.value=!1)},[t(g,{name:"ic:baseline-close",size:"14"})])],2)):T("",!0)]),_:3})}}},Y=a("h5",null,"Default Alert",-1),I=a("p",{class:"mb-2"},[s("Use the "),a("code",null,"rs-alert"),s(" to show alert.")],-1),L={class:"flex justify-end"},O=a("pre",{class:"language-html shadow-none"},[s("            "),a("code",null,`
              <template> 
                <rs-alert variant="primary">Hi, this is a primary alert!</rs-alert>
                <rs-alert variant="info">Hi, this is an info alert!</rs-alert>
                <rs-alert variant="success">Hi, this is a success alert!</rs-alert>
                <rs-alert variant="warning">Hi, this is a warning alert!</rs-alert>
                <rs-alert variant="danger">Hi, this is a danger alert!</rs-alert>
              </template>

              <script> 
                import RsAlert from "@/components/Alert.vue";

                export default {
                  components: {
                    RsAlert,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),s(`
          `)],-1),q=a("h5",null,"Auto Dimissal",-1),G=a("p",{class:"mb-2"},[s(" Use the "),a("code",null,"auto-dismiss"),s(" prop to auto dimiss the alert. The default timer is 1000ms. You can change the timer by passing a value to the "),a("code",null,"timer"),s(" prop. ")],-1),J={class:"flex items-center gap-x-2"},P={class:"flex justify-end"},Q=a("pre",{class:"language-html shadow-none"},[s("            "),a("code",null,`
              <template> 
                <rs-alert auto-dismiss :timer="1000">Hi, this is an auto dismissable alert!</rs-alert>
              </template>

              <script> 
                import RsAlert from "@/components/Alert.vue";

                export default {
                  components: {
                    RsAlert,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),s(`
          `)],-1),te={__name:"alert",setup(i){const n=d(!1),r=d(!1),p=d(!1),c=d(1e3),_=()=>{p.value=!0};return(g,o)=>{const B=V,u=M,y=H("SimpleBar"),x=E,w=F,D=H("FormKit"),S=K,C=U("highlight");return m(),f("div",null,[t(B),t(w,null,{header:e(()=>[Y]),body:e(()=>[I,t(u,{variant:"primary",class:"mb-4"},{default:e(()=>[s("Hi, this is a primary alert!")]),_:1}),t(u,{variant:"info",class:"mb-4"},{default:e(()=>[s("Hi, this is an info alert!")]),_:1}),t(u,{variant:"success",class:"mb-4"},{default:e(()=>[s("Hi, this is a success alert!")]),_:1}),t(u,{variant:"warning",class:"mb-4"},{default:e(()=>[s("Hi, this is a warning alert!")]),_:1}),t(u,{variant:"danger",class:"mb-4"},{default:e(()=>[s("Hi, this is a danger alert!")]),_:1}),a("div",L,[a("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:o[0]||(o[0]=h=>l(n)?n.value=!1:n.value=!0)}," Show Code ")]),t(x,null,{default:e(()=>[t(b,{name:"fade"},{default:e(()=>[k((m(),f("div",null,[t(y,{style:{height:"400px"}},{default:e(()=>[O]),_:1})])),[[A,l(n)],[C]])]),_:1})]),_:1})]),_:1}),t(w,null,{header:e(()=>[q]),body:e(()=>[G,l(p)?(m(),v(u,{key:1,variant:"primary",class:"mb-4","auto-dismiss":"",timer:l(c)},{default:e(()=>[s("Hi, this is auto dismiss alert!")]),_:1},8,["timer"])):(m(),v(u,{key:0,variant:"primary",class:"mb-4"},{default:e(()=>[s("Hi, this is not auto dismiss alert!")]),_:1})),a("div",J,[t(D,{type:"number",name:"timer",value:"1000",step:"100",modelValue:l(c),"onUpdate:modelValue":o[1]||(o[1]=h=>z(c)?c.value=h:null),classes:{outer:"mb-0",inner:"!mb-0"}},null,8,["modelValue"]),t(S,{onClick:_},{default:e(()=>[s(" Set Timer")]),_:1})]),a("div",P,[a("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:o[2]||(o[2]=h=>l(r)?r.value=!1:r.value=!0)}," Show Code ")]),t(x,null,{default:e(()=>[t(b,{name:"fade"},{default:e(()=>[k((m(),f("div",null,[t(y,{style:{height:"400px"}},{default:e(()=>[Q]),_:1})])),[[A,l(r)],[C]])]),_:1})]),_:1})]),_:1})])}}};export{te as default};

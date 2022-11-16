import{_ as L}from"./Breadcrumb.5e106003.js";import{al as N,E as C,Y as j,u as t,o as y,b as v,m as F,am as O,p as u,an as K,c as q,w as i,e as d,y as w,F as J,r as M,t as P,U as z,i as D,D as W,j as n,k as l,ah as $,M as V}from"./entry.5f4d3365.js";import{_ as Y}from"./RsCard.a461e6bf.js";const A={class:"tab-pane py-4 px-4"},G={__name:"RsTabItem",props:{title:{type:String,required:!0},active:{type:Boolean,default:!1}},setup(e){const m=N("selectedTitle");return(b,a)=>C((y(),v("div",A,[F(b.$slots,"default")],512)),[[j,t(m)===e.title]])}},H=["onClick"],Q={__name:"RsTab",props:{variant:{type:String,default:"primary"},type:{type:String,default:"default"},vertical:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justify:{type:String,default:"left"}},setup(e){const m=O(),b=u(m.default().map(c=>c.props)),a=u(b.value[0].title);return b.value.forEach(c=>{typeof c.active<"u"&&(a.value=c.title)}),K("selectedTitle",a),(c,h)=>{const g=z;return y(),q(g,null,{default:i(()=>[d("div",{class:w(["tab rounded-md",{"flex flex-col md:flex-row":e.vertical,"shadow-md pt-4":e.type==="card"&&!e.vertical,"shadow-md":e.type==="card"&&e.vertical,"bg-primary-400":e.type==="card"&&e.variant==="primary","bg-secondary":e.type==="card"&&e.variant==="secondary","bg-success":e.type==="card"&&e.variant==="success","bg-danger":e.type==="card"&&e.variant==="danger","bg-warning":e.type==="card"&&e.variant==="warning","bg-info":e.type==="card"&&e.variant==="info"}])},[d("ul",{class:w(["flex flex-wrap list-none pl-0",{"mx-4":e.type==="card"&&!e.vertical,"mx-4 py-0 pt-4 md:py-4":e.type==="card"&&e.vertical,"flex-row md:flex-col gap-2":e.vertical,"flex-1":e.vertical&&e.fill}])},[(y(!0),v(J,null,M(t(b),(r,x)=>(y(),v("li",{class:w(["cursor-pointer",{"flex-1 w-full":e.fill,"px-6":e.type==="border","hover:border hover:border-b-0 rounded-t-md":e.type==="border"&&!e.vertical,"border rounded-t-md border-b-0":t(a)===r.title&&e.type==="border"&&!e.vertical,"hover:border hover:border-r-0 rounded-l-md":e.type==="border"&&e.vertical,"border rounded-t-md rounded-bl-none md:rounded-r-none md:rounded-l-md border-r border-b-0 md:border-b md:border-r-0":t(a)===r.title&&e.type==="border"&&e.vertical,"hover:border-primary-400 ":e.type==="border"&&e.variant=="primary","hover:border-secondary ":e.type==="border"&&e.variant=="secondary","hover:border-info ":e.type==="border"&&e.variant=="info","hover:border-success ":e.type==="border"&&e.variant=="success","hover:border-warning ":e.type==="border"&&e.variant=="warning","hover:border-danger ":e.type==="border"&&e.variant=="danger","border-primary-400 text-primary-400":t(a)===r.title&&e.type==="border"&&e.variant=="primary","border-secondary text-secondary":t(a)===r.title&&e.type==="border"&&e.variant=="secondary","border-info text-info":t(a)===r.title&&e.type==="border"&&e.variant=="info","border-success text-success":t(a)===r.title&&e.type==="border"&&e.variant=="success","border-warning text-warning":t(a)===r.title&&e.type==="border"&&e.variant=="warning","border-danger text-danger":t(a)===r.title&&e.type==="border"&&e.variant=="danger"}]),role:"presentation",key:x,onClick:U=>a.value=r.title},[d("a",{class:w(["nav-link block font-medium text-base leading-tight capitalize border-x-0 border-t-0 py-3",{"hover:border-b-2 mx-2 px-4":e.type==="default"&&!e.vertical,"hover:border-l-2 mx-2 px-4":e.type==="default"&&e.vertical,"border-b-2":t(a)===r.title&&e.type==="default"&&!e.vertical,"border-l-2":t(a)===r.title&&e.type==="default"&&e.vertical,"hover:border-primary-400 hover:text-primary-400":e.type==="default"&&e.variant=="primary","hover:border-secondary hover:text-secondary":e.type==="default"&&e.variant=="secondary","hover:border-info hover:text-info":e.type==="default"&&e.variant=="info","hover:border-success hover:text-success":e.type==="default"&&e.variant=="success","hover:border-warning hover:text-warning":e.type==="default"&&e.variant=="warning","hover:border-danger hover:text-danger":e.type==="default"&&e.variant=="danger","text-primary-400 border-primary-400":t(a)===r.title&&e.type==="default"&&e.variant=="primary","text-secondary border-secondary":t(a)===r.title&&e.type==="default"&&e.variant=="secondary","text-info border-info":t(a)===r.title&&e.type==="default"&&e.variant=="info","text-success border-success":t(a)===r.title&&e.type==="default"&&e.variant=="success","text-warning border-warning":t(a)===r.title&&e.type==="default"&&e.variant=="warning","text-danger border-danger":t(a)===r.title&&e.type==="default"&&e.variant=="danger","px-5 mx-1 text-white rounded-t-md":e.type==="card"&&!e.vertical,"px-5 my-0 mb:my-1 mb:px-0 text-white rounded-bl-none rounded-t-md md:rounded-tr-none md:rounded-l-md":e.type==="card"&&e.vertical,"bg-primary-300":e.type==="card"&&e.variant=="primary","bg-gray-300":e.type==="card"&&e.variant=="secondary","bg-blue-300":e.type==="card"&&e.variant=="info","bg-green-300":e.type==="card"&&e.variant=="success","bg-orange-300":e.type==="card"&&e.variant=="warning","bg-red-300":e.type==="card"&&e.variant=="danger","!bg-white text-primary-300":t(a)===r.title&&e.type==="card"&&e.variant=="primary","!bg-white text-gray-300":t(a)===r.title&&e.type==="card"&&e.variant=="secondary","!bg-white text-blue-300":t(a)===r.title&&e.type==="card"&&e.variant=="info","!bg-white text-green-300":t(a)===r.title&&e.type==="card"&&e.variant=="success","!bg-white text-orange-300":t(a)===r.title&&e.type==="card"&&e.variant=="warning","!bg-white text-red-300":t(a)===r.title&&e.type==="card"&&e.variant=="danger","w-23/24":e.fill,"flex flex-wrap justify-start":e.justify=="left","flex flex-wrap justify-center":e.justify=="center","flex flex-wrap justify-end":e.justify=="right"}])},P(r.title),3)],10,H))),128))],2),d("div",{class:w(["tab-content bg-white dark:bg-slate-800",{"flex-grow":e.vertical&&!e.fill,"flex-1":e.vertical&&e.fill,"border rounded-b-md":e.type==="border"&&!e.vertical,"border rounded-md rounded-l-none":e.type==="border"&&e.vertical,"border-primary-400":e.type==="border"&&e.variant==="primary","border-secondary":e.type==="border"&&e.variant==="secondary","border-info":e.type==="border"&&e.variant==="info","border-success":e.type==="border"&&e.variant==="success","border-warning":e.type==="border"&&e.variant==="warning","border-danger":e.type==="border"&&e.variant==="danger"}])},[F(c.$slots,"default")],2)],2)]),_:3})}}},X=d("p",{class:"mb-4"},[l(" Use the "),d("code",null,"rs-tab"),l(" component to create a tabbed interface. "),d("code",null,"rs-tab-item"),l(" is used to create each tab. The tabs are rendered as a list of links. The selected tab is styled differently to indicate it is active. ")],-1),Z={class:"flex justify-end"},p={class:"z-0"},_=d("pre",{class:"language-html shadow-none"},[l("            "),d("code",null,`
              <template> 
                <rs-tab>
                  <rs-tab-item title="Tab 1"> Tab 1 </rs-tab-item>
                  <rs-tab-item title="Tab 2"> Tab 2 </rs-tab-item>
                  <rs-tab-item title="Tab 3"> Tab 3 </rs-tab-item>
                </rs-tab>
              </template>

              <script> 
                import RsTab from "@/components/Tab.vue";
                import RsTabItem from "@/components/TabItem.vue";

                export default {
                  components: {
                    RsTab,
                    RsTabItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),l(`
          `)],-1),ee=d("p",{class:"mb-4"},[l(" Use props "),d("code",null,"vertical"),l(" to create a vertical tabbed interface. ")],-1),te={class:"flex justify-end"},ae={class:"z-0"},ne=d("pre",{class:"language-html shadow-none"},[l("            "),d("code",null,`
              <template> 
                <rs-tab vertical>
                  <rs-tab-item title="Tab 1"> Tab 1 </rs-tab-item>
                  <rs-tab-item title="Tab 2"> Tab 2 </rs-tab-item>
                  <rs-tab-item title="Tab 3"> Tab 3 </rs-tab-item>
                </rs-tab>
              </template>

              <script> 
                import RsTab from "@/components/Tab.vue";
                import RsTabItem from "@/components/TabItem.vue";

                export default {
                  components: {
                    RsTab,
                    RsTabItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),l(`
          `)],-1),re=d("p",{class:"mb-4"},[l(" The "),d("code",null,"rs-tab"),l(" can be styled using the following props "),d("code",null,"variant"),l(" and "),d("code",null,"type"),l(". The "),d("code",null,"type"),l(" prop can be used to create a card and border style tab. The "),d("code",null,"variant"),l(" prop can be used to change the color of the tab. ")],-1),le={class:"flex flex-wrap gap-x-5"},ie={class:"flex justify-end"},de={class:"z-0"},oe=d("pre",{class:"language-html shadow-none"},[l("            "),d("code",null,`
              <template> 
                <rs-tab 
                    variant="primary|secondary|info|success|warning|danger" 
                    type="default|border|card"
                    justify="left|center|right"
                    fill
                    vertical>
                  <rs-tab-item title="Tab 1"> Tab 1 </rs-tab-item>
                  <rs-tab-item title="Tab 2"> Tab 2 </rs-tab-item>
                  <rs-tab-item title="Tab 3"> Tab 3 </rs-tab-item>
                </rs-tab>
              </template>

              <script> 
                import RsTab from "@/components/Tab.vue";
                import RsTabItem from "@/components/TabItem.vue";

                export default {
                  components: {
                    RsTab,
                    RsTabItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),l(`
          `)],-1),fe={__name:"tab",setup(e){const m=u(!1),b=u(!1),a=u(!1),c=u(!1),h=u("default"),g=u("primary"),r=u(!1),x=u("left"),U=[{label:"Primary",value:"primary"},{label:"Secondary",value:"secondary"},{label:"Success",value:"success"},{label:"Danger",value:"danger"},{label:"Warning",value:"warning"},{label:"Info",value:"info"}];return(se,o)=>{const E=L,f=G,R=Q,S=D("SimpleBar"),k=z,B=Y,T=D("FormKit"),I=W("highlight");return y(),v("div",null,[n(E),n(B,null,{header:i(()=>[l(" Default ")]),body:i(()=>[X,n(R,null,{default:i(()=>[n(f,{title:"Tab 1"},{default:i(()=>[l(" Tab 1 ")]),_:1}),n(f,{title:"Tab 2"},{default:i(()=>[l(" Tab 2 ")]),_:1}),n(f,{title:"Tab 3"},{default:i(()=>[l(" Tab 3 ")]),_:1})]),_:1}),d("div",Z,[d("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:o[0]||(o[0]=s=>t(m)?m.value=!1:m.value=!0)}," Show Code ")]),n(k,null,{default:i(()=>[n($,{name:"fade"},{default:i(()=>[C((y(),v("div",p,[n(S,{style:{height:"400px"}},{default:i(()=>[_]),_:1})])),[[j,t(m)],[I]])]),_:1})]),_:1})]),_:1}),n(B,null,{header:i(()=>[l(" Vertical Tab ")]),body:i(()=>[ee,n(R,{vertical:""},{default:i(()=>[n(f,{title:"Tab 1"},{default:i(()=>[l(" Tab 1 ")]),_:1}),n(f,{title:"Tab 2"},{default:i(()=>[l(" Tab 2 ")]),_:1}),n(f,{title:"Tab 3"},{default:i(()=>[l(" Tab 3 ")]),_:1})]),_:1}),d("div",te,[d("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:o[1]||(o[1]=s=>t(b)?b.value=!1:b.value=!0)}," Show Code ")]),n(k,null,{default:i(()=>[n($,{name:"fade"},{default:i(()=>[C((y(),v("div",ae,[n(S,{style:{height:"400px"}},{default:i(()=>[ne]),_:1})])),[[j,t(b)],[I]])]),_:1})]),_:1})]),_:1}),n(B,null,{header:i(()=>[l(" Styling ")]),body:i(()=>[re,d("div",le,[n(T,{label:"Variant",type:"radio",modelValue:t(g),"onUpdate:modelValue":o[2]||(o[2]=s=>V(g)?g.value=s:null),options:U,classes:{options:"flex flex-wrap gap-4 pt-2",fieldset:"px-4 py-0 max-w-full"}},null,8,["modelValue"]),n(T,{modelValue:t(h),"onUpdate:modelValue":o[3]||(o[3]=s=>V(h)?h.value=s:null),type:"radio",label:"Type",options:[{label:"Default",value:"default"},{label:"Border",value:"border"},{label:"Card",value:"card"}],classes:{options:"flex flex-wrap gap-4 pt-2",fieldset:"px-4 py-0 max-w-full"}},null,8,["modelValue"]),n(T,{modelValue:t(c),"onUpdate:modelValue":o[4]||(o[4]=s=>V(c)?c.value=s:null),type:"radio",label:"Vertical",options:[{label:"False",value:!1},{label:"True",value:!0}],classes:{options:"flex flex-wrap gap-4 pt-2",fieldset:"px-4 py-0 max-w-full"}},null,8,["modelValue"]),n(T,{modelValue:t(r),"onUpdate:modelValue":o[5]||(o[5]=s=>V(r)?r.value=s:null),type:"radio",label:"Fill",options:[{label:"False",value:!1},{label:"True",value:!0}],classes:{options:"flex flex-wrap gap-4 pt-2",fieldset:"px-4 py-0 max-w-full"}},null,8,["modelValue"]),n(T,{modelValue:t(x),"onUpdate:modelValue":o[6]||(o[6]=s=>V(x)?x.value=s:null),type:"radio",label:"Justify",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],classes:{options:"flex flex-wrap gap-4 pt-2",fieldset:"px-4 py-0 max-w-full"}},null,8,["modelValue"])]),n(R,{variant:t(g),type:t(h),fill:t(r),justify:t(x),vertical:t(c)},{default:i(()=>[n(f,{title:"Tab 1"},{default:i(()=>[l(" Tab 1 ")]),_:1}),n(f,{title:"Tab 2"},{default:i(()=>[l(" Tab 2 ")]),_:1}),n(f,{title:"Tab 3"},{default:i(()=>[l(" Tab 3 ")]),_:1})]),_:1},8,["variant","type","fill","justify","vertical"]),d("div",ie,[d("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:o[7]||(o[7]=s=>t(a)?a.value=!1:a.value=!0)}," Show Code ")]),n(k,null,{default:i(()=>[n($,{name:"fade"},{default:i(()=>[C((y(),v("div",de,[n(S,{style:{height:"400px"}},{default:i(()=>[oe]),_:1})])),[[j,t(a)],[I]])]),_:1})]),_:1})]),_:1})])}}};export{fe as default};

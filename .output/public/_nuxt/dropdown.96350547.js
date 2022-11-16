import{_ as I}from"./Breadcrumb.5e106003.js";import{_ as R,a as S}from"./RsDropdown.85c8f69a.js";import{p as f,i as C,D as z,o as l,b as p,j as o,w as n,k as t,e as d,u as s,ah as _,E as c,Y as O,U as j}from"./entry.5f4d3365.js";import{_ as k}from"./RsCard.a461e6bf.js";const T=d("p",{class:"mb-2"},[t("Use the "),d("code",null,"rs-dropdown"),t(" to show alert.")],-1),P={class:"flex flex-wrap items-center justify-start gap-x-6"},B={class:"flex justify-end"},W={class:"z-0"},$=d("pre",{class:"language-html shadow-none"},[t("            "),d("code",null,`
              <template> 
                <rs-dropdown title="Default">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Default">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item divider> Option 3 </rs-dropdown-item>
                </rs-dropdown>
              </template>

              <script> 
                import RsDropdown from "@/components/Dropdown.vue";
                import RsDropdownItem from "@/components/DropdownItem.vue";

                export default {
                  components: {
                    RsDropdown,
                    RsDropdownItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),t(`
          `)],-1),L=d("p",{class:"mb-4"},[t(" Dropdown variant uses props "),d("code",null,"variant"),t(" to change the color of the button. There are 6 variants: "),d("code",null,"primary"),t(", "),d("code",null,"info"),t(", "),d("code",null,"success"),t(", "),d("code",null,"warning"),t(" and "),d("code",null,"danger"),t(". ")],-1),V={class:"flex flex-wrap items-center justify-start gap-x-6"},N={class:"flex justify-end"},E={class:"z-0"},F=d("pre",{class:"language-html shadow-none"},[t("            "),d("code",null,`
              <template> 
                <rs-dropdown title="Primary" variant="primary">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Info" variant="info">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>                
                </rs-dropdown>
                <rs-dropdown title="Success" variant="success">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Warning" variant="warning">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Danger" variant="danger">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
              </template>

              <script> 
                import RsDropdown from "@/components/Dropdown.vue";
                import RsDropdownItem from "@/components/DropdownItem.vue";

                export default {
                  components: {
                    RsDropdown,
                    RsDropdownItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),t(`
          `)],-1),M=d("p",{class:"mb-4"},[t(" Dropdown variant uses props "),d("code",null,"variant"),t(" to change the color of the button. There are 6 variants: "),d("code",null,"primary"),t(", "),d("code",null,"info"),t(", "),d("code",null,"success"),t(", "),d("code",null,"warning"),t(" and "),d("code",null,"danger"),t(". ")],-1),U={class:"my-6"},Y=d("div",{class:"font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"}," Fill ",-1),q={class:"flex flex-wrap items-center justify-start gap-x-6"},A={class:"my-6"},G=d("div",{class:"font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"}," Outline ",-1),H={class:"flex flex-wrap items-center justify-start gap-x-6"},J={class:"my-6"},K=d("div",{class:"font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"}," Text ",-1),Q={class:"flex flex-wrap items-center justify-start gap-x-6"},X={class:"flex justify-end"},Z={class:"z-0"},nn=d("pre",{class:"language-html shadow-none"},[t("            "),d("code",null,`
              <template> 
                <!-- Fill Dropdown -->
                <rs-dropdown title="Primary" variant="primary">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Info" variant="info">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Success" variant="success">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Warning" variant="warning">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Danger" variant="danger">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>

                <!-- Outline Dropdown -->
                <rs-dropdown title="Primary" variant="primary-outline">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Info" variant="info-outline">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Success" variant="success-outline">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Warning" variant="warning-outline">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Danger" variant="danger-outline">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>

                <!-- Text Dropdown -->
                <rs-dropdown title="Primary" variant="primary-text">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Info" variant="info-text">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Success" variant="success-text">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Warning" variant="warning-text">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Danger" variant="danger-text">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
              </template>

              <script> 
                import RsDropdown from "@/components/Dropdown.vue";
                import RsDropdownItem from "@/components/DropdownItem.vue";

                export default {
                  components: {
                    RsDropdown,
                    RsDropdownItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),t(`
          `)],-1),on=d("p",{class:"mb-4"},[t(" Dropdown position uses props "),d("code",null,"position"),t(" to change the position of dropdown item. There are 4 positions: "),d("code",null,"top"),t(", "),d("code",null,"bottom"),t(", "),d("code",null,"left"),t(" and "),d("code",null,"right"),t(". ")],-1),tn={class:"flex flex-wrap items-center justify-start gap-x-6"},en={class:"flex justify-end"},dn={class:"z-0"},rn=d("pre",{class:"language-html shadow-none"},[t("            "),d("code",null,`
              <template> 
                <rs-dropdown title="Bottom">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Top" position="top">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Left" position="left">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Right" position="right">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
              </template>

              <script> 
                import RsDropdown from "@/components/Dropdown.vue";
                import RsDropdownItem from "@/components/DropdownItem.vue";

                export default {
                  components: {
                    RsDropdown,
                    RsDropdownItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),t(`
          `)],-1),sn=d("p",{class:"mb-4"},[t(" Dropdown size uses props "),d("code",null,"size"),t(" to change the size of dropdown button. There are 3 sizes: "),d("code",null,"small"),t(", "),d("code",null,"medium"),t(" and "),d("code",null,"large"),t(". ")],-1),ln={class:"flex flex-wrap items-center justify-start gap-x-6"},pn={class:"flex justify-end"},an={class:"z-0"},un=d("pre",{class:"language-html shadow-none"},[t("            "),d("code",null,`
              <template> 
                <rs-dropdown title="Small" size="sm">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Medium">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
                <rs-dropdown title="Large" size="lg">
                  <rs-dropdown-item> Option 1 </rs-dropdown-item>
                  <rs-dropdown-item> Option 2 </rs-dropdown-item>
                  <rs-dropdown-item> Option 3 </rs-dropdown-item>
                </rs-dropdown>
              </template>

              <script> 
                import RsDropdown from "@/components/Dropdown.vue";
                import RsDropdownItem from "@/components/DropdownItem.vue";

                export default {
                  components: {
                    RsDropdown,
                    RsDropdownItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),t(`
          `)],-1),vn={__name:"dropdown",setup(mn){const v=f(!1),g=f(!1),h=f(!1),b=f(!1),x=f(!1);return(wn,i)=>{const y=I,e=R,r=S,a=C("SimpleBar"),u=j,m=k,w=z("highlight");return l(),p("div",null,[o(y),o(m,null,{header:n(()=>[t(" Default Dropdown ")]),body:n(()=>[T,d("div",P,[o(r,{title:"Default",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Divider",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,{divider:""},{default:n(()=>[t(" Option 1 ")]),_:1})]),_:1})]),d("div",B,[d("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:i[0]||(i[0]=D=>s(v)?v.value=!1:v.value=!0)}," Show Code ")]),o(u,null,{default:n(()=>[o(_,{name:"fade"},{default:n(()=>[c((l(),p("div",W,[o(a,{style:{height:"400px"}},{default:n(()=>[$]),_:1})])),[[O,s(v)],[w]])]),_:1})]),_:1})]),_:1}),o(m,null,{header:n(()=>[t(" Variant ")]),body:n(()=>[L,d("div",V,[o(r,{title:"Primary",variant:"primary",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Info",variant:"info",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Success",variant:"success",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Warning",variant:"warning",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Danger",variant:"danger",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1})]),d("div",N,[d("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:i[1]||(i[1]=D=>s(g)?g.value=!1:g.value=!0)}," Show Code ")]),o(u,null,{default:n(()=>[o(_,{name:"fade"},{default:n(()=>[c((l(),p("div",E,[o(a,{style:{height:"400px"}},{default:n(()=>[F]),_:1})])),[[O,s(g)],[w]])]),_:1})]),_:1})]),_:1}),o(m,null,{header:n(()=>[t(" Variant Type ")]),body:n(()=>[M,d("div",U,[Y,d("div",q,[o(r,{title:"Primary",variant:"primary",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Info",variant:"info",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Success",variant:"success",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Warning",variant:"warning",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Danger",variant:"danger",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1})])]),d("div",A,[G,d("div",H,[o(r,{title:"Primary",variant:"primary-outline",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Info",variant:"info-outline",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Success",variant:"success-outline",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Warning",variant:"warning-outline",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Danger",variant:"danger-outline",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1})])]),d("div",J,[K,d("div",Q,[o(r,{title:"Primary",variant:"primary-text",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Info",variant:"info-text",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Success",variant:"success-text",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Warning",variant:"warning-text",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Danger",variant:"danger-text",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1})])]),d("div",X,[d("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:i[2]||(i[2]=D=>s(h)?h.value=!1:h.value=!0)}," Show Code ")]),o(u,null,{default:n(()=>[o(_,{name:"fade"},{default:n(()=>[c((l(),p("div",Z,[o(a,{style:{height:"400px"}},{default:n(()=>[nn]),_:1})])),[[O,s(h)],[w]])]),_:1})]),_:1})]),_:1}),o(m,null,{header:n(()=>[t(" Position ")]),body:n(()=>[on,d("div",tn,[o(r,{title:"Bottom",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Top",position:"top",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Left",position:"left",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1}),o(r,{title:"Right",position:"right",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1})]),d("div",en,[d("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:i[3]||(i[3]=D=>s(b)?b.value=!1:b.value=!0)}," Show Code ")]),o(u,null,{default:n(()=>[o(_,{name:"fade"},{default:n(()=>[c((l(),p("div",dn,[o(a,{style:{height:"400px"}},{default:n(()=>[rn]),_:1})])),[[O,s(b)],[w]])]),_:1})]),_:1})]),_:1}),o(m,null,{header:n(()=>[t(" Size ")]),body:n(()=>[sn,d("div",ln,[o(r,{title:"Small",size:"sm",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1})]),_:1}),o(r,{title:"Medium",size:"md",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 2 ")]),_:1})]),_:1}),o(r,{title:"Large",size:"lg",class:"mb-2"},{default:n(()=>[o(e,null,{default:n(()=>[t(" Option 1 ")]),_:1}),o(e,null,{default:n(()=>[t(" Option 3 ")]),_:1})]),_:1})]),d("div",pn,[d("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:i[4]||(i[4]=D=>s(x)?x.value=!1:x.value=!0)}," Show Code ")]),o(u,null,{default:n(()=>[o(_,{name:"fade"},{default:n(()=>[c((l(),p("div",an,[o(a,{style:{height:"400px"}},{default:n(()=>[un]),_:1})])),[[O,s(x)],[w]])]),_:1})]),_:1})]),_:1})])}}};export{vn as default};

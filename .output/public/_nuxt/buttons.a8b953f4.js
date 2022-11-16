import{_ as w}from"./Breadcrumb.5e106003.js";import{_ as B}from"./RsButton.8c0cab6e.js";import{p as b,i as S,D as C,o as u,b as i,j as s,w as e,k as t,e as n,u as l,ah as v,E as g,Y as h,U as D}from"./entry.5f4d3365.js";import{_ as j}from"./RsCard.a461e6bf.js";const k=n("p",{class:"mb-4"},[t("Use the "),n("code",null,"rs-button"),t(" to show badges.")],-1),z={class:"flex flex-wrap items-center justify-start gap-x-6"},I={class:"flex justify-end"},P=n("pre",{class:"language-html shadow-none"},[t("            "),n("code",null,`
              <template> 
                <rs-button>Button</rs-button>
              </template>

              <script> 
                import RsButton from "@/components/Button.vue";

                export default {
                  components: {
                    RsButton,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),t(`
          `)],-1),R=n("p",{class:"mb-4"},[t(" Button variant uses props "),n("code",null,"variant"),t(" to change the color of the button. There are 6 variants: "),n("code",null,"primary"),t(", "),n("code",null,"info"),t(", "),n("code",null,"success"),t(", "),n("code",null,"warning"),t(" and "),n("code",null,"danger"),t(". ")],-1),T={class:"flex flex-wrap items-center justify-start gap-x-6"},W={class:"flex justify-end"},$=n("pre",{class:"language-html shadow-none"},[t("            "),n("code",null,`
              <template> 
                <rs-button variant="primary">Primary</rs-button>
                <rs-button variant="info">Info</rs-button>
                <rs-button variant="success">Success</rs-button>
                <rs-button variant="warning">Warning</rs-button>
                <rs-button variant="danger">Danger</rs-button>
              </template>

              <script> 
                import RsButton from "@/components/Button.vue";

                export default {
                  components: {
                    RsButton,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),t(`
          `)],-1),V=n("p",{class:"mb-4"},[t(" Button variant type uses props "),n("code",null,"variant"),t(" to change the shape of the button. There are 3 variant types: "),n("code",null,"fill"),t(", "),n("code",null,"outline"),t(" and "),n("code",null,"text"),t(". "),n("code",null,"fill"),t(" is the default. "),n("code",null,"outline"),t(" is used to create a button with a border. "),n("code",null,"text"),t(" is used to create a button with no border and no background. ")],-1),N={class:"my-6"},O=n("div",{class:"font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"}," Fill ",-1),E={class:"flex flex-wrap items-center justify-start gap-x-6"},F={class:"my-6"},L=n("div",{class:"font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"}," Outline ",-1),U={class:"flex flex-wrap items-center justify-start gap-x-6"},M={class:"my-6"},Y=n("div",{class:"font-semibold text-lg bg-slate-100 dark:bg-slate-700 w-full mb-4 pl-2"}," Text ",-1),q={class:"flex flex-wrap items-center justify-start gap-x-6"},A={class:"flex justify-end"},G=n("pre",{class:"language-html shadow-none"},[t("            "),n("code",null,`
              <template> 
                <!-- Fill Button -->
                <rs-button variant="primary">Primary</rs-button>
                <rs-button variant="info">Info</rs-button>
                <rs-button variant="success">Success</rs-button>
                <rs-button variant="warning">Warning</rs-button>
                <rs-button variant="danger">Danger</rs-button>

                <!-- Outline Button -->
                <rs-button variant="primary-outline">Primary</rs-button>
                <rs-button variant="info-outline">Info</rs-button>
                <rs-button variant="success-outline">Success</rs-button>
                <rs-button variant="warning-outline">Warning</rs-button>
                <rs-button variant="danger-outline">Danger</rs-button>

                <!-- Text Button -->
                <rs-button variant="primary-text">Primary</rs-button>
                <rs-button variant="info-text">Info</rs-button>
                <rs-button variant="success-text">Success</rs-button>
                <rs-button variant="warning-text">Warning</rs-button>
                <rs-button variant="danger-text">Danger</rs-button>
              </template>

              <script> 
                import RsButton from "@/components/Button.vue";

                export default {
                  components: {
                    RsButton,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),t(`
          `)],-1),H=n("p",{class:"mb-4"},[t(" Button size uses props "),n("code",null,"size"),t(" to change the size of button. There are 3 sizes: "),n("code",null,"small"),t(", "),n("code",null,"medium"),t(" and "),n("code",null,"large"),t(". ")],-1),J={class:"flex flex-wrap items-center justify-start gap-x-6"},K={class:"flex justify-end"},Q=n("pre",{class:"language-html shadow-none"},[t("            "),n("code",null,`
              <template> 
                <rs-button>Button</rs-button>
              </template>

              <script> 
                import RsButton from "@/components/Button.vue";

                export default {
                  components: {
                    RsButton,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),t(`
          `)],-1),at={__name:"buttons",setup(X){const o=b(!1),d=b(!1),c=b(!1);return b(!1),(Z,r)=>{const y=w,a=B,f=S("SimpleBar"),_=D,p=j,m=C("highlight");return u(),i("div",null,[s(y),s(p,null,{header:e(()=>[t(" Default ")]),body:e(()=>[k,n("div",z,[s(a,null,{default:e(()=>[t(" Button ")]),_:1})]),n("div",I,[n("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg my-2",onClick:r[0]||(r[0]=x=>l(o)?o.value=!1:o.value=!0)}," Show Code ")]),s(_,null,{default:e(()=>[s(v,{name:"fade"},{default:e(()=>[g((u(),i("div",null,[s(f,{style:{height:"400px"}},{default:e(()=>[P]),_:1})])),[[h,l(o)],[m]])]),_:1})]),_:1})]),_:1}),s(p,null,{header:e(()=>[t(" Variant ")]),body:e(()=>[R,n("div",T,[s(a,{variant:"primary"},{default:e(()=>[t(" Primary ")]),_:1}),s(a,{variant:"info"},{default:e(()=>[t(" Info ")]),_:1}),s(a,{variant:"success"},{default:e(()=>[t(" Success ")]),_:1}),s(a,{variant:"warning"},{default:e(()=>[t(" Warning ")]),_:1}),s(a,{variant:"danger"},{default:e(()=>[t(" Danger ")]),_:1})]),n("div",W,[n("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg my-2",onClick:r[1]||(r[1]=x=>l(d)?d.value=!1:d.value=!0)}," Show Code ")]),s(_,null,{default:e(()=>[s(v,{name:"fade"},{default:e(()=>[g((u(),i("div",null,[s(f,{style:{height:"400px"}},{default:e(()=>[$]),_:1})])),[[h,l(d)],[m]])]),_:1})]),_:1})]),_:1}),s(p,null,{header:e(()=>[t(" Variant Type ")]),body:e(()=>[V,n("div",N,[O,n("div",E,[s(a,{type:"fill",variant:"primary"},{default:e(()=>[t(" Primary ")]),_:1}),s(a,{type:"fill",variant:"info"},{default:e(()=>[t(" Info ")]),_:1}),s(a,{type:"fill",variant:"success"},{default:e(()=>[t(" Success ")]),_:1}),s(a,{type:"fill",variant:"warning"},{default:e(()=>[t(" Warning ")]),_:1}),s(a,{type:"fill",variant:"danger"},{default:e(()=>[t(" Danger ")]),_:1})])]),n("div",F,[L,n("div",U,[s(a,{variant:"primary-outline"},{default:e(()=>[t(" Primary ")]),_:1}),s(a,{variant:"info-outline"},{default:e(()=>[t(" Info ")]),_:1}),s(a,{variant:"success-outline"},{default:e(()=>[t(" Success ")]),_:1}),s(a,{variant:"warning-outline"},{default:e(()=>[t(" Warning ")]),_:1}),s(a,{variant:"danger-outline"},{default:e(()=>[t(" Danger ")]),_:1})])]),n("div",M,[Y,n("div",q,[s(a,{variant:"primary-text"},{default:e(()=>[t(" Primary ")]),_:1}),s(a,{variant:"info-text"},{default:e(()=>[t(" Info ")]),_:1}),s(a,{variant:"success-text"},{default:e(()=>[t(" Success ")]),_:1}),s(a,{variant:"warning-text"},{default:e(()=>[t(" Warning ")]),_:1}),s(a,{variant:"danger-text"},{default:e(()=>[t(" Danger ")]),_:1})])]),n("div",A,[n("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg my-2",onClick:r[2]||(r[2]=x=>l(c)?c.value=!1:c.value=!0)}," Show Code ")]),s(_,null,{default:e(()=>[s(v,{name:"fade"},{default:e(()=>[g((u(),i("div",null,[s(f,{style:{height:"400px"}},{default:e(()=>[G]),_:1})])),[[h,l(c)],[m]])]),_:1})]),_:1})]),_:1}),s(p,null,{header:e(()=>[t(" Size ")]),body:e(()=>[H,n("div",J,[s(a,{size:"sm"},{default:e(()=>[t(" Small ")]),_:1}),s(a,{size:"md"},{default:e(()=>[t(" Medium ")]),_:1}),s(a,{size:"lg"},{default:e(()=>[t(" Large ")]),_:1})]),n("div",K,[n("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg my-2",onClick:r[3]||(r[3]=x=>l(o)?o.value=!1:o.value=!0)}," Show Code ")]),s(_,null,{default:e(()=>[s(v,{name:"fade"},{default:e(()=>[g((u(),i("div",null,[s(f,{style:{height:"400px"}},{default:e(()=>[Q]),_:1})])),[[h,l(o)],[m]])]),_:1})]),_:1})]),_:1})])}}};export{at as default};

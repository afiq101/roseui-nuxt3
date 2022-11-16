import{_ as B}from"./Breadcrumb.5e106003.js";import{o as d,b as g,c as S,f as C,m as D,y as k,x as I,p as f,i as z,D as R,j as e,w as a,e as s,k as n,u as c,ah as v,E as h,Y as y,U as W}from"./entry.5f4d3365.js";import{_ as $}from"./RsCard.a461e6bf.js";const N={__name:"RsBadge",props:{variant:{type:String,default:"primary"},icon:{type:String,default:""},iconSize:{type:String,default:"18"}},setup(r){return(o,i)=>{const u=I;return d(),g("div",{class:k(["inline whitespace-nowrap text-center rounded-lg w-auto text-white px-3 py-1",{"bg-blue-500":r.variant==="info","bg-primary-400":r.variant==="primary","bg-green-500":r.variant==="success","bg-warning":r.variant==="warning","bg-red-500":r.variant==="danger"}])},[r.icon?(d(),S(u,{key:0,class:"align-middle",name:r.icon,size:r.iconSize},null,8,["name","size"])):C("",!0),D(o.$slots,"default")],2)}}},P=s("h5",null,"Default Badges",-1),V=s("p",{class:"mb-2"},[n("Use the "),s("code",null,"rs-badge"),n(" to show badges.")],-1),j={class:"grid grid-cols-3 md:grid-cols-6 gap-4 gap-y-0"},E={class:"flex justify-end"},T=s("pre",{class:"language-html shadow-none"},[n("            "),s("code",null,`
              <template> 
                <rs-badge variant="primary">Primary</rs-badge>
                <rs-badge variant="info">Info</rs-badge>
                <rs-badge variant="success">Success</rs-badge>
                <rs-badge variant="warning">Warning</rs-badge>
                <rs-badge variant="danger">Danger</rs-badge>
              </template>

              <script> 
                import RsBadges from "@/components/Badges.vue";

                export default {
                  components: {
                    RsBadges,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),n(`
          `)],-1),U=s("h5",null,"Badges With Icon",-1),L=s("p",{class:"mb-2"},[n(" Include props "),s("code",null,"icon"),n(" to "),s("code",null,"rs-badge"),n(" to show badges. ")],-1),O={class:"grid grid-cols-3 md:grid-cols-6 gap-4 gap-y-0"},Y={class:"flex justify-end"},q=s("pre",{class:"language-html shadow-none"},[n("            "),s("code",null,`
              <template> 
                <rs-badge variant="primary" icon="star">Primary</rs-badge>
                <rs-badge variant="info" icon="star">Info</rs-badge>
                <rs-badge variant="success" icon="star">Success</rs-badge>
                <rs-badge variant="warning" icon="star">Warning</rs-badge>
                <rs-badge variant="danger" icon="star">Danger</rs-badge>
              </template>

              <script> 
                import RsBadges from "@/components/Badges.vue";

                export default {
                  components: {
                    RsBadges,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),n(`
          `)],-1),H={__name:"badges",setup(r){const o=f(!1),i=f(!1);return(u,l)=>{const w=B,t=N,m=z("SimpleBar"),_=W,p=$,b=R("highlight");return d(),g("div",null,[e(w),e(p,null,{header:a(()=>[P]),body:a(()=>[V,s("div",j,[e(t,{variant:"primary",class:"mb-4"},{default:a(()=>[n(" Primary ")]),_:1}),e(t,{variant:"info",class:"mb-4"},{default:a(()=>[n(" Info ")]),_:1}),e(t,{variant:"success",class:"mb-4"},{default:a(()=>[n(" Success ")]),_:1}),e(t,{variant:"warning",class:"mb-4"},{default:a(()=>[n(" Warning ")]),_:1}),e(t,{variant:"danger",class:"mb-4"},{default:a(()=>[n(" Danger ")]),_:1})]),s("div",E,[s("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:l[0]||(l[0]=x=>c(o)?o.value=!1:o.value=!0)}," Show Code ")]),e(_,null,{default:a(()=>[e(v,{name:"fade"},{default:a(()=>[h((d(),g("div",null,[e(m,{style:{height:"400px"}},{default:a(()=>[T]),_:1})])),[[y,c(o)],[b]])]),_:1})]),_:1})]),_:1}),e(p,null,{header:a(()=>[U]),body:a(()=>[L,s("div",O,[e(t,{variant:"primary",icon:"star",class:"mb-4"},{default:a(()=>[n(" Primary ")]),_:1}),e(t,{variant:"info",icon:"star",class:"mb-4"},{default:a(()=>[n(" Info ")]),_:1}),e(t,{variant:"success",icon:"star",class:"mb-4"},{default:a(()=>[n(" Success ")]),_:1}),e(t,{variant:"warning",icon:"star",class:"mb-4"},{default:a(()=>[n(" Warning ")]),_:1}),e(t,{variant:"danger",icon:"star",class:"mb-4"},{default:a(()=>[n(" Danger ")]),_:1})]),s("div",Y,[s("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:l[1]||(l[1]=x=>c(i)?i.value=!1:i.value=!0)}," Show Code ")]),e(_,null,{default:a(()=>[e(v,{name:"fade"},{default:a(()=>[h((d(),g("div",null,[e(m,{style:{height:"400px"}},{default:a(()=>[q]),_:1})])),[[y,c(i)],[b]])]),_:1})]),_:1})]),_:1})])}}};export{H as default};

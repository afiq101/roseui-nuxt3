import{_ as L}from"./Breadcrumb.5e106003.js";import{_ as R,a as S}from"./RsCollapse.27e7666d.js";import{p as d,i as w,D,o as u,b as _,j as l,w as t,k as s,e,u as n,ah as g,E as v,Y as b,M as j,U as B}from"./entry.5f4d3365.js";import{_ as A}from"./RsCard.a461e6bf.js";const V=e("p",{class:"mb-2"},[s(" Use the "),e("code",null,"rs-collapse"),s(" to show collapse. "),e("code",null,"rs-collapse-item"),s(" is used to show collapse item. ")],-1),$=e("p",{class:"text-justify"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",-1),T=e("p",null,"Collapse Item 1 content",-1),U={class:"flex justify-end"},M=e("pre",{class:"language-html shadow-none"},[s("            "),e("code",null,`
              <template> 
                <rs-collapse>
                  <rs-collapse-item title="Collapse Item 1">Collapse Item 1 content</rs-collapse-item>
                  <rs-collapse-item title="Collapse Item 2">Collapse Item 2 content</rs-collapse-item>
                </rs-collapse>

              <script> 
                import RsCollapse from "@/components/Collapse.vue";
                import RsCollapseItem from "@/components/CollapseItem.vue";

                export default {
                  components: {
                    RsCollapse,
                    RsCollapseItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),s(`
          `)],-1),N=e("p",{class:"mb-2"},[s(" Use the "),e("code",null,"accordion"),s(" prop to "),e("code",null,"rs-collapse"),s(" to make it accordion. ")],-1),P=e("p",{class:"text-justify"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",-1),E=e("p",null,"Collapse Item 1 content",-1),F={class:"flex justify-end"},K=e("pre",{class:"language-html shadow-none"},[s("            "),e("code",null,`
              <template> 
                <rs-collapse accordion>
                  <rs-collapse-item title="Collapse Item 1">Collapse Item 1 content</rs-collapse-item>
                  <rs-collapse-item title="Collapse Item 2">Collapse Item 2 content</rs-collapse-item>
                </rs-collapse>

              <script> 
                import RsCollapse from "@/components/Collapse.vue";
                import RsCollapseItem from "@/components/CollapseItem.vue";

                export default {
                  components: {
                    RsCollapse,
                    RsCollapseItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),s(`
          `)],-1),O=e("p",{class:"mb-2"},[s(" Use the "),e("code",null,"type"),s(" prop to "),e("code",null,"rs-collapse"),s(" to make it accordion. The type can be "),e("code",null,"default"),s(", "),e("code",null,"border"),s(" and "),e("code",null,"card"),s(". ")],-1),Y=e("p",{class:"text-justify"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",-1),q=e("p",null,"Collapse Item 2 content",-1),z=e("p",null,"Collapse Item 13 content",-1),G={class:"flex justify-end"},H=e("pre",{class:"language-html shadow-none"},[s("            "),e("code",null,`
              <template> 
                <!-- Default Styling('default') -->
                <rs-collapse>
                  <rs-collapse-item title="Collapse Item 1">Collapse Item 1 content</rs-collapse-item>
                  <rs-collapse-item title="Collapse Item 2">Collapse Item 2 content</rs-collapse-item>
                </rs-collapse>

                <!-- Default Styling('border') -->
                <rs-collapse type="border">
                  <rs-collapse-item title="Collapse Item 1">Collapse Item 1 content</rs-collapse-item>
                  <rs-collapse-item title="Collapse Item 2">Collapse Item 2 content</rs-collapse-item>
                </rs-collapse>

                <!-- Default Styling('card') -->
                <rs-collapse type="card">
                  <rs-collapse-item title="Collapse Item 1">Collapse Item 1 content</rs-collapse-item>
                  <rs-collapse-item title="Collapse Item 2">Collapse Item 2 content</rs-collapse-item>
                </rs-collapse>
              </template>

              <script> 
                import RsCollapse from "@/components/Collapse.vue";
                import RsCollapseItem from "@/components/CollapseItem.vue";

                export default {
                  components: {
                    RsCollapse,
                    RsCollapseItem,
                  },
                  setup() {
                    return {};
                  },
                };
              <\/script>
            `),s(`
          `)],-1),te={__name:"collapse",setup(J){const p=d("default"),i=d(!1),r=d(!1),c=d(!1);return(Q,o)=>{const x=L,a=R,h=S,f=w("SimpleBar"),y=B,C=A,k=w("FormKit"),I=D("highlight");return u(),_("div",null,[l(x),l(C,null,{header:t(()=>[s(" Default ")]),body:t(()=>[V,l(h,null,{default:t(()=>[l(a,{title:"Collapse Item 1"},{default:t(()=>[$]),_:1}),l(a,{title:"Collapse Item 2"},{default:t(()=>[T]),_:1})]),_:1}),e("div",U,[e("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:o[0]||(o[0]=m=>n(i)?i.value=!1:i.value=!0)}," Show Code ")]),l(y,null,{default:t(()=>[l(g,{name:"fade"},{default:t(()=>[v((u(),_("div",null,[l(f,{style:{height:"400px"}},{default:t(()=>[M]),_:1})])),[[b,n(i)],[I]])]),_:1})]),_:1})]),_:1}),l(C,null,{header:t(()=>[s(" Accordion ")]),body:t(()=>[N,l(h,{accordion:""},{default:t(()=>[l(a,{title:"Accordion Item 1"},{default:t(()=>[P]),_:1}),l(a,{title:"Accordion Item 2"},{default:t(()=>[E]),_:1})]),_:1}),e("div",F,[e("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:o[1]||(o[1]=m=>n(r)?r.value=!1:r.value=!0)}," Show Code ")]),l(y,null,{default:t(()=>[l(g,{name:"fade"},{default:t(()=>[v((u(),_("div",null,[l(f,{style:{height:"400px"}},{default:t(()=>[K]),_:1})])),[[b,n(r)],[I]])]),_:1})]),_:1})]),_:1}),l(C,null,{header:t(()=>[s(" Type ")]),body:t(()=>[O,l(k,{modelValue:n(p),"onUpdate:modelValue":o[2]||(o[2]=m=>j(p)?p.value=m:null),type:"radio",label:"Type",options:[{label:"Default",value:"default"},{label:"Border",value:"border"},{label:"Card",value:"card"}]},null,8,["modelValue"]),l(h,{type:n(p)},{default:t(()=>[l(a,{title:"Collapse Item 1"},{default:t(()=>[Y]),_:1}),l(a,{title:"Collapse Item 2"},{default:t(()=>[q]),_:1}),l(a,{title:"Collapse Item 3"},{default:t(()=>[z]),_:1})]),_:1},8,["type"]),e("div",G,[e("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:o[3]||(o[3]=m=>n(c)?c.value=!1:c.value=!0)}," Show Code ")]),l(y,null,{default:t(()=>[l(g,{name:"fade"},{default:t(()=>[v((u(),_("div",null,[l(f,{style:{height:"400px"}},{default:t(()=>[H]),_:1})])),[[b,n(c)],[I]])]),_:1})]),_:1})]),_:1})])}}};export{te as default};

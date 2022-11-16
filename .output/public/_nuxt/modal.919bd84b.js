import{_ as z}from"./Breadcrumb.5e106003.js";import{_ as $}from"./RsButton.8c0cab6e.js";import{o as c,c as V,j as a,w as n,b as p,ai as S,y as R,E as h,e as t,G as j,t as O,f as C,m as _,k as o,Y as b,aj as U,ak as K,x as H,p as B,i as F,D as L,u as l,ah as g,U as Y}from"./entry.5f4d3365.js";import{_ as D}from"./RsCard.a461e6bf.js";const N=["onClick"],A={class:"modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-slate-800 bg-clip-padding rounded-md outline-none text-current"},E={class:"modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700 rounded-t-md"},G={key:0},I={class:"modal-body relative p-4"},P={class:"modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 dark:border-slate-700 rounded-b-md gap-x-3"},q={__name:"RsModal",props:{title:{type:String,default:""},size:{type:String,default:"md"},modelValue:{type:Boolean,default:!1},position:{type:String,default:"top"},hideOverlay:{type:Boolean,default:!1},okOnly:{type:Boolean,default:!1},okTitle:{type:String,default:"OK"},cancelOnly:{type:Boolean,default:!1},cancelTitle:{type:String,default:"Cancel"},okCallback:{type:Function,default:()=>{}},cancelCallback:{type:Function,default:()=>{}}},emits:["update:modelValue"],setup(m,{emit:d}){const i=m,k=()=>{d("update:modelValue",!1)},T=()=>{i.cancelCallback=="() => {}"?k():i.cancelCallback()};return(f,e)=>{const x=H,r=$;return c(),V(K,{to:"body"},[a(U,{name:"fade"},{default:n(()=>[m.modelValue?(c(),p("div",{key:0,onClick:S(k,["self"]),class:R(["modal fixed top-0 left-0 w-full h-full overflow-hidden",{"flex items-start":m.position=="top","flex items-center":m.position=="center","flex items-end":m.position=="bottom","!bg-transparent":m.hideOverlay}])},[h(t("div",{class:"modal-dialog",style:j({width:m.size=="sm"?"300px":m.size=="md"?"500px":"800px"})},[t("div",A,[t("div",E,[f.$slots.header?C("",!0):(c(),p("h4",G,O(m.title),1)),_(f.$slots,"header"),a(x,{onClick:k,class:"hover:text-gray-800 cursor-pointer",name:"ic:round-close"})]),t("div",I,[_(f.$slots,"body"),f.$slots.body?C("",!0):_(f.$slots,"default",{key:0})]),t("div",P,[_(f.$slots,"footer"),!f.$slots.footer&&!m.okOnly?(c(),V(r,{key:0,onClick:T,class:"bg-gray-500 hover:bg-gray-600"},{default:n(()=>[o(O(m.cancelTitle),1)]),_:1})):C("",!0),!f.$slots.footer&&!m.cancelOnly?(c(),V(r,{key:1,onClick:m.okCallback},{default:n(()=>[o(O(m.okTitle),1)]),_:1},8,["onClick"])):C("",!0)])])],4),[[b,m.modelValue]])],10,N)):C("",!0)]),_:3})])}}},J=t("p",{class:"mb-4"},[o("Use "),t("code",null,"rs-model"),o(" to show/hide modal.")],-1),Q={class:"flex flex-wrap items-center justify-start gap-x-6"},W={class:"flex justify-end"},X={class:"z-0"},Z=t("pre",{class:"language-html shadow-none"},[o("            "),t("code",null,`
              <template> 
                <rs-button @click="showModal = true">Open Modal</rs-button>
                <rs-modal title="This is a modal"  v-model="showModal">
                  This is the content of small modal.
                </rs-modal>
                <rs-button @click="showModalHideOverlay = true">Open Modal</rs-button>
                <rs-modal title="This is a modal"  v-model="showModalHideOverlay" hide-overlay>
                  This is the content of small modal.
                </rs-modal>
              </template>

              <script> 
                import { ref } from "vue";
                import RsButton from "@/components/Button.vue";
                import RsModal from "@/components/Modal.vue";

                export default {
                  components: {
                    RsButton,
                    RsModal,
                  },
                  setup() {
                    const showModal = ref(false);
                    const showModalHideOverlay = ref(false);
                    return {
                      showModal,
                      showModalHideOverlay,
                    };
                  },
                };
              <\/script>
            `),o(`
          `)],-1),oo=t("p",{class:"mb-4"},[o(" Modal size uses props "),t("code",null,"size"),o(" to change the size of modal. There are 3 sizes: "),t("code",null,"sm"),o(", "),t("code",null,"md"),o(" and "),t("code",null,"lg"),o(". The default size is "),t("code",null,"md"),o(". ")],-1),eo={class:"flex flex-wrap items-center justify-start gap-x-6"},lo={class:"flex justify-end"},to={class:"z-0"},no=t("pre",{class:"language-html shadow-none"},[o("            "),t("code",null,`
              <template> 
                <rs-button @click="showModalSmall = true">Open Modal</rs-button>
                <rs-modal title="This is a modal" size="sm"  v-model="showModalSmall">
                  This is the content of small modal.
                </rs-modal>
                <rs-button @click="showModalMedium = true">Open Modal</rs-button>
                <rs-modal title="This is a modal" size="md"  v-model="showModalMedium">
                  This is the content of medium modal.
                </rs-modal>
                <rs-button @click="showModaLarge = true">Open Modal</rs-button>
                <rs-modal title="This is a modal" size="lg"  v-model="showModaLarge">
                  This is the content of large modal.
                </rs-modal>
              </template>

              <script> 
                import { ref } from "vue";
                import RsButton from "@/components/Button.vue";
                import RsModal from "@/components/Modal.vue";

                export default {
                  components: {
                    RsButton,
                    RsModal,
                  },
                  setup() {
                    const showModalSmall = ref(false);
                    const showModalMedium = ref(false);
                    const showModaLarge = ref(false);
                    return {
                      showModalSmall,
                      showModalMedium,
                      showModaLarge,
                    };
                  },
                };
              <\/script>
            `),o(`
          `)],-1),ao=t("p",{class:"mb-4"},[o(" Modal position uses props "),t("code",null,"position"),o(" to change the position of modal. There are 3 positions: "),t("code",null,"top"),o(", "),t("code",null,"center"),o(" and "),t("code",null,"bottom"),o(". The default position is "),t("code",null,"top"),o(". ")],-1),so={class:"flex flex-wrap items-center justify-start gap-x-6"},io={class:"flex justify-end"},mo={class:"z-0"},ro=t("pre",{class:"language-html shadow-none"},[o("            "),t("code",null,`
              <template> 
                <rs-button @click="showModalTop = true">Open Modal</rs-button>
                <rs-modal title="This is a modal" position="top" v-model="showModalTop">
                  This is the content of small modal.
                </rs-modal>
                <rs-button @click="showModalCenter = true">Open Modal</rs-button>
                <rs-modal title="This is a modal" position="center" v-model="showModalCenter">
                  This is the content of medium modal.
                </rs-modal>
                <rs-button @click="showModalBottom = true">Open Modal</rs-button>
                <rs-modal title="This is a modal" position="bottom" v-model="showModalBottom">
                  This is the content of large modal.
                </rs-modal>
              </template>

              <script> 
                import { ref } from "vue";
                import RsButton from "@/components/Button.vue";
                import RsModal from "@/components/Modal.vue";

                export default {
                  components: {
                    RsButton,
                    RsModal,
                  },
                  setup() {
                    const showModalTop = ref(false);
                    const showModalCenter = ref(false);
                    const showModalBottom = ref(false);
                    return {
                      showModalTop,
                      showModalCenter,
                      showModalBottom,
                    };
                  },
                };
              <\/script>
            `),o(`
          `)],-1),uo=t("p",{class:"mb-4 text-justify"},[o(" Modal header, body and footer can be customized by using template slots. The header slot named "),t("code",null,"header"),o(" and the body slot named "),t("code",null,"body"),o(" and the footer slot named "),t("code",null,"footer"),o(". Ok title can be customized by using "),t("code",null,"ok-title"),o(" prop. The default title is "),t("code",null,"Ok"),o(". Cancel title can be customized by using "),t("code",null,"cancel-title"),o(" prop. The default title is "),t("code",null,"Cancel"),o(". Ok and cancel button can be hide by using "),t("code",null,"ok-only"),o(" or "),t("code",null,"cancel-only"),o(" prop. The default value is "),t("code",null,"false"),o(" for both. ")],-1),co={class:"flex flex-wrap items-center justify-start gap-x-6"},fo={class:"flex justify-end"},po={class:"z-0"},ho=t("pre",{class:"language-html shadow-none"},[o("            "),t("code",null,`
              <template> 
                <rs-button @click="showModal = true">Open Modal</rs-button>
                <rs-modal v-model="showModal">
                  <template #header> Custom Header </template>
                  <template #body> Custom Body </template>
                  <template #footer> Custom Footer </template>
                </rs-modal>
                <rs-button @click="showModalCustom = true">Custom Button</rs-button>
                <rs-modal v-model="showModalCustom" cancel-title="Close" ok-title="Accept">
                  This is modal content.
                </rs-modal>
                <rs-button @click="showModalOK = true">Ok Only</rs-button>
                <rs-modal v-model="showModalOK" ok-only>
                  This is modal content.
                </rs-modal>
                <rs-button @click="showModalCancel = true">Cancel Only</rs-button>
                <rs-modal v-model="showModalCancel" cancel-only>
                  This is modal content.
                </rs-modal>
              </template>

              <script> 
                import { ref } from "vue";
                import RsButton from "@/components/Button.vue";
                import RsModal from "@/components/Modal.vue";

                export default {
                  components: {
                    RsButton,
                    RsModal,
                  },
                  setup() {
                    const showModal = ref(false);
                    const showModalCustom = ref(false);
                    const showModalOK = ref(false);
                    const showModalCancel = ref(false);
                    return {
                      showModal,
                      showModalCustom,
                      showModalOK,
                      showModalCancel,
                    };
                  },
                };
              <\/script>
            `),o(`
          `)],-1),bo=t("p",{class:"mb-4"},[o(" You can bind function for ok and cancel button inside the modal by using "),t("code",null,"ok-callback"),o(" and "),t("code",null,"cancel-callback"),o(" prop. ")],-1),ko={class:"flex flex-wrap items-center justify-start gap-x-6"},vo={class:"flex justify-end"},yo={class:"z-0"},Mo=t("pre",{class:"language-html shadow-none"},[o("            "),t("code",null,`
              <template> 
                <rs-button @click="showModal = true">Open Modal</rs-button>
                <rs-modal title="This is a modal" v-model="showModal" :ok-callback="clickOK" :cancel-callback="clickCancel">
                  This is the content of small modal.
                </rs-modal>
              </template>

              <script> 
                import { ref } from "vue";
                import RsButton from "@/components/Button.vue";
                import RsModal from "@/components/Modal.vue";

                export default {
                  components: {
                    RsButton,
                    RsModal,
                  },
                  setup() {
                    const showModal = ref(false);
                    const clickOK = () => {
                      alert("You have clicked OK");
                    };
                
                    const clickCancel = () => {
                      alert("You have clicked Cancel");
                    };
                    return {
                      showModal,
                      clickOK,
                      clickCancel,
                    };
                  },
                };
              <\/script>
            `),o(`
          `)],-1),To={__name:"modal",setup(m){const d=B({modal1:!1,modal2:!1,modal3:!1,modal4:!1,modal5:!1,modal6:!1,modal7:!1,modal8:!1,modal9:!1,modal10:!1,modal11:!1,modal12:!1,modal13:!1}),i=B({code1:!1,code2:!1,code3:!1,code4:!1,code5:!1}),k=()=>{alert("You have clicked OK")},T=()=>{alert("You have clicked Cancel")};return(f,e)=>{const x=z,r=$,u=q,v=F("SimpleBar"),y=Y,M=D,w=L("highlight");return c(),p("div",null,[a(x),a(M,null,{header:n(()=>[o("Default ")]),body:n(()=>[J,t("div",Q,[a(r,{onClick:e[0]||(e[0]=s=>l(d).modal1=!0)},{default:n(()=>[o("Show Modal")]),_:1}),a(r,{onClick:e[1]||(e[1]=s=>l(d).modal9=!0)},{default:n(()=>[o("Hide Overlay")]),_:1})]),a(u,{title:"This is a modal",modelValue:l(d).modal1,"onUpdate:modelValue":e[2]||(e[2]=s=>l(d).modal1=s)},{default:n(()=>[o(" This is the content of modal. ")]),_:1},8,["modelValue"]),a(u,{title:"This is a modal",modelValue:l(d).modal9,"onUpdate:modelValue":e[3]||(e[3]=s=>l(d).modal9=s),"hide-overlay":""},{default:n(()=>[o(" This is the content of modal. ")]),_:1},8,["modelValue"]),t("div",W,[t("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:e[4]||(e[4]=s=>l(i).code1?l(i).code1=!1:l(i).code1=!0)}," Show Code ")]),a(y,null,{default:n(()=>[a(g,{name:"fade"},{default:n(()=>[h((c(),p("div",X,[a(v,{style:{height:"400px"}},{default:n(()=>[Z]),_:1})])),[[b,l(i).code1],[w]])]),_:1})]),_:1})]),_:1}),a(M,null,{header:n(()=>[o("Size ")]),body:n(()=>[oo,t("div",eo,[a(r,{onClick:e[5]||(e[5]=s=>l(d).modal2=!0)},{default:n(()=>[o("Small Size")]),_:1}),a(r,{onClick:e[6]||(e[6]=s=>l(d).modal3=!0)},{default:n(()=>[o("Medium Size")]),_:1}),a(r,{onClick:e[7]||(e[7]=s=>l(d).modal4=!0)},{default:n(()=>[o("Large Size")]),_:1})]),a(u,{title:"This is a modal",size:"sm",modelValue:l(d).modal2,"onUpdate:modelValue":e[8]||(e[8]=s=>l(d).modal2=s)},{default:n(()=>[o(" This is the content of small modal. ")]),_:1},8,["modelValue"]),a(u,{title:"This is a modal",size:"md",modelValue:l(d).modal3,"onUpdate:modelValue":e[9]||(e[9]=s=>l(d).modal3=s)},{default:n(()=>[o(" This is the content of medium modal. ")]),_:1},8,["modelValue"]),a(u,{title:"This is a modal",size:"lg",modelValue:l(d).modal4,"onUpdate:modelValue":e[10]||(e[10]=s=>l(d).modal4=s)},{default:n(()=>[o(" This is the content of large modal. ")]),_:1},8,["modelValue"]),t("div",lo,[t("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:e[11]||(e[11]=s=>l(i).code2?l(i).code2=!1:l(i).code2=!0)}," Show Code ")]),a(y,null,{default:n(()=>[a(g,{name:"fade"},{default:n(()=>[h((c(),p("div",to,[a(v,{style:{height:"400px"}},{default:n(()=>[no]),_:1})])),[[b,l(i).code2],[w]])]),_:1})]),_:1})]),_:1}),a(M,null,{header:n(()=>[o("Position ")]),body:n(()=>[ao,t("div",so,[a(r,{onClick:e[12]||(e[12]=s=>l(d).modal5=!0)},{default:n(()=>[o("Top")]),_:1}),a(r,{onClick:e[13]||(e[13]=s=>l(d).modal6=!0)},{default:n(()=>[o("Center")]),_:1}),a(r,{onClick:e[14]||(e[14]=s=>l(d).modal7=!0)},{default:n(()=>[o("Bottom")]),_:1})]),a(u,{title:"This is a modal",position:"top",modelValue:l(d).modal5,"onUpdate:modelValue":e[15]||(e[15]=s=>l(d).modal5=s)},{default:n(()=>[o(" This is the content of modal. ")]),_:1},8,["modelValue"]),a(u,{title:"This is a modal",position:"center",modelValue:l(d).modal6,"onUpdate:modelValue":e[16]||(e[16]=s=>l(d).modal6=s)},{default:n(()=>[o(" This is the content of modal. ")]),_:1},8,["modelValue"]),a(u,{title:"This is a modal",position:"bottom",modelValue:l(d).modal7,"onUpdate:modelValue":e[17]||(e[17]=s=>l(d).modal7=s)},{default:n(()=>[o(" This is the content of modal. ")]),_:1},8,["modelValue"]),t("div",io,[t("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:e[18]||(e[18]=s=>l(i).code3?l(i).code3=!1:l(i).code3=!0)}," Show Code ")]),a(y,null,{default:n(()=>[a(g,{name:"fade"},{default:n(()=>[h((c(),p("div",mo,[a(v,{style:{height:"400px"}},{default:n(()=>[ro]),_:1})])),[[b,l(i).code3],[w]])]),_:1})]),_:1})]),_:1}),a(M,null,{header:n(()=>[o("Customize")]),body:n(()=>[uo,t("div",co,[a(r,{onClick:e[19]||(e[19]=s=>l(d).modal8=!0)},{default:n(()=>[o("Show Modal")]),_:1}),a(r,{onClick:e[20]||(e[20]=s=>l(d).modal10=!0)},{default:n(()=>[o("Custom Button")]),_:1}),a(r,{onClick:e[21]||(e[21]=s=>l(d).modal11=!0)},{default:n(()=>[o("OK Only")]),_:1}),a(r,{onClick:e[22]||(e[22]=s=>l(d).modal12=!0)},{default:n(()=>[o("Cancel Only")]),_:1})]),a(u,{title:"This is a modal",modelValue:l(d).modal8,"onUpdate:modelValue":e[23]||(e[23]=s=>l(d).modal8=s)},{header:n(()=>[o(" Custom Header ")]),body:n(()=>[o("Custom Body ")]),footer:n(()=>[o(" Custom Footer")]),_:1},8,["modelValue"]),a(u,{title:"This is a modal",modelValue:l(d).modal10,"onUpdate:modelValue":e[24]||(e[24]=s=>l(d).modal10=s),"cancel-title":"Close","ok-title":"Accept"},{default:n(()=>[o(" This is the content of modal. ")]),_:1},8,["modelValue"]),a(u,{title:"This is a modal",modelValue:l(d).modal11,"onUpdate:modelValue":e[25]||(e[25]=s=>l(d).modal11=s),"ok-only":""},{default:n(()=>[o(" This is the content of modal. ")]),_:1},8,["modelValue"]),a(u,{title:"This is a modal",modelValue:l(d).modal12,"onUpdate:modelValue":e[26]||(e[26]=s=>l(d).modal12=s),"cancel-only":""},{default:n(()=>[o(" This is the content of modal. ")]),_:1},8,["modelValue"]),t("div",fo,[t("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:e[27]||(e[27]=s=>l(i).code4?l(i).code4=!1:l(i).code4=!0)}," Show Code ")]),a(y,null,{default:n(()=>[a(g,{name:"fade"},{default:n(()=>[h((c(),p("div",po,[a(v,{style:{height:"400px"}},{default:n(()=>[ho]),_:1})])),[[b,l(i).code4],[w]])]),_:1})]),_:1})]),_:1}),a(M,null,{header:n(()=>[o("Bind Function ")]),body:n(()=>[bo,t("div",ko,[a(r,{onClick:e[28]||(e[28]=s=>l(d).modal13=!0)},{default:n(()=>[o("Bind Function")]),_:1})]),a(u,{title:"This is a modal",modelValue:l(d).modal13,"onUpdate:modelValue":e[29]||(e[29]=s=>l(d).modal13=s),"ok-callback":k,"cancel-callback":T},{default:n(()=>[o(" This is the content of modal. ")]),_:1},8,["modelValue"]),t("div",vo,[t("button",{class:"text-sm border border-slate-200 py-1 px-3 rounded-lg",onClick:e[30]||(e[30]=s=>l(i).code5?l(i).code5=!1:l(i).code5=!0)}," Show Code ")]),a(y,null,{default:n(()=>[a(g,{name:"fade"},{default:n(()=>[h((c(),p("div",yo,[a(v,{style:{height:"400px"}},{default:n(()=>[Mo]),_:1})])),[[b,l(i).code5],[w]])]),_:1})]),_:1})]),_:1})])}}};export{To as default};

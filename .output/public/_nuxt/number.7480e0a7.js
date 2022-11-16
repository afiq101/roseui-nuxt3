import{_ as i}from"./Breadcrumb.5e106003.js";import{_ as n}from"./RsCard.a461e6bf.js";import{i as m,o as u,b as s,j as e,w as a,k as o}from"./entry.5f4d3365.js";const h={__name:"number",setup(p){return(_,d)=>{const l=i,t=m("FormKit"),r=n;return u(),s("div",null,[e(l),e(r,null,{header:a(()=>[o(" Default ")]),body:a(()=>[e(t,{type:"number",help:"What temperature should the house be?",label:"Temperature",value:"25",step:"1"})]),_:1}),e(r,null,{header:a(()=>[o(" Number validation ")]),body:a(()=>[e(t,{type:"number",help:"The temperature should be between 20 - 50 degrees",label:"Temperature",value:"20",step:"1",validation:"between:20,50","validation-visibility":"live"}),e(t,{type:"number",help:"Minimum temperature should be 20 degrees",label:"Temperature",value:"20",step:"1",validation:"min:20","validation-visibility":"live"}),e(t,{type:"number",help:"Maximum temperature should be 50 degrees",label:"Temperature",value:"50",step:"1",validation:"max:50","validation-visibility":"live"})]),_:1})])}}};export{h as default};

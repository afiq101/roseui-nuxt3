import{ap as r,aq as u,v as a}from"./entry.5f4d3365.js";const i=r({id:"user",state:()=>({user:null,isAuth:!1}),actions:{setUser(e){this.user=e},setAuth(e){this.isAuth=e}}}),h=u((e,o)=>{const t=i();if(e.matched.some(s=>s.meta.requiresAuth))if(t.isAuth)next();else return a("/login")});export{h as default};

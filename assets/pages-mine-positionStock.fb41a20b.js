import{q as e,a1 as t,s as a,u as s,o as l,a as r,w as u,x as n,b as c,A as o,B as i,e as d,l as p,t as f,a2 as b,h as m,y as x,f as _}from"./index-0856ab2f.js";import{a as y,b as g}from"./mypage.6300dc88.js";import{_ as j}from"./u-tabs.3954f0d5.js";import{_ as h}from"./u-sticky.9f768f8e.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-badge.1ee4fbe0.js";const k={__name:"positionStock",setup(k){const v=e({menuList:[{name:"股票",type:1},{name:"数字货币",type:2},{name:"期货",type:3}],current:0,type:1}),w=t((()=>{let e="",t="";return 2==v.type?(e="货币持仓",t="货币平仓"):3==v.type?(e="期货持仓",t="期货平仓"):(e="我的持仓",t="我的平仓"),{text1:e,text2:t}})),L=e=>{v.type=v.menuList[e].type};return a((()=>{})),s((()=>{})),(e,t)=>{const a=m,s=n(x("u-navbar"),y),k=n(x("u-tabs"),j),V=_,q=n(x("u-sticky"),h),z=n(x("mypage"),g);return l(),r(z,null,{default:u((()=>[c(s,{"is-back":!0,title:"股票持仓","border-bottom":!1,class:"bd-base-bottom"},{right:u((()=>[o(c(a,{class:"pdl-20 pdr-20 c-text-4"},{default:u((()=>[d("一键平仓")])),_:1},512),[[i,1==v.type]])])),_:1}),c(q,null,{default:u((()=>[c(V,{class:"bgc-base"},{default:u((()=>[c(k,{list:v.menuList,"is-scroll":!1,modelValue:v.current,"onUpdate:modelValue":t[0]||(t[0]=e=>v.current=e),onChange:L,"active-color":"#138eb4","inactive-color":"#ccc","font-size":"28"},null,8,["list","modelValue"]),c(V,{class:"pd-30 flex flex-around bgc-base bd-base-bottom"},{default:u((()=>[c(V,{class:p(["w-33 inline-flex flex-align-center flex-justify-center pdl-10 pdr-10 h-44px bgc-tab border-radius-6",{"bgc-c-primary":!0}])},{default:u((()=>[c(a,null,{default:u((()=>[d(f(b(w).text1),1)])),_:1})])),_:1}),c(V,{class:"w-33 inline-flex flex-align-center flex-justify-center pdl-10 pdr-10 h-44px bgc-tab border-radius-6"},{default:u((()=>[c(a,null,{default:u((()=>[d(f(b(w).text2),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(V,{class:"bgc-header"},{default:u((()=>[c(V,{class:"flex flex-justify-center pd-50"},{default:u((()=>[c(a,{class:"c-text-2"},{default:u((()=>[d("暂无数据")])),_:1})])),_:1})])),_:1})])),_:1})}}};export{k as default};

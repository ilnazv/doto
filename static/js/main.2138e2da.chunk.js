(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{61:function(e,t,a){e.exports=a(80)},66:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),o=(a(66),a(41)),l=a(42),s=a(44),u=a(43),m=a(45),d=a(50),h=a(24),p=a(51),f=a(56),g=a(101),E=a(115),b=a(102),w=a(103),k=a(104),v=a(106),y=a(36),S=a(114),j=a(107),O=a(108),x=a(109),z=a(110),N=a(113),_=a(105),H=a(111),B=a(112),U=a(3),C=Object(g.a)(function(e){return Object(E.a)({main:{},background:{top:0,left:0,height:"calc(100% + 56px)",width:"100%",position:"fixed",background:"radial-gradient(ellipse at 0% 0%, ".concat("#495591"," 0%, ").concat("#1e254c"," 100%)")},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,top:64},contentHeader:{height:64},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:240}})}),M=function(e){var t=r.a.useState(!1),a=Object(f.a)(t,2),n=a[0],i=a[1],c=C(),o=e.setMinimized;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{position:"fixed"},r.a.createElement(w.a,null,r.a.createElement(k.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){return i(!n)}},r.a.createElement(_.a,null)),r.a.createElement(k.a,{color:"inherit","aria-label":"minimize toggle",edge:"start",onClick:o},r.a.createElement(v.a,null,"photo_size_select_large")),r.a.createElement(y.a,{variant:"h6",noWrap:!0}))),r.a.createElement("main",{className:c.main},r.a.createElement("div",{className:c.background}),r.a.createElement("div",{className:c.contentHeader}),r.a.createElement(S.a,{className:c.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:c.drawerPaper}},r.a.createElement(j.a,null),r.a.createElement(O.a,null,["Inbox","Starred","Send email","Drafts"].map(function(e,t){return r.a.createElement(x.a,{button:!0,key:e},r.a.createElement(z.a,null,t%2===0?r.a.createElement(H.a,null):r.a.createElement(B.a,null)),r.a.createElement(N.a,{primary:e}))})),r.a.createElement(j.a,null),r.a.createElement(O.a,null,["All mail","Trash","Spam"].map(function(e,t){return r.a.createElement(x.a,{button:!0,key:e},r.a.createElement(z.a,null,t%2===0?r.a.createElement(H.a,null):r.a.createElement(B.a,null)),r.a.createElement(N.a,{primary:e}))}))),r.a.createElement("div",{className:Object(U.a)(c.content,Object(p.a)({},c.contentShift,n))},e.children)))},T=a(38),W=a.n(T),D=a(54),I="https://api.opendota.com",J={loadHeroStats:function(){var e=Object(D.a)(W.a.mark(function e(){var t,a,n;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(I,"/api/heroStats"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.map(function(e){return{name:e.localized_name,imageUrl:I+e.img,iconUrl:I+e.icon,attack_type:e.attack_type}}));case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},L=r.a.lazy(function(){return a.e(3).then(a.bind(null,119))}),P=r.a.lazy(function(){return a.e(4).then(a.bind(null,118))}),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleToggle=function(){a.setState({minimized:!a.state.minimized})},a.getHeroByName=function(e){return a.state.heroes.find(function(t){return t.name.includes(e)})||{attack_type:"undefined",iconUrl:"undefined",imageUrl:"undefined",name:"undefined"}},a.state={minimized:!1,heroes:[],loading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;J.loadHeroStats().then(function(t){return e.setState({heroes:t,loading:!1})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.minimized,i=t.heroes,c=t.loading;return r.a.createElement(M,{setMinimized:this.handleToggle},r.a.createElement(d.a,{basename:"/doto"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(L,{minimized:a,heroes:i,key:"dashboard",loading:c})}}),r.a.createElement(h.a,{exact:!0,path:"/hero/:id",render:function(t){return r.a.createElement(P,Object.assign({hero:e.getHeroByName(t.match.params.id)},t,{key:"herostats"}))}})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[61,1,2]]]);
//# sourceMappingURL=main.2138e2da.chunk.js.map
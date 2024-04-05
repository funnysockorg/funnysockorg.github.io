"use strict";(self.webpackChunkfunnysockorg_github_io=self.webpackChunkfunnysockorg_github_io||[]).push([[4082],{4082:(e,t,l)=>{l.d(t,{diagram:()=>u});var n=l(1396),o=l(4218),a=l(5625),i=l(1837),s=l(3019);l(7484),l(7967),l(7856),l(1644),l(6060);const d=e=>i.e.sanitizeText(e,(0,i.c)());let r={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const c=function(e,t,l,n,o){const a=Object.keys(e);i.l.info("keys:",a),i.l.info(e),a.filter((t=>e[t].parent==o)).forEach((function(l){var a,s;const r=e[l],c=r.cssClasses.join(" "),b=(0,i.k)(r.styles),p=r.label??r.id,u={labelStyle:b.labelStyle,shape:"class_box",labelText:d(p),classData:r,rx:0,ry:0,class:c,style:b.style,id:r.id,domId:r.domId,tooltip:n.db.getTooltip(r.id,o)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(a=(0,i.c)().flowchart)?void 0:a.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,u),o&&t.setParent(r.id,o),i.l.info("setNode",u)}))};function b(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const p={setConf:function(e){r={...r,...e}},draw:async function(e,t,l,n){i.l.info("Drawing class - ",t);const p=(0,i.c)().flowchart??(0,i.c)().class,u=(0,i.c)().securityLevel;i.l.info("config:",p);const f=(null==p?void 0:p.nodeSpacing)??50,g=(null==p?void 0:p.rankSpacing)??50,y=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:f,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=n.db.getNamespaces(),v=n.db.getClasses(),k=n.db.getRelations(),w=n.db.getNotes();let x;i.l.info(k),function(e,t,l,n){const o=Object.keys(e);i.l.info("keys:",o),i.l.info(e),o.forEach((function(o){var a,s;const r=e[o],b={shape:"rect",id:r.id,domId:r.domId,labelText:d(r.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(a=(0,i.c)().flowchart)?void 0:a.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,b),c(r.classes,t,l,n,r.id),i.l.info("setNode",b)}))}(h,y,t,n),c(v,y,t,n),function(e,t){const l=(0,i.c)().flowchart;let n=0;e.forEach((function(e){var a;n++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:`id_${e.id1}_${e.id2}_${n}`,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:b(e.relation.type1),arrowTypeEnd:b(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,i.n)(null==l?void 0:l.curve,o.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,i.k)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(a=(0,i.c)().flowchart)?void 0:a.htmlLabels)??(0,i.c)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,n)}))}(k,y),function(e,t,l,n){i.l.info(e),e.forEach((function(e,a){var s,c;const b=e,p="",u="",f=b.text,g={labelStyle:p,shape:"note",labelText:d(f),noteData:b,rx:0,ry:0,class:"",style:u,id:b.id,domId:b.id,tooltip:"",type:"note",padding:(null==(s=(0,i.c)().flowchart)?void 0:s.padding)??(null==(c=(0,i.c)().class)?void 0:c.padding)};if(t.setNode(b.id,g),i.l.info("setNode",g),!b.class||!(b.class in n))return;const y=l+a,h={id:`edgeNote${y}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,i.n)(r.curve,o.c_6)};t.setEdge(b.id,b.class,h,y)}))}(w,y,k.length+1,v),"sandbox"===u&&(x=(0,o.Ys)("#i"+t));const m="sandbox"===u?(0,o.Ys)(x.nodes()[0].contentDocument.body):(0,o.Ys)("body"),T=m.select(`[id="${t}"]`),S=m.select("#"+t+" g");if(await(0,s.r)(S,y,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),i.u.insertTitle(T,"classTitleText",(null==p?void 0:p.titleTopMargin)??5,n.db.getDiagramTitle()),(0,i.o)(y,T,null==p?void 0:p.diagramPadding,null==p?void 0:p.useMaxWidth),!(null==p?void 0:p.htmlLabels)){const e="sandbox"===u?x.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),n=e.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",l.width),n.setAttribute("height",l.height),t.insertBefore(n,t.firstChild)}}}},u={parser:n.p,db:n.d,renderer:p,styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,n.d.clear()}}}}]);
"use strict";(self.webpackChunkfunnysockorg_github_io=self.webpackChunkfunnysockorg_github_io||[]).push([[3089],{4351:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(7294);var a=n(512),i=n(2263),r=n(8264),o=n(5281),s=n(1460),l=n(9703),d=n(197),g=n(9985),c=n(5742),u=n(136),p=n(5893);function m(e){const t=(0,u.C)(e);return(0,p.jsx)(c.Z,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.Z)(),{blogDescription:a,blogTitle:o,permalink:s}=t,l="/"===s?n:o;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.d,{title:l,description:a}),(0,p.jsx)(d.Z,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:a}=e;return(0,p.jsxs)(s.Z,{sidebar:a,children:[(0,p.jsx)(g.Z,{items:n}),(0,p.jsx)(l.Z,{metadata:t})]})}function f(e){return(0,p.jsxs)(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(m,{...e}),(0,p.jsx)(b,{...e})]})}},9703:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(5999),i=n(2244),r=n(5893);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.Z,{permalink:n,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.Z,{permalink:o,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(9460),i=n(3665),r=n(5893);function o(e){let{items:t,component:n=i.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.n,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},136:(e,t,n)=>{n.d(t,{C:()=>g,i:()=>c});var a=n(4996),i=n(2263),r=n(5102);var o=n(9460);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,n){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function g(e){const{siteConfig:t}=(0,i.Z)(),{withBaseUrl:n}=(0,a.C)(),{metadata:{blogDescription:r,blogTitle:o,permalink:g}}=e,c=`${t.url}${g}`;return{"@context":"https://schema.org","@type":"Blog","@id":c,mainEntityOfPage:c,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:o,title:g,description:c,lastUpdatedAt:u}=r,p=a.image??i.image,m=i.keywords??[],h=`${t.url}${r.permalink}`,b=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:g,name:g,description:c,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...d(p,n,g),...m?{keywords:m}:{}}}(e.content,t,n)))}}function c(){const e=function(){const e=(0,r.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,o.C)(),{siteConfig:g}=(0,i.Z)(),{withBaseUrl:c}=(0,a.C)(),{date:u,title:p,description:m,frontMatter:h,lastUpdatedAt:b}=n,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,k=`${g.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:p,name:p,description:m,datePublished:u,...j?{dateModified:j}:{},...l(n.authors),...d(f,c,p),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${g.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}}}]);
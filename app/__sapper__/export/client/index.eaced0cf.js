import{c as s,d as t,b as o,e,f as r,h as n,i as a,j as l,k as h,l as c,m as p,r as f,g as u,a as i,z as g}from"./chunk.6349ebd2.js";function m(s,t,o){const e=Object.create(s);return e.post=t[o],e}function v(s){var t,o,u,i,g=s.post.title;return{c(){t=e("li"),o=e("a"),u=r(g),this.h()},l(s){t=n(s,"LI",{},!1);var e=a(t);o=n(e,"A",{rel:!0,href:!0},!1);var r=a(o);u=l(r,g),r.forEach(h),e.forEach(h),this.h()},h(){o.rel="prefetch",o.href=i="blog/"+s.post.slug},m(s,e){c(s,t,e),p(t,o),p(o,u)},p(s,t){s.posts&&g!==(g=t.post.title)&&f(u,g),s.posts&&i!==(i="blog/"+t.post.slug)&&(o.href=i)},d(s){s&&h(t)}}}function d(s){for(var t,o,f,d,b,j=s.posts,E=[],x=0;x<j.length;x+=1)E[x]=v(m(s,j,x));return{c(){t=u(),o=e("h1"),f=r("Recent posts"),d=u(),b=e("ul");for(var s=0;s<E.length;s+=1)E[s].c();this.h()},l(s){t=l(s,"\n\n"),o=n(s,"H1",{},!1);var e=a(o);f=l(e,"Recent posts"),e.forEach(h),d=l(s,"\n\n"),b=n(s,"UL",{class:!0},!1);for(var r=a(b),c=0;c<E.length;c+=1)E[c].l(r);r.forEach(h),this.h()},h(){document.title="Blog",b.className="svelte-1frg2tf"},m(s,e){c(s,t,e),c(s,o,e),p(o,f),c(s,d,e),c(s,b,e);for(var r=0;r<E.length;r+=1)E[r].m(b,null)},p(s,t){if(s.posts){j=t.posts;for(var o=0;o<j.length;o+=1){const e=m(t,j,o);E[o]?E[o].p(s,e):(E[o]=v(e),E[o].c(),E[o].m(b,null))}for(;o<E.length;o+=1)E[o].d(1);E.length=j.length}},i:i,o:i,d(s){s&&(h(t),h(o),h(d),h(b)),g(E,s)}}}function b({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function j(s,t,o){let{posts:e}=t;return s.$set=(s=>{"posts"in s&&o("posts",e=s.posts)}),{posts:e}}export default class extends s{constructor(s){super(),t(this,s,j,d,o,["posts"])}}export{b as preload};
//# sourceMappingURL=index.eaced0cf.js.map
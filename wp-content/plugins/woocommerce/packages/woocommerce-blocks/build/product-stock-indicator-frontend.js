(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[85,79],{19:function(t,o,n){"use strict";n.d(o,"a",(function(){return c})),n.d(o,"b",(function(){return r}));var e=n(37);const c=t=>!Object(e.a)(t)&&t instanceof Object&&t.constructor===Object;function r(t,o){return c(t)&&o in t}},28:function(t,o,n){"use strict";n.d(o,"a",(function(){return e}));const e=t=>"string"==typeof t},287:function(t,o,n){"use strict";n.d(o,"a",(function(){return e}));var e=function(){return e=Object.assign||function(t){for(var o,n=1,e=arguments.length;n<e;n++)for(var c in o=arguments[n])Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c]);return t},e.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},288:function(t,o,n){"use strict";function e(t){return t.toLowerCase()}n.d(o,"a",(function(){return s}));var c=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function s(t,o){void 0===o&&(o={});for(var n=o.splitRegexp,s=void 0===n?c:n,l=o.stripRegexp,a=void 0===l?r:l,u=o.transform,d=void 0===u?e:u,f=o.delimiter,b=void 0===f?" ":f,p=i(i(t,s,"$1\0$2"),a,"\0"),k=0,v=p.length;"\0"===p.charAt(k);)k++;for(;"\0"===p.charAt(v-1);)v--;return p.slice(k,v).split("\0").map(d).join(b)}function i(t,o,n){return o instanceof RegExp?t.replace(o,n):o.reduce((function(t,o){return t.replace(o,n)}),t)}},291:function(t,o,n){"use strict";n.d(o,"a",(function(){return r}));var e=n(287),c=n(288);function r(t,o){return void 0===o&&(o={}),function(t,o){return void 0===o&&(o={}),Object(c.a)(t,Object(e.a)({delimiter:"."},o))}(t,Object(e.a)({delimiter:"-"},o))}},293:function(t,o,n){"use strict";n.d(o,"a",(function(){return d}));var e=n(4),c=n.n(e),r=n(19),s=n(28),i=n(291),l=n(131);function a(t={}){const o={};return Object(l.getCSSRules)(t,{selector:""}).forEach((t=>{o[t.key]=t.value})),o}function u(t,o){return t&&o?`has-${Object(i.a)(o)}-${t}`:""}const d=t=>{const o=(t=>{const o=Object(r.a)(t)?t:{style:{}};let n=o.style;return Object(s.a)(n)&&(n=JSON.parse(n)||{}),Object(r.a)(n)||(n={}),{...o,style:n}})(t),n=function(t){var o,n,e,s,i,l,d;const{backgroundColor:f,textColor:b,gradient:p,style:k}=t,v=u("background-color",f),g=u("color",b),m=function(t){if(t)return`has-${t}-gradient-background`}(p),y=m||(null==k||null===(o=k.color)||void 0===o?void 0:o.gradient);return{className:c()(g,m,{[v]:!y&&!!v,"has-text-color":b||(null==k||null===(n=k.color)||void 0===n?void 0:n.text),"has-background":f||(null==k||null===(e=k.color)||void 0===e?void 0:e.background)||p||(null==k||null===(s=k.color)||void 0===s?void 0:s.gradient),"has-link-color":Object(r.a)(null==k||null===(i=k.elements)||void 0===i?void 0:i.link)?null==k||null===(l=k.elements)||void 0===l||null===(d=l.link)||void 0===d?void 0:d.color:void 0}),style:a({color:(null==k?void 0:k.color)||{}})}}(o),e=function(t){var o;const n=(null===(o=t.style)||void 0===o?void 0:o.border)||{};return{className:function(t){var o;const{borderColor:n,style:e}=t,r=n?u("border-color",n):"";return c()({"has-border-color":!!n||!(null==e||null===(o=e.border)||void 0===o||!o.color),[r]:!!r})}(t),style:a({border:n})}}(o),i=function(t){var o;return{className:void 0,style:a({spacing:(null===(o=t.style)||void 0===o?void 0:o.spacing)||{}})}}(o),l=(t=>{const o=Object(r.a)(t.style.typography)?t.style.typography:{},n=Object(s.a)(o.fontFamily)?o.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:n,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:o.fontSize,fontStyle:o.fontStyle,fontWeight:o.fontWeight,letterSpacing:o.letterSpacing,lineHeight:o.lineHeight,textDecoration:o.textDecoration,textTransform:o.textTransform}}})(o);return{className:c()(l.className,n.className,e.className,i.className),style:{...l.style,...n.style,...e.style,...i.style}}}},37:function(t,o,n){"use strict";n.d(o,"a",(function(){return e}));const e=t=>null===t},431:function(t,o){},472:function(t,o,n){"use strict";n.r(o),n.d(o,"Block",(function(){return u}));var e=n(0),c=n(1),r=n(4),s=n.n(r),i=n(59),l=n(293),a=n(144);n(431);const u=t=>{const{className:o}=t,n=Object(l.a)(t),{parentClassName:r}=Object(i.useInnerBlockLayoutContext)(),{product:a}=Object(i.useProductDataContext)();if(!a.id)return null;const u=!!a.is_in_stock,d=a.low_stock_remaining,f=a.is_on_backorder;return Object(e.createElement)("div",{className:s()(o,{[`${r}__stock-indicator`]:r,"wc-block-components-product-stock-indicator--in-stock":u,"wc-block-components-product-stock-indicator--out-of-stock":!u,"wc-block-components-product-stock-indicator--low-stock":!!d,"wc-block-components-product-stock-indicator--available-on-backorder":!!f,...t.isDescendantOfAllProducts&&{[n.className]:n.className,"wc-block-components-product-stock-indicator wp-block-woocommerce-product-stock-indicator":!0}}),...t.isDescendantOfAllProducts&&{style:n.style}},(({isInStock:t=!1,isLowStock:o=!1,lowStockAmount:n=null,isOnBackorder:e=!1})=>o&&null!==n?Object(c.sprintf)(/* translators: %d stock amount (number of items in stock for product) */
Object(c.__)("%d left in stock","woocommerce"),n):e?Object(c.__)("Available on backorder","woocommerce"):t?Object(c.__)("In stock","woocommerce"):Object(c.__)("Out of stock","woocommerce"))({isInStock:u,isLowStock:!!d,lowStockAmount:d,isOnBackorder:f}))};o.default=Object(a.withProductDataContext)(u)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(A,e,t){"use strict";t.r(e);var o=t(0),n=t.n(o),a=t(16),r=t.n(a),c=t(12),i=t(251),l=t.n(i),g=t(201),s=t.n(g),u=t(207),D=function(A){function e(){return A.apply(this,arguments)||this}return r()(e,A),e.prototype.render=function(){var A=this.props.card,e=A.title,t=A.url,o=A.description,a=A.image;return n.a.createElement("a",{href:t,className:"card",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"card-context"},n.a.createElement(l.a,{fluid:a.childImageSharp.fluid,alt:"",className:"card-image"}),n.a.createElement("div",{className:"card-context--feedback"},n.a.createElement(s.a,{icon:u.b,size:"4x"}))),n.a.createElement("div",{className:"card-lens"},n.a.createElement("h2",null,e),n.a.createElement("p",null,o,n.a.createElement(s.a,{icon:u.d}))))},e}(n.a.Component);D.propTypes={card:c.shape({title:c.string.isRequired,url:c.string.isRequired,description:c.string.isRequired,image:c.object}).isRequired};var m=D,d=t(222),p=t(220),h=t(197),E=t(322),B=function(A){function e(){return A.apply(this,arguments)||this}return r()(e,A),e.prototype.render=function(){return n.a.createElement("div",{className:"breadcrumbs"},n.a.createElement("div",{className:"contain"},n.a.createElement(h.Link,{className:"crumb",to:"/"},"Bitcoin Resources"),n.a.createElement("span",{className:"crumb"}," ",n.a.createElement(s.a,{icon:E.a})," "),n.a.createElement("span",{className:"active-crumb crumb nowrap"},this.props.title)))},e}(o.Component);function f(A){var e=A.data.linksJson;return n.a.createElement(d.a,null,n.a.createElement("div",null,n.a.createElement(p.a,{title:e.title}),n.a.createElement(B,{title:e.title}),n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"contain"},n.a.createElement("p",{className:"lead"},e.lead),n.a.createElement("ul",{className:"wrapper"},e.links.map(function(A,e){return n.a.createElement("li",{key:e},n.a.createElement(m,{card:A}))}))))))}t.d(e,"default",function(){return f}),t.d(e,"pageQuery",function(){return w});var w="635047055"},197:function(A,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return m}),t.d(e,"StaticQueryContext",function(){return u}),t.d(e,"StaticQuery",function(){return D});var o=t(0),n=t.n(o),a=t(12),r=t.n(a),c=t(194),i=t.n(c);t.d(e,"Link",function(){return i.a}),t.d(e,"withPrefix",function(){return c.withPrefix}),t.d(e,"navigate",function(){return c.navigate}),t.d(e,"push",function(){return c.push}),t.d(e,"replace",function(){return c.replace}),t.d(e,"navigateTo",function(){return c.navigateTo});var l=t(198),g=t.n(l);t.d(e,"PageRenderer",function(){return g.a});var s=t(41);t.d(e,"parsePath",function(){return s.a});var u=n.a.createContext({}),D=function(A){return n.a.createElement(u.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}D.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},198:function(A,e,t){var o;A.exports=(o=t(208))&&o.default||o},208:function(A,e,t){"use strict";t.r(e);var o=t(0),n=t.n(o),a=t(12),r=t.n(a),c=t(52),i=t(1),l=function(A){var e=A.location,t=i.a.getResourcesForPathname(e.pathname);return n.a.createElement(c.a,{location:e,pageResources:t})};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=l},213:function(A,e,t){A.exports=t.p+"static/logo-29565f095ee3ae350f66aa8a06f774b9.png"},214:function(A,e,t){A.exports=t.p+"static/twitter-website-88349fa7329793ec79eef4edba639613.jpg"},215:function(A,e){A.exports="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAACUWAAAlFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeugkAHro/wB66BAAeuj8AHroOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHroJgB66P8AeugZAHro/AB66DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeuh6AHro/wB66P8Aeuj/AHro/wB66P8Aeuj7AHro2AB66IEAeugFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHroJwB66H0Aeuj/AHro/wB66HcAeuh0AHroqgB66P0Aeuj/AHrogwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHro/wB66P8AeugUAAAAAAAAAAAAeuijAHro/wB66MsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB66P8Aeuj/AHroFAAAAAAAeuglAHro1wB66P8Aeui/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeuj/AHro/wB66O8Aeuj0AHro/wB66P8AeujWAHroMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHro/wB66P8AeuhSAHroVQB66LYAeuj/AHroqQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB66P8Aeuj/AHroFAAAAAAAeugnAHro/wB66P8AeugYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHroJAB66FUAeuj/AHro/wB66GEAeuhgAHrovwB66P8AeujyAHroCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB66JAAeuj/AHro/wB66P8Aeuj/AHro/wB66PsAeujIAHroQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeugEAHroCAB66CoAeuj/AHroJAB66PwAeug5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeugkAHro/wB66BAAeuj8AHroOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAPg/AAD4PwAA4AcAAOAHAAD4xwAA+IcAAPgHAAD4DwAA+IcAAOAHAADgDwAA4D8AAPg/AAD//wAA//8AAA=="},216:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAACHFBMVEUAAADoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegDoegCGAc0hAAAAs3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGSUpLTE1OT1FUVVZXWFlbXF1eX2JjZGZnaWtsbXBxc3R1d3h7fH5/gIKFhoiJjI6PkZKUlZeYmpudoKKjpaaoqqutr7CytLe5ury+wMHDxcfIyszOz9HT1dfZ2tze4OLk5ujp6+3v8fP19/n7/Tdoc2cAAAc9SURBVHja7d3pVxNXGAbwO5MFMJCQhUW2aCQoxQYproW6tLZFSmut1WJRtFqsG6hgFZeighZQEaiKRAW3qiib5P6DDdrTDyo9vJPcWd77Pp/n5OT5ZTLbnbnDWNKj8g+n9v1FG+ZYlFk6BEAABEAABEAABEAABEAA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"},217:function(A,e,t){},220:function(A,e,t){"use strict";var o=t(16),n=t.n(o),a=t(0),r=t.n(a),c=t(250),i=t.n(c),l=t(221),g=function(A){function e(){return A.apply(this,arguments)||this}return n()(e,A),e.prototype.render=function(){return r.a.createElement("div",{className:"hero"},r.a.createElement("h1",null,this.props.title),r.a.createElement(i.a,{params:l}))},e}(a.Component);e.a=g},221:function(A){A.exports={particles:{number:{value:80,density:{enable:!0,value_area:394.57382081613633}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1.5782952832645452,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},222:function(A,e,t){"use strict";var o=t(0),n=t.n(o),a=t(12),r=t.n(a),c=t(232),i=t.n(c),l=function(A){var e=A.children;return n.a.createElement("div",null,e)},g=t(197),s=t(16),u=t.n(s),D=t(234),m=t(201),d=t.n(m),p=t(207),h=t(236),E=t(237),B=E.ShareButtons.TwitterShareButton,f=E.ShareButtons.FacebookShareButton,w=E.ShareButtons.LinkedinShareButton,v=E.ShareButtons.TelegramShareButton,b=E.ShareButtons.WhatsappShareButton,y=E.ShareButtons.RedditShareButton,C=E.ShareButtons.EmailShareButton,k="http://cryptoverted.com",H="A curated list of the best Bitcoin resources",Q=function(A){function e(){return A.apply(this,arguments)||this}u()(e,A);var t=e.prototype;return t.showSettings=function(A){A.preventDefault()},t.render=function(){return n.a.createElement(D.slide,{right:!0,customBurgerIcon:n.a.createElement(d.a,{icon:p.e,mask:p.c,transform:"shrink-6"}),customCrossIcon:n.a.createElement(d.a,{icon:p.f})},n.a.createElement(B,{url:k,title:"A curated list of the best #Bitcoin resources",hashtag:"#Bitcoin",via:"cryptoverted",className:"share-link"},n.a.createElement(d.a,{icon:h.e})," Twitter"),n.a.createElement(f,{url:k,quote:H,hashtag:"#Bitcoin",className:"share-link"},n.a.createElement(d.a,{icon:h.a})," Facebook"),n.a.createElement(w,{url:k,title:"Bitcoin Resources",description:H,className:"share-link"},n.a.createElement(d.a,{icon:h.b})," LinkedIn"),n.a.createElement(v,{url:k,title:H,className:"share-link"},n.a.createElement(d.a,{icon:h.d})," Telegram"),n.a.createElement(b,{url:k,title:H,className:"share-link"},n.a.createElement(d.a,{icon:h.f})," WhatsApp"),n.a.createElement(y,{url:k,title:H,className:"share-link"},n.a.createElement(d.a,{icon:h.c})," Reddit"),n.a.createElement(C,{url:k,subject:"Bitcoin Resources",body:k,className:"share-link"},n.a.createElement(d.a,{icon:p.a})," Email"))},e}(n.a.Component),N=t(213),R=t.n(N),J=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"contain"},n.a.createElement(g.Link,{to:"/",className:"header-logo"},n.a.createElement("img",{alt:"logo",src:R.a})," Cryptoverted"),n.a.createElement("div",{className:"share"},n.a.createElement(Q,null))))},I=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"contain"},n.a.createElement("p",null,"Disclaimer: Some links may be affiliate links"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/cryptoverted"},"Twitter")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://keybase.io/cryptoverted"},"Keybase")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://bitcoinhackers.org/@cryptoverted"},"Mastodon")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.reddit.com/user/cryptoverted"},"Reddit"))),n.a.createElement("ul",null,n.a.createElement("li",null,"BTC: 1EvWF7EqiBnEk7ny8diFA9BRsxZ7nAHDvv"),n.a.createElement("li",null,"ETH: 0xF30AA4c446Dbe72746A5CA34d21D4977e9DFD5a1"),n.a.createElement("li",null,"LTC: 39uT5TpFnwDVgfcPkVnsMXCw2o8kcNsAt6"),n.a.createElement("li",null,"LTC Segwit: MG7bPMEDk44vVAtHrNnDBATLMVjCe9GEMw"),n.a.createElement("li",null,"ZEC: t1JxwMJ9VgQyKfhBP9VZUAiEJQ3e9o8JNdc"))))},P=t(214),x=t.n(P),j=t(215),M=t.n(j),T=t(216),F=t.n(T),O=(t(217),function(A){var e=A.children;return n.a.createElement(l,null,n.a.createElement(i.a,{title:"Cryptoverted: a person predominantly concerned with Bitcoin",meta:[{name:"description",content:"A curated list of the best Bitcoin resources"},{name:"keywords",content:"bitcoin, crypto, cryptocurrency, ethereum, etherium, litecoin, bit coin, money"},{name:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"og:title",content:"Cryptoverted"},{name:"twitter:title",content:"Cryptoverted"},{name:"og:description",content:"A curated list of the best Bitcoin resources"},{name:"twitter:description",content:"A curated list of the best Bitcoin resources"},{name:"og:image",content:x.a},{name:"twitter:image",content:x.a},{name:"og:url",content:"https://cryptoverted.com/"},{name:"twitter:creator",content:"@cryptoverted"},{name:"theme-color",content:"#003366"}],link:[{rel:"canonical",href:"https://cryptoverted.com/"},{rel:"shortcut icon",href:M.a},{rel:"apple-touch-icon",href:F.a},{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"}],script:[{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"},{type:"text/javascript",innerHTML:'\n        window.addEventListener("load", function(){\n          window.cookieconsent.initialise({\n            "palette": {\n              "popup": {\n                "background": "#373a47"\n              },\n              "button": {\n                "background": "#004a94"\n              }\n            },\n            "theme": "classic",\n            "position": "bottom-right"\n          })\n        });'}]}),n.a.createElement(J,null),e,n.a.createElement(I,null))});O.propTypes={children:r.a.func},e.a=O}}]);
//# sourceMappingURL=component---src-templates-page-js-f1ba4efbb1f32f734f79.js.map
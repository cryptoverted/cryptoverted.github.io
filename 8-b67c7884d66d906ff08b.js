(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{212:function(e,t,i){"use strict";var a=i(8);t.__esModule=!0,t.default=void 0;var s,r=a(i(7)),o=a(i(34)),l=a(i(74)),d=a(i(75)),n=a(i(0)),c=a(i(4)),f=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},p=function(e){var t=f(e),i=t.fluid?t.fluid.src:t.fixed.src;return u[i]||!1},h=[];var g=function(e,t){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),s).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+i+"/>":"",s=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",n=e.opacity?e.opacity:"1";return"<picture>"+a+"<img "+l+d+i+s+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+n+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=n.default.forwardRef(function(e,t){var i=e.sizes,a=e.srcSet,s=e.src,r=e.style,o=e.onLoad,c=e.onError,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return n.default.createElement("img",(0,d.default)({sizes:i,srcSet:a,src:s},f,{onLoad:o,onError:c,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var i;i=e.call(this,t)||this;var a=!0,s=!1,r=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,s=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,s=!1);var d=!(i.props.critical&&!i.props.fadeIn);return i.state={isVisible:a,imgLoaded:!1,IOSupported:s,fadeIn:r,hasNoScript:d,seenBefore:l},i.imageRef=n.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,o.default)((0,o.default)(i))),i.handleRef=i.handleRef.bind((0,o.default)((0,o.default)(i))),i}(0,r.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=f(e),i=t.fluid?t.fluid.src:t.fixed.src,u[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=f(this.props),t=e.title,i=e.alt,a=e.className,s=e.style,r=void 0===s?{}:s,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,S=e.Tag,w=e.itemProp,v="boolean"==typeof y?"lightgray":y,L=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,u),E=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),I={title:t,alt:this.state.isVisible?"":i,style:L,className:p};if(h){var R=h;return n.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},n.default.createElement(S,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&n.default.createElement(b,(0,d.default)({src:R.base64},I)),R.tracedSVG&&n.default.createElement(b,(0,d.default)({src:R.tracedSVG},I)),v&&n.default.createElement(S,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&n.default.createElement("picture",null,R.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),n.default.createElement(b,{alt:i,title:t,sizes:R.sizes,src:R.src,srcSet:R.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,d.default)({alt:i,title:t},R))}}))}if(g){var z=g,N=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},r);return"inherit"===r.display&&delete N.display,n.default.createElement(S,{className:(a||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},z.base64&&n.default.createElement(b,(0,d.default)({src:z.base64},I)),z.tracedSVG&&n.default.createElement(b,(0,d.default)({src:z.tracedSVG},I)),v&&n.default.createElement(S,{title:t,style:{backgroundColor:v,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),this.state.isVisible&&n.default.createElement("picture",null,z.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),n.default.createElement(b,{alt:i,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,srcSet:z.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,d.default)({alt:i,title:t,width:z.width,height:z.height},z))}}))}return null},t}(n.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:S,sizes:w,fixed:S,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var v=y;t.default=v},291:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var a={prefix:"fal",iconName:"angle-right",icon:[192,512,[],"f105","M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"]}}}]);
//# sourceMappingURL=8-b67c7884d66d906ff08b.js.map
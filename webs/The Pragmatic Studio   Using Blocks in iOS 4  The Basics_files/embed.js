var disqus_config;var DsqLocal;var disqus_callback;var disqus_callback_params;var disqus_category_id;var disqus_container_id;var disqus_custom_strings;var disqus_def_email;var disqus_def_name;var disqus_default_text;var disqus_dev;var disqus_developer;var disqus_domain;var disqus_facebook_forum;var disqus_facebook_key;var disqus_frame_theme;var disqus_href;var disqus_identifier;var disqus_iframe_css;var disqus_message;var disqus_shortname;var disqus_thread_slug;var disqus_skip_auth;var disqus_sort;var disqus_title;var disqus_url;var disqus_per_page;var DISQUS=(function(h,d){var e=0,b={running:false,timer:null,queue:[],beat:function(){if(b.queue.length===0){b.stop()}else{try{if(b.queue[0][0]()){b.queue.shift()[1]()}}catch(j){if(!(j instanceof a.AssertionError)){throw j}}}},stop:function(){b.running=false;clearInterval(b.timer)},start:function(){b.running=true;b.timer=setInterval(b.beat,100)}},f=h.getElementsByTagName("head")[0]||h.getElementsByTagName("body")[0],i={pool:[],add:function(j){i.pool.push(j)},drain:function(){while(i.pool.length>0){i.pool.shift()()}}},g={},a={config:{},browser:{ie:/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent),ie6:(!d.XMLHttpRequest)?true:false,ie7:(h.all&&!d.opera&&d.XMLHttpRequest)?true:false,webkit:navigator.userAgent.indexOf("AppleWebKit/")>-1,opera:!!(d.opera&&d.opera.buildNumber),gecko:navigator.userAgent.indexOf("Gecko/")>-1,mobile:/(iPhone|Android|iPod|iPad|webOS|Mobile Safari|Windows Phone)/i.test(navigator.userAgent)},blocks:{},status:null,modules:{}};a.settings={realtime_url:"http://rt.disqus.com/forums/realtime.js",urls:{unmerged_profiles:"http://disqus.com/embed/profile/unmerged_profiles/"},minify_js:true,debug:false,disqus_url:"http://disqus.com",uploads_url:"http://media.disqus.com/uploads",recaptcha_public_key:"6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u",media_url:"http://mediacdn.disqus.com/1296248210"};a.AssertionError=function(j){this.message=j};a.AssertionError.prototype.toString=function(){return"AssertionError: "+this.message};a.assert=function(k,j){if(!k){throw new a.AssertionError(j)}};a.defer=function(j,k){b.queue.push([j,k]);b.beat();if(!b.running){b.start()}};a.each=function(n,o){var l=n.length,m=Array.prototype.forEach;if(!isNaN(l)){if(m){m.call(n,o)}else{for(var k=0;k<l;k++){o(n[k],k,n)}}}else{for(var j in n){if(n.hasOwnProperty(j)){o(n[j],j,n)}}}};a.extend=function(){var k,j;if(arguments.length<=1){k=a;j=[arguments[0]||{}]}else{k=arguments[0]||{};j=Array.prototype.slice.call(arguments,1)}DISQUS.each(j,function(l){DISQUS.each(l,function(n,m){k[m]=n})});return k};a.partial=function(){var k=arguments[0],j=Array.prototype.slice.call(arguments,1);return function(){var n=Array.prototype.slice.call(arguments),o=[];for(var l=0,m=j.length;l<m;l++){o.push(j[l]===undefined?n.shift():j[l])}while(n.length>0){o.push(n.shift())}return k.apply(this,o)}};a.getGuid=function(){return e++};a.serialize=function(k,n,l){if(typeof n!="undefined"){k+=(~k.indexOf("?")?(k.charAt(k.length-1)=="&"?"":"&"):"?");DISQUS.each(n,function(p,o){k+=o;if(p!==null){k+="="+encodeURIComponent(p)}k+="&"})}if(l){var m={};m[(new Date()).getTime()]=null;return a.serialize(k,m)}var j=k.length;return(k.charAt(j-1)=="&"?k.slice(0,j-1):k)};a.useSSL=function(l){if(!d.location.href.match("/^https/")){return}var k,m=["disqus_url","media_url","realtime_url","uploads_url"];l=l||a.settings;for(var j=0;j<m.length;j++){k=m[j];if(typeof l[k]=="string"){l[k]=l[k].replace(/^http/,"https")}}};a.useSSL();a.ready=function(k){function j(){var m=a.settings.media_url,l=m+"/javascript/embed/dtpl/",o=m+"/build/system/",n;DISQUS.status="loading";DISQUS.requireStylesheet(m+"/styles/dtpl/defaults.css");if(DISQUS.settings.debug){n=[l+"dtpl.js",l+"utils.js",l+"sandbox.js",l+"tooltip.js",l+"comm.js",l+"ui.js",l+"compat.js",o+"defaults.js",m+"/js/src/lib/easyxdm.js",m+"/js/src/json.js",DISQUS.settings.media_url+"/js/src/lib/stacktrace.js"]}else{n=[o+"disqus.js"]}DISQUS.requireSet(n,DISQUS.settings.debug,function(){DISQUS.status="ready";i.drain()})}switch(DISQUS.status){case"ready":k();break;case"loading":i.add(k);break;case null:i.add(k);j();break}};function c(k){var j=k.currentTarget||k.srcElement;var l=j.getAttribute("data-callback-id");if(k.type==="load"||/^(complete|loaded)$/.test(j.readyState)){if(typeof l!==null){g[l]()}if(j.removeEventListener){j.removeEventListener("load",c,false)}else{j.detachEvent("onreadystatechange",c)}}}a.require=function(k,n,l,o){var j=h.createElement("script");j.src=DISQUS.serialize(k,n,l);j.async=true;j.charset="UTF-8";if(o){var m=DISQUS.getGuid();g[m]=o;j.setAttribute("data-callback-id",m);if(j.addEventListener){j.addEventListener("load",c,false)}else{j.attachEvent("onreadystatechange",c)}}f.appendChild(j);return DISQUS};a.requireSet=function(l,k,m){var j=l.length;DISQUS.each(l,function(n){DISQUS.require(n,{},k,function(){if(--j===0){m()}})})};a.requireStylesheet=function(j,m,k){var l=h.createElement("link");l.rel="stylesheet";l.type="text/css";l.href=DISQUS.serialize(j,m,k);f.appendChild(l);return a};a.addBlocks=function(l,m){var k=DISQUS.modules;if(typeof m!="undefined"){return(function(){if(l=="all"){m();k.dtpl_defaults=true;k.dtpl_theme=true}else{if(l=="defaults"){m();k.dtpl_defaults=true}else{if(l=="theme"){if(k.dtpl_defaults){m();k.dtpl_theme=true}else{DISQUS.addJob(function(){return k.dtpl_defaults},function(){DISQUS.addBlocks(l,m)})}}}}}())}var j=function(){return{Builder:DISQUS.strings.Builder,renderBlock:DISQUS.renderBlock,each:DISQUS.each,extend:DISQUS.extend,blocks:DISQUS.blocks,interpolate:DISQUS.strings.interpolate}};if(typeof l=="undefined"){return function(n){n(j());k.dtpl_defaults=true;k.dtpl_theme=true}}else{if(l=="defaults"){return function(n){n(j());k.dtpl_defaults=true}}else{if(l=="theme"){if(k.dtpl_defaults){return function(n){n(j());k.dtpl_theme=true}}return function(n){DISQUS.addJob(function(){return k.dtpl_defaults},function(){DISQUS.addBlocks(l)(n)})}}}}};a.renderBlock=function(j,l){var k=DISQUS.blocks[j];if(typeof k=="undefined"){throw"Block "+j+" was not found!"}return DISQUS.sandbox.wrap(j,k,l)};return a}(document,window));(function(){var b={},a;a={translations:{},setGlobalContext:function(c){DISQUS.extend(b,c)},get:function(c){return a.translations[c]||c},interpolate:function(e,d){var c=[d||{},b];function f(h){for(var g=0,j=c.length;g<j;g++){if(c[g][h]!==undefined){return String(c[g][h])}}throw"Key "+h+"not found in context"}return e.replace(/%\(\w+\)s/g,function(g){return f(g.slice(2,-2))})},pluralize:function(d,e,c){return(d!=1)?c||"s":e||""},trim:function(e){e=e.replace(/^\s\s*/,"");var c=/\s/,d=e.length;while(c.test(e.charAt(--d))){}return e.slice(0,d+1)}};a.Builder=function(){this.value=DISQUS.browser.ie?[]:""};a.Builder.prototype.put=(function(){return(DISQUS.browser.ie?function(c){this.value.push(c)}:function(c){this.value+=c})}());a.Builder.prototype.compile=function(){if(DISQUS.browser.ie){this.value=this.value.join("")}return this.value};DISQUS.extend({strings:a})}());(function(){DISQUS.addJob=DISQUS.defer;DISQUS.getResourceURL=DISQUS.serialize;DISQUS.lang={forEach:DISQUS.each,extend:DISQUS.extend,trim:DISQUS.strings.trim,partial:DISQUS.partial}}());(function(f,e){var c=f.getElementsByTagName("head")[0]||f.getElementById("disqus_thread"),g=false,d;function b(l){var m=f.getElementById("dsq-content");var j=DISQUS.settings.media_url+"/javascript/embed/dtpl/";var o=DISQUS.settings.media_url+"/build/system/";var i=DISQUS.settings.media_url+"/build/lang/";var h=DISQUS.jsonData.forum.template.css;var p=DISQUS.jsonData.forum.template.url;var n;(function(){var q=DISQUS.jsonData;DISQUS.strings.setGlobalContext({profile_url:q.urls.request_user_profile,disqus_url:q.settings.disqus_url,media_url:q.settings.media_url,request_username:q.request.username,request_display_username:q.request.display_username,forum_name:q.forum.name})})();DISQUS.callback(DISQUS.config.callbacks.preInit);if(DISQUS.browser.mobile&&!DISQUS.jsonData.forum.mobile_theme_disabled){h=DISQUS.jsonData.forum.template.mobile.css;p=DISQUS.jsonData.forum.template.mobile.url}else{if(DISQUS.config.template){h=DISQUS.config.template.css;p=DISQUS.config.template.js}else{if(DISQUS.config.templatePreview&&DISQUS.jsonData.forum.template.preview){p=DISQUS.jsonData.forum.template.preview.url;h=DISQUS.jsonData.forum.template.preview.css}}}if((e.location.search.indexOf("fbc_channel=1")>-1)||(e.location.search.indexOf("?fb_xd_fragment")>-1)){if(DISQUS.jsonData.settings.debug){n=[p,j+"defaults.js",j+"utils.js",j+"comm.js",j+"dtpl.js"]}else{n=[p,o+"dsq.js"]}DISQUS.requireSet(n,DISQUS.settings.debug,function(){DISQUS.registerActions();var q=new DISQUS.comm.FacebookLoginBox()});return}if(!DISQUS.jsonData.settings.debug){var k=f.createElement("iframe");k.style.display="none";k.src=DISQUS.jsonData.urls.stats;f.body.appendChild(k)}if(!e.disqus_no_style){DISQUS.requireStylesheet(DISQUS.settings.media_url+"/styles/embed/thread.css",{},DISQUS.jsonData.settings.debug);if(h){DISQUS.requireStylesheet(h,{},DISQUS.jsonData.settings.debug)}}n=[p];if(DISQUS.config.language){if(DISQUS.config.language!="en"){n.push(i+DISQUS.config.language+".js")}}else{if(DISQUS.jsonData.forum.language!="en"){n.push(i+DISQUS.jsonData.forum.language+".js")}}DISQUS.requireSet(n,DISQUS.jsonData.settings.debug,function(){if(DISQUS.config.custom_strings){DISQUS.lang.extend(DISQUS.strings.translations,DISQUS.config.custom_strings)}if(DISQUS.config.def_text===""){DISQUS.config.def_text=DISQUS.strings.get("Type your comment here.")}DISQUS.nodes.addClass(m,"clearfix");var q=m.parentNode;q.removeChild(m);m.innerHTML=DISQUS.renderBlock("thread");q.appendChild(m);DISQUS.callback(DISQUS.config.callbacks.onInit);DISQUS.registerActions();DISQUS.dtpl.actions.fire("thread.initialize");DISQUS.callback(DISQUS.config.callbacks.afterRender);DISQUS.nodes.container=DISQUS.nodes.get("#dsq-content");m.style.display="block";l();var s,r;if(DISQUS.config.page.anchor_post_id){DISQUS.nodes.scrollTo("#dsq-comment-"+DISQUS.config.page.anchor_post_id)}DISQUS.dtpl.actions.fire("thread.ready")})}function a(){var j=f.getElementsByTagName("meta");for(var h=0;h<j.length;h++){if(j[h].getAttribute("name")=="viewport"){return true}}return false}DISQUS.extend({cache:{buttonsToRestore:[],popupProfileCache:{},popupStatusCache:{},toggledReplies:{},postSharing:{},realtime:{interval:null,ongoing_request:null,prev_script:null,last_checked:null,newPosts:[]}},states:{edit:{},realtime:false,useLoginWindow:false,loginDisabled:false,metaViewport:a()},curPageId:"dsq-comments",frames:{},config:{template:null,callbacks:{language:null,preData:[],preInit:[],onInit:[],afterRender:[],onReady:[],onPaginate:[],onNewComment:[]}},jsonData:null,isReady:false,getShortname:function(){function l(q){var r=(q.getAttribute?q.getAttribute("src"):q.src),p=[/https?:\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i,/https?:\/\/(www\.)?([\w_\-]+)\.disqus\.com/i,/https?:\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i,/https?:\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i],m=p.length;if(r){for(var o=0;o<m;o++){var n=r.match(p[o]);if(n&&n.length&&n.length==3){return n[2]}}}return null}var h=f.getElementsByTagName("script");for(var k=h.length-1;k>=0;k--){var j=l(h[k]);if(j!==null){return j}}return null},callback:function(n){var k,m,h;var l=function(i){if(e.console&&console.log){console.log(i)}};if(arguments.length>1){h=Array.prototype.slice.call(arguments,1)}for(k=0;k<n.length;k++){m=n[k];if(typeof m!="function"){continue}try{m.apply({},h||[])}catch(j){if(j.toString().search("Dsq")>-1){l("WARNING: This page uses deprecated Disqus APIs. See blog.disqus.com for more info")}else{l(j)}}}},reload:function(h){DISQUS.require(DISQUS.config.json_url,DISQUS.config.page,true,function(){g=true;if(typeof h=="function"){h()}})},redraw:function(i){var h;if(g||i){DISQUS.sandbox.invalidateGlobals();h=DISQUS.nodes.get("#dsq-content");h.innerHTML=DISQUS.renderBlock("thread");DISQUS.frames=[];DISQUS.dtpl.actions.fire("thread.initialize");g=false}},initThread:function(o){var h;var l;var n;var j;function k(p){var q=e.onload;if(typeof e.onload!="function"){e.onload=p}else{e.onload=function(){if(q){q()}p()}}}function i(){var p,s,q;if(!DISQUS.isReady){if(!d){d=e.setInterval(i,500)}return}if(d){clearInterval(d)}p=f.getElementById(disqus_container_id);s=f.getElementsByTagName("iframe");q=f.getElementById("dsq-content");if(q){for(var r=0;r<s.length;r++){s[r].style.width=q.offsetWidth}}}if(DISQUS.browser.ie&&DISQUS.config.frame_theme!=="cnn2"){k(i)}n=f.createElement("style");c.appendChild(n);DISQUS.cache.inlineStylesheet=n.sheet;if(!DISQUS.cache.inlineStylesheet){DISQUS.cache.inlineStylesheet=f.styleSheets[f.styleSheets.length-1]}if(DISQUS.browser.ie6||DISQUS.browser.ie7){j={b:(DISQUS.browser.ie6?"ie6":"ie7")}}DISQUS.requireStylesheet(DISQUS.settings.disqus_url+"/forums/"+DISQUS.config.shortname+"/styles.css",j);DISQUS.callback(DISQUS.config.callbacks.preData);l=f.getElementById("dsq-content")||f.createElement("div");l.id="dsq-content";l.style.display="none";h=f.getElementById(DISQUS.config.container_id);h.appendChild(l);DISQUS.container=f.getElementById("dsq-content");try{if(DISQUS.browser.ie6){f.execCommand("BackgroundImageCache",false,true)}}catch(m){}if(DISQUS.jsonData===null){DISQUS.require(DISQUS.config.json_url,DISQUS.config.page,true,function(){b(o)})}else{DISQUS.addJob(function(){return DISQUS.jsonData&&DISQUS.jsonData.ready},function(){b(o)})}}});DISQUS.extend({lang:{contains:function(k,j){for(var h=0;h<k.length;h++){if(k[h]==j){return true}}return false},forEach:DISQUS.each,extend:function(){var k=arguments[0]||{},j=1;var h=Array.prototype.slice.call(arguments,1);DISQUS.each(h,function(i,l){DISQUS.each(i,function(n,m){k[m]=n})});return k},partial:function(){var i=arguments[0];var h=Array.prototype.slice.call(arguments,1);return function(){var k=Array.prototype.slice.call(arguments);var l=[];for(var j=0;j<h.length;j++){l.push(h[j]===undefined?k.shift():h[j])}while(k.length>0){l.push(k.shift())}return i.apply(this,l)}},isFunction:function(h){return Object.prototype.toString.call(h)=="[object Function]"},trim:function(k){k=k.replace(/^\s\s*/,"");var h=/\s/,j=k.length;while(h.test(k.charAt(--j))){}return k.slice(0,j+1)}}})}(document,window));(function(n,k){var p;var m=n.getElementsByTagName("head")[0]||n.getElementById(";");var j=(function(){var r,v=n.getElementsByTagName("META");function w(x,i){return x.hasAttribute?x.hasAttribute(i):x.getAttribute(i)!==null}function u(i){var x=function(y,z){return w(i,y)&&i.getAttribute(y)==z};return x("name","generator")&&x("content","blogger")}function q(i){return !w(i,"src")&&w(i,"name")&&parseInt(i.getAttribute("name"),10)&&i.innerHTML===""}for(var t=0;t<v.length;t++){if(u(v[t])){r=n.getElementsByTagName("A");for(var s=0;s<r.length;s++){if(q(r[s])){return r[s].getAttribute("name")}}}}return null}());DsqLocal=DsqLocal||{};disqus_href=k.location.href;hashIndex=disqus_href.indexOf("#");if(hashIndex!=-1){disqus_href=disqus_href.substring(0,hashIndex)}DISQUS.lang.extend(DISQUS.config,{container_id:disqus_container_id||"disqus_thread",page:{url:(typeof disqus_url=="undefined"||disqus_url==="")?disqus_href:disqus_url,title:disqus_title||"",sort:disqus_sort||"",per_page:disqus_per_page||null,category_id:disqus_category_id||"",developer:(disqus_developer&&disqus_developer!=="0")?1:0,identifier:disqus_identifier||"",trackback_url:DsqLocal.trackback_url||null,trackbacks:DsqLocal.trackbacks||null}});if(j){DISQUS.config.page.blogger_id=j}if(typeof disqus_message=="undefined"){DISQUS.config.message=""}else{isUTF8=false;if(DISQUS.browser.ie){for(var f=0;f<disqus_message.length;f++){if(disqus_message.charCodeAt(f)>256){isUTF8=true;break}}}if(isUTF8){DISQUS.config.message=""}else{if(disqus_message.length>400){DISQUS.config.message=disqus_message.substring(0,disqus_message.indexOf(" ",350))}}}if(typeof disqus_require_moderation_s!="undefined"){DISQUS.config.page.require_mod_s=disqus_require_moderation_s}if(typeof disqus_remote_auth_s2!="undefined"){DISQUS.config.page.remote_auth_s2=disqus_remote_auth_s2}if(typeof disqus_per_page!="undefined"){DISQUS.config.page.per_page=disqus_per_page}if(typeof disqus_author_s2!="undefined"){DISQUS.config.page.author_s2=disqus_author_s2}if(typeof disqus_thread_slug!="undefined"){DISQUS.config.page.slug=disqus_thread_slug}var g;if(k.location.hash){g=k.location.hash.match(/comment\-([0-9]+)/);if(g){DISQUS.config.page.anchor_post_id=g[1]}}DISQUS.config.callback_params=disqus_callback_params||null;if(typeof disqus_callback=="function"){DISQUS.config.callbacks.afterRender.push(function(){disqus_callback(DISQUS.config.callback_params)})}if(typeof disqus_custom_strings=="object"){DISQUS.config.custom_strings=disqus_custom_strings}DISQUS.config.domain=disqus_domain||(disqus_dev?"dev.disqus.org":"disqus.com");DISQUS.config.shortname=disqus_shortname||DISQUS.getShortname();DISQUS.config.iframe_css=disqus_iframe_css||"";DISQUS.config.facebook_forum=disqus_facebook_forum||null;DISQUS.config.facebook_key=disqus_facebook_key||null;DISQUS.config.frame_theme=disqus_frame_theme||null;DISQUS.config.def_name=disqus_def_name||"";DISQUS.config.def_email=disqus_def_email||"";DISQUS.config.def_text=disqus_default_text||"";DISQUS.config.skip_auth=disqus_skip_auth||false;DISQUS.config.json_url=(DISQUS.settings.disqus_url+"/thread.js").replace(/(https?:\/\/)/,"$1"+DISQUS.config.shortname+".");DISQUS.config.templatePreview=!!(k.parent!=k&&k.location.hash.match(/dsqpreview/));if(typeof disqus_config=="function"){disqus_config.call(DISQUS.config)}DISQUS.jsonData={ready:false};DISQUS.require(DISQUS.config.json_url,DISQUS.config.page,true);var l=n.getElementById("dsq-content")||n.createElement("div");l.id="dsq-content";l.style.display="none";var o=["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","TkSuQmCC"],c=["R0lGODlhEAALAPQAAP///z2LqeLt8dvp7u7090GNqz2LqV+fuJ/F1IW2ycrf51aatHWs","waXJ14i4ys3h6FmctUCMqniuw+vz9eHs8fb5+meku+Tu8vT4+cfd5bbT3tbm7PH2+AAA","AAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQu","aW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27if","DgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeR","vsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjoth","LOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh","+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+","YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY","5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAs","AAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00k","j5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpy","HCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAA","BS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7","AAAAAAAAAAAA"];var e=function(s,i,r,u,t,q){return"<"+["img",'width="'+s+'"','height="'+i+'"','alt="'+u+'"','src="data:image/'+r+";base64,"+t+'"',(q?'style="'+q+'"':"")].join(" ")+">"};var b=n.createElement("div");b.id="dsq-content-stub";b.innerHTML=DISQUS.browser.ie6?"...":e(71,17,"png","DISQUS",o.join(""))+e(16,11,"gif","...",c.join(""),"margin:0 0 3px 5px");var a=n.getElementById(DISQUS.config.container_id);a.appendChild(l);a.appendChild(b);DISQUS.ready(function(){DISQUS.initThread(function(){b.style.display="none"})});function d(i){return Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds())}var h=d(new Date());DISQUS.config.callbacks.onReady.push(function(){var q=DISQUS.comm.Default.recover(),i=d(new Date());q.log("load:start",h);q.log("load:length",i-h)});DISQUS.config.callbacks.afterRender.push(function(){var q=DISQUS.comm.Default.recover(),i=DISQUS.jsonData;if(i.forum.id){q.log("info:forum_id",i.forum.id)}if(i.thread.id){q.log("info:thread_id",i.thread.id)}if(i.request.user_type){q.log("info:user_type",i.request.user_type)}if(i.request.user_id){q.log("info:user_id",i.request.user_id)}});DISQUS.config.callbacks.onReady.push(function(){var t=false,q=false,w=DISQUS.comm.Default.recover(),i=n.getElementById("dsq-new-post"),s=DISQUS.nodes.getPosition(i)[1]+i.offsetHeight,v=n.getElementById("dsq-comments"),u=DISQUS.nodes.getPosition(v)[1]+v.offsetHeight;function r(){function x(z){var A=DISQUS.window.getScrollPosition()[1],y=A+DISQUS.window.getSize()[1];return((z>=A)&&(z<=y))}if((!t)&&i&&x(s)){t=true;w.log("viewed:comment_box",1)}if((!q)&&v&&x(u)){q=true;w.log("viewed:comments",1)}if(t&&q){DISQUS.events.remove(k,"scroll",r)}}r();DISQUS.events.add(k,"scroll",r)})})(document,window);
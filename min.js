/*! (c) Andrea Giammarchi - ISC */
var self=this||{};try{self.Map=Map}catch(Map){self.Map=function(){function n(n){return-1<(t=e.indexOf(n))}var t=0,e=[],r=[];return{"delete":function(u){var i=n(u);return i&&(e.splice(t,1),r.splice(t,1)),i},get:function(e){return n(e)?r[t]:void 0},has:function(t){return n(t)},set:function(u,i){return r[n(u)?t:e.push(u)-1]=i,this}}}}
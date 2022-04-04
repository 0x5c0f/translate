(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0441\u0442\u0438",1:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",2:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438",3:function(a){return"\u0426\u044e \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0435\u043d\u043e Google \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u043c\u043e\u0432\u043e\u044e: "+a},4:function(a){return"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0435\u043d\u043e \u0442\u0430\u043a\u043e\u044e \u043c\u043e\u0432\u043e\u044e: "+
a},5:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430. \u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0437\u043c\u0456\u0433 \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u0432\u0430\u0448 \u0437\u0430\u043f\u0438\u0442. \u041f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u0441\u043f\u0440\u043e\u0431\u0443 \u043f\u0456\u0437\u043d\u0456\u0448\u0435.",6:"\u0414\u043e\u043a\u043b\u0430\u0434\u043d\u0456\u0448\u0435",7:function(a){return"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0457 "+
a},8:"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0447",9:"\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434",10:function(a){return"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0441\u0442\u0438 \u0446\u044e \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0447\u0430 Google \u043c\u043e\u0432\u043e\u044e: "+
(a+"?")},11:function(a){return"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0446\u044e \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u0442\u0430\u043a\u043e\u044e \u043c\u043e\u0432\u043e\u044e: "+a},12:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u043e\u0440\u0438\u0433\u0456\u043d\u0430\u043b",13:"\u0412\u043c\u0456\u0441\u0442 \u0446\u044c\u043e\u0433\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0443 \u0431\u0443\u0434\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e \u0432 Google \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0443 \u0447\u0435\u0440\u0435\u0437 \u0431\u0435\u0437\u043f\u0435\u0447\u043d\u0435 \u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f.",
14:"\u0412\u043c\u0456\u0441\u0442 \u0446\u0456\u0454\u0457 \u0431\u0435\u0437\u043f\u0435\u0447\u043d\u043e\u0457 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u0431\u0443\u0434\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e \u0432 Google \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0443 \u0447\u0435\u0440\u0435\u0437 \u0431\u0435\u0437\u043f\u0435\u0447\u043d\u0435 \u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f.",15:"\u0412\u043c\u0456\u0441\u0442 \u0446\u0456\u0454\u0457 \u0456\u043d\u0442\u0440\u0430\u043d\u0435\u0442-\u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u0431\u0443\u0434\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e \u0432 Google \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0443 \u0447\u0435\u0440\u0435\u0437 \u0431\u0435\u0437\u043f\u0435\u0447\u043d\u0435 \u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f.",
16:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043c\u043e\u0432\u0443",17:function(a){return"\u0412\u0438\u043c\u043a\u043d\u0443\u0442\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434 \u0456\u0437 \u0442\u0430\u043a\u043e\u0457 \u043c\u043e\u0432\u0438: "+a},18:function(a){return"\u0412\u0438\u043c\u043a\u043d\u0443\u0442\u0438 \u0434\u043b\u044f \u0442\u0430\u043a\u043e\u0457 \u043c\u043e\u0432\u0438: "+a},19:"\u0417\u0430\u0432\u0436\u0434\u0438 \u0445\u043e\u0432\u0430\u0442\u0438",20:"\u041e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u044c\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442:",
21:"\u0417\u0430\u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u043a\u0440\u0430\u0449\u0438\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434",22:"\u0417\u0430\u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0432\u0430\u0442\u0438",23:"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0441\u0442\u0438 \u0432\u0441\u0435",24:"\u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 \u0432\u0441\u0435",25:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0432\u0441\u0435",26:"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0442\u0438 \u0440\u043e\u0437\u0434\u0456\u043b\u0438 \u043c\u043e\u0454\u044e \u043c\u043e\u0432\u043e\u044e",
27:function(a){return"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0441\u0442\u0438 \u0432\u0441\u0435 \u0442\u0430\u043a\u043e\u044e \u043c\u043e\u0432\u043e\u044e: "+a},28:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u043c\u043e\u0432\u0438 \u043e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u0456\u0432",29:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",30:"\u0412\u0438\u043c\u043a\u043d\u0443\u0442\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434 \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0443",
31:null,32:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0438",33:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0441\u043b\u043e\u0432\u0430 \u0432\u0438\u0449\u0435, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0438",
34:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438",35:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u043a\u043b\u0430\u0432\u0456\u0448\u0443 Shift \u0456 \u043f\u0435\u0440\u0435\u0442\u044f\u0433\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u0443\u043f\u043e\u0440\u044f\u0434\u043a\u0443\u0432\u0430\u0442\u0438",36:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0438",
37:"\u0423\u0442\u0440\u0438\u043c\u0443\u044e\u0447\u0438 \u043a\u043b\u0430\u0432\u0456\u0448\u0443 Shift, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0456 \u043f\u0435\u0440\u0435\u0442\u044f\u0433\u043d\u0456\u0442\u044c \u0441\u043b\u043e\u0432\u0430 \u0432\u0438\u0449\u0435, \u0449\u043e\u0431 \u0443\u043f\u043e\u0440\u044f\u0434\u043a\u0443\u0432\u0430\u0442\u0438.",38:"\u0414\u044f\u043a\u0443\u0454\u043c\u043e \u0437\u0430 \u0432\u043d\u0435\u0441\u043e\u043a \u0437\u0430\u043f\u0440\u043e\u043f\u043e\u043d\u043e\u0432\u0430\u043d\u043e\u0433\u043e \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0443 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0443 \u0434\u043e Google \u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0447.",
39:"\u041a\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u043e\u043c \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0443",40:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0441\u043b\u043e\u0432\u043e, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u0456 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0438, \u0430\u0431\u043e \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0434\u0432\u0456\u0447\u0456, \u0449\u043e\u0431 \u0432\u0456\u0434\u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437\u043f\u043e\u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e",
41:"\u041e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u044c\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",42:"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0447",43:"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0441\u0442\u0438",44:"\u0412\u0430\u0448\u0435 \u0432\u0438\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e.",45:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430. \u041c\u043e\u0432\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f.",
46:'\u041c\u0435\u043d\u044e \u043c\u043e\u0432 \u0432\u0456\u0434\u0436\u0435\u0442\u0430 "\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0447"'};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_uk.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=translate.resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
YUI.add("css",function(D){var H,K,J,M,I,E,B,C,A,L,G,F;H=document.createElement("style");H.type="text/css";M={};A=false;L=function(){if(H.parentNode){return true;}if(A){return false;}try{document.getElementsByTagName("head")[0].appendChild(H);var Q=K.rules,O=0,N=Q.length;K=H.styleSheet||H.sheet;if(K.insertRule){J="cssRules";I="deleteRule";E=function(S,R){K.insertRule(S+" {}",R);};}for(;O<N;++O){D.css(Q[O].selectorText,Q[O].style);}}catch(P){A=true;D.Event.onDOMReady(function(){A=false;L();});}};K={rules:[],addRule:function(O,N){K.rules.push({selectorText:O,style:{}});L();},removeRule:function(N){K.splice(N,1);L();}};J="rules";I="removeRule";E=function(N){K.addRule(N,"{clip:auto}");};B=function(P,O){if("opacity" in O&&"filter" in P){O=D.clone(O);O.filter="alpha(opacity="+(O.opacity*100)+")";delete O.filter;}for(var N in O){if(D.object.owns(O,N)){P[N]=O[N];}}};C=function(O,Q){var P;Q=D.array(Q);for(var N=Q.length-1;N>=0;++N){P=Q[N];if(P=="opacity"&&"filter" in O){P="filter";}if(D.object.owns(O,P)){O[P]="";}}};G=function(O){var P=K[J],N=P.length-1;for(;N>=0;--N){if(P[N].selectorText==O){return N;}}return undefined;};F=function(O){O|=0;for(var N=K[J].length;O<N;++O){M[K[J][O].selectorText]=O;}};D.css=function(P,O){var N=M[P];if(N===undefined){N=K[J].length;E(P,N);}if(K[J][N].selectorText!=P){N=M[P]=G(P);}if(N!==undefined){B(K[J][N].style,O);}return D;};D.css.set=D.css;D.css.unset=function(P,O){var N=M[P];if(K[J][N].selectorText!=P){N=G(P);}if(N!==undefined){if(O){C(K[J][N].style,O);}else{K[I](N);delete M[P];F(N);}}return D;};},"@VERSION@");
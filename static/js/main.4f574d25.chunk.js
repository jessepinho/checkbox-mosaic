(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(31)},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),a=t(14),r=t.n(a),i=t(8),l=t(9),u=(t(22),t(25),t(10)),s=t(16),d=t(6),f=(t(28),40),m=40,h=function(e){var n=e.checked,t=void 0===n?{}:n,c=e.toggleCheckbox;return o.a.createElement("div",{className:"CheckboxGrid"},Array(f).fill(null).map(function(e,n){return Array(m).fill(null).map(function(e,a){var r=function(e,n){return"".concat(e,",").concat(n)}(a,n);return o.a.createElement("input",{type:"checkbox",key:r,className:"CheckboxGrid__checkbox",checked:!!t[r],onChange:function(){return c(r)}})})}))},b=function(){var e=Object(d.a)().firestore().collection("mosaics").doc("sandbox"),n=Object(d.b)(e).data();return o.a.createElement(h,{checked:n,toggleCheckbox:function(t){e.set(Object(s.a)({},n,Object(u.a)({},t,!n[t])))}})},k=(t(29),{projectId:"checkbox-mosaic"}),g=function(){return o.a.createElement(i.a,{firebaseConfig:k,initPerformance:!0},o.a.createElement(l.a,{fallback:o.a.createElement(h,{toggleCheckbox:function(){}}),traceId:"loadMosaic"},o.a.createElement(b,null)))};t(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.4f574d25.chunk.js.map
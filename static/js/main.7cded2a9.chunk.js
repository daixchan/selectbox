(this.webpackJsonpselectbox=this.webpackJsonpselectbox||[]).push([[0],{19:function(n,e,t){},20:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var i=t(0),o=t.n(i),a=t(11),r=t.n(a),c=(t(19),t(20),t(1));function s(){return Object(c.jsx)("footer",{children:Object(c.jsx)("p",{children:"\xa9 David 2021"})})}var d=t.p+"static/media/logo.6ce24c58.svg";function l(){return Object(c.jsxs)("header",{children:[Object(c.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(c.jsx)("h1",{children:"SelectBox"})]})}var f,u,b,p,x,j,v=t(4),h=t(8),g=t(5),m=t(26),O=function(n,e){var t=function(t){n.current&&!n.current.contains(t.target)&&e()};Object(i.useEffect)((function(){return document.addEventListener("click",t),document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("click",t),document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}))},y=function(n){var e=n.options,t=n.initValue,o=void 0===t?0:t,a=Object(i.useState)(e[o].label),r=Object(h.a)(a,2),s=r[0],d=r[1],l=Object(i.useState)(!1),f=Object(h.a)(l,2),u=f[0],b=f[1],p=Object(i.useState)(!1),x=Object(h.a)(p,2),j=x[0],v=x[1],g=Object(i.useRef)();O(g,(function(){return b(!1)}));var m={enter:{y:0,transition:{type:"spring",stiffness:800,damping:16},display:"initial"},exit:{y:-30,transition:{duration:.1,ease:"backIn"},transitionEnd:{y:30,display:"none"}}},y=function(n){var e=Object(i.useRef)();return Object(i.useEffect)((function(){e.current=n}),[n]),e.current}(s);return Object(c.jsxs)(E,{ref:g,onClick:function(){return b(!u)},children:[Object(c.jsxs)(L,{children:[Object(c.jsx)(X,{initial:"enter",animate:j?"enter":"exit",variants:m,style:{position:"absolute"},children:j?s:y}),Object(c.jsx)(X,{initial:"exit",animate:j?"exit":"enter",variants:m,style:{position:"absolute"},children:j?y:s}),Object(c.jsx)(S,{})]}),Object(c.jsx)(C,{initial:"fold",animate:u?"spread":"fold",variants:{spread:{opacity:1,rotateX:0,transition:{type:"spring",stiffness:800,damping:16},display:"initial"},fold:{opacity:0,rotateX:-30,transition:{duration:.2},transitionEnd:{display:"none"}}},children:e.map((function(n){return Object(c.jsx)(F,{onClick:function(){return function(n){v(!j),d(n)}(n.label)},className:n.label===s?"active":"",children:Object(c.jsx)(X,{children:n.label})},n.value)}))})]})};var k="158px",w={border:"#dddddd",select:{background:{default:"#ffffff",hover:"#f5f5f5"},text:{default:"#323232",hover:"#cacaca"}},option:{background:{default:"#ffffff",hover:"#f5f5f5",active:"#e6f7ff"},text:{default:"#323232",hover:"#252525",active:"#000000"}},arrow:{default:"#bfbfbf",hover:"#252525"}},E=g.a.div(f||(f=Object(v.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: ",";\n  perspective: 1000px;\n  cursor: pointer;\n"])),k),L=g.a.div(u||(u=Object(v.a)(["\n  display: flex;\n  flex: 1 0 auto;\n  // align-items: center;\n  // padding: 0 8px;\n  transition: color 200ms;\n  border: 1px solid ",";\n  border-radius: 2px;\n\n  ",":hover & {\n    color: ",";\n  }\n\n  overflow: hidden;\n  height: 30px;\n  flex-direction: column;\n  position: relative;\n"])),w.border,E,w.select.text.hover),S=g.a.div(b||(b=Object(v.a)(['\n  position: absolute;\n  left: auto;\n  right: 8px;\n  padding: 14px 8px;\n\n  &:before,\n  &:after {\n    content: "";\n    position: absolute;\n    right: 0;\n    width: 8px;\n    height: 1px;\n    border-radius: 3px;\n    background: ',";\n  }\n\n  &:before {\n    transform: translateX(-100%) translateX(3px) rotate(45deg);\n  }\n\n  &:after {\n    transform: rotate(-45deg);\n  }\n"])),w.arrow.default),C=Object(g.a)(m.a.div)(p||(p=Object(v.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 100%;\n  left: 0;\n  min-width: 100%;\n\n  background: #ffffff;\n  border-radius: 2px;\n  overflow: hidden;\n  backface-visibility: hidden;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n  transform-origin: 50% -30px;\n"]))),F=g.a.div(x||(x=Object(v.a)(["\n  // padding: 8px;\n  white-space: nowrap;\n  animation-fill-mode: forwards;\n\n  transition: background 300ms, color 300ms;\n  color: ",";\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  &.active {\n    background: ",";\n    color: ",";\n  }\n"])),w.option.text.default,w.option.background.hover,w.option.text.hover,w.option.background.active,w.option.text.active),X=Object(g.a)(m.a.div)(j||(j=Object(v.a)(["\n  font-size: 12px;\n  flex: 1 0 auto;\n  font-family: \ub098\ub214\uace0\ub515, open sans, sans-serif;\n  text-transform: uppercase;\n  padding: 8px;\n"])));var B=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)("main",{children:Object(c.jsx)("section",{children:Object(c.jsx)(y,{options:[{label:"\ub354\uae30\ud504\ud305\ucef4\ud37c\ub2c8",value:"0"},{label:"\uc6d4\uac04\uac00\uc2b4",value:"1"},{label:"\uc778\ub354\uc6e8\uc5b4",value:"2"},{label:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uc5d4\uc9c0\ub2c8\uc5b4",value:"3"}],initValue:1})})}),Object(c.jsx)(s,{})]})},I=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),o(n),a(n),r(n)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),I()}},[[24,1,2]]]);
//# sourceMappingURL=main.7cded2a9.chunk.js.map
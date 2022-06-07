"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[768],{6768:function(e,n,t){t.r(n);var r=t(885),o=t(9434),i=t(2791),a=t(5553),l=t(3044),c=t(6151),u=t(4708),s=t(8383),d=t(1889),m=t(4554),h=t(403),f=t(890),p=t(1614),v=t(7107),x=t(7012),g=t(735),b=t(184),Z=(0,v.Z)();n.default=function(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),t=n[0],v=n[1],j=(0,i.useState)(""),y=(0,r.Z)(j,2),S=y[0],k=y[1],w=(0,o.I0)();return(0,b.jsx)(x.Z,{theme:Z,children:(0,b.jsxs)(p.Z,{component:"main",maxWidth:"xs",children:[(0,b.jsx)(u.ZP,{}),(0,b.jsxs)(m.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(l.Z,{sx:{m:1,bgcolor:"#1976d2"},children:(0,b.jsx)(h.Z,{})}),(0,b.jsx)(f.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,b.jsxs)(m.Z,{component:"form",onSubmit:function(e){e.preventDefault(),w((0,a.Ib)({email:t,password:S})),v(""),k("")},noValidate:!0,sx:{mt:1},children:[(0,b.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:t,onChange:function(e){return v(e.currentTarget.value)}}),(0,b.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:S,onChange:function(e){return k(e.currentTarget.value)}}),(0,b.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,b.jsx)(d.ZP,{container:!0,justifyContent:"flex-end",children:(0,b.jsx)(d.ZP,{item:!0,children:(0,b.jsx)(g.r,{to:"/register",children:"Don't have an account? Sign Up"})})})]})]})]})})}},735:function(e,n,t){t.d(n,{r:function(){return a}});var r,o=t(168),i=t(3504),a=(0,t(7939).ZP)(i.OL)(r||(r=(0,o.Z)(["\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n  color: #1976d2;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n  text-decoration-color: currentcolor;\n  text-decoration-color: rgba(25, 118, 210, 0.4);\n"])))},403:function(e,n,t){var r=t(5318);n.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=a},4708:function(e,n,t){var r=t(7462),o=t(2791),i=t(1402),a=t(5502),l=t(184),c=function(e,n){return(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},n&&{colorScheme:e.palette.mode})},u=function(e){return(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};n.ZP=function(e){var n=(0,i.Z)({props:e,name:"MuiCssBaseline"}),t=n.children,s=n.enableColorScheme,d=void 0!==s&&s;return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)(a.Z,{styles:function(e){return function(e){var n,t,o={html:c(e,arguments.length>1&&void 0!==arguments[1]&&arguments[1]),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},u(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i=null==(n=e.components)||null==(t=n.MuiCssBaseline)?void 0:t.styleOverrides;return i&&(o=[o,i]),o}(e,d)}}),t]})}},7012:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(2791),o=t(7462),i=t(8023),a=t(9598),l="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",c=t(184);var u=function(e){var n=e.children,t=e.theme,u=(0,a.Z)(),s=r.useMemo((function(){var e=null===u?t:function(e,n){return"function"===typeof n?n(e):(0,o.Z)({},e,n)}(u,t);return null!=e&&(e[l]=null!==u),e}),[t,u]);return(0,c.jsx)(i.Z.Provider,{value:s,children:n})},s=t(1688),d=t(3459);function m(e){var n=(0,d.Z)();return(0,c.jsx)(s.T.Provider,{value:"object"===typeof n?n:{},children:e.children})}var h=function(e){var n=e.children,t=e.theme;return(0,c.jsx)(u,{theme:t,children:(0,c.jsx)(m,{children:n})})}}}]);
//# sourceMappingURL=768.642dfd13.chunk.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#screen"),r=document.querySelector("#style"),e='/* 你好，我是一名前端新人\n*  我叫杨阳\n*  现在我来演示下我学到的前端知识\n*  首先我需要一个div\n**/\n#box{\n    border:1px solid red;\n    width:200px;\n    height:200px;\n}\n/* 接下来我会把他变成一个八卦\n*  注意看好了\n*  首先，我要把div变成一个圆形\n**/\n#box{\n    border-radius:50%;\n    /* 这是给盒子加上阴影*/\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/* 八卦是阴阳形成的\n*  一黑一白\n**/\n#box{\n    /* 这是背景色渐变*/\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* 再加上两个球*/\n#box::before {\n    /* border: 1px solid red; */\n    content: "";\n    display: block;\n    height: 100px;\n    width: 100px;\n    transform: translateX(50%);\n    border-radius: 50%;\n    background-color: black;\n    position: relative;\n    top: 0px;\n    left: 0px;\n    background: radial-gradient(\n      circle,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 1) 25%,\n      rgba(0, 0, 0, 1) 25%,\n      rgba(0, 0, 0, 1) 100%\n    );\n  }\n#box::after {\n    /* border: 1px solid red; */\n    content: "";\n    display: block;\n    height: 100px;\n    width: 100px;\n    transform: translateX(50%);\n    border-radius: 50%;\n    background-color: white;\n    position: relative;\n    top: 0px;\n    left: 0px;\n    background: radial-gradient(\n      circle,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(0, 0, 0, 1) 25%,\n      rgba(255, 255, 255, 1) 25%,\n      rgba(255, 255, 255, 1) 100%,\n      rgba(0, 0, 0, 1) 100%\n    );\n}\n/*  现在我要让它转起来~\n**/\n#box{\n    animation: run 2s linear infinite;\n}\n',o="",a=0,i=function i(){setTimeout(function(){a<e.length&&("\n"===e[a]?o+="<br>":" "===e[a]?o+="&nbsp;":o+=e[a],n.innerHTML=o,r.innerHTML+=e[a],n.scrollTo(0,9999),a+=1,i())},10)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.3d0e1999.js.map
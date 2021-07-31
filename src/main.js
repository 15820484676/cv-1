let screen = document.querySelector('#screen')
let style = document.querySelector('#style')

let str1 = `/* 你好，我是一名前端新人
*  我叫杨阳
*  现在我来演示下我学到的前端知识
*  首先我需要一个div
**/
#box{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我会把他变成一个八卦
*  注意看好了
*  首先，我要把div变成一个圆形
**/
#box{
    border-radius:50%;
    /* 这是给盒子加上阴影*/
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
*  一黑一白
**/
#box{
    /* 这是背景色渐变*/
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 再加上两个球*/
#box::before {
    /* border: 1px solid red; */
    content: "";
    display: block;
    height: 100px;
    width: 100px;
    transform: translateX(50%);
    border-radius: 50%;
    background-color: black;
    position: relative;
    top: 0px;
    left: 0px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 1) 100%
    );
  }
#box::after {
    /* border: 1px solid red; */
    content: "";
    display: block;
    height: 100px;
    width: 100px;
    transform: translateX(50%);
    border-radius: 50%;
    background-color: white;
    position: relative;
    top: 0px;
    left: 0px;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 25%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 100%,
      rgba(0, 0, 0, 1) 100%
    );
}
/*  现在我要让它转起来~
**/
#box{
    animation: run 2s linear infinite;
}
`

let str2 = ''
let n = 0
let move = () => {
    setTimeout(() => {
        if (n<str1.length) {
            if (str1[n] ==='\n') {
                str2 +='<br>'
            } else if (str1[n]===' ') {
                str2 +='&nbsp;'
            }else{
                str2 +=str1[n]
            }
            screen.innerHTML = str2
            //这一步是为了让样式和字一样一步一步显示出来
            style.innerHTML += str1[n] 
            //window.scrollTo(0,9999)
            screen.scrollTo(0,9999)
            n+=1
            move()
        }
        
    },10)
}
move()
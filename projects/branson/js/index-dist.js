var audio1=new Audio("./res/sounds/reverse-clang.wav"),audio2=new Audio("./res/sounds/tubular-bells.ogg"),musicOnOff=document.querySelector(".music.bttn");window.addEventListener("DOMContentLoaded",function(){audio1.play(),TweenMax.from(audio1,4,{volume:0}),audio2.load(),TweenMax.staggerFrom([".loading .title",".loading .episode-title"],2,{opacity:0},1),TweenMax.from(".loading .subject",1,{delay:3,opacity:0}),TweenMax.staggerTo([".loading .title",".loading .episode-title"],5.7,{left:"101%",ease:SlowMo.ease.config(.9,.9,!1)}),TweenMax.to(".loading .subject",5.7,{right:"101%",ease:SlowMo.ease.config(.9,.95,!1)}),setTimeout(function(){audio2.play(),audio2.loop=!0},6700),TweenMax.from(audio2,1,{volume:0}),TweenMax.to(".loading",1,{delay:7.7,opacity:0,display:"none"}),TweenMax.from(".intro",1,{delay:7.7,opacity:0,display:"none"})},!1),musicOnOff.addEventListener("click",function(){audio2.paused&&audio1.paused?(TweenMax.to(audio1,1,{volume:1}),TweenMax.to(audio2,1,{volume:1}),audio1.play(),audio2.play()):TweenMax.to([audio1,audio2],1,{volume:0,onComplete:function(){audio1.pause(),audio2.pause()}})},!1);
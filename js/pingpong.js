/**
 * Created by KuroCat on 12/9/2017.
 */
var KEY={
    UP:38,
    DOWN:40,
    W:87,
    S:83
};

var random=Math.floor(Math.random()*2),
    speedX,left,BallTop,speedY= 0;

console.log(random);


$(function () {         //初始化
    $(document).keydown(function(e){
        switch(e.which){
           case KEY.UP:      //向上
               var top=parseInt($("#paddleB").css('top'));      //将获取到top值转换为数字类型
               $('#paddleB').css('top',top-5);                  //向上移动5个像素
               break;
           case KEY.DOWN:   //向下
               var top=parseInt($('#paddleB').css('top'));
               $('#paddleB').css('top',top+5);                  //向上移动5个像素
               break;
           case KEY.W:      //向上（左边拍子的坐标移动）
               var top=parseInt($('#paddleA').css('top'));
               $('#paddleA').css('top',top-5);
               break;
           case KEY.S:
               var top=parseInt($('#paddleA').css('top'));
               $('#paddleA').css('top',top+5);
               break;
       }
    });
//----------------------------------------------------------------//

    init();
    //$("#paddleB").css('top','20px');
    //$("#paddleA").css('top','60px');
});

function init(){
    switch (random){
        case 0:
            speedX=-5;
            speedY=-5;
            break;
        case 1:
            speedX=5;
            speedY=5;
            break;
    }

    console.log(speedX);
    setInterval('moveBall()',50);


}

function moveBall(){
    moveCheck();
    left=parseInt($('#ball').css('left'));
    left+=speedX;
    $('#ball').css('left',left);
    BallTop=parseInt($('#ball').css('top'));
    BallTop+=speedY;
    $('#ball').css('top',BallTop);
}


function moveCheck(){
    var paddleAY=parseInt($('#paddleA').css('top')),
        paddleAX=parseInt($('#paddleA').css('left')),
        paddleBY=parseInt($('#paddleB').css('top')),
        paddleBX=parseInt($('#paddleB').css('left'));
    left=parseInt($('#ball').css('left'));
    BallTop=parseInt($('#ball').css('top'));
    if (left+20>400 || left<0){
        speedX=-speedX;
    }
    if (BallTop+20>200 || BallTop<0){
        speedY=-speedY;
    }
    if (left==paddleAX+30 && (BallTop+10>paddleAY && BallTop<paddleAY+70) ){
        speedX=-speedX;
        speedY=-speedY;
    }
    if (left+15==paddleBX && (BallTop+10>paddleBY && BallTop<paddleBY+70) ){
        speedX=-speedX;
        speedY=-speedY;
    }

}
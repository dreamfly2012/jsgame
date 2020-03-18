var canvas = document.querySelector("#main");
var ctx    = canvas.getContext("2d");
var width  = canvas.width
var height = canvas.height
var debug  = true
var direction = "";
var sprite_img = new Image()
var background_img = new Image()


function init(){
    sprite_img.src = "images/idle.gif"
    sprite_img.currentX = 0;
    sprite_img.currentY = 0;
    
    background_img.src = "images/stone.png"
    background_img.currentX = 0;
    background_img.currentY = 0;
    window.requestAnimationFrame(draw);
}

function draw() {
    landingPage()
    eventWatch()
    controlMove()
}


/**
 * 首页
 */
function landingPage(){
    ctx.fillStyle = "#000000";
    console.log(canvas.width)
    console.log(canvas.height)
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Verdana";
    // 创建渐变
    var gradient = ctx.createLinearGradient(canvas.width / 2, canvas.height / 2, canvas.width, canvas.height / 2);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // 用渐变填色
    ctx.fillStyle = gradient;
    ctx.fillText("冒险之旅", canvas.width / 2, canvas.height / 2);
}
/**
 *   绘制精灵
 */
function drawSprite(sprite_img, reverse=false) {
    if (reverse==true){
        ctx.drawImage(sprite_img, sprite_img.currentX, sprite_img.currentY, -x - sprite_img.width, sprite_img.height)
    }else{
        ctx.drawImage(sprite_img, sprite_img.currentX, sprite_img.currentY)
    }
}   

/**
 * 绘制背景
 */
function drawBackground(){
    xNum = width / background_img.width
    yNum = height / background_img.height
    
    for(i = 0; i<xNum; i++) {
        for(j = 0; j < yNum; j++){
            ctx.drawImage(background_img, i * background_img.width, j * background_img.height);
        }
    }
    ctx.save();
}




function controlMove() {
    window.onkeydown = function (event) {
        //console.log(event);
        switch (event.keyCode) {
            case 37:
                if(debug){
                    console.log("左");
                }
                drawBackground()
                sprite_img.currentX -= 10
                sprite_img.currentY = height - 10 - sprite_img.height
                drawSprite(sprite_img, false)
                direction = 'left';
                break;
            case 38:
                if (debug) {
                    console.log("上");
                }
                this.drawBackground()
                //this.sprite_img.currentX = 10
                sprite_img.src = "images/jump.png"
                sprite_img.currentY = width - sprite_img.currentY
                drawSprite(sprite_img, false)
                direction = 'up';
                break;
            case 39:
                if(debug){
                    console.log("右");
                }
                drawBackground()
                sprite_img.currentX += 10
                sprite_img.src = "images/run.gif"
                sprite_img.currentY = height - 10 - sprite_img.height
                drawSprite(sprite_img,false)
                //ctx.rotate(180);
                direction = 'right';
                break;
            case 40:
                if(debug){
                    console.log("下");
                }
                direction = 'down';
                break;
            default:
                break;

        }
        
    }
   
}

/**
 * 事件监听
 */
function eventWatch(){
    main.addEventListener('click', function (e) {
        drawBackground()
        sprite_img.currentX = 10;
        sprite_img.currentY = height - 10 - background_img.height
        drawSprite(sprite_img);
    })
}

/**
 * 游戏开始
 */

// 开始游戏按钮点击事件
var set;

function begin() {
    
    /*
     调用开始函数
     */
    set = setInterval(start, 20);
    ourkingC = setInterval(ourkingChange, 20);
}



init();
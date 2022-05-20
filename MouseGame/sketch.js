var mouse, mouseImage;
var knife, knifeImage;
var wallImage;
var launched = false;
var deadMouseImage

function preload() {
    knifeImage = loadImage("./assets/Knife.png");
    mouseImage = loadImage("./assets/Mouse.png");
    wallImage = loadImage("./assets/Wall.png");
    upMouseImage = loadImage("./assets/UpMouse.png");
    deadMouseImage = loadImage("./assets/deadMouse.png");
}

function setup() {
    var canvas = createCanvas(600, 500);

    mouse = createSprite(50, 50, 10, 50);
    mouse.addImage(mouseImage);
    mouse.scale = 0.5;

    knife = createSprite(300, 200, 10, 10);
    knife.addImage(knifeImage);
    knife.scale = 0.5;
}

function draw() {
    background(wallImage);

        if(keyIsDown(32)) {
            launch();
        }

        if(launched === false) {
            movement();
            knifeMovement();
        }

    drawSprites();
}

function movement() {
    if(keyIsDown(DOWN_ARROW) && mouse.position.y <= 450) {
        mouse.position.y += 5;
        mouse.addImage(mouseImage);
    }
    
    if(keyIsDown(UP_ARROW) && mouse.position.y >= 50) {
        mouse.position.y -= 5;
        mouse.addImage(upMouseImage);
    }
    
}

function knifeMovement() {
    if(keyIsDown(83) && knife.position.y <= 450) {
        knife.position.y += 3;
    }
    
    if(keyIsDown(87) && knife.position.y >= 50) {
        knife.position.y -= 3;
    }
    
}

function launch() {
    launched = true;
    if(keyIsDown(32) && knife.position.x >= 0) {
        knife.position.x-=5;
        stab();
    }
}

function stab() {
    //if(knife.overlap(mouse)) {
        //mouse.addImage(deadMouseImage);
        
    //}

    if(knife.position.y<mouse.position.y-25 || knife.position.y>mouse.position.y+25) {
        if(knife.overlap(mouse))
            mouse.addImage(deadMouseImage);
    }
}
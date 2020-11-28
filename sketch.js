var background, backgroundImage;
var ground, monkey, mi;
var banana, bi, bg, obstacle, oi, og;
var score;
function preload() {
    backgroundImage = loadImage("jungle.png");
    mi = loadImage("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png",
        "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
    bi = loadImage("banana.png");
    oi = loadImage("stone.png");
}
function setup() {
    createCanvas(400, 400);
    background = createSprite(200, 200);
    bakground.x = background.width / 2;
    background = addImage("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png",
        "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png", backgroundImage);
    background.velocityX = -4;

    ground = createSprite(200, 380, 20, 5);
    ground.visible = false;

    monkey = createSprites(10, 360);
    monkey = addImage(mi);
    monkey.velocityX = 4;
    monkey.scale = 0.1;

    score = 0;

    og = new Group();
    bg = new Group();
}
function draw() {
    background("lightblue");

    stroke("white");
    fill("white");
    textSize(20);
    text("Survival Time:" + score, 500, 50);


    if (ground.x < 0) {
        ground.velocityX = -10;
    }

    if (keyDown("space")) {
        monkey.velocityY = -12;
    }

    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(invisibleG);

    if (monkey.isTouching(bg)) {
        score = score + 2;
        bg.destroyEach();
    }
    if (monkey.isTouching) {
        monkey.scale = 0.1;

        switch (score) {
            case 10: monkey.scale = 0.12;
                break;
            case 20: monkey.scale = 0.14;
                break;
            case 30: monkey.scale = 0.16;
                break;
            case 40: monkey.scale = 0.18;
                break;
            default: break;
        }

    }
    b(); o();
    drawSprites();
}
function b() {
    if (World.frameCount % 80 === 0) {
        banana = createSprite(200, 100);
        banana.addAnimation("banana.png", bi);
        banana.scale = 0.1;
        banana.y = Math.round(random(120, 180));
        banana.velocityX = -2;
        banana.lifetime = 110;
        bg.add(banana);
    }
}
function o() {
    if (World.frameCount % 300 === 0) {
        obstacle = createSprite(200, 315);
        obstacle.addAnimation("obstacle.png", oi);
        obstacle.scale = 0.1;
        obstacle.velocityX = -2;
        obstacle.lifetime = 330;
        og.add(obstacle);
    }
}

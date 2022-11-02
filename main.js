var canvas = new fabric.Canvas('burger2');
block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player_3.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(new_image) {
    fabric.Image.fromURL(new_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(o)
{
    keyPressed = o.keyCode;
    console.log("a key is pressed");
    if(o.shiftKey == true && keyPressed == '86'){
        console.log("v and shift together");
        block_width = block_width + 17;
        block_height = block_height + 17;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(o.shiftKey == true && keyPressed == '79'){
        console.log("o and shift together");
        block_width = block_width - 17;
        block_height = block_height - 17;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '77'){
        new_image('milk_block.png');
        console.log("m");
    }
    if(keyPressed == '81'){
        new_image('quarzzz.jpg');
        console.log("q");
    }
    if(keyPressed == '70'){
        new_image('fenc.png');
        console.log("f");
    }
    if(keyPressed == '80'){
        new_image('gals_pan.png');
        console.log("p");
    }
    if(keyPressed == '71'){
        new_image('ground.png');
        console.log("g");
    }
    if(keyPressed == '67'){
        new_image('cloud.png');
        console.log("c");
    }
    if(keyPressed == '83'){
        new_image('shep.png');
        console.log("s");
    }
    if(keyPressed == '82'){
        new_image('roof.jpg');
        console.log("r");
    }
    if(keyPressed == '85'){
        new_image('unique.png');
        console.log("u");
    }
    if(keyPressed == '68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keyPressed == '87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keyPressed == '76'){
        new_image('light_green.png');
        console.log("l");
    }
    if(keyPressed == '84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keyPressed == '89'){
        new_image('yellow_wall.png');
        console.log("y");
    }
}
function up(){
    if(player_y >=0){
        player_y = player_y - block_height;
        console.log("bliock higgup = " + block_height);
        console.log("up prees  x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <=500){
        player_y = player_y + block_height;
        console.log("bliock higgup = " + block_height);
        console.log("down prees  x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >=0){
        player_x = player_x - block_width;
        console.log("bliock higgup = " + block_width);
        console.log("lef prees  x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <=850){
        player_x = player_x + block_width;
        console.log("bliock higgup = " + block_width);
        console.log("right prees  x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}


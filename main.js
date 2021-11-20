var last_x , last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
last_x=e.touches[0].clientX-canvas.offsetTop;
last_y=e.touches[0].clientY-canvas.offsetLeft;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineWidth=2;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    last_x=current_x;
    last_y=current_y;
}
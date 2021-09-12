var canvas = document.getElementById('canvas');


window.onload = function()
{
    maakLeegCanvas();
}

function createEmptyCanvas()
{
    let html_string = "<canvas></canvas>"
    document.getElementById("canvas").innerHTML = html_string;
    canvas.addEventListener("click", addPoint(event), false);
}

function addPoint(event)
{
    let left_bound = canvas.offsetLeft;
    let upper_bound = canvas.offsetTop;
    
    let x_val = event.pageX - left_bound;
    let y_val = event.pageY - upper_bound;
    console.log(x_val, y_val);
}

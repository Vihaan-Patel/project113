function preload()
{

}
function setup()
{
 canvas = createCanvas(640,480);
 canvas.position(110,250);
 video = createCapture(VIDEO);
}

function take_snapshot()
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
});   
}
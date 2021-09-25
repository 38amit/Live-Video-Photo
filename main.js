function preload() {
}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(400, 330);
video = createCapture(VIDEO);
video.hide();
tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(255, 0, 0);
    stroke(240, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0)
}

function take_snapshot() {
    save("tinted_image.png");
}

function filter_tint() {
    tint_color = document.getElementById("filter_name").value;
}
const SUS = 69
let X, Y;
let r, g, b;
function setup(){
    createCanvas(420, 420)
}
function draw() {
    background(0);
    fill(r, g, b);
    noStroke();
    rect(100, 300, 69 ,69);
    rect(100 + SUS, 300, 69 ,69);
    rect(100 + SUS + SUS, 300, 69 ,69);
    rect(100 + SUS, 300 - SUS, 69 ,69);
    rect(100 + SUS, 300 -SUS - SUS, 69 ,69);
    rect(100 + SUS, 300 - SUS - SUS - SUS, 69 ,69);
    X = random(32, 388);
    Y = random(32, 388);
    r = random(255);
    g = random(255);
    b = random(255);

}

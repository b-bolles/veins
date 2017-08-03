var img;
var color;
var activePixels = [];

class Pix
{
    constructor(x,y, dir, color)
    {
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.color = color;
        this.counter = 0;
    }
    
    update()
    {
        this.counter++;
        if(random(0, 50) <= 1)
        {
            this.dir = floor(random(1,5));
        }
        switch(this.dir)
        {
            case 1:
                this.x++;
                break;
            case 2:
                this.y++;
                break;
            case 3:
                this.x--;
                break;
            case 4:
                this.y--;
                break;
        }
        if(this.counter < 500 && this.x <= 480 && this.x >= 0 && this.y <= 480 && this.y >= 0)
        {
            set(this.x, this.y, this.color);
        }
    }
}

function preload()
{
    img = loadImage("assets/image.jpg");
}

function setup() 
{
    createCanvas(480,480);
    image(img, 0,0);
}

function draw() 
{
    if(mouseIsPressed)
    {
        color = get(mouseX, mouseY);
        for(i=1;i<5;i++)
        {
            activePixels.push(new Pix(mouseX, mouseY, i, color));
        }  
    }
    for(i=0; i < activePixels.length; i++)
    {
        activePixels[i].update();
        if(activePixels[i].counter >= 500)
        {
            activePixels.splice(i, 1);
        }
    }
    updatePixels();
}

function mouseClicked()
{
    color = get(mouseX, mouseY);
    for(i=1;i<5;i++)
    {
        activePixels.push(new Pix(mouseX, mouseY, i, color));
    }
}
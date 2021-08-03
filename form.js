class Form{
    constructor(){
this.heading=createElement('h1');
this.story=createElement('h3');
this.button=createButton("START YOUR CHALLENGE");
this.image=loadImage("background2.jpg")

    }
    display(){
        background(this.image);
        this.heading.html("DO WHAT'S RIGHT!");
        this.heading.position(550,50);
        this.story.html("There is a man who lives an unhealthy lifestyle. Ofcourse,unhealthy says that the person is lazy. He has a habit of not waking up early, not doing exercises, eating junk foods and etc… The player has to correct all the bad habbits of this man.");
        this.story.position(50,150);
        this.button.position(550,300);
        this.button.mousePressed(()=>{
            this.story.hide();
            this.button.hide();
            this.heading.html("Find all the 8 clocks to wake lazy Jack up...")
            this.heading.position(400,50);
        gameState=1;
        })
    }
}
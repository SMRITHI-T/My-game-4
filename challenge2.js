class Challenge2{
    constructor(){
        this.heading=createElement('h1');
        this.security=new Security();

        this.image=loadImage("background.jpg")
    }
    display(){
        background(this.image);
        this.heading.html("CHALLENGE 2")
this.heading.position(600,0);
clues();
this.security.display();
    }
}
class Security {

    constructor(){
        this.access1 = createInput("answer")
        this.access2 = createInput("answer")
        this.access3 = createInput("answer")
        this.access4 = createInput("answer")
        this.button = createButton('SUBMIT');
        this.image=loadImage("win2.jpg");
        this.system=new System();
    }

    display(){
       
        this.access1.position(100,220);
        this.access1.style('background', 'white');  

        
        this.access2.position(100,510);
        this.access2.style('background', 'white');  
//add code for creating and positioning the third input box and button
   
        this.access3.position(600,220);
        this.access3.style('background', 'white');  
        
       
        this.access4.position(600,510);
        this.access4.style('background', 'white');  

       
        this.button.position(600,540);
        this.button.style('background', 'lightgrey');
        this.button.mousePressed(() => {
            if(this.system.authenticate(accessCode1,this.access1.value())){
                score++;
            }
            if(this.system.authenticate(accessCode2,this.access2.value())){
                score++;
            }
            if(this.system.authenticate(accessCode3,this.access3.value())){
                score++;
            }
            if(this.system.authenticate(accessCode4,this.access4.value())){
                score++;
            }
        });
        
       if (score==4){
           background(this.image);
       }
}
}
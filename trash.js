class dustbin{
    constructor(x,y,width,height){
        var options = {
            density : 1.5,    
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
   this.height = height;
   
   World.add(world,this.body);
    }
    display(){
       push();
        var post2 = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(post2.x,post2.y,post2.width,post2.height);
        pop();
    }
};
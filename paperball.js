class paper{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution: 0.5,
            friction : 0.6,
            density : 1.5,    
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
   this.height = height;
   
   World.add(world,this.body);
    }
    display(){
       push();
        var post = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(post.x,post.y,post.width,post.height);
        pop();
    }
};
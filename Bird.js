class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg=loadImage("sprites/smoke.png");
    //array = can store more than one values in a single variable,x=[1,2,3,4,5],length=5,index of 1=0 index of 5 = 4
    //empty array to store bird position
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //reduce the smoke
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
      //array of arrays, trajectory=[[x1,y1],[x2,y2],...]
    this.trajectory.push(position);
    }
    //attacth smoke image on the bird position
    for(var i = 0; i < this.trajectory.length; i = i+1){
    image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}

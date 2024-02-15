export class Dot {
    constructor(x,y,lifetime=1){
        Object.assign(this,{x,y,lifetime});
    }
    draw(ctx,vx,vy){
        this.lifetime = this.lifetime *.98
        var size = 1;
        if(this.lifetime >.5){
            size  = 1-this.lifetime;
        }
        else{
            size = this.lifetime;
        }
        ctx.fillStyle = 'red';
        ctx.beginPath(); 
        ctx.arc(this.x, this.y,size*13,0,Math.PI*2);
        ctx.fill();
            this.x = this.x +vx*2;
            this.y = this.y +vy*2;
    }
}
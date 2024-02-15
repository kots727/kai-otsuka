export class Dot {
    constructor(x,y){
        Object.assign(this,{x,y});

    }
    draw(ctx,vx,vy){
        ctx.fillStyle = 'red';
        ctx.beginPath(); 
        ctx.arc(this.x, this.y,6,0,Math.PI*2);
        ctx.fill();
            this.x = this.x +vx*4;
            this.y = this.y +vy*4;
    }
}
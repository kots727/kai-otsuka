export class Dot {
    constructor(x,y){
        Object.assign(this,{x,y});

    }
    draw(ctx,vx,vy){
        ctx.beginPath(); 
        ctx.moveTo(this.x, this.y);
            this.x = this.x +vx;
            this.y = this.y +vy;
            ctx.lineTo(this.x,this.y);
            ctx.stroke();
    }
}
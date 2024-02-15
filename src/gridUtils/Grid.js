class Grid {
    constructor(ix, iy, width, height, angle){
        Object.assign(this,{ix,iy,width,height,angle});

    this.ix = ix;
    this.ny = iy;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    }
    getAngle(){
        return this.angle;
    }
    setAngle(angle){
        this.angle = angle;
    }
    draw(ctx){
        ctx.moveTo(this.ix*this.width+this.width*.5,this.iy*this.height+40);
        ctx.beginPath();
        ctx.arc(this.ix*this.width+this.width*.5,this.iy*this.height+this.height*.5,2,0,2*Math.PI);
        ctx.fill();
        ctx.moveTo(this.ix*this.width+this.width*.5,this.iy*this.height+this.height*.5);
        ctx.lineTo(this.ix*this.width+this.width*.5+(Math.cos(this.angle)*(this.width*.5)),this.iy*this.height+this.height*.5+(Math.sin(this.angle)*(-this.height*1)))
        ctx.stroke();
    }
}
export class GridField{
    constructor(width, height, nx,ny){
        Object.assign(this,{width,height,nx,ny});
        this.arr = Array(nx).fill().map(() => Array(ny));
        for(let i = 0; i<nx;i++){
            for(let j = 0; j<ny;j++){
               this.arr[i][j]= new Grid(i,j,width/nx,height/ny,(45/360)*Math.PI*2);
               if(j<10){
                
               this.arr[i][j]= new Grid(i,j,width/nx,height/ny,(3/360)*Math.PI*2);
               }
            }
        }
    }
    getAngle(ix,iy){
        return this.arr[ix][iy].angle;
    }
    setAngle(ix,iy, angle){
        this.arr[ix][iy] = new Grid(ix,iy,this.width/this.nx,this.height/this.ny,angle); 
    }
    draw(ctx){
        for(let i = 0; i<this.nx;i++){
            for(let j = 0; j<this.ny;j++){
                this.arr[i][j].draw(ctx);
            }
        }
    }
}
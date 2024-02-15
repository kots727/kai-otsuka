import React, { useRef, useEffect,useState, useContext } from 'react'
import {makePerlinField} from '../gridUtils/canvas.js'
import {Dot} from "./Dot.js"
import {Context} from '../App.js'

export function ArtCanvas() { 

    const [grid,setGrid] = useContext(Context)
        const canvasRef = useRef(null)
        const [lines, setLine] = useState(null);
    useEffect(() => {
    const c = canvasRef.current
    if(c.width !=window.innerWidth){
    c.width  = window.innerWidth;
    c.height = window.innerHeight;
    }
    var ctx = c.getContext("2d");

 const interval = setInterval(() => {
    const g = grid
    for(let q = 0; q<10;q++){
        
    }
 if(lines!=null){
    for(let i = 0; i<lines.length;i++){
        if(Math.floor(lines[i].x*(40/c.width)>40||Math.floor(lines[i].x*(40/c.width))<0||Math.floor(lines[i].y*(30/c.height))>29||Math.floor(lines[i].y*(30/c.height))<0)){
            lines.splice(i, 1);
        }
        else lines[i].draw(ctx,
            Math.cos(g.getAngle(Math.floor(lines[i].x*(40/c.width)),Math.floor(lines[i].y*(30/c.height)))),
            -Math.sin((g.getAngle(Math.floor(lines[i].x*(40/c.width)),Math.floor(lines[i].y*(30/c.height)))))
            )
            
    }
    
		ctx.fillStyle = 'rgba(0,0,0,.1)';
		ctx.fillRect(0,0,c.width,c.height);
    }
}, 10);
return () => clearInterval(interval);
    }, [lines, grid])

    function handleMouseMove(ev){
        const c = canvasRef.current
        var ctx = c.getContext("2d");
let g = makePerlinField(c.width,c.height,40,30,1,3,0,[(ev.pageX/c.width)/2, (ev.pageY/c.height)/2],7)
setGrid(g);


    }
    function handleClick(ev){
if(lines == null){
    setLine([new Dot (ev.clientX,ev.clientY)])
}else{
        let x = lines;

        x.push(new Dot(ev.clientX,ev.clientY))
        setLine(x);
}
    }
    return (
        <div onClick={(ev)=>handleClick(ev)} onMouseMove={(ev)=> handleMouseMove(ev)}>
    <canvas ref={canvasRef} style={{
              height: '100vh',
              width: '100vw',
        display:'block',
        position: 'absolute',
        left: '0',
        top: '0'
    }}></canvas>
    </div>
    );
}

import React, { useRef, useEffect,useState } from 'react'
import {makePerlinField} from '../gridUtils/canvas.js'
import {Dot} from "./Dot.js"

export function ArtCanvas() { 

     const canvasRef = useRef(null)
     const [lines, setLine] = useState(null);
    useEffect(() => {
        
      const c = canvasRef.current
c.width  = window.innerWidth-10;
c.height = window.innerHeight-10

var ctx = c.getContext("2d");
 let g = makePerlinField(c.width,c.height,40,30,1,40,0,[0.123, 0.8922397920382235],7)
    }, [])

    function handleMouseMove(ev){
        const c = canvasRef.current
        var ctx = c.getContext("2d");
let g = makePerlinField(c.width,c.height,40,30,1,3,0,[(ev.pageX/c.width)/2, (ev.pageY/c.height)/2],7)
window.grid = g;
if(lines!=null){
for(let i = 0; i<lines.length;i++){
    lines[i].draw(ctx,Math.cos(g.getAngle(0,0)),-Math.sin((g.getAngle(0,0))))
}
}
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
        position: 'absolute',
        left: '0',
        top: '0'
    }}></canvas>
    </div>
    );
}

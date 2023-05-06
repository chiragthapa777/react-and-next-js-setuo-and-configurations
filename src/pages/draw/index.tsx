import React, { useEffect, useRef } from "react";

export default function index() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas?.getContext('2d')){
            const cxt: CanvasRenderingContext2D | any = canvas.getContext("2d");
            

            // // draw line
            // cxt.moveTo(0,0)
            // cxt.lineTo(80,80)
            // cxt.stroke()

            // // rectangle
            // cxt.fillRect(100,100,50,50)
            // cxt.strokeRect(200,100,50,50)

            // //draw triangle using path -> path is set of lines
            // cxt.beginPath()
            // cxt.moveTo(400,200)
            // cxt.lineTo(200,300)
            // cxt.lineTo(400,400)
            // cxt.fill()

            // cxt.beginPath();
			// cxt.moveTo(600, 200);
			// cxt.lineTo(400, 300);
			// cxt.lineTo(600, 400);
			// cxt.lineTo(600, 200);
			// cxt.stroke();

            // //draw circle 
            // // arc(x,y,r,radain, angle, clockwise)

            // //outer circle
            // cxt.beginPath()
            // cxt.arc(200,600,100,0,Math.PI *2, true)

            // // simile
            // cxt.moveTo(120,600)
			// cxt.arc(200, 600, 80, 0, Math.PI , false);

			// // cxt.stroke();

            // cxt.moveTo(150,550)
            // cxt.arc(150, 550, 10, 0, Math.PI * 2, true);
            // // cxt.fill()
			// cxt.closePath();

            let isDrawing = false;
            let prevX = -1, prevY = -1;

            const handleMouseDown = (event:MouseEvent) =>{
                isDrawing = true
                prevX = event.offsetX
                prevY = event.offsetY
            }
            const handleMouseOut = (event:MouseEvent) => {
                isDrawing = false
            };
            const handleMouseUp = (event:MouseEvent) =>{
                isDrawing = false
            }
            const handleMouseMove = (event:MouseEvent) =>{
                if(isDrawing){
                    cxt.beginPath()
                    cxt.moveTo(prevX, prevY);
                    cxt.lineTo(event.offsetX, event.offsetY);
                    prevX = event.offsetX;
					prevY = event.offsetY;
                    cxt.stroke()
                }
            }

            canvas.addEventListener("mousedown", handleMouseDown);
            canvas.addEventListener("mouseout", handleMouseOut);
            canvas.addEventListener("mouseup", handleMouseUp);
            canvas.addEventListener("mousemove", handleMouseMove);
        }
        
    }, []);
	return (
		<div>
			<h1 className="text-lg">Draw board</h1>
			<canvas
				className="border-2 border-black m-3"
				width={800}
				height={800}
                ref={canvasRef}
			></canvas>
		</div>
	);
}

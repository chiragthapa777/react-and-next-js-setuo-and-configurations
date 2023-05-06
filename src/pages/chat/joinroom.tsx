import React from 'react'
import { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../../contexts/WebsocketContext";

export default function joinroom() {
    const socket = useContext(WebsocketContext);
      useEffect(() => {
			socket.on("connect", () => {
				console.log("Connected with id = ", socket.id);
			});
            socket.emit('join-room','room_name');
            socket.on("testing room",(m)=>{
                console.log(m)
            });
            return () => {
				console.log("Unregistering Events...");
				socket.off("connect");
				socket.off("testing room");
			};
		}, []);
  return (
    <div>joinroom</div>
  )
}

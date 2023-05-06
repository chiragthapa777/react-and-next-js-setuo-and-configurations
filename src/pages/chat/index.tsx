import React from 'react'
import { useContext, useEffect, useState } from "react";
// import { WebsocketContext } from "../../contexts/WebsocketContext";
import Link from 'next/link';

type MessagePayload = {
	content: string;
	msg: string;
};

export default function index() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<MessagePayload[]>([]);
//   const socket = useContext(WebsocketContext);

  useEffect(() => {
		// socket.on("connect", () => {
		// 	console.log("Connected with id = ", socket.id);
		// });
		// socket.on("getMessage", (newMessage: MessagePayload) => {
		// 	console.log("onMessage event received!");
		// 	console.log(newMessage);
		// 	// setMessages((prev) => [...prev, newMessage]);
		// });
		// return () => {
		// 	console.log("Unregistering Events...");
		// 	socket.off("connect");
		// 	socket.off("getMessage");
		// };
  }, []);

  const onSubmit = () => {
		// socket.emit("createChatW", value);
		// setValue("");
  };

  return (
		<div>
			<Link href={"/chat/joinroom"}>join room</Link>
			<div>
				<h1>Websocket Component</h1>
				<div>
					{messages.length === 0 ? (
						<div>No Messages</div>
					) : (
						<div>
							{messages.map((msg) => (
								<div>
									<p>{msg.content}</p>
								</div>
							))}
						</div>
					)}
				</div>
				<div>
					<input
						type="text"
						value={value}
						placeholder="type"
						onChange={(e) => setValue(e.target.value)}
					/>
					<button onClick={onSubmit}>Submit</button>
				</div>
			</div>
		</div>
  );
}

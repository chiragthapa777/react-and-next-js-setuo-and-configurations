import Layout from '@/components/Layout';
// import { WebsocketProvider, socket } from '@/contexts/WebsocketContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
	useEffect(()=>{
		console.log("hittttt")
	},[])
  return (
		<Layout>
			{/* <WebsocketProvider value={socket}> */}
				<main className="">
					<Component {...pageProps} />
				</main>
			{/* </WebsocketProvider> */}
		</Layout>
  );
 
  
}

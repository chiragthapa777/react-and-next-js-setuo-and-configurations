import Layout from '@/components/Layout';
// import { WebsocketProvider, socket } from '@/contexts/WebsocketContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
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

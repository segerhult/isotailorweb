import '../styles/globals.css'
import Image from 'next/image';
import { AppProps } from 'next/app';

function IsoTailor({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-row items-center justify-center space-x-4">
        <button className="mb-2 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded border border-gray-300">
          Click me 1
        </button>
        <button className="mb-2 bg-white hover:bg-gray-100 text-white font-bold py-2 px-4 rounded border border-gray-300 flex items-center">
          <Image src="/ubuntu.svg" alt="Ubuntu Logo" width={50} height={50} />
        </button>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default IsoTailor
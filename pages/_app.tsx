import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-archivo',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${archivo.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

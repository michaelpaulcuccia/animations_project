import '@/styles/globals.css';
import PageLayout from '../layout/PageLayout';
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

export default function App({ Component, pageProps }) {
  return (
    <>
     <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}
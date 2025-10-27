import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Load Tailwind from CDN for development/prototyping when PostCSS plugins aren't installed */}
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Mocklyy — AI mock interviews for company-specific practice</title>
        <meta name="description" content="Mocklyy provides company- and profile-specific mock interviews with AI feedback. Practice, improve, and track your interview readiness — free." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

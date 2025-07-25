import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Santosh Khelge's landing page :)!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p className="LinkedIn">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p className="Twitter / X">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p className="Medium">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

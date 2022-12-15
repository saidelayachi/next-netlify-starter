import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello Babe </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome Babe" />
        <p className="description">
          <ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
    
          <div>
          <input>Write something here </input>
          </div>
        </p>
      </main>

      <Footer />
    </div>
  )
}

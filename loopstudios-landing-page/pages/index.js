import Head from 'next/head'
import Header from '../components/Header'
import VR from '../components/VR'
import Creations from '../components/Creations'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loop Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <VR />
      <Creations />
      <Footer />
    </div>
  )
}

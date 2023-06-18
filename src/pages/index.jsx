import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Scopes } from '@/components/Scopes'

export default function Home() {
  return (
    <>
      <Head>
        <title>CORES 2023 - The 13th International Conference on Computer Recognition Systems</title>
        <meta
          name="description"
          content="The 13th International Conference on Computer Recognition Systems."
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <link rel="stylesheet" href="https://use.typekit.net/xhe4kbj.css" />
        <link rel="stylesheet" href="https://kit.fontawesome.com/ade871a1e5.css" crossorigin="anonymous"></link>
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Scopes />
      </main>
      <Footer />
    </>
  )
}

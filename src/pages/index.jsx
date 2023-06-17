import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Scope } from '@/components/Scope'
import { Scopes } from '@/components/Scopes'

export default function Home() {
  return (
    <>
      <Head>
        <title>CORES 2023 - A community-driven design conference</title>
        <meta
          name="description"
          content="At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected."
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
        {/* <Sponsors /> */}
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}

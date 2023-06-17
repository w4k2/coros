import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-red-50">
        {/* <Image
          className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        /> */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-red-600 sm:text-7xl">
            <span className="sr-only">CORES 2023 - </span>The 13th International Conference on Computer Recognition Systems
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-red-900">
            <p>
              The 13th International Conference on Computer Recognition Systems (CORES’23) and the 13th International Conference on Image Processing and Communications (IP&C’23) organizing committees decided to firmly organize the conference on the scheduled date of June 29, 2023.
            </p>
            <p>
            The entire conferences will be held in on-line mode using a videoconferencing system.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden bg-red-500">
            Conference programe
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Date', 'June 29, 2023'],
              ['Place', 'Your desk'],
              ['Venue', 'Zoom'],
              ['Location', 'Wrocław, Poland'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-red-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-red-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}

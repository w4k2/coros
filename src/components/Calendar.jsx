import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'

const presentations = [
    {
        presenter: 'Sebastián García Galán',
        article: 'Color Tracking Application Using AI-based Docker Container Scheduling in Fog Computing',
        start: '10:00AM',
        end: '10:20AM',
        session: 'Regular session 1'
    },
    {
        presenter: 'Mariusz Flasiński',
        article: 'A novel approach of multi-string parsing for syntactic pattern recognition',
        start: '10:00AM',
        end: '10:20AM',
        session: 'Regular session 2'
    }
]

export function Calendar() {
  return (
    <section
      id="calendar"
      aria-labelledby="calendar-title"
      className="py-20 sm:py-32"
    >
        <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-5xl"
          >
            Papers
          </h2>
          
          
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Check the timeslots for regular presentations.
          </p>

            {presentations.map((presentation, index) => (
              <span>{presentation.presenter}</span>  
            ))}

{presentations.map((person) => (
                    <li key={person.email} className="relative flex justify-between py-5">
                      <div className="flex gap-x-4 pr-6 sm:w-1/2 sm:flex-none">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            <a>
                              <span className="absolute inset-x-0 -top-px bottom-0" />
                              {person.presenter}
                            </a>
                          </p>
                          <p className="mt-1 flex text-xs leading-5 text-gray-500">
                            <a className="relative truncate hover:underline">
                              {person.article}
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-x-4 sm:w-1/2 sm:flex-none">
                        <div className="hidden sm:block">
                          <p className="text-sm leading-6 text-gray-900">{person.session}</p>
                          {(
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                              <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                              <time>
              {person.start}
            </time>{' '}
            -{' '}
            <time>
              {person.end}
            </time>{' '}
            CET
                            </p>
                          )}
                        </div>
                        <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      </div>
                    </li>
                  ))}

        </div>
      </Container>
    </section>
  )
}

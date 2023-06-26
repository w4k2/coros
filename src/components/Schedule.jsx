import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'Early morning',
    dateTime: '2022-04-04',
    summary:
      'Early morning starts at 9AM with first plenary session, and later conducts two morning sessions to reach the first break at 11AM.',
    timeSlots: [
      {
        name: 'Opening ceremony',
        start: '9:00AM',
        end: '9:15AM',
      },
      {
        name: 'Shin-Jye Lee',
        description: 'Artificial Intelligence and Smart Healthcare',
        start: '9:15AM',
        end: '10:00AM',
      },
      {
        name: 'Regular session 1',
        description: 'Chair: Prof. Rafał Kozik',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Regular session 2',
        description: 'Chair: dr Jakub Klikowski',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Break',
        start: '11:00AM',
        end: '11:15AM',
      }
    ],

  },
  {
    date: 'Midday experience',
    dateTime: '2022-04-04',
    summary:
      'Midday starts at after 11AM with the second plenary session, later performing two regular sessions to reach the one hour long coffee break at 1PM. Everyone is welcomed to rest, eat something and enjoy the view outside the window.',
    timeSlots: [
      {
        name: 'Sebastian Basterreich',
        description: 'Optimization of recurrent nets: recent theoretical advances and applications in chaotic systems modeling',
        start: '11:15AM',
        end: '12:00AM',
      },
      {
        name: 'Regular session 3',
        description: 'Chair: dr Marek Pawlicki',
        start: '12:00AM',
        end: '1:00PM',
      },
      {
        name: 'Regular session 4',
        description: 'Chair: Prof. Paweł Ksieniewicz',
        start: '12:00AM',
        end: '1:00PM',
      },
      {
        name: 'Break',
        start: '1:00PM',
        end: '2:00PM',
      }
    ],
  },
  {
    date: 'Evening experience',
    dateTime: '2022-04-04',
    summary:
      'The evening starts as early as 2PM in consists of two most content-packed regular sessions filled with presentations. The last session ends at 4PM to reserve the last space for a closing ceremony.',
    timeSlots: [
      {
        name: 'Regular session 5',
        description: 'Chair: dr Paweł Trajdos',
        start: '2:00PM',
        end: '4:00PM',
      },
      {
        name: 'Regular session 6',
        description: 'Chair: Prof. Paweł Ksieniewicz',
        start: '2:00PM',
        end: '4:00PM',
      },
      {
        name: 'Closing ceremony',
        start: '4:00PM',
        end: '4:20PM',
      }
    ],
  }
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-red-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-red-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-red-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} CET`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-red-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-red-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            CET
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-5xl">
            Our smart, one day schedule is divided into six sessions.
          </h2>
          {/* <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded and every attendee has to sign an NDA
            to watch the talks.
          </p> */}
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -bottom-32 -top-40 overflow-hidden bg-red-50">
          {/* <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          /> */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}

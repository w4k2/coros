import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import { PaperClipIcon } from '@heroicons/react/20/solid'

const presentations = [
  {
    presenter: 'Sebastián García Galán',
    article:
      'Color Tracking Application Using AI-based Docker Container Scheduling in Fog Computing',
    start: '10:00AM',
    end: '10:20AM',
    session: 'Regular session 1',
  },
  {
    presenter: 'Mariusz Flasiński',
    article:
      'A novel approach of multi-string parsing for syntactic pattern recognition',
    start: '10:00AM',
    end: '10:20AM',
    session: 'Regular session 2',
  },
  {
    presenter: 'Janusz Bobulski',
    article: 'Air pollution monitoring and information distribution system',
    start: '10:20AM',
    end: '10:40AM',
    session: 'Regular session 1',
  },
  {
    presenter: 'Weronika A. Borek-Marciniec',
    article:
      'Hollow n-grams vectorizer for Natural Language Processing problems',
    start: '10:20AM',
    end: '10:40AM',
    session: 'Regular session 2',
  },
  {
    presenter: 'Piotr Garbat',
    article: 'Deep Learning for pit detection in cherries',
    start: '10:40AM',
    end: '11:00AM',
    session: 'Regular session 1',
  },
  {
    presenter: 'Shin-Jye Lee',
    article:
      'A Hybrid Long Short-Term Memory Network Based on Wind and Rain Sensitive and its Application to PM2.5 Prediction ',
    start: '10:40AM',
    end: '11:00AM',
    session: 'Regular session 2',
  },
  {
    presenter: 'Piotr Garbat',
    article: 'Image Analysis System for Augmented Reality Games',
    start: '12:00AM',
    end: '11:20AM',
    session: 'Regular session 3',
  },
  {
    presenter: 'Shin-Jye Lee',
    article: 'Actinic Keratosis Prediction Based on Deep Learning Methods',
    start: '12:00AM',
    end: '12:20AM',
    session: 'Regular session 4',
  },
  {
    presenter: 'Adam Piorkowski',
    article:
      'Coregistration of selected sequences in MRI imaging based on edge analysis of images difference',
    start: '12:20AM',
    end: '12:40AM',
    session: 'Regular session 3',
  },
  {
    presenter: 'Karol Wojtachnia',
    article:
      'Incremental Extreme Learning Machine for Binary Data Stream Classification',
    start: '12:20AM',
    end: '12:40AM',
    session: 'Regular session 4',
  },
  {
    presenter: 'Marek Pawlicki ',
    article:
      'Interpreting Intrusions - The Role of Explainability in AI-based Intrusion Detection Systems',
    start: '12:40AM',
    end: '1:00PM',
    session: 'Regular session 3',
  },
  {
    presenter: 'Paweł Niedziółka',
    article:
      'A non-deep approach to classifying movie genres based on multimodal data',
    start: '12:40AM',
    end: '1:00PM',
    session: 'Regular session 4',
  },
  {
    presenter: 'Mahmoud Ahmed Nasr',
    article:
      'An Approach to CT Image Conversion Using Filtering Based on Quaternion Mathematic',
    start: '2:00PM',
    end: '2:20PM',
    session: 'Regular session 5',
  },
  {
    presenter: 'Marcin Kociołek',
    article:
      'A New Assessment of Convolutional Neural Networks for Texture Directionality Detection ',
    start: '2:00PM',
    end: '2:20PM',
    session: 'Regular session 6',
  },
  {
    presenter: 'Kamil Szostek',
    article:
      'Real-time deformation of three-dimensional volumetric models using mesh models',
    start: '2:20PM',
    end: '2:40PM',
    session: 'Regular session 5',
  },
  {
    presenter: 'Weronika Jakubowska',
    article:
      'Detection of conspiracy theories from tweets using NLI-based Zero Shot Text Classification models',
    start: '2:20PM',
    end: '2:40PM',
    session: 'Regular session 6',
  },
  {
    presenter: 'Rafal Kozik',
    article: 'Document Annotation Tool For News Content Analysis',
    start: '2:40PM',
    end: '3:00PM',
    session: 'Regular session 5',
  },
  {
    presenter: 'Patrick John Ramos',
    article:
      'Knowledge Distillation with Relative Representations for Image Representation Learning ',
    start: '2:40PM',
    end: '3:00PM',
    session: 'Regular session 6',
  },
  {
    presenter: 'Paweł Trajdos',
    article:
      "Dynamic time wrapping technique applied to the user's intent recognition for myoelectric-based control of upper limb prosthesis",
    start: '3:00PM',
    end: '3:20PM',
    session: 'Regular session 5',
  },
  {
    presenter: 'Paweł Parczyk',
    article:
      'Battery management system for Polish hybrid residential photovoltaic power plants',
    start: '3:00PM',
    end: '3:20PM',
    session: 'Regular session 6',
  },
  {
    presenter: 'Joanna Komorniczak',
    article:
      'Analysis of the Possibility to Employ Relationship Between the Problem Complexity and the Classification Quality as Model Optimization Proxy',
    start: '3:20PM',
    end: '3:40PM',
    session: 'Regular session 5',
  },
  {
    presenter: 'Tobiasz Puślecki',
    article:
      'Hyperparameters Optimization using GridSearchCV Method for TinyML models',
    start: '3:20PM',
    end: '3:40PM',
    session: 'Regular session 6',
  },
  {
    presenter: 'Ryan Caesar Ramos',
    article:
      'Exploring Text-Guided Synthetic Distribution Shifts for Robust Image Classification',
    start: '3:40PM',
    end: '4:00PM',
    session: 'Regular session 6',
  },
]

export function Calendar() {
  return (
    <section
      id="calendar"
      aria-labelledby="calendar-title"
      className="py-20 sm:py-32"
    >
      <Container>
      <div className="mx-auto max-w-2xl lg:mx-0 pb-12">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-5xl"
          >
            Papers
          </h2>

          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Check the timeslots for regular presentations.
          </p>
          <ul>
            
          </ul>
        </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {presentations.map((presentation) => (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">{presentation.presenter}<br/><p className="mt-1 text-xs leading-5 text-gray-500">
                        <time dateTime={presentation.lastSeenDateTime}>
                          {presentation.lastSeen}
                        </time>
                        <time>{presentation.start}</time> - <time>{presentation.end}</time>{' '}
                        CET
                      </p>
                      <p className="text-xs leading-6 text-gray-500">
                    {presentation.session}
                  </p></dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{presentation.article}

              </dd>
            </div>
          ))}
          
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">cores_programme.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">71kb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="cores2023.pdf" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>

        
      </Container>
    </section>
  )
}

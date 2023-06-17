const incentives = [
    {   
        icon: 'fa-sharp fa-light fa-brackets-curly text-xs sm:text-3xl md:text-6xl',
        name: 'Model Application',
        description: 'Classification and interpretation of text, video, voice'
    },
    {
        icon: 'fa-thin fa-chart-scatter text-xs sm:text-3xl md:text-6xl',
        name: 'Statistics',
        description: 'Statistical, soft and structural methods of pattern recognition'
    },
    {
        icon: 'fa-light fa-image text-xs sm:text-3xl md:text-6xl',
        name: 'Image processing',
        description: 'Image processing analysis and interpretation'
    },
    {
        icon: 'fa-light fa-less-than text-xs sm:text-3xl md:text-6xl',
        name: 'Preprocessing',
        description: 'Features extraction and selection'
    },
    {
        icon: 'fa-light fa-computer-classic text-xs sm:text-3xl md:text-6xl',
        name: 'ML',
        description: 'Machine learning'
    },
    {
        icon: 'fa-light fa-timeline-arrow text-xs sm:text-3xl md:text-6xl',
        name: 'Timeseries',
        description: 'Trends and relations recognition and analysis'
    },
    {
        icon: 'fa-light fa-robot-astromech text-xs sm:text-3xl md:text-6xl',
        name: 'Big Data',
        description: 'Data and Web mining'
    },
    {
        icon: 'fa-light fa-books text-xs sm:text-3xl md:text-6xl',
        name: 'Knowledge Representation',
        description: 'Machine-oriented knowledge representation and inference methods'
    },
    {
        icon: 'fa-light fa-headset text-xs sm:text-3xl md:text-6xl',
        name: 'Decision Support',
        description: 'Knowledge-based decision support systems'
    },
    {
        icon: 'fa-light fa-wave-square text-xs sm:text-3xl md:text-6xl',
        name: 'Signal Processing',
        description: 'Advanced signal processing methods'
    },
    {
        icon: 'fa-light fa-microchip text-xs sm:text-3xl md:text-6xl',
        name: 'Hardware',
        description: 'Special hardware architecture'
    }
]
  
  export function Scopes() {
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold tracking-tight text-gray-600">
                  Scope of the joined conferences
                </h2>
                <p className="mt-4 text-gray-500">
                The CORES’23 Conference aims to bring together researches and to provide an international forum for the sharing, exchange, presentation and discussion of original research results in both methodological issues and different application areas of pattern recognition.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                {incentives.map((incentive) => (
                  <div key={incentive.name} className="sm:flex lg:block">
                    <div className="sm:flex-shrink-0 text-red-600">
                        <i class={incentive.icon}></i>
                      {/* <img className="h-16 w-16" src={incentive.imageSrc} alt="" /> */}
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                      <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
  }
  
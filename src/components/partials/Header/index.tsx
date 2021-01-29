import Image from 'next/image'

const Tag = () => (
  <a
    href="#"
    className="inline-flex items-center p-1 pr-2 text-white bg-gray-100 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-red-500 to-red-600 rounded-full">
      #EndRacism
    </span>

    <span className="ml-4 text-sm text-gray-800">
      Change the name. Stop the chop.
    </span>

    {/* Heroicon name: chevron-right */}
    <svg
      className="w-5 h-5 ml-2 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </a>
)

const Background = () => (
  <div className="absolute w-full h-screen min-w-full min-h-screen bg-red-800 -z-10">
    <Image
      layout="fill"
      src="/images/run-it-back.jpg"
      className="top-0 block object-cover w-full h-screen min-w-full min-h-screen opacity-50 filter-blur"
    />
  </div>
)

export const Header = () => (
  <div className="relative lg:overflow-hidden">
    <div className="h-full mx-auto">
      <Background />

      <div className="container relative z-10 pt-12 pb-24 mx-auto lg:grid">
        <div className="flex items-center px-8 mx-auto md:px-4 sm:text-center lg:text-left">
          <div className="py-24">
            <Tag />
            <h1 className="max-w-4xl my-4 text-4xl font-medium text-transparent sm:text-6xl lg:mt-6 xl:text-6xl bg-clip-text bg-gradient-to-r from-red-200 to-gray-100">
              <span className="inline-block mb-8 text-4xl tracking-wider">
                Not In Our Honor Coalition
              </span>
              <span className="block font-extrabold text-transparent bg-white bg-clip-text">
                Change the name of Kansas City's Football Team
              </span>
            </h1>
            <p className="max-w-6xl mt-6 text-base text-gray-100 sm:text-xl lg:text-lg xl:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

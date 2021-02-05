import {FunctionComponent} from 'react'
import Link from 'next/link'
import {External} from '../../svg/External'

const Chevron = () => (
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
)

const Tag = ({name, description}) => (
  <Link href="/take-action">
    <a
      href="#"
      className="inline-flex items-center p-1 pr-2 text-white bg-gray-100 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-red-500 to-red-600 rounded-full">
        {name}
      </span>

      <span className="ml-4 text-sm text-gray-800">{description}</span>

      <Chevron />
    </a>
  </Link>
)

const Background = () => (
  <div className="absolute z-0 w-full h-screen min-w-full min-h-screen bg-gradient-to-b from-red-700 to-red-900">
    <img
      src="/images/run-it-back.jpg"
      width="100vw"
      height="100vh"
      className="top-0 block object-cover w-full h-screen min-w-full min-h-screen opacity-25 filter-blur"
    />
  </div>
)

export const Header: FunctionComponent<{
  lead?: string,
  siteTitle?: string,
  pageTitle?: string,
  hideCtaTag?: boolean,
}> = ({lead, siteTitle, pageTitle, hideCtaTag}) => (
  <div className="relative lg:overflow-hidden">
    <div className="h-full mx-auto">
      <Background />

      <div className="container relative z-0 grid pt-12 pb-24 mx-auto lg:pb-32">
        <div className="flex items-center px-8 mx-auto sm:text-center lg:text-left">
          <div className="pt-0 pb-16 md:pt-24">
            {!hideCtaTag && (
              <div className="hidden md:block">
                <Tag
                  name="#EndRacism"
                  description="Change the name. Stop the chop."
                />
              </div>
            )}

            <h1 className="max-w-6xl my-4 text-4xl font-medium text-transparent sm:text-6xl lg:mt-6 xl:text-6xl bg-clip-text bg-gradient-to-r from-red-200 to-gray-100">
              <span className="inline-flex flex-row mb-4 text-2xl tracking-wider text-white md:text-3xl">
                {siteTitle ?? 'Not In Our Honor Coalition'}
                <a href="https://notinourhonor.com">
                  <External className="mt-1" w={7} h={7} color="text-white" />
                </a>
              </span>

              <span className="block font-extrabold text-transparent bg-white bg-clip-text">
                {pageTitle ?? "Change the name of Kansas City's Football Team"}
              </span>
            </h1>

            <p
              className={`${
                lead ? `inline-block` : `invisible`
              } max-w-6xl mt-6 text-gray-100 sm:text-lg lg:text-md xl:text-lg`}>
              {lead}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

import {External} from '../../svg/External'

export const Attribution = () => (
  <div className="relative bg-gray-900">
    <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        className="object-cover w-full h-full filter-grayscale"
        src="https://notinourhonor.files.wordpress.com/2021/01/2d4b9617-c23f-4516-a615-33418392c3a8.jpeg"
      />
    </div>
    <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <h2 className="text-base font-semibold tracking-wider text-gray-300 uppercase">
          A project of
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Not in our Honor
        </p>
        <p className="mt-3 text-lg text-gray-300">
          EndRacismKC is a project of the Not In Our Honor Coalition, formed in
          2005 by a group of Native American College students at the University
          of Kansas and Haskell Indian Nations University. We advocate against
          the use of Native American imagery in sports.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://notinourhonor.com"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50">
              Visit notinourhonor.com
              <External />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

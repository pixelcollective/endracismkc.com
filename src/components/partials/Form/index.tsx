import Head from 'next/head'

export const Donate = () => (
  <div className="flex items-center col-span-3 lg:col-span-1">
    <div className="w-full p-6 bg-red-600 rounded">
      <div className="font-light text-black">
        <form className="p-0 m-0" acceptCharset="UTF-8">
          <div className="font-light text-black">
            <div className="relative flex mb-0 align-middle">
              <i
                className="absolute block w-6 pl-5 text-2xl not-italic font-bold text-center text-red-500 pointer-events-none"
                style={{
                  boxSizing: 'inherit',
                  transform: 'translate(0px, -50%)',
                  top: '50%',
                  quotes: 'auto',
                }}>
                $
              </i>
              <input
                data-name="donation_amount"
                name="amount"
                defaultValue={35}
                step={1}
                className="w-full h-16 pl-12 pr-24 m-0 text-4xl font-light border-0 rounded-none cursor-text"
                style={{
                  boxSizing: 'inherit',
                  lineHeight: 'normal',
                  outline: 'none',
                  quotes: 'auto',
                }}
              />
              <i
                className="absolute right-0 block w-6 pl-5 pr-24 text-3xl not-italic font-bold text-center text-red-500 pointer-events-none"
                style={{
                  boxSizing: 'inherit',
                  transform: 'translate(0px, -50%)',
                  top: '50%',
                  quotes: 'auto',
                }}>
                USD
              </i>
            </div>
            <input type="hidden" className="m-0 rounded-none cursor-default" />
            <div className="flex flex-row justify-between text-black">
              <button className="h-10 px-4 py-2 mx-0 mt-5 mb-0 overflow-visible text-lg font-normal leading-tight text-center text-white normal-case bg-black bg-no-repeat border-0 rounded-lg cursor-pointer">
                Donate monthly
                <input
                  type="submit"
                  className="hidden m-0 whitespace-pre rounded-none"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

const CTA = () => (
  <div className="flex order-1 h-full col-span-3 lg:order-2 lg:col-span-1">
    <div className="w-full p-6 mb-8 bg-red-600 rounded ">
      <div className="font-light text-black">
        <form className="p-0 m-0" acceptCharset="UTF-8">
          <div className="grid grid-cols-1 gap-6 font-light text-black">
            <div>
              <span className="text-white">Dummy form // WIP</span>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Ben Freshface"
                  aria-describedby="email-description"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white">
                Email
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full pl-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

const Context = () => (
  <div className="order-2 col-span-3 lg:order-1 lg:col-span-2 lg:pr-8">
    <h6 className="mt-0 mb-1 text-lg font-light tracking-tight text-black sm:mb-1 sm:tracking-tight">
      Racist mascots 🤷‍♂️
    </h6>
    <h1 className="mx-0 mt-0 mb-4 text-4xl font-bold text-black">
      No justification. 🙅🏽‍♀️
    </h1>
    <div className="prose prose-lg prose-primary">
      <p className="font-medium leading-2">
        Justifying the maintenance of racist mascots because a very small number
        of Native Americans accept it, when a majority of us vehemently oppose
        them is shocking. A recent study found the more connected the individual
        Native is with their culture (language, traditions, ceremonies), the
        stronger their opposition.
      </p>
      <p>We are demanding:</p>
      <ol>
        <li>
          Cease the use of racialized Native American branding by eliminating
          all imagery of or evocative of Native American culture, traditions,
          and spirituality from their team franchise by changing the name
          including the logo. This includes the use of Native terms, drum,
          arrows, or monikers that assume the presence of Native American
          culture.
        </li>
        <li>
          Apply the NFL’s “zero tolerance” for on-field use of racial and
          homophobic slurs to all races and ethnic groups, especially Native
          Peoples.
        </li>
      </ol>
    </div>
  </div>
)

export const Form = () => (
  <div className="relative z-10 px-8 py-10 mb-0 -mt-40 font-light text-black no-underline">
    <div className="container grid max-w-6xl grid-cols-3 p-8 mx-auto bg-white rounded">
      <Context />
      <CTA />
    </div>
  </div>
)

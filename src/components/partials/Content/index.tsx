export const Content = ({tag, title, lead, children}) => (
  <div className="relative py-16 overflow-hidden bg-white">
    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-lg max-w-prose">
        <h1>
          <span className="block text-base font-semibold tracking-wide text-center text-red-600 uppercase">
            {tag}
          </span>

          <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
            {title}
          </span>
        </h1>

        <p className="mt-8 text-xl font-medium leading-8 text-gray-700">
          {lead}
        </p>
      </div>

      <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-red">
        {children.map((v, k) => v)}
      </div>
    </div>
  </div>
)

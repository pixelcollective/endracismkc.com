import {Reveal} from '@components/Reveal'

export const Quote = () => (
  <div className="pt-16 bg-white lg:py-24">
    <div className="flex flex-col flex-wrap pb-16 bg-gray-900 lg:pb-0 lg:relative">
      <div className="order-2 md:order-1 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 flex flex-col flex-wrap bg-white h-1/2 lg:hidden justify-items-center"
          />
          <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0">
            <div className="flex flex-col flex-wrap overflow-hidden shadow-xl aspect-w-10 aspect-h-10 rounded-xl justify-items-center">
              <Reveal>
                <img
                  src="/images/kansascity-10.jpg"
                  className="w-full h-auto"
                  width="600px"
                  height="600px"
                  alt="List: Things I love about Kansas City: Superbowl champs, world series champs, world's loudest fans, world's best bbq, fountains, tailgating. Slashed out: That racist tomahawk chop. Ending: Love your city enough to change."
                />
              </Reveal>
            </div>
          </div>
        </div>
        <div className="order-1 mt-12 md:order-2 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="max-w-md px-4 pb-20 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <Reveal>
                  <svg
                    className="w-12 h-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </Reveal>
                <Reveal>
                  <p className="mt-6 text-2xl font-medium text-white">
                    The use of American Indian mascots as symbols in schools and
                    university athletic programs is particularly troubling
                    because schools are places of learning. These mascots are
                    teaching stereotypical, misleading and too often, insulting
                    images of American Indians. These negative lessons are not
                    just affecting American Indian students; they are sending
                    the wrong message to all students.
                  </p>
                </Reveal>
              </div>
              <footer className="mt-6">
                <Reveal>
                  <p className="text-base font-medium text-white">
                    Ronald F. Levant, EdD
                  </p>
                </Reveal>
                <Reveal>
                  <p className="text-base font-medium text-red-100">
                    Former American Psychological Association President
                  </p>
                </Reveal>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
)

import Link from 'next/link'

export const Footer = () => (
  <footer
    className="relative bg-primary-default"
    aria-labelledby="footerHeading">
    <h2 id="footerHeading" className="sr-only">
      Footer
    </h2>

    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-8 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex space-x-6 md:order-2">
          <Link href="https://facebook.com/kcindiancenter"><a href="#" className="flex flex-row text-gray-100 transition-all duration-200 hover:text-gray-300 hover:scale-125">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="pl-1 tracking-wider">KCINDIANCENTER</span>
          </a>
          </Link>
        </div>
        <p className="mt-8 text-base text-white md:mt-0 md:order-1">
          © {new Date().getFullYear()} Not in our Honor. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

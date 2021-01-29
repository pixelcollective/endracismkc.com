import {useState, useEffect} from 'react'
import classnames from 'classnames'
import Link from 'next/link'

const transitionClasses = `transition duration-200 transition-all`

/**
 * Menu toggle
 */
const Hamburger = ({toggle, visible}) => (
  <div
    className={`${transitionClasses} -mr-2 flex items-center md:hidden cursor-pointer ${
      visible ? `opacity-0` : `opacity-100`
    } relative`}>
    <button
      type="button"
      onClick={toggle}
      className={`bg-red-200 text-red-700 rounded-md p-2 inline-flex items-center justify-center  hover:bg-red-300 hover:text-white focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white cursor-pointer transition transition-all duration-200`}
      aria-haspopup="true">
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-6 h-6 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
)

/**
 * Nav
 */
export const Nav = () => {
  const [visible, setVisible] = useState(false)

  const toggle = () => setVisible(!visible)

  return (
    <div className="relative z-20">
      <div className="relative">
        <div className="py-4 bg-red-500">
          <nav
            className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
            aria-label="Global">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <span className="font-medium text-white cursor-pointer">
                    EndRacismKC
                  </span>
                </Link>
                {/* <Hamburger toggle={toggle} visible={visible} /> */}
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                <Link href="/about">
                  <a
                    href="#"
                    className="text-base font-medium text-white hover:text-gray-300">
                    The letter
                  </a>
                </Link>
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-300">
                  Take Action
                </a>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="/take-action">
                <div className="inline-flex items-center px-4 py-2 text-base font-medium text-red-600 transition duration-200 bg-white border border-transparent rounded-md cursor-pointer hover:shadow hover:bg-gray-100">
                  Take Action
                </div>
              </Link>
            </div>
          </nav>
        </div>

        {/* <Mobile visible={visible} toggle={toggle} /> */}
      </div>
    </div>
  )
}

/**
 * Mobile nav
 */
export const Mobile = ({visible, toggle}) => {
  const visibility = visible
    ? `opacity-100 scale-100 duration-150 ease-out`
    : `opacity-0 duration-150 ease-in`

  return (
    <div
      className={classnames(
        transitionClasses,
        'absolute inset-x-0 top-0 p-1 transform origin-top md:hidden',
      )}>
      <div
        className={classnames(
          visibility,
          transitionClasses,
          `rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden`,
        )}>
        <div className="flex items-center justify-between px-5 pt-3">
          <div className="font-medium tracking-wider text-gray-800">
            <Link href="/">EndRacismKC</Link>
          </div>
          <div className="-mr-2">
            <button
              type="button"
              onClick={toggle}
              className="relative z-30 inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
              <span className="sr-only">Close menu</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="pt-5 pb-6"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu">
          <div className="px-2 space-y-1" role="none">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
              role="menuitem">
              Product
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
              role="menuitem">
              Features
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
              role="menuitem">
              Marketplace
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
              role="menuitem">
              Company
            </a>
          </div>
          <div role="none" className="px-5 mt-6">
            <a
              href="#"
              className={classnames(
                transitionClasses,
                `block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700`,
              )}>
              Start free trial
            </a>
          </div>
          <div role="none" className="px-5 mt-6">
            <p className="text-base font-medium text-center text-gray-500">
              Existing customer?{' '}
              <a href="#" className="text-gray-900 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

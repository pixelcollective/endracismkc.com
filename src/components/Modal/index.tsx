import React, {
  FunctionComponent,
  MouseEventHandler,
  MouseEvent,
} from 'react'

const Share: FunctionComponent = () => (
  <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
    <span className="inline-flex justify-center mx-auto mt-2">
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https://endracismkc.org"
        className="p-3 text-gray-500 duration-150 rounded-full transition-color hover:bg-blue hover:text-red-600">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>

      <a
        href="https://twitter.com/home?status=https://endracismkc.org"
        className="p-3 text-gray-500 duration-150 rounded-full transition-color hover:bg-blue hover:text-red-600">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
    </span>
  </div>
)

interface IReturnButton {
  onClose: MouseEventHandler
}

const ReturnButton: FunctionComponent<IReturnButton> = ({
  onClose,
}) => (
  <div className="mt-5 sm:mt-6">
    <span className="flex w-full rounded-md shadow-sm">
      <button
        onClick={onClose}
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadown-sm hover:shadow-xl hover:bg-blue-darker hover:bg-red-600 hover:text-white focus:outline-none focus:border-red focus:shadow-outline sm:text-sm sm:leading-5">
        Back to site
      </button>
    </span>
  </div>
)

interface IModal {
  closeHandler: MouseEventHandler
  className: string
}

const Modal: FunctionComponent<IModal> = ({
  closeHandler,
  className,
}) => (
  <div
    className={`fixed top-0 bottom-0 left-0 right-0 z-50 ${className}`}>
    <div className="flex items-center justify-center w-full h-full">
      <div className="absolute w-full h-screen transition-all duration-200 bg-gray-800 opacity-75"></div>

      <div className="z-30 px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl pointer-events-auto sm:max-w-sm sm:w-full sm:p-6">
        <div>
          <div className="text-center">
            <h3 className="block pt-0 mt-4 font-sans text-xl font-medium text-gray-800">
              Signature added.
            </h3>

            <div className="mt-2">
              <p className="text-sm leading-5 text-gray-700">
                Thank you for joining our fight.
              </p>
            </div>
          </div>
        </div>

        <Share />

        <ReturnButton onClose={closeHandler} />
      </div>
    </div>
  </div>
)

export {Modal}
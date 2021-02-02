export const Submit = ({children, ...props}) => (
  <button type="submit" {...props} className="relative justify-center block px-3 py-2 mt-4 text-lg font-bold tracking-wider text-center text-white transition-all duration-200 scale-100 bg-red-600 border rounded shadow-primary hover:transition-all transition-ease-in transition-ease-in-out focus:outline-none hover:bg-red-500">
    {children}
  </button>
)

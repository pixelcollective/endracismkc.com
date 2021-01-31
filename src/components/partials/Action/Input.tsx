export const Input = ({name, placeholder, register, type}) => (
  <input
    name={name}
    className="w-full max-w-full px-2 text-gray-900 placeholder-gray-300 bg-transparent border border-gray-300 rounded-sm focus:outline-none focus:border-red"
    placeholder={placeholder}
    type={type ?? 'text'}
    ref={register}
  />
)

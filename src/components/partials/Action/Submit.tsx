import {motion} from 'framer-motion'

export const Submit = ({children, ...props}) => (
  <motion.button
    type="submit"
    whileHover={{
      scale: 1.02,
    }}
    transition={{
      stiffness: 90,
      damping: 8,
      mass: 0.6,
      type: 'spring',
    }}
    {...props}>
    {children}
  </motion.button>
)

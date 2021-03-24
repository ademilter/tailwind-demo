import cn from 'classnames'
import styles from './index.module.css'

export default function Button({ appearance, children, ...props }) {
  return (
    <button
      className={cn(
        styles.base,
        appearance === 'default' ? styles.default : undefined,
        appearance === 'link' ? styles.link : undefined
      )}
      {...props}
    >
      {children}
    </button>
  )
}

import cn from 'classnames'
import styles from './index.module.css'

export default function Button({ appearance, children, ...props }) {
  return (
    <button className={cn(styles.base, styles?.[appearance])} {...props}>
      {children}
    </button>
  )
}

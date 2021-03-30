import styles from './index.module.css'

export default function MyButton({ appearance = 'base', children, ...props }) {
  return (
    <button className={[styles.base, styles?.[appearance]].join(' ')} {...props}>
      {children}
    </button>
  )
}

import React from 'react'
import styles from './index.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
      <h1>Katakuri Tech Log</h1>
    </header>
  )
}

export default Header

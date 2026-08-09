import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

type SocialProps = {
  className?: string
  isFooterSocial: boolean
}

const Social: React.FC<SocialProps> = ({ className, isFooterSocial }) => {
  const containerClass = isFooterSocial
    ? styles['socialListFooter']
    : styles['socialList']

  return (
    <div className={`${containerClass} ${className}`} data-testid="social">
      <Link
        className={styles['link']}
        href="https://x.com/katakuri_5963"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/x.png"
          alt="X"
          className={styles['icon']}
          width={30}
          height={30}
        />
      </Link>
      <Link
        className={styles['link']}
        href="https://github.com/katakuri-5963"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/github.png"
          alt="GitHub"
          className={styles['icon']}
          width={30}
          height={30}
        />
      </Link>
      <Link
        className={styles['link']}
        href="https://qiita.com/katakuri_5963"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/qiita.png"
          alt="Qiita"
          className={styles['icon']}
          width={30}
          height={30}
        />
      </Link>
      <Link
        className={styles['link']}
        href="https://zenn.dev/katakuri_5963"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/zenn.png"
          alt="Zenn"
          className={styles['icon']}
          width={30}
          height={30}
        />
      </Link>
    </div>
  )
}

export default Social

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EventX: Cryptocurrency demo</title>
        <meta name="description" content="EventX demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      EventX
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

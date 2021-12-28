import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from './main'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EventX: Cryptocurrency demo</title>
        <meta name="description" content="EventX demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <footer className={styles.footer}>
        Made by Olivier Mercher
      </footer>
    </div>
  )
}

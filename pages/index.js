import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from './main'
import { Provider } from 'react-redux';
import store from '../redux/store'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EventX: Cryptocurrency demo</title>
        <meta name="description" content="EventX demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
      <Main />
      </Provider>
      <footer className={styles.footer}>
        Made by Olivier Mercher
      </footer>
    </div>
  )
}

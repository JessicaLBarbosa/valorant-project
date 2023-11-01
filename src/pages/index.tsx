import { Header } from 'components/Header'
import { Main } from 'components/Main'
import styles from 'styles/home.module.scss'

export const HomePage = () => (
  <div className={styles.container}>
    <Header />
    <Main />
  </div>
)

export default HomePage

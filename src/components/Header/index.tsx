import { Triangle } from '@phosphor-icons/react'
import Image from 'next/image'
import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.header__content}>
      <Image
        src="/riot-games.svg"
        width={52}
        height={26}
        alt="Logo da Riot Games"
      />

      <span className={styles.divider} />

      <Image
        src="/valorant.svg"
        width={32}
        height={26}
        alt="Logo do Valorant"
      />

      <nav className={styles.nav}>
        <a href="#">GAME</a>
        <a href="#">CHAMPIONS</a>
        <a href="#">NEWS</a>
        <a href="#">PATCH NOTES</a>
        <a href="#">SHOP</a>
        <a href="#">SUPPORT</a>
      </nav>

      <div className={styles.user}>
        <picture>
          <Image
            src="/avatar.jpg"
            alt="Imagem do avatar do usuário"
            layout="fill"
          />
        </picture>

        <strong>Sh4d0w</strong>
        <Triangle size={8} weight="fill" />
      </div>
    </div>
  </header>
)

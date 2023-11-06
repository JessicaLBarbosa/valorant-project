import Image from 'next/image'
import styles from './styles.module.scss'

interface AgentPros {
  agent: {
    role: {
      displayName: string
    }
    displayName: string
    abilities: {
      displayName: string
      displayIcon: string
    }[]
  }
}

export const Agent = ({ agent }: AgentPros) => (
  <a href="#" className={styles.agent}>
    <div>
      <p>{agent.role.displayName}</p>
      <strong>{agent.displayName}</strong>
    </div>

    <ul>
      {agent.abilities.map(ability => (
        <li key={ability.displayName}>
          <Image
            src={ability.displayIcon}
            width={36}
            height={36}
            alt={ability.displayName}
          />
        </li>
      ))}
    </ul>
  </a>
)

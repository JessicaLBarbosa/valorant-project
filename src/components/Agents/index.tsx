import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { CardAgent } from 'components/CardAgent'
import { IAgent } from 'types/agent'

import styles from './styles.module.scss'

export const Agents = () => {
  const [agents, setAgents] = useState<IAgent[]>([])

  const loadAgents = async () => {
    const route = 'https://valorant-api.com/v1/agents?language=pt-BR'
    const response = await fetch(route).then(data => data.json())

    const data = response.data as IAgent[]
    setAgents(data.filter(agent => agent.fullPortrait))
  }

  useEffect(() => {
    loadAgents()
  }, [])

  return (
    <Swiper className={styles.agents} spaceBetween={16} slidesPerView={4}>
      {agents.map(agent => (
        <SwiperSlide key={agent.id}>
          <CardAgent {...agent} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

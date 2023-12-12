import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { CardAgent } from 'components/CardAgent'
import { loadAgents } from 'utils/loadAgents'
import { IAgent } from 'types/agent'

import styles from './styles.module.scss'

export const Agents = () => {
  const [agents, setAgents] = useState<IAgent[]>([])

  const loadData = async () => {
    const data = await loadAgents()
    setAgents(data)
  }

  useEffect(() => {
    loadData()
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

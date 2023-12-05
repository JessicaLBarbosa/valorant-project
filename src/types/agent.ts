export interface IAgent {
  id: string
  role: {
    displayName: string
  }
  displayName: string
  abilities: {
    displayName: string
    displayIcon: string
  }[]
  fullPortrait: string
}

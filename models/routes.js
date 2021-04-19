import { action } from 'easy-peasy'

const routeModel =  {
    stages: false,
    setStages: action((state, payload) => {
        state.stages = payload.stages
    })
}

export default routeModel
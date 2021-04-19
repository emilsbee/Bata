import { lineUp } from '../../assets/static_data'

export const getDeviceRotation = (Dimensions, setDeviceRotation) => {
    const currentHeight = Dimensions.get('window').height
    const currentWidth = Dimensions.get('window').width

    if (currentHeight > currentWidth) {
      setDeviceRotation('vertical')
    } else if (currentHeight < currentWidth) {
      setDeviceRotation('horizontal')
    }
}

// Since marker is clicked to bring up stage details button,
// the only coordinates are marker's. Hence, the actual route
// coordinates are found by using the marker's stage number.
export const findStageRoute = (route, stages, setCurrentRoute) => {
  const stageNr = route.params.details.description.stage
  stages.forEach(stage => {
    if (stage.description.stage === stageNr) {
      setCurrentRoute(stage.coordinates)
    }
  })
}


// Animates to a marker given coordinates and mapView reference.
// The coordinate is passed from the main map view.
export const animateToMarker = (mapViewRef, route) => {
  mapViewRef.animateCamera({
    center: {
      latitude: route.params.coordinate.latitude,
      longitude: route.params.coordinate.longitude,
    }, 
    zoom: 12
  })
}

export const findStageRunnerName = (stage, setRunner) => {
  lineUp.forEach(runner => {
    if (runner.stage === stage) {
      const str = `${runner.firstName} ${runner.lastName}`
      setRunner(str)
    }
  })
}
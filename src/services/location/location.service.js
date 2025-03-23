import camelize from 'camelize'
import { locations } from './location.mock'

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm]
    if (!locationMock) {
      reject('Location not found')
    } else {
      resolve(locationMock)
    }
  })
}

export const locationTransform = (result) => {
  const formattedResponse = camelize(result)
  const { geometry = {} } = formattedResponse.results[0]

  if (!geometry.location) {
    throw new Error('Missing geometry location data')
  }

  return { lat, lng }
}

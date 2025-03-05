import { mockImages, mocks } from './mock'
import camelize from 'camelize'
export const restaurantsRequest = (location = '41.878113,-87.629799') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]
    if (!mock) {
      reject('No location found')
    }
    resolve(mock)
  })
}
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.floor(Math.random() * mockImages.length)]
    })
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    }
  })
  return camelize(mappedResults)
}

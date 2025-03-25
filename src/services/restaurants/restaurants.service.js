import { mockImages, mocks } from './mock'
import camelize from 'camelize'
export const restaurantsRequest = (location) => {
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
    return {
      ...restaurant,
      photos: restaurant.photos?.length
        ? restaurant.photos.map(
            () => mockImages[Math.floor(Math.random() * mockImages.length)],
          )
        : [mockImages[Math.floor(Math.random() * mockImages.length)]], // Assign at least one image if none exist
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours?.open_now || false,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    }
  })
  console.log('Transformed Restaurants:', mappedResults)
  return camelize(mappedResults)
}

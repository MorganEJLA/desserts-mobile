import React from 'react'
import styled from 'styled-components/native'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

const RestaurantCard = styled(Card)`
  background-color: ivory;
`

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ivory;
`
const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Bakery',
    icon,
    photos = [
      'https://images.unsplash.com/photo-1593629718854-b425e5f1577c?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  )
}

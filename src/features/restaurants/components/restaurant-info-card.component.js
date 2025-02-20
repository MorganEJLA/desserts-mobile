import React from 'react'
import styled from 'styled-components/native'
import { Text, Image, View } from 'react-native'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'

import star from '../../../../assets/star'
import open from '../../../../assets/open'
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.primary};

  overflow: hidden;
`

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  border-radius: 0px;
`

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text.inverse};
`
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.sizes[2]};

  color: ${(props) => props.theme.colors.text.inverse};
`
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`
const RatingContainer = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Bakery',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    rating = 4,
    photos = [
      'https://images.unsplash.com/photo-1593629718854-b425e5f1577c?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    address = '100 some random street',
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant
  const ratingArray = Array.from({ length: rating })

  return (
    <RestaurantCard elevation={5}>
      ?
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <RatingContainer>
            {' '}
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </RatingContainer>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: 'red' }}>
                ClOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  )
}

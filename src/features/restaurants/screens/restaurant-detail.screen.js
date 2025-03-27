import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'

import { RestaurantInfoCard } from '../components/restaurant-info-card.component'

import { SafeArea } from '../../../components/utility/safe-area.component'

export const RestaurantDetailScreen = ({ route }) => {
  const [pastriesExpanded, setPastriesExpanded] = useState(false)
  const [cookiesExpanded, setCookiesExpanded] = useState(false)
  const [frozenExpanded, setFrozenExpanded] = useState(false)
  const [confectionsExpanded, setConfectionsExpanded] = useState(false)
  const [puddingsExpanded, setPuddingsExpanded] = useState(false)

  const [fruitBasedExpanded, setFruitBasedExpanded] = useState(false)
  const [beveragesExpanded, setBeveragesExpanded] = useState(false)

  const { restaurant } = route.params
  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        <List.Accordion
          title="Cakes & Pastries"
          left={(props) => <List.Icon {...props} icon="cupcake" />}
          expanded={pastriesExpanded}
          onPress={() => setPastriesExpanded(!pastriesExpanded)}
        >
          <List.Item title="Malasadas" />
          <List.Item title="Toucinho Do Ceu" />
        </List.Accordion>
        <List.Accordion
          title="Cookies"
          left={(props) => <List.Icon {...props} icon="cookie" />}
          expanded={cookiesExpanded}
          onPress={() => setCookiesExpanded(!cookiesExpanded)}
        >
          <List.Item title="Baci di Dama" />
          <List.Item title="Pfeffernüsse" />
        </List.Accordion>
        <List.Accordion
          title="Frozen Treats"
          left={(props) => <List.Icon {...props} icon="ice-cream" />}
          expanded={frozenExpanded}
          onPress={() => setFrozenExpanded(!frozenExpanded)}
        >
          <List.Item title="Dondurmas" />
          <List.Item title="Queso Helado" />
        </List.Accordion>
        <List.Accordion
          title="Confections"
          left={(props) => <List.Icon {...props} icon="candy" />}
          expanded={confectionsExpanded}
          onPress={() => setConfectionsExpanded(!confectionsExpanded)}
        >
          <List.Item title="Brigadeiro" />
          <List.Item title="Torrone" />
        </List.Accordion>
        <List.Accordion
          title="Custards & Puddings"
          left={(props) => <List.Icon {...props} icon="spoon-sugar" />}
          expanded={puddingsExpanded}
          onPress={() => setPuddingsExpanded(!puddingsExpanded)}
        >
          <List.Item title="Tembleque" />
          <List.Item title="Quindim" />
        </List.Accordion>
        <List.Accordion
          title="Fruit Based Desserts"
          left={(props) => <List.Icon {...props} icon="food-apple" />}
          expanded={fruitBasedExpanded}
          onPress={() => setFruitBasedExpanded(!fruitBasedExpanded)}
        >
          <List.Item title="Apple Pie" />
          <List.Item title="Sharlotka" />
        </List.Accordion>
        <List.Accordion
          title="Dessert Beverages"
          left={(props) => <List.Icon {...props} icon="glass-mug-variant" />}
          expanded={beveragesExpanded}
          onPress={() => setBeveragesExpanded(!beveragesExpanded)}
        >
          <List.Item title="Affogato" />
          <List.Item title="Chicha Morada" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { gray } from '../utils/colors'
import { MaterialIcons  } from '@expo/vector-icons'

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  metric: {
    flexDirection: 'row',
    marginTop: 12
  },
})

/*
            <View style={[styles.iconContainer, {backgroundColor: red}]}>
              <MaterialIcons
                name='directions-run' //card-travel
                color={white}
                size={35}
              />
            </View>*/

export default function Deck (deck) {
  return (
    <View key={deck.title}>
      <Text>{deck.title }</Text>
    </View>
  )
}


/*
        <View style={styles.metric} key={deck.title}>
          <View>
            <Text style={{fontSize: 20}}>
              {deck.title}
            </Text>
            <Text style={{fontSize: 16, color: gray}}>
              {deck.questions.length()} {cards}
            </Text>
          </View>
        </View>

*/
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { gray, white, red  } from '../utils/colors'
import { MaterialCommunityIcons  } from '@expo/vector-icons'

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
    row: {
    flexDirection: 'row',
    marginTop: 5
  },
  })


export default function Deck (deckObject) {
  const { deck } = deckObject;
  return (
    <View style={styles.row} key={deck.title}>
        <View style={[styles.iconContainer, {backgroundColor: red}]}>
          <MaterialCommunityIcons name='cards-outline' 
            color={white}
            size={35}
          />
        </View>
        <View key={deck.title}>
          <View>
            <Text style={{fontSize: 20}}>
              {deck.title}
            </Text>
            <Text style={{fontSize: 16, color: gray}}>
              {deck.questions.length + " card" +  (deck.questions.length != 1 ? "s" : "")}
            </Text>
          </View>
        </View>
      </View>
  )
}

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

I have been unable to get a Permission alert to display on the Genymotion sumulator. It always returns true. The notification does however appear as expected.

I've left a "Reset" button on the main screen to make testing easier. It will clear all decks from storage WITHOUT CONFIRMATION.

There is no validation on Deck name, so "creating" an existing one will remove its cards.

Tested on Google Nexus 5X - 7.1.0 - API 25 on Genymotion

To install:

	git clone https://github.com/BobbyF1/mobile-flashcards.git

	npm install
	npm run android


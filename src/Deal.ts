import Card from './Card';
import CardDeck from './CardDeck';

export default class Deal {
    private cardDeck: CardDeck;

    public constructor(cardDeck?: CardDeck) {
        this.cardDeck = cardDeck || CardDeck.createStandard52CardDeck();
        this.cardDeck.shuffle();
    }

    public pullCard(): Card {
        try {
            return this.cardDeck.popCard();
        } catch (doNothingOnEmptyDeck) {
            throw Error('No cards');
        }
    }
}
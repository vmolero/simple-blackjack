import CardDeck from '../CardDeck';
import Suit from '../Suit';
import Card from '../Card';

test('A new deck is filled with Cards', () => {
    let deck: CardDeck = CardDeck.createStandard52CardDeck();
    return expect(deck.getLength()).toBe(13 * 4);
});

test('A shuffled deck has no ordered cards', () => {
    let deck: CardDeck = CardDeck.createStandard52CardDeck();
    
    return expect(areCardsInOrder(deck)).toBeFalsy();
});

function areCardsInOrder(deck: CardDeck): boolean {
    let inOrder: boolean = true;
    for (let suit: Suit = Suit.Diamonds; suit >= Suit.Clubs && inOrder; suit--) {
        for (let rank: number = deck.RANKS; rank >= 1 && inOrder; rank--) {
            let card: Card | undefined = deck.popCard();
            inOrder = (card instanceof Card && card.getRank() === rank && card.getSuit() === suit);
        }
    }

    return inOrder;
}
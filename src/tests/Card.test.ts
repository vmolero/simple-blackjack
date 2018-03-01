import Card from './../Card';
import Suit from './../Suit';

test('can create a card', () => {
    let card: Card = new Card(1, Suit.Hearts);
    return expect(card instanceof Card).toBeTruthy();
});

test('name is correct for Ace of Hearts', () => {
    let card: Card = new Card(1, Suit.Hearts);
    return expect(card.getFullName()).toBe('AceHearts');
});

test('name is correct for Jack of Spades', () => {
    let card: Card = new Card(11, Suit.Spades);
    return expect(card.getFullName()).toBe('JackSpades');
});

test('Suit is not valid', () => {
    return expect(() => {
        return new Card(11, 5);
    }).toThrow('Invalid Suit');
});
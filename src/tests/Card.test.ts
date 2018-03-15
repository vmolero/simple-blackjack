import Suit from './../Suit';
import Card from './../Card';

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

test('Valid rank lt 10', () => {
    let card: Card = new Card(4, Suit.Spades);
    return expect(card.getScore()).toEqual([4]);
});

test('Valid rank eq 10', () => {
    let card: Card = new Card(10, Suit.Spades);
    return expect(card.getScore()).toEqual([10]);
});

test('Valid rank gt 10', () => {
    let card: Card = new Card(13, Suit.Spades);
    return expect(card.getScore()).toEqual([10]);
});

test('Value of the Ace', () => {
    let card: Card = new Card(1, Suit.Spades);
    return expect(card.getScore()).toEqual([1, 11]);
});

test('Rank is not valid gt MAX', () => {
    return expect(() => {
        return new Card(14, Suit.Hearts);
    }).toThrow('Invalid Rank');
});

test('Rank is not valid lt MIN', () => {
    return expect(() => {
        return new Card(0, Suit.Hearts);
    }).toThrow('Invalid Rank');
});

test('Serialize Card', () => {
    let card: Card = new Card(1, Suit.Spades);
    // card.toJSON();
    return expect(JSON.stringify(card)).toEqual(
        JSON.stringify({
            rank: 1,
            suit: 2
        })
    );
});

test('Deserialize Card', () => {
    let card: string = JSON.stringify({
        rank: 1,
        suit: 2
    });
    // card.toJSON();
    return expect(JSON.parse(card, Card.reviver)).toEqual(
        new Card(1, Suit.Spades)
    );
});
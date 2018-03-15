import Hand from './../Hand';
import Card from './../Card';
import Suit from './../Suit';

test('hand value lt 21', () => {
    let card1: Card = new Card(1, Suit.Hearts);
    let card2: Card = new Card(5, Suit.Hearts);
    let hand: Hand = new Hand();
    hand.add(card1);
    hand.add(card2);
    return expect(hand.getScore()).toBe(16);
});

test('hand value any score', () => {
    let card1: Card = new Card(4, Suit.Hearts);
    let card2: Card = new Card(13, Suit.Hearts);
    let hand: Hand = new Hand();
    hand.add(card1);
    hand.add(card2);
    return expect(hand.getScore()).toBe(14);
});

test('hand score with 2 Aces scoring 11 and 1', () => {
    let card1: Card = new Card(1, Suit.Hearts);
    let card2: Card = new Card(1, Suit.Hearts);
    let hand: Hand = new Hand();
    hand.add(card1);
    hand.add(card2);
    return expect(hand.getScore()).toBe(12);
});

test('hand score with both Aces scoring 1 due to 3rd card', () => {
    let card1: Card = new Card(1, Suit.Hearts);
    let card2: Card = new Card(1, Suit.Hearts);
    let card3: Card = new Card(10, Suit.Hearts);
    let hand: Hand = new Hand();
    hand.add(card1);
    hand.add(card2);
    hand.add(card3);
    return expect(hand.getScore()).toBe(12);
});

test('black jack with 1 Aces and a figure of 10 points', () => {
    let card1: Card = new Card(1, Suit.Hearts);
    let card2: Card = new Card(12, Suit.Hearts);
    let hand: Hand = new Hand();
    hand.add(card1);
    hand.add(card2);
    return expect(hand.getScore()).toBe(21);
});

test('A hand is serialized', () => {
    let card1: Card = new Card(1, Suit.Hearts);
    let card2: Card = new Card(12, Suit.Hearts);
    
    let hand: Hand = new Hand();
    hand.add(card1);
    hand.add(card2);
    const jsonHand: string = JSON.stringify(hand);

    return expect(JSON.parse(jsonHand, Hand.reviver)).toEqual(hand);
});
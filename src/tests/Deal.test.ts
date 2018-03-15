import Deal from './../Deal';
import CardDeck from './../CardDeck';

test('A deal is serialized', () => {
    const deal: Deal = new Deal(CardDeck.createStandard52CardDeck());
    const jsonDeal: string = JSON.stringify(deal);
    return expect(JSON.parse(jsonDeal, Deal.reviver)).toEqual(deal);
});
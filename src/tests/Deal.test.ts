import Deal from './../Deal';
import Hand from './../Hand';

test('A new deal has an empty player hand', () => {
    let deal: Deal = new Deal();
    let emptyHand: Hand = new Hand();
    return expect(deal.getPlayerHand()).toEqual(emptyHand);
});

test('A new deal has an empty house hand', () => {
    let deal: Deal = new Deal();
    let emptyHand: Hand = new Hand();
    return expect(deal.getHouseHand()).toEqual(emptyHand);
});
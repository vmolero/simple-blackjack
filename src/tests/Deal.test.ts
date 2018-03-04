import Card from './../Card';
import Deal from './../Deal';
import House from './../House';
import Player from './../Player';
import Suit from './../Suit';

test('Deal has House player', () => {
    let deal: Deal = new Deal();

    const house: House = new House();
    return expect(deal.getHouse()).toEqual(house);
});

test('Deal add Player', () => {
    let deal: Deal = new Deal();

    const player: Player = new Player();
    deal.addPlayer(player);
    return expect(deal.getPlayer(1)).toEqual(player);
});

test('Deal add Player', () => {
    let deal: Deal = new Deal();
    const player: Player = new Player();
    deal.addPlayer(player);

    return expect(deal.getPlayer(1)).toEqual(player);
});

test('deal over if hand score > 21', () => {
    let deal: Deal = new Deal();
    const player: Player = new Player();
    deal.pullPlayerCard();
    player.pullCard(new Card(1, Suit.Clubs));
    player.pullCard(new Card(11, Suit.Clubs));
    deal.pullHouseCard();
    deal.addPlayer(player);
});
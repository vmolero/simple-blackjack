import CardDeck from './CardDeck';
import Deal from './Deal';

export default class Board {
    private deal: Deal;
    private cardDeck: CardDeck;
    private dealCount: number = 0;
    private playerWins: number = 0;
    private houseWins: number = 0;

    public constructor() {
        this.newDeal();
    }

    public newDeal() {
        this.deal = new Deal();
        this.cardDeck = new CardDeck();
        this.cardDeck.shuffle();
        this.deal.pullPlayerCard(this.cardDeck.popCard());
        this.deal.pullHouseCard(this.cardDeck.popCard());
    }

    public getDeal(): Deal {
        return this.deal;
    }

    public getDealCount(): number {
        return this.dealCount;
    }

    public getPlayerWins(): number {
        return this.playerWins;
    }

    public getHouseWins(): number {
        return this.houseWins;
    }
}
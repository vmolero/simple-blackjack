import Player from './Player';
import CardDeck from './CardDeck';
import Deal from './Deal';

export default class Board {
    private deal: Deal;
    private playerWins: number = 0;
    private houseWins: number = 0;

    public constructor();
    public constructor(deal?: Deal) {
        this.deal = deal || new Deal(CardDeck.createStandard52CardDeck());
    }

    public firstDeal() {
        this.deal.start();
    }

    public addPlayer(player: Player) {
        this.deal.addPlayer(player);
    }

    public giveCardToPlayer() {
        this.deal.dealPlayer();
    }

    public giveCardToHouse() {
        this.deal.dealHouse();
    }

    public isHouseWinning() {
        return (this.deal.getHouseScore() >= this.deal.getPlayerScore() ||
                this.deal.getPlayerScore() > 21) && this.deal.getHouseScore() <= 21;
    }

    public getDeal(): Deal {
        return this.deal;
    }

    public getPlayerWins(): number {
        return this.playerWins;
    }

    public getHouseWins(): number {
        return this.houseWins;
    }
}
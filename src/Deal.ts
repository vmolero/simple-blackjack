import Hand from './Hand';
import Card from 'Card';

export default class Deal {
    private readonly PLAYER: number = 1;
    private readonly HOUSE: number = 0;

    // private cardCount: number = 0;
    private dealOver: boolean = false;
    private hands: Array<Hand>;

    public constructor() {
        this.hands = new Array<Hand>();
        this.hands[this.PLAYER] = new Hand();
        this.hands[this.HOUSE] = new Hand();
    }

    public getPlayerHand(): Hand {
        return this.hands[this.PLAYER];
    }

    public getHouseHand(): Hand {
        return this.hands[this.HOUSE];
    }

    public getPlayerScore(): number {
        return this.getPlayerHand().getScore();
    }

    public getHouseScore(): number {
        return this.getHouseHand().getScore();
    }

    public pullPlayerCard(card: Card) {
        this.getPlayerHand().add(card);
    }

    public pullHouseCard(card: Card) {
        this.getHouseHand().add(card);
    }

    public setDealOver() {
        this.dealOver = true;
    }

    public isDealOver(): boolean {
        return this.dealOver;
    }
}
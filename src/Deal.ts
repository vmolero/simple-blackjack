import Hand from './Hand';
import Card from './Card';
import CardDeck from './CardDeck';
import House from './House';
import Player from './Player';

export default class Deal {
    public readonly SCORE_THRESHOLD: number = 21;

    // private cardCount: number = 0;
    private dealOver: boolean = false;
    private house: House;
    private players: Array<Player>;
    private cardDeck: CardDeck;

    public constructor(cardDeck?: CardDeck) {
        this.cardDeck = cardDeck || CardDeck.createStandard52CardDeck();
        this.house = new House();
        this.players = new Array<Player>();
        this.cardDeck.shuffle();
        this.dealOver = false;
    }

    public start() {
        this.setDealOn();
        this.pullPlayerCard();
        this.pullHouseCard();
    }

    public setHouse(house: House): Deal {
        this.house = house;

        return this;
    }

    public getHouse(): House {
        return this.house;
    }

    public addPlayer(player: Player) {
        this.players.push(player);
    }

    public getPlayer(order: number): Player {
        if (this.players[order - 1] !== undefined) {
            return this.players[order - 1];
        }
        throw new Error('Player not found');
    }

    public getPlayerHand(): Hand {
        return this.getPlayer(1).getHand();
    }

    public getHouseHand(): Hand {
        return this.house.getHand();
    }

    public getPlayerScore(): number {
        return this.getPlayerHand().getScore();
    }

    public getHouseScore(): number {
        return this.house.getScore();
    }

    public pullPlayerCard() {
        try {
            let card: Card = this.cardDeck.popCard();
            this.getPlayer(1).pullCard(card);
        } catch (doNothingOnEmptyDeck) {
            this.dealOver = true;
        }
    }

    public pullHouseCard() {
        try {
            let card: Card = this.cardDeck.popCard();
            this.getHouseHand().add(card);
            
        } catch (doNothingOnEmptyDeck) {
            this.dealOver = true;
        }
    }

    public setDealOver() {
        this.dealOver = true;
    }

    public setDealOn() {
        this.dealOver = false;
    }

    public isDealOver(): boolean {
        return this.dealOver;
    }

    public dealHouse() {
        if (this.getHouseScore() >= this.getPlayerScore()) {
            this.setDealOver();
        }
        if (!this.isDealOver()) {
            this.pullHouseCard();
            if (this.getHouseScore() >= this.SCORE_THRESHOLD ||
                (this.getHouseScore() >= this.getPlayerScore())) {
                this.setDealOver();
            }
        }
    }

    public dealPlayer() {
        if (!this.isDealOver()) {
            this.pullPlayerCard();
            if (this.getPlayerScore() > this.SCORE_THRESHOLD) {
                this.setDealOver();
            }
        }
    }
}
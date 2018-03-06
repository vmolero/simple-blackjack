import Player from './Player';
import Deal from './Deal';
import House from './House';
import Hand from './Hand';
import Card from './Card';
import CardDeck from './CardDeck';

export default class Board {
    private readonly SCORE_THRESHOLD: number = 21;
    
    private deal: Deal;
    private playerWins: number = 0;
    private houseWins: number = 0;
    private house: House;
    private player1: Player;
    
    public static newGame(): Board {
        let deal: Deal = new Deal(CardDeck.createStandard52CardDeck());
        let playerHand: Hand = new Hand([]);
        let player1: Player = new Player(playerHand);
        let houseHand: Hand = new Hand([]);
        let house: House = new House(houseHand);
        
        return new Board(deal, house, player1);
    }

    public newDeal(): Board {
        let deal: Deal = new Deal(CardDeck.createStandard52CardDeck());
        let playerHand: Hand = new Hand([deal.pullCard()]);
        let player1: Player = new Player(playerHand);
        let houseHand: Hand = new Hand([deal.pullCard()]);
        let house: House = new House(houseHand);
        
        return new Board(deal, house, player1);
    }

    public dealPlayer(): Board {
        let card: Card = this.deal.pullCard();
        let player1: Player = this.player1.hit(card);

        return new Board(this.deal, this.house, player1);
    }

    public dealHouse() {
        let card: Card = this.deal.pullCard();
        let house: Player = this.house.hit(card);

        return new Board(this.deal, house, this.player1);
    }

    public isHouseWinning() {
        return (this.getHouseScore() >= this.getPlayerScore() ||
                this.getPlayerScore() > 21) && this.getHouseScore() <= 21;
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

    public getHouse(): House {
        return this.house;
    }

    public getPlayerHand(): Hand {
        return this.player1.getHand();
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

    public isGameOver(): boolean {
        return this.getHouseScore() >= this.SCORE_THRESHOLD ||
                this.getPlayerScore() > this.SCORE_THRESHOLD ||
                (this.getHouseScore() >= this.getPlayerScore() &&
                this.house.getHand().getCards().length > 1);
    }

    private constructor(deal: Deal, house: House, player1: Player) {
        this.deal = deal;
        this.house = house;
        this.player1 = player1;
    }
}
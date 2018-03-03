import Hand from './Hand';

export default class Deal {
    private readonly PLAYER = 1;
    private readonly HOUSE = 0;

    private cardCount: number = 0;
    private gameOver: boolean = false;
    private hands:Array<Hand>;

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
}
import { CardJsonInterface } from '../Card';

export default class BlackJackAction {
    private static readonly START_DEALING = 'START_DEALING';
    private static readonly HIT_CARD = 'HIT_CARD';
    private static readonly STAND = 'STAND';
    private static readonly SAVE_GAME = 'SAVE_GAME';
    private static readonly RESET_GAME = 'RESET_GAME';

    public static startDealing(handNumber: number) {
        return {
            type: this.START_DEALING,
            hand: handNumber,
        }
    }

    public static hitCard(card: CardJsonInterface) {
        return {
            type: this.HIT_CARD,
            card: card,
        }
    }

    public static stand() {
        return {
            type: this.STAND
        }
    }

    public static saveGame() {
        return {
            type: this.SAVE_GAME,
        }
    }

    public static resetGame() {
        return {
            type: this.RESET_GAME,
        }
    }
}
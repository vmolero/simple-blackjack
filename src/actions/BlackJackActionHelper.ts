import CardJsonInterface from './../interfaces/CardJsonInterface';
import BlackJackActionEnum from './BlackJackActionEnum';

interface BasicAction {
    type: BlackJackActionEnum;
}

interface StartDealAction extends BasicAction {
    hand: number;
}

interface HitCardAction extends BasicAction {
    card: CardJsonInterface;
}

export type BlackJackAction = BasicAction | StartDealAction | HitCardAction;

export default class BlackJackActionHelper {
    public static startDealing(handNumber: number): StartDealAction {
        return {
            type: BlackJackActionEnum.START_DEAL,
            hand: handNumber,
        };
    }

    public static hitCard(card: CardJsonInterface): HitCardAction {
        return {
            type: BlackJackActionEnum.HIT_CARD,
            card: card,
        }
    }

    public static stand(): BasicAction {
        return {
            type: BlackJackActionEnum.STAND
        }
    }

    public static saveGame(): BasicAction {
        return {
            type: BlackJackActionEnum.SAVE_GAME,
        }
    }

    public static resetGame(): BasicAction {
        return {
            type: BlackJackActionEnum.RESET_GAME,
        }
    }
}
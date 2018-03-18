import BlackJackStateInterface from './../interfaces/BlackJackStateInterface';
import { BlackJackAction } from './../actions/BlackJackActionHelper';
import CardJsonInterface from './../interfaces/CardJsonInterface';

export default class BlackJackReducer {
    private readonly initialState: BlackJackStateInterface = {
        handNumber: 0,
        playerGlobalScore: 0,
        houseGlobalScore: 0,
        playerHand: new Array<CardJsonInterface>(),
        houseHand: new Array<CardJsonInterface>(),
        deck: new Array<CardJsonInterface>(),
    };
    
    public reduceDeal(
        state: BlackJackStateInterface | undefined, 
        action: BlackJackAction
    ): BlackJackStateInterface {
        if (state === undefined) {
            return this.initialState;
        }
        return state;
    }
}
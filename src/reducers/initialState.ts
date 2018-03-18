import { BlackJackStateInterface } from "../store/BlackJackStateInterface";
import Board from "../Board";

const initialState: BlackJackStateInterface = {
    board: Board.newGame().toJSON(),
    handNumber: 0,
    playerScore: 0,
    houseScore: 0,
    btnDealerClass: '',
    btnHitClass: 'invisible',
    btnStandClass: 'invisible',
    message: 'Welcome to vmolero\'s BlackJack Game. Press \'Deal!\' to start playing.'
};

export default initialState;
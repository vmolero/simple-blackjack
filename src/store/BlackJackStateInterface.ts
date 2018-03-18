import { BoardJsonInterface } from "../Board";


export interface BlackJackStateInterface {
    board: BoardJsonInterface;
    handNumber: number;
    playerScore: number;
    houseScore: number;
    btnDealerClass: string;
    btnHitClass: string;
    btnStandClass: string;
    message: string;
  }